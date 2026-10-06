import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Aylinor Pre-Seed Round: Funding Enterprise Growth",
  description:
    "Aylinor is seeking pre-seed investment to strengthen Arabic and English AI, improve product performance, and support institutional expansion into the Gulf.",
  keywords: [
    "Aylinor pre-seed funding",
    "Islamic fintech startup",
    "Shariah compliance AI",
    "Islamic finance investment",
    "enterprise AI Pakistan GCC",
    "Aylinor",
    "Daeson Technologies funding",
    "Islamic finance startup Pakistan",
    "Gulf fintech investment",
    "UAE Islamic fintech",
    "Saudi Arabia Islamic AI",
    "Shariah compliance software investment",
  ],
  authors: [{ name: "Daeson Technologies", url: "https://daesontechnologies.online" }],
  creator: "Daeson Technologies",
  publisher: "Daeson Technologies",
  alternates: { canonical: "https://daesontechnologies.online/insights/aylinor-pre-seed-round" },
  openGraph: {
    title: "Aylinor Pre-Seed Round: Funding Enterprise Growth",
    description:
      "Aylinor is seeking pre-seed investment to strengthen Arabic and English AI, improve product performance, and support institutional expansion into the Gulf.",
    url: "https://daesontechnologies.online/insights/aylinor-pre-seed-round",
    siteName: "Daeson Technologies",
    images: [{ url: "https://daesontechnologies.online/og-image.png", width: 1200, height: 630, alt: "Aylinor Pre-Seed Round: Funding Enterprise Growth" }],
    type: "article",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aylinor Pre-Seed Round: Funding Enterprise Growth",
    description:
      "Aylinor is raising pre-seed to strengthen AI quality and expand into the Gulf. We are looking for investors and strategic partners with regional expertise.",
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
    "article:published_time": "2026-10-06",
    "article:modified_time": "2026-10-06",
    "article:author": "Daeson Technologies",
    "article:section": "Company News",
    "article:tag": "Aylinor, pre-seed, Islamic fintech, GCC, Pakistan",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Aylinor Is Seeking Pre-Seed Investment to Scale Shariah-Compliance Intelligence",
  description:
    "Aylinor is seeking pre-seed investment to strengthen Arabic and English AI, improve product performance, and support institutional expansion into the Gulf.",
  author: { "@type": "Organization", name: "Daeson Technologies", url: "https://daesontechnologies.online" },
  publisher: { "@type": "Organization", name: "Daeson Technologies", url: "https://daesontechnologies.online" },
  url: "https://daesontechnologies.online/insights/aylinor-pre-seed-round",
  datePublished: "2026-10-06",
  dateModified: "2026-10-06",
  about: [
    { "@type": "Thing", name: "Aylinor pre-seed funding" },
    { "@type": "Thing", name: "Islamic fintech startup" },
    { "@type": "Thing", name: "Shariah compliance AI" },
    { "@type": "Thing", name: "Islamic finance investment" },
    { "@type": "Thing", name: "enterprise AI Pakistan GCC" },
  ],
};

export default function ArticlePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Navbar />
      <main style={{ backgroundColor: "var(--bg-page)", minHeight: "100vh" }}>

        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-16 px-6">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 70% 50% at 50% -10%, rgba(185,145,47,0.05) 0%, transparent 70%)" }}
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
                style={{ backgroundColor: "rgba(185,145,47,0.08)", color: "var(--gold)", border: "1px solid rgba(185,145,47,0.20)" }}
              >
                Company News
              </span>
              <span className="text-[11px]" style={{ color: "var(--text-faint)" }}>6 min read</span>
            </div>

            <h1 className="speakable text-[32px] md:text-[44px] font-extrabold leading-[1.1] tracking-tight mb-6" style={{ color: "var(--text-primary)" }}>
              Aylinor Is Seeking Pre-Seed Investment to Scale Shariah-Compliance Intelligence
            </h1>

            <p className="text-[17px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              We built Aylinor to help Islamic-finance institutions turn complex documentation into clearer,
              more organized review workflows. Now, we are seeking pre-seed investment to accelerate product
              development and support international commercialization.
            </p>
          </div>
        </section>

        <div style={{ borderTop: "1px solid var(--border)" }} />

        {/* Article Body */}
        <article className="max-w-3xl mx-auto px-6 py-16">
          <div className="space-y-8" style={{ color: "var(--text-secondary)" }}>

            <div className="answer-capsule">
              <p className="text-[12px] font-bold uppercase tracking-widest mb-2" style={{ color: "var(--blue)" }}>
                Investment focus
              </p>
              <p className="text-[15px] leading-relaxed" style={{ color: "var(--text-primary)" }}>
                We are raising pre-seed to improve response speed, strengthen AI output quality, and develop
                the support institutions need to adopt the platform in Pakistan, the UAE, and Saudi Arabia.
              </p>
            </div>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              What we have built
            </h2>
            <p className="text-[15px] leading-[1.85]">
              Aylinor is a Shariah-compliance intelligence platform for Islamic financial institutions.
              It is designed to support professional review, not replace scholars, Shariah boards, or
              institutional decision-makers. The institution stays in control. The platform helps the
              team work more efficiently within that structure.
            </p>
            <p className="text-[15px] leading-[1.85]">
              Access is currently available as a private preview by invitation. We are working with a
              small number of institutions to refine the workflow before broader release.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              The institutional problem we are addressing
            </h2>
            <p className="text-[15px] leading-[1.85]">
              Documentation review becomes difficult when information, findings, and decisions are
              disconnected. A team may understand the underlying issue but still spend substantial effort
              locating supporting material, consolidating comments, and preparing the next version for review.
            </p>
            <p className="text-[15px] leading-[1.85]">
              Aylinor&apos;s aim is to connect those activities in a simpler system: analyse, verify, review,
              and retain the record. The value we intend to deliver is greater team capacity and clearer
              workflows, not an automated promise of compliance.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              What the funding will support
            </h2>
            <p className="text-[15px] leading-[1.85]">
              Our pre-seed priorities fall into three areas:
            </p>
            <div className="space-y-4">
              {[
                { label: "Product performance", body: "Reduce the time it takes for compliance teams to move from document submission to a structured, reviewable output." },
                { label: "Arabic and English AI quality", body: "Improve the accuracy and usefulness of outputs for teams working across both languages in Islamic banking contexts." },
                { label: "International adoption", body: "Develop the implementation, support, and market-entry capabilities required to serve institutions beyond Pakistan, including the Gulf." },
              ].map(({ label, body }) => (
                <div
                  key={label}
                  className="rounded-xl p-5"
                  style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}
                >
                  <p className="text-[13px] font-bold mb-1.5" style={{ color: "var(--text-primary)" }}>{label}</p>
                  <p className="text-[14px] leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
            <p className="text-[15px] leading-[1.85]">
              We want funding to translate into measurable progress, not simply more features.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              Our approach to commercialization
            </h2>
            <p className="text-[15px] leading-[1.85]">
              Our route to market is through direct engagement with Islamic financial institutions.
              We begin with a clearly defined problem — disconnected, manual compliance review — demonstrate
              that the workflow improves with Aylinor, and expand adoption where the institution sees a
              continuing benefit.
            </p>
            <p className="text-[15px] leading-[1.85]">
              We are not trying to replace existing institutional governance. We are helping compliance teams
              do the work they already do with less friction and a clearer record. That distinction matters
              to the institutions we are speaking with, and it shapes how we enter each market.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              The partner we are looking for
            </h2>
            <p className="text-[15px] leading-[1.85]">
              We are seeking investors and strategic partners who bring more than capital. For an institutional
              product, relevant introductions, regional understanding, and honest feedback can be essential
              to finding the right first customers.
            </p>
            <p className="text-[15px] leading-[1.85]">
              Our ambition includes the UAE and Saudi Arabia. We want partners who can help us validate the
              route into those markets, challenge our assumptions, and build a disciplined commercial foundation.
            </p>

            <div
              className="rounded-2xl p-8 mt-4"
              style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}
            >
              <p className="text-[15px] font-semibold mb-4" style={{ color: "var(--text-primary)" }}>
                Request access to Aylinor for a live demonstration and a discussion about investment or
                strategic partnership.
              </p>
              <a
                href="https://aylinor.daesontechnologies.online/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-solid inline-flex items-center gap-2 px-6 py-3 text-[14px] font-bold rounded-xl"
              >
                Request Access to Aylinor
              </a>
            </div>

          </div>
        </article>

      </main>
      <Footer />
    </>
  );
}
