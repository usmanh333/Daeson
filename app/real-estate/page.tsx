import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Real Estate Operational Infrastructure â€” Owned CRM, Investor Dashboards & AI Analytics",
  description:
    "Daeson Technologies builds owned operational infrastructure for real estate firms â€” replacing fragmented SaaS with unified CRM, investor reporting dashboards, AI lead intelligence, payment tracking, and executive analytics. Designed for portfolio complexity.",
  keywords: [
    "real estate operational infrastructure",
    "real estate CRM software",
    "investor dashboard real estate",
    "AI lead intelligence real estate",
    "property management platform",
    "real estate workflow automation",
    "brokerage operations software",
    "real estate AI analytics",
    "owned real estate platform",
    "Daeson Technologies real estate",
  ],
  openGraph: {
    title: "Real Estate Operational Infrastructure | Daeson Technologies",
    description:
      "Purpose-built operational infrastructure for real estate firms â€” owned CRM, investor dashboards, AI lead intelligence, and executive analytics. No SaaS subscriptions.",
    url: "https://daesontechagency.online/real-estate",
  },
  alternates: {
    canonical: "https://daesontechagency.online/real-estate",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://daesontechagency.online/real-estate#service",
  name: "Real Estate Operational Infrastructure",
  serviceType: "Custom Software Development",
  provider: {
    "@type": "Organization",
    name: "Daeson Technologies",
    url: "https://daesontechagency.online",
    "@id": "https://daesontechagency.online/#organization",
  },
  areaServed: ["UAE", "Saudi Arabia", "Canada", "United States", "Pakistan", "United Kingdom"],
  description:
    "Purpose-built operational infrastructure for real estate firms â€” replacing fragmented SaaS tools with owned platforms covering CRM, investor dashboards, AI lead intelligence, payment tracking, and executive analytics.",
  offers: {
    "@type": "Offer",
    name: "Real Estate Operations Platform",
    description:
      "Owned AI-powered operational platform for real estate and property development firms with portfolio complexity, investor relationships, and multi-market operations.",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Real Estate Infrastructure Modules",
    itemListElement: [
      { "@type": "Offer", name: "AI-Powered Lead Intelligence" },
      { "@type": "Offer", name: "Unified Real Estate CRM" },
      { "@type": "Offer", name: "Investor Dashboard & Reporting" },
      { "@type": "Offer", name: "Payment & Project Tracking" },
      { "@type": "Offer", name: "Document Management" },
      { "@type": "Offer", name: "Executive Analytics" },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why do real estate brokerages struggle with fragmented operations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most real estate brokerages use 5â€“10 disconnected tools for CRM, lead management, investor communication, project tracking, and reporting â€” none of which were built for real estate. Data lives in silos, reporting requires manual aggregation, and leadership has no real-time visibility across operations. This fragmentation slows execution, reduces investor confidence, and creates operational risk.",
      },
    },
    {
      "@type": "Question",
      name: "How does AI lead intelligence work in real estate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI lead intelligence for real estate automatically qualifies and prioritizes incoming leads based on behavioral signals, property interest patterns, budget indicators, and engagement data. Instead of agents manually working every lead equally, the system surfaces high-intent prospects first, triggers relevant follow-up sequences, and flags leads that are about to go cold â€” improving conversion rates without increasing headcount.",
      },
    },
    {
      "@type": "Question",
      name: "What is real estate operational infrastructure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Real estate operational infrastructure refers to owned, purpose-built digital systems that power the core operations of a real estate firm â€” CRM, deal management, investor reporting, payment tracking, document management, and executive analytics â€” integrated into a single platform aligned to how the firm actually operates. Unlike generic SaaS, it is owned by the business, built around their specific workflows, and designed to scale with portfolio growth.",
      },
    },
    {
      "@type": "Question",
      name: "How does investor reporting work in an operational infrastructure platform?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Investor reporting in an operational infrastructure platform is automated and real-time â€” rather than compiled manually from spreadsheets. Portfolio performance, payment schedules, milestone progress, and occupancy data are aggregated automatically into investor dashboards. Reports are generated on schedule without manual work, and investors access their information directly rather than waiting for email updates.",
      },
    },
    {
      "@type": "Question",
      name: "Why build a real estate CRM instead of buying Salesforce or HubSpot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Generic CRMs like Salesforce and HubSpot are built for general sales pipelines â€” not real estate deal cycles, investor relations, or property-specific workflows. Customizing them to work for real estate typically requires expensive consultants, produces fragile implementations, and still results in compromises. A purpose-built CRM is designed from the workflow outward â€” investor fields, deal stages, portfolio structure, and reporting are built in natively, not bolted on.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://daesontechagency.online" },
    { "@type": "ListItem", position: 2, name: "Real Estate Infrastructure", item: "https://daesontechagency.online/real-estate" },
  ],
};

const features = [
  {
    title: "AI-Powered Lead Intelligence",
    description:
      "Qualify and prioritize leads automatically using behavioral signals and engagement data. The system surfaces high-intent prospects first, triggers relevant follow-up sequences, and flags leads that are about to go cold â€” without manual scoring.",
  },
  {
    title: "Unified CRM",
    description:
      "One system for all deals, contacts, and portfolio interactions â€” designed around real estate deal cycles, investor relationships, and property-specific workflows. Not adapted from a generic sales pipeline.",
  },
  {
    title: "Investor Dashboard",
    description:
      "Real-time portfolio visibility for investors. Automated reports, milestone updates, payment tracking, and occupancy data â€” accessible directly without manual emails or spreadsheet exports.",
  },
  {
    title: "Payment & Project Tracking",
    description:
      "Track payment schedules, construction milestones, and project status across all active developments in one place. Payment receipts, outstanding balances, and milestone alerts are managed automatically.",
  },
  {
    title: "Document Management",
    description:
      "Centralized, searchable document storage with version control, e-signature integration, and access controls â€” organized around deals, investors, and properties rather than generic folders.",
  },
  {
    title: "Executive Analytics",
    description:
      "AI-powered operational dashboards that give leadership real-time visibility across portfolio performance, deal pipeline, team activity, and investor relations â€” from a single executive view.",
  },
];

const faqs = [
  {
    q: "Why do real estate brokerages struggle with fragmented operations?",
    a: "Most brokerages use 5â€“10 disconnected tools for CRM, lead management, investor communication, project tracking, and reporting â€” none built for real estate. Data lives in silos, reporting requires manual aggregation, and leadership has no real-time visibility. This fragmentation slows execution, reduces investor confidence, and creates operational risk that scales with portfolio growth.",
  },
  {
    q: "How does AI lead intelligence work in real estate?",
    a: "AI lead intelligence automatically qualifies and prioritizes incoming leads based on behavioral signals, property interest patterns, budget indicators, and engagement data. Instead of agents working every lead equally, the system surfaces high-intent prospects first, triggers relevant follow-up sequences, and flags leads about to go cold â€” improving conversion rates without increasing headcount.",
  },
  {
    q: "Why build a real estate CRM instead of buying Salesforce or HubSpot?",
    a: "Generic CRMs are built for general sales pipelines â€” not real estate deal cycles, investor relations, or property-specific workflows. Customizing them for real estate typically requires expensive consultants, produces fragile implementations, and still results in compromises. A purpose-built CRM is designed from the workflow outward â€” investor fields, deal stages, portfolio structure, and reporting are native, not bolted on.",
  },
  {
    q: "How does investor reporting work in an operational infrastructure platform?",
    a: "Investor reporting is automated and real-time. Portfolio performance, payment schedules, milestone progress, and occupancy data are aggregated automatically into investor dashboards. Reports generate on schedule without manual work, and investors access their information directly rather than waiting for email updates â€” eliminating a major source of operational overhead for growing firms.",
  },
  {
    q: "What real estate markets does Daeson Technologies serve?",
    a: "Daeson Technologies builds operational infrastructure for real estate firms operating in UAE, GCC, Saudi Arabia, Canada, and international markets. Our platforms are designed for multi-market, multi-currency operations with configurable reporting for different regulatory environments.",
  },
];

export default function RealEstatePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main style={{ backgroundColor: "var(--bg-page)" }} className="min-h-screen pt-24">
        <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
        <div
          className="absolute top-24 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(59,106,255,0.04) 0%, transparent 70%)", filter: "blur(120px)" }}
        />

        {/* Hero */}
        <section className="relative max-w-7xl mx-auto px-6 pt-16 pb-20">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-widest uppercase mb-8"
              style={{ border: "1px solid var(--blue-border)", backgroundColor: "var(--blue-muted)", color: "var(--blue)" }}
            >
              Real Estate Infrastructure
            </div>
            <h1
              className="text-[42px] md:text-[56px] font-extrabold tracking-tight leading-[1.06] mb-6"
              style={{ color: "var(--text-primary)" }}
            >
              Operational Infrastructure for{" "}
              <span style={{ color: "var(--blue)" }}>Real Estate Firms.</span>
            </h1>
            <p
              className="text-[17px] leading-relaxed mb-6 max-w-2xl"
              style={{ color: "var(--text-secondary)" }}
            >
              Real estate firms with portfolio complexity, investor relationships, and multi-market operations
              need owned infrastructure â€” not another SaaS subscription built for generic sales teams.
            </p>

            {/* GEO answer block */}
            <div
              className="rounded-xl p-5 mb-8"
              style={{
                backgroundColor: "var(--bg-surface)",
                border: "1px solid var(--border)",
                borderLeftColor: "var(--blue)",
                borderLeftWidth: "3px",
              }}
            >
              <p className="text-[11px] font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--blue)" }}>
                What is real estate operational infrastructure?
              </p>
              <p className="text-[13px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Real estate operational infrastructure refers to owned, purpose-built digital systems that
                power the core operations of a property firm â€” CRM, investor reporting, payment tracking,
                AI lead intelligence, and executive analytics â€” integrated into a single platform aligned
                to how the firm actually operates. Unlike generic SaaS, it is owned outright and built
                around specific workflows.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-white text-[14px] font-semibold rounded-xl transition-colors"
                style={{ backgroundColor: "var(--blue)" }}
              >
                Schedule Consultation <ArrowRight size={14} />
              </Link>
              <Link
                href="/insights"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-[14px] font-semibold rounded-xl transition-all duration-200"
                style={{ border: "1px solid var(--border)", color: "var(--text-secondary)" }}
              >
                Read Research <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* Problem vs Solution */}
        <section
          className="relative py-20 border-y"
          style={{ backgroundColor: "var(--bg-surface)", borderColor: "var(--border)" }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-10">
              <h2
                className="text-[28px] font-extrabold tracking-tight mb-3"
                style={{ color: "var(--text-primary)" }}
              >
                Why Real Estate Firms Struggle with Fragmented Systems
              </h2>
              <p className="text-[14px] max-w-xl leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                The core problem is not a lack of software â€” it is software that was never designed for
                how real estate firms actually operate.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-widest mb-5" style={{ color: "#EF4444" }}>
                  The Fragmentation Problem
                </p>
                <div className="space-y-3">
                  {[
                    "CRM not built for real estate deal cycles or portfolio management",
                    "Investor updates compiled manually and sent via email",
                    "Payment tracking and rent schedules managed in spreadsheets",
                    "Lead data siloed across multiple platforms with no unified view",
                    "No AI analytics or portfolio intelligence for leadership",
                    "Complete dependency on SaaS vendor pricing and feature decisions",
                  ].map((p) => (
                    <div key={p} className="flex items-start gap-3 text-[14px]" style={{ color: "var(--text-secondary)" }}>
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500/60 shrink-0" />
                      {p}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-widest mb-5" style={{ color: "var(--blue)" }}>
                  The Infrastructure Approach
                </p>
                <div className="space-y-3">
                  {[
                    "CRM designed around your deal workflow, portfolio structure, and investor model",
                    "Investor dashboards with real-time data â€” no manual reporting",
                    "Integrated payment schedules and milestone tracking across all projects",
                    "Unified lead intelligence across all acquisition channels",
                    "AI analytics and executive reporting built into the platform",
                    "Owned codebase â€” no vendor dependency, no per-seat licensing",
                  ].map((s) => (
                    <div key={s} className="flex items-start gap-3 text-[14px]" style={{ color: "var(--text-secondary)" }}>
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "var(--blue)" }} />
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section className="relative py-16" style={{ backgroundColor: "var(--bg-page)" }}>
          <div className="max-w-7xl mx-auto px-6">
            <h2
              className="text-[24px] font-bold tracking-tight mb-8"
              style={{ color: "var(--text-primary)" }}
            >
              Owned Infrastructure vs SaaS Stack
            </h2>
            <div
              className="rounded-2xl overflow-hidden"
              style={{ border: "1px solid var(--border)" }}
            >
              <div
                className="grid grid-cols-3 px-6 py-3 text-[11px] font-semibold uppercase tracking-widest"
                style={{ backgroundColor: "var(--bg-card)", color: "var(--text-faint)" }}
              >
                <span>Factor</span>
                <span style={{ color: "var(--blue)" }}>Owned Infrastructure</span>
                <span>Generic SaaS Stack</span>
              </div>
              {[
                { factor: "Data ownership", owned: "Client owns all data and schemas", saas: "Data held by vendor, export limitations" },
                { factor: "Pricing model", owned: "One-time build investment", saas: "Per-seat recurring fees, tier upgrades" },
                { factor: "Workflow alignment", owned: "Built around your specific processes", saas: "Your processes adapt to the software" },
                { factor: "AI capability", owned: "Trained on your operational data", saas: "Generic AI features, no customization" },
                { factor: "Integration", owned: "Built to connect your entire stack", saas: "Connector fees, Zapier workarounds" },
                { factor: "Long-term cost", owned: "Lower after 2â€“3 years", saas: "Increases with team growth and features" },
              ].map((row, i) => (
                <div
                  key={row.factor}
                  className="grid grid-cols-3 px-6 py-4 text-[13px] border-t"
                  style={{
                    borderColor: "var(--border)",
                    backgroundColor: i % 2 === 0 ? "var(--bg-surface)" : "var(--bg-page)",
                  }}
                >
                  <span className="font-medium" style={{ color: "var(--text-primary)" }}>{row.factor}</span>
                  <span style={{ color: "var(--text-secondary)" }}>{row.owned}</span>
                  <span style={{ color: "var(--text-faint)" }}>{row.saas}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section
          className="relative py-20 border-y"
          style={{ backgroundColor: "var(--bg-surface)", borderColor: "var(--border)" }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-widest uppercase mb-5"
                style={{ border: "1px solid var(--blue-border)", backgroundColor: "var(--blue-muted)", color: "var(--blue)" }}
              >
                Platform Modules
              </div>
              <h2
                className="text-[30px] md:text-[38px] font-extrabold tracking-tight mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                Built for Real Estate Operations
              </h2>
              <p className="text-[15px] max-w-xl leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Every module is designed around real estate workflows â€” not adapted from generic enterprise software.
                The result is infrastructure that works the way your business works.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="rounded-2xl p-6 transition-all duration-300"
                  style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}
                >
                  <div
                    className="w-2 h-2 rounded-full mb-4"
                    style={{ backgroundColor: "var(--blue)" }}
                  />
                  <h3
                    className="text-[15px] font-bold mb-3 tracking-tight"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {f.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="relative py-20" style={{ backgroundColor: "var(--bg-page)" }}>
          <div className="max-w-3xl mx-auto px-6">
            <div className="mb-10">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-widest uppercase mb-5"
                style={{ border: "1px solid var(--border)", backgroundColor: "var(--bg-surface)", color: "var(--text-muted)" }}
              >
                FAQ
              </div>
              <h2
                className="text-[28px] font-bold tracking-tight"
                style={{ color: "var(--text-primary)" }}
              >
                Questions About Real Estate Infrastructure
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-xl p-6"
                  style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)" }}
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
        <section
          className="relative pb-24 border-t"
          style={{ backgroundColor: "var(--bg-page)", borderColor: "var(--border)" }}
        >
          <div className="max-w-3xl mx-auto px-6 pt-16 text-center">
            <div
              className="rounded-2xl p-10"
              style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)" }}
            >
              <h2
                className="text-[28px] font-bold mb-4 tracking-tight"
                style={{ color: "var(--text-primary)" }}
              >
                Own Your Real Estate Operations Platform
              </h2>
              <p className="text-[15px] leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
                Schedule a complimentary discovery session. We&apos;ll map your current systems and present
                an infrastructure approach tailored to your portfolio and operational needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-white text-[14px] font-semibold rounded-xl transition-colors"
                  style={{ backgroundColor: "var(--blue)" }}
                >
                  Schedule Consultation <ArrowRight size={14} />
                </Link>
                <Link
                  href="/insights"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[14px] font-semibold rounded-xl transition-all duration-200"
                  style={{ border: "1px solid var(--border)", color: "var(--text-secondary)" }}
                >
                  Read Research <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
