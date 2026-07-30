import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, ArrowLeft, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Why Islamic Finance Needs Compliant Software",
  description:
    "Why the future of Islamic finance depends on Shariah-compliant software — and how Aylinor is building the infrastructure to support it, starting with Murabaha financing.",
  alternates: { canonical: "https://daesontechnologies.online/insights/shariah-compliant-software-future" },
  openGraph: {
    title: "Why the Future of Islamic Finance Depends on Shariah-Compliant Software",
    url: "https://daesontechnologies.online/insights/shariah-compliant-software-future",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Why the Future of Islamic Finance Depends on Shariah-Compliant Software",
  description:
    "Why the future of Islamic finance depends on Shariah-compliant software — and how Aylinor is building the infrastructure to support it, starting with Murabaha financing.",
  author: { "@type": "Organization", name: "Daeson Technologies", url: "https://daesontechnologies.online" },
  publisher: { "@type": "Organization", name: "Daeson Technologies", url: "https://daesontechnologies.online" },
  url: "https://daesontechnologies.online/insights/shariah-compliant-software-future",
  datePublished: "2026-07-09",
  dateModified: "2026-07-09",
  about: [
    { "@type": "Thing", name: "Shariah compliance software" },
    { "@type": "Thing", name: "Islamic banking technology" },
    { "@type": "Thing", name: "Aylinor" },
  ],
  keywords:
    "Shariah compliance software, Islamic banking software, AI for Islamic finance, Murabaha software, Islamic fintech, Shariah governance platform, Islamic finance technology, enterprise fintech solutions, AI compliance software, Daeson Technologies, Aylinor",
};

const roadmap = [
  "Shariah governance",
  "Product review workflows",
  "Compliance management",
  "Risk monitoring",
  "Document intelligence",
  "Audit support",
  "AI-assisted decision support",
  "Enterprise reporting",
];

export default function ArticlePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Navbar />
      <main className="section-light" style={{ backgroundColor: "var(--bg-page)", minHeight: "100vh" }}>

        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-0 px-6">
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
              <span className="text-[11px]" style={{ color: "var(--text-faint)" }}>6 min read</span>
            </div>

            <h1 className="speakable text-[32px] md:text-[44px] font-extrabold leading-[1.1] tracking-tight mb-6" style={{ color: "var(--text-primary)" }}>
              Why the Future of Islamic Finance Depends on Shariah-Compliant Software
            </h1>
          </div>
        </section>

        {/* Cover banner */}
        <section className="px-6 pt-8 pb-16">
          <div
            className="max-w-3xl mx-auto rounded-2xl overflow-hidden relative"
            style={{ border: "1px solid var(--gold-border)", height: "220px" }}
          >
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(135deg, #0F1210 0%, #1C1708 55%, #2A210C 100%)" }}
            />
            <div
              className="absolute inset-0 opacity-40"
              style={{ background: "radial-gradient(ellipse 60% 80% at 85% 20%, var(--gold-amanah-muted) 0%, transparent 70%)" }}
            />
            <div className="relative z-10 h-full flex items-center px-10">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 mr-6"
                style={{ backgroundColor: "rgba(212,175,55,0.14)", border: "1px solid var(--gold-border)" }}
              >
                <ShieldCheck size={26} style={{ color: "var(--gold-amanah-light)" }} />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest mb-1.5" style={{ color: "var(--gold-amanah-light)" }}>
                  Aylinor
                </p>
                <p className="text-[15px] font-semibold" style={{ color: "#F2ECD9" }}>
                  Shariah Governance & Compliance Infrastructure
                </p>
              </div>
            </div>
          </div>
        </section>

        <div style={{ borderTop: "1px solid var(--border)" }} />

        <article className="max-w-3xl mx-auto px-6 py-16">
          <div className="prose-content space-y-8" style={{ color: "var(--text-secondary)" }}>

            <div className="answer-capsule">
              <p className="text-[12px] font-bold uppercase tracking-widest mb-2" style={{ color: "var(--gold)" }}>
                The short answer
              </p>
              <p className="text-[15px] leading-relaxed" style={{ color: "var(--text-primary)" }}>
                The Islamic finance industry has digitized banking, payments, and customer service —
                but Shariah governance itself is still largely manual: spreadsheets, emails, and
                paper-based review. As the industry scales, compliance has to become structured,
                auditable software, not a parallel process bolted onto digital banking. That&apos;s
                what Aylinor, Daeson Technologies&apos; Shariah governance platform, is built to do.
              </p>
            </div>

            <p className="text-[15px] leading-[1.85]">
              The Islamic finance industry has grown into a multi-trillion-dollar ecosystem, serving
              millions of individuals and businesses across the GCC, Southeast Asia, Africa, and beyond.
            </p>
            <p className="text-[15px] leading-[1.85]">
              Yet despite this remarkable growth, one challenge continues to slow innovation:{" "}
              <strong style={{ color: "var(--text-primary)" }}>most Shariah compliance processes are
              still heavily manual.</strong>
            </p>
            <p className="text-[15px] leading-[1.85]">
              Financial institutions invest enormous resources into ensuring every product, financing
              structure, and operational process complies with Shariah principles. While this is
              essential, many of these workflows still depend on spreadsheets, emails, paper-based
              reviews, and fragmented systems.
            </p>
            <p className="text-[15px] leading-[1.85]">
              As Islamic finance becomes increasingly digital, compliance must evolve alongside it.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              Technology Is No Longer Optional
            </h2>
            <p className="text-[15px] leading-[1.85]">Banks today are investing heavily in:</p>
            <ul className="space-y-2 pl-1">
              {["Digital banking", "AI-powered customer service", "Digital wallets", "Instant payments", "Open banking", "Enterprise automation"].map((i) => (
                <li key={i} className="flex items-start gap-2.5 text-[15px]" style={{ color: "var(--text-secondary)" }}>
                  <span className="mt-2 w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: "var(--gold)" }} />
                  {i}
                </li>
              ))}
            </ul>
            <p className="text-[15px] leading-[1.85]">
              However, Shariah governance often remains disconnected from this transformation.
              Institutions need technology that can support governance without compromising scholarly
              oversight.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              Introducing Aylinor
            </h2>
            <p className="text-[15px] leading-[1.85]">
              At <strong style={{ color: "var(--text-primary)" }}>Daeson Technologies</strong>, we&apos;re
              building <strong style={{ color: "var(--text-primary)" }}>Aylinor</strong>, our flagship
              AI-powered Shariah governance and compliance platform.
            </p>
            <p className="text-[15px] leading-[1.85]">
              Aylinor is designed to help Islamic financial institutions transform complex compliance
              processes into structured, intelligent workflows.
            </p>
            <p className="text-[15px] leading-[1.85]">
              Our initial focus is <strong style={{ color: "var(--text-primary)" }}>Murabaha
              financing</strong>, providing institutions with a digital foundation for managing
              documentation, compliance reviews, governance workflows, and audit readiness.
            </p>
            <p className="text-[15px] leading-[1.85]">
              Rather than replacing Shariah scholars, Aylinor is built to strengthen their work by
              improving transparency, consistency, and operational efficiency.
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              Why This Matters
            </h2>
            <p className="text-[15px] leading-[1.85]">
              Every financing transaction generates documentation. Every product requires review.
              Every institution must demonstrate governance. As financial institutions grow, manual
              processes become increasingly difficult to manage.
            </p>
            <p className="text-[15px] leading-[1.85]">Technology can help organisations:</p>
            <div
              className="rounded-xl p-6 my-6"
              style={{ backgroundColor: "var(--bg-elevated)", border: "1px solid var(--gold-border)" }}
            >
              <ul className="space-y-2">
                {[
                  "Improve operational consistency",
                  "Reduce administrative workload",
                  "Strengthen governance processes",
                  "Prepare for audits more efficiently",
                  "Centralise documentation",
                  "Enhance collaboration between business teams and Shariah advisors",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[13px]" style={{ color: "var(--text-secondary)" }}>
                    <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: "var(--gold)" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              Aylinor Is Just the Beginning
            </h2>
            <p className="text-[15px] leading-[1.85]">
              Murabaha is our starting point — not our destination. Our long-term vision is to build a
              complete ecosystem of Shariah-compliant software solutions that support Islamic financial
              institutions across multiple operational areas.
            </p>
            <p className="text-[15px] leading-[1.85]">Our roadmap includes technologies that can support:</p>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {roadmap.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg text-[13px] font-medium"
                  style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)", color: "var(--text-secondary)" }}
                >
                  <span className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: "var(--gold)" }} />
                  {item}
                </div>
              ))}
            </div>
            <p className="text-[15px] leading-[1.85] pt-2">
              Our goal is simple: <strong style={{ color: "var(--text-primary)" }}>build technology
              that empowers Islamic finance without compromising Shariah principles.</strong>
            </p>

            <h2 className="text-[24px] font-bold tracking-tight pt-4" style={{ color: "var(--text-primary)" }}>
              Built by Daeson Technologies
            </h2>
            <p className="text-[15px] leading-[1.85]">
              Daeson Technologies is an AI and enterprise technology company building intelligent
              platforms for fintech, Islamic finance, and real estate.
            </p>
            <p className="text-[15px] leading-[1.85]">
              We believe the future belongs to organisations that own their technology, rather than
              adapting to generic software.
            </p>
            <p className="text-[15px] leading-[1.85]">
              Through Aylinor, we are committed to working alongside banks, fintech companies, and
              Shariah advisory firms to build practical, enterprise-grade solutions for the next
              generation of Islamic finance.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mt-12 pt-8" style={{ borderTop: "1px solid var(--border)" }}>
            {["Aylinor", "Shariah Compliance", "Islamic Banking Software", "Murabaha", "AI Compliance"].map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-lg text-[11px]"
                style={{ backgroundColor: "var(--bg-elevated)", border: "1px solid var(--border)", color: "var(--text-muted)" }}
              >
                {t}
              </span>
            ))}
          </div>
        </article>

        <div style={{ borderTop: "1px solid var(--border)" }}>
          <div className="max-w-3xl mx-auto px-6 py-16">
            <div
              className="rounded-2xl p-10 text-center"
              style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--gold-border)" }}
            >
              <h2 className="text-[24px] font-bold mb-3 tracking-tight" style={{ color: "var(--text-primary)" }}>
                Modernising your compliance infrastructure?
              </h2>
              <p className="text-[14px] leading-relaxed mb-7 max-w-lg mx-auto" style={{ color: "var(--text-secondary)" }}>
                If you&apos;re an Islamic bank, fintech company, Shariah advisory firm, or financial
                institution looking to modernise Shariah governance, we&apos;d love to connect.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-[14px] font-bold rounded-xl hover:opacity-90 transition-all"
                  style={{ backgroundColor: "var(--gold)", color: "#0B0E14" }}
                >
                  Let&apos;s Build Together <ArrowRight size={14} />
                </Link>
                <Link
                  href="/amanah-ai"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-[14px] font-semibold rounded-xl transition-all"
                  style={{ border: "1px solid var(--gold-border)", color: "var(--gold)" }}
                >
                  Explore Aylinor
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-6 pb-20">
          <p className="text-[10px] font-bold uppercase tracking-widest mb-6" style={{ color: "var(--text-faint)" }}>
            Related Reading
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            <Link
              href="/insights/ai-shariah-compliance"
              className="p-5 rounded-xl block transition-all"
              style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)" }}
            >
              <span
                className="text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-widest"
                style={{ backgroundColor: "var(--gold-muted)", color: "var(--gold)" }}
              >
                Islamic Finance
              </span>
              <p className="text-[14px] font-semibold mt-3 leading-snug" style={{ color: "var(--text-primary)" }}>
                AI and Shariah Compliance Infrastructure
              </p>
              <p className="text-[12px] mt-2 flex items-center gap-1" style={{ color: "var(--gold)" }}>
                Read article <ArrowRight size={11} />
              </p>
            </Link>
            <Link
              href="/amanah-ai"
              className="p-5 rounded-xl block transition-all"
              style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)" }}
            >
              <span
                className="text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-widest"
                style={{ backgroundColor: "var(--gold-muted)", color: "var(--gold)" }}
              >
                Product
              </span>
              <p className="text-[14px] font-semibold mt-3 leading-snug" style={{ color: "var(--text-primary)" }}>
                Aylinor — Shariah Compliance Infrastructure
              </p>
              <p className="text-[12px] mt-2 flex items-center gap-1" style={{ color: "var(--gold)" }}>
                Read more <ArrowRight size={11} />
              </p>
            </Link>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
