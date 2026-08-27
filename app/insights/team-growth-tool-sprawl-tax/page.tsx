import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "The Hidden Tax of Tool Sprawl as You Hire",
  description:
    "Every new hire in a growing real estate firm inherits 5 to 10 disconnected tools and the phone calls needed to keep them in sync. A founder's take on what that costs.",
  alternates: { canonical: "https://daesontechnologies.online/insights/team-growth-tool-sprawl-tax" },
  openGraph: {
    title: "The Hidden Tax of Growing Your Team Across Disconnected Tools",
    url: "https://daesontechnologies.online/insights/team-growth-tool-sprawl-tax",
  },
};

const faqs = [
  {
    q: "Why does hiring more people expose tool sprawl?",
    a: "A founder juggling 5 to 10 disconnected tools personally can hold the gaps together from memory. Once a team grows, that coordination has to be communicated explicitly — over calls, messages, and repeated check-ins — which is where the cost becomes visible.",
  },
  {
    q: "What does 'asking everyone one by one' actually cost?",
    a: "It's not just the time spent on the calls themselves. It's the delay between when information changes and when everyone who needs it actually has it — and the errors that happen in the gap.",
  },
  {
    q: "Does the fix mean replacing every tool at once?",
    a: "No. The fix is unifying the operational data and workflow layer underneath the tools your team already uses, so information doesn't depend on someone remembering to relay it manually.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Hidden Tax of Growing Your Team Across Disconnected Tools",
  description:
    "Every new hire in a growing real estate firm inherits 5 to 10 disconnected tools and the phone calls needed to keep them in sync. What that actually costs.",
  author: { "@type": "Person", name: "Mahnoor Zafar" },
  publisher: { "@type": "Organization", name: "Daeson Technologies", url: "https://daesontechnologies.online" },
  url: "https://daesontechnologies.online/insights/team-growth-tool-sprawl-tax",
  datePublished: "2026-07-24",
  dateModified: "2026-07-24",
  about: [
    { "@type": "Thing", name: "Tool sprawl" },
    { "@type": "Thing", name: "Real estate team operations" },
    { "@type": "Thing", name: "LuxeProperty AI" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function ArticlePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main style={{ backgroundColor: "var(--bg-page)", minHeight: "100vh" }}>

        <section className="relative overflow-hidden pt-32 pb-16 px-6">
          <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
          <div className="max-w-3xl mx-auto relative z-10">
            <Link href="/insights" className="inline-flex items-center gap-1.5 text-[12px] font-medium mb-8 transition-colors" style={{ color: "var(--text-faint)" }}>
              <ArrowLeft size={12} /> Back to Insights
            </Link>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest" style={{ backgroundColor: "var(--blue-muted)", color: "var(--blue)", border: "1px solid var(--blue-border)" }}>
                Founder Insight
              </span>
              <span className="text-[11px]" style={{ color: "var(--text-faint)" }}>5 min read</span>
            </div>
            <h1 className="speakable text-[32px] md:text-[44px] font-extrabold leading-[1.1] tracking-tight mb-6" style={{ color: "var(--text-primary)" }}>
              The Hidden Tax of Growing Your Team Across Disconnected Tools
            </h1>
            <p className="text-[17px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              More employees should mean more capacity. Without a unified system underneath them, it
              mostly means more phone calls.
            </p>
          </div>
        </section>

        <div style={{ borderTop: "1px solid var(--border)" }} />

        <article className="max-w-3xl mx-auto px-6 py-16">
          <div className="prose-content space-y-8" style={{ color: "var(--text-secondary)" }}>
            <div className="answer-capsule">
              <p className="text-[12px] font-bold uppercase tracking-widest mb-2" style={{ color: "var(--blue)" }}>The short answer</p>
              <p className="text-[15px] leading-relaxed" style={{ color: "var(--text-primary)" }}>
                A founder holding 5 to 10 disconnected tools together personally can do it from memory.
                Once a team grows, that same coordination has to happen out loud — over calls, messages,
                and asking each person individually for the status. The tools didn&apos;t get worse; the
                coordination cost of not connecting them just became visible.
              </p>
            </div>

            <p className="text-[15px] leading-[1.85]">
              Early on, a founder running the whole operation can keep five different tools loosely in
              sync without anyone noticing the seams — a mental model that holds it together, built from
              knowing every deal personally.
            </p>
            <p className="text-[15px] leading-[1.85]">
              That model doesn&apos;t survive the first ten hires. What used to live in one person&apos;s
              head now has to be communicated explicitly, over and over, to everyone who needs it — and
              the tools themselves still don&apos;t talk to each other.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>Why this shows up as phone calls, not a system failure</h2>
            <p className="text-[15px] leading-[1.85]">
              Nothing crashes. Nothing throws an error. What happens instead is quieter and more
              expensive: someone calls someone else to check if a payment cleared, another person asks
              in three different chat threads whether a lease was renewed, and a manager spends an
              afternoon reconstructing a status update that should have taken thirty seconds to look up.
            </p>
            <p className="text-[15px] leading-[1.85]">
              Multiply that by team size and by the number of disconnected tools, and coordination
              overhead grows faster than headcount does — which means every new hire adds less net
              capacity than the last one did.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>The fix isn&apos;t fewer tools — it&apos;s one shared layer underneath them</h2>
            <p className="text-[15px] leading-[1.85]">
              You don&apos;t need to rip out every tool your team already knows how to use. What you
              need is a shared operational layer that keeps the information consistent underneath them,
              so status doesn&apos;t depend on someone remembering to relay it. That&apos;s the specific
              problem <strong style={{ color: "var(--text-primary)" }}>LuxeProperty AI</strong> is built
              to solve — a unified pipeline and lead-matching layer that removes the &quot;ask everyone
              individually&quot; step entirely.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>Frequently Asked Questions</h2>
            <div className="space-y-5">
              {faqs.map((f) => (
                <div key={f.q}>
                  <p className="text-[14px] font-bold mb-1.5" style={{ color: "var(--text-primary)" }}>{f.q}</p>
                  <p className="text-[14px] leading-[1.8]" style={{ color: "var(--text-secondary)" }}>{f.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-12 pt-8" style={{ borderTop: "1px solid var(--border)" }}>
            {["Tool Sprawl", "LuxeProperty AI", "Team Operations", "Real Estate"].map((t) => (
              <span key={t} className="px-3 py-1 rounded-lg text-[11px]" style={{ backgroundColor: "var(--bg-elevated)", border: "1px solid var(--border)", color: "var(--text-muted)" }}>{t}</span>
            ))}
          </div>
        </article>

        <div style={{ borderTop: "1px solid var(--border)" }}>
          <div className="max-w-3xl mx-auto px-6 py-16">
            <div className="rounded-2xl p-10 text-center" style={{ background: "linear-gradient(135deg, #F3F0FF 0%, #EDE9FE 100%)", border: "1px solid var(--blue-border)" }}>
              <h2 className="text-[24px] font-bold mb-3 tracking-tight" style={{ color: "var(--text-primary)" }}>
                Coordination eating more time than it should?
              </h2>
              <p className="text-[14px] leading-relaxed mb-7 max-w-lg mx-auto" style={{ color: "var(--text-secondary)" }}>
                We map how information actually moves across your team&apos;s current tools before
                recommending anything.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 text-[14px] font-bold rounded-xl hover:opacity-90 transition-all" style={{ backgroundColor: "var(--blue)", color: "var(--on-blue)" }}>
                  Schedule a Consultation <ArrowRight size={14} />
                </Link>
                <Link href="/real-estate" className="inline-flex items-center gap-2 px-7 py-3.5 text-[14px] font-semibold rounded-xl transition-all" style={{ border: "1px solid var(--blue-border)", color: "var(--blue)" }}>
                  Real Estate Infrastructure
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-6 pb-20">
          <p className="text-[10px] font-bold uppercase tracking-widest mb-6" style={{ color: "var(--text-faint)" }}>Related Reading</p>
          <div className="grid sm:grid-cols-2 gap-5">
            <Link href="/insights/sales-growth-needs-management-systems" className="p-5 rounded-xl block transition-all" style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)" }}>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-widest" style={{ backgroundColor: "var(--blue-muted)", color: "var(--blue)" }}>Founder Insight</span>
              <p className="text-[14px] font-semibold mt-3 leading-snug" style={{ color: "var(--text-primary)" }}>What Breaks First When Sales Outpaces Your Systems</p>
              <p className="text-[12px] mt-2 flex items-center gap-1" style={{ color: "var(--blue)" }}>Read article <ArrowRight size={11} /></p>
            </Link>
            <Link href="/insights/investor-growth-demands-transparency" className="p-5 rounded-xl block transition-all" style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)" }}>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-widest" style={{ backgroundColor: "var(--blue-muted)", color: "var(--blue)" }}>Founder Insight</span>
              <p className="text-[14px] font-semibold mt-3 leading-snug" style={{ color: "var(--text-primary)" }}>More Investors Means More Scrutiny</p>
              <p className="text-[12px] mt-2 flex items-center gap-1" style={{ color: "var(--blue)" }}>Read more <ArrowRight size={11} /></p>
            </Link>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
