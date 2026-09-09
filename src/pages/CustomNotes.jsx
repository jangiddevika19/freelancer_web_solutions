
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  FileText,
  Mail,
  NotebookPen,
  Sparkles,
} from "lucide-react";

import Contact from "./Contact";

export default function CustomNotes() {
  const [showContact, setShowContact] = useState(false);

  const handleRequestNotes = () => {
    setShowContact(true);

    setTimeout(() => {
      const contactSection = document.getElementById(
        "custom-notes-contact"
      );

      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-900">

      {/* =====================================================
          STICKY HEADER
      ===================================================== */}
      <header
        className="
          sticky top-0 z-[100]
          border-b border-slate-200/70
          bg-white/95 backdrop-blur-xl
          shadow-sm
        "
      >
        <div
          className="
            mx-auto flex h-14 max-w-6xl
            items-center justify-between
            px-4
            sm:h-16 sm:px-6
            lg:px-8
          "
        >

          {/* BACK BUTTON */}
          <a
            href="/resource-hub"
            className="
              inline-flex items-center gap-1.5
              rounded-lg px-2 py-1.5
              text-[11px] font-semibold text-slate-600
              transition-all duration-200
              hover:bg-sky-50 hover:text-sky-600
              sm:gap-2 sm:px-3 sm:py-2 sm:text-sm
            "
          >
            <ArrowLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" />

            <span>Back to Resources</span>
          </a>

          {/* PAGE TITLE */}
          <div className="flex items-center gap-1.5 sm:gap-2">

            <div
              className="
                flex h-8 w-8 items-center justify-center
                rounded-xl
                bg-gradient-to-br from-sky-500 to-blue-700
                text-white
                shadow-md shadow-sky-500/20
                sm:h-9 sm:w-9
              "
            >
              <NotebookPen className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>

            <span
              className="
                text-[11px] font-bold text-slate-900
                sm:text-sm
              "
            >
              Custom Notes
            </span>

          </div>

          {/* RIGHT SPACER */}
          <div className="w-6 sm:w-28" />

        </div>
      </header>

      {/* =====================================================
          HERO
      ===================================================== */}
      <section
        className="
          relative overflow-hidden
          px-4 pb-9 pt-8
          sm:px-6 sm:pb-14 sm:pt-14
          lg:px-8
        "
      >

        <div
          className="
            pointer-events-none absolute left-1/2 top-0
            -z-10 h-52 w-52 -translate-x-1/2
            rounded-full bg-sky-200/50 blur-3xl
            sm:h-96 sm:w-96
          "
        />

        <div className="mx-auto max-w-4xl text-center">

          {/* BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="
              mx-auto inline-flex items-center gap-1.5
              rounded-full border border-sky-200
              bg-white px-3 py-1.5
              text-[9px] font-bold uppercase
              tracking-wide text-sky-600
              shadow-sm
              sm:gap-2 sm:px-4 sm:py-2 sm:text-xs
            "
          >
            <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            Personalized Learning
          </motion.div>

          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="
              mt-4 text-3xl font-black tracking-tight
              text-slate-950
              sm:mt-5 sm:text-5xl
              lg:text-6xl
            "
          >
            Custom{" "}
            <span
              className="
                bg-gradient-to-r from-sky-500 to-blue-700
                bg-clip-text text-transparent
              "
            >
              Notes
            </span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="
              mx-auto mt-3 max-w-xl px-2
              text-xs leading-5 text-slate-500
              sm:mt-4 sm:max-w-2xl
              sm:text-base sm:leading-7
            "
          >
            Get personalized study notes created according to your
            learning needs, topics, syllabus and requirements.
          </motion.p>

          {/* PAID SERVICE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="
              mx-auto mt-4 inline-flex items-center gap-1.5
              rounded-full bg-slate-900
              px-3 py-1.5
              text-[9px] font-bold text-white
              shadow-lg
              sm:mt-5 sm:gap-2
              sm:px-4 sm:py-2 sm:text-xs
            "
          >
            <NotebookPen
              className="
                h-3 w-3 text-sky-300
                sm:h-3.5 sm:w-3.5
              "
            />
            PAID SERVICE
          </motion.div>

        </div>
      </section>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}
      <main
        className="
          mx-auto max-w-6xl
          px-4 pb-14
          sm:px-6 sm:pb-20
          lg:px-8
        "
      >

        {/* ================= INTRO CARD ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            relative mx-auto max-w-4xl overflow-hidden
            rounded-2xl border border-sky-200
            bg-white p-4
            shadow-[0_12px_40px_rgba(14,165,233,0.08)]
            sm:rounded-3xl sm:p-8
          "
        >

          <div
            className="
              pointer-events-none absolute
              -right-16 -top-16
              h-36 w-36 rounded-full
              bg-sky-100 blur-3xl
              sm:-right-20 sm:-top-20
              sm:h-48 sm:w-48
            "
          />

          <div
            className="
              relative flex items-start
              gap-3 sm:items-center sm:gap-5
            "
          >

            <div
              className="
                flex h-11 w-11 shrink-0
                items-center justify-center
                rounded-xl
                bg-gradient-to-br
                from-sky-400 to-blue-600
                text-white
                shadow-lg shadow-sky-500/20
                sm:h-16 sm:w-16
                sm:rounded-2xl
              "
            >
              <FileText className="h-5 w-5 sm:h-7 sm:w-7" />
            </div>

            <div className="min-w-0">

              <p
                className="
                  text-[9px] font-bold uppercase
                  tracking-wider text-sky-500
                  sm:text-[10px]
                "
              >
                Made For You
              </p>

              <h2
                className="
                  mt-1 text-base font-black
                  leading-tight text-slate-950
                  sm:text-2xl
                "
              >
                Notes based on your requirements
              </h2>

              <p
                className="
                  mt-1.5 text-[11px]
                  leading-5 text-slate-500
                  sm:mt-2 sm:text-sm
                  sm:leading-6
                "
              >
                Whether you need notes for a particular topic,
                subject, technology or learning goal, you can share
                your requirements and discuss the details with me.
              </p>

            </div>
          </div>
        </motion.div>

        {/* ================= FEATURES ================= */}
        <section className="mt-8 sm:mt-12">

          <div className="mx-auto mb-5 max-w-2xl text-center sm:mb-7">

            <p
              className="
                text-[9px] font-bold uppercase
                tracking-wider text-sky-500
                sm:text-xs
              "
            >
              What You Can Request
            </p>

            <h2
              className="
                mt-1.5 text-xl font-black
                text-slate-950
                sm:mt-2 sm:text-3xl
              "
            >
              Personalized Notes
            </h2>

            <p
              className="
                mt-1.5 text-[11px]
                leading-5 text-slate-500
                sm:mt-2 sm:text-sm
              "
            >
              Tell me what you need and we can discuss
              the best format for you.
            </p>

          </div>

          <div
            className="
              grid gap-3
              sm:grid-cols-2 sm:gap-4
              lg:grid-cols-3
            "
          >

            <NoteFeature
              icon={BookOpen}
              title="Topic-Based Notes"
              description="Notes focused on specific subjects, topics or concepts."
            />

            <NoteFeature
              icon={FileText}
              title="Structured Content"
              description="Clear and organized explanations designed for easier learning."
            />

            <NoteFeature
              icon={NotebookPen}
              title="Custom Requirements"
              description="Share your preferred topics, level and learning requirements."
            />

          </div>
        </section>

        {/* ================= HOW IT WORKS ================= */}
        <section className="mt-9 sm:mt-14">

          <div
            className="
              overflow-hidden rounded-2xl
              border border-slate-200
              bg-white p-4
              shadow-[0_10px_35px_rgba(15,23,42,0.05)]
              sm:rounded-3xl sm:p-8
            "
          >

            <div className="text-center">

              <p
                className="
                  text-[9px] font-bold uppercase
                  tracking-wider text-sky-500
                  sm:text-xs
                "
              >
                Simple Process
              </p>

              <h2
                className="
                  mt-1.5 text-xl font-black
                  text-slate-950
                  sm:mt-2 sm:text-3xl
                "
              >
                How It Works
              </h2>

            </div>

            <div
              className="
                mt-5 grid gap-3
                sm:mt-8 sm:grid-cols-3 sm:gap-5
              "
            >

              <Step
                number="01"
                title="Share Requirements"
                description="Tell me the topics, subject or type of notes you need."
              />

              <Step
                number="02"
                title="Discuss Details"
                description="We discuss the requirements, format and other details through email."
              />

              <Step
                number="03"
                title="Get Your Notes"
                description="Your customized notes are prepared according to the agreed requirements."
              />

            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        {!showContact && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-9 sm:mt-14"
          >

            <div
              className="
                relative overflow-hidden
                rounded-2xl bg-slate-950
                px-4 py-7 text-center text-white
                shadow-[0_18px_50px_rgba(15,23,42,0.18)]
                sm:rounded-3xl
                sm:px-10 sm:py-12
              "
            >

              <div
                className="
                  pointer-events-none absolute
                  -right-16 -top-16
                  h-40 w-40 rounded-full
                  bg-sky-500/20 blur-3xl
                  sm:-right-20 sm:-top-20
                  sm:h-56 sm:w-56
                "
              />

              <div className="relative">

                <div
                  className="
                    mx-auto flex h-10 w-10
                    items-center justify-center
                    rounded-xl bg-sky-500/15
                    text-sky-300
                    ring-1 ring-sky-400/20
                    sm:h-12 sm:w-12
                    sm:rounded-2xl
                  "
                >
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>

                <h2
                  className="
                    mt-3 text-xl font-black
                    sm:mt-4 sm:text-3xl
                  "
                >
                  Need Custom Notes?
                </h2>

                <p
                  className="
                    mx-auto mt-2 max-w-xl
                    text-[11px] leading-5
                    text-slate-300
                    sm:mt-3 sm:text-sm
                    sm:leading-6
                  "
                >
                  Custom Notes are a paid service. Pricing
                  depends on your requirements. Share your
                  needs and discuss the details with me.
                </p>

                <p
                  className="
                    mt-2 text-[9px] font-semibold
                    leading-4 text-sky-300
                    sm:mt-3 sm:text-xs
                  "
                >
                  Most details and further communication
                  will be handled via email.
                </p>

                {/* REQUEST BUTTON */}
                <button
                  type="button"
                  onClick={handleRequestNotes}
                  className="
                    mx-auto mt-5 inline-flex
                    w-full max-w-xs
                    items-center justify-center gap-2
                    rounded-xl bg-white
                    px-4 py-2.5
                    text-[11px] font-bold
                    text-slate-950 shadow-lg
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:bg-sky-50
                    sm:mt-6 sm:w-auto
                    sm:px-6 sm:py-3.5
                    sm:text-sm
                  "
                >
                  Request Custom Notes
                  <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </button>

              </div>
            </div>
          </motion.section>
        )}

      </main>

      {/* =====================================================
          CONTACT FORM
          Renders on SAME Custom Notes page
      ===================================================== */}
      {showContact && (
        <section
          id="custom-notes-contact"
          className="
            border-t border-slate-200
            bg-white scroll-mt-16
          "
        >
          <Contact />
        </section>
      )}

      {/* ================= FOOTER ================= */}
      <footer
        className="
          border-t border-slate-200
          bg-white px-4 py-7
          sm:px-6 sm:py-10
        "
      >

        <div className="mx-auto max-w-5xl">

          <div
            className="
              flex flex-col items-center
              justify-between gap-5
              text-center
              sm:flex-row sm:text-left
            "
          >

            {/* BRAND */}
            <div className="flex items-center gap-3">

              <div
                className="
                  flex h-9 w-9 shrink-0
                  items-center justify-center
                  rounded-xl bg-sky-50
                  text-sky-600
                  sm:h-10 sm:w-10
                "
              >
                <NotebookPen className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>

              <div>

                <h3
                  className="
                    text-sm font-black
                    text-slate-900
                    sm:text-base
                  "
                >
                  Custom Notes
                </h3>

                <p
                  className="
                    mt-0.5 text-[9px]
                    text-slate-400
                    sm:text-xs
                  "
                >
                  Personalized Learning. Your Way.
                </p>

              </div>
            </div>

            {/* FOOTER LINKS */}
            <div
              className="
                flex flex-wrap
                items-center justify-center
                gap-x-4 gap-y-2
                text-[10px] font-semibold
                text-slate-500
                sm:gap-5 sm:text-xs
              "
            >

              <a
                href="/"
                className="transition hover:text-sky-600"
              >
                Home
              </a>

              <a
                href="/resource-hub"
                className="transition hover:text-sky-600"
              >
                Resource Hub
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

              <button
                type="button"
                onClick={() => {
                  if (!showContact) {
                    setShowContact(true);

                    setTimeout(() => {
                      document
                        .getElementById("custom-notes-contact")
                        ?.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                    }, 100);
                  } else {
                    document
                      .getElementById("custom-notes-contact")
                      ?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                  }
                }}
                className="transition hover:text-sky-600"
              >
                Contact
              </button>

            </div>
          </div>

          {/* COPYRIGHT */}
          <div
            className="
              mt-5 border-t border-slate-100
              pt-4 text-center
              sm:mt-7 sm:pt-6
            "
          >
            <p
              className="
                text-[9px] leading-4
                text-slate-400
                sm:text-xs
              "
            >
              © {new Date().getFullYear()} Devika Resources.
              All rights reserved.
            </p>
          </div>

        </div>
      </footer>
    </div>
  );
}

/* =========================================================
   NOTE FEATURE COMPONENT
========================================================= */

function NoteFeature({ icon: Icon, title, description }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="
        rounded-2xl border border-slate-200
        bg-white p-4
        shadow-[0_8px_25px_rgba(15,23,42,0.04)]
        transition-shadow
        hover:shadow-[0_15px_40px_rgba(14,165,233,0.10)]
        sm:p-5
      "
    >

      <div
        className="
          flex h-10 w-10
          items-center justify-center
          rounded-xl bg-sky-50
          text-sky-600
          sm:h-11 sm:w-11
        "
      >
        <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
      </div>

      <h3
        className="
          mt-3 text-[13px]
          font-black text-slate-900
          sm:mt-4 sm:text-base
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-1.5 text-[11px]
          leading-5 text-slate-500
          sm:mt-2 sm:text-xs
        "
      >
        {description}
      </p>

      <div
        className="
          mt-3 flex items-center gap-1.5
          text-[9px] font-semibold
          text-sky-600
          sm:mt-4 sm:text-[10px]
        "
      >
        <CheckCircle2 className="h-3.5 w-3.5" />
        Personalized
      </div>

    </motion.div>
  );
}

/* =========================================================
   PROCESS STEP COMPONENT
========================================================= */

function Step({ number, title, description }) {
  return (
    <div
      className="
        rounded-xl border border-slate-200
        bg-slate-50 p-4
        sm:rounded-2xl sm:p-5
      "
    >

      <span
        className="
          inline-flex rounded-full
          bg-sky-100 px-2.5 py-1
          text-[9px] font-black
          text-sky-600
        "
      >
        {number}
      </span>

      <h3
        className="
          mt-3 text-[13px]
          font-black text-slate-900
          sm:mt-4 sm:text-base
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-1.5 text-[11px]
          leading-5 text-slate-500
          sm:mt-2 sm:text-xs
        "
      >
        {description}
      </p>

    </div>
  );
}
