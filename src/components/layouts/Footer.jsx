import {
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const FOOTER_LINKS = [
  "Home",
  "Services",
  "Portfolio",
  "Pricing",
  "About",
  "Contact",
];

const SERVICES = [
  "Website Development",
  "Full Stack Development",
  "UI/UX Design",
  "Website Optimization",
];

const SOCIALS = [
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/devika-jangid/",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    link: "https://www.instagram.com/elvoraa.studio/",
  },
];

export default function Footer() {
  return (
    <footer
      className="
        relative overflow-hidden
        border-t border-slate-200
        bg-slate-100
      "
    >
      {/* =========================================
          PREMIUM BACKGROUND
      ========================================= */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        {/* Top blue glow */}
        <div
          className="
            absolute left-1/2 top-0
            h-[280px] w-[650px]
            -translate-x-1/2 -translate-y-1/3
            rounded-full
            bg-sky-200/45
            blur-[110px]
          "
        />

        {/* Bottom right glow */}
        <div
          className="
            absolute right-[-100px] bottom-[-120px]
            h-[360px] w-[420px]
            rounded-full
            bg-indigo-200/30
            blur-[110px]
          "
        />

        {/* Bottom left glow */}
        <div
          className="
            absolute left-[-150px] bottom-[-150px]
            h-[320px] w-[360px]
            rounded-full
            bg-cyan-200/20
            blur-[100px]
          "
        />

        {/* Very subtle grid */}
        <div
          className="
            absolute inset-0
            opacity-[0.035]
            [background-image:linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)]
            [background-size:48px_48px]
          "
        />
      </div>

      {/* =========================================
          FOOTER CONTENT
      ========================================= */}
      <div
        className="
          relative mx-auto
          max-w-7xl
          px-5 py-14
          sm:px-8 sm:py-16
          lg:px-10 lg:py-20
        "
      >
        <div
          className="
            grid grid-cols-1
            gap-12
            sm:grid-cols-2
            lg:grid-cols-[1.5fr_0.8fr_1fr_1.1fr]
            lg:gap-14
          "
        >
          {/* =====================================
              BRAND
          ===================================== */}
          <div>
            <div className="flex items-center gap-3.5">
              {/* Logo */}
              <div
                className="
                  relative flex h-12 w-12 shrink-0
                  items-center justify-center
                  overflow-hidden
                  rounded-2xl
                  bg-slate-950
                  text-lg font-bold
                  text-white
                  shadow-lg
                  shadow-slate-900/15
                "
              >
                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-br
                    from-sky-400/30
                    via-transparent
                    to-indigo-500/30
                  "
                />

                <span className="relative">D</span>
              </div>

              {/* Brand Name */}
              <div>
                <h3
                  className="
                    text-[17px]
                    font-bold
                    tracking-[-0.02em]
                    text-slate-950
                  "
                >
                  Devika Web Solutions
                </h3>

                <p
                  className="
                    mt-0.5
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.14em]
                    text-sky-700
                  "
                >
                  Web & Product Studio
                </p>
              </div>
            </div>

            {/* Description */}
            <p
              className="
                mt-6
                max-w-sm
                text-sm
                leading-7
                text-slate-500
              "
            >
              Creating modern websites and scalable digital
              solutions that help businesses grow online.
            </p>

            {/* Brand Tagline */}
            <div className="mt-6 flex items-center gap-2">
              <span className="h-px w-8 bg-sky-500" />

              <span
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-slate-400
                "
              >
                Build • Design • Grow
              </span>
            </div>
          </div>

          {/* =====================================
              QUICK LINKS
          ===================================== */}
          <div>
            <h4
              className="
                text-[11px]
                font-bold
                uppercase
                tracking-[0.17em]
                text-slate-950
              "
            >
              Quick Links
            </h4>

            <ul className="mt-6 space-y-3.5">
              {FOOTER_LINKS.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="
                      group
                      inline-flex
                      items-center
                      text-sm
                      text-slate-500
                      transition-all
                      duration-300
                      hover:translate-x-1
                      hover:text-slate-950
                    "
                  >
                    <span
                      className="
                        relative
                        after:absolute
                        after:-bottom-1
                        after:left-0
                        after:h-px
                        after:w-0
                        after:bg-sky-500
                        after:transition-all
                        after:duration-300
                        group-hover:after:w-full
                      "
                    >
                      {item}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* =====================================
              SERVICES
          ===================================== */}
          <div>
            <h4
              className="
                text-[11px]
                font-bold
                uppercase
                tracking-[0.17em]
                text-slate-950
              "
            >
              Services
            </h4>

            <ul className="mt-6 space-y-3.5">
              {SERVICES.map((item) => (
                <li key={item}>
                  <span
                    className="
                      group
                      inline-flex
                      cursor-default
                      items-center
                      text-sm
                      text-slate-500
                      transition-all
                      duration-300
                      hover:translate-x-1
                      hover:text-slate-950
                    "
                  >
                    <span
                      className="
                        mr-2
                        h-1
                        w-1
                        shrink-0
                        rounded-full
                        bg-slate-300
                        transition-colors
                        duration-300
                        group-hover:bg-sky-500
                      "
                    />

                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* =====================================
              CONNECT
          ===================================== */}
          <div>
            <h4
              className="
                text-[11px]
                font-bold
                uppercase
                tracking-[0.17em]
                text-slate-950
              "
            >
              Connect
            </h4>

            {/* Email */}
            <a
              href="mailto:devika1909jangid19@gmail.com"
              className="
                group
                mt-6
                inline-flex
                max-w-full
                items-center
                text-sm
                font-medium
                text-slate-600
                transition-colors
                duration-300
                hover:text-sky-700
              "
            >
              <span className="truncate">
                devikawebsolutions.info@gmail.com
              </span>

              <span
                className="
                  ml-2
                  translate-x-[-5px]
                  opacity-0
                  transition-all
                  duration-300
                  group-hover:translate-x-0
                  group-hover:opacity-100
                "
              >
                →
              </span>
            </a>

            {/* Social Icons */}
            <div className="mt-6 flex gap-2.5">
              {SOCIALS.map(({ icon: Icon, link, label }) => (
                <a
                  key={label}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="
                    group
                    flex h-10 w-10
                    items-center justify-center
                    rounded-xl
                    border border-slate-200
                    bg-white/90
                    text-slate-500
                    shadow-sm
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-sky-200
                    hover:bg-sky-50
                    hover:text-sky-700
                    hover:shadow-md
                    hover:shadow-sky-100/70
                  "
                >
                  <Icon
                    size={15}
                    className="
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* =====================================
            BOTTOM FOOTER
        ===================================== */}
        <div
          className="
            mt-14
            border-t border-slate-300/70
            pt-6
            sm:mt-16
            sm:flex
            sm:items-center
            sm:justify-between
            sm:gap-6
          "
        >
          {/* Copyright */}
          <p
            className="
              text-center
              text-[11px]
              font-medium
              text-slate-400
              sm:text-left
            "
          >
            © {new Date().getFullYear()} Devika Web Solutions.
            All rights reserved.
          </p>

          {/* Credit */}
          <p
            className="
              mt-2
              text-center
              text-[10px]
              font-medium
              tracking-wide
              text-slate-400
              sm:mt-0
              sm:text-right
            "
          >
            Designed & Developed by{" "}
            <span className="font-semibold text-slate-600">
              Devika Jangid
            </span>{" "}
            · Java Full Stack Developer
          </p>
        </div>
      </div>
    </footer>
  );
}