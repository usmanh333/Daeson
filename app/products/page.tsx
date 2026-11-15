import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Products: Aylinor & Enterprise Platforms",
  description:
    "Daeson Technologies products include Aylinor, the Islamic finance operational intelligence platform, and the Real Estate Operations Platform. Enterprise-grade, fully owned, AI-powered.",
  alternates: { canonical: "https://daesontechnologies.online/products" },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Products | Daeson Technologies",
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
  name: "Aylinor",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Aylinor is an AI-powered Shariah compliance and governance platform for Islamic financial institutions. It helps Shariah teams work in a more organised, consistent and auditable way, while scholars keep the final decision.",
  creator: {
    "@type": "Organization",
    name: "Daeson Technologies",
    url: "https://daesontechnologies.online",
  },
  url: "https://daesontechnologies.online/amanah-ai",
  featureList: [
    "Shariah compliance support",
    "Governance documentation",
    "Audit-ready records",
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
    name: "Aylinor",
    tagline: "Islamic Finance Operational Intelligence Platform",
    description:
      "Aylinor is an AI-powered platform designed specifically for Islamic financial institutions. It addresses the operational gap between Shariah compliance requirements and the manual, paper-heavy processes that currently govern most Islamic finance workflows.",
    problem:
      "Islamic financial institutions handle complex Shariah-governed transactions: Murabaha, Ijara, Musharaka, that require meticulous documentation, scholar review, and compliance verification. Most institutions rely on manual processes that are slow, error-prone, and create audit risk.",
    solution:
      "Aylinor reduces the administrative work around Shariah compliance and keeps a clear, auditable record, so scholars can focus on substantive jurisprudential decisions.",
    capabilities: [
      "Shariah compliance support",
      "Governance documentation",
      "Audit-ready records",
      "Scholars keep the final decision",
    ],
    collaboration: "Developed in strategic collaboration with Alhamd Shariah Advisory",
    href: "/amanah-ai",
    cta: "Explore Aylinor",
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
      "Most real estate firms operate across 5 to 10 disconnected SaaS tools, a CRM here, a reporting tool there, manual spreadsheets for investor tracking. This creates data fragmentation, manual overhead, and no real-time visibility for leadership.",
    solution:
      "An owned platform that unifies CRM, investor dashboards, deal management, payment tracking, and AI lead intelligence, with executive analytics that give leadership real operational visibility across the business.",
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
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-semibold rounded-lg transition-all"
                      style={{ backgroundColor: "var(--purple-fill)", color: "#FFFFFF", boxShadow: "0 3px 14px rgba(139,92,246,0.25)" }}
                    >
                      {product.cta} <ArrowRight size={13} />
                    </Link>
                  </div>

                  {/* Right: Capabilities */}
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
                className="inline-flex items-center gap-2 px-6 py-3.5 text-[14px] font-semibold rounded-xl"
                style={{ backgroundColor: "var(--purple-fill)", color: "#FFFFFF", boxShadow: "0 4px 20px rgba(139,92,246,0.25)" }}
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
