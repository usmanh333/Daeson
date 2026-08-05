import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "AAOIFI & IFSB Standards in Compliance Software",
  description:
    "Generic compliance checklists don't understand AAOIFI or IFSB standards. Why Shariah compliance software needs standards-awareness built into its architecture, not bolted on.",
  alternates: { canonical: "https://daesontechnologies.online/insights/aaoifi-ifsb-compliance-software" },
  openGraph: {
    title: "Why Compliance Software Needs AAOIFI & IFSB Awareness Built In",
    url: "https://daesontechnologies.online/insights/aaoifi-ifsb-compliance-software",
  },
};

const faqs = [
  {
    q: "What are AAOIFI and IFSB standards?",
    a: "AAOIFI (Accounting and Auditing Organization for Islamic Financial Institutions) and IFSB (Islamic Financial Services Board) set accounting, auditing, governance, and risk standards for Islamic financial institutions — providing a shared reference point across markets.",
  },
  {
    q: "Why doesn't a generic compliance checklist cover this?",
    a: "Generic fintech compliance tools are built around conventional banking regulation. AAOIFI and IFSB standards involve Shariah-specific structures — like Murabaha sequencing or Musharakah profit-sharing — that a checklist built for conventional finance simply has no concept of.",
  },
  {
    q: "What's the risk of an AI system that sounds confident but is wrong about a standard?",
    a: "In Islamic finance, an incorrect but confidently stated compliance answer is worse than an obvious gap — it can lead a reviewer to skip verification they'd otherwise have done. Well-designed systems are built to flag uncertainty rather than mask it with a confident-sounding answer.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AAOIFI & IFSB Standards in Compliance Software",
  description:
    "Generic compliance checklists don't understand AAOIFI or IFSB standards. Why Shariah compliance software needs standards-awareness built into its architecture.",
  author: { "@type": "Organization", name: "Daeson Technologies", url: "https://daesontechnologies.online" },
  publisher: { "@type": "Organization", name: "Daeson Technologies", url: "https://daesontechnologies.online" },
  url: "https://daesontechnologies.online/insights/aaoifi-ifsb-compliance-software",
  datePublished: "2026-07-24",
  dateModified: "2026-07-24",
  about: [
    { "@type": "Thing", name: "AAOIFI standards" },
    { "@type": "Thing", name: "IFSB standards" },
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
              <span className="text-[11px]" style={{ color: "var(--text-faint)" }}>6 min read</span>
            </div>
            <h1 className="speakable text-[32px] md:text-[44px] font-extrabold leading-[1.1] tracking-tight mb-6" style={{ color: "var(--text-primary)" }}>
              AAOIFI & IFSB Standards in Compliance Software
            </h1>
            <p className="text-[17px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Why standards-awareness has to be architecture, not a checklist bolted onto generic
              fintech software.
            </p>
          </div>
        </section>

        <div style={{ borderTop: "1px solid var(--border)" }} />

        <article className="max-w-3xl mx-auto px-6 py-16">
          <div className="prose-content space-y-8" style={{ color: "var(--text-secondary)" }}>
            <div className="answer-capsule">
              <p className="text-[12px] font-bold uppercase tracking-widest mb-2" style={{ color: "var(--gold)" }}>The short answer</p>
              <p className="text-[15px] leading-relaxed" style={{ color: "var(--text-primary)" }}>
                AAOIFI and IFSB standards involve Shariah-specific financial structures that generic
                compliance software — built for conventional banking regulation — has no concept of.
                Real standards-awareness has to be built into the system&apos;s architecture from the
                start, and the system has to be honest about uncertainty rather than sound confident
                when it&apos;s wrong.
              </p>
            </div>

            <p className="text-[15px] leading-[1.85]">
              AAOIFI (Accounting and Auditing Organization for Islamic Financial Institutions) and IFSB
              (Islamic Financial Services Board) provide the closest thing Islamic finance has to a
              shared standards reference across markets — covering accounting treatment, governance
              expectations, and risk frameworks specific to Shariah-compliant structures.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>Why generic compliance tools miss this entirely</h2>
            <p className="text-[15px] leading-[1.85]">
              Most fintech compliance software is built around conventional banking regulation —
              anti-money laundering rules, KYC requirements, standard risk-weighting. None of that
              framework has a native concept of Murabaha ownership sequencing, Musharakah profit-sharing
              ratios, or the specific documentation AAOIFI expects for each structure. Bolting a Shariah
              checklist onto a conventional compliance engine produces a system that looks comprehensive
              but doesn&apos;t actually understand what it&apos;s checking.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>The &quot;confident and wrong&quot; failure mode</h2>
            <p className="text-[15px] leading-[1.85]">
              This matters most with AI-assisted review specifically. An AI system that gives a
              confident-sounding answer about standards compliance — when it&apos;s actually wrong or
              uncertain — is more dangerous than a system that visibly can&apos;t answer, because a
              confident wrong answer can lead a reviewer to skip the verification they&apos;d otherwise
              have done. Well-designed systems are built to surface ambiguity, not paper over it.
            </p>
            <p className="text-[15px] leading-[1.85]">
              This is the design principle behind how <Link href="/amanah-ai" style={{ color: "var(--gold)", fontWeight: 600 }}>Aylinor</Link> approaches
              AAOIFI and IFSB awareness — structured to support a scholar&apos;s judgment with organized,
              standards-aware information, not to generate a ruling on its own.
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
            {["AAOIFI", "IFSB", "Aylinor", "Shariah Compliance"].map((t) => (
              <span key={t} className="px-3 py-1 rounded-lg text-[11px]" style={{ backgroundColor: "var(--bg-elevated)", border: "1px solid var(--border)", color: "var(--text-muted)" }}>{t}</span>
            ))}
          </div>
        </article>

        <div style={{ borderTop: "1px solid var(--border)" }}>
          <div className="max-w-3xl mx-auto px-6 py-16">
            <div className="rounded-2xl p-10 text-center" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--gold-border)" }}>
              <h2 className="text-[24px] font-bold mb-3 tracking-tight" style={{ color: "var(--text-primary)" }}>
                Need standards-aware compliance infrastructure?
              </h2>
              <p className="text-[14px] leading-relaxed mb-7 max-w-lg mx-auto" style={{ color: "var(--text-secondary)" }}>
                Aylinor is built around AAOIFI and IFSB awareness from the architecture up.
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
            <Link href="/insights/choosing-shariah-compliance-software" className="p-5 rounded-xl block transition-all" style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)" }}>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-widest" style={{ backgroundColor: "var(--gold-muted)", color: "var(--gold)" }}>Islamic Finance</span>
              <p className="text-[14px] font-semibold mt-3 leading-snug" style={{ color: "var(--text-primary)" }}>How to Choose Shariah Compliance Software</p>
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
