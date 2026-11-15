import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Islamic Finance Technology & Compliance",
  description:
    "Daeson Technologies delivers Islamic finance technology through Aylinor, an AI-powered Shariah compliance and governance platform for Islamic financial institutions, with scholars keeping the final decision.",
  alternates: { canonical: "https://daesontechnologies.online/industries/islamic-finance" },
};

const challenges = [
  {
    title: "Manual Murabaha Contract Processing",
    body: "Murabaha financing involves complex cost-plus-profit documentation requirements. Most institutions process contracts manually, slow, error-prone, and difficult to audit at scale.",
  },
  {
    title: "Scholar Review Bandwidth Constraints",
    body: "Shariah scholars spend significant time on administrative document review rather than substantive jurisprudential analysis. This creates bottlenecks and underutilizes expensive scholarly expertise.",
  },
  {
    title: "Compliance Documentation Risk",
    body: "Paper-based or email-driven compliance documentation creates audit risk. When documentation is missing or inconsistent, it creates regulatory and reputational exposure for the institution.",
  },
  {
    title: "Governance Visibility Gap",
    body: "Senior management and boards often lack real-time visibility into the compliance status of the institution's Islamic finance portfolio, creating governance risk that is difficult to detect until it becomes material.",
  },
  {
    title: "Technology Not Built for Islamic Finance",
    body: "Most financial technology platforms were designed for conventional finance and retrofitted for Islamic compliance. This results in awkward workarounds, incomplete audit trails, and systems that don't reflect actual Shariah governance requirements.",
  },
  {
    title: "Scaling Compliance Operations",
    body: "As Islamic financial institutions grow, their compliance operations must scale proportionally. Manual processes cannot scale efficiently, creating either compliance risk or prohibitive overhead costs.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Islamic finance technology?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Islamic finance technology refers to purpose-built digital platforms and AI systems designed for the specific compliance, governance, and operational requirements of Islamic financial institutions. Unlike conventional fintech adapted for Islamic products, Islamic finance technology is architected around Shariah governance requirements, including contract structures like Murabaha, Ijara, and Musharaka, scholar review workflows, fatwa documentation, and compliance audit trail generation.",
      },
    },
    {
      "@type": "Question",
      name: "What is Murabaha workflow digitization?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Murabaha workflow digitization replaces manual, paper-based Murabaha financing processes with structured digital workflows. It brings the work into one organised, auditable process. The goal is to reduce processing time, eliminate documentation risk, and free scholar time from administrative tasks to substantive compliance decisions.",
      },
    },
    {
      "@type": "Question",
      name: "How does AI support Shariah compliance without replacing scholars?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI supports Shariah compliance by automating the operational and documentation layer of the compliance process, not by making Shariah judgments. It reduces administrative work and helps keep clear, auditable records. All substantive Shariah determinations remain with qualified scholars. AI reduces the administrative burden so scholars can focus on genuine jurisprudential analysis rather than document processing.",
      },
    },
    {
      "@type": "Question",
      name: "What is governance-sensitive AI in Islamic finance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Governance-sensitive AI in Islamic finance refers to AI systems designed with explicit audit trails, human oversight requirements, and explainability, appropriate for environments where decisions carry religious and legal accountability. In Islamic finance, AI recommendations must be documentable, auditable, and subject to scholar review. Governance-sensitive design means these requirements are built into the system architecture from the start, not added as afterthoughts.",
      },
    },
  ],
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Islamic Finance Technology | Daeson Technologies",
  url: "https://daesontechnologies.online/industries/islamic-finance",
  isPartOf: { "@id": "https://daesontechnologies.online/#website" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://daesontechnologies.online" },
      { "@type": "ListItem", position: 2, name: "Industries", item: "https://daesontechnologies.online/industries" },
      { "@type": "ListItem", position: 3, name: "Islamic Finance", item: "https://daesontechnologies.online/industries/islamic-finance" },
    ],
  },
};

export default function IslamicFinancePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main style={{ backgroundColor: "var(--bg-page)", minHeight: "100vh" }}>

        {/* Hero */}
        <div className="max-w-5xl mx-auto px-6 pt-36 pb-20">
          <p className="text-[11px] font-bold uppercase tracking-widest mb-3" style={{ color: "var(--text-faint)" }}>
            Industries / Islamic Finance
          </p>
          <h1 className="text-[38px] md:text-[52px] font-bold tracking-tight leading-[1.05] mb-6 max-w-4xl" style={{ color: "var(--text-primary)" }}>
            Islamic Finance Technology
            <br />
            <span style={{ color: "var(--gold)" }}>Built for Shariah Governance</span>
          </h1>
          <p className="text-[16px] leading-relaxed max-w-2xl mb-4" style={{ color: "var(--text-secondary)" }}>
            Daeson Technologies is developing Aylinor, an AI-powered operational intelligence platform
            designed specifically for Islamic financial institutions, their compliance workflows, and governance requirements.
          </p>
          <div
            className="flex items-center gap-3 px-4 py-3 rounded-xl mb-8 max-w-lg"
            style={{ backgroundColor: "var(--gold-muted)", border: "1px solid var(--gold-border)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "var(--gold)" }} />
            <p className="text-[12px] italic" style={{ color: "var(--gold)" }}>
              Developed in strategic collaboration with Alhamd Shariah Advisory
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/amanah-ai" className="inline-flex items-center gap-2 px-6 py-3.5 text-[14px] font-semibold rounded-xl" style={{ backgroundColor: "var(--purple-fill)", color: "#FFFFFF" }}>
              Explore Aylinor <ArrowRight size={14} />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 text-[14px] font-semibold rounded-xl" style={{ border: "1px solid var(--border)", color: "var(--text-primary)" }}>
              Request Consultation
            </Link>
          </div>
        </div>

        {/* Challenges */}
        <div className="section-light" style={{ backgroundColor: "var(--bg-surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
          <div className="max-w-5xl mx-auto px-6 py-20">
            <p className="text-[10px] font-bold uppercase tracking-widest mb-10" style={{ color: "var(--text-faint)" }}>
              Industry Challenges
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {challenges.map((c, i) => (
                <div key={i} className="p-6 rounded-xl" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}>
                  <div className="w-8 h-px mb-5" style={{ backgroundColor: "var(--gold)" }} />
                  <h3 className="text-[14px] font-bold mb-2.5 tracking-tight" style={{ color: "var(--text-primary)" }}>{c.title}</h3>
                  <p className="text-[12px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Aylinor Solution */}
        <div className="max-w-5xl mx-auto px-6 py-20">
          <p className="text-[10px] font-bold uppercase tracking-widest mb-10" style={{ color: "var(--text-faint)" }}>
            The Solution
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Shariah Compliance Support",
                body: "Aylinor helps Shariah teams work in a more organised and consistent way, reducing the administrative work around every review.",
              },
              {
                title: "Audit-Ready Records",
                body: "A clear, auditable record of Shariah decisions, designed to support Shariah boards, regulators and auditors.",
              },
              {
                title: "Scholars Keep the Final Decision",
                body: "Technology supports the process; qualified scholars and the institution's governance structures make every Shariah decision.",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl" style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)" }}>
                <h3 className="text-[14px] font-bold mb-2.5" style={{ color: "var(--text-primary)" }}>{item.title}</h3>
                <p className="text-[12px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div style={{ backgroundColor: "var(--bg-surface)", borderTop: "1px solid var(--border)" }}>
          <div className="max-w-5xl mx-auto px-6 py-20">
            <p className="text-[10px] font-bold uppercase tracking-widest mb-10" style={{ color: "var(--text-faint)" }}>
              Frequently Asked Questions
            </p>
            <div className="space-y-4 mb-10">
              {faqSchema.mainEntity.map((item, i) => (
                <div key={i} className="p-6 rounded-xl" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}>
                  <h3 className="text-[14px] font-semibold mb-3" style={{ color: "var(--text-primary)" }}>{item.name}</h3>
                  <p className="text-[12px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-3">
              <Link href="/amanah-ai" className="inline-flex items-center gap-2 px-5 py-3 text-[13px] font-semibold rounded-lg" style={{ backgroundColor: "var(--purple-fill)", color: "#FFFFFF" }}>
                Explore Aylinor <ArrowRight size={13} />
              </Link>
              <Link href="/research" className="inline-flex items-center gap-2 px-5 py-3 text-[13px] font-semibold rounded-lg" style={{ border: "1px solid var(--border)", color: "var(--text-primary)" }}>
                Read Research
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
