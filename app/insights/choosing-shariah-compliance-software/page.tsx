import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Choose Shariah Compliance Software",
  description:
    "A practical checklist for Islamic financial institutions evaluating Shariah compliance software — what actually matters beyond the feature list, and the questions to ask vendors.",
  alternates: { canonical: "https://daesontechnologies.online/insights/choosing-shariah-compliance-software" },
  openGraph: {
    title: "How to Choose Shariah Compliance Software: A Buyer's Checklist",
    url: "https://daesontechnologies.online/insights/choosing-shariah-compliance-software",
  },
};

const checklist = [
  { title: "Does it produce an immutable audit trail, or just a log?", body: "A log that can be silently edited isn't evidence. Ask specifically whether records are append-only and tied directly to the transaction they document." },
  { title: "Does it support your actual financing structures?", body: "Murabaha, Ijara, and Musharakah have different documentation and workflow requirements. Generic compliance software often handles one well and forces the rest into a workaround." },
  { title: "Can it generate different reports for different regulators from one record?", body: "If you operate in more than one market, ask whether the vendor supports one canonical compliance record with multiple report outputs — or whether you'll be maintaining parallel records yourself." },
  { title: "Does it support scholars, or route around them?", body: "AI-assisted review should surface information for a scholar's decision, not generate a ruling. Ask exactly where the human decision point sits in the workflow." },
  { title: "What are the uptime and accessibility guarantees, in writing?", body: "Compliance infrastructure that's unavailable during an audit or a regulatory deadline is a real operational risk — get uptime commitments in the contract, not just marketing language." },
  { title: "Who owns the data and the system after the contract ends?", body: "Subscription software that locks your compliance history behind a vendor relationship creates long-term dependency. Understand what happens to your audit trail if you switch providers." },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Choose Shariah Compliance Software",
  description:
    "A practical checklist for Islamic financial institutions evaluating Shariah compliance software — what actually matters beyond the feature list.",
  author: { "@type": "Organization", name: "Daeson Technologies", url: "https://daesontechnologies.online" },
  publisher: { "@type": "Organization", name: "Daeson Technologies", url: "https://daesontechnologies.online" },
  url: "https://daesontechnologies.online/insights/choosing-shariah-compliance-software",
  datePublished: "2026-07-24",
  dateModified: "2026-07-24",
  about: [
    { "@type": "Thing", name: "Shariah compliance software" },
    { "@type": "Thing", name: "Islamic banking software procurement" },
    { "@type": "Thing", name: "Aylinor" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What should I check before signing a long-term contract for Shariah compliance software?",
      acceptedAnswer: { "@type": "Answer", text: "Get uptime and accessibility guarantees in writing, confirm what happens to your compliance data and audit history if you switch providers, and verify the system supports your actual financing structures rather than a generic template." },
    },
    {
      "@type": "Question",
      name: "Is a feature list enough to evaluate Shariah compliance software?",
      acceptedAnswer: { "@type": "Answer", text: "No. Feature lists look similar across vendors. What differs is audit trail integrity, multi-jurisdiction reporting support, how the system treats the scholar's role, and data ownership terms — none of which show up on a feature comparison chart." },
    },
  ],
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
              <span className="text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest" style={{ backgroundColor: "var(--gold-muted)", color: "var(--gold)", border: "1px solid var(--gold-border)" }}>
                Islamic Finance
              </span>
              <span className="text-[11px]" style={{ color: "var(--text-faint)" }}>7 min read</span>
            </div>
            <h1 className="speakable text-[32px] md:text-[44px] font-extrabold leading-[1.1] tracking-tight mb-6" style={{ color: "var(--text-primary)" }}>
              How to Choose Shariah Compliance Software
            </h1>
            <p className="text-[17px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              A practical checklist for what to verify before signing — beyond the feature list every
              vendor shows you.
            </p>
          </div>
        </section>

        <div style={{ borderTop: "1px solid var(--border)" }} />

        <article className="max-w-3xl mx-auto px-6 py-16">
          <div className="prose-content space-y-8" style={{ color: "var(--text-secondary)" }}>
            <div className="answer-capsule">
              <p className="text-[12px] font-bold uppercase tracking-widest mb-2" style={{ color: "var(--gold)" }}>The short answer</p>
              <p className="text-[15px] leading-relaxed" style={{ color: "var(--text-primary)" }}>
                Feature lists look nearly identical across Shariah compliance vendors. What actually
                differs — and what to check before signing a long-term contract — is audit trail
                integrity, multi-jurisdiction reporting support, how the system treats the scholar&apos;s
                role, uptime commitments in writing, and what happens to your data if you leave.
              </p>
            </div>

            <p className="text-[15px] leading-[1.85]">
              Evaluating Shariah compliance software usually starts with a feature demo — contract
              parsing, dashboards, reporting modules. Most vendors can show all of that convincingly.
              The differences that actually matter over a multi-year contract rarely show up in a demo.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>The six questions worth asking</h2>
            <div className="space-y-5">
              {checklist.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: "var(--gold-muted)", border: "1px solid var(--gold-border)" }}>
                    <Check size={14} style={{ color: "var(--gold)" }} />
                  </div>
                  <div>
                    <p className="text-[15px] font-bold mb-1.5" style={{ color: "var(--text-primary)" }}>{item.title}</p>
                    <p className="text-[14px] leading-[1.8]" style={{ color: "var(--text-secondary)" }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>Why this list, not a feature comparison</h2>
            <p className="text-[15px] leading-[1.85]">
              A feature comparison chart tells you what a system can display. It doesn&apos;t tell you
              whether the audit trail would hold up under regulatory scrutiny, whether the reporting
              engine will actually save you work across three jurisdictions, or whether you&apos;ll own
              your compliance history if you ever switch providers. Those are the questions that decide
              whether the software is still the right decision three years in — which is what
              we built <Link href="/amanah-ai" style={{ color: "var(--gold)", fontWeight: 600 }}>Aylinor</Link> to
              answer honestly, not just demo well.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mt-12 pt-8" style={{ borderTop: "1px solid var(--border)" }}>
            {["Buyer's Guide", "Shariah Compliance", "Aylinor", "Vendor Evaluation"].map((t) => (
              <span key={t} className="px-3 py-1 rounded-lg text-[11px]" style={{ backgroundColor: "var(--bg-elevated)", border: "1px solid var(--border)", color: "var(--text-muted)" }}>{t}</span>
            ))}
          </div>
        </article>

        <div style={{ borderTop: "1px solid var(--border)" }}>
          <div className="max-w-3xl mx-auto px-6 py-16">
            <div className="rounded-2xl p-10 text-center" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--gold-border)" }}>
              <h2 className="text-[24px] font-bold mb-3 tracking-tight" style={{ color: "var(--text-primary)" }}>
                Evaluating vendors right now?
              </h2>
              <p className="text-[14px] leading-relaxed mb-7 max-w-lg mx-auto" style={{ color: "var(--text-secondary)" }}>
                Ask us these six questions directly — we&apos;ll answer them without a sales script.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 text-[14px] font-bold rounded-xl hover:opacity-90 transition-all" style={{ backgroundColor: "var(--gold)", color: "#0B0E14" }}>
                  Talk to Us <ArrowRight size={14} />
                </Link>
                <Link href="/amanah-ai" className="inline-flex items-center gap-2 px-7 py-3.5 text-[14px] font-semibold rounded-xl transition-all" style={{ border: "1px solid var(--gold-border)", color: "var(--gold)" }}>
                  Explore Aylinor
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-6 pb-20">
          <p className="text-[10px] font-bold uppercase tracking-widest mb-6" style={{ color: "var(--text-faint)" }}>Related Reading</p>
          <div className="grid sm:grid-cols-2 gap-5">
            <Link href="/insights/shariah-governance-audit-trail" className="p-5 rounded-xl block transition-all" style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)" }}>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-widest" style={{ backgroundColor: "var(--gold-muted)", color: "var(--gold)" }}>Islamic Finance</span>
              <p className="text-[14px] font-semibold mt-3 leading-snug" style={{ color: "var(--text-primary)" }}>Why Shariah Governance Needs Audit Trails</p>
              <p className="text-[12px] mt-2 flex items-center gap-1" style={{ color: "var(--gold)" }}>Read article <ArrowRight size={11} /></p>
            </Link>
            <Link href="/insights/aaoifi-ifsb-compliance-software" className="p-5 rounded-xl block transition-all" style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)" }}>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-widest" style={{ backgroundColor: "var(--gold-muted)", color: "var(--gold)" }}>Islamic Finance</span>
              <p className="text-[14px] font-semibold mt-3 leading-snug" style={{ color: "var(--text-primary)" }}>AAOIFI & IFSB Standards in Compliance Software</p>
              <p className="text-[12px] mt-2 flex items-center gap-1" style={{ color: "var(--gold)" }}>Read more <ArrowRight size={11} /></p>
            </Link>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
