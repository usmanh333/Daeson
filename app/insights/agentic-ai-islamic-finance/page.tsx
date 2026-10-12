import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const URL = "https://daesontechnologies.online/insights/agentic-ai-islamic-finance";
const TITLE = "AI in Islamic Finance: Why Malaysia, Indonesia and the UAE Matter";
const DESCRIPTION =
  "Discover how AI and Agentic AI could transform Islamic finance through smarter Shariah compliance workflows, document analysis and responsible automation.";
const PUBLISHED = "2026-10-12";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "AI in Islamic finance",
    "Agentic AI in Islamic banking",
    "Shariah compliance technology",
    "Islamic fintech",
    "Malaysia Islamic finance",
    "Indonesia Islamic banking",
    "UAE Islamic finance",
    "Shariah governance AI",
  ],
  authors: [{ name: "Daeson Technologies", url: "https://daesontechnologies.online" }],
  creator: "Daeson Technologies",
  publisher: "Daeson Technologies",
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: "Daeson Technologies",
    images: [{ url: "https://daesontechnologies.online/og-image.png", width: 1200, height: 630, alt: TITLE }],
    type: "article",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://daesontechnologies.online/og-image.png"],
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
    "article:author": "Daeson Technologies",
    "article:section": "Islamic Finance",
    "article:tag": "AI in Islamic finance, Agentic AI, Shariah compliance technology, Islamic fintech, Malaysia, Indonesia, UAE",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Islamic Finance Is Entering the AI Era: Why Agentic AI Could Be the Next Big Shift",
  description: DESCRIPTION,
  author: { "@type": "Organization", name: "Daeson Technologies", url: "https://daesontechnologies.online" },
  publisher: { "@type": "Organization", name: "Daeson Technologies", url: "https://daesontechnologies.online" },
  url: URL,
  mainEntityOfPage: URL,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  about: [
    { "@type": "Thing", name: "AI in Islamic finance" },
    { "@type": "Thing", name: "Agentic AI" },
    { "@type": "Thing", name: "Shariah compliance technology" },
    { "@type": "Thing", name: "Islamic fintech" },
  ],
  spatialCoverage: [
    { "@type": "Country", name: "Malaysia" },
    { "@type": "Country", name: "Indonesia" },
    { "@type": "Country", name: "United Arab Emirates" },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://daesontechnologies.online" },
    { "@type": "ListItem", position: 2, name: "Insights", item: "https://daesontechnologies.online/insights" },
    { "@type": "ListItem", position: 3, name: "Islamic Finance Is Entering the AI Era: Why Agentic AI Could Be the Next Big Shift", item: URL },
  ],
};

export default function ArticlePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <main style={{ backgroundColor: "var(--bg-page)", minHeight: "100vh" }}>

        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-16 px-6">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 70% 50% at 50% -10%, rgba(212,175,55,0.05) 0%, transparent 70%)" }}
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

            <div className="flex items-center gap-3 mb-6">
              <span
                className="text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest"
                style={{ backgroundColor: "var(--gold-muted)", color: "var(--gold)", border: "1px solid var(--gold-border)" }}
              >
                Islamic Finance
              </span>
              <span className="text-[11px]" style={{ color: "var(--text-faint)" }}>4 min read</span>
              <span className="text-[11px]" style={{ color: "var(--text-faint)" }}>
                <time dateTime={PUBLISHED}>October 12, 2026</time>
              </span>
            </div>

            <h1 className="speakable text-[32px] md:text-[44px] font-extrabold leading-[1.1] tracking-tight mb-6" style={{ color: "var(--text-primary)" }}>
              Islamic Finance Is Entering the AI Era: Why Agentic AI Could Be the Next Big Shift
            </h1>

            <p className="text-[17px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              As institutions introduce new products, manage complex contracts and operate across jurisdictions,
              AI could help make Shariah compliance reviews more efficient without compromising governance.
            </p>
          </div>
        </section>

        <div style={{ borderTop: "1px solid var(--border)" }} />

        {/* Article Body */}
        <article className="max-w-3xl mx-auto px-6 py-16">
          <div className="space-y-8" style={{ color: "var(--text-secondary)" }}>

            <h2 className="text-[24px] font-bold tracking-tight" style={{ color: "var(--text-primary)" }}>
              Islamic finance is growing. Can compliance keep up?
            </h2>
            <p className="text-[15px] leading-[1.85]">
              Islamic finance is evolving, and technology is becoming an increasingly important part of that
              transformation. As financial institutions introduce new products, manage complex contracts and operate
              across jurisdictions,{" "}
              <strong style={{ color: "var(--text-primary)" }}>
                how can they make Shariah compliance reviews more efficient without compromising governance?
              </strong>
            </p>
            <p className="text-[15px] leading-[1.85]">
              This is where AI, and potentially Agentic AI, could make a meaningful difference.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              Why AI is becoming important in Islamic finance
            </h2>
            <p className="text-[15px] leading-[1.85]">
              Shariah compliance teams often work with lengthy contracts, internal policies, approved standards and
              previous rulings. Reviewing these materials requires time, consistency and specialist expertise.
            </p>
            <p className="text-[15px] leading-[1.85]">
              AI can help teams search documents, identify relevant clauses, summarize information and flag potential
              issues for human review.
            </p>
            <div className="answer-capsule">
              <p className="text-[12px] font-bold uppercase tracking-widest mb-2" style={{ color: "var(--gold)" }}>
                Agentic AI goes a step further
              </p>
              <p className="text-[15px] leading-relaxed" style={{ color: "var(--text-primary)" }}>
                Within clearly defined permissions, Agentic AI can coordinate multiple workflow steps, such as
                classifying documents, routing cases to reviewers, tracking outstanding actions and preparing reports.
              </p>
            </div>
            <p className="text-[15px] leading-[1.85]">
              The objective is not to automate Shariah judgment. It is to reduce repetitive work and help qualified
              professionals focus on analysis, interpretation and decisions.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              Why Malaysia, Indonesia and the UAE matter
            </h2>
            <p className="text-[15px] leading-[1.85]">
              These three markets have established Islamic finance ecosystems and are actively exploring broader
              financial-sector innovation. Their approaches differ, but all are relevant to the future of responsible
              AI adoption.
            </p>
            <ul className="space-y-3 text-[15px] leading-[1.85] pl-2">
              <li>
                <strong style={{ color: "var(--text-primary)" }}>Malaysia:</strong> Bank Negara Malaysia has highlighted
                responsible AI adoption in financial services while continuing to strengthen the Islamic finance
                ecosystem and Shariah research capabilities.
              </li>
              <li>
                <strong style={{ color: "var(--text-primary)" }}>Indonesia:</strong> The Financial Services Authority
                (OJK) introduced AI governance guidance for banks in April 2025, emphasizing responsible implementation
                and risk management. Indonesia&apos;s large Islamic finance market makes developments in banking
                technology particularly relevant.
              </li>
              <li>
                <strong style={{ color: "var(--text-primary)" }}>United Arab Emirates:</strong> The UAE&apos;s 2025 Islamic
                Finance and Halal Industry Strategy aims to strengthen its position as a global hub for Islamic finance
                and advanced innovation.
              </li>
            </ul>
            <p className="text-[15px] leading-[1.85]">
              These developments do not mean that all three markets have adopted Agentic AI specifically for Shariah
              compliance. They do, however, show why responsible AI, governance and financial innovation deserve
              attention across the industry.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              The next opportunity: AI that supports Shariah governance
            </h2>
            <p className="text-[15px] leading-[1.85]">
              The opportunity goes beyond chatbots. Financial institutions could use AI-assisted systems to connect
              document analysis, approved reference materials, review assignments, escalation procedures and audit trails.
            </p>
            <p className="text-[15px] leading-[1.85]">
              But trust must come first. Institutions need appropriate data protection, explainable outputs, controlled
              access and human approval at critical stages.
            </p>
            <div
              className="rounded-2xl p-6"
              style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--gold-border)" }}
            >
              <p className="text-[16px] leading-[1.75] font-semibold" style={{ color: "var(--text-primary)" }}>
                The future is not AI replacing Shariah scholars. It is technology helping Shariah teams work with
                greater speed, consistency and visibility, while qualified humans remain accountable for final decisions.
              </p>
            </div>
            <p className="text-[15px] leading-[1.85]">
              At Daeson Technologies, we believe the next generation of{" "}
              <Link href="/industries/islamic-finance" className="underline underline-offset-2" style={{ color: "var(--gold)" }}>
                Islamic financial technology
              </Link>{" "}
              must combine practical AI capabilities with strong governance and clear operational controls.
            </p>
            <p className="text-[15px] leading-[1.85]">
              The important question is no longer simply whether Islamic finance can use AI. It is how institutions can
              adopt it responsibly, securely and in a way that strengthens trust.
            </p>

            <div
              className="rounded-2xl p-8 mt-4"
              style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--gold-border)" }}
            >
              <p className="text-[15px] font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                What role do you believe Agentic AI should play in the future of Islamic finance?
              </p>
              <p className="text-[14px] mb-5" style={{ color: "var(--text-secondary)" }}>
                We would like to hear from Shariah teams, compliance leaders and Islamic finance institutions exploring
                responsible AI.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-[14px] font-bold rounded-xl hover:opacity-90 transition-all"
                style={{ backgroundColor: "var(--gold)", color: "#0B0E14" }}
              >
                Share your perspective
              </Link>
            </div>

          </div>
        </article>

      </main>
      <Footer />
    </>
  );
}
