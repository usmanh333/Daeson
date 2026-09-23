import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Islamic Banking Software Solutions: Core Modules Explained",
  description:
    "A short breakdown of the core modules that make up Islamic banking software solutions — financing workflows, governance, audit trails and reporting.",
  keywords: ["Islamic banking software solutions", "Islamic finance technology modules", "Shariah governance software", "Aylinor"],
  alternates: { canonical: "https://daesontechnologies.online/insights/islamic-banking-software-solutions" },
  openGraph: {
    title: "Islamic Banking Software Solutions: Core Modules Explained",
    url: "https://daesontechnologies.online/insights/islamic-banking-software-solutions",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Islamic Banking Software Solutions: Core Modules Explained",
  description:
    "A short breakdown of the core modules that make up Islamic banking software solutions — financing workflows, governance, audit trails and reporting.",
  author: { "@type": "Organization", name: "Daeson Technologies", url: "https://daesontechnologies.online" },
  publisher: { "@type": "Organization", name: "Daeson Technologies", url: "https://daesontechnologies.online" },
  url: "https://daesontechnologies.online/insights/islamic-banking-software-solutions",
  datePublished: "2026-09-23",
  dateModified: "2026-09-23",
  about: [{ "@type": "Thing", name: "Islamic banking software solutions" }, { "@type": "Thing", name: "Aylinor" }],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://daesontechnologies.online" },
    { "@type": "ListItem", position: 2, name: "Insights", item: "https://daesontechnologies.online/insights" },
    { "@type": "ListItem", position: 3, name: "Islamic Banking Software Solutions", item: "https://daesontechnologies.online/insights/islamic-banking-software-solutions" },
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
              Islamic Banking Software Solutions: Core Modules Explained
            </h1>
            <p className="text-[17px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              What "Islamic banking software solutions" actually means once you break it into its component modules.
            </p>
          </div>
        </section>
        <div style={{ borderTop: "1px solid var(--border)" }} />
        <article className="max-w-3xl mx-auto px-6 py-16">
          <div className="prose-content space-y-8" style={{ color: "var(--text-secondary)" }}>
            <div className="answer-capsule">
              <p className="text-[12px] font-bold uppercase tracking-widest mb-2" style={{ color: "var(--gold)" }}>The short answer</p>
              <p className="text-[15px] leading-relaxed" style={{ color: "var(--text-primary)" }}>
                &quot;Islamic banking software solutions&quot; usually refers to a set of modules
                working together — financing workflows, customer and account management, Shariah
                governance support, compliance and audit trails, and reporting — rather than a
                single monolithic product.
              </p>
            </div>
            <p className="text-[15px] leading-[1.85]">
              Buyers searching for &quot;Islamic banking software solutions&quot; are often
              comparing very different things: a full core banking replacement, a governance and
              documentation layer, or a narrow financing-workflow tool. It helps to break the term
              into its actual components before comparing vendors.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[15px] leading-[1.85]">
              <li><strong style={{ color: "var(--text-primary)" }}>Financing workflows</strong> — the application-to-completion process for products like Murabaha and Ijarah.</li>
              <li><strong style={{ color: "var(--text-primary)" }}>Customer and account management</strong> — a consistent view of customer relationships and financial activity.</li>
              <li><strong style={{ color: "var(--text-primary)" }}>Shariah governance support</strong> — organizing approved product structures, rulings and review records.</li>
              <li><strong style={{ color: "var(--text-primary)" }}>Compliance and audit trails</strong> — who did what, when, and against which policy version.</li>
              <li><strong style={{ color: "var(--text-primary)" }}>Reporting</strong> — visibility into pending reviews, documentation gaps and operational risk.</li>
            </ul>
            <p className="text-[15px] leading-[1.85]">
              We cover each of these in detail in{" "}
              <Link href="/insights/islamic-banking-software-guide" style={{ color: "var(--gold)", fontWeight: 600 }}>our Islamic banking software guide</Link>, and
              the AAOIFI-aligned governance layer specifically in{" "}
              <Link href="/insights/shariah-compliant-banking-software" style={{ color: "var(--gold)", fontWeight: 600 }}>how Shariah-compliant banking software supports governance</Link>.
            </p>
            <p className="text-[15px] leading-[1.85]">
              <Link href="/amanah-ai" style={{ color: "var(--gold)", fontWeight: 600 }}>Aylinor</Link> focuses
              specifically on the governance and compliance-intelligence layer of this stack —
              Murabaha contract analysis, governance documentation, scholar review workflows and
              audit trails — as a support system institutions can run alongside their existing
              core banking software.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-12 pt-8" style={{ borderTop: "1px solid var(--border)" }}>
            {["Islamic Banking Software", "Solution Architecture", "Aylinor"].map((t) => (
              <span key={t} className="px-3 py-1 rounded-lg text-[11px]" style={{ backgroundColor: "var(--bg-elevated)", border: "1px solid var(--border)", color: "var(--text-muted)" }}>{t}</span>
            ))}
          </div>
        </article>
        <div style={{ borderTop: "1px solid var(--border)" }}>
          <div className="max-w-3xl mx-auto px-6 py-16">
            <div className="rounded-2xl p-10 text-center" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--gold-border)" }}>
              <h2 className="text-[24px] font-bold mb-3 tracking-tight" style={{ color: "var(--text-primary)" }}>Not sure which module you actually need?</h2>
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
