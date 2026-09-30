import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Download, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Aylinor: Shariah Compliance Infrastructure",
  description:
    "Aylinor is Daeson Technologies' AI-powered Shariah compliance intelligence platform for Islamic financial institutions, from microfinance banks to commercial banks. Contact us for full platform access.",
  keywords: [
    "Aylinor",
    "Islamic finance AI",
    "Shariah compliance software",
    "Murabaha workflow digitization",
    "Islamic finance operations",
    "Shariah governance system",
    "AI for Islamic banks",
    "Shariah audit infrastructure",
    "Islamic fintech platform",
    "Daeson Technologies",
  ],
  openGraph: {
    title: "Aylinor: Islamic Finance Shariah Compliance Infrastructure | Daeson Technologies",
    description:
      "AI-powered Shariah compliance intelligence for Islamic financial institutions. Contact us for full platform access.",
    url: "https://daesontechnologies.online/amanah-ai",
  },
  alternates: {
    canonical: "https://daesontechnologies.online/amanah-ai",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Aylinor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Aylinor is Daeson Technologies' AI-powered infrastructure platform for Islamic financial institutions. It supports Shariah compliance teams with Murabaha contract analysis, governance documentation and audit trails. Full platform access is available to institutions on request.",
      },
    },
    {
      "@type": "Question",
      name: "What is Murabaha workflow digitization?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Murabaha workflow digitization refers to replacing manual, paper-based Murabaha financing processes with structured digital workflows. This includes automated contract parsing, compliance checklist execution, documentation generation, and audit trail creation, allowing Islamic financial institutions to process contracts faster with consistent Shariah alignment and full auditability.",
      },
    },
    {
      "@type": "Question",
      name: "How does AI support Shariah compliance without replacing scholars?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI supports Shariah compliance by automating the operational burden, document parsing, contract classification, risk flagging, and compliance report generation, so Shariah scholars can focus on substantive jurisprudential decisions rather than manual review. The scholar remains the final governance authority; AI provides structured, consistent information to inform their judgment.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get access to Aylinor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Full platform access is provided directly to institutions. Contact Daeson Technologies for a private walkthrough, and our team will share full platform details and access for your institution.",
      },
    },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://daesontechnologies.online/amanah-ai",
  url: "https://daesontechnologies.online/amanah-ai",
  name: "Aylinor: Islamic Finance Shariah Compliance Infrastructure",
  description:
    "AI-powered Shariah compliance infrastructure for Islamic financial institutions. Automates Murabaha contract analysis, governance documentation, and compliance audit trails.",
  isPartOf: { "@id": "https://daesontechnologies.online/#website" },
  about: {
    "@type": "SoftwareApplication",
    name: "Aylinor",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    creator: {
      "@type": "Organization",
      name: "Daeson Technologies",
      url: "https://daesontechnologies.online",
    },
    description:
      "AI-assisted Shariah compliance infrastructure for Islamic financial institutions. Automates contract analysis, governance documentation, and scholar review queues.",
    featureList: [
      "Murabaha contract analysis",
      "Shariah governance documentation",
      "Compliance audit trails",
    ],
  },
};

const capabilities = [
  {
    title: "Murabaha Contract Analysis",
    description: "Faster, more consistent Murabaha review, with the scholar keeping the final say.",
  },
  {
    title: "Shariah Governance Documentation",
    description: "Governance records organized and ready for your Shariah board.",
  },
  {
    title: "Compliance Audit Trails",
    description: "Every decision traceable, from contract intake to approval.",
  },
];

const problems = [
  "Murabaha contracts reviewed manually by compliance teams",
  "Scholar review queues backed up with document volume",
  "No structured audit trail for Shariah compliance decisions",
  "Regulatory reporting built manually in spreadsheets",
  "Compliance gaps discovered after contract execution",
  "No consistent documentation standard across branches",
];

const outcomes = [
  "Automated contract parsing surfacing compliance flags instantly",
  "Scholar review packages structured and prioritized automatically",
  "Full audit trail from contract intake to approval",
  "Regulatory reporting generated from structured compliance data",
  "Pre-execution compliance review with documented evidence",
  "Consistent documentation standard enforced across all operations",
];

const faqs = [
  {
    q: "What is Aylinor?",
    a: "Aylinor is Daeson Technologies' AI-powered infrastructure platform for Islamic financial institutions. It supports Shariah compliance teams with Murabaha contract analysis, governance documentation and audit trails. Full platform access is available to institutions on request.",
  },
  {
    q: "What is Murabaha workflow digitization and why does it matter?",
    a: "Murabaha is one of the most common Islamic financing structures, involving a cost-plus-profit sale arrangement. In most institutions, Murabaha workflows remain largely manual, contracts reviewed line-by-line, documentation compiled manually, scholar approval tracked through email. Digitization means replacing this with structured, automated workflows that parse contracts, execute compliance checklists, generate documentation, and maintain full audit trails, making the process faster, more consistent, and auditable at scale.",
  },
  {
    q: "How does AI support Shariah compliance without replacing scholars?",
    a: "AI supports Shariah compliance by automating the operational layer, document parsing, contract classification, risk flagging, and compliance report generation, so Shariah scholars can focus on substantive jurisprudential decisions. The scholar remains the final governance authority; AI provides structured, consistent information to inform their judgment rather than replacing it. This is the same role a well-trained compliance analyst plays, but at greater scale and consistency.",
  },
  {
    q: "How do I get access to Aylinor?",
    a: "Full platform access is provided directly to institutions. Contact Daeson Technologies for a private walkthrough, and our team will share full platform details and access for your institution.",
  },
  {
    q: "Who is Daeson Technologies working with on Shariah advisory?",
    a: "Daeson Technologies is developing Aylinor in strategic collaboration with Alhamd Shariah Advisory, a dedicated Shariah advisory firm, so the platform is built with substantive scholarly input from the start.",
  },
];

export default function AmanahAIPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <Navbar />
      <main style={{ backgroundColor: "var(--bg-page)" }} className="min-h-screen pt-24">
        <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
        <div
          className="absolute top-24 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(212,175,55,0.04) 0%, transparent 70%)", filter: "blur(120px)" }}
        />

        {/* Hero */}
        <section className="relative max-w-7xl mx-auto px-6 pt-16 pb-20">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-widest uppercase mb-8"
              style={{ border: "1px solid rgba(212,175,55,0.25)", backgroundColor: "rgba(212,175,55,0.06)", color: "var(--gold)" }}
            >
              Full Platform Access by Request
            </div>
            <h1
              className="text-[42px] md:text-[56px] font-extrabold tracking-tight leading-[1.06] mb-6"
              style={{ color: "var(--text-primary)" }}
            >
              Shariah Compliance{" "}
              <span style={{ color: "var(--gold)" }}>Infrastructure</span>{" "}
              <br className="hidden md:block" />
              for Islamic Finance.
            </h1>
            <p
              className="text-[17px] leading-relaxed mb-6 max-w-2xl"
              style={{ color: "var(--text-secondary)" }}
            >
              Aylinor is AI-powered Shariah compliance intelligence for Islamic financial institutions,
              from microfinance banks to commercial banks, from Pakistan to Europe. Full platform details
              and access are shared directly with institutions.
            </p>

            {/* GEO snippet: Answer block */}
            <div
              className="rounded-xl p-5 mb-8 border-l-4"
              style={{
                backgroundColor: "var(--bg-surface)",
                border: "1px solid var(--border)",
                borderLeftColor: "var(--gold)",
                borderLeftWidth: "3px",
              }}
            >
              <p className="text-[11px] font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--gold)" }}>
                What is Aylinor?
              </p>
              <p className="text-[13px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Aylinor is Daeson Technologies&apos; AI-powered compliance infrastructure platform for
                Islamic financial institutions. It automates the operational layer of Shariah compliance,
                contract parsing, documentation, scholar review queues, so scholars can focus on
                jurisprudential judgment rather than manual document review.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-white text-[14px] font-semibold rounded-xl transition-all hover:opacity-90 hover:-translate-y-0.5"
                style={{ backgroundColor: "var(--gold)" }}
              >
                Contact for Full Platform Access <ArrowRight size={14} />
              </Link>
              <Link
                href="/partnerships"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-[14px] font-semibold rounded-xl transition-all duration-200"
                style={{ border: "1px solid var(--border)", color: "var(--text-secondary)" }}
              >
                Partnership Program <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* Development status banner */}
        <section
          className="relative border-y py-5"
          style={{ backgroundColor: "rgba(212,175,55,0.04)", borderColor: "rgba(212,175,55,0.15)" }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div
                className="px-3 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-widest shrink-0"
                style={{ backgroundColor: "rgba(212,175,55,0.1)", color: "var(--gold)", border: "1px solid rgba(212,175,55,0.25)" }}
              >
                Platform Access
              </div>
              <p className="text-[13px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                This page is an overview. Full platform details, a private walkthrough and access are shared
                directly with institutions, {" "}
                <Link href="/contact" style={{ color: "var(--gold)", fontWeight: 600 }}>contact us for full platform access</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* The operational problem */}
        <section
          className="relative py-20 border-b"
          style={{ backgroundColor: "var(--bg-surface)", borderColor: "var(--border)" }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-widest uppercase mb-5"
                style={{ border: "1px solid var(--border)", backgroundColor: "var(--bg-elevated)", color: "var(--text-muted)" }}
              >
                The Problem
              </div>
              <h2
                className="text-[30px] md:text-[38px] font-extrabold tracking-tight mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                Why Islamic Finance Workflows Remain Manual
              </h2>
              <p className="text-[15px] max-w-2xl leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Most Islamic financial institutions rely on manual processes for Shariah compliance, not because
                scholars prefer it, but because purpose-built infrastructure has not existed. The result is
                bottlenecks, inconsistency, and audit exposure.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <p
                  className="text-[11px] font-semibold uppercase tracking-widest mb-5"
                  style={{ color: "#EF4444" }}
                >
                  Current State
                </p>
                <div className="space-y-3">
                  {problems.map((p) => (
                    <div key={p} className="flex items-start gap-3 text-[14px]" style={{ color: "var(--text-secondary)" }}>
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500/60 shrink-0" />
                      {p}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p
                  className="text-[11px] font-semibold uppercase tracking-widest mb-5"
                  style={{ color: "var(--gold)" }}
                >
                  With Aylinor
                </p>
                <div className="space-y-3">
                  {outcomes.map((o) => (
                    <div key={o} className="flex items-start gap-3 text-[14px]" style={{ color: "var(--text-secondary)" }}>
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "var(--gold)" }} />
                      {o}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GEO snippet: Murabaha definition */}
        <section className="relative py-16" style={{ backgroundColor: "var(--bg-page)" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div
              className="rounded-2xl p-8 md:p-10 border-l-4"
              style={{
                backgroundColor: "var(--bg-surface)",
                border: "1px solid var(--border)",
                borderLeftColor: "var(--gold)",
                borderLeftWidth: "3px",
              }}
            >
              <div className="grid md:grid-cols-[1fr_2fr] gap-8">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--gold)" }}>
                    Definition
                  </p>
                  <h2
                    className="text-[22px] font-bold tracking-tight leading-snug"
                    style={{ color: "var(--text-primary)" }}
                  >
                    What is Murabaha Workflow Digitization?
                  </h2>
                </div>
                <div>
                  <p className="text-[14px] leading-[1.8] mb-4" style={{ color: "var(--text-secondary)" }}>
                    <strong style={{ color: "var(--text-primary)" }}>Murabaha workflow digitization</strong> refers
                    to replacing manual, paper-based Murabaha financing processes with structured digital workflows.
                    Murabaha is a cost-plus-profit sale arrangement that is one of the most common structures in
                    Islamic finance, used for home financing, vehicle purchase, commodity financing, and trade
                    finance.
                  </p>
                  <p className="text-[14px] leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
                    In most institutions, Murabaha compliance is managed manually: contracts reviewed line-by-line
                    by compliance teams, documentation compiled manually, scholar approval tracked through email
                    threads. Digitization replaces this with structured, automated workflows that parse contracts,
                    execute compliance checklists, generate documentation, and maintain full audit trails,
                    making Murabaha processing faster, more consistent, and fully auditable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section
          className="relative py-20 border-y"
          style={{ backgroundColor: "var(--bg-surface)", borderColor: "var(--border)" }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-widest uppercase mb-5"
                style={{ border: "1px solid rgba(212,175,55,0.25)", backgroundColor: "rgba(212,175,55,0.06)", color: "var(--gold)" }}
              >
                Platform Capabilities
              </div>
              <h2
                className="text-[30px] md:text-[38px] font-extrabold tracking-tight mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                Infrastructure Built for Islamic Finance Operations
              </h2>
              <p className="text-[15px] max-w-2xl leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Built around the realities of Shariah compliance, working with scholars, not around them.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {capabilities.map((cap) => (
                <div
                  key={cap.title}
                  className="rounded-2xl p-6 transition-all duration-300"
                  style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}
                >
                  <div
                    className="w-2 h-2 rounded-full mb-4"
                    style={{ backgroundColor: "var(--gold)" }}
                  />
                  <h3
                    className="text-[15px] font-bold mb-3 tracking-tight"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {cap.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {cap.description}
                  </p>
                </div>
              ))}
            </div>
            <div
              className="mt-8 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-5"
              style={{ backgroundColor: "var(--bg-card)", border: "1px dashed var(--gold-border)" }}
            >
              <div>
                <p className="text-[16px] font-bold mb-1" style={{ color: "var(--text-primary)" }}>
                  The full platform is shared privately.
                </p>
                <p className="text-[13px]" style={{ color: "var(--text-secondary)" }}>
                  Complete capabilities, a live walkthrough and access are provided directly to institutions.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-white text-[14px] font-semibold rounded-xl shrink-0 transition-all hover:opacity-90 hover:-translate-y-0.5"
                style={{ backgroundColor: "var(--gold)" }}
              >
                Contact for Full Platform Access <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* Shariah Advisory Partnership */}
        <section className="relative py-20" style={{ backgroundColor: "var(--bg-page)" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div
              className="rounded-2xl p-8 md:p-10"
              style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)" }}
            >
              <div className="max-w-3xl">
                <div>
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-widest uppercase mb-5"
                    style={{ border: "1px solid rgba(212,175,55,0.25)", backgroundColor: "rgba(212,175,55,0.06)", color: "var(--gold)" }}
                  >
                    Scholarly Collaboration
                  </div>
                  <h2
                    className="text-[26px] font-bold tracking-tight mb-4"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Built in Collaboration with Shariah Advisory Expertise
                  </h2>
                  <p className="text-[14px] leading-[1.8] mb-4" style={{ color: "var(--text-secondary)" }}>
                    Aylinor is being developed in strategic collaboration with{" "}
                    <strong style={{ color: "var(--text-primary)" }}>Alhamd Shariah Advisory</strong>: a dedicated
                    Shariah advisory firm. This partnership ensures that the compliance infrastructure is developed
                    with substantive scholarly input from the beginning, not built as a pure technology product and
                    validated afterwards.
                  </p>
                  <p
                    className="text-[12px] italic"
                    style={{ color: "var(--text-faint)" }}
                  >
                    Alhamd Shariah Advisory is a current strategic collaborator. This does not constitute a
                    commercial endorsement or formal investment relationship.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHITEPAPER DOWNLOADS ── */}
        <section className="relative py-20" style={{ backgroundColor: "var(--bg-page)", borderTop: "1px solid var(--border)" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-widest uppercase mb-5"
                style={{ border: "1px solid rgba(212,175,55,0.25)", backgroundColor: "rgba(212,175,55,0.06)", color: "var(--gold)" }}
              >
                <FileText size={10} /> Research & Whitepapers
              </div>
              <h2 className="text-[28px] md:text-[34px] font-bold tracking-tight mb-4" style={{ color: "var(--text-primary)" }}>
                Published Research on Islamic Finance AI
              </h2>
              <p className="text-[15px] leading-relaxed max-w-2xl" style={{ color: "var(--text-secondary)" }}>
                Our published research explores the technology gap in Islamic finance and the role AI can play
                in Shariah compliance infrastructure. Download directly, no sign-up required.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "AI and Shariah Compliance in the Next Generation of Financial Technology",
                  desc: "An in-depth look at how AI is reshaping Shariah compliance infrastructure, covering governance frameworks, contract analysis automation, and the regulatory implications for next-generation Islamic fintech.",
                  audience: "Islamic bank executives, Shariah compliance officers",
                  href: "/whitepapers/whitepaper-shariah-ai-compliance.pdf",
                  tag: "Shariah AI",
                },
                {
                  title: "The Rise of AI Financial Copilots for SMEs in the GCC",
                  desc: "How AI-powered financial copilots are transforming SME access to financial intelligence and working capital management across the Gulf Cooperation Council markets.",
                  audience: "SME operators, fintech investors, GCC financial institutions",
                  href: "/whitepapers/whitepaper-ai-financial-copilots-gcc.pdf",
                  tag: "GCC Fintech",
                },
                {
                  title: "The Infrastructure Gap in SME Digital Finance in the GCC",
                  desc: "A data-driven assessment of the technology infrastructure deficit facing SMEs across GCC markets, examining the gap between enterprise-grade tools and what small businesses can actually access.",
                  audience: "Policymakers, fintech operators, GCC banking executives",
                  href: "/whitepapers/whitepaper-sme-digital-finance-gap.pdf",
                  tag: "Infrastructure",
                },
              ].map((wp) => (
                <div
                  key={wp.title}
                  className="rounded-2xl p-7 flex flex-col"
                  style={{
                    backgroundColor: "var(--bg-surface)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <span
                    className="self-start text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest mb-4"
                    style={{ backgroundColor: "rgba(212,175,55,0.08)", color: "var(--gold)", border: "1px solid rgba(212,175,55,0.20)" }}
                  >
                    {wp.tag}
                  </span>
                  <h3 className="text-[15px] font-bold leading-snug mb-3 flex-1" style={{ color: "var(--text-primary)" }}>
                    {wp.title}
                  </h3>
                  <p className="text-[12px] leading-relaxed mb-3" style={{ color: "var(--text-secondary)" }}>
                    {wp.desc}
                  </p>
                  <p className="text-[11px] mb-5" style={{ color: "var(--text-faint)" }}>
                    <span className="font-semibold">For:</span> {wp.audience}
                  </p>
                  <a
                    href={wp.href}
                    download
                    className="inline-flex items-center gap-2 px-5 py-3 text-[13px] font-bold rounded-xl transition-all hover:opacity-90 mt-auto"
                    style={{ backgroundColor: "var(--gold)", color: "white" }}
                  >
                    <Download size={14} /> Download PDF
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/research"
                className="inline-flex items-center gap-2 text-[13px] font-semibold transition-colors"
                style={{ color: "var(--blue)" }}
              >
                View full Research Center <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          className="relative py-20 border-t"
          style={{ backgroundColor: "var(--bg-surface)", borderColor: "var(--border)" }}
        >
          <div className="max-w-3xl mx-auto px-6">
            <div className="mb-12">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-widest uppercase mb-5"
                style={{ border: "1px solid var(--border)", backgroundColor: "var(--bg-elevated)", color: "var(--text-muted)" }}
              >
                FAQ
              </div>
              <h2
                className="text-[28px] font-bold tracking-tight"
                style={{ color: "var(--text-primary)" }}
              >
                Questions About Aylinor
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-xl p-6"
                  style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}
                >
                  <h3
                    className="text-[14px] font-bold mb-3"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {faq.q}
                  </h3>
                  <p className="text-[13px] leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-20 border-t" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-3xl mx-auto px-6 text-center">
            <div
              className="rounded-2xl p-10"
              style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)" }}
            >
              <h2
                className="text-[28px] font-bold mb-4 tracking-tight"
                style={{ color: "var(--text-primary)" }}
              >
                Get Full Access to Aylinor
              </h2>
              <p className="text-[15px] leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
                Microfinance bank or commercial bank, Pakistan or Europe, contact us and our team will
                share full platform details and access for your institution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-white text-[14px] font-semibold rounded-xl transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
                  style={{ backgroundColor: "var(--gold)" }}
                >
                  Contact for Full Platform Access <ArrowRight size={14} />
                </Link>
                <Link
                  href="/partnerships"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[14px] font-semibold rounded-xl transition-all duration-200"
                  style={{ border: "1px solid var(--border)", color: "var(--text-secondary)" }}
                >
                  View Partnership Program <ArrowRight size={14} />
                </Link>
              </div>
              <p className="text-[12px] mt-6 italic" style={{ color: "var(--text-faint)" }}>
                Daeson Technologies is founder-led and selective about partnerships.
                All inquiries are reviewed by leadership directly.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
