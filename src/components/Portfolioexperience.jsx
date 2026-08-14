import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import DevIntro from "./Devintro";

export default function PortfolioExperience() {
  const [showIntro, setShowIntro] = useState(true);

  // Lock page scroll while intro is visible
  useEffect(() => {
    document.body.style.overflow = showIntro ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [showIntro]);

  return (
    <AnimatePresence>
      {showIntro && (
        <DevIntro
          key="dev-intro"
          onFinish={() => setShowIntro(false)}
        />
      )}
    </AnimatePresence>
  );
}