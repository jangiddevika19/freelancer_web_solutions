import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 sm:px-6">
      <nav
        className="
          mx-auto mt-5 flex max-w-7xl items-center justify-between
          rounded-2xl border border-slate-200
          bg-white/90 px-5 py-4
          shadow-[0_10px_30px_rgba(15,23,42,0.08)]
          backdrop-blur-xl
        "
      >
        {/* Logo */}
        <a
          href="#home"
          className="flex min-w-0 items-center gap-3"
        >
          <div
            className="
              h-11 w-11 shrink-0 overflow-hidden rounded-xl
              ring-1 ring-slate-200
              shadow-[0_4px_12px_rgba(15,23,42,0.15)]
              transition-transform duration-300
              hover:scale-105
            "
          >
            <img
              src="/devika.jpeg"
              alt="Devika Jangid"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="min-w-0">
            <h2 className="truncate text-sm font-bold text-slate-900 sm:text-base">
              Devika Web Solutions
            </h2>

            <p className="text-[11px] text-slate-400">
              Web & Product Studio
            </p>
          </div>
        </a>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
          {NAV_LINKS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="
                  text-sm font-medium text-slate-600
                  transition hover:text-slate-900
                "
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Button */}
        <div className="flex shrink-0 items-center gap-3">
          <a
            href="#contact"
            className="
              hidden items-center gap-2
              rounded-full bg-slate-900
              px-6 py-3
              text-sm font-semibold text-white
              transition hover:bg-slate-800
              lg:flex
            "
          >
            Start Project
            <ArrowRight className="h-4 w-4" />
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="
              flex h-10 w-10 items-center justify-center
              rounded-xl border border-slate-200
              text-slate-700
              lg:hidden
            "
          >
            {open ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div
          className="
            mx-4 mt-3 rounded-2xl
            border border-slate-200
            bg-white p-5
            shadow-xl lg:hidden
          "
        >
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="
                  text-sm font-medium text-slate-600
                  transition hover:text-slate-900
                "
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="
                mt-2 rounded-full
                bg-slate-900 py-3
                text-center text-sm font-semibold
                text-white
              "
            >
              Start Project
            </a>
          </div>
        </div>
      )}
    </header>
  );
}