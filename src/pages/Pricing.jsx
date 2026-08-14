import {
  Check,
  Rocket,
  Building2,
  GraduationCap,
  Server,
  Globe,
  ShieldCheck,
  UploadCloud,
  Wrench,
  TrendingUp,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const PLANS = [
  {
    icon: Rocket,
    title: "Landing Website",
    popular: false,
    cta: "Let's Talk",
    features: [
      "Modern UI Design",
      "Responsive Website",
      "4-6 Pages",
      "Contact Form",
      "Basic SEO Setup",
      "Deployment Support",
    ],
  },
  {
    icon: Building2,
    title: "Business Website",
    popular: true,
    cta: "Let's Talk",
    features: [
      "Premium UI/UX Design",
      "Multiple Pages",
      "React Development",
      "Performance Optimization",
      "SEO Friendly Structure",
      "Business Integration",
    ],
  },
  {
    icon: GraduationCap,
    title: "School & Organization Website",
    popular: false,
    cta: "Let's Talk",
    features: [
      "Responsive Design",
      "Admission Form",
      "Gallery & Notice Board",
      "Events Section",
      "Basic SEO",
      "Free Deployment",
      "30 Days Support",
    ],
  },
  {
    icon: Server,
    title: "Full Stack Web Application",
    popular: false,
    cta: "Let's Talk",
    features: [
      "React Frontend",
      "Java / Spring Boot Backend",
      "Database Integration",
      "Secure Authentication",
      "API Integration",
      "Custom Features",
    ],
  },
];

const ADDITIONAL_SERVICES = [
  { icon: Globe, label: "Domain Registration" },
  { icon: Server, label: "Hosting Setup" },
  { icon: ShieldCheck, label: "SSL Configuration" },
  { icon: UploadCloud, label: "Website Deployment" },
  { icon: Wrench, label: "Website Maintenance" },
  { icon: TrendingUp, label: "SEO Optimization" },
];

function PlanCard({ icon: Icon, title, popular, cta, features }) {
  return (
    <div
      className={`
        group relative flex h-full flex-col rounded-2xl border bg-white p-7
        transition-all duration-300 ease-out
        ${
          popular
            ? "border-sky-200 shadow-[0_20px_50px_rgba(14,165,233,0.14)] lg:-translate-y-3"
            : "border-slate-200 shadow-[0_2px_10px_rgba(15,23,42,0.04)] hover:-translate-y-1.5 hover:border-slate-300 hover:shadow-[0_20px_40px_rgba(15,23,42,0.08)]"
        }
      `}
    >
      {popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-500 to-sky-600 px-4 py-1 text-[11px] font-semibold tracking-wide text-white shadow-[0_6px_16px_rgba(14,165,233,0.35)]">
          Most Popular
        </span>
      )}

      <span
        className={`
          flex h-11 w-11 items-center justify-center rounded-xl ring-1
          transition-transform duration-300 group-hover:scale-105
          ${popular ? "bg-sky-500 text-white ring-sky-500" : "bg-sky-50 text-sky-600 ring-sky-100"}
        `}
      >
        <Icon className="h-5 w-5" />
      </span>

      <h3 className="mt-5 text-base font-semibold tracking-tight text-slate-900">
        {title}
      </h3>

      <ul className="mt-6 flex flex-1 flex-col gap-2.5 border-t border-slate-100 pt-6">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-600">
            <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-sky-500" />
            <span className="leading-snug">{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className={`
          mt-7 inline-flex w-full items-center justify-center rounded-full px-5 py-3
          text-sm font-semibold tracking-tight transition-all duration-300
          hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]
          ${
            popular
              ? "bg-slate-900 text-white shadow-[0_1px_0_rgba(255,255,255,0.15)_inset,0_8px_20px_rgba(15,23,42,0.22)] hover:bg-slate-800 hover:shadow-[0_10px_26px_rgba(15,23,42,0.28)]"
              : "border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
          }
        `}
      >
        {cta}
      </a>
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="relative w-full overflow-hidden bg-white py-24 sm:py-28">
      {/* ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-gradient-to-b from-sky-100/70 via-sky-50/40 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-medium tracking-wide text-slate-500 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-sky-500" />
            Our Services
          </span>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Digital Solutions Built for{" "}
            <span className="bg-gradient-to-r from-sky-500 to-sky-700 bg-clip-text text-transparent">
              Your Business
            </span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-500">
            We build modern, fast, responsive and scalable websites tailored
            to your business goals. Let's discuss your project and create
            something amazing together.
          </p>
        </div>

        {/* Plan grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((plan) => (
            <PlanCard key={plan.title} {...plan} />
          ))}
        </div>

        {/* Additional Services */}
        <div className="mt-20 rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-white to-sky-50/50 p-8 shadow-[0_2px_10px_rgba(15,23,42,0.04)] sm:p-10">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-lg font-semibold tracking-tight text-slate-900">
              Additional Services
            </h3>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {ADDITIONAL_SERVICES.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="
                  flex items-center gap-2.5 rounded-xl border border-slate-200
                  bg-white/80 px-4 py-3 text-sm font-medium text-slate-600
                  backdrop-blur-sm transition-colors duration-300
                  hover:border-sky-200 hover:bg-sky-50/60 hover:text-slate-900
                "
              >
                <Icon className="h-4 w-4 flex-shrink-0 text-sky-500" />
                {label}
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs leading-relaxed text-slate-400">
            Domain and hosting charges are separate and depend on selected
            provider and project requirements.
          </p>
        </div>

        {/* Call To Action */}
        <div
          className="
            relative mt-20 overflow-hidden rounded-2xl border border-slate-200
            bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950
            px-8 py-14 text-center shadow-[0_20px_50px_rgba(15,23,42,0.25)]
            sm:px-14 sm:py-16
          "
        >
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-sky-500/20 blur-3xl" />
          </div>

          <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Ready to Start Your Project?
          </h3>

          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-300">
            Let's discuss your ideas and build a modern website that helps
            your business grow.
          </p>

          <a
            href="#contact"
            className="
              group mt-8 inline-flex items-center justify-center gap-2 rounded-full
              bg-white px-7 py-3 text-sm font-semibold tracking-tight text-slate-900
              shadow-[0_8px_20px_rgba(255,255,255,0.15)] transition-all duration-300
              hover:-translate-y-0.5 hover:shadow-[0_10px_26px_rgba(255,255,255,0.22)]
              active:translate-y-0 active:scale-[0.98]
            "
          >
            Let's Talk
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}