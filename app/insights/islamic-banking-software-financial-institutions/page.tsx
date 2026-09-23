import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Islamic Banking Software for Financial Institutions: Beyond the Bank",
  description:
    "Islamic banking software isn't only for banks. What Islamic windows, fintechs, and other financial institutions should look for beyond core banking.",
  keywords: ["Islamic banking software for financial institutions", "Islamic finance technology", "Shariah governance software", "Aylinor"],
  alternates: { canonical: "https://daesontechnologies.online/insights/islamic-banking-software-financial-institutions" },
  openGraph: {
    title: "Islamic Banking Software for Financial Institutions: Beyond the Bank",
    url: "https://daesontechnologies.online/insights/islamic-banking-software-financial-institutions",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Islamic Banking Software for Financial Institutions: Beyond the Bank",
  description:
    "Islamic banking software isn't only for banks. What Islamic windows, fintechs, and other financial institutions should look for beyond core banking.",
  author: { "@type": "Organization", name: "Daeson Technologies", url: "https://daesontechnologies.online" },
  publisher: { "@type": "Organization", name: "Daeson Technologies", url: "https://daesontechnologies.online" },
  url: "https://daesontechnologies.online/insights/islamic-banking-software-financial-institutions",
  datePublished: "2026-09-23",
  dateModified: "2026-09-23",
  about: [{ "@type": "Thing", name: "Islamic financial institutions" }, { "@type": "Thing", name: "Aylinor" }],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://daesontechnologies.online" },
    { "@type": "ListItem", position: 2, name: "Insights", item: "https://daesontechnologies.online/insights" },
    { "@type": "ListItem", position: 3, name: "Islamic Banking Software for Financial Institutions", item: "https://daesontechnologies.online/insights/islamic-banking-software-financial-institutions" },
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
              Islamic Banking Software for Financial Institutions: Beyond the Bank
            </h1>
            <p className="text-[17px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Islamic windows, fintechs and non-bank financial institutions need Shariah-aware
              technology too — and their requirements aren&apos;t identical to a full-scale bank&apos;s.
            </p>
          </div>
        </section>
        <div style={{ borderTop: "1px solid var(--border)" }} />
        <article className="max-w-3xl mx-auto px-6 py-16">
          <div className="prose-content space-y-8" style={{ color: "var(--text-secondary)" }}>
            <div className="answer-capsule">
              <p className="text-[12px] font-bold uppercase tracking-widest mb-2" style={{ color: "var(--gold)" }}>The short answer</p>
              <p className="text-[15px] leading-relaxed" style={{ color: "var(--text-primary)" }}>
                Islamic banking software is relevant to any financial institution structuring
                products around Shariah principles — not only licensed Islamic banks. Islamic
                windows within conventional banks, Islamic fintechs, and takaful and financing
                companies all need financing workflows, governance documentation and audit trails,
                even if their scale and regulatory obligations differ from a full-scale bank.
              </p>
            </div>
            <p className="text-[15px] leading-[1.85]">
              The term &quot;Islamic banking software&quot; can be misleading for smaller or newer
              organizations, because most of the available platforms were built for large
              full-service banks. Islamic windows, fintech lenders, and specialized Islamic finance
              companies have different needs: a smaller product set, faster onboarding, and often a
              much smaller internal Shariah and compliance team that needs software to do more of
              the structural work.
            </p>
            <p className="text-[15px] leading-[1.85]">
              For these institutions, the priority is usually less about enterprise-scale core
              banking replacement, and more about getting financing workflows, documentation and
              governance right from day one — the fundamentals covered in{" "}
              <Link href="/insights/islamic-banking-software-guide" style={{ color: "var(--gold)", fontWeight: 600 }}>our Islamic banking software guide</Link>{" "}
              and{" "}
              <Link href="/insights/shariah-compliant-banking-software" style={{ color: "var(--gold)", fontWeight: 600 }}>how Shariah-compliant banking software supports governance</Link>.
            </p>
            <p className="text-[15px] leading-[1.85]">
              <Link href="/amanah-ai" style={{ color: "var(--gold)", fontWeight: 600 }}>Aylinor</Link> is
              being developed by Daeson Technologies as a support layer intended for institutional
              teams of this kind — organizing Murabaha contract analysis, governance documentation
              and audit trails without requiring a full core banking replacement.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-12 pt-8" style={{ borderTop: "1px solid var(--border)" }}>
            {["Islamic Financial Institutions", "Islamic Windows", "Aylinor"].map((t) => (
              <span key={t} className="px-3 py-1 rounded-lg text-[11px]" style={{ backgroundColor: "var(--bg-elevated)", border: "1px solid var(--border)", color: "var(--text-muted)" }}>{t}</span>
            ))}
          </div>
        </article>
        <div style={{ borderTop: "1px solid var(--border)" }}>
          <div className="max-w-3xl mx-auto px-6 py-16">
            <div className="rounded-2xl p-10 text-center" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--gold-border)" }}>
              <h2 className="text-[24px] font-bold mb-3 tracking-tight" style={{ color: "var(--text-primary)" }}>Building Shariah-aware technology for your institution?</h2>
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
