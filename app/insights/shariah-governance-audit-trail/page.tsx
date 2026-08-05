import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Why Shariah Governance Needs Audit Trails",
  description:
    "Undocumented Shariah governance decisions are a regulatory exposure, not just an inefficiency. Why immutable audit trails matter as much as the ruling itself.",
  alternates: { canonical: "https://daesontechnologies.online/insights/shariah-governance-audit-trail" },
  openGraph: {
    title: "Why Shariah Governance Needs Immutable Audit Trails",
    url: "https://daesontechnologies.online/insights/shariah-governance-audit-trail",
  },
};

const faqs = [
  {
    q: "What is a Shariah governance audit trail?",
    a: "A Shariah governance audit trail is a permanent, tamper-evident record of every compliance decision — who reviewed it, what was approved or rejected, and why — tied to the specific product or contract it applies to.",
  },
  {
    q: "Why do spreadsheets fail as an audit trail?",
    a: "Spreadsheets can be edited after the fact with no record of the change, are rarely linked directly to the contract they document, and depend entirely on manual discipline to stay current — none of which holds up under regulatory review.",
  },
  {
    q: "Is an audit trail only useful for regulators?",
    a: "No. A structured audit trail also protects the institution and the scholars themselves — it demonstrates that governance was followed consistently, which matters as much internally, during a leadership transition or scholar board change, as it does externally.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Why Shariah Governance Needs Audit Trails",
  description:
    "Undocumented Shariah governance decisions are a regulatory exposure, not just an inefficiency. Why immutable audit trails matter as much as the ruling itself.",
  author: { "@type": "Organization", name: "Daeson Technologies", url: "https://daesontechnologies.online" },
  publisher: { "@type": "Organization", name: "Daeson Technologies", url: "https://daesontechnologies.online" },
  url: "https://daesontechnologies.online/insights/shariah-governance-audit-trail",
  datePublished: "2026-07-24",
  dateModified: "2026-07-24",
  about: [
    { "@type": "Thing", name: "Shariah governance" },
    { "@type": "Thing", name: "Audit trail infrastructure" },
    { "@type": "Thing", name: "Aylinor" },
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
              <span className="text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest" style={{ backgroundColor: "var(--gold-muted)", color: "var(--gold)", border: "1px solid var(--gold-border)" }}>
                Islamic Finance
              </span>
              <span className="text-[11px]" style={{ color: "var(--text-faint)" }}>5 min read</span>
            </div>
            <h1 className="speakable text-[32px] md:text-[44px] font-extrabold leading-[1.1] tracking-tight mb-6" style={{ color: "var(--text-primary)" }}>
              Why Shariah Governance Needs Audit Trails
            </h1>
            <p className="text-[17px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              A compliant decision that isn&apos;t documented is functionally indistinguishable, to a
              regulator, from a decision that was never made.
            </p>
          </div>
        </section>

        <div style={{ borderTop: "1px solid var(--border)" }} />

        <article className="max-w-3xl mx-auto px-6 py-16">
          <div className="prose-content space-y-8" style={{ color: "var(--text-secondary)" }}>
            <div className="answer-capsule">
              <p className="text-[12px] font-bold uppercase tracking-widest mb-2" style={{ color: "var(--gold)" }}>The short answer</p>
              <p className="text-[15px] leading-relaxed" style={{ color: "var(--text-primary)" }}>
                Shariah governance risk isn&apos;t only about getting a ruling wrong — it&apos;s about
                being unable to prove, months or years later, how a ruling was reached. Spreadsheets and
                email threads don&apos;t hold up as evidence. An immutable, contract-linked audit trail
                is what actually protects the institution, the scholars, and the customer.
              </p>
            </div>

            <p className="text-[15px] leading-[1.85]">
              Every Islamic financial institution has a governance process on paper: scholars review
              products, decisions are recorded, and compliance signs off. The gap is rarely the process
              itself — it&apos;s what happens to the record of that process once the decision is made.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>The spreadsheet problem</h2>
            <p className="text-[15px] leading-[1.85]">
              A spreadsheet can be edited after the fact with no trace of the change. It&apos;s rarely
              linked directly to the contract or product it documents — usually cross-referenced by a
              file name or a manually typed ID, which drifts out of sync over time. And it depends
              entirely on someone remembering to update it, every time, without fail.
            </p>
            <p className="text-[15px] leading-[1.85]">
              None of this is a hypothetical risk. It&apos;s the specific gap regulators and internal
              audit teams look for first — not whether a decision was reasonable, but whether it can be
              reconstructed and verified independently of the person who made it.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>What a real audit trail looks like</h2>
            <p className="text-[15px] leading-[1.85]">
              A structured audit trail ties every governance decision directly to the contract or product
              it applies to, records who made the decision and when, and is immutable — the record can
              be appended to, but not silently altered. That combination is what turns governance from a
              defensible process into a provable one.
            </p>
            <p className="text-[15px] leading-[1.85]">
              This is built into <Link href="/amanah-ai" style={{ color: "var(--gold)", fontWeight: 600 }}>Aylinor</Link> from
              the architecture level, not added afterward — every compliance decision generates its own
              permanent record, tied to the transaction, without requiring the compliance team to
              maintain a separate log.
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
            {["Shariah Governance", "Audit Trail", "Aylinor", "Compliance Risk"].map((t) => (
              <span key={t} className="px-3 py-1 rounded-lg text-[11px]" style={{ backgroundColor: "var(--bg-elevated)", border: "1px solid var(--border)", color: "var(--text-muted)" }}>{t}</span>
            ))}
          </div>
        </article>

        <div style={{ borderTop: "1px solid var(--border)" }}>
          <div className="max-w-3xl mx-auto px-6 py-16">
            <div className="rounded-2xl p-10 text-center" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--gold-border)" }}>
              <h2 className="text-[24px] font-bold mb-3 tracking-tight" style={{ color: "var(--text-primary)" }}>
                Can you prove how a decision was reached?
              </h2>
              <p className="text-[14px] leading-relaxed mb-7 max-w-lg mx-auto" style={{ color: "var(--text-secondary)" }}>
                Aylinor builds an immutable, contract-linked audit trail into every governance decision.
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
            <Link href="/insights/murabaha-contract-review-bottleneck" className="p-5 rounded-xl block transition-all" style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)" }}>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-widest" style={{ backgroundColor: "var(--gold-muted)", color: "var(--gold)" }}>Islamic Finance</span>
              <p className="text-[14px] font-semibold mt-3 leading-snug" style={{ color: "var(--text-primary)" }}>The Murabaha Contract Review Bottleneck</p>
              <p className="text-[12px] mt-2 flex items-center gap-1" style={{ color: "var(--gold)" }}>Read article <ArrowRight size={11} /></p>
            </Link>
            <Link href="/insights/multi-market-islamic-finance-compliance" className="p-5 rounded-xl block transition-all" style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)" }}>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-widest" style={{ backgroundColor: "var(--gold-muted)", color: "var(--gold)" }}>Islamic Finance</span>
              <p className="text-[14px] font-semibold mt-3 leading-snug" style={{ color: "var(--text-primary)" }}>Multi-Market Islamic Finance Compliance</p>
              <p className="text-[12px] mt-2 flex items-center gap-1" style={{ color: "var(--gold)" }}>Read more <ArrowRight size={11} /></p>
            </Link>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
