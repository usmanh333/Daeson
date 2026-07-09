import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, CheckCircle } from "lucide-react";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Executive Consultation — Start a Conversation",
  description:
    "Schedule an executive consultation with Daeson Technologies. We map your operations, identify infrastructure gaps, and present a clear architectural approach — no commitment required.",
  alternates: { canonical: "https://daesontechnologies.online/contact" },
};

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
                  href="https://calendar.google.com/calendar/u/7/r/week?pli=1"
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
                    email: "contact@daesontechnologies.online",
                    desc: "Product questions, general information",
                  },
                  {
                    label: "Strategic Partnerships",
                    email: "partnerships@daesontechnologies.online",
                    desc: "Partnership and advisory discussions",
                  },
                  {
                    label: "Founder Conversations",
                    email: "mahnoorzafar@daesontechnologies.online",
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
            <ContactForm />
          </div>
        </section>
        </div>

      </main>
      <Footer />
    </>
  );
}
