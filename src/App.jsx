import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, Sparkles, ArrowUpRight } from "lucide-react";

import Navbar from "./components/layouts/Navbar";
import DevIntro from "./components/Devintro";

import Hero from "./components/home/Hero";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";

import Footer from "./components/layouts/Footer";

function App() {
  // Intro sirf fresh browser session me ek baar chalega
  const [showIntro, setShowIntro] = useState(() => {
    return sessionStorage.getItem("devika_intro_seen") !== "true";
  });

  // ------------------------------------------
  // RESOURCES PAGE
  // ------------------------------------------
  if (window.location.pathname === "/resources") {
    return (
      <div className="min-h-screen bg-white">
        <Resources />
      </div>
    );
  }

  // ------------------------------------------
  // MAIN WEBSITE
  // ------------------------------------------
  return (
    <>
      {/* ================= NAVBAR ================= */}
      <Navbar />

      {/* ================= INTRO ================= */}
      <AnimatePresence mode="wait">
        {showIntro && (
          <DevIntro
            key="dev-intro"
            onFinish={() => {
              sessionStorage.setItem("devika_intro_seen", "true");
              setShowIntro(false);
            }}
          />
        )}
      </AnimatePresence>

      {/* ================= MAIN WEBSITE ================= */}
      <main>
        {/* HERO */}
        <section id="home">
          <Hero ready={!showIntro} />
        </section>

        {/* SERVICES */}
        <section id="services">
          <Services />
        </section>

        {/* PORTFOLIO */}
        <section id="portfolio">
          <Portfolio />
        </section>

        {/* PRICING */}
        <section id="pricing">
          <Pricing />
        </section>

        {/* ABOUT */}
        <section id="about">
          <About />
        </section>

        {/* CONTACT */}
        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* =================================================
          FLOATING RESOURCES BUTTON
      ================================================= */}

      <motion.a
        href="/resources"
        initial={{
          opacity: 0,
          x: 80,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          x: 0,
          scale: 1,
        }}
        transition={{
          delay: 1.8,
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1],
        }}
        whileHover={{
          scale: 1.06,
          y: -3,
        }}
        whileTap={{
          scale: 0.94,
        }}
        className="
          fixed
          right-3
          bottom-24
          z-[70]

          flex
          items-center
          gap-2

          rounded-full
          border
          border-sky-200

          bg-white
          px-3
          py-2.5

          shadow-[0_12px_35px_rgba(14,165,233,0.22)]

          backdrop-blur-xl

          sm:right-5
          sm:bottom-8
          sm:gap-2.5
          sm:px-4
          sm:py-3

          cursor-pointer
        "
      >
        {/* Glow */}
        <motion.span
          className="
            pointer-events-none
            absolute
            inset-0
            -z-10
            rounded-full
            bg-sky-400/30
            blur-xl
          "
          animate={{
            opacity: [0.25, 0.65, 0.25],
            scale: [0.95, 1.15, 0.95],
          }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Icon */}
        <motion.span
          animate={{
            y: [0, -3, 0],
            rotate: [0, -4, 4, 0],
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            flex
            h-8
            w-8
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-gradient-to-br
            from-sky-500
            to-sky-700
            text-white
            shadow-[0_5px_15px_rgba(14,165,233,0.35)]
            sm:h-9
            sm:w-9
          "
        >
          <BookOpen className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
        </motion.span>

        {/* Text */}
        <div className="flex flex-col leading-none">
          <span
            className="
              flex
              items-center
              gap-1
              text-[10px]
              font-semibold
              text-sky-500
              sm:text-[11px]
            "
          >
            <Sparkles className="h-2.5 w-2.5" />
            Free & Paid
          </span>

          <span
            className="
              mt-1
              text-xs
              font-bold
              text-slate-900
              sm:text-sm
            "
          >
            Resources
          </span>
        </div>

        {/* Arrow */}
        <motion.span
          animate={{
            x: [0, 3, 0],
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            ml-0.5
            flex
            h-6
            w-6
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-slate-900
            text-white
            shadow-sm
            sm:h-7
            sm:w-7
          "
        >
          <ArrowUpRight className="h-3.5 w-3.5" />
        </motion.span>
      </motion.a>

      {/* ================= FOOTER ================= */}
      <Footer />
    </>
  );
}

export default App;