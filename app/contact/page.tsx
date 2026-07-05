import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Executive Consultation — Start a Conversation",
  description:
    "Schedule an executive consultation with Daeson Technologies. We map your operations, identify infrastructure gaps, and present a clear architectural approach — no commitment required.",
  alternates: { canonical: "https://daesontechnologies.online/contact" },
};

const interests = [
  "Real Estate Operations Platform",
  "Amanah AI",
  "Enterprise AI Systems",
  "Strategic Partnership",
  "Executive Consultation",
  "Other",
];

const industries = [
  "Real Estate & PropTech",
  "Islamic Finance",
  "Enterprise Operations",
  "Other",
];

const budgets = [
  "Exploring — budget TBD",
  "Under $25,000",
  "$25,000 – $75,000",
  "$75,000 – $150,000",
  "$150,000+",
];

const timelines = [
  "Immediately (within 1 month)",
  "Soon (1–3 months)",
  "Planning (3–6 months)",
  "Exploring (6+ months)",
];

const teamSizes = ["1–10", "11–50", "51–200", "200+"];

const process = [
  {
    n: "01",
    title: "Workflow Discovery",
    desc: "We map your current operational systems, identify friction points, and understand where real inefficiency lives.",
  },
  {
    n: "02",
    title: "Infrastructure Assessment",
    desc: "We evaluate what you own versus what you rent — and calculate the long-term cost of the status quo.",
  },
  {
    n: "03",
    title: "Architectural Approach",
    desc: "We present a systems design tailored to your specific workflows. Not a generic proposal — a real plan.",
  },
  {
    n: "04",
    title: "Scope & Timeline",
    desc: "If there is a fit, we outline a fixed-scope proposal with no obligation to proceed.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: "var(--bg-page)", minHeight: "100vh" }}>

        {/* ── HERO ── */}
        <section className="relative overflow-hidden pt-32 pb-16 px-6">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(255,255,255,0.06) 0%, transparent 70%)" }}
          />
          <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase mb-8"
              style={{ border: "1px solid var(--blue-border)", backgroundColor: "var(--blue-muted)", color: "var(--blue)" }}
            >
              Executive Consultation
            </div>
            <h1 className="speakable text-[38px] md:text-[54px] font-extrabold leading-[1.06] tracking-tight mb-5" style={{ color: "var(--text-primary)" }}>
              Let&apos;s map your{" "}
              <span style={{ color: "var(--blue)" }}>operational infrastructure.</span>
            </h1>
            <p className="text-[16px] leading-relaxed max-w-xl mx-auto" style={{ color: "var(--text-secondary)" }}>
              A complimentary session where we understand your operations, identify where systems are
              failing you, and present a concrete architectural approach — before any commitment.
            </p>
          </div>
        </section>

        {/* ── MAIN GRID ── */}
        <div className="section-light pt-4">
        <section className="px-6 pb-24">
          <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1.1fr] gap-14 items-start">

            {/* Left — Info */}
            <div>
              {/* Process */}
              <div className="mb-10">
                <p className="text-[10px] font-bold uppercase tracking-widest mb-6" style={{ color: "var(--text-faint)" }}>
                  What happens in the consultation
                </p>
                <div className="space-y-5">
                  {process.map((item) => (
                    <div key={item.n} className="flex items-start gap-4">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-black"
                        style={{ backgroundColor: "var(--blue-muted)", border: "1px solid var(--blue-border)", color: "var(--blue)" }}
                      >
                        {item.n}
                      </div>
                      <div>
                        <p className="text-[13px] font-semibold mb-1" style={{ color: "var(--text-primary)" }}>{item.title}</p>
                        <p className="text-[12px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust signals */}
              <div className="grid grid-cols-2 gap-3 mb-10">
                {[
                  "No commitment required",
                  "Founder-led session",
                  "Architecture provided",
                  "24–48hr response",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 px-4 py-3 rounded-xl text-[12px] font-medium"
                    style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)", color: "var(--text-secondary)" }}
                  >
                    <CheckCircle size={13} style={{ color: "var(--blue)", flexShrink: 0 }} />
                    {item}
                  </div>
                ))}
              </div>

              {/* Calendly */}
              <div
                className="rounded-2xl p-6"
                style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)" }}
              >
                <p className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: "var(--text-faint)" }}>
                  Prefer to speak first?
                </p>
                <p className="text-[13px] leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
                  Book a 20-minute introductory call directly with the founding team. No pitch, just a
                  conversation about your operations.
                </p>
                <a
                  href="https://calendly.com/d/dv3h-6kf-yf7/stratergic-discussion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-semibold rounded-xl transition-all hover:opacity-90"
                  style={{ backgroundColor: "var(--blue)", color: "var(--on-blue)" }}
                >
                  <Calendar size={13} />
                  Schedule Introductory Call
                </a>
              </div>

              {/* Contact alternatives */}
              <div className="mt-10 space-y-3">
                <p className="text-[10px] font-bold uppercase tracking-widest mb-4" style={{ color: "var(--text-faint)" }}>
                  Direct Contact
                </p>
                {[
                  {
                    label: "General Inquiries",
                    email: "contact@daesontechagency.online",
                    desc: "Product questions, general information",
                  },
                  {
                    label: "Strategic Partnerships",
                    email: "partnerships@daesontechagency.online",
                    desc: "Partnership and advisory discussions",
                  },
                  {
                    label: "Founder Conversations",
                    email: "mahnoorzafar@daesontechagency.online",
                    desc: "Strategic conversations — handled personally by Mahnoor",
                  },
                ].map((contact) => (
                  <div
                    key={contact.label}
                    className="rounded-xl p-4"
                    style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)" }}
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-widest mb-1" style={{ color: "var(--text-faint)" }}>
                      {contact.label}
                    </p>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-[13px] font-semibold transition-colors block mb-0.5"
                      style={{ color: "var(--blue)" }}
                    >
                      {contact.email}
                    </a>
                    <p className="text-[11px]" style={{ color: "var(--text-faint)" }}>{contact.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Form */}
            <div
              className="rounded-2xl p-7 md:p-8"
              style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)" }}
            >
              <h2 className="text-[20px] font-bold mb-1 tracking-tight" style={{ color: "var(--text-primary)" }}>
                Tell us about your business
              </h2>
              <p className="text-[12px] mb-7" style={{ color: "var(--text-faint)" }}>
                Fields marked * are required. We respond within 24–48 hours.
              </p>

              <form
                action="https://formsubmit.co/contact@daesontechagency.online"
                method="POST"
                className="space-y-5"
              >
                <input type="hidden" name="_subject" value="New Executive Consultation Request — Daeson Technologies" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value="https://daesontechnologies.online/thank-you" />
                <input type="text" name="_honey" className="hidden" aria-hidden="true" tabIndex={-1} />

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: "var(--text-muted)" }}>
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      required
                      autoComplete="given-name"
                      className="w-full rounded-xl px-4 py-3 text-[13px] transition-colors focus:outline-none"
                      style={{
                        backgroundColor: "var(--bg-page)",
                        border: "1px solid var(--border)",
                        color: "var(--text-primary)",
                      }}
                      placeholder="First name"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: "var(--text-muted)" }}>
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      required
                      autoComplete="family-name"
                      className="w-full rounded-xl px-4 py-3 text-[13px] transition-colors focus:outline-none"
                      style={{
                        backgroundColor: "var(--bg-page)",
                        border: "1px solid var(--border)",
                        color: "var(--text-primary)",
                      }}
                      placeholder="Last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: "var(--text-muted)" }}>
                    Business Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    className="w-full rounded-xl px-4 py-3 text-[13px] transition-colors focus:outline-none"
                    style={{
                      backgroundColor: "var(--bg-page)",
                      border: "1px solid var(--border)",
                      color: "var(--text-primary)",
                    }}
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: "var(--text-muted)" }}>
                    Company *
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    autoComplete="organization"
                    className="w-full rounded-xl px-4 py-3 text-[13px] transition-colors focus:outline-none"
                    style={{
                      backgroundColor: "var(--bg-page)",
                      border: "1px solid var(--border)",
                      color: "var(--text-primary)",
                    }}
                    placeholder="Company name"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: "var(--text-muted)" }}>
                    Area of Interest *
                  </label>
                  <select
                    name="area_of_interest"
                    required
                    className="w-full rounded-xl px-4 py-3 text-[13px] focus:outline-none appearance-none"
                    style={{
                      backgroundColor: "var(--bg-page)",
                      border: "1px solid var(--border)",
                      color: "var(--text-primary)",
                    }}
                  >
                    <option value="">Select area of interest</option>
                    {interests.map((i) => <option key={i} value={i}>{i}</option>)}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: "var(--text-muted)" }}>
                      Industry
                    </label>
                    <select
                      name="industry"
                      className="w-full rounded-xl px-4 py-3 text-[13px] focus:outline-none appearance-none"
                      style={{
                        backgroundColor: "var(--bg-page)",
                        border: "1px solid var(--border)",
                        color: "var(--text-primary)",
                      }}
                    >
                      <option value="">Select</option>
                      {industries.map((i) => <option key={i} value={i}>{i}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: "var(--text-muted)" }}>
                      Team Size
                    </label>
                    <select
                      name="team_size"
                      className="w-full rounded-xl px-4 py-3 text-[13px] focus:outline-none appearance-none"
                      style={{
                        backgroundColor: "var(--bg-page)",
                        border: "1px solid var(--border)",
                        color: "var(--text-primary)",
                      }}
                    >
                      <option value="">Select</option>
                      {teamSizes.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: "var(--text-muted)" }}>
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      className="w-full rounded-xl px-4 py-3 text-[13px] focus:outline-none appearance-none"
                      style={{
                        backgroundColor: "var(--bg-page)",
                        border: "1px solid var(--border)",
                        color: "var(--text-primary)",
                      }}
                    >
                      <option value="">Select</option>
                      {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: "var(--text-muted)" }}>
                      Timeline
                    </label>
                    <select
                      name="timeline"
                      className="w-full rounded-xl px-4 py-3 text-[13px] focus:outline-none appearance-none"
                      style={{
                        backgroundColor: "var(--bg-page)",
                        border: "1px solid var(--border)",
                        color: "var(--text-primary)",
                      }}
                    >
                      <option value="">Select</option>
                      {timelines.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: "var(--text-muted)" }}>
                    Your Operational Challenge *
                  </label>
                  <textarea
                    name="challenge"
                    required
                    rows={4}
                    className="w-full rounded-xl px-4 py-3 text-[13px] transition-colors focus:outline-none resize-none"
                    style={{
                      backgroundColor: "var(--bg-page)",
                      border: "1px solid var(--border)",
                      color: "var(--text-primary)",
                    }}
                    placeholder="Tell us about your business, current systems, and what you're trying to improve. Be as specific as you like — the more context you share, the more useful our first conversation will be."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 text-[14px] font-bold rounded-xl transition-all hover:opacity-90"
                  style={{
                    backgroundColor: "var(--blue)",
                    color: "var(--on-blue)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.35)",
                  }}
                >
                  Request Executive Consultation <ArrowRight size={14} className="inline ml-1.5 -mt-0.5" />
                </button>

                <p className="text-[11px] text-center leading-relaxed" style={{ color: "var(--text-faint)" }}>
                  We respond within 24–48 business hours. Your information is handled with complete discretion.
                </p>
              </form>
            </div>
          </div>
        </section>
        </div>

      </main>
      <Footer />
    </>
  );
}
