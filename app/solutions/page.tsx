import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Enterprise Solutions — Real Estate & AI",
  description:
    "Daeson Technologies delivers enterprise solutions across real estate operational infrastructure, AI integration, workflow automation, Islamic finance technology, fintech infrastructure, and digital transformation. Full ownership. No subscriptions.",
  alternates: { canonical: "https://daesontechnologies.online/solutions" },
};

const solutions = [
  {
    category: "Real Estate Technology",
    title: "Real Estate Operational Infrastructure",
    description:
      "An owned, AI-powered operational platform replacing the fragmented SaaS stack used by real estate firms, brokerages, and property developers. Includes unified CRM, investor dashboards, payment tracking, AI lead intelligence, and executive analytics — built around your firm's actual workflows.",
    capabilities: [
      "Unified CRM & deal pipeline management",
      "Investor visibility portals with real-time reporting",
      "Payment & rent tracking centralized",
      "AI-powered lead qualification & scoring",
      "Executive analytics & operational dashboards",
      "Multi-market & multi-currency operations",
    ],
    href: "/industries/real-estate",
    tag: "Core Platform",
    tagColor: "var(--green)",
    tagBg: "var(--green-muted)",
  },
  {
    category: "Islamic Finance Technology",
    title: "Amanah AI — Shariah Compliance Intelligence",
    description:
      "An AI-powered operational intelligence platform designed specifically for Islamic financial institutions. Automates Murabaha contract analysis, Shariah governance documentation, scholar review workflows, and compliance audit trails — reducing operational burden while maintaining full governance accountability.",
    capabilities: [
      "Murabaha contract analysis & digitization",
      "Shariah governance documentation automation",
      "Scholar review queue management",
      "Compliance audit trail generation",
      "Regulatory reporting support",
      "Governance visibility dashboards",
    ],
    href: "/amanah-ai",
    tag: "In Development",
    tagColor: "var(--gold)",
    tagBg: "var(--gold-muted)",
  },
  {
    category: "Enterprise AI",
    title: "Enterprise AI Integration",
    description:
      "AI embedded directly into your existing enterprise systems and workflows — not bolted on as a separate tool. We design AI as an operational layer that surfaces intelligence, automates repetitive analytical tasks, and gives leadership real-time visibility across the organization.",
    capabilities: [
      "AI integration into existing enterprise systems",
      "Intelligent document processing & analysis",
      "Predictive operational analytics",
      "AI-powered decision support systems",
      "Cross-department workflow automation",
      "Operational intelligence dashboards",
    ],
    href: "/industries/enterprise-ai",
    tag: "Enterprise",
    tagColor: "var(--green)",
    tagBg: "var(--green-muted)",
  },
  {
    category: "Operations",
    title: "Workflow Automation Systems",
    description:
      "End-to-end workflow automation replacing manual, fragmented operations with intelligent owned systems. We map your actual operational workflows, then build automation infrastructure that eliminates manual overhead, reduces errors, and creates measurable efficiency gains.",
    capabilities: [
      "Operational workflow mapping & design",
      "Automated approval & routing workflows",
      "Cross-system data orchestration",
      "Compliance workflow enforcement",
      "Automated reporting & notifications",
      "Exception handling & escalation systems",
    ],
    href: "/industries/workflow-automation",
    tag: "Operational",
    tagColor: "var(--green)",
    tagBg: "var(--green-muted)",
  },
  {
    category: "Fintech",
    title: "Fintech Infrastructure Development",
    description:
      "Custom financial technology infrastructure including payment systems, wallet infrastructure, financial operations platforms, and transaction processing systems. Built to regulatory standards with full ownership and no third-party dependency on critical financial flows.",
    capabilities: [
      "Custom payment system development",
      "Wallet infrastructure architecture",
      "Financial operations platforms",
      "Transaction processing & reconciliation",
      "KYC/AML workflow integration",
      "Multi-currency & cross-border operations",
    ],
    href: "/industries/fintech",
    tag: "Fintech",
    tagColor: "var(--green)",
    tagBg: "var(--green-muted)",
  },
  {
    category: "Transformation",
    title: "Enterprise Digital Transformation",
    description:
      "Comprehensive digital transformation programs for enterprise organizations — from strategy and architecture through implementation and adoption. We replace legacy systems and fragmented tools with owned platforms that align to how your organization actually operates.",
    capabilities: [
      "Transformation strategy & architecture",
      "Legacy system migration & replacement",
      "Process redesign & optimization",
      "Change management & adoption support",
      "Technology stack consolidation",
      "Post-transformation support & evolution",
    ],
    href: "/industries/digital-transformation",
    tag: "Program",
    tagColor: "var(--green)",
    tagBg: "var(--green-muted)",
  },
];

const differentiators = [
  {
    title: "Full Ownership",
    body: "Clients own all source code, data, and architecture. No monthly licenses, no vendor lock-in, no subscription dependency on critical systems.",
  },
  {
    title: "Workflow-First Design",
    body: "Every system starts with operational discovery — mapping real workflows before writing a single line of code. Infrastructure built around how you actually operate.",
  },
  {
    title: "AI as an Operational Layer",
    body: "We integrate AI into the operational core of your systems — not as a chatbot add-on, but as intelligence embedded in workflows, dashboards, and decision processes.",
  },
  {
    title: "Governance-Sensitive Architecture",
    body: "Systems designed for industries where decisions carry legal, financial, or religious accountability. Audit trails, explainability, and human oversight built in from the start.",
  },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Enterprise Solutions — Daeson Technologies",
  description:
    "Enterprise solutions for real estate technology, AI integration, workflow automation, Islamic finance technology, fintech infrastructure, and digital transformation.",
  url: "https://daesontechnologies.online/solutions",
  isPartOf: { "@id": "https://daesontechnologies.online/#website" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://daesontechnologies.online" },
      { "@type": "ListItem", position: 2, name: "Solutions", item: "https://daesontechnologies.online/solutions" },
    ],
  },
};

export default function SolutionsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Navbar />
      <main style={{ backgroundColor: "var(--bg-page)", minHeight: "100vh" }}>

        {/* Hero */}
        <div className="max-w-6xl mx-auto px-6 pt-36 pb-20">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-widest uppercase mb-8"
            style={{ border: "1px solid var(--green-border)", backgroundColor: "var(--green-muted)", color: "var(--green)" }}
          >
            Enterprise Solutions
          </div>
          <h1
            className="speakable text-[38px] md:text-[54px] font-bold tracking-tight leading-[1.05] mb-6 max-w-4xl"
            style={{ color: "var(--text-primary)" }}
          >
            Operational Infrastructure for
            <br />
            <span style={{ color: "var(--green)" }}>Complex Enterprise Environments</span>
          </h1>
          <p className="text-[17px] leading-relaxed max-w-2xl mb-4" style={{ color: "var(--text-secondary)" }}>
            Daeson Technologies builds owned, AI-powered operational systems for industries where generic
            SaaS tools fail — real estate, Islamic finance, fintech, and enterprise operations.
          </p>
          <p className="text-[14px] leading-relaxed max-w-xl" style={{ color: "var(--text-muted)" }}>
            Every solution is designed around your specific workflows. Clients own everything outright.
            No subscriptions, no vendor lock-in.
          </p>
        </div>

        {/* Solutions grid */}
        <div style={{ backgroundColor: "var(--bg-surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
          <div className="max-w-6xl mx-auto px-6 py-20">
            <div className="grid md:grid-cols-2 gap-6">
              {solutions.map((sol, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-8 flex flex-col"
                  style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-5">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: "var(--text-faint)" }}>
                        {sol.category}
                      </p>
                      <h2 className="text-[18px] font-bold tracking-tight leading-snug" style={{ color: "var(--text-primary)" }}>
                        {sol.title}
                      </h2>
                    </div>
                    <span
                      className="flex-shrink-0 text-[10px] font-bold px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: sol.tagBg, color: sol.tagColor }}
                    >
                      {sol.tag}
                    </span>
                  </div>

                  <p className="text-[13px] leading-relaxed mb-6 flex-1" style={{ color: "var(--text-secondary)" }}>
                    {sol.description}
                  </p>

                  {/* Capabilities */}
                  <div className="mb-6">
                    <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: "var(--text-faint)" }}>
                      Key Capabilities
                    </p>
                    <ul className="space-y-2">
                      {sol.capabilities.map((cap) => (
                        <li key={cap} className="flex items-start gap-2.5 text-[12px]" style={{ color: "var(--text-secondary)" }}>
                          <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: "var(--green)" }} />
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={sol.href}
                    className="inline-flex items-center gap-1.5 text-[12px] font-semibold transition-colors"
                    style={{ color: "var(--green)" }}
                  >
                    Explore Solution <ArrowRight size={12} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Differentiators */}
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="mb-12">
            <p className="text-[10px] font-bold uppercase tracking-widest mb-4" style={{ color: "var(--text-faint)" }}>
              The Daeson Approach
            </p>
            <h2 className="text-[30px] md:text-[38px] font-bold tracking-tight" style={{ color: "var(--text-primary)" }}>
              Why Ownership Matters
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((d, i) => (
              <div
                key={i}
                className="p-6 rounded-xl"
                style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)" }}
              >
                <div className="w-8 h-px mb-5" style={{ backgroundColor: "var(--green)" }} />
                <h3 className="text-[14px] font-bold mb-3" style={{ color: "var(--text-primary)" }}>
                  {d.title}
                </h3>
                <p className="text-[12px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {d.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ backgroundColor: "var(--bg-surface)", borderTop: "1px solid var(--border)" }}>
          <div className="max-w-6xl mx-auto px-6 py-16">
            <div className="grid md:grid-cols-[1.4fr_1fr] gap-10 items-center">
              <div>
                <h2 className="text-[28px] md:text-[34px] font-bold tracking-tight mb-4" style={{ color: "var(--text-primary)" }}>
                  Ready to Discuss Your Operational Challenges?
                </h2>
                <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
                  We start every engagement with an operational discovery session — no sales pitch,
                  just a direct conversation about your infrastructure challenges and what a purpose-built
                  solution would look like for your organization.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3.5 text-white text-[14px] font-semibold rounded-xl transition-all duration-200"
                    style={{ backgroundColor: "var(--green)", boxShadow: "0 4px 20px rgba(5, 150, 105, 0.25)" }}
                  >
                    Request Executive Consultation
                    <ArrowRight size={14} />
                  </Link>
                  <Link
                    href="/demo"
                    className="inline-flex items-center gap-2 px-6 py-3.5 text-[14px] font-semibold rounded-xl transition-all"
                    style={{ border: "1px solid var(--border)", color: "var(--text-primary)" }}
                  >
                    Explore Demo Center
                  </Link>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Engagement Start", value: "Operational discovery session" },
                  { label: "Ownership Model", value: "Full source code & IP ownership" },
                  { label: "Subscription Fees", value: "None — one-time build investment" },
                  { label: "Markets", value: "UAE, GCC, Canada, UK, Pakistan" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between px-4 py-3 rounded-xl"
                    style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}
                  >
                    <span className="text-[12px] font-semibold" style={{ color: "var(--text-faint)" }}>{item.label}</span>
                    <span className="text-[12px] font-medium" style={{ color: "var(--text-primary)" }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
