import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Download, ExternalLink } from "lucide-react";

const SITE = "https://daesontechnologies.online";
const URL = `${SITE}/insights/ifn-shariah-compliance-meets-ai`;
const PDF_PATH = "/reports/ifn-shariah-compliance-meets-ai.pdf";
const PDF_URL = `${SITE}${PDF_PATH}`;
const IFN_URL = "https://www.islamicfinancenews.com";
const HEADLINE = "When Shariah compliance meets AI: Innovation must know its limits";
const TITLE = "When Shariah Compliance Meets AI: IFN Special Report";
const DESCRIPTION =
  "Read Mahnoor Zafar's IFN Special Report on AI in Shariah governance: why machines can assist, scholars decide and institutions remain accountable. Download the PDF.";
const PUBLISHED = "2026-10-07";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "IFN",
    "Islamic Finance News",
    "IFN Special Report",
    "IFN Volume 23 Issue 40",
    "When Shariah compliance meets AI",
    "AI in Shariah governance",
    "AI in Islamic finance",
    "Shariah compliance AI",
    "Shariah governance technology",
    "human-in-the-loop AI Islamic finance",
    "lifecycle Shariah governance",
    "Islamic fintech",
    "Mahnoor Zafar",
    "Daeson Technologies",
  ],
  authors: [{ name: "Mahnoor Zafar", url: `${SITE}/about` }],
  creator: "Mahnoor Zafar",
  publisher: "Daeson Technologies",
  alternates: { canonical: URL },
  openGraph: {
    title: `${HEADLINE} | IFN Special Report`,
    description: DESCRIPTION,
    url: URL,
    siteName: "Daeson Technologies",
    images: [{ url: `${SITE}/og-image.png`, width: 1200, height: 630, alt: HEADLINE }],
    type: "article",
    locale: "en_US",
    publishedTime: PUBLISHED,
    authors: [`${SITE}/about`],
  },
  twitter: {
    card: "summary_large_image",
    title: `${HEADLINE} | IFN Special Report`,
    description: DESCRIPTION,
    images: [`${SITE}/og-image.png`],
    creator: "@DaesonTech",
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
    "article:author": "Mahnoor Zafar",
    "article:section": "Islamic Finance",
    "article:tag": "IFN, Islamic Finance News, AI in Shariah governance, Shariah compliance AI, Islamic fintech",
    // Publication citation tags (read by Google Scholar and other indexers)
    citation_title: HEADLINE,
    citation_author: "Zafar, Mahnoor",
    citation_publication_date: "2026/10/07",
    citation_journal_title: "Islamic Finance News (IFN)",
    citation_volume: "23",
    citation_issue: "40",
    citation_firstpage: "24",
    citation_lastpage: "25",
    citation_pdf_url: PDF_URL,
    citation_abstract_html_url: URL,
  },
};

const faqs = [
  {
    q: "What is the IFN report \"When Shariah compliance meets AI\" about?",
    a: "It argues that AI should support Shariah governance without becoming the authority on it. AI can help with information retrieval, document analysis, classification and highlighting areas for human attention, while scholars retain responsibility for interpretation and determination, and institutions remain accountable for implementation and oversight.",
  },
  {
    q: "Who wrote the report and where was it published?",
    a: "The report was written by Mahnoor Zafar, Founder and CEO of Daeson Technologies. It was first published as a Special Report in IFN (Islamic Finance News) Volume 23, Issue 40, dated 7 October 2026, on pages 24 and 25.",
  },
  {
    q: "Can AI determine whether a financial product is Shariah compliant?",
    a: "According to the report, no. An AI system may identify a clause that deserves attention or compare language across documents, but identifying something unusual is not the same as determining its Shariah status. Confidence in an AI output should never be confused with scholarly validity.",
  },
  {
    q: "What does lifecycle Shariah governance mean?",
    a: "Financial products change after approval through technology, operational procedures, customer journeys, payment processes and later modifications. The report suggests Shariah governance should be considered throughout a product's lifecycle rather than only at initial approval.",
  },
  {
    q: "What happens after an AI system flags a potential Shariah concern?",
    a: "Detection is only the beginning. A scholar needs to assess the finding, the relevant team may need to make a correction, the revised material needs to be reviewed again, and the institution needs a record of what changed and why. The report argues useful technology should support that whole governance process.",
  },
];

const takeaways = [
  "Shariah compliance is not simply a document-checking exercise. It involves interpretation, context, jurisprudential reasoning and institutional responsibility.",
  "Identifying something unusual is not the same as determining its Shariah status. Technology can assist the process; it should not quietly become the authority.",
  "Modern products are not static, so Shariah governance should run across the product lifecycle rather than only at initial approval.",
  "Detection is only the beginning. Useful systems support what happens after a flag: scholarly assessment, correction, re-review and a governance record.",
  "The opportunity is not to reduce Shariah scholarship to a database, but to build better digital infrastructure around it.",
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": ["Article", "Report"],
  "@id": `${URL}#report`,
  headline: HEADLINE,
  name: HEADLINE,
  description: DESCRIPTION,
  abstract:
    "Islamic finance has never been short of innovation. As AI begins to influence how financial institutions analyze information, manage risk and build products, the question is not whether AI will enter Shariah governance, but how it should enter. Machines can assist. Scholars decide. Institutions remain accountable.",
  author: {
    "@type": "Person",
    "@id": `${SITE}/about#mahnoor-zafar`,
    name: "Mahnoor Zafar",
    jobTitle: "Founder and CEO",
    worksFor: { "@id": `${SITE}/#organization` },
    sameAs: ["https://www.linkedin.com/in/mahnoor-zafar-6a33a4248/"],
  },
  publisher: { "@id": `${SITE}/#organization` },
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  url: URL,
  mainEntityOfPage: URL,
  inLanguage: "en",
  pageStart: "24",
  pageEnd: "25",
  isPartOf: {
    "@type": "PublicationIssue",
    issueNumber: "40",
    datePublished: PUBLISHED,
    isPartOf: {
      "@type": "PublicationVolume",
      volumeNumber: "23",
      isPartOf: {
        "@type": "Periodical",
        name: "Islamic Finance News (IFN)",
        alternateName: "IFN",
        url: IFN_URL,
      },
    },
  },
  associatedMedia: {
    "@type": "MediaObject",
    contentUrl: PDF_URL,
    encodingFormat: "application/pdf",
    name: `${HEADLINE} (PDF)`,
  },
  about: [
    { "@type": "Thing", name: "AI in Shariah governance" },
    { "@type": "Thing", name: "Shariah compliance" },
    { "@type": "Thing", name: "Islamic finance" },
    { "@type": "Thing", name: "Islamic fintech" },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE },
    { "@type": "ListItem", position: 2, name: "Insights", item: `${SITE}/insights` },
    { "@type": "ListItem", position: 3, name: "IFN Special Report: When Shariah compliance meets AI", item: URL },
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

export default function IFNReportPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main style={{ backgroundColor: "var(--bg-page)", minHeight: "100vh" }}>

        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-16 px-6">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 70% 50% at 50% -10%, rgba(212,175,55,0.07) 0%, transparent 70%)" }}
          />
          <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
          <div className="max-w-3xl mx-auto relative z-10">
            <Link
              href="/insights"
              className="inline-flex items-center gap-1.5 text-[12px] font-medium mb-8 transition-colors"
              style={{ color: "var(--text-faint)" }}
            >
              <ArrowLeft size={12} /> Back to Insights
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span
                className="text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest"
                style={{ backgroundColor: "var(--gold-muted)", color: "var(--gold)", border: "1px solid var(--gold-border)" }}
              >
                IFN Special Report
              </span>
              <span className="text-[11px]" style={{ color: "var(--text-faint)" }}>
                Volume 23, Issue 40 · <time dateTime={PUBLISHED}>7 October 2026</time>
              </span>
            </div>

            <h1 className="speakable text-[32px] md:text-[44px] font-extrabold leading-[1.1] tracking-tight mb-6" style={{ color: "var(--text-primary)" }}>
              When Shariah compliance meets AI: Innovation must know its limits
            </h1>

            <p className="text-[17px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              Islamic finance has never been short of innovation. As AI begins to shape how institutions analyze
              information, manage risk and build products, the important question is not whether AI will enter Shariah
              governance. It is how it should enter.
            </p>

            <p className="text-[13px] mb-8" style={{ color: "var(--text-faint)" }}>
              By{" "}
              <Link href="/about" className="font-semibold" style={{ color: "var(--text-primary)" }}>
                Mahnoor Zafar
              </Link>
              , Founder and CEO, Daeson Technologies. First published in{" "}
              <a href={IFN_URL} target="_blank" rel="noopener" className="underline underline-offset-2" style={{ color: "var(--text-secondary)" }}>
                Islamic Finance News (IFN)
              </a>
              , pages 24 to 25.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={PDF_PATH}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-[14px] font-bold rounded-xl hover:opacity-90 transition-all"
                style={{ backgroundColor: "var(--gold)", color: "#0B0E14" }}
              >
                <Download size={15} /> Download the report (PDF)
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-[14px] font-semibold rounded-xl transition-all"
                style={{ border: "1px solid var(--gold-border)", color: "var(--gold)" }}
              >
                Discuss it with our team <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        <div style={{ borderTop: "1px solid var(--border)" }} />

        {/* Body */}
        <article className="max-w-3xl mx-auto px-6 py-16">
          <div className="space-y-8" style={{ color: "var(--text-secondary)" }}>

            <div className="answer-capsule">
              <p className="text-[12px] font-bold uppercase tracking-widest mb-2" style={{ color: "var(--gold)" }}>
                The short answer
              </p>
              <p className="text-[15px] leading-relaxed" style={{ color: "var(--text-primary)" }}>
                AI can help Islamic financial institutions with information retrieval, document analysis, classification
                and identifying areas that need human attention. It should not become the authority on Shariah status.
                Scholars decide, and institutions remain accountable.
              </p>
            </div>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              What the report covers
            </h2>
            <p className="text-[15px] leading-[1.85]">
              Writing in IFN&apos;s Special Report section, Mahnoor Zafar argues that asking &ldquo;what can we
              automate?&rdquo; may be the wrong starting point for Islamic finance. The report examines the risk of
              treating compliance as a technology problem, the shift from one-time review to continuous governance
              across a product&apos;s lifecycle, and the often-overlooked question of what happens after a system flags
              a potential concern.
            </p>
            <p className="text-[15px] leading-[1.85]">
              It closes with a call for dialogue between scholars, technology companies, financial institutions and
              regulators, and for technology that strengthens governance rather than quietly replacing human judgment.
            </p>

            <blockquote
              className="rounded-2xl p-8 my-2"
              style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--gold-border)" }}
            >
              <p className="text-[20px] md:text-[24px] font-extrabold leading-[1.3] tracking-tight" style={{ color: "var(--text-primary)" }}>
                &ldquo;Machines can assist. Scholars decide. Institutions remain accountable.&rdquo;
              </p>
              <footer className="text-[13px] mt-4" style={{ color: "var(--text-faint)" }}>
                Mahnoor Zafar, IFN Volume 23, Issue 40
              </footer>
            </blockquote>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              Key takeaways
            </h2>
            <ul className="space-y-3 text-[15px] leading-[1.85]">
              {takeaways.map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-[11px] w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "var(--gold)" }} />
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              Why it matters for Islamic financial institutions
            </h2>
            <p className="text-[15px] leading-[1.85]">
              The global financial system is becoming more digital, more automated and increasingly dependent on AI.
              Islamic financial institutions cannot remain outside that transformation, but neither should they adopt
              technology simply because everyone else is doing so. The report frames the real question for the next
              decade: how to use AI while preserving the principles, accountability and human judgment that give
              Islamic finance its identity.
            </p>

            <div
              className="rounded-2xl p-8"
              style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}
            >
              <p className="text-[15px] font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                Read the full report
              </p>
              <p className="text-[14px] mb-5" style={{ color: "var(--text-secondary)" }}>
                Two pages from IFN Volume 23, Issue 40, dated 7 October 2026. Free PDF download, no sign-up required.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={PDF_PATH}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 text-[14px] font-bold rounded-xl hover:opacity-90 transition-all"
                  style={{ backgroundColor: "var(--gold)", color: "#0B0E14" }}
                >
                  <Download size={15} /> Download PDF
                </a>
                <a
                  href={IFN_URL}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-1.5 text-[13px] font-medium px-3 py-3"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Visit Islamic Finance News <ExternalLink size={13} />
                </a>
              </div>
            </div>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              About the author
            </h2>
            <p className="text-[15px] leading-[1.85]">
              <Link href="/about" className="font-semibold" style={{ color: "var(--text-primary)" }}>
                Mahnoor Zafar
              </Link>{" "}
              is the Founder and CEO of Daeson Technologies, which builds governance-first AI infrastructure for{" "}
              <Link href="/industries/islamic-finance" className="underline underline-offset-2" style={{ color: "var(--gold)" }}>
                Islamic finance
              </Link>{" "}
              and real estate. She can be contacted at{" "}
              <a href="mailto:contact@daesontechnologies.online" className="underline underline-offset-2" style={{ color: "var(--gold)" }}>
                contact@daesontechnologies.online
              </a>
              .
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

            <div
              className="rounded-2xl p-10 text-center mt-4"
              style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--gold-border)" }}
            >
              <p className="text-[20px] font-bold mb-2" style={{ color: "var(--text-primary)" }}>
                Exploring AI for Shariah governance?
              </p>
              <p className="text-[14px] mb-6 max-w-xl mx-auto" style={{ color: "var(--text-secondary)" }}>
                We work with Islamic financial institutions on technology that reduces friction without reducing
                responsibility. Tell us about your review process.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-[14px] font-bold rounded-xl hover:opacity-90 transition-all"
                style={{ backgroundColor: "var(--gold)", color: "#0B0E14" }}
              >
                Talk to Daeson Technologies <ArrowRight size={14} />
              </Link>
            </div>

          </div>
        </article>

      </main>
      <Footer />
    </>
  );
}
