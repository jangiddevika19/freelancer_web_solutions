import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

/**
 * DevIntro — cinematic brand-film intro for Devika Web Solutions.
 *
 * Designed to be rendered as the direct child of an <AnimatePresence> owned
 * by the parent (see PortfolioExperience.jsx). This component does NOT
 * manage its own mount/unmount — it only defines its `exit` animation so the
 * parent's AnimatePresence can play it out when `showIntro` flips to false.
 *
 *   <AnimatePresence onExitComplete={...}>
 *     {showIntro && <DevIntro key="dev-intro" onFinish={() => setShowIntro(false)} />}
 *   </AnimatePresence>
 *
 * Sequence (≈2.7s at full motion, compressed under prefers-reduced-motion):
 *   1. spark    — ambient background wakes up, a single point of light builds
 *   2. brand    — "DEVIKA" + "WEB SOLUTIONS" wipe in together, on one line
 *   3. morph    — "WEB SOLUTIONS" dissolves/wipes out, "JANGID" wipes in —
 *                 "DEVIKA" itself never moves or fades, so the two words
 *                 read as one continuous identity, not two separate reveals
 *   4. identity — role + stack line stagger in beneath, held briefly
 *   5. exit     — the light source blooms outward, the whole scene lifts,
 *                 scales up a touch and dissolves — no flash, no hard cut
 */

const EASE = [0.16, 1, 0.3, 1];
const WIPE_EASE = [0.65, 0, 0.35, 1];

const TIMINGS = {
  spark: 450,
  brand: 700,
  brandHold: 250,
  morph: 550,
  identity: 550,
  identityHold: 500,
  exit: 650,
};

const TIMINGS_REDUCED = {
  spark: 0,
  brand: 200,
  brandHold: 150,
  morph: 200,
  identity: 200,
  identityHold: 300,
  exit: 250,
};

export default function DevIntro({ onFinish }) {
  const prefersReducedMotion = useReducedMotion();
  const T = prefersReducedMotion ? TIMINGS_REDUCED : TIMINGS;

  // spark -> brand -> morph -> identity -> exit
  const [phase, setPhase] = useState("spark");
  const timers = useRef([]);
  const done = useRef(false);

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  const finish = () => {
    if (done.current) return;
    done.current = true;
    clearTimers();
    onFinish?.();
  };

  useEffect(() => {
    const schedule = (fn, delay) => timers.current.push(setTimeout(fn, delay));

    let t = T.spark;
    schedule(() => setPhase("brand"), t);

    t += T.brand + T.brandHold;
    schedule(() => setPhase("morph"), t);

    t += T.morph;
    schedule(() => setPhase("identity"), t);

    t += T.identity + T.identityHold;
    schedule(() => setPhase("exit"), t);

    t += T.exit;
    schedule(finish, t);

    return clearTimers;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSkip = () => {
    setPhase("exit");
    finish();
  };

  const showSecondWord = phase === "brand" || phase === "morph" ? "brand" : "identity";
  const isExiting = phase === "exit";

  return (
    <motion.div
      style={styles.overlay}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={
        prefersReducedMotion
          ? { opacity: 0, transition: { duration: 0.25, ease: EASE } }
          : {
              opacity: 0,
              scale: 1.045,
              y: -28,
              transition: { duration: T.exit / 1000, ease: EASE },
            }
      }
    >
      {/* ---------- ambient animated background ---------- */}
      <div style={styles.bgLayer} aria-hidden="true">
        <motion.div
          style={{ ...styles.orb, ...styles.orbA }}
          animate={
            prefersReducedMotion
              ? { opacity: 0.5 }
              : {
                  x: [0, 40, -20, 0],
                  y: [0, -30, 20, 0],
                  scale: isExiting ? 1.4 : [1, 1.08, 1],
                  opacity: isExiting ? 0 : 0.55,
                }
          }
          transition={
            isExiting
              ? { duration: T.exit / 1000, ease: EASE }
              : { duration: 9, ease: "easeInOut", repeat: Infinity }
          }
        />
        <motion.div
          style={{ ...styles.orb, ...styles.orbB }}
          animate={
            prefersReducedMotion
              ? { opacity: 0.4 }
              : {
                  x: [0, -35, 25, 0],
                  y: [0, 25, -15, 0],
                  scale: isExiting ? 1.5 : [1, 1.1, 1],
                  opacity: isExiting ? 0 : 0.4,
                }
          }
          transition={
            isExiting
              ? { duration: T.exit / 1000, ease: EASE }
              : { duration: 11, ease: "easeInOut", repeat: Infinity }
          }
        />
        <div style={styles.grid} />
        <div style={styles.noise} />
      </div>

      {/* ---------- skip ---------- */}
      <button type="button" onClick={handleSkip} style={styles.skip} aria-label="Skip intro">
        SKIP
      </button>

      {/* ---------- center light / signature mark ---------- */}
      <motion.div
        style={styles.markGlow}
        initial={{ opacity: 0, scale: 0.3 }}
        animate={
          isExiting
            ? { opacity: 0, scale: 5.5, transition: { duration: T.exit / 1000, ease: EASE } }
            : { opacity: [0, 0.9, 0.55], scale: [0.3, 1.15, 1], transition: { duration: T.spark / 1000, ease: EASE } }
        }
      />

      {/* ---------- text stage ---------- */}
      <div style={styles.stage}>
        <div style={styles.wordRow}>
          {/* DEVIKA never re-mounts, never fades — this is the through-line
              that makes brand -> identity read as one continuous morph */}
          <motion.span
            layout
            style={styles.devika}
            initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
            animate={{
              opacity: phase === "spark" ? 0 : 1,
              clipPath: phase === "spark" ? "inset(0 100% 0 0)" : "inset(0 0% 0 0)",
              fontSize:
                phase === "identity" || phase === "exit"
                  ? "clamp(34px, 7.2vw, 60px)"
                  : "clamp(30px, 6.4vw, 52px)",
            }}
            transition={{ duration: T.brand / 1000, ease: WIPE_EASE }}
          >
            DEVIKA
          </motion.span>

          <AnimatePresence mode="wait">
            {showSecondWord === "brand" ? (
              <motion.span
                key="word-brand"
                style={styles.secondWordBrand}
                initial={{ opacity: 0, clipPath: "inset(0 0 0 100%)", filter: "blur(6px)" }}
                animate={{ opacity: 1, clipPath: "inset(0 0 0 0%)", filter: "blur(0px)" }}
                exit={{ opacity: 0, clipPath: "inset(0 0 0 100%)", filter: "blur(6px)" }}
                transition={{ duration: T.morph / 1000, ease: WIPE_EASE }}
              >
                WEB SOLUTIONS
              </motion.span>
            ) : (
              phase !== "spark" && (
                <motion.span
                  key="word-identity"
                  style={styles.secondWordIdentity}
                  initial={{ opacity: 0, clipPath: "inset(0 0 0 100%)", filter: "blur(6px)" }}
                  animate={{ opacity: 1, clipPath: "inset(0 0 0 0%)", filter: "blur(0px)" }}
                  exit={{ opacity: 0, filter: "blur(6px)", transition: { duration: T.exit / 1000, ease: EASE } }}
                  transition={{ duration: T.morph / 1000, ease: WIPE_EASE }}
                >
                  JANGID
                </motion.span>
              )
            )}
          </AnimatePresence>
        </div>

        <div style={styles.subRow}>
          <AnimatePresence mode="wait">
            {showSecondWord === "brand" && phase !== "spark" && (
              <motion.p
                key="tagline"
                style={styles.tagline}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6, transition: { duration: 0.25, ease: EASE } }}
                transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
              >
                WEB&nbsp;•&nbsp;PRODUCT&nbsp;•&nbsp;DIGITAL
              </motion.p>
            )}

            {showSecondWord === "identity" && (
              <motion.div
                key="identity-sub"
                style={styles.identitySub}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, transition: { duration: 0.25, ease: EASE } }}
                transition={{ duration: 0.5, ease: EASE, delay: 0.15 }}
              >
                <p style={styles.role}>FULL STACK DEVELOPER</p>
                <motion.p
                  style={styles.stack}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, ease: EASE, delay: 0.3 }}
                >
                  React.js · Java · Spring Boot · MySQL
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

const FONT = "'Helvetica Neue', Arial, sans-serif";

const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    zIndex: 9999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#FAFAF8",
    overflow: "hidden",
  },
  bgLayer: {
    position: "absolute",
    inset: 0,
    overflow: "hidden",
  },
  orb: {
    position: "absolute",
    borderRadius: "50%",
    filter: "blur(70px)",
    willChange: "transform, opacity",
  },
  orbA: {
    width: "56vw",
    height: "56vw",
    maxWidth: 640,
    maxHeight: 640,
    top: "-14%",
    left: "-10%",
    background:
      "radial-gradient(circle at 35% 35%, rgba(44,111,224,0.22), rgba(44,111,224,0) 70%)",
  },
  orbB: {
    width: "50vw",
    height: "50vw",
    maxWidth: 560,
    maxHeight: 560,
    bottom: "-16%",
    right: "-8%",
    background:
      "radial-gradient(circle at 60% 60%, rgba(120,160,255,0.18), rgba(120,160,255,0) 70%)",
  },
  grid: {
    position: "absolute",
    inset: 0,
    opacity: 0.035,
    backgroundImage:
      "linear-gradient(#1C1C1A 1px, transparent 1px), linear-gradient(90deg, #1C1C1A 1px, transparent 1px)",
    backgroundSize: "56px 56px",
    maskImage: "radial-gradient(circle at 50% 45%, #000 0%, transparent 72%)",
    WebkitMaskImage: "radial-gradient(circle at 50% 45%, #000 0%, transparent 72%)",
  },
  noise: {
    position: "absolute",
    inset: 0,
    opacity: 0.03,
    mixBlendMode: "multiply",
    backgroundImage:
      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
  },
  skip: {
    position: "absolute",
    top: "clamp(16px, 3vw, 28px)",
    right: "clamp(16px, 3vw, 28px)",
    zIndex: 2,
    background: "transparent",
    border: "none",
    padding: "8px 10px",
    fontSize: "11px",
    letterSpacing: "0.14em",
    fontWeight: 500,
    color: "#8A8A85",
    cursor: "pointer",
    fontFamily: FONT,
  },
  markGlow: {
    position: "absolute",
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    background: "#2C6FE0",
    boxShadow: "0 0 40px 14px rgba(44,111,224,0.35)",
    zIndex: 1,
  },
  stage: {
    position: "relative",
    zIndex: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "clamp(14px, 2.6vw, 20px)",
    padding: "0 24px",
    textAlign: "center",
  },
  wordRow: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "baseline",
    justifyContent: "center",
    columnGap: "clamp(10px, 2vw, 18px)",
    rowGap: "4px",
  },
  devika: {
    display: "inline-block",
    fontFamily: FONT,
    fontWeight: 600,
    letterSpacing: "0.02em",
    color: "#1C1C1A",
    whiteSpace: "nowrap",
  },
  secondWordBrand: {
    display: "inline-block",
    fontFamily: FONT,
    fontWeight: 400,
    fontSize: "clamp(14px, 2.6vw, 22px)",
    letterSpacing: "0.28em",
    color: "#55554F",
    whiteSpace: "nowrap",
  },
  secondWordIdentity: {
    display: "inline-block",
    fontFamily: FONT,
    fontWeight: 600,
    fontSize: "clamp(34px, 7.2vw, 60px)",
    letterSpacing: "0.01em",
    color: "#1C1C1A",
    whiteSpace: "nowrap",
  },
  subRow: {
    position: "relative",
    minHeight: "clamp(44px, 8vw, 60px)",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  tagline: {
    fontFamily: FONT,
    fontSize: "clamp(10px, 1.6vw, 12px)",
    letterSpacing: "0.28em",
    color: "#9A9A94",
    margin: 0,
  },
  identitySub: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "8px",
  },
  role: {
    fontFamily: FONT,
    fontWeight: 400,
    fontSize: "clamp(13px, 2.2vw, 16px)",
    letterSpacing: "0.24em",
    color: "#4A4A46",
    margin: 0,
  },
  stack: {
    fontFamily: FONT,
    fontSize: "clamp(11px, 1.6vw, 13px)",
    letterSpacing: "0.05em",
    color: "#2C6FE0",
    margin: 0,
  },
};