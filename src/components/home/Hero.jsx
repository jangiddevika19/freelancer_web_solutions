"use client";

import {
  ArrowRight,
  Play,
  Code2,
  Coffee,
  Server,
  Layers,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

export default function Hero({ ready = true }) {
  const shouldReduceMotion = useReducedMotion();

  // Outer stage
  const stage = {
    hidden: {
      opacity: 0,
      scale: shouldReduceMotion ? 1 : 1.025,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: EASE,
      },
    },
  };

  // Left content stagger
  const leftStagger = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: shouldReduceMotion ? 0 : 0.55,
        staggerChildren: shouldReduceMotion ? 0 : 0.14,
      },
    },
  };

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 22,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: EASE,
      },
    },
  };

  const statsStagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

  // Right card reveal
  const cardReveal = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 28,
      scale: shouldReduceMotion ? 1 : 0.96,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: EASE,
        delay: shouldReduceMotion ? 0 : 0.2,
      },
    },
  };

  const badgeShadowRest =
    "0 10px 30px rgba(15,23,42,0.1)";

  const badgeShadowGlow =
    "0 14px 34px rgba(14,165,233,0.22)";

  const badgeShadowHover =
    "0 16px 38px rgba(14,165,233,0.3)";

  // Floating technology chips
  const floatingChip = (
    entranceDelay,
    floatDuration,
    floatDelay
  ) => ({
    wrapperInitial: {
      opacity: 0,
      scale: 0.85,
    },

    wrapperAnimate: {
      opacity: 1,
      scale: 1,
    },

    wrapperTransition: {
      duration: 0.5,
      ease: EASE,
      delay: shouldReduceMotion ? 0 : entranceDelay,
    },

    innerAnimate: shouldReduceMotion
      ? {}
      : {
          y: [0, -10, 0],
          boxShadow: [
            badgeShadowRest,
            badgeShadowGlow,
            badgeShadowRest,
          ],
        },

    innerTransition: {
      duration: floatDuration,
      repeat: shouldReduceMotion ? 0 : Infinity,
      ease: "easeInOut",
      delay: floatDelay,
    },
  });

  const reactChip = floatingChip(0.95, 6, 0.1);
  const javaChip = floatingChip(1.05, 7, 0.6);
  const springChip = floatingChip(1.15, 6.5, 1.1);
  const stackChip = floatingChip(1.0, 7.5, 0.35);

  return (
    <motion.section
      className="relative w-full overflow-hidden bg-white"
      initial="hidden"
      animate={ready ? "visible" : "hidden"}
      variants={stage}
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-gradient-to-b from-sky-100 via-sky-50 to-transparent blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#ffffff_0%,#ffffff_70%,#f8fafc_100%)]" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-6 py-24 sm:py-28 lg:grid-cols-2 lg:gap-12 lg:py-32">

        {/* ===================== LEFT: COPY ===================== */}

        <motion.div
          className="flex flex-col items-start text-left"
          initial="hidden"
          animate={ready ? "visible" : "hidden"}
          variants={leftStagger}
        >
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            className="
              mt-4
              mb-6
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-slate-200
              bg-white/80
              px-4
              py-1.5
              shadow-sm
              backdrop-blur-sm
              sm:mt-0
            "
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />

              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sky-500" />
            </span>

            <span className="text-xs font-medium tracking-wide text-slate-600">
              Freelance Digital Solutions
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl font-semibold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            Building{" "}
            <span className="bg-gradient-to-r from-sky-500 to-sky-700 bg-clip-text text-transparent">
              Modern Websites
            </span>{" "}
            That{" "}
            <span className="bg-gradient-to-r from-sky-500 to-sky-700 bg-clip-text text-transparent">
              Grow
            </span>{" "}
            Your Business
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-lg text-base leading-relaxed text-slate-500 sm:text-lg"
          >
            I design and build fast, responsive websites, web apps, and
            end-to-end digital solutions — crafted with clean code and a
            focus on real business results, from first sketch to production.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            {/* Start Project */}
            <motion.a
              href="#contact"
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-full
                bg-slate-900
                px-7
                py-3.5
                text-sm
                font-semibold
                tracking-tight
                text-white
                shadow-[0_1px_0_rgba(255,255,255,0.15)_inset,0_8px_20px_rgba(15,23,42,0.2)]
              "
              whileHover={
                shouldReduceMotion
                  ? {}
                  : {
                      y: -3,
                      scale: 1.02,
                      boxShadow:
                        "0 14px 32px rgba(15,23,42,0.3)",
                    }
              }
              whileTap={
                shouldReduceMotion
                  ? {}
                  : { scale: 0.97 }
              }
              transition={{
                type: "spring",
                stiffness: 420,
                damping: 26,
              }}
            >
              Start Your Project

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </motion.a>

            {/* Portfolio */}
            <motion.a
              href="#portfolio"
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-full
                border
                border-slate-200
                bg-white
                px-7
                py-3.5
                text-sm
                font-semibold
                tracking-tight
                text-slate-700
              "
              whileHover={
                shouldReduceMotion
                  ? {}
                  : {
                      y: -3,
                      scale: 1.02,
                      borderColor: "#cbd5e1",
                      backgroundColor: "#f8fafc",
                    }
              }
              whileTap={
                shouldReduceMotion
                  ? {}
                  : { scale: 0.97 }
              }
              transition={{
                type: "spring",
                stiffness: 420,
                damping: 26,
              }}
            >
              <Play className="h-3.5 w-3.5 text-slate-400 transition-colors duration-300 group-hover:text-sky-600" />

              View Portfolio
            </motion.a>
          </motion.div>

          {/* ===================== TRUST STRIP ===================== */}

          <motion.div
            variants={fadeUp}
            className="
              mt-14
              flex
              w-full
              items-center
              justify-between
              gap-2
              border-t
              border-slate-100
              pt-6
              sm:w-auto
              sm:justify-start
              sm:gap-8
            "
          >
            <motion.div
              initial="hidden"
              animate={ready ? "visible" : "hidden"}
              variants={statsStagger}
              className="contents"
            >
              {/* LinkedIn Followers */}
              <motion.div
                variants={fadeUp}
                className="min-w-0"
              >
                <p className="text-xl font-semibold text-slate-900 sm:text-2xl">
                  760+
                </p>

                <p className="whitespace-nowrap text-[9px] text-slate-400 sm:text-xs">
                  LinkedIn followers
                </p>
              </motion.div>

              <div className="h-8 w-px shrink-0 bg-slate-200" />

              {/* Projects */}
              <motion.div
                variants={fadeUp}
                className="min-w-0"
              >
                <p className="text-xl font-semibold text-slate-900 sm:text-2xl">
                  50+
                </p>

                <p className="whitespace-nowrap text-[9px] text-slate-400 sm:text-xs">
                  Projects & designs
                </p>
              </motion.div>

              <div className="h-8 w-px shrink-0 bg-slate-200" />

              {/* Experience */}
              <motion.div
                variants={fadeUp}
                className="min-w-0"
              >
                <p className="text-xl font-semibold text-slate-900 sm:text-2xl">
                  2+ yrs
                </p>

                <p className="whitespace-nowrap text-[9px] text-slate-400 sm:text-xs">
                  Development experience
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ===================== RIGHT: VISUAL ===================== */}

        <div className="relative mx-auto w-full max-w-md lg:mx-0">

          {/* Info Card */}
          <motion.div
            initial="hidden"
            animate={ready ? "visible" : "hidden"}
            variants={cardReveal}
            whileHover={
              shouldReduceMotion
                ? {}
                : { y: -4 }
            }
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 28,
            }}
            className="
              relative
              z-10
              flex
              flex-col
              items-center
              rounded-3xl
              border
              border-slate-200
              bg-white/90
              px-8
              py-10
              text-center
              shadow-[0_20px_60px_rgba(15,23,42,0.08)]
              backdrop-blur-sm
            "
          >
            {/* Mark */}
            <div className="relative flex h-16 w-16 items-center justify-center">
              <motion.span
                className="absolute inset-0 rounded-2xl bg-sky-400/30 blur-md"
                animate={
                  shouldReduceMotion
                    ? {}
                    : {
                        opacity: [0.35, 0.7, 0.35],
                        scale: [0.9, 1.05, 0.9],
                      }
                }
                transition={{
                  duration: 3.2,
                  repeat: shouldReduceMotion
                    ? 0
                    : Infinity,
                  ease: "easeInOut",
                }}
              />

              <div
                className="
                  relative
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-br
                  from-sky-500
                  to-sky-700
                  shadow-[0_10px_24px_rgba(14,165,233,0.28)]
                "
              >
                <Code2
                  className="h-7 w-7 text-white"
                  strokeWidth={2}
                />
              </div>
            </div>

            <h3 className="mt-6 text-lg font-semibold tracking-tight text-slate-900">
              Devika Jangid
            </h3>

            <p className="mt-1 text-sm font-medium text-sky-600">
              Full Stack Developer
            </p>

            <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-400">
              Turning ideas into fast, reliable, production-ready products.
            </p>

            <div className="mt-6 h-px w-12 bg-slate-100" />

            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              {["React", "Java", "Spring Boot"].map(
                (tag) => (
                  <motion.span
                    key={tag}
                    whileHover={
                      shouldReduceMotion
                        ? {}
                        : {
                            y: -2,
                            scale: 1.05,
                          }
                    }
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 22,
                    }}
                    className="
                      rounded-full
                      bg-slate-50
                      px-3
                      py-1
                      text-[11px]
                      font-medium
                      text-slate-500
                      ring-1
                      ring-slate-200
                    "
                  >
                    {tag}
                  </motion.span>
                )
              )}
            </div>

            {/* Availability */}
            <div
              className="
                mt-7
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-emerald-100
                bg-emerald-50/70
                px-4
                py-1.5
              "
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />

                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>

              <span className="text-xs font-medium text-emerald-700">
                Available for new projects
              </span>
            </div>
          </motion.div>

          {/* ===================== REACT CHIP ===================== */}

          <motion.div
            className="absolute -left-8 top-4 z-20"
            initial={reactChip.wrapperInitial}
            animate={
              ready
                ? reactChip.wrapperAnimate
                : reactChip.wrapperInitial
            }
            transition={reactChip.wrapperTransition}
          >
            <motion.div
              className="
                flex
                items-center
                gap-2.5
                rounded-2xl
                border
                border-slate-200
                bg-white
                px-4
                py-3
              "
              animate={reactChip.innerAnimate}
              transition={reactChip.innerTransition}
              whileHover={
                shouldReduceMotion
                  ? {}
                  : {
                      y: -6,
                      scale: 1.06,
                      boxShadow: badgeShadowHover,
                    }
              }
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                <Code2 className="h-4 w-4" />
              </span>

              <span className="text-xs font-semibold text-slate-700">
                React
              </span>
            </motion.div>
          </motion.div>

          {/* ===================== JAVA CHIP ===================== */}

          <motion.div
            className="absolute -right-6 top-24 z-20"
            initial={javaChip.wrapperInitial}
            animate={
              ready
                ? javaChip.wrapperAnimate
                : javaChip.wrapperInitial
            }
            transition={javaChip.wrapperTransition}
          >
            <motion.div
              className="
                flex
                items-center
                gap-2.5
                rounded-2xl
                border
                border-slate-200
                bg-white
                px-4
                py-3
              "
              animate={javaChip.innerAnimate}
              transition={javaChip.innerTransition}
              whileHover={
                shouldReduceMotion
                  ? {}
                  : {
                      y: -6,
                      scale: 1.06,
                      boxShadow: badgeShadowHover,
                    }
              }
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-50 text-slate-600">
                <Coffee className="h-4 w-4" />
              </span>

              <span className="text-xs font-semibold text-slate-700">
                Java
              </span>
            </motion.div>
          </motion.div>

          {/* ===================== SPRING BOOT CHIP ===================== */}

          <motion.div
            className="absolute -left-10 bottom-24 z-20"
            initial={springChip.wrapperInitial}
            animate={
              ready
                ? springChip.wrapperAnimate
                : springChip.wrapperInitial
            }
            transition={springChip.wrapperTransition}
          >
            <motion.div
              className="
                flex
                items-center
                gap-2.5
                rounded-2xl
                border
                border-slate-200
                bg-white
                px-4
                py-3
              "
              animate={springChip.innerAnimate}
              transition={springChip.innerTransition}
              whileHover={
                shouldReduceMotion
                  ? {}
                  : {
                      y: -6,
                      scale: 1.06,
                      boxShadow: badgeShadowHover,
                    }
              }
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <Server className="h-4 w-4" />
              </span>

              <span className="text-xs font-semibold text-slate-700">
                Spring Boot
              </span>
            </motion.div>
          </motion.div>

          {/* ===================== FULL STACK CHIP ===================== */}

          <motion.div
            className="absolute -bottom-6 right-4 z-20"
            initial={stackChip.wrapperInitial}
            animate={
              ready
                ? stackChip.wrapperAnimate
                : stackChip.wrapperInitial
            }
            transition={stackChip.wrapperTransition}
          >
            <motion.div
              className="
                flex
                items-center
                gap-2.5
                rounded-2xl
                border
                border-slate-200
                bg-white
                px-4
                py-3
              "
              animate={stackChip.innerAnimate}
              transition={stackChip.innerTransition}
              whileHover={
                shouldReduceMotion
                  ? {}
                  : {
                      y: -6,
                      scale: 1.06,
                      boxShadow: badgeShadowHover,
                    }
              }
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                <Layers className="h-4 w-4" />
              </span>

              <span className="text-xs font-semibold text-slate-700">
                Full Stack Development
              </span>
            </motion.div>
          </motion.div>

          {/* Soft glow behind card */}
          <div className="absolute inset-0 -z-10 translate-y-6 scale-95 rounded-3xl bg-sky-100/60 blur-3xl" />
        </div>
      </div>
    </motion.section>
  );
}