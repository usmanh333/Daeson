import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ArrowDown, Bot, Workflow, Code, ShieldCheck } from "lucide-react";
import ExpertiseFlipCard from "@/components/ExpertiseFlipCard";
import { SERVICES as services, GOLD } from "@/lib/services";

export const metadata: Metadata = {
  title: "Our Expertise: AI, Agentic AI & Custom Software",
  description:
    "Custom AI software, AI automation, enterprise AI platforms, CRM and workflow automation, real estate and Islamic finance technology, built for bank-grade security.",
  keywords: [
    "custom AI software development company",
    "AI automation for business",
    "AI workflow automation services",
    "enterprise AI development company",
    "CRM automation services",
    "AI consulting",
    "real estate technology solutions",
    "Islamic finance technology",
    "Agentic AI development",
    "Daeson Technologies",
  ],
  alternates: { canonical: "https://daesontechnologies.online/expertise" },
};

const pillars = [
  {
    index: "01",
    icon: <Bot size={20} />,
    title: "AI & Agentic AI Systems",
    summary:
      "AI built into how your business works, not a chatbot on the side. Agentic systems can complete multi-step work inside clear limits, with a person approving anything important.",
    points: [
      "Agentic workflows with defined permissions and limits",
      "Document analysis, classification and search",
      "Decision-support dashboards",
      "Human approval at consequential steps",
      "Integration with the systems you already use",
      "Ongoing monitoring and evaluation",
    ],
    href: "/industries/enterprise-ai",
  },
  {
    index: "02",
    icon: <Workflow size={20} />,
    title: "Advanced Technology & Automation",
    summary:
      "We map how work really moves through your organisation, then connect the systems and automate the repetitive steps around it.",
    points: [
      "Workflow mapping and automation",
      "Data integration across systems",
      "Operational dashboards and reporting",
      "Approval, routing and escalation flows",
      "Legacy system modernisation",
      "Scalable cloud infrastructure",
    ],
    href: "/industries/workflow-automation",
  },
  {
    index: "03",
    icon: <Code size={20} />,
    title: "Custom Software Development",
    summary:
      "Software built around your actual requirements when no standard product fits. Every build starts with discovery, not a template.",
    points: [
      "Discovery, architecture and scoping",
      "Full-stack web and platform development",
      "APIs and third-party integrations",
      "Industry platforms for real estate and Islamic finance",
      "Clear code and IP ownership terms, agreed upfront",
      "Support and maintenance after launch",
    ],
    href: "/insights/custom-software-vs-off-the-shelf",
  },
  {
    index: "04",
    icon: <ShieldCheck size={20} />,
    title: "Bank-Grade Security, Enterprise Ready",
    summary:
      "Designed for regulated institutions from day one. Security, access and audit trails are part of the architecture, not added after launch.",
    points: [
      "Encryption in transit and at rest",
      "Role-based access control",
      "Full audit trails and activity logs",
      "Data handling aligned to your jurisdiction",
      "Human oversight on automated decisions",
      "Security review before go-live",
    ],
    href: "/amanah-ai",
    accent: GOLD,
  },
];

const steps = [
  { n: "1", title: "Discover", body: "We learn how the work runs today and what success looks like." },
  { n: "2", title: "Pilot", body: "One workflow, built and tested on your real data." },
  { n: "3", title: "Build", body: "We expand what works, with security and integrations in place." },
  { n: "4", title: "Support", body: "Monitoring, improvements and help after launch." },
];

const products = [
  {
    name: "Aylinor",
    audience: "Islamic banks · Islamic windows · Shariah advisory firms",
    body: "AI-powered Shariah compliance and governance platform. It helps Shariah teams work in a more organised, consistent and auditable way, while scholars keep the final decision. Currently in private preview.",
    href: "/amanah-ai",
    dark: true,
  },
  {
    name: "LuxeProperty AI",
    audience: "Developers · Brokerages · Investment firms",
    body: "AI-powered real estate operations platform for listings, leads, investor management, deal pipelines, follow-ups and reporting, so the CEO, team and investors share the same live data.",
    href: "/luxeproperty-ai",
    dark: false,
  },
];

const principles = [
  { title: "Workflow first", body: "We map the real process before writing any code." },
  { title: "Start small", body: "One measurable workflow first, then scale what works." },
  { title: "People decide", body: "AI prepares and suggests; responsible people approve." },
  { title: "Secure by design", body: "Access control, audit trails and data protection from day one." },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Our Expertise | Daeson Technologies",
  description:
    "Custom AI software, AI and Agentic AI systems, workflow automation, enterprise platforms, real estate and Islamic finance technology, built for bank-grade security.",
  url: "https://daesontechnologies.online/expertise",
  isPartOf: { "@id": "https://daesontechnologies.online/#website" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://daesontechnologies.online" },
      { "@type": "ListItem", position: 2, name: "Our Expertise", item: "https://daesontechnologies.online/expertise" },
    ],
  },
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] mb-5" style={{ color: "var(--text-muted)" }}>
      <span className="w-6 h-px" style={{ backgroundColor: GOLD }} />
      {children}
    </p>
  );
}

export default function ExpertisePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <div className="section-light home-white">
        <Navbar />
        <main style={{ backgroundColor: "var(--bg-page)" }}>

          {/* Hero */}
          <section className="relative overflow-hidden">
            {/* Decorative rings */}
            <svg
              aria-hidden
              className="absolute -right-40 -top-24 w-[640px] h-[640px] pointer-events-none hidden md:block"
              viewBox="0 0 640 640"
              fill="none"
            >
              <circle cx="320" cy="320" r="319" stroke="rgba(0,0,0,0.06)" />
              <circle cx="320" cy="320" r="240" stroke="rgba(0,0,0,0.06)" />
              <circle cx="320" cy="320" r="160" stroke="rgba(185,145,47,0.35)" />
              <circle cx="320" cy="320" r="80" stroke="rgba(0,0,0,0.06)" />
            </svg>

            <div className="relative max-w-6xl mx-auto px-6 pt-36 pb-24">
              <div className="hero-in">
                <Eyebrow>Our Expertise</Eyebrow>
              </div>
              <h1
                className="speakable hero-in text-[40px] md:text-[60px] font-extrabold tracking-[-0.03em] leading-[1.04] mb-7 max-w-4xl"
                style={{ color: "var(--text-primary)", animationDelay: "80ms" }}
              >
                AI, Agentic AI and custom software,
                <span style={{ color: "var(--text-muted)" }}> built for bank-grade security.</span>
              </h1>
              <p
                className="hero-in text-[17px] md:text-[18px] leading-[1.7] max-w-2xl mb-10"
                style={{ color: "var(--text-secondary)", animationDelay: "160ms" }}
              >
                We design and build AI systems, automation and software for businesses where generic tools fall
                short and security matters: real estate, Islamic finance and enterprise operations, worldwide.
              </p>
              <div className="hero-in flex flex-col sm:flex-row gap-3" style={{ animationDelay: "240ms" }}>
                <Link href="/contact" className="btn-solid inline-flex items-center justify-center gap-2 px-7 py-4 text-[14px] font-bold rounded-xl">
                  Book a discovery call <ArrowRight size={15} />
                </Link>
                <a href="#services" className="btn-ghost inline-flex items-center justify-center gap-2 px-7 py-4 text-[14px] font-semibold rounded-xl">
                  See what we build <ArrowDown size={15} />
                </a>
              </div>
            </div>
          </section>

          {/* Client services: numbered boxes */}
          <section id="services" className="scroll-mt-24" style={{ backgroundColor: "#F7F7F5", borderTop: "1px solid var(--border)" }}>
            <div className="max-w-6xl mx-auto px-6 py-24">
              <div className="grid md:grid-cols-[1fr_1.4fr] gap-8 mb-14 items-end">
                <div>
                  <Eyebrow>Client Services</Eyebrow>
                  <h2 className="text-[32px] md:text-[42px] font-bold tracking-tight leading-[1.1]" style={{ color: "var(--text-primary)" }}>
                    What we build for clients
                  </h2>
                </div>
                <p className="text-[15px] leading-relaxed md:pb-2" style={{ color: "var(--text-secondary)" }}>
                  For SME founders, operations leaders, real estate firms, Islamic financial institutions, fintech
                  founders and enterprises. Pick the area closest to your problem.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((s, i) => (
                  <Link
                    key={s.title}
                    href={s.href}
                    className="lift-card group relative rounded-2xl p-7 flex flex-col min-h-[200px]"
                    style={{ backgroundColor: "#FFFFFF", border: "1px solid var(--border)" }}
                  >
                    <div className="flex items-start justify-between mb-8">
                      <span className="text-[12px] font-bold tracking-widest" style={{ color: GOLD }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-black group-hover:text-white group-hover:rotate-45"
                        style={{ border: "1px solid var(--border-strong)", color: "var(--text-primary)" }}
                      >
                        <ArrowUpRight size={15} />
                      </span>
                    </div>
                    <h3 className="text-[17px] font-bold tracking-tight mb-2" style={{ color: "var(--text-primary)" }}>
                      {s.title}
                    </h3>
                    <p className="text-[13.5px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      {s.body}
                    </p>
                  </Link>
                ))}

                {/* Last tile: prompt to talk */}
                <Link
                  href="/contact"
                  className="group rounded-2xl p-7 flex flex-col justify-between min-h-[200px] transition-transform hover:-translate-y-1"
                  style={{ backgroundColor: "#0A0A0A", color: "#FFFFFF" }}
                >
                  <span className="text-[12px] font-bold tracking-widest" style={{ color: "#D4AF37" }}>NOT SURE?</span>
                  <div>
                    <p className="text-[18px] font-bold tracking-tight mb-3">Tell us the problem. We&apos;ll point you to the right fit.</p>
                    <span className="inline-flex items-center gap-2 text-[13px] font-semibold" style={{ color: "rgba(255,255,255,0.75)" }}>
                      Contact us <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </section>

          {/* Flashcards */}
          <section style={{ borderTop: "1px solid var(--border)" }}>
            <div className="max-w-6xl mx-auto px-6 py-24">
              <div className="text-center max-w-2xl mx-auto mb-14">
                <Eyebrow>How We Build</Eyebrow>
                <h2 className="text-[32px] md:text-[42px] font-bold tracking-tight leading-[1.1] mb-4" style={{ color: "var(--text-primary)" }}>
                  Premium engineering, enterprise security
                </h2>
                <p className="text-[15px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  Four areas of expertise behind everything we deliver. Tap a card to see what&apos;s included.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {pillars.map((p) => (
                  <ExpertiseFlipCard key={p.index} {...p} />
                ))}
              </div>
            </div>
          </section>

          {/* Process with arrows */}
          <section style={{ backgroundColor: "#F7F7F5", borderTop: "1px solid var(--border)" }}>
            <div className="max-w-6xl mx-auto px-6 py-24">
              <div className="mb-14">
                <Eyebrow>How We Work</Eyebrow>
                <h2 className="text-[32px] md:text-[42px] font-bold tracking-tight leading-[1.1]" style={{ color: "var(--text-primary)" }}>
                  Four simple steps
                </h2>
              </div>
              <ol className="flex flex-col lg:flex-row items-stretch gap-3 lg:gap-0">
                {steps.map((s, i) => (
                  <li key={s.n} className="flex flex-col lg:flex-row items-center lg:flex-1">
                    <div
                      className="w-full h-full rounded-2xl p-7"
                      style={{ backgroundColor: "#FFFFFF", border: "1px solid var(--border)" }}
                    >
                      <span
                        className="w-10 h-10 rounded-full flex items-center justify-center text-[14px] font-bold mb-6"
                        style={{ backgroundColor: "#0A0A0A", color: "#FFFFFF" }}
                      >
                        {s.n}
                      </span>
                      <h3 className="text-[18px] font-bold tracking-tight mb-2" style={{ color: "var(--text-primary)" }}>{s.title}</h3>
                      <p className="text-[13.5px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>{s.body}</p>
                    </div>
                    {i < steps.length - 1 && (
                      <span aria-hidden className="flex items-center justify-center shrink-0 py-2 lg:py-0 lg:px-3" style={{ color: GOLD }}>
                        <ArrowDown size={20} className="lg:hidden" />
                        <ArrowRight size={20} className="hidden lg:block" />
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* Products */}
          <section style={{ borderTop: "1px solid var(--border)" }}>
            <div className="max-w-6xl mx-auto px-6 py-24">
              <div className="mb-14">
                <Eyebrow>Our Products</Eyebrow>
                <h2 className="text-[32px] md:text-[42px] font-bold tracking-tight leading-[1.1]" style={{ color: "var(--text-primary)" }}>
                  Platforms we build and run
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                {products.map((p) => (
                  <Link
                    key={p.name}
                    href={p.href}
                    className="group relative overflow-hidden rounded-3xl p-9 md:p-10 flex flex-col min-h-[340px] transition-transform hover:-translate-y-1"
                    style={
                      p.dark
                        ? { backgroundColor: "#0A0A0A", color: "#FFFFFF" }
                        : { backgroundColor: "#FFFFFF", color: "#0A0A0A", border: "1px solid var(--border-strong)" }
                    }
                  >
                    {/* Corner shape */}
                    <span
                      aria-hidden
                      className="absolute -right-16 -top-16 w-48 h-48 rounded-full transition-transform duration-500 group-hover:scale-110"
                      style={{ border: `1px solid ${p.dark ? "rgba(212,175,55,0.45)" : "rgba(0,0,0,0.10)"}` }}
                    />
                    <p
                      className="text-[11px] font-bold uppercase tracking-[0.16em] mb-6"
                      style={{ color: p.dark ? "#D4AF37" : "rgba(10,10,10,0.5)" }}
                    >
                      {p.audience}
                    </p>
                    <h3 className="text-[30px] font-extrabold tracking-tight mb-4">{p.name}</h3>
                    <p className="text-[14.5px] leading-relaxed flex-1" style={{ color: p.dark ? "rgba(255,255,255,0.72)" : "rgba(10,10,10,0.66)" }}>
                      {p.body}
                    </p>
                    <span className="inline-flex items-center gap-2 text-[13px] font-semibold mt-8">
                      Explore {p.name} <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Principles */}
          <section style={{ backgroundColor: "#F7F7F5", borderTop: "1px solid var(--border)" }}>
            <div className="max-w-6xl mx-auto px-6 py-24">
              <div className="mb-14">
                <Eyebrow>Our Principles</Eyebrow>
                <h2 className="text-[32px] md:text-[42px] font-bold tracking-tight leading-[1.1]" style={{ color: "var(--text-primary)" }}>
                  How we make decisions
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {principles.map((p) => (
                  <div key={p.title} className="rounded-2xl p-7" style={{ backgroundColor: "#FFFFFF", border: "1px solid var(--border)" }}>
                    <span aria-hidden className="block w-3 h-3 rotate-45 mb-6" style={{ backgroundColor: GOLD }} />
                    <h3 className="text-[16px] font-bold tracking-tight mb-2" style={{ color: "var(--text-primary)" }}>{p.title}</h3>
                    <p className="text-[13.5px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>{p.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="px-6 py-24" style={{ borderTop: "1px solid var(--border)" }}>
            <div
              className="relative overflow-hidden max-w-6xl mx-auto rounded-[32px] p-10 md:p-16 grid md:grid-cols-[1.4fr_1fr] gap-10 items-center"
              style={{ backgroundColor: "#0A0A0A", color: "#FFFFFF" }}
            >
              <span
                aria-hidden
                className="absolute -left-24 -bottom-24 w-72 h-72 rounded-full pointer-events-none"
                style={{ border: "1px solid rgba(212,175,55,0.35)" }}
              />
              <div className="relative">
                <h2 className="text-[30px] md:text-[40px] font-bold tracking-tight leading-[1.1] mb-5">
                  Start with one conversation.
                </h2>
                <p className="text-[15px] leading-relaxed mb-8 max-w-lg" style={{ color: "rgba(255,255,255,0.7)" }}>
                  Tell us about the workflow, the systems involved and your security requirements. We&apos;ll tell
                  you honestly whether custom development, integration or an existing product is the right fit.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-7 py-4 text-[14px] font-bold rounded-xl transition-transform hover:-translate-y-0.5"
                    style={{ backgroundColor: "#FFFFFF", color: "#0A0A0A" }}
                  >
                    Book a discovery call <ArrowRight size={14} />
                  </Link>
                  <Link
                    href="/demo"
                    className="inline-flex items-center gap-2 px-7 py-4 text-[14px] font-semibold rounded-xl transition-colors hover:bg-white/10"
                    style={{ border: "1px solid rgba(255,255,255,0.25)", color: "#FFFFFF" }}
                  >
                    Request a demo
                  </Link>
                </div>
              </div>
              <ul className="relative space-y-3">
                {[
                  { label: "First step", value: "Discovery session" },
                  { label: "Approach", value: "One workflow, then scale" },
                  { label: "Security", value: "Built for regulated institutions" },
                  { label: "Markets", value: "UAE, GCC, UK, Canada, Pakistan" },
                ].map((item) => (
                  <li
                    key={item.label}
                    className="flex items-center justify-between gap-4 px-5 py-4 rounded-xl"
                    style={{ border: "1px solid rgba(255,255,255,0.12)" }}
                  >
                    <span className="text-[12px] font-semibold" style={{ color: "rgba(255,255,255,0.45)" }}>{item.label}</span>
                    <span className="text-[13px] font-medium text-right">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

        </main>
      </div>
      <Footer />
    </>
  );
}
