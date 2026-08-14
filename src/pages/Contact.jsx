import { useState } from "react";
import emailjs from "@emailjs/browser";

import {
  Mail,
  Send,
  Code2,
  Server,
  PenTool,
  Gauge,
  Phone,
  MessageSquare,
} from "lucide-react";

import { FaLinkedin, FaInstagram } from "react-icons/fa";

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
];

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

const inputClasses = `
  w-full
  min-w-0
  rounded-xl
  border border-slate-200
  bg-white
  px-4 py-3
  text-sm
  text-slate-700
  placeholder:text-slate-400
  outline-none
  transition-all
  duration-300
  focus:border-sky-300
  focus:ring-4
  focus:ring-sky-100
`;

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

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");

    try {
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
    } catch (error) {
      console.log(error);
      setSuccess("Something went wrong. Try again.");
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
        py-20
        sm:py-24
      "
    >
      {/* Ambient Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-sky-100/50 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#ffffff_0%,#ffffff_80%,#f8fafc_100%)]" />
      </div>

      {/* Main Container */}
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">

        {/* ================= HEADER ================= */}
        <div className="mx-auto max-w-2xl text-center">

          <span
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-slate-200
              bg-white
              px-4
              py-1.5
              text-xs
              font-semibold
              tracking-wide
              text-slate-700
              shadow-sm
            "
          >
            Contact
          </span>

          <h2
            className="
              mt-5
              text-3xl
              font-bold
              tracking-tight
              text-slate-950
              sm:text-4xl
              lg:text-5xl
            "
          >
            Let's Build Something{" "}
            <span className="bg-gradient-to-r from-sky-500 to-sky-700 bg-clip-text text-transparent">
              Great
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-500 sm:text-base">
            Have a project in mind? Let's discuss your idea and create a
            modern digital solution that fits your business.
          </p>
        </div>

        {/* ================= CONTENT ================= */}
        <div
          className="
            mt-14
            grid
            grid-cols-1
            gap-8
            lg:grid-cols-[0.85fr_1.15fr]
            lg:gap-12
          "
        >

          {/* ================= LEFT ================= */}
          <div className="min-w-0 space-y-6">

            {/* EMAIL CARD */}
            <div
              className="
                min-w-0
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-6
                shadow-[0_8px_30px_rgba(15,23,42,0.06)]
                transition-transform
                duration-300
                hover:-translate-y-1
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-sky-50
                "
              >
                <Mail className="h-5 w-5 text-sky-600" />
              </div>

              <p className="mt-5 text-xs font-medium uppercase tracking-wide text-slate-400">
                Email
              </p>

   <a
  href="mailto:devikawebsolutions.info@gmail.com"
  className="
    mt-1
    block
    whitespace-nowrap
    text-[13px]
    font-semibold
    leading-relaxed
    tracking-tight
    text-slate-800
    transition-colors
    duration-300
    hover:text-sky-600
    sm:text-base
  "
>
  devikawebsolutions.info@gmail.com
</a>
            </div>

            {/* SERVICES CARD */}
            <div
              className="
                min-w-0
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-6
                shadow-[0_8px_30px_rgba(15,23,42,0.06)]
              "
            >
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Services
              </p>

              <div className="mt-5 space-y-3">

                {SERVICES.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="
                      flex
                      min-w-0
                      items-center
                      gap-3
                    "
                  >
                    <span
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-sky-50
                        text-sky-600
                      "
                    >
                      <Icon className="h-4 w-4" />
                    </span>

                    <span
                      className="
                        min-w-0
                        truncate
                        text-sm
                        font-medium
                        text-slate-700
                      "
                    >
                      {label}
                    </span>
                  </div>
                ))}

              </div>
            </div>

            {/* SOCIAL CARD */}
            <div
              className="
                min-w-0
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-6
                shadow-[0_8px_30px_rgba(15,23,42,0.06)]
              "
            >
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Connect With Me
              </p>

              <div className="mt-5 grid grid-cols-2 gap-3">

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
                      gap-2
                      rounded-xl
                      border
                      border-slate-200
                      px-3
                      py-3
                      text-sm
                      font-medium
                      text-slate-600
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:border-sky-200
                      hover:bg-sky-50
                      hover:text-sky-600
                    "
                  >
                    <Icon className="h-4 w-4 shrink-0" />

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
              rounded-3xl
              border
              border-slate-200
              bg-white
              p-5
              shadow-[0_15px_50px_rgba(15,23,42,0.07)]
              sm:p-8
            "
          >

            <div className="mb-7">

              <div className="flex items-center gap-3">

                <span
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-sky-50
                    text-sky-600
                  "
                >
                  <MessageSquare className="h-5 w-5" />
                </span>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    Start a Conversation
                  </h3>

                  <p className="text-sm text-slate-400">
                    Tell me a little about your project.
                  </p>
                </div>

              </div>

            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* NAME + EMAIL */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                <div className="min-w-0">

                  <label className="mb-2 block text-xs font-semibold text-slate-600">
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

                  <label className="mb-2 block text-xs font-semibold text-slate-600">
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
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                <div className="min-w-0">

                  <label className="mb-2 block text-xs font-semibold text-slate-600">
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

                  <label className="mb-2 block text-xs font-semibold text-slate-600">
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
                  </select>

                </div>

              </div>

              {/* MESSAGE */}
              <div className="min-w-0">

                <label className="mb-2 block text-xs font-semibold text-slate-600">
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
                  px-6
                  py-3.5
                  text-sm
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
                "
              >
                {loading ? "Sending..." : "Send Message"}

                {!loading && (
                  <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                )}
              </button>

              {/* SUCCESS MESSAGE */}
              {success && (
                <p
                  className={`
                    text-center
                    text-sm
                    font-medium
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