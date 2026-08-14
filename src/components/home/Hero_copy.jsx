import { ArrowRight, Play, Code2, Coffee, Server, Layers } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-gradient-to-b from-sky-100 via-sky-50 to-transparent blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#ffffff_0%,#ffffff_70%,#f8fafc_100%)]" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-6 py-24 sm:py-28 lg:grid-cols-2 lg:gap-12 lg:py-32">
        {/* ===================== LEFT: copy ===================== */}
        <div className="flex flex-col items-start text-left">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-1.5 shadow-sm backdrop-blur-sm">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sky-500" />
            </span>
            <span className="text-xs font-medium tracking-wide text-slate-600">
              Freelance Web Developer
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Building{" "}
            <span className="bg-gradient-to-r from-sky-500 to-sky-700 bg-clip-text text-transparent">
              Modern Websites
            </span>{" "}
            That{" "}
            <span className="bg-gradient-to-r from-sky-500 to-sky-700 bg-clip-text text-transparent">
              Grow
            </span>{" "}
            Your Business
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-500 sm:text-lg">
            I design and build fast, responsive websites, web apps, and
            end-to-end digital solutions — crafted with clean code and a
            focus on real business results, from first sketch to production.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="
                group inline-flex items-center justify-center gap-2 rounded-full
                bg-slate-900 px-7 py-3.5 text-sm font-semibold tracking-tight text-white
                shadow-[0_1px_0_rgba(255,255,255,0.15)_inset,0_8px_20px_rgba(15,23,42,0.2)]
                transition-all duration-300 ease-out
                hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-[0_10px_26px_rgba(15,23,42,0.28)]
                active:translate-y-0 active:scale-[0.98]
              "
            >
              Start Your Project
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>

            <a
              href="#portfolio"
              className="
                group inline-flex items-center justify-center gap-2 rounded-full
                border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold
                tracking-tight text-slate-700 transition-all duration-300 ease-out
                hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50
                active:translate-y-0 active:scale-[0.98]
              "
            >
              <Play className="h-3.5 w-3.5 text-slate-400 transition-colors duration-300 group-hover:text-sky-600" />
              View Portfolio
            </a>
          </div>

          {/* trust strip */}
          <div className="mt-14 flex items-center gap-8 border-t border-slate-100 pt-6">
            <div>
              <p className="text-2xl font-semibold text-slate-900">50+</p>
              <p className="text-xs text-slate-400">Projects delivered</p>
            </div>
            <div className="h-8 w-px bg-slate-200" />
            <div>
              <p className="text-2xl font-semibold text-slate-900">4.9/5</p>
              <p className="text-xs text-slate-400">Client rating</p>
            </div>
            <div className="h-8 w-px bg-slate-200" />
            <div>
              <p className="text-2xl font-semibold text-slate-900">3+ yrs</p>
              <p className="text-xs text-slate-400">Experience</p>
            </div>
          </div>
        </div>

        {/* ===================== RIGHT: visual ===================== */}
        <div className="relative mx-auto w-full max-w-md lg:mx-0">
          {/* profile card */}
          <div
            className="
              relative z-10 flex flex-col items-center rounded-3xl border border-slate-200
              bg-white/90 p-8 text-center shadow-[0_20px_60px_rgba(15,23,42,0.08)]
              backdrop-blur-sm transition-transform duration-500 hover:-translate-y-1
            "
          >
           {/* Profile Image */}
<div
  className="
    h-28 w-28 
    rounded-full 
    overflow-hidden
    ring-4 ring-white
    shadow-lg
  "
>
  <img
    src="/devika.jpeg"
    alt="Devika"
    className="
      h-full
      w-full
      object-cover
    "
  />
</div>

            <h3 className="mt-5 text-lg font-semibold tracking-tight text-slate-900">
              Devika Jangid
            </h3>
            <p className="mt-1 text-sm font-medium text-sky-600">
              Full Stack Developer
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Turning ideas into fast, reliable, production-ready products.
            </p>

            <div className="mt-6 flex items-center gap-2">
              {["React", "Java", "Spring Boot"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-slate-50 px-3 py-1 text-[11px] font-medium text-slate-500 ring-1 ring-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* floating skill card: React */}
          <div
            className="
              absolute -left-8 -top-6 z-20 flex items-center gap-2.5 rounded-2xl
              border border-slate-200 bg-white px-4 py-3 shadow-[0_10px_30px_rgba(15,23,42,0.1)]
              animate-[float_6s_ease-in-out_infinite]
              transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(15,23,42,0.14)]
            "
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
              <Code2 className="h-4 w-4" />
            </span>
            <span className="text-xs font-semibold text-slate-700">React</span>
          </div>

          {/* floating skill card: Java */}
          <div
            className="
              absolute -right-6 top-16 z-20 flex items-center gap-2.5 rounded-2xl
              border border-slate-200 bg-white px-4 py-3 shadow-[0_10px_30px_rgba(15,23,42,0.1)]
              animate-[float_7s_ease-in-out_infinite]
              [animation-delay:0.8s]
              transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(15,23,42,0.14)]
            "
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-50 text-slate-600">
              <Coffee className="h-4 w-4" />
            </span>
            <span className="text-xs font-semibold text-slate-700">Java</span>
          </div>

          {/* floating skill card: Spring Boot */}
          <div
            className="
              absolute -left-10 bottom-16 z-20 flex items-center gap-2.5 rounded-2xl
              border border-slate-200 bg-white px-4 py-3 shadow-[0_10px_30px_rgba(15,23,42,0.1)]
              animate-[float_6.5s_ease-in-out_infinite]
              [animation-delay:1.6s]
              transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(15,23,42,0.14)]
            "
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <Server className="h-4 w-4" />
            </span>
            <span className="text-xs font-semibold text-slate-700">Spring Boot</span>
          </div>

          {/* floating skill card: Full Stack Development */}
          <div
            className="
              absolute -bottom-8 right-2 z-20 flex items-center gap-2.5 rounded-2xl
              border border-slate-200 bg-white px-4 py-3 shadow-[0_10px_30px_rgba(15,23,42,0.1)]
              animate-[float_7.5s_ease-in-out_infinite]
              [animation-delay:0.4s]
              transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(15,23,42,0.14)]
            "
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
              <Layers className="h-4 w-4" />
            </span>
            <span className="text-xs font-semibold text-slate-700">
              Full Stack Development
            </span>
          </div>

          {/* soft glow behind the card */}
          <div className="absolute inset-0 -z-10 translate-y-6 scale-95 rounded-3xl bg-sky-100/60 blur-3xl" />
        </div>
      </div>

      {/* keyframes for the floating cards */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @media (prefers-reduced-motion: reduce) {
          [class*="animate-["] { animation: none !important; }
        }
      `}</style>
    </section>
  );
}