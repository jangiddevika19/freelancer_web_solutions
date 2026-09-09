import React from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Brain,
  CheckCircle2,
  Crown,
  Download,
  FileText,
  GraduationCap,
  LockKeyhole,
  PenLine,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";

import FREE_RESOURCES from "../data/freeResources";
import Footer from "../components/layouts/Footer";

const FreeResources = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-900">

      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-10">

          <a
            href="/resource-hub"
            className="group inline-flex items-center gap-2 rounded-full px-2 py-1.5 text-xs font-semibold text-slate-500 transition hover:text-sky-600 sm:text-sm"
          >
            <ArrowLeft
              size={16}
              className="transition-transform group-hover:-translate-x-1"
            />
            <span>Back to Resources</span>
          </a>

          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900 text-white">
              <BookOpen size={16} />
            </div>

            <span className="hidden text-sm font-bold text-slate-900 sm:block">
              Free Resources
            </span>
          </div>

        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-1/2 top-[-120px] h-72 w-72 -translate-x-1/2 rounded-full bg-sky-200/40 blur-3xl sm:h-96 sm:w-96" />

        <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-9 sm:px-6 sm:pb-14 sm:pt-12 lg:px-10">

          <div className="mx-auto max-w-3xl text-center">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-3 py-1.5 text-xs font-bold text-sky-600 shadow-sm sm:px-4 sm:py-2 sm:text-sm"
            >
              <Sparkles size={14} />
              Free Learning Resources
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl"
            >
              Learn First.
              <span className="block text-sky-600">
                Build Better.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:mt-5 sm:text-base sm:leading-7"
            >
              Practical developer resources to help you learn important
              concepts, revise quickly and prepare for interviews.
            </motion.p>

          </div>
        </div>
      </section>

      {/* ================= FREE RESOURCES ================= */}
      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 sm:pb-20 lg:px-10">

        {/* Section Heading */}
        <div className="mb-6 flex items-end justify-between gap-3 sm:mb-8">

          <div>
            <div className="flex items-center gap-2">
              <Target
                size={16}
                className="text-sky-600"
              />

              <p className="text-xs font-bold uppercase tracking-wider text-sky-600 sm:text-sm">
                Start Learning
              </p>
            </div>

            <h2 className="mt-1 text-2xl font-black tracking-tight sm:text-3xl">
              Free Resources
            </h2>

            <p className="mt-1.5 text-xs text-slate-500 sm:text-sm">
              Learn, revise and practice without payment.
            </p>
          </div>

          {/* Resource Count */}
          <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-600 shadow-sm sm:flex">
            <BookOpen
              size={15}
              className="text-sky-500"
            />
            {FREE_RESOURCES.length} Resources
          </div>

        </div>

        {/* ================= RESOURCE CARDS ================= */}
        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">

          {FREE_RESOURCES.map((resource, index) => (

            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.4,
                delay: index * 0.06,
              }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:border-sky-200 hover:shadow-xl sm:rounded-3xl sm:p-6"
            >

              {/* Card Glow */}
              <div className="pointer-events-none absolute -right-14 -top-14 h-32 w-32 rounded-full bg-sky-100/60 blur-3xl transition group-hover:bg-sky-200/70" />

              <div className="relative">

                {/* Top Badges */}
                <div className="mb-4 flex items-center justify-between gap-2">

                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-600 sm:px-3 sm:text-xs">
                    <CheckCircle2 size={12} />
                    FREE
                  </span>

                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold text-slate-500 sm:px-3 sm:text-xs">
                    {resource.level}
                  </span>

                </div>

                {/* Resource Icon */}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-600 transition duration-300 group-hover:scale-105 group-hover:bg-sky-100 sm:mb-5 sm:h-14 sm:w-14 sm:rounded-2xl">
                  <FileText
                    size={24}
                    className="sm:h-7 sm:w-7"
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg font-extrabold leading-snug text-slate-950 sm:text-xl">
                  {resource.title}
                </h3>

                {/* Description */}
                <p className="mt-2.5 min-h-0 text-sm leading-6 text-slate-500 sm:mt-3 sm:min-h-[72px]">
                  {resource.description}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">

                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-2.5 py-1.5 text-[11px] font-semibold text-slate-600">
                    <BookOpen size={12} />
                    {resource.category}
                  </span>

                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-2.5 py-1.5 text-[11px] font-semibold text-slate-600">
                    <FileText size={12} />
                    {resource.format}
                  </span>

                </div>

                {/* Download Button */}
                <button
  onClick={() => {
    if (resource.file) {
      window.open(resource.file, "_blank", "noopener,noreferrer");
    }
  }}
  className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-xs font-bold text-white transition-all duration-300 hover:bg-sky-600 sm:mt-6 sm:px-5 sm:py-3.5 sm:text-sm"
>
                  <Download size={16} />

                  Get Free Resource

                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>

              </div>
            </motion.div>

          ))}

        </div>
      </section>

      {/* ================= LEARNING TOOLS ================= */}
      <section className="border-y border-slate-200 bg-white">

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-10">

          <div className="mb-7 text-center sm:mb-9">

            <div className="flex items-center justify-center gap-2">
              <Zap
                size={16}
                className="text-sky-600"
              />

              <p className="text-xs font-bold uppercase tracking-wider text-sky-600 sm:text-sm">
                Learn & Practice
              </p>
            </div>

            <h2 className="mt-1 text-2xl font-black tracking-tight sm:text-3xl">
              More Ways to Learn
            </h2>

            <p className="mx-auto mt-2 max-w-xl text-xs leading-5 text-slate-500 sm:text-sm sm:leading-6">
              Practice your knowledge or request notes for a topic you want
              to learn.
            </p>

          </div>

          <div className="grid gap-4 md:grid-cols-2">

            {/* ================= QUIZ ================= */}
            <motion.div
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:border-sky-200 hover:bg-white hover:shadow-xl sm:rounded-3xl sm:p-7"
            >

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-sky-600 shadow-sm sm:h-14 sm:w-14 sm:rounded-2xl">
                <Brain size={25} />
              </div>

              <h3 className="mt-4 text-lg font-extrabold sm:mt-5 sm:text-xl">
                Developer Quiz
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Test your knowledge with practical questions on Java, SQL,
                React, HTML, CSS and computer fundamentals.
              </p>

              <a
                href="/quiz"
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-xs font-bold text-white transition hover:bg-sky-600 sm:mt-6 sm:px-5 sm:py-3.5 sm:text-sm"
              >
                Take the Quiz
                <ArrowRight size={16} />
              </a>

            </motion.div>

            {/* ================= CUSTOM NOTES ================= */}
            <motion.div
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:border-sky-200 hover:bg-white hover:shadow-xl sm:rounded-3xl sm:p-7"
            >

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-sky-600 shadow-sm sm:h-14 sm:w-14 sm:rounded-2xl">
                <PenLine size={25} />
              </div>

              <h3 className="mt-4 text-lg font-extrabold sm:mt-5 sm:text-xl">
                Request Custom Notes
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Can't find the notes you need? Tell us the topic and request
                custom notes for learning or revision.
              </p>

              <a
                href="/custom-notes"
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-xs font-bold text-white transition hover:bg-sky-600 sm:mt-6 sm:px-5 sm:py-3.5 sm:text-sm"
              >
                Request Notes
                <ArrowRight size={16} />
              </a>

            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= WHY FREE ================= */}
      <section className="bg-slate-50">

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-10">

          <div className="grid gap-4 md:grid-cols-3">

            {/* Learn */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-7">

              <BookOpen
                className="mb-4 text-sky-600"
                size={27}
              />

              <h3 className="text-base font-bold sm:text-lg">
                Learn the Basics
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Start with simple and practical concepts before moving to
                advanced topics.
              </p>

            </div>

            {/* Practice */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-7">

              <GraduationCap
                className="mb-4 text-sky-600"
                size={27}
              />

              <h3 className="text-base font-bold sm:text-lg">
                Practice & Revise
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Use these resources and quizzes for quick revision, practice
                and interview preparation.
              </p>

            </div>

            {/* Premium */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-7">

              <Sparkles
                className="mb-4 text-sky-600"
                size={27}
              />

              <h3 className="text-base font-bold sm:text-lg">
                Explore Premium
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Want deeper learning? Explore detailed premium resources
                designed for serious preparation.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* ================= PREMIUM CTA ================= */}
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-20">

        <div className="relative overflow-hidden rounded-3xl bg-slate-950 px-5 py-9 text-center text-white shadow-2xl sm:rounded-[2rem] sm:px-10 sm:py-12">

          {/* Glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-sky-500/15 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl" />

          <div className="relative">

            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-sky-300 ring-1 ring-white/10 sm:h-14 sm:w-14">
              <LockKeyhole size={25} />
            </div>

            <h2 className="mt-5 text-2xl font-black sm:text-3xl md:text-4xl">
              Ready for more?
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-300 sm:mt-4 sm:text-base">
              Explore detailed interview questions, developer notes,
              roadmaps and premium learning resources.
            </p>

            <a
              href="/resources"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-slate-900 transition hover:bg-sky-400 sm:mt-7 sm:w-auto sm:px-6"
            >
              Explore Premium Resources
              <ArrowRight size={17} />
            </a>

          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <Footer />

      {/* ================= FLOATING PREMIUM BUTTON ================= */}
      <motion.a
        href="/resources"
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        whileHover={{
          scale: 1.03,
        }}
        whileTap={{
          scale: 0.96,
        }}
        className="fixed bottom-4 right-3 z-[70] flex items-center gap-2 rounded-full border border-violet-300/30 bg-slate-950 px-3 py-2.5 text-xs font-bold text-white shadow-2xl shadow-slate-900/30 backdrop-blur-xl sm:bottom-5 sm:right-5 sm:px-4 sm:py-3 sm:text-sm"
        aria-label="Open Premium Resources"
      >

        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet-500/15 text-violet-300">
          <Crown size={15} />
        </span>

        <span className="whitespace-nowrap">
          Premium Resources
        </span>

        <ArrowRight
          size={15}
          className="shrink-0"
        />

      </motion.a>

    </div>
  );
};

export default FreeResources;