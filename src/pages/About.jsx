import { useEffect, useState } from "react";
import { Code2, Coffee, Server, Database, Layers, Braces } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const SKILLS = [
  { icon: Code2, label: "React.js" },
  { icon: Coffee, label: "Java" },
  { icon: Server, label: "Spring Boot" },
  { icon: Database, label: "MySQL" },
  { icon: Layers, label: "Tailwind CSS" },
  { icon: Braces, label: "REST APIs" },
];

const STATS = [
  { value: "760+", label: "LinkedIn followers" },
  { value: "2+", label: "Years Learning Experience" },
  { value: "100%", label: "Responsive Solutions" },
];

const EASE = [0.16, 1, 0.3, 1];

/* ---------------------------------------------------------------------- */
/*  Animated coding-editor visual (replaces the profile photo)             */
/*  — unchanged internally; only its outer wrapper (below) is restyled     */
/* ---------------------------------------------------------------------- */

const CODE_LINES = [
  { text: 'const developer = "Devika Jangid";', color: "text-sky-300" },
  { text: "\u00A0", color: "" },
  { text: 'import React from "react";', color: "text-fuchsia-300" },
  { text: 'import { SpringBoot } from "./backend";', color: "text-fuchsia-300" },
  { text: "\u00A0", color: "" },
  {
    text: 'const stack = ["Java", "React", "Spring Boot", "MySQL"];',
    color: "text-emerald-300",
  },
  { text: "\u00A0", color: "" },
  { text: 'developer.build("scalable_web_app");', color: "text-amber-300" },
];

const TERMINAL_LINES = [
  { text: "$ npm run dev", color: "text-slate-400" },
  {
    text: "> server running on http://localhost:3000 \u2713",
    color: "text-emerald-400",
  },
];

const CODE_TEXT = CODE_LINES.map((l) => l.text).join("\n");
const TERMINAL_TEXT = TERMINAL_LINES.map((l) => l.text).join("\n");
const CODE_LEN = CODE_TEXT.length;
const TOTAL_LEN = CODE_LEN + TERMINAL_TEXT.length;

const CHAR_DELAY = 26; // ms per character
const PAUSE_AFTER = 2000; // ms pause once fully typed before looping

function CodeEditorVisual() {
  const [typedCount, setTypedCount] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  // detect prefers-reduced-motion
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e) => setReducedMotion(e.matches);
    mq.addEventListener?.("change", handler);
    return () => mq.removeEventListener?.("change", handler);
  }, []);

  // typing loop
  useEffect(() => {
    if (reducedMotion) {
      setTypedCount(TOTAL_LEN);
      return;
    }

    let timeoutId;
    let count = 0;

    const step = () => {
      count += 1;
      setTypedCount(count);

      if (count < TOTAL_LEN) {
        timeoutId = setTimeout(step, CHAR_DELAY);
      } else {
        timeoutId = setTimeout(() => {
          count = 0;
          setTypedCount(0);
          timeoutId = setTimeout(step, CHAR_DELAY);
        }, PAUSE_AFTER);
      }
    };

    timeoutId = setTimeout(step, CHAR_DELAY);
    return () => clearTimeout(timeoutId);
  }, [reducedMotion]);

  const revealedCode = CODE_TEXT.slice(0, Math.min(typedCount, CODE_LEN)).split(
    "\n"
  );
  const terminalTyped = Math.max(0, typedCount - CODE_LEN);
  const revealedTerminal = TERMINAL_TEXT.slice(0, terminalTyped).split("\n");

  const codeActiveIndex =
    typedCount < CODE_LEN ? revealedCode.length - 1 : -1;
  const terminalActiveIndex =
    typedCount >= CODE_LEN && typedCount < TOTAL_LEN
      ? revealedTerminal.length - 1
      : -1;
  const showEndCursor = typedCount >= TOTAL_LEN;

  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <style>{`
        @keyframes devcard-blink { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }
        .devcard-cursor {
          display: inline-block;
          width: 6px;
          height: 0.95em;
          margin-left: 2px;
          vertical-align: -2px;
          background: #38bdf8;
          animation: devcard-blink 1s step-end infinite;
        }
        @keyframes devcard-float1 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-8px) translateX(4px); }
        }
        @keyframes devcard-float2 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(7px) translateX(-6px); }
        }
        @keyframes devcard-float3 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .devcard-float-1 { animation: devcard-float1 6s ease-in-out infinite; }
        .devcard-float-2 { animation: devcard-float2 7s ease-in-out infinite; }
        .devcard-float-3 { animation: devcard-float3 5.5s ease-in-out infinite; }
        @keyframes devcard-glow {
          0%, 100% { opacity: 0.25; }
          50% { opacity: 0.5; }
        }
        .devcard-glow { animation: devcard-glow 5s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .devcard-cursor,
          .devcard-float-1,
          .devcard-float-2,
          .devcard-float-3,
          .devcard-glow {
            animation: none !important;
          }
        }
      `}</style>

      {/* ambient glow behind the editor */}
      <div className="devcard-glow pointer-events-none absolute -top-10 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-sky-500/30 blur-3xl" />
      <div className="devcard-glow pointer-events-none absolute bottom-0 right-0 h-40 w-40 rounded-full bg-emerald-400/20 blur-3xl" />

      {/* subtle floating dev UI elements */}
      <div className="devcard-float-1 pointer-events-none absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-amber-300 ring-1 ring-white/10 backdrop-blur-sm">
        <Coffee className="h-4 w-4" />
      </div>
      <div className="devcard-float-2 pointer-events-none absolute bottom-16 left-4 flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-sky-300 ring-1 ring-white/10 backdrop-blur-sm">
        <Code2 className="h-4 w-4" />
      </div>
      <div className="devcard-float-3 pointer-events-none absolute right-6 top-1/2 flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 text-emerald-300 ring-1 ring-white/10 backdrop-blur-sm">
        <Server className="h-3.5 w-3.5" />
      </div>

      {/* editor chrome + code */}
      <div className="relative flex h-full w-full flex-col p-4 sm:p-5">
        {/* top bar */}
        <div className="flex items-center gap-2 border-b border-white/10 pb-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
          <span className="ml-3 truncate font-mono text-[10px] text-slate-400 sm:text-[11px]">
            Developer.jsx
          </span>
        </div>

        {/* code lines */}
        <div className="mt-3 flex-1 overflow-hidden font-mono text-[10.5px] leading-[1.75] sm:text-[12px]">
          {CODE_LINES.map((line, i) => {
            const isRevealed = i < revealedCode.length;
            const displayText = isRevealed ? revealedCode[i] : "";
            return (
              <div
                key={i}
                className={`whitespace-pre ${line.color}`}
              >
                {displayText || "\u00A0"}
                {i === codeActiveIndex && (
                  <span className="devcard-cursor" />
                )}
              </div>
            );
          })}
        </div>

        {/* terminal footer */}
        <div className="mt-3 border-t border-white/10 pt-3 font-mono text-[10.5px] leading-[1.75] sm:text-[12px]">
          {TERMINAL_LINES.map((line, i) => {
            const isRevealed = i < revealedTerminal.length;
            const displayText = isRevealed ? revealedTerminal[i] : "";
            return (
              <div key={i} className={`whitespace-pre ${line.color}`}>
                {displayText || "\u00A0"}
                {i === terminalActiveIndex && (
                  <span className="devcard-cursor" />
                )}
                {i === TERMINAL_LINES.length - 1 && showEndCursor && (
                  <span className="devcard-cursor" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------------- */
/*  About section                                                          */
/* ---------------------------------------------------------------------- */

export default function About() {
  const shouldReduceMotion = useReducedMotion();
  const viewport = { once: true, margin: "-100px" };

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
  };

  const leftStagger = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: shouldReduceMotion ? 0 : 0.08,
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
      },
    },
  };

  const skillsStagger = {
    hidden: {},
    visible: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.05 } },
  };

  const skillPop = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 10, scale: shouldReduceMotion ? 1 : 0.94 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: EASE } },
  };

  const statsStagger = {
    hidden: {},
    visible: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.1, delayChildren: 0.1 } },
  };

  const imageReveal = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24, scale: shouldReduceMotion ? 1 : 0.97 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.75, ease: EASE } },
  };

  const chipReveal = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 10, scale: shouldReduceMotion ? 1 : 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.55, ease: EASE, delay: shouldReduceMotion ? 0 : 0.35 },
    },
  };

  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-[linear-gradient(180deg,#f6f9fc_0%,#f8fafc_18%,#f9fafb_100%)] py-24 sm:py-28"
    >
      {/* handoff mark — a quiet continuation of the Hero's connective line,
          so the seam between sections reads as intentional, not a hard cut */}
      <motion.span
        initial={{ scaleY: 0, opacity: 0 }}
        whileInView={{ scaleY: 1, opacity: 1 }}
        viewport={viewport}
        transition={{ duration: 0.6, ease: EASE }}
        style={{ originY: 0 }}
        className="absolute left-1/2 top-0 hidden h-14 w-px -translate-x-1/2 bg-gradient-to-b from-slate-300 to-transparent lg:block"
      />

      {/* ===================== ambient background ===================== */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-1/2 top-10 h-[420px] w-[680px] translate-x-1/3 rounded-full bg-[radial-gradient(circle_at_50%_40%,rgba(56,189,248,0.14),rgba(56,189,248,0)_65%)] blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(99,143,255,0.10),rgba(99,143,255,0)_70%)] blur-3xl" />

        {/* faint structural grid, faded toward the edges — same language as Hero */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(circle at 30% 40%, #000 0%, transparent 65%)",
            WebkitMaskImage: "radial-gradient(circle at 30% 40%, #000 0%, transparent 65%)",
          }}
        />
      </div>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:gap-12">
        {/* IMAGE */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={imageReveal}
          className="relative mx-auto w-full max-w-sm lg:mx-0"
        >
          {/* ambient glow behind the card, matched to Hero's card glow */}
          <div className="absolute inset-0 -z-10 translate-y-6 scale-95 rounded-3xl bg-[radial-gradient(circle_at_50%_40%,rgba(56,189,248,0.22),rgba(56,189,248,0)_70%)] blur-3xl" />

          <motion.div
            whileHover={shouldReduceMotion ? {} : { y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 26 }}
            className="relative z-10 overflow-hidden rounded-3xl border border-white/70 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.06),0_30px_70px_-24px_rgba(15,23,42,0.18)] ring-1 ring-slate-900/[0.03]"
          >
            <div className="aspect-[4/5] w-full">
              <CodeEditorVisual />
            </div>
          </motion.div>

          {/* floating chip — restyled to match Hero's chip system */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={chipReveal}
            className="absolute -bottom-6 -right-4 z-20 sm:-right-8"
          >
            <motion.div
              animate={shouldReduceMotion ? {} : { y: [0, -6, 0] }}
              transition={{ duration: 7, repeat: shouldReduceMotion ? 0 : Infinity, ease: "easeInOut", delay: 0.6 }}
              whileHover={shouldReduceMotion ? {} : { y: -5, scale: 1.04, boxShadow: "0 16px 34px rgba(14,165,233,0.24)" }}
              className="flex items-center gap-2.5 rounded-2xl border border-slate-200/80 bg-white/90 px-4 py-3 shadow-[0_10px_28px_rgba(15,23,42,0.08)] backdrop-blur-md"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
                <Code2 className="h-4 w-4" />
              </span>
              <div className="leading-tight">
                <p className="text-xs font-semibold text-slate-900">
                  Available for freelance
                </p>
                <p className="text-[11px] text-slate-600">
                  Currently accepting projects
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={leftStagger}
          className="text-left"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-4 py-1.5 text-xs font-semibold tracking-wide text-slate-700 shadow-[0_1px_2px_rgba(15,23,42,0.04)] backdrop-blur-sm"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sky-500" />
            </span>
            About Me
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl"
          >
            Devika Jangid
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-2 text-sm font-semibold text-sky-700 sm:text-base"
          >
            Java Full Stack Developer &amp; Freelance Web Developer
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-xl text-base leading-[1.75] text-slate-700"
          >
            I create modern websites and scalable web applications that help
            businesses grow online. My focus is clean design, efficient code
            and reliable digital solutions.
          </motion.p>

          {/* skill badges */}
          <motion.div
            variants={skillsStagger}
            className="mt-8 flex flex-wrap gap-2.5"
          >
            {SKILLS.map(({ icon: Icon, label }) => (
              <motion.span
                key={label}
                variants={skillPop}
                whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.04 }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
                className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 px-3.5 py-1.5 text-xs font-semibold text-sky-800 ring-1 ring-sky-100 transition-colors duration-300 hover:bg-sky-100"
              >
                <Icon className="h-3.5 w-3.5" />
                {label}
              </motion.span>
            ))}
          </motion.div>

          {/* stats */}
          <motion.div
            variants={statsStagger}
            className="mt-12 grid grid-cols-3 border-t border-slate-200 pt-8"
          >
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                whileHover={shouldReduceMotion ? {} : { y: -2 }}
                transition={{ duration: 0.25, ease: EASE }}
                className={`flex min-w-0 flex-col ${
                  i > 0 ? "border-l border-slate-200 pl-3 sm:pl-6" : ""
                } ${i < STATS.length - 1 ? "pr-3 sm:pr-6" : ""}`}
              >
                <p className="text-xl font-bold tabular-nums tracking-tight text-slate-950 sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-[10px] font-medium uppercase leading-snug tracking-[0.04em] text-slate-500 sm:text-xs">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}