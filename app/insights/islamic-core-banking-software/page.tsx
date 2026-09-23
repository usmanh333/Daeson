import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Islamic Core Banking Software vs. a Shariah Compliance Layer",
  description:
    "Islamic core banking software and Shariah compliance intelligence solve different problems. What each one actually covers, and when you need both.",
  keywords: ["Islamic core banking software", "core banking Islamic finance", "Shariah compliance layer", "Aylinor"],
  alternates: { canonical: "https://daesontechnologies.online/insights/islamic-core-banking-software" },
  openGraph: {
    title: "Islamic Core Banking Software vs. a Shariah Compliance Layer",
    url: "https://daesontechnologies.online/insights/islamic-core-banking-software",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Islamic Core Banking Software vs. a Shariah Compliance Layer",
  description:
    "Islamic core banking software and Shariah compliance intelligence solve different problems. What each one actually covers, and when you need both.",
  author: { "@type": "Organization", name: "Daeson Technologies", url: "https://daesontechnologies.online" },
  publisher: { "@type": "Organization", name: "Daeson Technologies", url: "https://daesontechnologies.online" },
  url: "https://daesontechnologies.online/insights/islamic-core-banking-software",
  datePublished: "2026-09-23",
  dateModified: "2026-09-23",
  about: [{ "@type": "Thing", name: "Islamic core banking software" }, { "@type": "Thing", name: "Aylinor" }],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://daesontechnologies.online" },
    { "@type": "ListItem", position: 2, name: "Insights", item: "https://daesontechnologies.online/insights" },
    { "@type": "ListItem", position: 3, name: "Islamic Core Banking Software", item: "https://daesontechnologies.online/insights/islamic-core-banking-software" },
  ],
};

export default function ArticlePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <main style={{ backgroundColor: "var(--bg-page)", minHeight: "100vh" }}>
        <section className="relative overflow-hidden pt-32 pb-16 px-6">
          <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
          <div className="max-w-3xl mx-auto relative z-10">
            <Link href="/insights" className="inline-flex items-center gap-1.5 text-[12px] font-medium mb-8 transition-colors" style={{ color: "var(--text-faint)" }}>
              <ArrowLeft size={12} /> Back to Insights
            </Link>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest" style={{ backgroundColor: "var(--gold-muted)", color: "var(--gold)", border: "1px solid var(--gold-border)" }}>Islamic Finance</span>
              <span className="text-[11px]" style={{ color: "var(--text-faint)" }}>4 min read</span>
            </div>
            <h1 className="speakable text-[32px] md:text-[44px] font-extrabold leading-[1.1] tracking-tight mb-6" style={{ color: "var(--text-primary)" }}>
              Islamic Core Banking Software vs. a Shariah Compliance Layer
            </h1>
            <p className="text-[17px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Core banking and Shariah compliance intelligence are not the same purchase decision — and confusing the two leads to the wrong RFP.
            </p>
          </div>
        </section>
        <div style={{ borderTop: "1px solid var(--border)" }} />
        <article className="max-w-3xl mx-auto px-6 py-16">
          <div className="prose-content space-y-8" style={{ color: "var(--text-secondary)" }}>
            <div className="answer-capsule">
              <p className="text-[12px] font-bold uppercase tracking-widest mb-2" style={{ color: "var(--gold)" }}>The short answer</p>
              <p className="text-[15px] leading-relaxed" style={{ color: "var(--text-primary)" }}>
                Islamic core banking software handles the system-of-record functions — accounts,
                ledgers, transaction processing — adapted for Islamic products. A Shariah
                compliance layer sits alongside it, handling governance documentation, contract
                review and audit trails. Most institutions eventually need both, but they are
                different purchases with different vendors.
              </p>
            </div>
            <p className="text-[15px] leading-[1.85]">
              &quot;Islamic core banking software&quot; usually refers to the foundational
              system-of-record: accounts, ledgers, transaction processing, and product
              configuration, adapted to reflect Islamic contractual structures rather than
              interest-based ones. It is a large, expensive, long-cycle purchase — often the
              central IT decision for a bank.
            </p>
            <p className="text-[15px] leading-[1.85]">
              A Shariah compliance layer is a narrower, faster-moving category. It doesn&apos;t
              replace core banking — it sits alongside it, handling governance documentation,
              contract-level review, scholar workflows and audit trails. Institutions that already
              have a core banking system in place, Islamic or otherwise, are often looking for this
              layer specifically, rather than a full core banking replacement.
            </p>
            <p className="text-[15px] leading-[1.85]">
              We cover how the two should work together, including integration through APIs and
              middleware rather than replacement, in{" "}
              <Link href="/insights/best-islamic-banking-software-commercial-banks" style={{ color: "var(--gold)", fontWeight: 600 }}>choosing the best Islamic banking software for commercial banks</Link>.
            </p>
            <p className="text-[15px] leading-[1.85]">
              <Link href="/amanah-ai" style={{ color: "var(--gold)", fontWeight: 600 }}>Aylinor</Link> is
              built as this second category — a Shariah compliance intelligence layer designed to
              work alongside an institution&apos;s existing core banking system, not replace it.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-12 pt-8" style={{ borderTop: "1px solid var(--border)" }}>
            {["Core Banking", "Shariah Compliance Layer", "Aylinor"].map((t) => (
              <span key={t} className="px-3 py-1 rounded-lg text-[11px]" style={{ backgroundColor: "var(--bg-elevated)", border: "1px solid var(--border)", color: "var(--text-muted)" }}>{t}</span>
            ))}
          </div>
        </article>
        <div style={{ borderTop: "1px solid var(--border)" }}>
          <div className="max-w-3xl mx-auto px-6 py-16">
            <div className="rounded-2xl p-10 text-center" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--gold-border)" }}>
              <h2 className="text-[24px] font-bold mb-3 tracking-tight" style={{ color: "var(--text-primary)" }}>Need a compliance layer, not a core banking overhaul?</h2>
              <div className="flex flex-wrap gap-4 justify-center mt-2">
                <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 text-[14px] font-bold rounded-xl hover:opacity-90 transition-all" style={{ backgroundColor: "var(--gold)", color: "#0B0E14" }}>Talk to Us <ArrowRight size={14} /></Link>
                <Link href="/amanah-ai" className="inline-flex items-center gap-2 px-7 py-3.5 text-[14px] font-semibold rounded-xl transition-all" style={{ border: "1px solid var(--gold-border)", color: "var(--gold)" }}>Explore Aylinor</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
