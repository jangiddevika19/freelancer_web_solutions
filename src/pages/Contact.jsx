import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import {
  Mail,
  Send,
  Code2,
  Server,
  PenTool,
  Gauge,
  NotebookPen,
  MessageSquare,
} from "lucide-react";

import { FaLinkedin, FaInstagram } from "react-icons/fa";

/* =====================================================
   GOOGLE reCAPTCHA
===================================================== */
const RECAPTCHA_SITE_KEY =
  import.meta.env.VITE_RECAPTCHA_SITE_KEY ||
  "6LeOdbAtAAAAAKQ0N2mV-FkJOmayWQcTaEqN0F2l";

/* =====================================================
   SERVICES
===================================================== */
const SERVICES = [
  {
    icon: Code2,
    label: "Website Development",
  },
  {
    icon: Server,
    label: "Full Stack Development",
  },
  {
    icon: PenTool,
    label: "UI/UX Design",
  },
  {
    icon: Gauge,
    label: "Website Optimization",
  },
  {
    icon: NotebookPen,
    label: "Custom Notes",
  },
];

/* =====================================================
   SOCIALS
===================================================== */
const SOCIALS = [
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/devika-jangid/",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    href: "https://www.instagram.com/elvoraa.studio",
  },
];

/* =====================================================
   INPUT CLASSES
===================================================== */
const inputClasses = `
  w-full
  min-w-0
  rounded-xl
  border border-slate-200
  bg-white
  px-3.5 py-2.5
  text-sm
  text-slate-700
  placeholder:text-slate-400
  outline-none
  transition-all
  duration-300
  focus:border-sky-300
  focus:ring-4
  focus:ring-sky-100
  sm:px-4
  sm:py-3
`;

/* =====================================================
   CONTACT
===================================================== */
export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  /* =====================================================
     reCAPTCHA STATES
  ===================================================== */
  const recaptchaRef = useRef(null);
  const recaptchaWidgetId = useRef(null);

  const [recaptchaReady, setRecaptchaReady] = useState(false);
  const [recaptchaVerified, setRecaptchaVerified] = useState(false);
  const [recaptchaError, setRecaptchaError] = useState("");

  /* =====================================================
     CUSTOM NOTES → CONTACT FORM
     Automatically select Custom Notes and scroll to form
  ===================================================== */
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const serviceParam = params.get("service");

    if (serviceParam === "custom-notes") {
      setForm((prev) => ({
        ...prev,
        service: "Custom Notes",
      }));

      setTimeout(() => {
        const contactSection =
          document.getElementById("contact");

        if (contactSection) {
          contactSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  }, []);

  /* =====================================================
     LOAD + RENDER GOOGLE reCAPTCHA
  ===================================================== */
  useEffect(() => {
    if (!RECAPTCHA_SITE_KEY) {
      setRecaptchaReady(false);
      return undefined;
    }

    let intervalId = null;
    let cancelled = false;

    const renderRecaptcha = () => {
      if (cancelled) return;

      if (
        !window.grecaptcha ||
        !recaptchaRef.current ||
        recaptchaWidgetId.current !== null
      ) {
        return;
      }

      try {
        recaptchaWidgetId.current =
          window.grecaptcha.render(
            recaptchaRef.current,
            {
              sitekey: RECAPTCHA_SITE_KEY,
              theme: "light",

              callback: () => {
                setRecaptchaVerified(true);
                setRecaptchaError("");
              },

              "expired-callback": () => {
                setRecaptchaVerified(false);
                setRecaptchaError(
                  "CAPTCHA expired. Please verify again."
                );
              },

              "error-callback": () => {
                setRecaptchaVerified(false);
                setRecaptchaError(
                  "CAPTCHA verification failed. Please try again."
                );
              },
            }
          );

        setRecaptchaReady(true);

        if (intervalId) {
          clearInterval(intervalId);
          intervalId = null;
        }
      } catch (error) {
        console.error(
          "reCAPTCHA render failed:",
          error
        );
      }
    };

    const loadScript = () => {
      const existingScript =
        document.querySelector(
          'script[src^="https://www.google.com/recaptcha/api.js"]'
        );

      if (!existingScript) {
        const script =
          document.createElement("script");

        script.src =
          "https://www.google.com/recaptcha/api.js?render=explicit";

        script.async = true;
        script.defer = true;

        document.body.appendChild(script);
      }
    };

    loadScript();

    intervalId = setInterval(() => {
      if (
        window.grecaptcha &&
        recaptchaRef.current
      ) {
        window.grecaptcha.ready(() => {
          renderRecaptcha();
        });
      }
    }, 300);

    if (
      window.grecaptcha &&
      recaptchaRef.current
    ) {
      window.grecaptcha.ready(() => {
        renderRecaptcha();
      });
    }

    return () => {
      cancelled = true;

      if (intervalId) {
        clearInterval(intervalId);
      }

      if (
        window.grecaptcha &&
        recaptchaWidgetId.current !== null
      ) {
        try {
          window.grecaptcha.reset(
            recaptchaWidgetId.current
          );
        } catch (error) {
          console.warn(
            "CAPTCHA reset failed:",
            error
          );
        }
      }

      recaptchaWidgetId.current = null;
      setRecaptchaReady(false);
      setRecaptchaVerified(false);
    };
  }, []);

  /* =====================================================
     RESET CAPTCHA
  ===================================================== */
  const resetRecaptcha = () => {
    if (
      window.grecaptcha &&
      recaptchaWidgetId.current !== null
    ) {
      try {
        window.grecaptcha.reset(
          recaptchaWidgetId.current
        );
      } catch (error) {
        console.error(
          "reCAPTCHA reset failed:",
          error
        );
      }
    }

    setRecaptchaVerified(false);
  };

  /* =====================================================
     INPUT CHANGE
  ===================================================== */
  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setSuccess("");
  };

  /* =====================================================
     FORM SUBMIT
  ===================================================== */
  const handleSubmit = async (e) => {
    e.preventDefault();

    setSuccess("");
    setRecaptchaError("");

    /* -----------------------------------------------
       CAPTCHA CHECK
    ------------------------------------------------ */
    if (!recaptchaReady) {
      setRecaptchaError(
        "CAPTCHA is still loading. Please wait a moment and try again."
      );
      return;
    }

    if (!recaptchaVerified) {
      setRecaptchaError(
        "Please verify the CAPTCHA before sending your message."
      );
      return;
    }

    setLoading(true);

    try {
      /* -----------------------------------------------
         EMAILJS
         SAME WEBSITE CONTACT TEMPLATE
         CUSTOM NOTES ALSO USES THIS
      ------------------------------------------------ */
      await emailjs.send(
        "service_gxdi8kk",
        "template_yutovkd",
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          service: form.service,
          message: form.message,
        },
        {
          publicKey: "_WgZhn1NzggSPGWvl",
        }
      );

      setSuccess("Message sent successfully!");

      setForm({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });

      /* -----------------------------------------------
         RESET CAPTCHA AFTER SUCCESSFUL SUBMISSION
      ------------------------------------------------ */
      resetRecaptcha();
    } catch (error) {
      console.log(error);

      setSuccess(
        "Something went wrong. Try again."
      );

      resetRecaptcha();
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-white
        py-14
        sm:py-20
        lg:py-24
      "
    >
      {/* ================= AMBIENT BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="
            absolute
            left-1/2
            top-0
            h-64
            w-64
            -translate-x-1/2
            rounded-full
            bg-sky-100/50
            blur-3xl
            sm:h-[420px]
            sm:w-[420px]
          "
        />

        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#ffffff_0%,#ffffff_80%,#f8fafc_100%)]" />
      </div>

      {/* ================= MAIN CONTAINER ================= */}
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">

        {/* ================= HEADER ================= */}
        <div className="mx-auto max-w-2xl text-center">

          <span
            className="
              inline-flex
              items-center
              gap-1.5
              rounded-full
              border
              border-slate-200
              bg-white
              px-3
              py-1
              text-[10px]
              font-semibold
              tracking-wide
              text-slate-700
              shadow-sm
              sm:gap-2
              sm:px-4
              sm:py-1.5
              sm:text-xs
            "
          >
            Contact
          </span>

          <h2
            className="
              mt-4
              text-2xl
              font-bold
              leading-tight
              tracking-tight
              text-slate-950
              sm:mt-5
              sm:text-4xl
              lg:text-5xl
            "
          >
            Let's Build Something{" "}
            <span className="bg-gradient-to-r from-sky-500 to-sky-700 bg-clip-text text-transparent">
              Great
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-3
              max-w-xl
              text-xs
              leading-5
              text-slate-500
              sm:mt-4
              sm:text-base
              sm:leading-relaxed
            "
          >
            Have a project in mind? Let's discuss your idea and create a
            modern digital solution that fits your business.
          </p>
        </div>

        {/* ================= CONTENT ================= */}
        <div
          className="
            mt-9
            grid
            grid-cols-1
            gap-5
            sm:mt-12
            sm:gap-8
            lg:grid-cols-[0.85fr_1.15fr]
            lg:gap-12
          "
        >

          {/* ================= LEFT ================= */}
          <div className="min-w-0 space-y-4 sm:space-y-6">

            {/* ================= EMAIL CARD ================= */}
            <div
              className="
                min-w-0
                overflow-hidden
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-4
                shadow-[0_8px_30px_rgba(15,23,42,0.06)]
                transition-transform
                duration-300
                hover:-translate-y-1
                sm:rounded-3xl
                sm:p-6
              "
            >
              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-sky-50
                  sm:h-12
                  sm:w-12
                "
              >
                <Mail className="h-[18px] w-[18px] text-sky-600 sm:h-5 sm:w-5" />
              </div>

              <p className="mt-4 text-[10px] font-medium uppercase tracking-wide text-slate-400 sm:mt-5 sm:text-xs">
                Email
              </p>

              <a
                href="mailto:devikawebsolutions.info@gmail.com"
                className="
                  mt-1
                  block
                  max-w-full
                  break-all
                  text-xs
                  font-semibold
                  leading-5
                  tracking-tight
                  text-slate-800
                  transition-colors
                  duration-300
                  hover:text-sky-600
                  sm:text-base
                  sm:leading-relaxed
                "
              >
                devikawebsolutions.info@gmail.com
              </a>
            </div>

            {/* ================= SERVICES CARD ================= */}
            <div
              className="
                min-w-0
                overflow-hidden
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-4
                shadow-[0_8px_30px_rgba(15,23,42,0.06)]
                sm:rounded-3xl
                sm:p-6
              "
            >
              <p className="text-[10px] font-medium uppercase tracking-wide text-slate-400 sm:text-xs">
                Services
              </p>

              <div className="mt-4 space-y-2.5 sm:mt-5 sm:space-y-3">

                {SERVICES.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="
                      flex
                      min-w-0
                      items-center
                      gap-2.5
                      sm:gap-3
                    "
                  >
                    <span
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        bg-sky-50
                        text-sky-600
                        sm:h-10
                        sm:w-10
                        sm:rounded-xl
                      "
                    >
                      <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </span>

                    <span
                      className="
                        min-w-0
                        truncate
                        text-xs
                        font-medium
                        text-slate-700
                        sm:text-sm
                      "
                    >
                      {label}
                    </span>
                  </div>
                ))}

              </div>
            </div>

            {/* ================= SOCIAL CARD ================= */}
            <div
              className="
                min-w-0
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-4
                shadow-[0_8px_30px_rgba(15,23,42,0.06)]
                sm:rounded-3xl
                sm:p-6
              "
            >
              <p className="text-[10px] font-medium uppercase tracking-wide text-slate-400 sm:text-xs">
                Connect With Me
              </p>

              <div className="mt-4 grid grid-cols-2 gap-2.5 sm:mt-5 sm:gap-3">

                {SOCIALS.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex
                      min-w-0
                      items-center
                      justify-center
                      gap-1.5
                      rounded-xl
                      border
                      border-slate-200
                      px-2
                      py-2.5
                      text-xs
                      font-medium
                      text-slate-600
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:border-sky-200
                      hover:bg-sky-50
                      hover:text-sky-600
                      sm:gap-2
                      sm:px-3
                      sm:py-3
                      sm:text-sm
                    "
                  >
                    <Icon className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
                    <span>{label}</span>
                  </a>
                ))}

              </div>
            </div>
          </div>

          {/* ================= RIGHT FORM ================= */}
          <div
            className="
              min-w-0
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-4
              shadow-[0_15px_50px_rgba(15,23,42,0.07)]
              sm:rounded-3xl
              sm:p-8
            "
          >

            {/* FORM HEADER */}
            <div className="mb-5 sm:mb-7">

              <div className="flex items-center gap-2.5 sm:gap-3">

                <span
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-sky-50
                    text-sky-600
                    sm:h-10
                    sm:w-10
                    sm:rounded-xl
                  "
                >
                  <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5" />
                </span>

                <div className="min-w-0">
                  <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
                    Start a Conversation
                  </h3>

                  <p className="mt-0.5 text-xs text-slate-400 sm:text-sm">
                    Tell me a little about your project.
                  </p>
                </div>

              </div>

            </div>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="space-y-4 sm:space-y-5"
            >

              {/* NAME + EMAIL */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">

                <div className="min-w-0">
                  <label className="mb-1.5 block text-[11px] font-semibold text-slate-600 sm:mb-2 sm:text-xs">
                    Your Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className={inputClasses}
                  />
                </div>

                <div className="min-w-0">
                  <label className="mb-1.5 block text-[11px] font-semibold text-slate-600 sm:mb-2 sm:text-xs">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={inputClasses}
                  />
                </div>

              </div>

              {/* PHONE + SERVICE */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">

                <div className="min-w-0">
                  <label className="mb-1.5 block text-[11px] font-semibold text-slate-600 sm:mb-2 sm:text-xs">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className={inputClasses}
                  />
                </div>

                <div className="min-w-0">
                  <label className="mb-1.5 block text-[11px] font-semibold text-slate-600 sm:mb-2 sm:text-xs">
                    Service
                  </label>

                  <select
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    className={inputClasses}
                  >
                    <option value="">
                      Select a service
                    </option>

                    <option value="Website Development">
                      Website Development
                    </option>

                    <option value="Full Stack Development">
                      Full Stack Development
                    </option>

                    <option value="UI/UX Design">
                      UI/UX Design
                    </option>

                    <option value="Website Optimization">
                      Website Optimization
                    </option>

                    <option value="Custom Notes">
                      Custom Notes
                    </option>
                  </select>
                </div>

              </div>

              {/* CUSTOM NOTES INFO */}
              {form.service === "Custom Notes" && (
                <div
                  className="
                    rounded-xl
                    border
                    border-sky-100
                    bg-sky-50/70
                    px-3
                    py-2.5
                    text-[11px]
                    leading-5
                    text-slate-600
                    sm:px-4
                    sm:py-3
                    sm:text-xs
                    sm:leading-relaxed
                  "
                >
                  <span className="font-semibold text-slate-800">
                    Custom Notes are a paid service.
                  </span>{" "}
                  Pricing depends on your requirements. Most details and
                  further communication will be handled via email.
                </div>
              )}

              {/* MESSAGE */}
              <div className="min-w-0">
                <label className="mb-1.5 block text-[11px] font-semibold text-slate-600 sm:mb-2 sm:text-xs">
                  Project Details
                </label>

                <textarea
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell me about your project..."
                  className={`${inputClasses} resize-none`}
                />
              </div>

              {/* ================= CAPTCHA ================= */}
              <div className="pt-1">

                <div
                  className="
                    overflow-hidden
                    rounded-xl
                    border
                    border-slate-200
                    bg-slate-50
                    p-2
                    sm:p-3
                  "
                >
                  <div
                    ref={recaptchaRef}
                    className="min-h-[78px]"
                  />
                </div>

                {recaptchaError && (
                  <p
                    className="
                      mt-2
                      text-xs
                      font-medium
                      text-red-500
                    "
                  >
                    {recaptchaError}
                  </p>
                )}

              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="
                  group
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
                  font-semibold
                  text-white
                  shadow-[0_8px_20px_rgba(15,23,42,0.15)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-slate-800
                  hover:shadow-[0_12px_28px_rgba(15,23,42,0.2)]
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                  sm:px-6
                  sm:py-3.5
                  sm:text-sm
                "
              >
                {loading ? "Sending..." : "Send Message"}

                {!loading && (
                  <Send className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 sm:h-4 sm:w-4" />
                )}
              </button>

              {/* SUCCESS MESSAGE */}
              {success && (
                <p
                  className={`
                    text-center
                    text-xs
                    font-medium
                    sm:text-sm
                    ${
                      success.includes("successfully")
                        ? "text-emerald-600"
                        : "text-red-500"
                    }
                  `}
                >
                  {success}
                </p>
              )}

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}