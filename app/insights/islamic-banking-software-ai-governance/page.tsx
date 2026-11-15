import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const SITE = "https://daesontechnologies.online";
const URL = `${SITE}/insights/islamic-banking-software-ai-governance`;
const TITLE = "Islamic Banking Software: AI and Shariah Governance";
const DESCRIPTION =
  "How AI is changing Shariah compliance in Islamic banking software: governance, audit-ready records, Shariah board processes and core banking integration.";
const PUBLISHED = "2026-11-05";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Islamic banking software",
    "Shariah compliance software",
    "AI for Islamic banks",
    "AI compliance platform",
    "Islamic finance technology",
    "Shariah board governance",
    "Shariah audit trail",
  ],
  authors: [{ name: "Daeson Technologies", url: SITE }],
  creator: "Daeson Technologies",
  publisher: "Daeson Technologies",
  alternates: { canonical: URL },
  openGraph: { type: "article", title: TITLE, description: DESCRIPTION, url: URL, siteName: "Daeson Technologies" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  other: {
    "article:published_time": PUBLISHED,
    "article:modified_time": PUBLISHED,
    "article:author": "Daeson Technologies",
    "article:section": "Islamic Finance",
    "article:tag": "Islamic banking software, Shariah compliance, Aylinor, AI governance",
  },
};

const faqs = [
  { q: "What is Islamic banking software?", a: "Islamic banking software refers to systems used by Islamic banks, Islamic finance windows, and Shariah advisory firms to manage financing products, Shariah compliance review, governance documentation, and reporting in line with Shariah principles, alongside or integrated with core banking systems." },
  { q: "Can AI determine whether a financial product is Shariah compliant?", a: "No. AI can reduce the administrative work around a review, but determining Shariah compliance is a scholarly judgment that remains with qualified Shariah scholars and governance bodies, not the software." },
  { q: "What is an SSB workflow?", a: "An SSB (Shariah Supervisory Board) workflow is the structured process by which products, contracts, or policies are submitted to a Shariah board for review and approval, including tracking submissions, decisions, and any required follow-up actions." },
  { q: "Why does an audit trail matter in Islamic banking software?", a: "Regulators, auditors, and Shariah boards need to see not just a final approval, but the full history: what was reviewed, what was changed, and who approved it. A structured audit trail makes this history available on demand instead of reconstructed after the fact." },
  { q: "How does Islamic banking software integrate with core banking systems?", a: "Integration typically depends on whether the core banking system exposes APIs or supports structured data exchange. Compliance and governance software is often layered alongside core banking rather than replacing it, exchanging specific data such as contract records or approval status." },
  { q: "Is Aylinor a full Islamic core banking system?", a: "No. Aylinor is a Shariah compliance and governance platform, that helps Shariah teams work in a more organised, consistent and auditable way. It is not a replacement for core banking infrastructure." },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Islamic Banking Software: How AI Is Transforming Shariah Compliance and Governance",
  description: DESCRIPTION,
  author: { "@type": "Organization", name: "Daeson Technologies", url: SITE },
  publisher: { "@type": "Organization", name: "Daeson Technologies", url: SITE },
  url: URL,
  mainEntityOfPage: URL,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  about: [
    { "@type": "Thing", name: "Islamic banking software" },
    { "@type": "Thing", name: "Shariah compliance software" },
    { "@type": "Thing", name: "Aylinor" },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE },
    { "@type": "ListItem", position: 2, name: "Insights", item: `${SITE}/insights` },
    { "@type": "ListItem", position: 3, name: "Islamic Banking Software: How AI Is Transforming Shariah Compliance and Governance", item: URL },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main style={{ backgroundColor: "var(--bg-page)", minHeight: "100vh" }}>
        <section className="relative overflow-hidden pt-32 pb-16 px-6">
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 50% at 50% -10%, rgba(212,175,55,0.05) 0%, transparent 70%)" }} />
          <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
          <div className="max-w-3xl mx-auto relative z-10">
            <Link href="/insights" className="inline-flex items-center gap-1.5 text-[12px] font-medium mb-8 transition-colors" style={{ color: "var(--text-faint)" }}>
              <ArrowLeft size={12} /> Back to Insights
            </Link>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest" style={{ backgroundColor: "var(--gold-muted)", color: "var(--gold)", border: "1px solid var(--gold-border)" }}>
                Islamic Finance
              </span>
              <span className="text-[11px]" style={{ color: "var(--text-faint)" }}>10 min read</span>
              <span className="text-[11px]" style={{ color: "var(--text-faint)" }}><time dateTime={PUBLISHED}>5 November 2026</time></span>
            </div>
            <h1 className="speakable text-[32px] md:text-[44px] font-extrabold leading-[1.1] tracking-tight mb-6" style={{ color: "var(--text-primary)" }}>
              Islamic Banking Software: How AI Is Transforming Shariah Compliance and Governance
            </h1>
            <p className="text-[17px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Islamic banks and Shariah advisory firms are exploring AI for a specific reason: the volume of
              documentation involved in Shariah compliance review has grown faster than manual processes can keep
              up with.
            </p>
          </div>
        </section>
        <div style={{ borderTop: "1px solid var(--border)" }} />
        <article className="max-w-3xl mx-auto px-6 py-16">
          <div className="space-y-8" style={{ color: "var(--text-secondary)" }}>

            <div className="answer-capsule">
              <p className="text-[12px] font-bold uppercase tracking-widest mb-2" style={{ color: "var(--gold)" }}>The short answer</p>
              <p className="text-[15px] leading-relaxed" style={{ color: "var(--text-primary)" }}>
                AI can support Islamic banking software by reducing administrative work and keeping
                clear, auditable records, but Shariah compliance determination
                itself remains with qualified scholars and governance bodies. The useful role for AI is reducing
                the manual workload around that judgment, not replacing it.
              </p>
            </div>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              Why Shariah compliance workflows are hard to scale manually
            </h2>
            <p className="text-[15px] leading-[1.85]">
              A Shariah compliance team typically works with lengthy contracts, internal policies, approved
              standards, and previous rulings. Reviewing each new product or contract against this body of
              material requires time, consistency, and specialist expertise. As institutions introduce more
              products and operate across more jurisdictions, manual review becomes a bottleneck, not because the
              judgment is wrong, but because the surrounding administrative work, gathering documents, tracking
              versions and recording decisions, consumes a growing share of scarce scholarly time.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              Where AI fits in the compliance workflow
            </h2>
            <p className="text-[15px] leading-[1.85]">
              AI-assisted systems can help compliance teams find and organise information and prepare matters for
              review. This is assistance, not replacement: noticing something in a document is not the same as
              determining its Shariah status. A well-designed system keeps that distinction visible and leaves
              conclusions to scholars.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              Murabaha review as a concrete example
            </h2>
            <p className="text-[15px] leading-[1.85]">
              Murabaha, a cost-plus-profit sale arrangement, is one of the most common Islamic financing
              structures, and in many institutions its workflow remains largely manual: documents reviewed
              by hand, files compiled manually, scholar approval tracked through email. Digitising this workflow
              means bringing it into one organised, auditable process, making it more consistent without changing
              who makes the compliance decision.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              Shariah board processes and audit trails
            </h2>
            <p className="text-[15px] leading-[1.85]">
              A Shariah Supervisory Board process needs a record of what was submitted, what was changed in
              response, and what was ultimately approved. Software that structures this process gives
              institutions a complete record on demand: useful for internal governance, and often required by
              regulators and external auditors. Without structured tracking, that history typically has to be
              reconstructed manually from emails and meeting notes, which is slower and less reliable.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              Integration with core banking systems
            </h2>
            <p className="text-[15px] leading-[1.85]">
              Shariah compliance and governance software is usually layered alongside core banking infrastructure
              rather than replacing it. The compliance platform needs access to relevant contract and product data,
              and the core banking system remains the system of record for transactions. Integration feasibility
              depends on what the core banking system exposes through APIs or structured exports, and this should
              be confirmed early in any evaluation rather than assumed.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              Where Aylinor fits
            </h2>
            <p className="text-[15px] leading-[1.85]">
              This is the thinking behind{" "}
              <Link href="/amanah-ai" className="underline underline-offset-2" style={{ color: "var(--gold)" }}>
                Aylinor
              </Link>
              , Daeson Technologies&apos; Shariah compliance and governance platform for Islamic financial
              institutions. It helps Shariah teams work in a more organised, consistent and auditable way, with
              final Shariah determination remaining with the institution&apos;s own scholars and governance
              structures. Full platform access is available to institutions on request.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              What to evaluate before adopting Islamic banking software with AI
            </h2>
            <ul className="list-disc list-inside space-y-2 text-[15px] leading-[1.85] pl-2">
              <li>Does the system clearly separate AI-assisted findings from final Shariah determinations?</li>
              <li>Can it maintain an audit trail covering submission, review, correction, and approval?</li>
              <li>What data protection and access controls are in place for sensitive contract information?</li>
              <li>Can it realistically integrate with your existing core banking or document systems?</li>
              <li>How is the system kept current with evolving standards and institutional policy?</li>
            </ul>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              Conclusion
            </h2>
            <p className="text-[15px] leading-[1.85]">
              AI is changing how Islamic banking software supports compliance work, not by making Shariah
              determinations, but by reducing the manual burden of administration and record-keeping around those determinations. Institutions that adopt this kind of software
              with that boundary clearly defined are better positioned to scale compliance work without diluting
              scholarly oversight.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              Frequently asked questions
            </h2>
            {faqs.map((f) => (
              <div key={f.q}>
                <h3 className="text-[17px] font-semibold mb-2" style={{ color: "var(--text-primary)" }}>{f.q}</h3>
                <p className="text-[15px] leading-[1.85]">{f.a}</p>
              </div>
            ))}

            <div className="rounded-2xl p-8 mt-4" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--gold-border)" }}>
              <p className="text-[15px] font-semibold mb-2" style={{ color: "var(--text-primary)" }}>Evaluating Shariah compliance software?</p>
              <p className="text-[14px] mb-5" style={{ color: "var(--text-secondary)" }}>
                Contact Daeson Technologies to request an introductory demonstration of Aylinor, or read how{" "}
                <Link href="/insights/shariah-compliance-ai-expert-review" className="underline underline-offset-2" style={{ color: "var(--gold)" }}>
                  Aylinor supports expert review
                </Link>{" "}
                without replacing it.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-[14px] font-bold rounded-xl hover:opacity-90 transition-all"
                style={{ backgroundColor: "var(--gold)", color: "#0B0E14" }}
              >
                Request a demonstration <ArrowRight size={14} />
              </Link>
            </div>

          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
