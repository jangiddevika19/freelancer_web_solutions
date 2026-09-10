import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function OnlineVisitors() {
  const [onlineCount, setOnlineCount] = useState(0);

  useEffect(() => {
    if (!supabase) {
      console.error("Supabase client is not available.");
      return;
    }

    let channel;
    let mounted = true;

    const connectPresence = async () => {
      try {
        const visitorId =
          typeof crypto !== "undefined" && crypto.randomUUID
            ? crypto.randomUUID()
            : `${Date.now()}-${Math.random()}`;

        channel = supabase.channel("website-online-visitors", {
          config: {
            presence: {
              key: visitorId,
            },
          },
        });

        channel
          .on("presence", { event: "sync" }, () => {
            if (!mounted) return;

            const state = channel.presenceState();

            // Each presence key = one active browser/session
            const count = Object.keys(state).length;

            setOnlineCount(count);
          })
          .on("presence", { event: "join" }, () => {
            if (!mounted) return;

            const state = channel.presenceState();
            setOnlineCount(Object.keys(state).length);
          })
          .on("presence", { event: "leave" }, () => {
            if (!mounted) return;

            const state = channel.presenceState();
            setOnlineCount(Object.keys(state).length);
          });

        channel.subscribe(async (status) => {
          console.log("Supabase Presence status:", status);

          if (status === "SUBSCRIBED") {
            console.log("Supabase Presence connected successfully.");

            await channel.track({
              visitor_id: visitorId,
              online_at: new Date().toISOString(),
            });
          }

          if (status === "CHANNEL_ERROR") {
            console.error(
              "Supabase Realtime CHANNEL_ERROR. Check Supabase Realtime settings."
            );
            if (mounted) setOnlineCount(0);
          }

          if (status === "TIMED_OUT") {
            console.error("Supabase Realtime connection timed out.");
            if (mounted) setOnlineCount(0);
          }

          if (status === "CLOSED") {
            console.warn("Supabase Realtime channel closed.");
          }
        });
      } catch (error) {
        console.error("Supabase Presence error:", error);

        if (mounted) {
          setOnlineCount(0);
        }
      }
    };

    connectPresence();

    return () => {
      mounted = false;

      if (channel) {
        supabase.removeChannel(channel);
      }
    };
  }, []);

  return (
    <div
      className="
        fixed left-3 bottom-4 z-[80]
        flex items-center gap-1.5
        rounded-full border border-slate-200
        bg-white/95 px-2.5 py-1.5
        shadow-[0_5px_18px_rgba(15,23,42,0.10)]
        backdrop-blur-xl
        text-[10px] font-medium text-slate-600
        sm:left-4 sm:bottom-5 sm:gap-2
        sm:px-3 sm:py-2 sm:text-xs
      "
    >
      <span className="relative flex h-1.5 w-1.5 shrink-0 sm:h-2 sm:w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
        <span className="relative inline-flex h-full w-full rounded-full bg-emerald-500" />
      </span>

      <span className="whitespace-nowrap">
        {onlineCount}{" "}
        {onlineCount === 1 ? "visitor" : "visitors"} online
      </span>
    </div>
  );
}