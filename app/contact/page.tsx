import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Executive Consultation",
  description:
    "Schedule an executive consultation with Daeson Technologies. We map your operations, identify infrastructure gaps, and present an architectural approach — no commitment required.",
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

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#070B12] min-h-screen pt-24">
        <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-24">
          <div className="grid md:grid-cols-[1.1fr_1fr] gap-14 items-start">
            {/* Left — Info */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#3B6AFF]/25 bg-[#3B6AFF]/[0.06] text-[#3B6AFF] text-[11px] font-semibold tracking-widest uppercase mb-8">
                Executive Consultation
              </div>

              <h1 className="text-[38px] md:text-[46px] font-extrabold text-white tracking-tight leading-[1.06] mb-6">
                Let&apos;s Map Your
                <br />
                <span
                  style={{
                    background: "linear-gradient(135deg, #3B6AFF 0%, #7B9FFF 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Operational Infrastructure.
                </span>
              </h1>

              <p className="text-[15px] text-[#94A3B8] leading-relaxed mb-10 max-w-md">
                A complimentary session where we map your current operations, identify infrastructure
                gaps, and present an architectural approach — before any commitment.
              </p>

              {/* Process */}
              <div className="space-y-5 mb-10">
                <p className="text-[10px] font-semibold text-[#4B5568] uppercase tracking-widest">
                  What happens in the consultation
                </p>
                {[
                  { n: "01", title: "Workflow Discovery", desc: "We map your current operational systems and identify friction points." },
                  { n: "02", title: "Infrastructure Assessment", desc: "We evaluate what you own vs. rent — and the long-term cost of both." },
                  { n: "03", title: "Architectural Approach", desc: "We present a systems design tailored to your specific operations." },
                  { n: "04", title: "Scope & Timeline", desc: "If there&apos;s a fit, we outline a proposal. No obligation to proceed." },
                ].map((item) => (
                  <div key={item.n} className="flex items-start gap-4">
                    <div className="w-7 h-7 rounded-lg bg-[#3B6AFF]/10 border border-[#3B6AFF]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-[10px] font-bold text-[#3B6AFF]">{item.n}</span>
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold text-[#EDF2FF] mb-0.5">{item.title}</p>
                      <p className="text-[12px] text-[#94A3B8]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust signals */}
              <div className="flex flex-wrap gap-4 text-[11px] text-[#4B5568] mb-10">
                {[
                  "No commitment required",
                  "Founder-led",
                  "Architecture provided",
                  "24–48hr response",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#3B6AFF]" />
                    {item}
                  </div>
                ))}
              </div>

              {/* Prefer to call */}
              <div className="bg-[#0D1521] border border-white/[0.07] rounded-xl p-5">
                <p className="text-[11px] font-semibold text-[#4B5568] uppercase tracking-widest mb-2">
                  Prefer to speak directly?
                </p>
                <p className="text-[13px] text-[#94A3B8] leading-relaxed mb-4">
                  You can schedule an introductory call directly with our founding team.
                </p>
                <a
                  href="https://calendly.com/d/dv3h-6kf-yf7/stratergic-discussion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 border border-white/[0.10] hover:border-[#3B6AFF]/40 hover:bg-[#3B6AFF]/[0.06] text-[#94A3B8] hover:text-[#3B6AFF] text-[12px] font-semibold rounded-lg transition-all duration-200"
                >
                  <Calendar size={13} />
                  Schedule Introductory Call
                </a>
              </div>
            </div>

            {/* Right — Form */}
            <div className="bg-[#0D1521] border border-white/[0.07] rounded-2xl p-7 md:p-8">
              <h2 className="text-[18px] font-bold text-white mb-1.5 tracking-tight">Tell us about your business</h2>
              <p className="text-[12px] text-[#4B5568] mb-6">Fields marked * are required.</p>

              <form
                action="https://formsubmit.co/contact@daesontechagency.online"
                method="POST"
                className="space-y-5"
              >
                {/* FormSubmit configuration */}
                <input type="hidden" name="_subject" value="New Executive Consultation Request — Daeson Technologies" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value="https://daesontechagency.online/thank-you" />
                {/* Honeypot spam protection */}
                <input type="text" name="_honey" className="hidden" aria-hidden="true" tabIndex={-1} />

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-semibold text-[#4B5568] uppercase tracking-widest mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      required
                      autoComplete="given-name"
                      className="w-full bg-[#070B12] border border-white/[0.08] rounded-lg px-4 py-3 text-[13px] text-[#EDF2FF] placeholder:text-[#4B5568] focus:outline-none focus:border-[#3B6AFF]/50 transition-colors"
                      placeholder="First name"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold text-[#4B5568] uppercase tracking-widest mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      required
                      autoComplete="family-name"
                      className="w-full bg-[#070B12] border border-white/[0.08] rounded-lg px-4 py-3 text-[13px] text-[#EDF2FF] placeholder:text-[#4B5568] focus:outline-none focus:border-[#3B6AFF]/50 transition-colors"
                      placeholder="Last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-semibold text-[#4B5568] uppercase tracking-widest mb-2">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    className="w-full bg-[#070B12] border border-white/[0.08] rounded-lg px-4 py-3 text-[13px] text-[#EDF2FF] placeholder:text-[#4B5568] focus:outline-none focus:border-[#3B6AFF]/50 transition-colors"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-semibold text-[#4B5568] uppercase tracking-widest mb-2">
                    Company *
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    autoComplete="organization"
                    className="w-full bg-[#070B12] border border-white/[0.08] rounded-lg px-4 py-3 text-[13px] text-[#EDF2FF] placeholder:text-[#4B5568] focus:outline-none focus:border-[#3B6AFF]/50 transition-colors"
                    placeholder="Company name"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-semibold text-[#4B5568] uppercase tracking-widest mb-2">
                    Area of Interest *
                  </label>
                  <select
                    name="area_of_interest"
                    required
                    className="w-full bg-[#070B12] border border-white/[0.08] rounded-lg px-4 py-3 text-[13px] text-[#EDF2FF] focus:outline-none focus:border-[#3B6AFF]/50 transition-colors appearance-none"
                  >
                    <option value="" className="text-[#4B5568]">Select area of interest</option>
                    {interests.map((i) => <option key={i} value={i}>{i}</option>)}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-semibold text-[#4B5568] uppercase tracking-widest mb-2">
                      Industry
                    </label>
                    <select
                      name="industry"
                      className="w-full bg-[#070B12] border border-white/[0.08] rounded-lg px-4 py-3 text-[13px] text-[#EDF2FF] focus:outline-none focus:border-[#3B6AFF]/50 transition-colors appearance-none"
                    >
                      <option value="">Select</option>
                      {industries.map((i) => <option key={i} value={i}>{i}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold text-[#4B5568] uppercase tracking-widest mb-2">
                      Team Size
                    </label>
                    <select
                      name="team_size"
                      className="w-full bg-[#070B12] border border-white/[0.08] rounded-lg px-4 py-3 text-[13px] text-[#EDF2FF] focus:outline-none focus:border-[#3B6AFF]/50 transition-colors appearance-none"
                    >
                      <option value="">Select</option>
                      {teamSizes.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-semibold text-[#4B5568] uppercase tracking-widest mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      className="w-full bg-[#070B12] border border-white/[0.08] rounded-lg px-4 py-3 text-[13px] text-[#EDF2FF] focus:outline-none focus:border-[#3B6AFF]/50 transition-colors appearance-none"
                    >
                      <option value="">Select</option>
                      {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold text-[#4B5568] uppercase tracking-widest mb-2">
                      Timeline
                    </label>
                    <select
                      name="timeline"
                      className="w-full bg-[#070B12] border border-white/[0.08] rounded-lg px-4 py-3 text-[13px] text-[#EDF2FF] focus:outline-none focus:border-[#3B6AFF]/50 transition-colors appearance-none"
                    >
                      <option value="">Select</option>
                      {timelines.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-semibold text-[#4B5568] uppercase tracking-widest mb-2">
                    Business Goals & Operational Challenges *
                  </label>
                  <textarea
                    name="challenge"
                    required
                    rows={4}
                    className="w-full bg-[#070B12] border border-white/[0.08] rounded-lg px-4 py-3 text-[13px] text-[#EDF2FF] placeholder:text-[#4B5568] focus:outline-none focus:border-[#3B6AFF]/50 transition-colors resize-none"
                    placeholder="Briefly describe your business, current systems, challenges, or what you're hoping to improve. We'll explore possible solutions together."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#3B6AFF] hover:bg-[#4F7FFF] text-white text-[14px] font-semibold rounded-xl transition-colors duration-200 shadow-lg shadow-[#3B6AFF]/20"
                >
                  Request Executive Consultation
                </button>

                <p className="text-[11px] text-[#4B5568] text-center leading-relaxed">
                  We respond within 24–48 business hours. Your information is handled with complete discretion.
                </p>
              </form>
            </div>
          </div>

          {/* Contact alternatives */}
          <div className="mt-14 grid md:grid-cols-3 gap-5">
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
                desc: "Strategic conversations — handled personally",
              },
            ].map((contact) => (
              <div
                key={contact.label}
                className="bg-[#0D1521] border border-white/[0.07] rounded-xl p-5 hover:border-white/[0.11] transition-all duration-200"
              >
                <p className="text-[10px] font-semibold text-[#4B5568] uppercase tracking-widest mb-2">
                  {contact.label}
                </p>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-[13px] font-semibold text-[#3B6AFF] hover:text-[#4F7FFF] transition-colors block mb-1"
                >
                  {contact.email}
                </a>
                <p className="text-[11px] text-[#4B5568]">{contact.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
