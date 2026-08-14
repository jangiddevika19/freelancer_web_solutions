import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  FileText,
  GitBranch,
  Layers3,
  Map,
  Search,
  Sparkles,
  Terminal,
  Users,
  X,
  Smartphone,
} from "lucide-react";

/* =========================================================
   EMAILJS CONFIG
========================================================= */

const EMAILJS_SERVICE_ID = "service_mkjrjyp";
const EMAILJS_TEMPLATE_ID = "template_3i9x41q";
const EMAILJS_PUBLIC_KEY = "_WgZhn1NzggSPGWvl";

/* =========================================================
   FAMPAY UPI
========================================================= */

const FAMPAY_UPI_ID = "devika19@fam";


/* =========================================================
   RESOURCE CATEGORIES
========================================================= */

const RESOURCE_CATEGORIES = [
  {
    id: "all",
    label: "All Resources",
  },
  {
    id: "roadmaps",
    label: "Roadmaps",
  },
  {
    id: "interview",
    label: "Interview",
  },
  {
    id: "notes",
    label: "Developer Notes",
  },
];

/* =========================================================
   RESOURCE DATA
========================================================= */

const RESOURCES = [
  {
    id: 0,
    icon: Sparkles,
    category: "notes",
    tag: "TRIAL",
    title: "Developer Resource Trial",
    description:
      "Try a premium developer resource for just ₹1 before purchasing a complete resource.",
    level: "Trial Access",
    format: "Trial Resource",
    price: "₹1",
    amount: "1",
    featured: true,
  },

  {
    id: 1,
    icon: BookOpen,
    category: "notes",
    tag: "NOTES",
    title: "Core Java Quick Notes",
    description:
      "Simple and practical Core Java notes covering important fundamentals, OOPs and commonly used concepts.",
    level: "Core Java",
    format: "PDF Notes",
    price: "₹99",
    amount: "99",
    featured: true,
  },

  {
    id: 2,
    icon: Database,
    category: "notes",
    tag: "CHEAT SHEET",
    title: "SQL Cheat Sheet",
    description:
      "Quick SQL revision sheet covering important commands, queries, joins, constraints and commonly used syntax.",
    level: "SQL Revision",
    format: "Cheat Sheet",
    price: "₹99",
    amount: "99",
    featured: true,
  },

  {
    id: 3,
    icon: Terminal,
    category: "interview",
    tag: "INTERVIEW",
    title: "Java Interview Questions",
    description:
      "Important Core Java and OOP interview questions explained in a simple and practical way.",
    level: "Interview Prep",
    format: "Questions",
    price: "₹149",
    amount: "149",
    featured: true,
  },

  {
    id: 4,
    icon: Database,
    category: "interview",
    tag: "INTERVIEW",
    title: "SQL Interview Questions",
    description:
      "Frequently asked SQL interview questions covering queries, joins, constraints and database concepts.",
    level: "Interview Prep",
    format: "Questions",
    price: "₹149",
    amount: "149",
    featured: false,
  },

  {
    id: 5,
    icon: Code2,
    category: "roadmaps",
    tag: "ROADMAP",
    title: "Frontend Developer Roadmap",
    description:
      "Learn HTML, CSS, JavaScript, React, Git and modern frontend development step by step.",
    level: "Beginner → Job Ready",
    format: "Roadmap",
    price: "₹199",
    amount: "199",
    featured: true,
  },

  {
    id: 6,
    icon: BookOpen,
    category: "notes",
    tag: "NOTES",
    title: "Core Java Developer Notes",
    description:
      "Clean notes covering Java fundamentals, OOPs, Collections, Exception Handling and important concepts.",
    level: "Core Java",
    format: "PDF Notes",
    price: "₹199",
    amount: "199",
    featured: false,
  },

  {
    id: 7,
    icon: Map,
    category: "roadmaps",
    tag: "ROADMAP",
    title: "Java Full Stack Roadmap",
    description:
      "A structured 22-page roadmap covering Core Java, OOPs, Spring Boot, databases, React and full-stack development.",
    level: "Beginner → Advanced",
    format: "22-Page Roadmap",
    price: "₹249",
    amount: "249",
    featured: true,
  },

  {
    id: 8,
    icon: BriefcaseBusiness,
    category: "interview",
    tag: "INTERVIEW",
    title: "Full Stack Interview Pack",
    description:
      "A practical collection of frontend, backend, database and project-based interview questions.",
    level: "Job Preparation",
    format: "Question Pack",
    price: "₹299",
    amount: "299",
    featured: true,
  },

  {
    id: 9,
    icon: Layers3,
    category: "notes",
    tag: "PACK",
    title: "Java Full Stack Developer Pack",
    description:
      "A complete developer preparation bundle combining roadmaps, notes and interview resources.",
    level: "Full Stack",
    format: "Resource Pack",
    price: "₹299",
    amount: "299",
    featured: true,
  },
];

/* =========================================================
   ANIMATION
========================================================= */

const EASE = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 20,
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

/* =========================================================
   RESOURCE CARD
========================================================= */

function ResourceCard({ resource, onExplore }) {
  const Icon = resource.icon;

  return (
    <motion.article
      layout
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      whileHover={{ y: -7 }}
      className="
        group
        relative
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-5
        shadow-[0_8px_30px_rgba(15,23,42,0.045)]
        transition-shadow
        duration-300
        hover:border-sky-200
        hover:shadow-[0_24px_55px_rgba(14,165,233,0.12)]
        sm:p-6
      "
    >
      <div
        className="
          pointer-events-none
          absolute
          -right-16
          -top-16
          h-32
          w-32
          rounded-full
          bg-sky-100/70
          blur-3xl
          transition-all
          duration-500
          group-hover:bg-sky-200/80
        "
      />

      {resource.id === 0 && (
        <div
          className="
            absolute
            left-4
            top-4
            z-10
            rounded-full
            bg-gradient-to-r
            from-emerald-500
            to-green-600
            px-2.5
            py-1
            text-[8px]
            font-black
            uppercase
            tracking-[0.12em]
            text-white
            shadow-lg
          "
        >
          Try for ₹1
        </div>
      )}

      <div className="relative flex items-start justify-between gap-3">
        <div
          className={`
            flex
            h-11
            w-11
            shrink-0
            items-center
            justify-center
            rounded-2xl
            ${
              resource.id === 0
                ? "bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100"
                : "bg-sky-50 text-sky-600 ring-1 ring-sky-100"
            }
            transition-all
            duration-300
            group-hover:scale-105
            group-hover:bg-sky-500
            group-hover:text-white
            sm:h-12
            sm:w-12
          `}
        >
          <Icon className="h-5 w-5" />
        </div>

        <span
          className="
            rounded-full
            border
            border-slate-200
            bg-slate-50
            px-2.5
            py-1.5
            text-[9px]
            font-bold
            tracking-[0.12em]
            text-slate-500
            sm:px-3
            sm:text-[10px]
          "
        >
          {resource.tag}
        </span>
      </div>

      <div className="relative mt-5 flex-1 sm:mt-6">
        <h3
          className="
            text-lg
            font-semibold
            tracking-tight
            text-slate-900
            sm:text-xl
          "
        >
          {resource.title}
        </h3>

        <p
          className="
            mt-2.5
            text-xs
            leading-5
            text-slate-500
            sm:mt-3
            sm:text-sm
            sm:leading-6
          "
        >
          {resource.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
          <span
            className="
              inline-flex
              items-center
              gap-1.5
              rounded-full
              bg-slate-50
              px-2.5
              py-1.5
              text-[10px]
              font-medium
              text-slate-500
              ring-1
              ring-slate-100
            "
          >
            <CheckCircle2 className="h-3 w-3 text-emerald-500" />
            {resource.level}
          </span>

          <span
            className="
              inline-flex
              items-center
              gap-1.5
              rounded-full
              bg-slate-50
              px-2.5
              py-1.5
              text-[10px]
              font-medium
              text-slate-500
              ring-1
              ring-slate-100
            "
          >
            <FileText className="h-3 w-3 text-sky-500" />
            {resource.format}
          </span>
        </div>
      </div>

      <div
        className="
          relative
          mt-6
          flex
          items-center
          justify-between
          gap-3
          border-t
          border-slate-100
          pt-4
          sm:mt-7
          sm:pt-5
        "
      >
        <div>
          <p
            className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.14em]
              text-slate-400
            "
          >
            Access
          </p>

          <p
            className={`
              mt-0.5
              font-bold
              ${
                resource.id === 0
                  ? "text-xl text-emerald-600"
                  : "text-lg text-slate-900 sm:text-xl"
              }
            `}
          >
            {resource.price}
          </p>
        </div>

        <motion.button
          type="button"
          onClick={() => onExplore(resource)}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
          className="
            inline-flex
            cursor-pointer
            items-center
            gap-1.5
            rounded-full
            bg-slate-900
            px-3.5
            py-2.5
            text-[11px]
            font-bold
            text-white
            shadow-[0_8px_20px_rgba(15,23,42,0.16)]
            transition-all
            duration-300
            hover:bg-sky-600
            sm:px-4
            sm:text-xs
          "
        >
          {resource.id === 0 ? "Try ₹1" : "Explore"}
          <ArrowUpRight className="h-3.5 w-3.5" />
        </motion.button>
      </div>
    </motion.article>
  );
}

/* =========================================================
   RESOURCE MODAL
========================================================= */

function ResourceModal({ resource, onClose }) {
  const [paymentStep, setPaymentStep] = useState("payment");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  if (!resource) return null;

  const Icon = resource.icon;
  const isTrial = resource.id === 0;

  /* -------------------------------------------------------
     OPEN FAMPAY
  ------------------------------------------------------- */

  const handlePayViaFampay = () => {
    if (
      !FAMPAY_UPI_ID ||
      FAMPAY_UPI_ID === "YOUR_FAMPAY_UPI_ID"
    ) {
      setError(
        "Fampay UPI ID is not configured yet. Please add your UPI ID in Resources.jsx."
      );
      return;
    }

    const upiUrl =
      `upi://pay?pa=${encodeURIComponent(
        FAMPAY_UPI_ID
      )}` +
      `&pn=${encodeURIComponent("Devika Web Solutions")}` +
      `&am=${encodeURIComponent(resource.amount)}` +
      `&cu=INR` +
      `&tn=${encodeURIComponent(
        resource.title
      )}`;

    window.location.href = upiUrl;
  };

  /* -------------------------------------------------------
     PAYMENT COMPLETED
  ------------------------------------------------------- */

  const handleCompletedPayment = () => {
    setError("");
    setPaymentStep("confirmation");
  };

  /* -------------------------------------------------------
     EMAILJS SUBMIT
  ------------------------------------------------------- */

  const handleSubmitConfirmation = async (event) => {
    event.preventDefault();

    if (sending) return;

    setSending(true);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const customerName =
      String(formData.get("name") || "").trim();

    const customerEmail =
      String(formData.get("email") || "").trim();

    const utr =
      String(formData.get("utr") || "").trim();

    const message =
      String(formData.get("message") || "").trim();

    if (!customerName || !customerEmail || !utr) {
      setError(
        "Please enter your name, email address and transaction ID / UTR."
      );
      setSending(false);
      return;
    }

    /*
      IMPORTANT:
      These names exactly match your EmailJS template:

      {{resource_title}}
      {{amount}}
      {{customer_name}}
      {{customer_email}}
      {{utr}}
      {{message}}
    */

    const templateParams = {
      resource_title: resource.title,
      amount: resource.price,

      customer_name: customerName,
      customer_email: customerEmail,

      utr: utr,

      message:
        message ||
        "No additional message was provided.",

      subject: `New Resource Payment Received - ${resource.title}`,

      reply_to: customerEmail,

      website: "Devika Web Solutions",
    };

    try {
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log(
        "EmailJS success:",
        response.status,
        response.text
      );

      /*
        SUCCESS ONLY AFTER EMAILJS SUCCESS.
        Clicking "I've Completed Payment" alone
        NEVER shows success.
      */

      setSubmitted(true);
    } catch (err) {
      console.error(
        "EmailJS Resource Payment Error:",
        err
      );

      setError(
        "Payment details could not be submitted. Please try again."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="
          fixed
          inset-0
          z-[100]
          flex
          items-center
          justify-center
          bg-slate-950/60
          px-3
          py-4
          backdrop-blur-md
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 18,
            scale: 0.97,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: 12,
            scale: 0.98,
          }}
          transition={{
            duration: 0.25,
            ease: EASE,
          }}
          onClick={(event) =>
            event.stopPropagation()
          }
          className="
            relative
            w-full
            max-w-[360px]
            max-h-[82vh]
            overflow-y-auto
            rounded-[22px]
            border
            border-white/80
            bg-white
            p-4
            shadow-[0_30px_80px_rgba(15,23,42,0.30)]
            sm:max-w-md
            sm:max-h-[88vh]
            sm:p-6
          "
        >
          {/* Glow */}

          <div
            className="
              pointer-events-none
              absolute
              -right-20
              -top-20
              h-36
              w-36
              rounded-full
              bg-sky-200/50
              blur-3xl
            "
          />

          {/* CLOSE */}

          <button
            type="button"
            onClick={onClose}
            className="
              absolute
              right-3
              top-3
              z-30
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-full
              border
              border-slate-200
              bg-white
              text-slate-500
              shadow-sm
              transition
              hover:bg-slate-950
              hover:text-white
            "
          >
            <X className="h-4 w-4" />
          </button>

          {/* =================================================
              SUCCESS
          ================================================= */}

          {submitted ? (
            <div className="relative py-6 text-center">
              <div
                className="
                  mx-auto
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  bg-emerald-50
                  text-emerald-600
                  ring-8
                  ring-emerald-50/60
                "
              >
                <CheckCircle2 className="h-7 w-7" />
              </div>

              <h2 className="mt-4 text-lg font-bold text-slate-900">
                Payment Submitted
              </h2>

              <p className="mx-auto mt-2 max-w-xs text-xs leading-5 text-slate-500">
                Your payment details have been submitted successfully.
              </p>

              <div
                className="
                  mt-4
                  rounded-xl
                  border
                  border-slate-200
                  bg-slate-50
                  p-3.5
                  text-left
                "
              >
                <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
                  Resource
                </p>

                <p className="mt-1 text-xs font-semibold text-slate-900">
                  {resource.title}
                </p>

                <div className="mt-2.5 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500">
                    Amount
                  </span>

                  <span className="text-xs font-bold text-slate-900">
                    {resource.price}
                  </span>
                </div>
              </div>

              <p className="mt-3 text-[9px] leading-4 text-slate-400">
                Your payment will be verified manually.
                Access details will be shared after confirmation.
              </p>

              <button
                type="button"
                onClick={onClose}
                className="
                  mt-4
                  w-full
                  rounded-xl
                  bg-slate-950
                  px-5
                  py-3
                  text-xs
                  font-bold
                  text-white
                  transition
                  hover:bg-sky-600
                "
              >
                Done
              </button>
            </div>
          ) : paymentStep === "confirmation" ? (
            /* =================================================
               CONFIRMATION FORM
            ================================================= */

            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  setPaymentStep("payment");
                  setError("");
                }}
                className="
                  mb-3
                  inline-flex
                  items-center
                  gap-1
                  text-[10px]
                  font-semibold
                  text-slate-500
                  transition
                  hover:text-sky-600
                "
              >
                <ArrowLeft className="h-3 w-3" />
                Back to payment
              </button>

              <div className="flex items-center gap-2.5 pr-8">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-gradient-to-br
                    from-sky-500
                    to-blue-700
                    text-white
                  "
                >
                  <CheckCircle2 className="h-4.5 w-4.5" />
                </div>

                <div>
                  <p className="text-[8px] font-bold uppercase tracking-[0.14em] text-sky-600">
                    Payment Confirmation
                  </p>

                  <h2 className="mt-0.5 text-base font-bold leading-tight text-slate-900">
                    Confirm your payment
                  </h2>
                </div>
              </div>

              <div
                className="
                  mt-4
                  rounded-xl
                  border
                  border-sky-100
                  bg-sky-50/70
                  p-3
                "
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <p className="text-[8px] font-bold uppercase tracking-[0.12em] text-slate-400">
                      Resource
                    </p>

                    <p className="mt-0.5 truncate text-xs font-bold text-slate-900">
                      {resource.title}
                    </p>
                  </div>

                  <span
                    className="
                      shrink-0
                      rounded-full
                      bg-white
                      px-2.5
                      py-1
                      text-[11px]
                      font-black
                      text-sky-600
                      shadow-sm
                    "
                  >
                    {resource.price}
                  </span>
                </div>
              </div>

              <form
                onSubmit={handleSubmitConfirmation}
                className="mt-4 space-y-2.5"
              >
                {/* NAME */}

                <div>
                  <label className="mb-1 block text-[9px] font-bold uppercase tracking-[0.12em] text-slate-500">
                    Your Name
                  </label>

                  <input
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Enter your name"
                    className="
                      w-full
                      rounded-lg
                      border
                      border-slate-200
                      bg-white
                      px-3
                      py-2.5
                      text-[11px]
                      text-slate-800
                      outline-none
                      transition
                      placeholder:text-slate-400
                      focus:border-sky-300
                      focus:ring-4
                      focus:ring-sky-50
                    "
                  />
                </div>

                {/* EMAIL */}

                <div>
                  <label className="mb-1 block text-[9px] font-bold uppercase tracking-[0.12em] text-slate-500">
                    Email Address
                  </label>

                  <input
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="Enter your email"
                    className="
                      w-full
                      rounded-lg
                      border
                      border-slate-200
                      bg-white
                      px-3
                      py-2.5
                      text-[11px]
                      text-slate-800
                      outline-none
                      transition
                      placeholder:text-slate-400
                      focus:border-sky-300
                      focus:ring-4
                      focus:ring-sky-50
                    "
                  />
                </div>

                {/* UTR */}

                <div>
                  <label className="mb-1 block text-[9px] font-bold uppercase tracking-[0.12em] text-slate-500">
                    Transaction ID / UTR
                  </label>

                  <input
                    name="utr"
                    type="text"
                    required
                    autoComplete="off"
                    placeholder="Enter transaction ID / UTR"
                    className="
                      w-full
                      rounded-lg
                      border
                      border-slate-200
                      bg-white
                      px-3
                      py-2.5
                      text-[11px]
                      text-slate-800
                      outline-none
                      transition
                      placeholder:text-slate-400
                      focus:border-sky-300
                      focus:ring-4
                      focus:ring-sky-50
                    "
                  />
                </div>

                {/* MESSAGE */}

                <div>
                  <label className="mb-1 block text-[9px] font-bold uppercase tracking-[0.12em] text-slate-500">
                    Message
                  </label>

                  <textarea
                    name="message"
                    rows={2}
                    placeholder="Optional message..."
                    className="
                      w-full
                      resize-none
                      rounded-lg
                      border
                      border-slate-200
                      bg-white
                      px-3
                      py-2.5
                      text-[11px]
                      text-slate-800
                      outline-none
                      transition
                      placeholder:text-slate-400
                      focus:border-sky-300
                      focus:ring-4
                      focus:ring-sky-50
                    "
                  />
                </div>

                {/* ERROR */}

                {error && (
                  <div
                    className="
                      rounded-lg
                      border
                      border-red-100
                      bg-red-50
                      px-3
                      py-2.5
                      text-[10px]
                      leading-4
                      text-red-600
                    "
                  >
                    {error}
                  </div>
                )}

                {/* SUBMIT */}

                <button
                  type="submit"
                  disabled={sending}
                  className="
                    group
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-lg
                    bg-gradient-to-r
                    from-slate-950
                    to-slate-800
                    px-5
                    py-3
                    text-[11px]
                    font-bold
                    text-white
                    shadow-[0_8px_20px_rgba(15,23,42,0.18)]
                    transition-all
                    hover:from-sky-600
                    hover:to-blue-700
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                  "
                >
                  {sending ? (
                    <>
                      <span
                        className="
                          h-3.5
                          w-3.5
                          animate-spin
                          rounded-full
                          border-2
                          border-white/30
                          border-t-white
                        "
                      />

                      Sending...
                    </>
                  ) : (
                    <>
                      Submit Payment Details
                      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>

              <p className="mt-2.5 text-center text-[8px] leading-3.5 text-slate-400">
                Please make sure your transaction ID / UTR is correct.
              </p>
            </div>
          ) : (
            /* =================================================
               PAYMENT SCREEN
            ================================================= */

            <>
              <div className="relative flex items-center gap-2.5 pr-8">
                <div
                  className={`
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    ${
                      isTrial
                        ? "bg-gradient-to-br from-emerald-500 to-green-600"
                        : "bg-gradient-to-br from-sky-500 to-blue-700"
                    }
                    text-white
                  `}
                >
                  <Icon className="h-4.5 w-4.5" />
                </div>

                <div className="min-w-0">
                  <span
                    className="
                      inline-flex
                      rounded-full
                      bg-sky-50
                      px-2
                      py-0.5
                      text-[8px]
                      font-bold
                      tracking-[0.14em]
                      text-sky-600
                    "
                  >
                    {resource.tag}
                  </span>

                  <h2 className="mt-0.5 truncate text-base font-bold leading-tight text-slate-900">
                    {resource.title}
                  </h2>
                </div>
              </div>

              <p className="relative mt-3 text-[11px] leading-4.5 text-slate-500">
                {resource.description}
              </p>

              <div className="relative mt-3 grid grid-cols-2 gap-1.5">
                {[
                  "Structured content",
                  "Practical resources",
                  "Interview friendly",
                  "Easy to revise",
                ].map((item) => (
                  <div
                    key={item}
                    className="
                      flex
                      items-center
                      gap-1.5
                      rounded-lg
                      border
                      border-slate-100
                      bg-slate-50/80
                      px-2
                      py-1.5
                      text-[9px]
                      font-medium
                      text-slate-600
                    "
                  >
                    <CheckCircle2 className="h-3 w-3 shrink-0 text-emerald-500" />

                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* PAYMENT BOX */}

              <div
                className="
                  relative
                  mt-3
                  overflow-hidden
                  rounded-xl
                  border
                  border-slate-200
                  bg-gradient-to-br
                  from-slate-50
                  via-white
                  to-sky-50
                  p-3
                "
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[8px] font-bold uppercase tracking-[0.14em] text-slate-400">
                      Get access
                    </p>

                    <p
                      className={`
                        mt-0.5
                        text-lg
                        font-black
                        ${
                          isTrial
                            ? "text-emerald-600"
                            : "text-slate-900"
                        }
                      `}
                    >
                      {resource.price}
                    </p>
                  </div>

                  <div className="rounded-full bg-emerald-50 px-2 py-1 text-[8px] font-bold text-emerald-600">
                    ONE-TIME
                  </div>
                </div>

                {/* QR */}

                <div
                  className="
                    mt-2.5
                    flex
                    flex-col
                    items-center
                    rounded-lg
                    border
                    border-slate-100
                    bg-white
                    p-2.5
                    shadow-sm
                  "
                >
                  <img
                    src="/payment-qr.png"
                    alt="Fampay UPI Payment QR"
                    className="
                      h-24
                      w-24
                      rounded-lg
                      object-contain
                      sm:h-28
                      sm:w-28
                    "
                  />

                  <p className="mt-1.5 text-[9px] font-semibold text-slate-500">
                    Scan & Pay {resource.price}
                  </p>

                  {isTrial && (
                    <span className="mt-0.5 text-[8px] font-semibold text-emerald-600">
                      Trial access — only ₹1
                    </span>
                  )}

                  <div
                    className="
                      mt-2
                      flex
                      max-w-full
                      items-center
                      gap-1.5
                      rounded-full
                      bg-slate-50
                      px-2.5
                      py-1.5
                      ring-1
                      ring-slate-100
                    "
                  >
                    <Smartphone className="h-3 w-3 shrink-0 text-sky-500" />

                    <span className="truncate text-[8px] font-medium text-slate-500">
                      UPI: {FAMPAY_UPI_ID}
                    </span>
                  </div>
                </div>

                {/* FAMPAY BUTTON */}

                {/* <button
                  type="button"
                  onClick={handlePayViaFampay}
                  className="
                    mt-2.5
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-lg
                    bg-gradient-to-r
                    from-sky-600
                    to-blue-700
                    px-4
                    py-2.5
                    text-[10px]
                    font-bold
                    text-white
                    shadow-[0_8px_18px_rgba(14,165,233,0.20)]
                    transition
                    hover:from-sky-500
                    hover:to-blue-600
                  "
                >
                  <Smartphone className="h-3.5 w-3.5" />
                  Pay via Fampay
                </button> */}
              </div>

              {/* ERROR */}

              {error && (
                <div
                  className="
                    relative
                    mt-2.5
                    rounded-lg
                    border
                    border-red-100
                    bg-red-50
                    px-3
                    py-2
                    text-[9px]
                    leading-4
                    text-red-600
                  "
                >
                  {error}
                </div>
              )}

              {/* COMPLETED PAYMENT */}

              <div className="relative mt-3">
                <button
                  type="button"
                  onClick={handleCompletedPayment}
                  className="
                    group
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-lg
                    bg-slate-950
                    px-5
                    py-2.5
                    text-[10px]
                    font-bold
                    text-white
                    shadow-[0_8px_20px_rgba(15,23,42,0.18)]
                    transition-all
                    hover:bg-sky-600
                  "
                >
                  I've Completed Payment

                  <ArrowRight
                    className="
                      h-3.5
                      w-3.5
                      transition-transform
                      group-hover:translate-x-1
                    "
                  />
                </button>
              </div>

              <p className="relative mt-2 text-center text-[8px] leading-3.5 text-slate-400">
                After payment, submit your transaction ID / UTR for verification.
              </p>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* =========================================================
   MAIN RESOURCES PAGE
========================================================= */

export default function Resources() {
  const [activeCategory, setActiveCategory] =
    useState("all");

  const [selectedResource, setSelectedResource] =
    useState(null);

  const [search, setSearch] = useState("");

  const filteredResources = RESOURCES.filter(
    (resource) => {
      const matchesCategory =
        activeCategory === "all" ||
        resource.category === activeCategory;

      const searchText = search
        .toLowerCase()
        .trim();

      const matchesSearch =
        !searchText ||
        resource.title
          .toLowerCase()
          .includes(searchText) ||
        resource.description
          .toLowerCase()
          .includes(searchText) ||
        resource.tag
          .toLowerCase()
          .includes(searchText);

      return (
        matchesCategory &&
        matchesSearch
      );
    }
  );

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* =================================================
          HERO
      ================================================= */}

      <header className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div
            className="
              absolute
              -left-32
              -top-32
              h-[420px]
              w-[420px]
              rounded-full
              bg-sky-100/70
              blur-3xl
            "
          />

          <div
            className="
              absolute
              -right-40
              top-20
              h-[420px]
              w-[420px]
              rounded-full
              bg-blue-50
              blur-3xl
            "
          />

          <div
            className="
              absolute
              inset-x-0
              bottom-0
              h-40
              bg-gradient-to-t
              from-white
              to-transparent
            "
          />
        </div>

        <div
          className="
            relative
            mx-auto
            max-w-7xl
            px-5
            pb-14
            pt-6
            sm:px-8
            sm:pb-20
            sm:pt-9
            lg:px-10
          "
        >
          <motion.a
            href="/"
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              ease: EASE,
            }}
            className="
              group
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-slate-200
              bg-white/80
              px-3.5
              py-2.5
              text-[11px]
              font-semibold
              text-slate-600
              shadow-sm
              backdrop-blur-xl
              transition
              hover:border-sky-200
              hover:text-sky-600
              sm:px-4
              sm:text-xs
            "
          >
            <ArrowLeft
              className="
                h-3.5
                w-3.5
                transition-transform
                duration-300
                group-hover:-translate-x-1
              "
            />

            Back to Devika Web Solutions
          </motion.a>

          <div
            className="
              mt-12
              grid
              items-center
              gap-10
              lg:grid-cols-[1fr_380px]
              lg:gap-12
            "
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              <motion.div variants={fadeUp}>
                <span
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-sky-100
                    bg-sky-50
                    px-3
                    py-2
                    text-[9px]
                    font-bold
                    tracking-[0.12em]
                    text-sky-600
                    sm:px-4
                    sm:text-[11px]
                  "
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  DEVELOPER RESOURCE HUB
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="
                  mt-5
                  max-w-3xl
                  text-4xl
                  font-bold
                  leading-[1.05]
                  tracking-[-0.04em]
                  text-slate-950
                  sm:mt-6
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                Learn.
                <br />

                <span
                  className="
                    bg-gradient-to-r
                    from-sky-500
                    via-sky-600
                    to-blue-700
                    bg-clip-text
                    text-transparent
                  "
                >
                  Prepare.
                </span>{" "}
                Grow.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="
                  mt-5
                  max-w-2xl
                  text-sm
                  leading-6
                  text-slate-500
                  sm:mt-6
                  sm:text-lg
                  sm:leading-7
                "
              >
                Practical roadmaps, interview questions, developer notes
                and preparation resources designed to help you move from
                learning to building with confidence.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-7 flex flex-wrap gap-2.5 sm:mt-8 sm:gap-3"
              >
                {[
                  {
                    icon: Map,
                    value: "Roadmaps",
                  },
                  {
                    icon: Users,
                    value: "Interview Prep",
                  },
                  {
                    icon: BookOpen,
                    value: "Developer Notes",
                  },
                ].map((item) => {
                  const ItemIcon = item.icon;

                  return (
                    <div
                      key={item.value}
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-slate-200
                        bg-white/80
                        px-3
                        py-2.5
                        text-[10px]
                        font-semibold
                        text-slate-600
                        shadow-sm
                        sm:px-4
                        sm:text-xs
                      "
                    >
                      <ItemIcon className="h-3.5 w-3.5 text-sky-500" />
                      {item.value}
                    </div>
                  );
                })}
              </motion.div>
            </motion.div>

            {/* JOURNEY CARD */}

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                delay: 0.25,
                duration: 0.7,
                ease: EASE,
              }}
              className="relative hidden lg:block"
            >
              <div
                className="
                  absolute
                  inset-10
                  rounded-full
                  bg-sky-200/60
                  blur-3xl
                "
              />

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-slate-200
                  bg-white/90
                  p-7
                  shadow-[0_25px_70px_rgba(15,23,42,0.10)]
                  backdrop-blur-xl
                "
              >
                <div className="flex items-center justify-between">
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      bg-slate-900
                      text-white
                    "
                  >
                    <Terminal className="h-5 w-5" />
                  </div>

                  <span
                    className="
                      rounded-full
                      bg-emerald-50
                      px-3
                      py-1.5
                      text-[10px]
                      font-bold
                      text-emerald-600
                    "
                  >
                    KEEP LEARNING
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-bold text-slate-900">
                  Your developer journey
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Pick a roadmap, sharpen your interview skills and keep
                  building.
                </p>

                <div className="mt-7 space-y-4">
                  {[
                    {
                      label: "Learn fundamentals",
                      progress: "100%",
                    },
                    {
                      label: "Build projects",
                      progress: "80%",
                    },
                    {
                      label: "Prepare for interviews",
                      progress: "60%",
                    },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between text-[11px] font-medium text-slate-500">
                        <span>{item.label}</span>

                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                      </div>

                      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{
                            width: item.progress,
                          }}
                          transition={{
                            delay: 0.7,
                            duration: 1,
                            ease: EASE,
                          }}
                          className="
                            h-full
                            rounded-full
                            bg-gradient-to-r
                            from-sky-400
                            to-sky-600
                          "
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* =================================================
          RESOURCES
      ================================================= */}

      <main
        className="
          relative
          mx-auto
          max-w-7xl
          px-5
          pb-16
          sm:px-8
          sm:pb-20
          lg:px-10
        "
      >
        <div
          className="
            flex
            flex-col
            gap-5
            border-t
            border-slate-100
            pt-10
            sm:pt-12
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <div>
            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-sky-600
                sm:text-[11px]
              "
            >
              Explore Resources
            </p>

            <h2
              className="
                mt-2
                text-2xl
                font-bold
                tracking-tight
                text-slate-900
                sm:text-3xl
              "
            >
              Resources built for developers
            </h2>

            <p
              className="
                mt-2
                max-w-xl
                text-xs
                leading-5
                text-slate-500
                sm:text-sm
                sm:leading-6
              "
            >
              Start with a roadmap, prepare for interviews or pick up
              concise notes for quick revision.
            </p>
          </div>

          {/* SEARCH */}

          <div className="relative w-full lg:max-w-xs">
            <Search
              className="
                pointer-events-none
                absolute
                left-4
                top-1/2
                h-4
                w-4
                -translate-y-1/2
                text-slate-400
              "
            />

            <input
              type="text"
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Search resources..."
              className="
                w-full
                rounded-full
                border
                border-slate-200
                bg-white
                py-3
                pl-11
                pr-4
                text-xs
                text-slate-700
                outline-none
                transition
                placeholder:text-slate-400
                focus:border-sky-300
                focus:ring-4
                focus:ring-sky-50
                sm:text-sm
              "
            />
          </div>
        </div>

        {/* CATEGORIES */}

        <div className="mt-7 flex gap-2 overflow-x-auto pb-2 sm:mt-8">
          {RESOURCE_CATEGORIES.map((category) => {
            const active =
              activeCategory === category.id;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() =>
                  setActiveCategory(category.id)
                }
                className={`
                  shrink-0
                  cursor-pointer
                  rounded-full
                  px-3.5
                  py-2.5
                  text-[10px]
                  font-semibold
                  transition-all
                  duration-300
                  sm:px-4
                  sm:text-xs

                  ${
                    active
                      ? "bg-slate-900 text-white shadow-[0_8px_20px_rgba(15,23,42,0.15)]"
                      : "border border-slate-200 bg-white text-slate-500 hover:border-sky-200 hover:text-sky-600"
                  }
                `}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        {/* RESOURCE GRID */}

        <motion.div
          layout
          className="
            mt-7
            grid
            grid-cols-1
            gap-4
            md:grid-cols-2
            xl:grid-cols-3
            sm:mt-8
            sm:gap-5
          "
        >
          <AnimatePresence mode="popLayout">
            {filteredResources.map((resource) => (
              <ResourceCard
                key={resource.id}
                resource={resource}
                onExplore={setSelectedResource}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* EMPTY */}

        {filteredResources.length === 0 && (
          <div
            className="
              mt-8
              rounded-3xl
              border
              border-dashed
              border-slate-200
              bg-slate-50
              px-6
              py-16
              text-center
            "
          >
            <Search className="mx-auto h-8 w-8 text-slate-300" />

            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              No resources found
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Try another keyword or choose a different category.
            </p>
          </div>
        )}

        {/* MORE RESOURCES */}

        <section
          className="
            relative
            mt-12
            overflow-hidden
            rounded-[2rem]
            border
            border-slate-200
            bg-gradient-to-br
            from-slate-50
            via-white
            to-sky-50
            px-6
            py-9
            text-center
            sm:mt-16
            sm:px-10
            sm:py-11
          "
        >
          <div
            className="
              pointer-events-none
              absolute
              -right-16
              -top-16
              h-40
              w-40
              rounded-full
              bg-sky-100
              blur-3xl
            "
          />

          <div className="relative">
            <div
              className="
                mx-auto
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                bg-white
                text-sky-600
                shadow-sm
                ring-1
                ring-slate-200
              "
            >
              <Sparkles className="h-5 w-5" />
            </div>

            <p
              className="
                mt-4
                text-[10px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-sky-600
              "
            >
              More resources
            </p>

            <h2
              className="
                mt-2
                text-xl
                font-bold
                tracking-tight
                text-slate-900
                sm:text-2xl
              "
            >
              More developer resources coming soon.
            </h2>

            <p
              className="
                mx-auto
                mt-2
                max-w-lg
                text-xs
                leading-5
                text-slate-500
                sm:text-sm
              "
            >
              More roadmaps, cheat sheets, notes and interview preparation
              resources will be added regularly.
            </p>
          </div>
        </section>

        {/* BOTTOM CTA */}

        <section
          className="
            relative
            mt-8
            overflow-hidden
            rounded-[2rem]
            bg-slate-950
            px-6
            py-9
            sm:mt-10
            sm:px-10
            sm:py-12
          "
        >
          <div
            className="
              pointer-events-none
              absolute
              -right-20
              -top-20
              h-60
              w-60
              rounded-full
              bg-sky-500/20
              blur-3xl
            "
          />

          <div
            className="
              relative
              flex
              flex-col
              gap-6
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <div>
              <span
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-white/10
                  px-3
                  py-1.5
                  text-[9px]
                  font-bold
                  tracking-[0.14em]
                  text-sky-300
                "
              >
                <GitBranch className="h-3 w-3" />
                BUILD YOUR PATH
              </span>

              <h2
                className="
                  mt-4
                  max-w-2xl
                  text-xl
                  font-bold
                  tracking-tight
                  text-white
                  sm:text-3xl
                "
              >
                Keep learning. Keep building. Keep growing.
              </h2>

              <p
                className="
                  mt-3
                  max-w-xl
                  text-xs
                  leading-5
                  text-slate-400
                  sm:text-sm
                  sm:leading-6
                "
              >
                New roadmaps, interview questions and developer resources
                will be added regularly.
              </p>
            </div>

            <div
              className="
                flex
                h-14
                w-14
                shrink-0
                items-center
                justify-center
                rounded-2xl
                bg-white/10
                text-sky-300
                ring-1
                ring-white/10
              "
            >
              <Code2 className="h-6 w-6" />
            </div>
          </div>
        </section>
      </main>

      {/* =================================================
          MODAL
      ================================================= */}

      <AnimatePresence>
        {selectedResource && (
          <ResourceModal
            resource={selectedResource}
            onClose={() =>
              setSelectedResource(null)
            }
          />
        )}
      </AnimatePresence>
    </div>
  );
}