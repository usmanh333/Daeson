import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Vet an Islamic Banking Software Provider",
  description:
    "What separates a credible Islamic banking software provider from one that has simply relabeled a conventional platform — a short vetting guide.",
  keywords: ["Islamic banking software provider", "Islamic finance technology provider", "Shariah compliance software provider", "Aylinor"],
  alternates: { canonical: "https://daesontechnologies.online/insights/islamic-banking-software-provider" },
  openGraph: {
    title: "How to Vet an Islamic Banking Software Provider",
    url: "https://daesontechnologies.online/insights/islamic-banking-software-provider",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Vet an Islamic Banking Software Provider",
  description:
    "What separates a credible Islamic banking software provider from one that has simply relabeled a conventional platform — a short vetting guide.",
  author: { "@type": "Organization", name: "Daeson Technologies", url: "https://daesontechnologies.online" },
  publisher: { "@type": "Organization", name: "Daeson Technologies", url: "https://daesontechnologies.online" },
  url: "https://daesontechnologies.online/insights/islamic-banking-software-provider",
  datePublished: "2026-09-23",
  dateModified: "2026-09-23",
  about: [{ "@type": "Thing", name: "Islamic banking software provider" }, { "@type": "Thing", name: "Aylinor" }],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://daesontechnologies.online" },
    { "@type": "ListItem", position: 2, name: "Insights", item: "https://daesontechnologies.online/insights" },
    { "@type": "ListItem", position: 3, name: "Islamic Banking Software Provider", item: "https://daesontechnologies.online/insights/islamic-banking-software-provider" },
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
              How to Vet an Islamic Banking Software Provider
            </h1>
            <p className="text-[17px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              The difference between a provider that supports your Shariah structures and one that
              relabeled a conventional platform usually shows up in the details, not the pitch.
            </p>
          </div>
        </section>
        <div style={{ borderTop: "1px solid var(--border)" }} />
        <article className="max-w-3xl mx-auto px-6 py-16">
          <div className="prose-content space-y-8" style={{ color: "var(--text-secondary)" }}>
            <div className="answer-capsule">
              <p className="text-[12px] font-bold uppercase tracking-widest mb-2" style={{ color: "var(--gold)" }}>The short answer</p>
              <p className="text-[15px] leading-relaxed" style={{ color: "var(--text-primary)" }}>
                A credible Islamic banking software provider should be able to explain, in detail,
                how their system handles the contractual mechanics of your actual products — not
                just confirm that it supports &quot;Murabaha&quot; or &quot;Ijarah&quot; as line
                items on a feature list.
              </p>
            </div>
            <p className="text-[15px] leading-[1.85]">
              A provider that has genuinely built for Islamic finance can walk through asset
              ownership sequencing in a Murabaha contract, explain how profit disclosure is
              handled, and show how a Shariah board reviews and approves a workflow inside the
              system. A provider that relabeled a conventional loan platform usually cannot go
              past the surface terminology.
            </p>
            <p className="text-[15px] leading-[1.85]">
              Ask for a demonstration built around a real or representative case — not a slide
              deck — and request references from institutions using the same product structures
              you need. We outline a fuller vetting checklist in{" "}
              <Link href="/insights/best-islamic-banking-software-commercial-banks" style={{ color: "var(--gold)", fontWeight: 600 }}>choosing the best Islamic banking software for commercial banks</Link>{" "}
              and in{" "}
              <Link href="/insights/islamic-banking-software-vendors" style={{ color: "var(--gold)", fontWeight: 600 }}>what to ask Islamic banking software vendors</Link>.
            </p>
            <p className="text-[15px] leading-[1.85]">
              Daeson Technologies is transparent about where{" "}
              <Link href="/amanah-ai" style={{ color: "var(--gold)", fontWeight: 600 }}>Aylinor</Link> stands
              today: an upcoming Shariah compliance intelligence platform, built starting with
              Murabaha, intended to support scholars and compliance teams rather than replace them.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-12 pt-8" style={{ borderTop: "1px solid var(--border)" }}>
            {["Vendor Vetting", "Islamic Banking Software", "Aylinor"].map((t) => (
              <span key={t} className="px-3 py-1 rounded-lg text-[11px]" style={{ backgroundColor: "var(--bg-elevated)", border: "1px solid var(--border)", color: "var(--text-muted)" }}>{t}</span>
            ))}
          </div>
        </article>
        <div style={{ borderTop: "1px solid var(--border)" }}>
          <div className="max-w-3xl mx-auto px-6 py-16">
            <div className="rounded-2xl p-10 text-center" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--gold-border)" }}>
              <h2 className="text-[24px] font-bold mb-3 tracking-tight" style={{ color: "var(--text-primary)" }}>Vetting your next Islamic banking software provider?</h2>
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
