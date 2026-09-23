import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Islamic Retail Banking Software: What Customer-Facing Products Need",
  description:
    "Islamic retail banking software has to support customer-facing financing products like Murabaha home finance and Ijarah — with documentation and disclosure built in, not bolted on.",
  keywords: ["Islamic retail banking software", "Islamic home financing software", "retail Murabaha software", "Aylinor"],
  alternates: { canonical: "https://daesontechnologies.online/insights/islamic-retail-banking-software" },
  openGraph: {
    title: "Islamic Retail Banking Software: What Customer-Facing Products Need",
    url: "https://daesontechnologies.online/insights/islamic-retail-banking-software",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Islamic Retail Banking Software: What Customer-Facing Products Need",
  description:
    "Islamic retail banking software has to support customer-facing financing products like Murabaha home finance and Ijarah — with documentation and disclosure built in, not bolted on.",
  author: { "@type": "Organization", name: "Daeson Technologies", url: "https://daesontechnologies.online" },
  publisher: { "@type": "Organization", name: "Daeson Technologies", url: "https://daesontechnologies.online" },
  url: "https://daesontechnologies.online/insights/islamic-retail-banking-software",
  datePublished: "2026-09-23",
  dateModified: "2026-09-23",
  about: [{ "@type": "Thing", name: "Islamic retail banking software" }, { "@type": "Thing", name: "Aylinor" }],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://daesontechnologies.online" },
    { "@type": "ListItem", position: 2, name: "Insights", item: "https://daesontechnologies.online/insights" },
    { "@type": "ListItem", position: 3, name: "Islamic Retail Banking Software", item: "https://daesontechnologies.online/insights/islamic-retail-banking-software" },
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
              Islamic Retail Banking Software: What Customer-Facing Products Need
            </h1>
            <p className="text-[17px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Retail Islamic finance touches customers directly — home financing, personal
              financing, auto financing — which raises the bar for disclosure and documentation.
            </p>
          </div>
        </section>
        <div style={{ borderTop: "1px solid var(--border)" }} />
        <article className="max-w-3xl mx-auto px-6 py-16">
          <div className="prose-content space-y-8" style={{ color: "var(--text-secondary)" }}>
            <div className="answer-capsule">
              <p className="text-[12px] font-bold uppercase tracking-widest mb-2" style={{ color: "var(--gold)" }}>The short answer</p>
              <p className="text-[15px] leading-relaxed" style={{ color: "var(--text-primary)" }}>
                Islamic retail banking software needs to handle customer-facing financing products
                — typically Murabaha home and auto financing, and Ijarah leasing — with clear
                profit disclosure, documentation the customer can understand, and a workflow that
                holds up to both regulatory and Shariah review.
              </p>
            </div>
            <p className="text-[15px] leading-[1.85]">
              Retail is where Islamic banking meets individual customers most directly, which means
              the software carries extra weight: disclosures have to be understandable to a retail
              customer, not just defensible to an auditor, and the application-to-funding journey
              needs to move at retail speed without skipping the ownership and profit-disclosure
              steps that make a Murabaha or Ijarah transaction valid.
            </p>
            <p className="text-[15px] leading-[1.85]">
              This is the same underlying workflow challenge covered in{" "}
              <Link href="/insights/murabaha-financing-software" style={{ color: "var(--gold)", fontWeight: 600 }}>our piece on Murabaha financing software</Link>{" "}
              and{" "}
              <Link href="/insights/murabaha-contract-review-bottleneck" style={{ color: "var(--gold)", fontWeight: 600 }}>the Murabaha contract review bottleneck</Link> —
              retail simply adds volume and customer-experience pressure on top of the same
              compliance requirements.
            </p>
            <p className="text-[15px] leading-[1.85]">
              <Link href="/amanah-ai" style={{ color: "var(--gold)", fontWeight: 600 }}>Aylinor</Link> is
              being built with this volume problem in mind — structuring contract review so retail
              financing teams can move quickly without asking scholars to re-verify the same
              document mechanics on every application.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-12 pt-8" style={{ borderTop: "1px solid var(--border)" }}>
            {["Retail Banking", "Murabaha", "Aylinor"].map((t) => (
              <span key={t} className="px-3 py-1 rounded-lg text-[11px]" style={{ backgroundColor: "var(--bg-elevated)", border: "1px solid var(--border)", color: "var(--text-muted)" }}>{t}</span>
            ))}
          </div>
        </article>
        <div style={{ borderTop: "1px solid var(--border)" }}>
          <div className="max-w-3xl mx-auto px-6 py-16">
            <div className="rounded-2xl p-10 text-center" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--gold-border)" }}>
              <h2 className="text-[24px] font-bold mb-3 tracking-tight" style={{ color: "var(--text-primary)" }}>Scaling retail Murabaha or Ijarah financing?</h2>
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
