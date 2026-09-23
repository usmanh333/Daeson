import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Islamic Banking Software Vendors: What to Ask Before Signing",
  description:
    "A short vendor-evaluation guide for Islamic banking software — what to ask about product coverage, Shariah governance, customization and data control before signing.",
  keywords: ["Islamic banking software vendors", "Islamic banking software provider", "Shariah compliance vendor evaluation", "Aylinor"],
  alternates: { canonical: "https://daesontechnologies.online/insights/islamic-banking-software-vendors" },
  openGraph: {
    title: "Islamic Banking Software Vendors: What to Ask Before Signing",
    url: "https://daesontechnologies.online/insights/islamic-banking-software-vendors",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Islamic Banking Software Vendors: What to Ask Before Signing",
  description:
    "A short vendor-evaluation guide for Islamic banking software — what to ask about product coverage, Shariah governance, customization and data control.",
  author: { "@type": "Organization", name: "Daeson Technologies", url: "https://daesontechnologies.online" },
  publisher: { "@type": "Organization", name: "Daeson Technologies", url: "https://daesontechnologies.online" },
  url: "https://daesontechnologies.online/insights/islamic-banking-software-vendors",
  datePublished: "2026-09-23",
  dateModified: "2026-09-23",
  about: [{ "@type": "Thing", name: "Islamic banking software vendors" }, { "@type": "Thing", name: "Aylinor" }],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://daesontechnologies.online" },
    { "@type": "ListItem", position: 2, name: "Insights", item: "https://daesontechnologies.online/insights" },
    { "@type": "ListItem", position: 3, name: "Islamic Banking Software Vendors", item: "https://daesontechnologies.online/insights/islamic-banking-software-vendors" },
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
              Islamic Banking Software Vendors: What to Ask Before Signing
            </h1>
            <p className="text-[17px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Not every vendor using Islamic finance terminology has actually built for it. A short checklist before you sign.
            </p>
          </div>
        </section>
        <div style={{ borderTop: "1px solid var(--border)" }} />
        <article className="max-w-3xl mx-auto px-6 py-16">
          <div className="prose-content space-y-8" style={{ color: "var(--text-secondary)" }}>
            <div className="answer-capsule">
              <p className="text-[12px] font-bold uppercase tracking-widest mb-2" style={{ color: "var(--gold)" }}>The short answer</p>
              <p className="text-[15px] leading-relaxed" style={{ color: "var(--text-primary)" }}>
                When comparing Islamic banking software vendors, ask which products are supported
                today versus custom-built, whether Shariah teams can review and approve workflows,
                whether contracts and decisions are traceable, and whether the vendor is transparent
                about what still requires customization.
              </p>
            </div>
            <p className="text-[15px] leading-[1.85]">
              Islamic banking software vendors range widely — from large core banking providers with
              an Islamic finance module bolted on, to specialized platforms built around Shariah
              structures from the ground up. The difference matters more than it looks in a demo.
            </p>
            <p className="text-[15px] leading-[1.85]">Before signing, ask each vendor:</p>
            <ul className="list-disc pl-6 space-y-2 text-[15px] leading-[1.85]">
              <li>Which Islamic financing products (Murabaha, Ijarah, Musharakah, and so on) are supported today, not on a roadmap?</li>
              <li>Can our Shariah board review and amend the system&apos;s workflows and findings?</li>
              <li>Are contracts, documents and decisions traceable with a complete audit history?</li>
              <li>Is pricing transparent about implementation, customization and integration costs?</li>
              <li>Where is institutional data hosted, and who controls it?</li>
            </ul>
            <p className="text-[15px] leading-[1.85]">
              We go deeper on this evaluation process in{" "}
              <Link href="/insights/best-islamic-banking-software-commercial-banks" style={{ color: "var(--gold)", fontWeight: 600 }}>our commercial-bank evaluation guide</Link>{" "}
              and in{" "}
              <Link href="/insights/shariah-compliant-banking-software" style={{ color: "var(--gold)", fontWeight: 600 }}>how Shariah-compliant banking software supports governance</Link>.
            </p>
            <p className="text-[15px] leading-[1.85]">
              Daeson Technologies is developing <Link href="/amanah-ai" style={{ color: "var(--gold)", fontWeight: 600 }}>Aylinor</Link>,
              a Shariah compliance intelligence platform, on exactly this principle — transparent
              about what&apos;s built today, starting with Murabaha, rather than claiming broad
              coverage upfront.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-12 pt-8" style={{ borderTop: "1px solid var(--border)" }}>
            {["Vendor Evaluation", "Islamic Banking Software", "Aylinor"].map((t) => (
              <span key={t} className="px-3 py-1 rounded-lg text-[11px]" style={{ backgroundColor: "var(--bg-elevated)", border: "1px solid var(--border)", color: "var(--text-muted)" }}>{t}</span>
            ))}
          </div>
        </article>
        <div style={{ borderTop: "1px solid var(--border)" }}>
          <div className="max-w-3xl mx-auto px-6 py-16">
            <div className="rounded-2xl p-10 text-center" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--gold-border)" }}>
              <h2 className="text-[24px] font-bold mb-3 tracking-tight" style={{ color: "var(--text-primary)" }}>Comparing Islamic banking software vendors?</h2>
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
