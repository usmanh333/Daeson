import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Murabaha Financing Software: What It Needs to Actually Support",
  description:
    "Murabaha financing software has to manage a real sale structure, not a relabeled loan. What asset ownership sequencing, profit disclosure and documentation actually require from the system.",
  keywords: ["Murabaha financing software", "Murabaha workflow software", "Islamic financing software", "Aylinor"],
  alternates: { canonical: "https://daesontechnologies.online/insights/murabaha-financing-software" },
  openGraph: {
    title: "Murabaha Financing Software: What It Needs to Actually Support",
    url: "https://daesontechnologies.online/insights/murabaha-financing-software",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Murabaha Financing Software: What It Needs to Actually Support",
  description:
    "Murabaha financing software has to manage a real sale structure, not a relabeled loan — what asset ownership sequencing, profit disclosure and documentation actually require.",
  author: { "@type": "Organization", name: "Daeson Technologies", url: "https://daesontechnologies.online" },
  publisher: { "@type": "Organization", name: "Daeson Technologies", url: "https://daesontechnologies.online" },
  url: "https://daesontechnologies.online/insights/murabaha-financing-software",
  datePublished: "2026-09-23",
  dateModified: "2026-09-23",
  about: [{ "@type": "Thing", name: "Murabaha financing software" }, { "@type": "Thing", name: "Aylinor" }],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://daesontechnologies.online" },
    { "@type": "ListItem", position: 2, name: "Insights", item: "https://daesontechnologies.online/insights" },
    { "@type": "ListItem", position: 3, name: "Murabaha Financing Software", item: "https://daesontechnologies.online/insights/murabaha-financing-software" },
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
              Murabaha Financing Software: What It Needs to Actually Support
            </h1>
            <p className="text-[17px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              A repayment calculator is not Murabaha financing software. Here is what the workflow actually requires.
            </p>
          </div>
        </section>
        <div style={{ borderTop: "1px solid var(--border)" }} />
        <article className="max-w-3xl mx-auto px-6 py-16">
          <div className="prose-content space-y-8" style={{ color: "var(--text-secondary)" }}>
            <div className="answer-capsule">
              <p className="text-[12px] font-bold uppercase tracking-widest mb-2" style={{ color: "var(--gold)" }}>The short answer</p>
              <p className="text-[15px] leading-relaxed" style={{ color: "var(--text-primary)" }}>
                Murabaha financing software needs to manage a real cost-plus-profit sale structure —
                asset identification, purchase and ownership documentation, sale agreement, profit
                disclosure and payment scheduling — not just calculate a repayment schedule the way a
                conventional loan system would.
              </p>
            </div>
            <p className="text-[15px] leading-[1.85]">
              Murabaha is the most common Islamic financing structure by transaction volume, covering
              home financing, trade finance and commodity financing across Islamic banking. It is also
              structurally one of the hardest products to support in software, because a compliant
              Murabaha transaction requires the institution to actually take ownership of the asset
              before selling it to the customer at a disclosed, marked-up price — a sequence that has
              to be verified for every contract, not assumed.
            </p>
            <p className="text-[15px] leading-[1.85]">
              Software built for Murabaha specifically needs to track the full sequence: financing
              application, customer assessment, asset identification, purchase process, ownership
              documentation, sale agreement, profit disclosure, payment schedule, and supporting
              documents — with each step available for scholar or compliance review. We cover this
              workflow in detail in{" "}
              <Link href="/insights/murabaha-contract-review-bottleneck" style={{ color: "var(--gold)", fontWeight: 600 }}>The Murabaha Contract Review Bottleneck</Link>,
              and set it in the wider context of Islamic banking software requirements in{" "}
              <Link href="/insights/islamic-banking-software-guide" style={{ color: "var(--gold)", fontWeight: 600 }}>our Islamic banking software guide</Link>.
            </p>
            <p className="text-[15px] leading-[1.85]">
              <Link href="/amanah-ai" style={{ color: "var(--gold)", fontWeight: 600 }}>Aylinor</Link>, the
              Shariah compliance intelligence platform being developed by Daeson Technologies, starts
              with Murabaha workflow intelligence for exactly this reason: it is the highest-volume,
              highest-review-burden product for most institutions.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-12 pt-8" style={{ borderTop: "1px solid var(--border)" }}>
            {["Murabaha", "Islamic Financing Software", "Aylinor"].map((t) => (
              <span key={t} className="px-3 py-1 rounded-lg text-[11px]" style={{ backgroundColor: "var(--bg-elevated)", border: "1px solid var(--border)", color: "var(--text-muted)" }}>{t}</span>
            ))}
          </div>
        </article>
        <div style={{ borderTop: "1px solid var(--border)" }}>
          <div className="max-w-3xl mx-auto px-6 py-16">
            <div className="rounded-2xl p-10 text-center" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--gold-border)" }}>
              <h2 className="text-[24px] font-bold mb-3 tracking-tight" style={{ color: "var(--text-primary)" }}>Need software built around the actual Murabaha workflow?</h2>
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
