import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Products — Amanah AI & Enterprise Operational Platforms",
  description:
    "Daeson Technologies products include Amanah AI — the Islamic finance operational intelligence platform — and the Real Estate Operations Platform. Enterprise-grade, fully owned, AI-powered.",
  alternates: { canonical: "https://daesontechnologies.online/products" },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Products — Daeson Technologies",
  url: "https://daesontechnologies.online/products",
  isPartOf: { "@id": "https://daesontechnologies.online/#website" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://daesontechnologies.online" },
      { "@type": "ListItem", position: 2, name: "Products", item: "https://daesontechnologies.online/products" },
    ],
  },
};

const amanahSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Amanah AI",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Amanah AI is an AI-powered operational intelligence platform for Islamic financial institutions. It automates Murabaha contract analysis, Shariah governance documentation, scholar review workflows, and compliance audit trail generation. Developed by Daeson Technologies in strategic collaboration with Alhamd Shariah Advisory.",
  creator: {
    "@type": "Organization",
    name: "Daeson Technologies",
    url: "https://daesontechnologies.online",
  },
  url: "https://daesontechnologies.online/amanah-ai",
  featureList: [
    "Murabaha workflow automation",
    "Shariah compliance documentation",
    "Scholar review queue management",
    "Compliance audit trail generation",
    "Governance visibility dashboards",
    "Regulatory reporting support",
  ],
  applicationSubCategory: "Islamic Finance Technology",
  audience: {
    "@type": "Audience",
    audienceType: "Islamic financial institutions, Islamic banks, Shariah-compliant investment firms",
  },
};

const products = [
  {
    status: "In Strategic Development",
    statusColor: "var(--gold)",
    statusBg: "var(--gold-muted)",
    name: "Amanah AI",
    tagline: "Islamic Finance Operational Intelligence Platform",
    description:
      "Amanah AI is an AI-powered platform designed specifically for Islamic financial institutions. It addresses the operational gap between Shariah compliance requirements and the manual, paper-heavy processes that currently govern most Islamic finance workflows.",
    problem:
      "Islamic financial institutions handle complex Shariah-governed transactions — Murabaha, Ijara, Musharaka — that require meticulous documentation, scholar review, and compliance verification. Most institutions rely on manual processes that are slow, error-prone, and create audit risk.",
    solution:
      "Amanah AI automates the operational layer of Shariah compliance: contract analysis, governance documentation, scholar review queue management, and audit trail generation — reducing operational burden so scholars can focus on substantive jurisprudential decisions.",
    capabilities: [
      "Murabaha contract parsing & compliance analysis",
      "Shariah governance documentation generation",
      "Scholar review workflow & queue management",
      "Compliance audit trail & documentation",
      "Governance visibility dashboards",
      "Regulatory reporting support",
    ],
    collaboration: "Developed in strategic collaboration with Alhamd Shariah Advisory",
    href: "/amanah-ai",
    cta: "Explore Amanah AI",
  },
  {
    status: "Concept Architecture",
    statusColor: "var(--green)",
    statusBg: "var(--green-muted)",
    name: "Real Estate Operations Platform",
    tagline: "Unified Operational Infrastructure for Property Firms",
    description:
      "A comprehensive operational platform designed for real estate firms, brokerages, and property developers who have outgrown fragmented SaaS tools. Built to unify the critical functions of a real estate business into a single owned system.",
    problem:
      "Most real estate firms operate across 5–10 disconnected SaaS tools — a CRM here, a reporting tool there, manual spreadsheets for investor tracking. This creates data fragmentation, manual overhead, and no real-time visibility for leadership.",
    solution:
      "An owned platform that unifies CRM, investor dashboards, deal management, payment tracking, and AI lead intelligence — with executive analytics that give leadership real operational visibility across the business.",
    capabilities: [
      "Unified CRM & deal pipeline management",
      "Investor visibility portal with real-time dashboards",
      "Payment & rent collection tracking",
      "AI-powered lead qualification & scoring",
      "Executive analytics & KPI monitoring",
      "Multi-market & multi-currency operations",
    ],
    collaboration: null,
    href: "/real-estate",
    cta: "Explore Real Estate Platform",
  },
];

const roadmapItems = [
  { phase: "Q3 2025", item: "Amanah AI — Murabaha workflow module (beta)", status: "In Progress" },
  { phase: "Q4 2025", item: "Amanah AI — Scholar review & governance documentation", status: "Planned" },
  { phase: "Q1 2026", item: "Real Estate Operations Platform — CRM & deal pipeline core", status: "Planned" },
  { phase: "Q2 2026", item: "Real Estate Operations Platform — Investor portal module", status: "Planned" },
  { phase: "Q3 2026", item: "Amanah AI — Full compliance suite & audit reporting", status: "Roadmap" },
];

export default function ProductsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(amanahSchema) }} />
      <Navbar />
      <main style={{ backgroundColor: "var(--bg-page)", minHeight: "100vh" }}>

        {/* Hero */}
        <div className="max-w-5xl mx-auto px-6 pt-36 pb-20">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-widest uppercase mb-8"
            style={{ border: "1px solid var(--green-border)", backgroundColor: "var(--green-muted)", color: "var(--green)" }}
          >
            Products
          </div>
          <h1 className="text-[38px] md:text-[52px] font-bold tracking-tight leading-[1.06] mb-6" style={{ color: "var(--text-primary)" }}>
            Platforms Built for
            <br />
            <span style={{ color: "var(--green)" }}>Operationally Complex Industries</span>
          </h1>
          <p className="text-[16px] leading-relaxed max-w-2xl" style={{ color: "var(--text-secondary)" }}>
            Daeson Technologies develops owned AI-powered platforms for industries where off-the-shelf software
            fails to meet the operational, compliance, and governance requirements of the business.
          </p>
        </div>

        {/* Products */}
        <div style={{ borderTop: "1px solid var(--border)" }}>
          {products.map((product, i) => (
            <div
              key={i}
              style={{
                backgroundColor: i % 2 === 0 ? "var(--bg-surface)" : "var(--bg-page)",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <div className="max-w-5xl mx-auto px-6 py-20">
                <div className="grid md:grid-cols-[1fr_1.1fr] gap-14 items-start">

                  {/* Left */}
                  <div>
                    <span
                      className="inline-flex items-center gap-2 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest mb-5"
                      style={{ backgroundColor: product.statusBg, color: product.statusColor }}
                    >
                      {product.status}
                    </span>
                    <h2 className="text-[30px] md:text-[36px] font-bold tracking-tight mb-2" style={{ color: "var(--text-primary)" }}>
                      {product.name}
                    </h2>
                    <p className="text-[13px] font-medium mb-6" style={{ color: "var(--text-muted)" }}>
                      {product.tagline}
                    </p>
                    <p className="text-[15px] leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>
                      {product.description}
                    </p>

                    <div className="mb-6 rounded-xl p-5" style={{ backgroundColor: "var(--bg-elevated)", border: "1px solid var(--border)" }}>
                      <p className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: "var(--text-faint)" }}>The Problem</p>
                      <p className="text-[13px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>{product.problem}</p>
                    </div>

                    <p className="text-[13px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
                      <span className="font-semibold" style={{ color: "var(--text-primary)" }}>The Solution: </span>
                      {product.solution}
                    </p>

                    {product.collaboration && (
                      <div
                        className="flex items-center gap-2 px-4 py-3 rounded-lg mb-6"
                        style={{ border: "1px solid var(--gold-border)", backgroundColor: "var(--gold-muted)" }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "var(--gold)" }} />
                        <p className="text-[12px] italic" style={{ color: "var(--gold)" }}>{product.collaboration}</p>
                      </div>
                    )}

                    <Link
                      href={product.href}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-semibold rounded-lg text-white transition-all"
                      style={{ backgroundColor: "var(--green)", boxShadow: "0 3px 14px rgba(5,150,105,0.25)" }}
                    >
                      {product.cta} <ArrowRight size={13} />
                    </Link>
                  </div>

                  {/* Right — Capabilities */}
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest mb-5" style={{ color: "var(--text-faint)" }}>
                      Platform Capabilities
                    </p>
                    <div className="space-y-3">
                      {product.capabilities.map((cap, j) => (
                        <div
                          key={j}
                          className="flex items-center gap-3 px-4 py-3.5 rounded-xl"
                          style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}
                        >
                          <span
                            className="w-5 h-5 rounded flex items-center justify-center shrink-0 text-[10px] font-bold"
                            style={{ backgroundColor: "var(--green-muted)", color: "var(--green)" }}
                          >
                            {String(j + 1).padStart(2, "0")}
                          </span>
                          <span className="text-[13px]" style={{ color: "var(--text-secondary)" }}>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Product Roadmap */}
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="mb-12">
            <p className="text-[10px] font-bold uppercase tracking-widest mb-4" style={{ color: "var(--text-faint)" }}>
              Development Timeline
            </p>
            <h2 className="text-[28px] md:text-[34px] font-bold tracking-tight" style={{ color: "var(--text-primary)" }}>
              Product Roadmap
            </h2>
          </div>
          <div className="space-y-3">
            {roadmapItems.map((item, i) => (
              <div
                key={i}
                className="grid grid-cols-[100px_1fr_100px] items-center gap-6 px-5 py-4 rounded-xl"
                style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)" }}
              >
                <span className="text-[11px] font-bold" style={{ color: "var(--green)" }}>{item.phase}</span>
                <span className="text-[13px]" style={{ color: "var(--text-primary)" }}>{item.item}</span>
                <span
                  className="text-[10px] font-semibold text-center px-2.5 py-1 rounded-full"
                  style={{
                    backgroundColor: item.status === "In Progress" ? "var(--green-muted)" : "var(--bg-elevated)",
                    color: item.status === "In Progress" ? "var(--green)" : "var(--text-faint)",
                  }}
                >
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ backgroundColor: "var(--bg-surface)", borderTop: "1px solid var(--border)" }}>
          <div className="max-w-5xl mx-auto px-6 py-16 text-center">
            <h2 className="text-[26px] md:text-[32px] font-bold tracking-tight mb-4" style={{ color: "var(--text-primary)" }}>
              Interested in Early Access or Partnership?
            </h2>
            <p className="text-[15px] leading-relaxed max-w-xl mx-auto mb-8" style={{ color: "var(--text-secondary)" }}>
              Both products are in active development. If your organization operates in Islamic finance or
              real estate and you want to explore early engagement, we welcome the conversation.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-white text-[14px] font-semibold rounded-xl"
                style={{ backgroundColor: "var(--green)", boxShadow: "0 4px 20px rgba(5,150,105,0.25)" }}
              >
                Request Executive Consultation <ArrowRight size={14} />
              </Link>
              <Link
                href="/partnerships"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-[14px] font-semibold rounded-xl"
                style={{ border: "1px solid var(--border)", color: "var(--text-primary)" }}
              >
                Explore Partnership
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
