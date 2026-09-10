import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Crown,
  FileText,
  Sparkles,
  Trophy,
  Zap,
  NotebookPen,
  Mail,
} from "lucide-react";

export default function ResourceHub() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* =====================================================
          HEADER
      ===================================================== */}
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:h-16 sm:px-6 lg:px-8">

          <a
            href="/"
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 transition hover:text-sky-600 sm:gap-2 sm:text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back</span>
          </a>

          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-blue-700 text-white shadow-md shadow-sky-500/20 sm:h-9 sm:w-9">
              <BookOpen className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>

            <span className="text-xs font-bold text-slate-900 sm:text-sm">
              Devika Resources
            </span>
          </div>

          <div className="w-12 sm:w-20" />
        </div>
      </header>


      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative px-4 pb-7 pt-8 sm:px-6 sm:pb-10 sm:pt-12 lg:px-8">

        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-48 w-48 -translate-x-1/2 rounded-full bg-sky-200/50 blur-3xl sm:h-72 sm:w-72" />

        <div className="mx-auto max-w-3xl text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="
              mx-auto
              inline-flex
              items-center
              gap-1.5
              rounded-full
              border
              border-sky-200
              bg-white
              px-3
              py-1.5
              text-[10px]
              font-bold
              text-sky-600
              shadow-sm
              sm:px-4
              sm:py-2
              sm:text-xs
            "
          >
            <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            Learn • Practice • Grow
          </motion.div>


          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="
              mt-4
              text-3xl
              font-black
              tracking-tight
              text-slate-950
              sm:mt-5
              sm:text-5xl
              lg:text-6xl
            "
          >
            Developer{" "}
            <span className="bg-gradient-to-r from-sky-500 to-blue-700 bg-clip-text text-transparent">
              Resources
            </span>
          </motion.h1>


          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="
              mx-auto
              mt-3
              max-w-xl
              px-2
              text-xs
              leading-5
              text-slate-500
              sm:mt-4
              sm:text-sm
              sm:leading-6
            "
          >
            Free resources to get started and premium resources to take your
            development journey further.
          </motion.p>

        </div>
      </section>


      {/* =====================================================
          RESOURCE CARDS
      ===================================================== */}
      <main className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">

        <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">


          {/* =================================================
              FREE RESOURCES
          ================================================= */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.985 }}
            className="
              group
              relative
              overflow-hidden
              rounded-2xl
              border
              border-sky-200
              bg-white
              p-4
              shadow-[0_12px_40px_rgba(14,165,233,0.10)]
              transition-shadow
              hover:shadow-[0_20px_55px_rgba(14,165,233,0.16)]
              sm:rounded-3xl
              sm:p-7
            "
          >

            <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-sky-100 blur-3xl sm:h-48 sm:w-48" />

            <div className="relative">

              {/* Header */}
              <div className="flex items-center justify-between gap-3">

                <div className="flex items-center gap-3">

                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-gradient-to-br
                      from-sky-400
                      to-blue-600
                      text-white
                      shadow-lg
                      shadow-sky-500/20
                      sm:h-14
                      sm:w-14
                      sm:rounded-2xl
                    "
                  >
                    <BookOpen className="h-5 w-5 sm:h-7 sm:w-7" />
                  </div>

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-wider text-sky-500 sm:text-[10px]">
                      Start Here
                    </p>

                    <h2 className="text-base font-black text-slate-950 sm:text-xl">
                      Free Resources
                    </h2>
                  </div>

                </div>

                <span
                  className="
                    shrink-0
                    rounded-full
                    bg-sky-50
                    px-2.5
                    py-1
                    text-[9px]
                    font-bold
                    text-sky-600
                    sm:px-3
                    sm:py-1.5
                    sm:text-xs
                  "
                >
                  FREE
                </span>

              </div>


              {/* Description */}
              <p
                className="
                  mt-4
                  text-xs
                  leading-5
                  text-slate-600
                  sm:mt-5
                  sm:text-sm
                  sm:leading-6
                "
              >
                Start learning with free notes, quizzes, practice material and
                useful developer guides.
              </p>


              {/* Features */}
              <div className="mt-4 grid grid-cols-2 gap-2 sm:mt-6 sm:grid-cols-4 sm:gap-3">

                <Feature
                  icon={FileText}
                  text="Free Notes"
                  color="sky"
                  href="/free-resources"
                />

                {/* DIRECT QUIZ LINK */}
                <Feature
                  icon={Trophy}
                  text="Quizzes"
                  color="sky"
                  href="/quiz"
                />

                <Feature
                  icon={Zap}
                  text="Practice"
                  color="sky"
                  href="/quiz?mode=practice"
                />

                {/* <Feature
                  icon={Sparkles}
                  text="Guides"
                  color="sky"
                /> */}

              </div>


              {/* CTA */}
              <a
                href="/free-resources"
                className="
                  mt-4
                  flex
                  items-center
                  justify-between
                  border-t
                  border-slate-100
                  pt-4
                  sm:mt-6
                  sm:pt-5
                "
              >
                <span className="text-xs font-bold text-slate-900 sm:text-sm">
                  Explore Free
                </span>

                <span
                  className="
                    flex
                    items-center
                    gap-1
                    text-[10px]
                    font-bold
                    text-sky-600
                    sm:text-xs
                  "
                >
                  Open
                  <ArrowRight className="h-3 w-3" />
                </span>
              </a>

            </div>
          </motion.div>



          {/* =================================================
              PREMIUM RESOURCES
          ================================================= */}
          <motion.a
            href="/resources"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.985 }}
            className="
              group
              relative
              overflow-hidden
              rounded-2xl
              border
              border-violet-400/30
              bg-slate-950
              p-4
              text-white
              shadow-[0_18px_50px_rgba(15,23,42,0.20)]
              transition-shadow
              hover:shadow-[0_22px_60px_rgba(15,23,42,0.30)]
              sm:rounded-3xl
              sm:p-7
            "
          >

            <div
              className="
                pointer-events-none
                absolute
                -right-20
                -top-20
                h-44
                w-44
                rounded-full
                bg-violet-500/20
                blur-3xl
                sm:h-60
                sm:w-60
              "
            />

            <div className="relative">

              {/* Header */}
              <div className="flex items-center justify-between gap-3">

                <div className="flex items-center gap-3">

                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-gradient-to-br
                      from-violet-500
                      to-purple-700
                      text-white
                      shadow-lg
                      shadow-violet-500/30
                      sm:h-14
                      sm:w-14
                      sm:rounded-2xl
                    "
                  >
                    <Crown className="h-5 w-5 sm:h-7 sm:w-7" />
                  </div>

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-wider text-violet-300 sm:text-[10px]">
                      Go Deeper
                    </p>

                    <h2 className="text-base font-black sm:text-xl">
                      Premium Resources
                    </h2>
                  </div>

                </div>

                <span
                  className="
                    shrink-0
                    rounded-full
                    bg-violet-500/15
                    px-2.5
                    py-1
                    text-[9px]
                    font-bold
                    text-violet-300
                    ring-1
                    ring-violet-400/20
                    sm:px-3
                    sm:py-1.5
                    sm:text-xs
                  "
                >
                  PREMIUM
                </span>

              </div>


              {/* Description */}
              <p
                className="
                  mt-4
                  text-xs
                  leading-5
                  text-slate-300
                  sm:mt-5
                  sm:text-sm
                  sm:leading-6
                "
              >
                Go deeper with structured roadmaps, interview preparation,
                detailed notes and developer resource packs.
              </p>


              {/* Features */}
              <div className="mt-4 grid grid-cols-2 gap-2 sm:mt-6 sm:grid-cols-4 sm:gap-3">

                <Feature
                  icon={FileText}
                  text="Detailed Notes"
                  color="violet"
                  dark
                />

                <Feature
                  icon={Trophy}
                  text="Interview"
                  color="violet"
                  dark
                />

                <Feature
                  icon={Zap}
                  text="Roadmaps"
                  color="violet"
                  dark
                />

                <Feature
                  icon={Sparkles}
                  text="Resource Packs"
                  color="violet"
                  dark
                />

              </div>


              {/* CTA */}
              <div
                className="
                  mt-4
                  flex
                  items-center
                  justify-between
                  border-t
                  border-white/10
                  pt-4
                  sm:mt-6
                  sm:pt-5
                "
              >
                <span className="text-xs font-bold sm:text-sm">
                  Explore Premium
                </span>

                <span
                  className="
                    flex
                    items-center
                    gap-1
                    text-[10px]
                    font-bold
                    text-violet-300
                    sm:text-xs
                  "
                >
                  View Resources
                  <ArrowRight className="h-3 w-3" />
                </span>
              </div>

            </div>
          </motion.a>

        </div>



        {/* =================================================
            CUSTOM NOTES
        ================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.18 }}
          className="mt-5 sm:mt-7"
        >
          <div
            className="
              group
              relative
              overflow-hidden
              rounded-2xl
              border
              border-sky-200
              bg-white
              shadow-[0_15px_45px_rgba(14,165,233,0.10)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-[0_22px_55px_rgba(14,165,233,0.16)]
              sm:rounded-3xl
            "
          >

            {/* Background Glow */}
            <div
              className="
                pointer-events-none
                absolute
                -right-20
                -top-20
                h-48
                w-48
                rounded-full
                bg-sky-100
                blur-3xl
                sm:h-64
                sm:w-64
              "
            />

            <div
              className="
                relative
                flex
                flex-col
                gap-6
                p-5
                sm:p-7
                lg:flex-row
                lg:items-center
                lg:justify-between
                lg:gap-10
              "
            >

              {/* Left Content */}
              <div className="min-w-0 flex-1">

                <div className="flex items-start gap-3 sm:gap-4">

                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-gradient-to-br
                      from-sky-400
                      to-blue-600
                      text-white
                      shadow-lg
                      shadow-sky-500/20
                      sm:h-14
                      sm:w-14
                      sm:rounded-2xl
                    "
                  >
                    <NotebookPen className="h-5 w-5 sm:h-7 sm:w-7" />
                  </div>

                  <div className="min-w-0">

                    <div className="flex flex-wrap items-center gap-2">

                      <p
                        className="
                          text-[9px]
                          font-bold
                          uppercase
                          tracking-wider
                          text-sky-500
                          sm:text-[10px]
                        "
                      >
                        Personalized Learning
                      </p>

                      <span
                        className="
                          rounded-full
                          bg-sky-50
                          px-2
                          py-0.5
                          text-[8px]
                          font-bold
                          text-sky-600
                          ring-1
                          ring-sky-100
                          sm:text-[9px]
                        "
                      >
                        PAID SERVICE
                      </span>

                    </div>

                    <h2
                      className="
                        mt-1.5
                        text-xl
                        font-black
                        tracking-tight
                        text-slate-950
                        sm:text-2xl
                      "
                    >
                      Custom Notes
                    </h2>

                  </div>
                </div>


                <p
                  className="
                    mt-4
                    max-w-2xl
                    text-xs
                    leading-5
                    text-slate-600
                    sm:mt-5
                    sm:text-sm
                    sm:leading-6
                  "
                >
                  Need notes made specifically for your syllabus, subject,
                  topic, or learning goal? Get personalized notes prepared
                  according to your requirements.
                </p>


                {/* Small Features */}
                <div
                  className="
                    mt-4
                    flex
                    flex-wrap
                    gap-2
                    sm:mt-5
                    sm:gap-3
                  "
                >

                  <span
                    className="
                      inline-flex
                      items-center
                      gap-1.5
                      rounded-lg
                      bg-slate-50
                      px-2.5
                      py-1.5
                      text-[9px]
                      font-semibold
                      text-slate-600
                      sm:rounded-xl
                      sm:px-3
                      sm:py-2
                      sm:text-xs
                    "
                  >
                    <FileText className="h-3.5 w-3.5 text-sky-500" />
                    Personalized Content
                  </span>

                  <span
                    className="
                      inline-flex
                      items-center
                      gap-1.5
                      rounded-lg
                      bg-slate-50
                      px-2.5
                      py-1.5
                      text-[9px]
                      font-semibold
                      text-slate-600
                      sm:rounded-xl
                      sm:px-3
                      sm:py-2
                      sm:text-xs
                    "
                  >
                    <Sparkles className="h-3.5 w-3.5 text-sky-500" />
                    Based on Your Requirements
                  </span>

                </div>

              </div>


              {/* RIGHT CTA */}
              <div className="shrink-0 lg:w-auto">

                <a
                  href="/custom-notes"
                  className="
                    group/btn
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-slate-900
                    px-5
                    py-3
                    text-xs
                    font-bold
                    text-white
                    shadow-[0_8px_20px_rgba(15,23,42,0.15)]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-slate-800
                    hover:shadow-[0_12px_28px_rgba(15,23,42,0.20)]
                    sm:px-6
                    sm:py-3.5
                    sm:text-sm
                    lg:w-auto
                  "
                >
                  <Mail className="h-4 w-4" />

                  Request Custom Notes

                  <ArrowRight
                    className="
                      h-3.5
                      w-3.5
                      transition-transform
                      duration-300
                      group-hover/btn:translate-x-1
                      sm:h-4
                      sm:w-4
                    "
                  />
                </a>

                <p
                  className="
                    mt-2
                    text-center
                    text-[9px]
                    font-medium
                    text-slate-400
                    sm:text-[10px]
                    lg:text-right
                  "
                >
                  Pricing depends on your requirements
                </p>

              </div>

            </div>
          </div>
        </motion.div>


        {/* =================================================
            SMALL INFO
        ================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mx-auto mt-7 max-w-2xl text-center sm:mt-10"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-[9px] font-semibold text-slate-400 shadow-sm sm:px-4 sm:text-xs">
            <BookOpen className="h-3 w-3 text-sky-500 sm:h-3.5 sm:w-3.5" />

            Start free and upgrade when you're ready
          </div>
        </motion.div>

      </main>


      {/* =====================================================
          FLOATING PREMIUM BUTTON
      ===================================================== */}
      <motion.a
        href="/resources"
        initial={{ opacity: 0, scale: 0.8, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          delay: 0.7,
          duration: 0.55,
          ease: [0.16, 1, 0.3, 1],
        }}
        whileHover={{
          scale: 1.05,
          y: -2,
        }}
        whileTap={{
          scale: 0.94,
        }}
        aria-label="Open Premium Resources"
        className="
          fixed
          bottom-4
          right-3
          z-[70]
          flex
          items-center
          gap-1.5
          rounded-full
          border
          border-violet-400/40
          bg-slate-950
          px-2.5
          py-2
          text-white
          shadow-[0_10px_30px_rgba(124,58,237,0.30)]
          sm:bottom-6
          sm:right-5
          sm:gap-2
          sm:px-3.5
          sm:py-2.5
        "
      >

        <motion.span
          className="
            pointer-events-none
            absolute
            inset-0
            -z-10
            rounded-full
            bg-violet-500/30
            blur-xl
          "
          animate={{
            opacity: [0.2, 0.55, 0.2],
            scale: [0.95, 1.08, 0.95],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <span
          className="
            flex
            h-7
            w-7
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-gradient-to-br
            from-violet-500
            to-purple-700
            shadow-md
            shadow-violet-500/30
            sm:h-8
            sm:w-8
          "
        >
          <Crown className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
        </span>

        <span className="flex flex-col leading-none">
          <span className="text-[7px] font-semibold text-violet-300 sm:text-[8px]">
            Go Deeper
          </span>

          <span className="mt-0.5 text-[9px] font-bold sm:text-[11px]">
            Premium Resources
          </span>
        </span>

        <motion.span
          animate={{ x: [0, 2, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            flex
            h-6
            w-6
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-white
            text-slate-950
            sm:h-7
            sm:w-7
          "
        >
          <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
        </motion.span>

      </motion.a>


      {/* =====================================================
          FOOTER
      ===================================================== */}
      <footer className="border-t border-slate-200 bg-white px-4 py-8 sm:px-6 sm:py-10">

        <div className="mx-auto max-w-5xl">

          <div
            className="
              flex
              flex-col
              items-center
              justify-between
              gap-5
              text-center
              sm:flex-row
              sm:text-left
            "
          >

            {/* Brand */}
            <div className="flex items-center gap-3">

              <div
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-sky-50
                  text-sky-600
                  sm:h-10
                  sm:w-10
                "
              >
                <BookOpen className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>

              <div>
                <h3 className="text-sm font-black text-slate-900 sm:text-base">
                  Devika Resources
                </h3>

                <p className="mt-0.5 text-[10px] text-slate-400 sm:text-xs">
                  Learn. Practice. Build.
                </p>
              </div>

            </div>


            {/* Footer Links */}
            <div
              className="
                flex
                flex-wrap
                items-center
                justify-center
                gap-x-4
                gap-y-2
                text-[10px]
                font-semibold
                text-slate-500
                sm:gap-5
                sm:text-xs
              "
            >

              <a
                href="/"
                className="transition hover:text-sky-600"
              >
                Home
              </a>

              <a
                href="/free-resources"
                className="transition hover:text-sky-600"
              >
                Free Resources
              </a>

              <a
                href="/resources"
                className="transition hover:text-sky-600"
              >
                Premium Resources
              </a>

              <a
                href="/custom-notes"
                className="transition hover:text-sky-600"
              >
                Custom Notes
              </a>

              <a
                href="/contact"
                className="transition hover:text-sky-600"
              >
                Contact
              </a>

            </div>

          </div>


          {/* Bottom */}
          <div
            className="
              mt-6
              border-t
              border-slate-100
              pt-5
              text-center
              sm:mt-7
              sm:pt-6
            "
          >

            <p className="text-[9px] leading-4 text-slate-400 sm:text-xs">
              © {new Date().getFullYear()} Devika Resources. All rights reserved.
            </p>

          </div>

        </div>
      </footer>

    </div>
  );
}


/* =========================================================
   FEATURE COMPONENT
========================================================= */

function Feature({
  icon: Icon,
  text,
  color,
  dark = false,
  href,
}) {
  const iconColor =
    color === "violet"
      ? "text-violet-400"
      : "text-sky-500";

  const className = `
    flex
    items-center
    gap-1.5
    rounded-lg
    px-2.5
    py-2
    text-[9px]
    font-semibold
    transition-all
    duration-200
    sm:rounded-xl
    sm:px-3
    sm:py-3
    sm:text-xs
    ${
      dark
        ? "bg-white/5 text-slate-300 ring-1 ring-white/5"
        : "bg-slate-50 text-slate-700"
    }
    ${
      href
        ? "cursor-pointer hover:bg-sky-50 hover:text-sky-700"
        : ""
    }
  `;

  const content = (
    <>
      <Icon
        className={`h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4 ${iconColor}`}
      />

      <span className="truncate">
        {text}
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={className}>
        {content}
      </a>
    );
  }

  return (
    <div className={className}>
      {content}
    </div>
  );
}