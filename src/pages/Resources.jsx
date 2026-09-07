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
  Upload,
} from "lucide-react";

/* =========================================================
   EMAILJS CONFIG
========================================================= */

const EMAILJS_SERVICE_ID = "service_mkjrjyp";
const EMAILJS_TEMPLATE_ID = "template_li5zdeq";
const EMAILJS_PUBLIC_KEY = "_WgZhn1NzggSPGWvl";

/* =========================================================
   UPI CONFIG
   Later, when you switch to PhonePe, change ONLY this line.
========================================================= */

const FAMPAY_UPI_ID = "devika19@fam";

/* =========================================================
   PAYMENT QR
========================================================= */

const PAYMENT_QR_PATH = "/payment-qr.png";

/* =========================================================
   CATEGORIES
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
   RESOURCES
========================================================= */

const RESOURCES = [
  {
    id: 0,
    icon: Code2,
    category: "interview",
    tag: "PREMIUM",
    title: "Developer Interview & Coding Resource",
    description:
      "A practical developer handbook covering programming fundamentals, OOP, coding problems, SQL, Git, REST APIs, web development, project interviews, and HR preparation.",
    level: "Beginner → Intermediate",
    format: "PDF",
    price: "₹99",
    amount: "99",
    featured: false,
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
    format: "8–10 Page Cheat Sheet",
    price: "₹99",
    amount: "99",
    featured: true,
  },

  {
    id: 1,
    icon: BookOpen,
    category: "notes",
    tag: "NOTES",
    title: "Core Java Quick Notes",
    description:
      "Quick Core Java revision notes covering Java basics, OOPs, Strings, Collections, Exception Handling and Java 8+.",
    level: "Core Java",
    format: "8–10 Page Quick Notes",
    price: "₹99",
    amount: "99",
    featured: true,
  },

  {
    id: 3,
    icon: Terminal,
    category: "interview",
    tag: "INTERVIEW",
    title: "Java 50 Interview Questions",
    description:
      "50 important Core Java and OOP interview questions explained in a simple and practical way.",
    level: "Interview Prep",
    format: "50 Interview Questions",
    price: "₹149",
    amount: "149",
    featured: true,
  },

  {
    id: 10,
    icon: Code2,
    category: "interview",
    tag: "INTERVIEW",
    title: "React 50 Interview Questions",
    description:
      "50 important React interview questions covering components, JSX, props, state, hooks, routing, API integration and practical React concepts.",
    level: "React Interview Prep",
    format: "50 Interview Questions",
    price: "₹149",
    amount: "149",
    featured: true,
  },

  {
    id: 4,
    icon: Database,
    category: "interview",
    tag: "INTERVIEW",
    title: "SQL 50 Interview Questions",
    description:
      "50 frequently asked SQL interview questions covering queries, joins, constraints and database concepts.",
    level: "Interview Prep",
    format: "50 Interview Questions",
    price: "₹149",
    amount: "149",
    featured: false,
  },

  {
    id: 6,
    icon: BookOpen,
    category: "notes",
    tag: "NOTES",
    title: "Core Java Developer Notes",
    description:
      "35-page practical Core Java notes covering Java fundamentals, OOPs, Collections, Exception Handling, Java 8+ and important interview concepts.",
    level: "Core Java",
    format: "35-Page PDF Notes",
    price: "₹199",
    amount: "199",
    featured: false,
  },

  {
    id: 5,
    icon: Code2,
    category: "roadmaps",
    tag: "ROADMAP",
    title: "Frontend Developer Roadmap",
    description:
      "A practical step-by-step roadmap covering HTML, CSS, JavaScript, React, APIs, Git, projects, deployment and interview preparation.",
    level: "Beginner → Job Ready",
    format: "20–25 Page Roadmap",
    price: "₹199",
    amount: "199",
    featured: true,
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
    format: "35–45 Page Interview Pack",
    price: "₹299",
    amount: "299",
    featured: true,
  },

  {
    id: 9,
    icon: Layers3,
    category: "notes",
    tag: "PREMIUM",
    title: "Java Full Stack Developer Pack",
    description:
      "A complete premium developer preparation bundle combining Java, SQL, React, Spring Boot, projects and interview resources.",
    level: "Full Stack",
    format: "Premium Resource Pack",
    price: "₹2,999",
    amount: "2999",
    featured: true,
    premium: true,
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
        group relative flex h-full flex-col overflow-hidden
        rounded-3xl border border-slate-200 bg-white p-5
        shadow-[0_8px_30px_rgba(15,23,42,0.045)]
        transition-shadow duration-300
        hover:border-sky-200
        hover:shadow-[0_24px_55px_rgba(14,165,233,0.12)]
        sm:p-6
      "
    >
      <div
        className="
          pointer-events-none absolute -right-16 -top-16
          h-32 w-32 rounded-full bg-sky-100/70 blur-3xl
          transition-all duration-500
          group-hover:bg-sky-200/80
        "
      />

      {resource.premium && (
        <div
          className="
            absolute left-4 top-4 z-10 rounded-full
            bg-gradient-to-r from-violet-500 to-indigo-600
            px-2.5 py-1 text-[8px] font-black uppercase
            tracking-[0.12em] text-white shadow-lg
          "
        >
          Premium Pack
        </div>
      )}

      <div className="relative flex items-start justify-between gap-3">
        <div
          className="
            flex h-11 w-11 shrink-0 items-center justify-center
            rounded-2xl bg-sky-50 text-sky-600 ring-1 ring-sky-100
            transition-all duration-300
            group-hover:scale-105 group-hover:bg-sky-500
            group-hover:text-white sm:h-12 sm:w-12
          "
        >
          <Icon className="h-5 w-5" />
        </div>

        <span
          className="
            rounded-full border border-slate-200 bg-slate-50
            px-2.5 py-1.5 text-[9px] font-bold tracking-[0.12em]
            text-slate-500 sm:px-3 sm:text-[10px]
          "
        >
          {resource.tag}
        </span>
      </div>

      <div className="relative mt-5 flex-1 sm:mt-6">
        <h3
          className="
            text-lg font-semibold tracking-tight text-slate-900
            sm:text-xl
          "
        >
          {resource.title}
        </h3>

        <p
          className="
            mt-2.5 text-xs leading-5 text-slate-500
            sm:mt-3 sm:text-sm sm:leading-6
          "
        >
          {resource.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
          <span
            className="
              inline-flex items-center gap-1.5 rounded-full
              bg-slate-50 px-2.5 py-1.5 text-[10px]
              font-medium text-slate-500 ring-1 ring-slate-100
            "
          >
            <CheckCircle2 className="h-3 w-3 text-emerald-500" />
            {resource.level}
          </span>

          <span
            className="
              inline-flex items-center gap-1.5 rounded-full
              bg-slate-50 px-2.5 py-1.5 text-[10px]
              font-medium text-slate-500 ring-1 ring-slate-100
            "
          >
            <FileText className="h-3 w-3 text-sky-500" />
            {resource.format}
          </span>
        </div>
      </div>

      <div
        className="
          relative mt-6 flex items-center justify-between gap-3
          border-t border-slate-100 pt-4 sm:mt-7 sm:pt-5
        "
      >
        <div>
          <p
            className="
              text-[9px] font-semibold uppercase tracking-[0.14em]
              text-slate-400
            "
          >
            Access
          </p>

          <p className="mt-0.5 text-lg font-bold text-slate-900 sm:text-xl">
            {resource.price}
          </p>
        </div>

        <motion.button
          type="button"
          onClick={() => onExplore(resource)}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
          className="
            inline-flex cursor-pointer items-center gap-1.5
            rounded-full bg-slate-900 px-3.5 py-2.5
            text-[11px] font-bold text-white
            shadow-[0_8px_20px_rgba(15,23,42,0.16)]
            transition-all duration-300 hover:bg-sky-600
            sm:px-4 sm:text-xs
          "
        >
          Explore
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
  const [paymentStep, setPaymentStep] =
    useState("payment");

  const [submitted, setSubmitted] =
    useState(false);

  const [sending, setSending] =
    useState(false);

  const [error, setError] =
    useState("");

  const [fileName, setFileName] =
    useState("");

  if (!resource) return null;

  const Icon = resource.icon;

  /* =======================================================
     UPI PAYMENT
  ======================================================= */

  const handlePayViaUpi = () => {
    setError("");

    if (
      !FAMPAY_UPI_ID ||
      FAMPAY_UPI_ID === "*****" ||
      FAMPAY_UPI_ID === "YOUR_ACTUAL_UPI_ID"
    ) {
      setError(
        "UPI payment is currently unavailable."
      );

      return;
    }

    const upiUrl =
      `upi://pay?pa=${encodeURIComponent(
        FAMPAY_UPI_ID
      )}` +
      `&pn=${encodeURIComponent(
        "Devika Web Solutions"
      )}` +
      `&am=${encodeURIComponent(
        resource.amount
      )}` +
      `&cu=INR` +
      `&tn=${encodeURIComponent(
        resource.title
      )}`;

    /*
      IMPORTANT:
      We use the same UPI deep-link on both mobile
      and desktop.

      Mobile:
      Supported UPI apps / chooser can handle it.

      Desktop:
      If the operating system/browser has a UPI
      handler, it may open it.
      Otherwise the QR option below should be used.
    */

    window.location.assign(upiUrl);

    /*
      Fallback message for browsers where the
      upi:// protocol is not handled.
    */

    setTimeout(() => {
      setError(
        "If the UPI app did not open, please scan the QR code below with your phone's UPI app."
      );
    }, 1800);
  };

  /* =======================================================
     COMPLETED PAYMENT
  ======================================================= */

  const handleCompletedPayment = () => {
    setError("");
    setPaymentStep("confirmation");
  };

  /* =======================================================
     FILE CHANGE
  ======================================================= */

  const handleFileChange = (event) => {
    setError("");

    const file =
      event.target.files?.[0];

    if (!file) {
      setFileName("");
      return;
    }

    const allowedTypes = [
      "image/png",
      "image/jpeg",
      "image/webp",
      "application/pdf",
    ];

    if (!allowedTypes.includes(file.type)) {
      event.target.value = "";
      setFileName("");

      setError(
        "Please upload a PNG, JPG, WEBP or PDF screenshot."
      );

      return;
    }

    const maxSize =
      5 * 1024 * 1024;

    if (file.size > maxSize) {
      event.target.value = "";
      setFileName("");

      setError(
        "Payment screenshot must be smaller than 5MB."
      );

      return;
    }

    setFileName(file.name);
  };

  /* =======================================================
     EMAILJS SUBMIT
  ======================================================= */

  const handleSubmitConfirmation = async (
    event
  ) => {
    event.preventDefault();

    if (sending) return;

    setSending(true);
    setError("");

    const form = event.currentTarget;

    const formData =
      new FormData(form);

    const name = String(
      formData.get("name") || ""
    ).trim();

    const email = String(
      formData.get("email") || ""
    ).trim();

    const utr = String(
      formData.get("utr") || ""
    ).trim();

    const screenshot =
      formData.get(
        "payment_screenshot"
      );

    if (!name) {
      setError(
        "Please enter your name."
      );

      setSending(false);
      return;
    }

    if (!email) {
      setError(
        "Please enter your email."
      );

      setSending(false);
      return;
    }

    if (!utr) {
      setError(
        "Please enter your Transaction ID / UTR."
      );

      setSending(false);
      return;
    }

    if (
      !screenshot ||
      !(screenshot instanceof File) ||
      screenshot.size === 0
    ) {
      setError(
        "Please upload your payment screenshot."
      );

      setSending(false);
      return;
    }

    try {
      const response =
        await emailjs.sendForm(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          form,
          {
            publicKey:
              EMAILJS_PUBLIC_KEY,
          }
        );

      console.log(
        "EmailJS success:",
        response.status,
        response.text
      );

      setSubmitted(true);
    } catch (err) {
      console.error(
        "EmailJS error:",
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="
        fixed inset-0 z-[100] flex items-center
        justify-center bg-slate-950/60 px-3 py-4
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
          relative w-full max-w-[390px]
          max-h-[90vh] overflow-y-auto
          rounded-[22px] border border-white/80
          bg-white p-4
          shadow-[0_30px_80px_rgba(15,23,42,0.30)]
          sm:max-w-md sm:p-6
        "
      >
        {/* CLOSE */}

        <button
          type="button"
          onClick={onClose}
          className="
            absolute right-3 top-3 z-30
            flex h-8 w-8 items-center
            justify-center rounded-full
            border border-slate-200 bg-white
            text-slate-500 shadow-sm transition
            hover:bg-slate-950 hover:text-white
          "
        >
          <X className="h-4 w-4" />
        </button>

        {/* =================================================
            SUCCESS
        ================================================= */}

        {submitted ? (
          <div className="py-7 text-center">

            <div
              className="
                mx-auto flex h-14 w-14
                items-center justify-center
                rounded-full bg-emerald-50
                text-emerald-600
                ring-8 ring-emerald-50/60
              "
            >
              <CheckCircle2 className="h-7 w-7" />
            </div>

            <h2
              className="
                mt-4 text-lg font-bold
                text-slate-900
              "
            >
              Payment Details Submitted
            </h2>

            <p
              className="
                mx-auto mt-2 max-w-xs
                text-xs leading-5 text-slate-500
              "
            >
              Your payment details and screenshot
              have been submitted successfully.
            </p>

            <div
              className="
                mt-4 rounded-xl border
                border-slate-200 bg-slate-50 p-3.5
                text-left
              "
            >
              <p
                className="
                  text-[9px] font-bold uppercase
                  tracking-[0.14em] text-slate-400
                "
              >
                Resource
              </p>

              <p
                className="
                  mt-1 text-xs font-semibold
                  text-slate-900
                "
              >
                {resource.title}
              </p>

              <div className="mt-2.5 flex justify-between">
                <span className="text-[11px] text-slate-500">
                  Amount
                </span>

                <span className="text-xs font-bold text-slate-900">
                  {resource.price}
                </span>
              </div>
            </div>

            <div
              className="
                mt-4 rounded-xl border
                border-sky-100 bg-sky-50 p-3.5
                text-left
              "
            >
              <p
                className="
                  text-[9px] font-bold uppercase
                  tracking-[0.12em] text-sky-700
                "
              >
                Delivery
              </p>

              <p
                className="
                  mt-1 text-[10px]
                  leading-4 text-sky-800
                "
              >
                Your payment will be manually
                verified. After successful
                verification, your purchased
                resource will be delivered to
                your email
                <strong> within 24 hours</strong>.
              </p>
            </div>

            <div
              className="
                mt-3 rounded-xl border
                border-amber-100 bg-amber-50
                p-3 text-left
              "
            >
              <p
                className="
                  text-[9px] font-bold uppercase
                  tracking-[0.12em] text-amber-700
                "
              >
                Please Note
              </p>

              <p
                className="
                  mt-1 text-[10px]
                  leading-4 text-amber-800
                "
              >
                Please check your inbox and
                spam/promotions folder.
              </p>

              <p
                className="
                  mt-1.5 text-[10px]
                  font-bold leading-4
                  text-amber-800
                "
              >
                No refund is available after
                payment.
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="
                mt-4 w-full rounded-xl
                bg-slate-950 px-5 py-3
                text-xs font-bold text-white
                transition hover:bg-sky-600
              "
            >
              Done
            </button>
          </div>
        ) : paymentStep === "confirmation" ? (
          /* =================================================
             CONFIRMATION FORM
          ================================================= */

          <div>

            <button
              type="button"
              onClick={() => {
                setPaymentStep("payment");
                setError("");
              }}
              className="
                mb-3 inline-flex items-center gap-1
                text-[10px] font-semibold
                text-slate-500 transition
                hover:text-sky-600
              "
            >
              <ArrowLeft className="h-3 w-3" />
              Back to payment
            </button>

            <div
              className="
                flex items-center gap-2.5 pr-8
              "
            >
              <div
                className="
                  flex h-10 w-10 shrink-0
                  items-center justify-center
                  rounded-xl
                  bg-gradient-to-br
                  from-sky-500 to-blue-700
                  text-white
                "
              >
                <CheckCircle2 className="h-5 w-5" />
              </div>

              <div>
                <p
                  className="
                    text-[8px] font-bold uppercase
                    tracking-[0.14em] text-sky-600
                  "
                >
                  Payment Confirmation
                </p>

                <h2
                  className="
                    mt-0.5 text-base font-bold
                    text-slate-900
                  "
                >
                  Confirm your payment
                </h2>
              </div>
            </div>

            {/* DELIVERY */}

            <div
              className="
                mt-4 rounded-xl border
                border-sky-100 bg-sky-50/80 p-3
              "
            >
              <p
                className="
                  text-[9px] font-bold uppercase
                  tracking-[0.12em] text-sky-700
                "
              >
                Resource Delivery
              </p>

              <p
                className="
                  mt-1 text-[10px]
                  leading-4 text-sky-800
                "
              >
                After payment verification,
                your resource will be sent to
                your email address
                <strong> within 24 hours</strong>.
              </p>
            </div>

            {/* IMPORTANT */}

            <div
              className="
                mt-3 rounded-xl border
                border-amber-100 bg-amber-50/70 p-3
              "
            >
              <p
                className="
                  text-[9px] font-bold uppercase
                  tracking-[0.12em] text-amber-700
                "
              >
                Important
              </p>

              <p
                className="
                  mt-1 text-[10px]
                  leading-4 text-amber-800
                "
              >
                Please enter a valid email
                address and upload your payment
                screenshot.
              </p>

              <p
                className="
                  mt-1.5 text-[10px]
                  font-bold leading-4
                  text-amber-800
                "
              >
                No refund is available after
                payment.
              </p>
            </div>

            {/* RESOURCE */}

            <div
              className="
                mt-3 rounded-xl border
                border-slate-200 bg-slate-50 p-3
              "
            >
              <p
                className="
                  text-[8px] font-bold uppercase
                  tracking-[0.12em] text-slate-400
                "
              >
                Purchased Resource
              </p>

              <div
                className="
                  mt-1 flex items-center
                  justify-between gap-2
                "
              >
                <p
                  className="
                    text-xs font-bold
                    text-slate-900
                  "
                >
                  {resource.title}
                </p>

                <span
                  className="
                    shrink-0 rounded-full bg-white
                    px-2.5 py-1 text-[10px]
                    font-black text-sky-600
                    shadow-sm
                  "
                >
                  {resource.price}
                </span>
              </div>
            </div>

            {/* FORM */}

            <form
              onSubmit={
                handleSubmitConfirmation
              }
              className="mt-4 space-y-3"
              encType="multipart/form-data"
            >

              <input
                type="hidden"
                name="resource_title"
                value={resource.title}
              />

              <input
                type="hidden"
                name="amount"
                value={resource.price}
              />

              {/* NAME */}

              <div>
                <label
                  htmlFor="resource-name"
                  className="
                    mb-1 block text-[9px]
                    font-bold uppercase
                    tracking-[0.12em]
                    text-slate-500
                  "
                >
                  Your Name
                </label>

                <input
                  id="resource-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Enter your name"
                  className="
                    w-full rounded-lg
                    border border-slate-200
                    bg-white px-3 py-2.5
                    text-[11px] text-slate-800
                    outline-none
                    placeholder:text-slate-400
                    focus:border-sky-300
                    focus:ring-4
                    focus:ring-sky-50
                  "
                />
              </div>

              {/* EMAIL */}

              <div>
                <label
                  htmlFor="resource-email"
                  className="
                    mb-1 block text-[9px]
                    font-bold uppercase
                    tracking-[0.12em]
                    text-slate-500
                  "
                >
                  Valid Email Address
                </label>

                <input
                  id="resource-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="Enter your email"
                  className="
                    w-full rounded-lg
                    border border-slate-200
                    bg-white px-3 py-2.5
                    text-[11px] text-slate-800
                    outline-none
                    placeholder:text-slate-400
                    focus:border-sky-300
                    focus:ring-4
                    focus:ring-sky-50
                  "
                />

                <p
                  className="
                    mt-1 text-[8px]
                    leading-3.5 text-slate-400
                  "
                >
                  Your resource will be delivered
                  to this email within 24 hours
                  after payment verification.
                </p>
              </div>

              {/* UTR */}

              <div>
                <label
                  htmlFor="resource-utr"
                  className="
                    mb-1 block text-[9px]
                    font-bold uppercase
                    tracking-[0.12em]
                    text-slate-500
                  "
                >
                  Transaction ID / UTR
                </label>

                <input
                  id="resource-utr"
                  name="utr"
                  type="text"
                  required
                  autoComplete="off"
                  placeholder="Enter transaction ID / UTR"
                  className="
                    w-full rounded-lg
                    border border-slate-200
                    bg-white px-3 py-2.5
                    text-[11px] text-slate-800
                    outline-none
                    placeholder:text-slate-400
                    focus:border-sky-300
                    focus:ring-4
                    focus:ring-sky-50
                  "
                />
              </div>

              {/* SCREENSHOT */}

              <div>
                <label
                  htmlFor="payment-screenshot"
                  className="
                    mb-1 block text-[9px]
                    font-bold uppercase
                    tracking-[0.12em]
                    text-slate-500
                  "
                >
                  Payment Screenshot
                </label>

                <label
                  htmlFor="payment-screenshot"
                  className="
                    flex w-full cursor-pointer
                    items-center gap-3 rounded-lg
                    border border-dashed
                    border-slate-300 bg-slate-50
                    px-3 py-3 transition
                    hover:border-sky-300
                    hover:bg-sky-50
                  "
                >
                  <div
                    className="
                      flex h-9 w-9 shrink-0
                      items-center justify-center
                      rounded-lg bg-white
                      text-sky-600 shadow-sm
                      ring-1 ring-slate-200
                    "
                  >
                    <Upload className="h-4 w-4" />
                  </div>

                  <div
                    className="
                      min-w-0 flex-1
                    "
                  >
                    <p
                      className="
                        truncate text-[10px]
                        font-semibold
                        text-slate-700
                      "
                    >
                      {fileName ||
                        "Upload payment screenshot"}
                    </p>

                    <p
                      className="
                        mt-0.5 text-[8px]
                        text-slate-400
                      "
                    >
                      PNG, JPG, WEBP or PDF • Max 5MB
                    </p>
                  </div>
                </label>

                <input
                  id="payment-screenshot"
                  name="payment_screenshot"
                  type="file"
                  accept="
                    .png,
                    .jpg,
                    .jpeg,
                    .webp,
                    .pdf,
                    image/png,
                    image/jpeg,
                    image/webp,
                    application/pdf
                  "
                  required
                  onChange={handleFileChange}
                  className="hidden"
                />
              </div>

              {/* MESSAGE */}

              <div>
                <label
                  htmlFor="resource-message"
                  className="
                    mb-1 block text-[9px]
                    font-bold uppercase
                    tracking-[0.12em]
                    text-slate-500
                  "
                >
                  Message
                </label>

                <textarea
                  id="resource-message"
                  name="message"
                  rows={2}
                  placeholder="Optional message..."
                  className="
                    w-full resize-none
                    rounded-lg border
                    border-slate-200 bg-white
                    px-3 py-2.5 text-[11px]
                    text-slate-800 outline-none
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
                    rounded-lg border
                    border-red-100 bg-red-50
                    px-3 py-2.5 text-[10px]
                    leading-4 text-red-600
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
                  group flex w-full
                  items-center justify-center
                  gap-2 rounded-lg
                  bg-gradient-to-r
                  from-slate-950 to-slate-800
                  px-5 py-3 text-[11px]
                  font-bold text-white
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
                        h-3.5 w-3.5
                        animate-spin rounded-full
                        border-2 border-white/30
                        border-t-white
                      "
                    />

                    Sending...
                  </>
                ) : (
                  <>
                    Submit Payment Details

                    <ArrowRight className="h-3 w-3" />
                  </>
                )}
              </button>
            </form>

            <p
              className="
                mt-2.5 text-center text-[8px]
                leading-3.5 text-slate-400
              "
            >
              Payment will be manually verified
              and the resource will be delivered
              to your email within 24 hours after
              verification.
            </p>
          </div>
        ) : (
          /* =================================================
             PAYMENT SCREEN
          ================================================= */

          <>
            {/* HEADER */}

            <div
              className="
                flex items-center gap-2.5 pr-8
              "
            >
              <div
                className="
                  flex h-10 w-10 shrink-0
                  items-center justify-center
                  rounded-xl
                  bg-gradient-to-br
                  from-sky-500 to-blue-700
                  text-white
                "
              >
                <Icon className="h-4.5 w-4.5" />
              </div>

              <div className="min-w-0">
                <span
                  className="
                    inline-flex rounded-full
                    bg-sky-50 px-2 py-0.5
                    text-[8px] font-bold
                    tracking-[0.14em]
                    text-sky-600
                  "
                >
                  {resource.tag}
                </span>

                <h2
                  className="
                    mt-0.5 truncate text-base
                    font-bold text-slate-900
                  "
                >
                  {resource.title}
                </h2>
              </div>
            </div>

            {/* DESCRIPTION */}

            <p
              className="
                mt-3 text-[11px]
                leading-4.5 text-slate-500
              "
            >
              {resource.description}
            </p>

            {/* FEATURES */}

            <div
              className="
                mt-3 grid grid-cols-2 gap-1.5
              "
            >
              {[
                "Structured content",
                "Practical resources",
                "Interview friendly",
                "Easy to revise",
              ].map((item) => (
                <div
                  key={item}
                  className="
                    flex items-center gap-1.5
                    rounded-lg border
                    border-slate-100
                    bg-slate-50/80 px-2 py-1.5
                    text-[9px] font-medium
                    text-slate-600
                  "
                >
                  <CheckCircle2
                    className="
                      h-3 w-3
                      text-emerald-500
                    "
                  />

                  {item}
                </div>
              ))}
            </div>

            {/* IMPORTANT BEFORE PAYMENT */}

            <div
              className="
                mt-3 rounded-xl
                border border-amber-100
                bg-amber-50/70 p-3
              "
            >
              <div className="flex gap-2">

                <div
                  className="
                    mt-0.5 flex h-5 w-5
                    shrink-0 items-center
                    justify-center rounded-full
                    bg-amber-100 text-[10px]
                    font-black text-amber-700
                  "
                >
                  !
                </div>

                <div>
                  <p
                    className="
                      text-[9px] font-bold uppercase
                      tracking-[0.12em]
                      text-amber-700
                    "
                  >
                    Important before payment
                  </p>

                  <p
                    className="
                      mt-1 text-[9px]
                      leading-4 text-amber-800
                    "
                  >
                    Please make sure you enter
                    a valid email address.
                    After payment verification,
                    your resource will be
                    delivered to your email
                    <strong> within 24 hours</strong>.
                  </p>

                  <p
                    className="
                      mt-1.5 text-[9px]
                      font-bold leading-4
                      text-amber-800
                    "
                  >
                    No refund is available after
                    payment.
                  </p>
                </div>
              </div>
            </div>

            {/* PAYMENT BOX */}

            <div
              className="
                mt-3 overflow-hidden
                rounded-xl border
                border-slate-200
                bg-gradient-to-br
                from-slate-50 via-white
                to-sky-50 p-3
              "
            >
              {/* PRICE */}

              <div
                className="
                  flex items-center
                  justify-between
                "
              >
                <div>
                  <p
                    className="
                      text-[8px] font-bold uppercase
                      tracking-[0.14em]
                      text-slate-400
                    "
                  >
                    Get access
                  </p>

                  <p
                    className="
                      mt-0.5 text-lg
                      font-black text-slate-900
                    "
                  >
                    {resource.price}
                  </p>
                </div>

                <div
                  className="
                    rounded-full
                    bg-emerald-50 px-2 py-1
                    text-[8px] font-bold
                    text-emerald-600
                  "
                >
                  ONE-TIME
                </div>
              </div>

              {/* UPI APP BUTTON */}

              <button
                type="button"
                onClick={handlePayViaUpi}
                className="
                  mt-3 flex w-full
                  items-center justify-center
                  gap-2 rounded-lg
                  bg-gradient-to-r
                  from-sky-500 to-blue-700
                  px-4 py-3
                  text-[10px] font-bold text-white
                  shadow-[0_8px_20px_rgba(14,165,233,0.20)]
                  transition-all
                  hover:from-sky-600
                  hover:to-blue-800
                  active:scale-[0.98]
                "
              >
                <Smartphone className="h-4 w-4" />

                Pay {resource.price} with UPI App

                <ArrowRight className="h-3.5 w-3.5" />
              </button>

              <p
                className="
                  mt-1.5 text-center
                  text-[8px] text-slate-400
                "
              >
                Tap to pay using a supported
                UPI app
              </p>

              {/* DIVIDER */}

              <div
                className="
                  my-3 flex items-center gap-2
                "
              >
                <div
                  className="
                    h-px flex-1 bg-slate-200
                  "
                />

                <span
                  className="
                    text-[8px] font-semibold
                    uppercase tracking-[0.12em]
                    text-slate-400
                  "
                >
                  OR SCAN QR
                </span>

                <div
                  className="
                    h-px flex-1 bg-slate-200
                  "
                />
              </div>

              {/* QR */}

              <div
                className="
                  flex flex-col items-center
                  rounded-lg border
                  border-slate-100
                  bg-white p-3 shadow-sm
                "
              >
                <img
                  src={PAYMENT_QR_PATH}
                  alt="UPI Payment QR"
                  className="
                    h-32 w-32 rounded-lg
                    object-contain
                    sm:h-36 sm:w-36
                  "
                />

                <p
                  className="
                    mt-2 text-[9px]
                    font-semibold text-slate-500
                  "
                >
                  Scan & Pay {resource.price}
                </p>

                {/* UPI ID — ONLY HERE */}

                <div
                  className="
                    mt-2 flex max-w-full
                    items-center gap-1.5
                    rounded-full bg-slate-50
                    px-2.5 py-1.5
                    ring-1 ring-slate-100
                  "
                >
                  <Smartphone
                    className="
                      h-3 w-3 shrink-0
                      text-sky-500
                    "
                  />

                  <span
                    className="
                      truncate text-[8px]
                      font-medium
                      text-slate-500
                    "
                  >
                    UPI: {FAMPAY_UPI_ID}
                  </span>
                </div>
              </div>

              <p
                className="
                  mt-2 text-center
                  text-[8px] leading-3.5
                  text-slate-400
                "
              >
                Desktop users can scan this QR
                using their phone's UPI app.
              </p>
            </div>

            {/* ERROR / UPI FALLBACK */}

            {error && (
              <div
                className="
                  mt-2.5 rounded-lg
                  border border-sky-100
                  bg-sky-50 px-3 py-2.5
                  text-[9px] leading-4
                  text-sky-700
                "
              >
                {error}
              </div>
            )}

            {/* COMPLETED PAYMENT */}

            <button
              type="button"
              onClick={
                handleCompletedPayment
              }
              className="
                group mt-3 flex w-full
                items-center justify-center
                gap-2 rounded-lg
                bg-slate-950 px-5 py-2.5
                text-[10px] font-bold text-white
                shadow-[0_8px_20px_rgba(15,23,42,0.18)]
                transition-all
                hover:bg-sky-600
              "
            >
              I've Completed Payment

              <ArrowRight
                className="
                  h-3.5 w-3.5
                  transition-transform
                  group-hover:translate-x-1
                "
              />
            </button>

            <p
              className="
                mt-2 text-center
                text-[8px] leading-3.5
                text-slate-400
              "
            >
              After payment, submit your UTR
              and screenshot. Your resource
              will be emailed within 24 hours
              after successful verification.
            </p>
          </>
        )}
      </motion.div>
    </motion.div>
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

  const [search, setSearch] =
    useState("");

  const filteredResources =
    RESOURCES.filter((resource) => {
      const matchesCategory =
        activeCategory === "all" ||
        resource.category === activeCategory;

      const searchText =
        search.toLowerCase().trim();

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
    });

  return (
    <div
      className="
        min-h-screen
        bg-white text-slate-900
      "
    >
      {/* =================================================
          HERO
      ================================================= */}

      <header className="relative overflow-hidden">

        <div
          className="
            pointer-events-none absolute inset-0
          "
        >
          <div
            className="
              absolute -left-32 -top-32
              h-[420px] w-[420px]
              rounded-full bg-sky-100/70
              blur-3xl
            "
          />

          <div
            className="
              absolute -right-40 top-20
              h-[420px] w-[420px]
              rounded-full bg-blue-50
              blur-3xl
            "
          />

          <div
            className="
              absolute inset-x-0 bottom-0
              h-40 bg-gradient-to-t
              from-white to-transparent
            "
          />
        </div>

        <div
          className="
            relative mx-auto max-w-7xl
            px-5 pb-14 pt-6
            sm:px-8 sm:pb-20 sm:pt-9
            lg:px-10
          "
        >
          {/* BACK */}

          <motion.a
            href="/"
            initial={{
              opacity: 0,
              x: -15,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.5,
              ease: EASE,
            }}
            className="
              group inline-flex items-center
              gap-2 rounded-full
              border border-slate-200
              bg-white/80 px-3.5 py-2.5
              text-[11px] font-semibold
              text-slate-600 shadow-sm
              backdrop-blur-xl transition
              hover:border-sky-200
              hover:text-sky-600
              sm:px-4 sm:text-xs
            "
          >
            <ArrowLeft
              className="
                h-3.5 w-3.5
                transition-transform
                group-hover:-translate-x-1
              "
            />

            Back to Devika Web Solutions
          </motion.a>

          {/* HERO CONTENT */}

          <div
            className="
              mt-12 grid items-center gap-10
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
                    inline-flex items-center
                    gap-2 rounded-full
                    border border-sky-100
                    bg-sky-50 px-3 py-2
                    text-[9px] font-bold
                    tracking-[0.12em]
                    text-sky-600
                    sm:px-4 sm:text-[11px]
                  "
                >
                  <Sparkles className="h-3.5 w-3.5" />

                  DEVELOPER RESOURCE HUB
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="
                  mt-5 max-w-3xl
                  text-4xl font-bold
                  leading-[1.05]
                  tracking-[-0.04em]
                  text-slate-950
                  sm:mt-6 sm:text-5xl
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
                  mt-5 max-w-2xl
                  text-sm leading-6
                  text-slate-500
                  sm:mt-6 sm:text-lg
                  sm:leading-7
                "
              >
                Practical roadmaps, interview
                questions, developer notes and
                preparation resources designed
                to help you move from learning
                to building with confidence.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="
                  mt-7 flex flex-wrap
                  gap-2.5 sm:mt-8 sm:gap-3
                "
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
                  const ItemIcon =
                    item.icon;

                  return (
                    <div
                      key={item.value}
                      className="
                        inline-flex items-center
                        gap-2 rounded-full
                        border border-slate-200
                        bg-white/80 px-3 py-2.5
                        text-[10px] font-semibold
                        text-slate-600
                        shadow-sm
                        sm:px-4 sm:text-xs
                      "
                    >
                      <ItemIcon
                        className="
                          h-3.5 w-3.5
                          text-sky-500
                        "
                      />

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
              className="
                relative hidden lg:block
              "
            >
              <div
                className="
                  absolute inset-10
                  rounded-full
                  bg-sky-200/60 blur-3xl
                "
              />

              <div
                className="
                  relative overflow-hidden
                  rounded-[2rem]
                  border border-slate-200
                  bg-white/90 p-7
                  shadow-[0_25px_70px_rgba(15,23,42,0.10)]
                  backdrop-blur-xl
                "
              >
                <div
                  className="
                    flex items-center
                    justify-between
                  "
                >
                  <div
                    className="
                      flex h-12 w-12
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
                      px-3 py-1.5
                      text-[10px] font-bold
                      text-emerald-600
                    "
                  >
                    KEEP LEARNING
                  </span>
                </div>

                <h3
                  className="
                    mt-7 text-xl
                    font-bold text-slate-900
                  "
                >
                  Your developer journey
                </h3>

                <p
                  className="
                    mt-2 text-sm
                    leading-6 text-slate-500
                  "
                >
                  Pick a roadmap, sharpen
                  your interview skills and
                  keep building.
                </p>

                <div className="mt-7 space-y-4">
                  {[
                    "Learn fundamentals",
                    "Build projects",
                    "Prepare for interviews",
                  ].map((item, index) => (
                    <div key={item}>
                      <div
                        className="
                          flex justify-between
                          text-[11px]
                          font-medium
                          text-slate-500
                        "
                      >
                        <span>{item}</span>

                        <CheckCircle2
                          className="
                            h-3.5 w-3.5
                            text-emerald-500
                          "
                        />
                      </div>

                      <div
                        className="
                          mt-2 h-1.5
                          overflow-hidden
                          rounded-full
                          bg-slate-100
                        "
                      >
                        <motion.div
                          initial={{
                            width: 0,
                          }}
                          animate={{
                            width:
                              index === 0
                                ? "100%"
                                : index === 1
                                ? "80%"
                                : "60%",
                          }}
                          transition={{
                            delay: 0.7,
                            duration: 1,
                            ease: EASE,
                          }}
                          className="
                            h-full rounded-full
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
          RESOURCE SECTION
      ================================================= */}

      <main
        className="
          relative mx-auto max-w-7xl
          px-5 pb-16
          sm:px-8 sm:pb-20
          lg:px-10
        "
      >
        <div
          className="
            flex flex-col gap-5
            border-t border-slate-100
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
                text-[10px] font-bold
                uppercase tracking-[0.16em]
                text-sky-600
                sm:text-[11px]
              "
            >
              Explore Resources
            </p>

            <h2
              className="
                mt-2 text-2xl font-bold
                tracking-tight text-slate-900
                sm:text-3xl
              "
            >
              Resources built for developers
            </h2>

            <p
              className="
                mt-2 max-w-xl
                text-xs leading-5
                text-slate-500
                sm:text-sm sm:leading-6
              "
            >
              Start with a roadmap, prepare
              for interviews or pick up
              concise notes for quick revision.
            </p>
          </div>

          {/* SEARCH */}

          <div
            className="
              relative w-full lg:max-w-xs
            "
          >
            <Search
              className="
                pointer-events-none
                absolute left-4 top-1/2
                h-4 w-4
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
                w-full rounded-full
                border border-slate-200
                bg-white py-3 pl-11 pr-4
                text-xs text-slate-700
                outline-none
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

        <div
          className="
            mt-7 flex gap-2
            overflow-x-auto pb-2
            sm:mt-8
          "
        >
          {RESOURCE_CATEGORIES.map(
            (category) => {
              const active =
                activeCategory ===
                category.id;

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() =>
                    setActiveCategory(
                      category.id
                    )
                  }
                  className={`
                    shrink-0 cursor-pointer
                    rounded-full px-3.5 py-2.5
                    text-[10px] font-semibold
                    transition-all duration-300
                    sm:px-4 sm:text-xs
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
            }
          )}
        </div>

        {/* GRID */}

        <motion.div
          layout
          className="
            mt-7 grid grid-cols-1
            gap-4
            sm:mt-8 sm:gap-5
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          <AnimatePresence mode="popLayout">
            {filteredResources.map(
              (resource) => (
                <ResourceCard
                  key={resource.id}
                  resource={resource}
                  onExplore={
                    setSelectedResource
                  }
                />
              )
            )}
          </AnimatePresence>
        </motion.div>

        {/* EMPTY */}

        {filteredResources.length === 0 && (
          <div
            className="
              mt-8 rounded-3xl
              border border-dashed
              border-slate-200
              bg-slate-50
              px-6 py-16 text-center
            "
          >
            <Search
              className="
                mx-auto h-8 w-8
                text-slate-300
              "
            />

            <h3
              className="
                mt-4 text-lg
                font-semibold
                text-slate-900
              "
            >
              No resources found
            </h3>

            <p
              className="
                mt-2 text-sm
                text-slate-500
              "
            >
              Try another keyword or
              choose a different category.
            </p>
          </div>
        )}

        {/* MORE RESOURCES */}

        <section
          className="
            relative mt-12
            overflow-hidden
            rounded-[2rem]
            border border-slate-200
            bg-gradient-to-br
            from-slate-50 via-white
            to-sky-50
            px-6 py-9 text-center
            sm:mt-16
            sm:px-10 sm:py-11
          "
        >
          <div
            className="
              pointer-events-none
              absolute -right-16 -top-16
              h-40 w-40 rounded-full
              bg-sky-100 blur-3xl
            "
          />

          <div className="relative">
            <div
              className="
                mx-auto flex h-12 w-12
                items-center justify-center
                rounded-2xl bg-white
                text-sky-600 shadow-sm
                ring-1 ring-slate-200
              "
            >
              <Sparkles className="h-5 w-5" />
            </div>

            <p
              className="
                mt-4 text-[10px]
                font-bold uppercase
                tracking-[0.16em]
                text-sky-600
              "
            >
              More resources
            </p>

            <h2
              className="
                mt-2 text-xl
                font-bold tracking-tight
                text-slate-900
                sm:text-2xl
              "
            >
              More developer resources
              coming soon.
            </h2>

            <p
              className="
                mx-auto mt-2
                max-w-lg text-xs
                leading-5 text-slate-500
                sm:text-sm
              "
            >
              More roadmaps, cheat sheets,
              notes and interview preparation
              resources will be added regularly.
            </p>
          </div>
        </section>

        {/* BOTTOM CTA */}

        <section
          className="
            relative mt-8
            overflow-hidden
            rounded-[2rem]
            bg-slate-950
            px-6 py-9
            sm:mt-10
            sm:px-10 sm:py-12
          "
        >
          <div
            className="
              pointer-events-none
              absolute -right-20 -top-20
              h-60 w-60 rounded-full
              bg-sky-500/20 blur-3xl
            "
          />

          <div
            className="
              relative flex flex-col
              gap-6
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <div>
              <span
                className="
                  inline-flex items-center
                  gap-2 rounded-full
                  bg-white/10 px-3 py-1.5
                  text-[9px] font-bold
                  tracking-[0.14em]
                  text-sky-300
                "
              >
                <GitBranch className="h-3 w-3" />

                BUILD YOUR PATH
              </span>

              <h2
                className="
                  mt-4 max-w-2xl
                  text-xl font-bold
                  tracking-tight text-white
                  sm:text-3xl
                "
              >
                Keep learning.
                Keep building.
                Keep growing.
              </h2>

              <p
                className="
                  mt-3 max-w-xl
                  text-xs leading-5
                  text-slate-400
                  sm:text-sm sm:leading-6
                "
              >
                New roadmaps, interview
                questions and developer
                resources will be added regularly.
              </p>
            </div>

            <div
              className="
                flex h-14 w-14
                shrink-0 items-center
                justify-center
                rounded-2xl bg-white/10
                text-sky-300
                ring-1 ring-white/10
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