import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const SITE = "https://daesontechnologies.online";
const URL = `${SITE}/insights/shariah-compliance-ai-expert-review`;
const TITLE = "Shariah Compliance and AI: Aylinor's Approach";
const DESCRIPTION =
  "Learn how Aylinor approaches Arabic-English Shariah-compliance documentation, supporting qualified expert review rather than replacing judgment.";
const PUBLISHED = "2026-10-23";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "AI for Shariah-compliance workflows",
    "Arabic-English documentation review",
    "Islamic-finance technology",
    "Shariah-review assistant",
    "Aylinor",
    "Shariah compliance AI",
  ],
  authors: [{ name: "Daeson Technologies", url: SITE }],
  creator: "Daeson Technologies",
  publisher: "Daeson Technologies",
  alternates: { canonical: URL },
  openGraph: {
    type: "article",
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: "Daeson Technologies",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  other: {
    "geo.region": "PK",
    "geo.placename": "Pakistan",
    "geo.position": "30.3753;69.3451",
    ICBM: "30.3753, 69.3451",
    "article:published_time": PUBLISHED,
    "article:modified_time": PUBLISHED,
    "article:author": "Daeson Technologies",
    "article:section": "Islamic Finance",
    "article:tag": "Aylinor, Shariah compliance, Islamic finance technology, expert review",
  },
};

const faqs = [
  {
    q: "What is Aylinor?",
    a: "Aylinor is Daeson Technologies' Arabic-English AI platform for Shariah-compliance documentation and expert-review workflows. It is designed to support the preparation and review of documentation, not to issue Shariah rulings.",
  },
  {
    q: "Does Aylinor replace a Shariah scholar's judgment?",
    a: "No. Aylinor's outputs, such as a structured summary, a potential issue to investigate, or a reference that needs checking, are a starting point for a qualified reviewer. The professional must still determine whether that information is correct and relevant.",
  },
  {
    q: "Does a reference found by an AI tool prove an interpretation is correct?",
    a: "No. A cited passage does not automatically establish that an interpretation is correct. A reviewer still needs to confirm the reference supports the point being made, applies to the transaction and its circumstances, and reflects any applicable local requirements or institutional policies.",
  },
  {
    q: "Is Aylinor publicly available?",
    a: "Aylinor is in private preview. Daeson Technologies' current priority is evaluating its usefulness and limitations with experienced practitioners and institutions before wider release.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESCRIPTION,
  author: { "@type": "Organization", name: "Daeson Technologies", url: SITE },
  publisher: { "@type": "Organization", name: "Daeson Technologies", url: SITE },
  url: URL,
  mainEntityOfPage: URL,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  about: [
    { "@type": "Thing", name: "AI for Shariah-compliance workflows" },
    { "@type": "Thing", name: "Islamic finance technology" },
    { "@type": "Thing", name: "Aylinor" },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE },
    { "@type": "ListItem", position: 2, name: "Insights", item: `${SITE}/insights` },
    { "@type": "ListItem", position: 3, name: TITLE, item: URL },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
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
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 70% 50% at 50% -10%, rgba(212,175,55,0.05) 0%, transparent 70%)" }}
          />
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
              <span className="text-[11px]" style={{ color: "var(--text-faint)" }}><time dateTime={PUBLISHED}>October 23, 2026</time></span>
            </div>

            <h1 className="speakable text-[32px] md:text-[44px] font-extrabold leading-[1.1] tracking-tight mb-6" style={{ color: "var(--text-primary)" }}>
              Shariah Compliance in the AI Era: Supporting Experts, Not Replacing Them
            </h1>

            <p className="text-[17px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Islamic-finance technology should begin with a clear principle: better tools should support
              professional judgment, not obscure who is responsible for making decisions.
            </p>
          </div>
        </section>

        <div style={{ borderTop: "1px solid var(--border)" }} />

        <article className="max-w-3xl mx-auto px-6 py-16">
          <div className="space-y-8" style={{ color: "var(--text-secondary)" }}>

            <p className="text-[15px] leading-[1.85]">
              For teams working with contracts, policies, and supporting materials, the opportunity is not simply
              to generate more text. It is to make documentation easier to navigate, relevant information easier
              to examine, and findings easier to prepare for qualified review.
            </p>
            <p className="text-[15px] leading-[1.85]">
              That is the purpose behind Aylinor, Daeson Technologies&apos; Arabic&ndash;English AI platform for
              Shariah-compliance documentation and expert-review workflows.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              A clearer starting point for review
            </h2>
            <p className="text-[15px] leading-[1.85]">
              Consider a professional preparing a document for review. Before reaching a conclusion, they may need
              to understand the wording, locate relevant references, compare related materials, and organize
              questions for a reviewer.
            </p>
            <p className="text-[15px] leading-[1.85]">
              These are connected tasks, but they are not the same as a final Shariah judgment.
            </p>
            <p className="text-[15px] leading-[1.85]">
              A documentation assistant can provide a starting point: a structured summary, a potential issue to
              investigate, or a reference that needs checking. The professional must still determine whether that
              information is correct and relevant.
            </p>
            <p className="text-[15px] leading-[1.85]">
              A useful output is therefore not simply a confident answer. It is an answer that a qualified person
              can examine, challenge, and correct.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              References matter, but context matters too
            </h2>
            <p className="text-[15px] leading-[1.85]">
              A cited passage does not automatically establish that an interpretation is correct.
            </p>
            <p className="text-[15px] leading-[1.85]">A reviewer still needs to ask:</p>
            <ul className="list-disc list-inside space-y-2 text-[15px] leading-[1.85] pl-2">
              <li>Does the reference support the point being made?</li>
              <li>Does it apply to this transaction and its circumstances?</li>
              <li>Are there applicable local requirements or institutional policies?</li>
              <li>What information is missing from the document?</li>
            </ul>
            <p className="text-[15px] leading-[1.85]">
              Contractual wording also does not, on its own, demonstrate how a transaction was executed.
            </p>
            <p className="text-[15px] leading-[1.85]">
              These distinctions should remain visible when introducing AI assistance into professional review.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              Where Aylinor fits
            </h2>
            <p className="text-[15px] leading-[1.85]">
              Aylinor is built around documentation-review assistance intended to support research and preparation
              of review materials.
            </p>
            <p className="text-[15px] leading-[1.85]">
              The product is in private preview. Our immediate priority is to evaluate its usefulness and
              limitations in collaboration with experienced practitioners and institutions.
            </p>
            <p className="text-[15px] leading-[1.85]">
              That means examining not only what the platform produces, but also where it requires correction,
              where uncertainty should be clearer, and how its outputs fit into an existing review process.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              Progress starts with responsible evaluation
            </h2>
            <p className="text-[15px] leading-[1.85]">
              Responsible adoption is not a competition to remove people from the workflow. It is an opportunity to
              improve how people prepare, verify, and discuss information.
            </p>
            <p className="text-[15px] leading-[1.85]">
              Aylinor&apos;s direction is straightforward: support the work around expert judgment while keeping
              final authority with the responsible professionals.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              Further reading
            </h2>
            <p className="text-[15px] leading-[1.85]">
              The{" "}
              <a href="https://www.nist.gov/itl/ai-risk-management-framework" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2" style={{ color: "var(--gold)" }}>
                NIST AI Risk Management Framework
              </a>{" "}
              is an appropriate general resource on evaluating AI risks and trustworthiness. It does not certify
              or endorse Aylinor.
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
              <p className="text-[15px] font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                Interested in reviewing Aylinor&apos;s approach?
              </p>
              <p className="text-[14px] mb-5" style={{ color: "var(--text-secondary)" }}>
                Contact Daeson Technologies to request an introductory demonstration.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 text-[14px] font-bold rounded-xl hover:opacity-90 transition-all"
                  style={{ backgroundColor: "var(--gold)", color: "#0B0E14" }}
                >
                  Request a demonstration <ArrowRight size={14} />
                </Link>
                <Link
                  href="/amanah-ai"
                  className="inline-flex items-center gap-1.5 text-[13px] font-semibold px-2 py-3"
                  style={{ color: "var(--gold)" }}
                >
                  Learn more about Aylinor
                </Link>
              </div>
            </div>

          </div>
        </article>

      </main>
      <Footer />
    </>
  );
}
