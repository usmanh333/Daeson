import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "More Investors Means More Scrutiny",
  description:
    "Every new investor you bring on raises the bar for reporting transparency. A founder's take on why investor growth breaks manual reporting, and what real-time visibility actually requires.",
  alternates: { canonical: "https://daesontechnologies.online/insights/investor-growth-demands-transparency" },
  openGraph: {
    title: "More Investors Means More Scrutiny — A Founder's Take",
    url: "https://daesontechnologies.online/insights/investor-growth-demands-transparency",
  },
};

const faqs = [
  {
    q: "Why does adding more investors make reporting harder, not just bigger?",
    a: "Each new investor brings their own expectations for update frequency, format, and detail. What worked as a personal monthly email to three investors becomes unmanageable at thirty — not because the work is harder, but because it can no longer be handled ad hoc.",
  },
  {
    q: "What does real investor transparency actually require?",
    a: "A live, self-serve view into the metrics investors care about — deal status, capital deployment, distributions — rather than a periodic report compiled by hand. Transparency that depends on someone remembering to send an update isn't transparency, it's a bottleneck.",
  },
  {
    q: "Does more transparency mean more work for the team?",
    a: "Only if it's built manually each time. A platform that gives investors direct, real-time visibility removes the recurring compilation work entirely — the team builds the system once instead of the report every month.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "More Investors Means More Scrutiny — A Founder's Take on Transparency",
  description:
    "Every new investor you bring on raises the bar for reporting transparency. Why investor growth breaks manual reporting, and what real-time visibility actually requires.",
  author: { "@type": "Person", name: "Mahnoor Zafar" },
  publisher: { "@type": "Organization", name: "Daeson Technologies", url: "https://daesontechnologies.online" },
  url: "https://daesontechnologies.online/insights/investor-growth-demands-transparency",
  datePublished: "2026-07-24",
  dateModified: "2026-07-24",
  about: [
    { "@type": "Thing", name: "Investor reporting transparency" },
    { "@type": "Thing", name: "Real estate investor relations" },
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
              More Investors Means More Scrutiny
            </h1>
            <p className="text-[17px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              A note on why growth in your capital base is really growth in your reporting obligation
              — and why most firms don&apos;t notice until it&apos;s already a problem.
            </p>
          </div>
        </section>

        <div style={{ borderTop: "1px solid var(--border)" }} />

        <article className="max-w-3xl mx-auto px-6 py-16">
          <div className="prose-content space-y-8" style={{ color: "var(--text-secondary)" }}>
            <div className="answer-capsule">
              <p className="text-[12px] font-bold uppercase tracking-widest mb-2" style={{ color: "var(--blue)" }}>The short answer</p>
              <p className="text-[15px] leading-relaxed" style={{ color: "var(--text-primary)" }}>
                Every investor you add doesn&apos;t just add capital — it adds a relationship that
                expects its own visibility into how that capital is performing. What&apos;s manageable
                as a personal update to a handful of early backers becomes structurally impossible to
                sustain by hand once you&apos;re past a dozen. The fix isn&apos;t working harder on
                reports; it&apos;s giving investors a live view they don&apos;t have to wait for.
              </p>
            </div>

            <p className="text-[15px] leading-[1.85]">
              We hear a version of the same story from almost every growing real estate firm we talk
              to: the first few investors got a personal call or a well-written monthly email, and it
              felt like real relationship management. It was.
            </p>
            <p className="text-[15px] leading-[1.85]">
              Then the round after that brought in a dozen more. Then the next raise brought in
              thirty. Nobody decided to stop being transparent — the format that worked simply stopped
              scaling, one investor at a time, until reporting became the thing eating the founder&apos;s
              week instead of the operations itself.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>Visibility and transparency aren&apos;t the same thing</h2>
            <p className="text-[15px] leading-[1.85]">
              Visibility is what you have internally — you know where every deal stands, what&apos;s
              been distributed, what&apos;s pending. Transparency is whether your investors have that
              same picture without asking you for it. Most firms have the first and not the second, and
              the gap between them is exactly where investor trust quietly erodes — not from bad news,
              but from silence between updates.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>What actually breaks first</h2>
            <p className="text-[15px] leading-[1.85]">
              It&apos;s rarely the reporting itself that breaks — it&apos;s the founder&apos;s or
              operations lead&apos;s calendar. Compiling a manual update for thirty investors on
              different cadences, from data scattered across a CRM, a spreadsheet, and a payment
              system, is a full working day that recurs every month, indefinitely, and grows with
              every investor added.
            </p>
            <p className="text-[15px] leading-[1.85]">
              This is exactly the gap <strong style={{ color: "var(--text-primary)" }}>LuxeProperty AI</strong> is
              built to close — live investor dashboards that don&apos;t require anyone to compile
              anything, because the underlying deal and portfolio data updates the view directly. More
              investors stops being more manual work; it&apos;s just more people looking at the same
              live system.
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
            {["Investor Relations", "LuxeProperty AI", "Real Estate Operations", "Transparency"].map((t) => (
              <span key={t} className="px-3 py-1 rounded-lg text-[11px]" style={{ backgroundColor: "var(--bg-elevated)", border: "1px solid var(--border)", color: "var(--text-muted)" }}>{t}</span>
            ))}
          </div>
        </article>

        <div style={{ borderTop: "1px solid var(--border)" }}>
          <div className="max-w-3xl mx-auto px-6 py-16">
            <div className="rounded-2xl p-10 text-center" style={{ background: "linear-gradient(135deg, #F3F0FF 0%, #EDE9FE 100%)", border: "1px solid var(--blue-border)" }}>
              <h2 className="text-[24px] font-bold mb-3 tracking-tight" style={{ color: "var(--text-primary)" }}>
                Outgrowing manual investor updates?
              </h2>
              <p className="text-[14px] leading-relaxed mb-7 max-w-lg mx-auto" style={{ color: "var(--text-secondary)" }}>
                We map your current reporting workflow and show you exactly where live visibility
                replaces recurring manual work.
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
            <Link href="/insights/team-growth-tool-sprawl-tax" className="p-5 rounded-xl block transition-all" style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)" }}>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-widest" style={{ backgroundColor: "var(--blue-muted)", color: "var(--blue)" }}>Founder Insight</span>
              <p className="text-[14px] font-semibold mt-3 leading-snug" style={{ color: "var(--text-primary)" }}>The Hidden Tax of Growing Your Team Across Disconnected Tools</p>
              <p className="text-[12px] mt-2 flex items-center gap-1" style={{ color: "var(--blue)" }}>Read more <ArrowRight size={11} /></p>
            </Link>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
