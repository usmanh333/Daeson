import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Insights â€” Operational Infrastructure Research & Analysis",
  description:
    "Research and analysis from Daeson Technologies on operational infrastructure, AI for business operations, real estate technology, Islamic finance AI, Murabaha workflow digitization, and enterprise workflow systems.",
  keywords: [
    "operational infrastructure research",
    "real estate AI insights",
    "Islamic finance AI research",
    "Murabaha workflow digitization",
    "enterprise workflow automation insights",
    "owned infrastructure vs SaaS",
    "AI for business operations",
    "Shariah compliance AI research",
    "Daeson Technologies insights",
  ],
  openGraph: {
    title: "Insights â€” Operational Infrastructure Research | Daeson Technologies",
    description:
      "Research and frameworks on operational infrastructure, AI for business operations, real estate technology, and Islamic finance systems from Daeson Technologies.",
    url: "https://daesontechagency.online/insights",
  },
  alternates: {
    canonical: "https://daesontechagency.online/insights",
  },
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://daesontechagency.online/insights",
  url: "https://daesontechagency.online/insights",
  name: "Insights â€” Operational Infrastructure Research",
  description:
    "Research and analysis from Daeson Technologies on operational infrastructure, AI for business operations, real estate technology, and Islamic finance systems.",
  isPartOf: { "@id": "https://daesontechagency.online/#website" },
  about: { "@id": "https://daesontechagency.online/#organization" },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Why Real Estate Firms Are Replacing SaaS Stacks with Owned Infrastructure",
        url: "https://daesontechagency.online/insights/real-estate-saas-vs-owned",
        description:
          "The era of patching together Salesforce, Excel, and email for real estate operations is ending. Forward-thinking property firms are building owned operational platforms that give them infrastructure control, data ownership, and AI capability without vendor dependency.",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "AI and Shariah Compliance: Building Infrastructure That Supports Scholars",
        url: "https://daesontechagency.online/insights/ai-shariah-compliance",
        description:
          "AI in Islamic finance is most valuable when it removes operational burden from compliance workflows â€” freeing scholars to focus on substantive jurisprudential decisions rather than manual document review.",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "What Is Operational Infrastructure? A Framework for Complex Businesses",
        url: "https://daesontechagency.online/insights/operational-infrastructure-framework",
        description:
          "Most businesses understand software. Few understand operational infrastructure â€” the layer of purpose-built systems that connect data, workflows, and intelligence across an organization.",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "The Total Cost of SaaS Dependency for Enterprise Operations",
        url: "https://daesontechagency.online/insights/saas-dependency-cost",
        description:
          "When you add up per-seat licensing, integration costs, customization limits, and the hidden cost of data fragmentation â€” most enterprise SaaS stacks are more expensive than owned infrastructure within three years.",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "AI Governance for Regulated Industries: Principles and Infrastructure",
        url: "https://daesontechagency.online/insights/ai-governance-regulated-industries",
        description:
          "As AI becomes embedded in compliance, finance, and operational workflows, the question of AI governance becomes critical â€” particularly in regulated industries like Islamic finance and real estate.",
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Investor Reporting Infrastructure for Real Estate Firms: Building vs Buying",
        url: "https://daesontechagency.online/insights/investor-reporting-real-estate",
        description:
          "Investor relations in real estate requires consistent, accurate, and timely reporting â€” but most generic tools weren't designed for this use case.",
      },
    ],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://daesontechagency.online" },
    { "@type": "ListItem", position: 2, name: "Insights", item: "https://daesontechagency.online/insights" },
  ],
};

const articles = [
  {
    category: "Real Estate Operations",
    color: "#3B6AFF",
    rawColor: "#3B6AFF",
    title: "Why Real Estate Firms Are Replacing SaaS Stacks with Owned Infrastructure",
    excerpt:
      "The era of patching together Salesforce, Excel, and email for real estate operations is ending. Forward-thinking property firms are building owned operational platforms that give them infrastructure control, data ownership, and AI capability without vendor dependency.",
    readTime: "8 min read",
    topics: ["CRM Ownership", "Real Estate AI", "Operational Infrastructure"],
    href: "/insights/real-estate-saas-vs-owned",
    available: false,
  },
  {
    category: "Islamic Finance",
    color: "#D4AF37",
    rawColor: "#D4AF37",
    title: "AI and Shariah Compliance: Building Infrastructure That Supports Scholars",
    excerpt:
      "Artificial intelligence in Islamic finance is not about replacing Shariah scholars â€” it's about building infrastructure that removes the operational burden from compliance workflows, so scholars can focus on jurisprudential judgment rather than manual document review.",
    readTime: "10 min read",
    topics: ["Amanah AI", "Shariah Compliance", "Governance Systems"],
    href: "/insights/ai-shariah-compliance",
    available: false,
  },
  {
    category: "Operational Intelligence",
    color: "#10B981",
    rawColor: "#10B981",
    title: "What Is Operational Infrastructure? A Framework for Complex Businesses",
    excerpt:
      "Most businesses understand software. Few understand operational infrastructure â€” the layer of purpose-built systems that connect data, workflows, and intelligence across an organization. This piece defines the framework and explains why it matters for complex operations.",
    readTime: "12 min read",
    topics: ["Operational Infrastructure", "Enterprise AI", "Workflow Automation"],
    href: "/insights/operational-infrastructure-framework",
    available: false,
  },
  {
    category: "Enterprise Systems",
    color: "#7B6AFF",
    rawColor: "#7B6AFF",
    title: "The Total Cost of SaaS Dependency for Enterprise Operations",
    excerpt:
      "When you add up per-seat licensing, integration costs, customization limits, and the hidden cost of data fragmentation â€” most enterprise SaaS stacks are more expensive than owned infrastructure within three years.",
    readTime: "9 min read",
    topics: ["SaaS vs Custom", "Enterprise Cost Analysis", "Build vs Buy"],
    href: "/insights/saas-dependency-cost",
    available: false,
  },
  {
    category: "AI Governance",
    color: "#EF4444",
    rawColor: "#EF4444",
    title: "AI Governance for Regulated Industries: Principles and Infrastructure",
    excerpt:
      "As AI becomes embedded in compliance, finance, and operational workflows, the question of AI governance becomes critical â€” particularly in regulated industries like Islamic finance and real estate. This piece outlines the infrastructure principles that enable responsible AI deployment.",
    readTime: "11 min read",
    topics: ["AI Governance", "Compliance Infrastructure", "Regulated Industries"],
    href: "/insights/ai-governance-regulated-industries",
    available: false,
  },
  {
    category: "Real Estate Technology",
    color: "#3B6AFF",
    rawColor: "#3B6AFF",
    title: "Investor Reporting Infrastructure for Real Estate Firms: Building vs Buying",
    excerpt:
      "Investor relations in real estate requires consistent, accurate, and timely reporting â€” but most generic tools weren't designed for this use case. We examine the build vs. buy decision for real estate investor reporting infrastructure.",
    readTime: "7 min read",
    topics: ["Investor Relations", "Real Estate CRM", "Reporting Automation"],
    href: "/insights/investor-reporting-real-estate",
    available: false,
  },
];

const geoTopics = [
  { label: "Real Estate SaaS Fatigue", color: "#3B6AFF" },
  { label: "Murabaha Workflow Digitization", color: "#D4AF37" },
  { label: "AI Lead Qualification", color: "#3B6AFF" },
  { label: "Shariah Governance Systems", color: "#D4AF37" },
  { label: "Ownership vs SaaS", color: "#10B981" },
  { label: "Investor Reporting Infrastructure", color: "#3B6AFF" },
  { label: "Operational Visibility Systems", color: "#10B981" },
  { label: "AI Governance", color: "#EF4444" },
  { label: "Brokerage Operational Intelligence", color: "#3B6AFF" },
  { label: "Islamic Finance Workflow", color: "#D4AF37" },
];

export default function InsightsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main style={{ backgroundColor: "var(--bg-page)" }} className="min-h-screen pt-24">
        <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />

        {/* Header */}
        <section className="relative max-w-7xl mx-auto px-6 pt-16 pb-16">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-widest uppercase mb-8"
            style={{ border: "1px solid var(--border)", backgroundColor: "var(--bg-surface)", color: "var(--text-muted)" }}
          >
            Insights & Research
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-end">
            <h1
              className="text-[42px] md:text-[52px] font-extrabold tracking-tight leading-[1.06]"
              style={{ color: "var(--text-primary)" }}
            >
              Thinking on{" "}
              <span style={{ color: "var(--blue)" }}>Operational Systems.</span>
            </h1>
            <p className="text-[15px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Research, frameworks, and analysis on operational infrastructure, AI for business operations,
              real estate technology, and Islamic finance systems â€” written for decision-makers, not marketers.
            </p>
          </div>

          {/* GEO answer block */}
          <div
            className="mt-8 rounded-xl p-5 border-l-4"
            style={{
              backgroundColor: "var(--bg-surface)",
              border: "1px solid var(--border)",
              borderLeftColor: "var(--blue)",
              borderLeftWidth: "3px",
            }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--blue)" }}>
              What is operational infrastructure?
            </p>
            <p className="text-[13px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Operational infrastructure refers to purpose-built digital systems that power the core workflows
              of a business â€” CRM, reporting, compliance, workflow automation, and executive analytics â€”
              designed around how the organization actually operates. Unlike generic SaaS tools, operational
              infrastructure is owned by the business and aligned to its specific data model and processes.
            </p>
          </div>
        </section>

        {/* Upcoming topics */}
        <section
          className="relative border-y py-10"
          style={{ backgroundColor: "var(--bg-surface)", borderColor: "var(--border)" }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <p
              className="text-[11px] font-semibold uppercase tracking-widest mb-5"
              style={{ color: "var(--text-faint)" }}
            >
              Topics covered in our research
            </p>
            <div className="flex flex-wrap gap-2">
              {geoTopics.map((t) => (
                <span
                  key={t.label}
                  className="px-3 py-1.5 rounded-lg text-[11px] font-semibold"
                  style={{ backgroundColor: `${t.color}10`, color: t.color, border: `1px solid ${t.color}20` }}
                >
                  {t.label}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Articles */}
        <section className="relative max-w-7xl mx-auto px-6 pb-24 pt-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <div
                key={article.title}
                className="rounded-2xl p-6 flex flex-col transition-all duration-300 group"
                style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)" }}
              >
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-semibold uppercase tracking-wider"
                    style={{ backgroundColor: `${article.rawColor}15`, color: article.color }}
                  >
                    {article.category}
                  </div>
                  <span className="text-[11px]" style={{ color: "var(--text-faint)" }}>{article.readTime}</span>
                </div>

                <h2
                  className="text-[16px] font-bold mb-3 leading-snug tracking-tight"
                  style={{ color: "var(--text-primary)" }}
                >
                  {article.title}
                </h2>
                <p
                  className="text-[13px] leading-relaxed mb-5 flex-1"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {article.excerpt}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {article.topics.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-md text-[10px]"
                      style={{ backgroundColor: "var(--bg-elevated)", border: "1px solid var(--border)", color: "var(--text-secondary)" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {article.available ? (
                  <Link
                    href={article.href}
                    className="inline-flex items-center gap-2 text-[13px] font-semibold transition-colors"
                    style={{ color: article.color }}
                  >
                    Read article <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                ) : (
                  <span className="text-[12px] font-medium" style={{ color: "var(--text-faint)" }}>Publishing soon</span>
                )}
              </div>
            ))}
          </div>

          {/* Stay in touch */}
          <div
            className="mt-16 rounded-2xl p-8 text-center max-w-2xl mx-auto"
            style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)" }}
          >
            <h2
              className="text-[22px] font-bold mb-3 tracking-tight"
              style={{ color: "var(--text-primary)" }}
            >
              Get notified when articles publish
            </h2>
            <p className="text-[14px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              We publish research on operational infrastructure, AI systems, and enterprise technology.
              No noise â€” just high-signal thinking on the topics covered above.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-white text-[14px] font-semibold rounded-xl transition-colors"
                style={{ backgroundColor: "var(--blue)" }}
              >
                Stay in Touch <ArrowRight size={14} />
              </Link>
              <Link
                href="/real-estate"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-[14px] font-semibold rounded-xl transition-all duration-200"
                style={{ border: "1px solid var(--border)", color: "var(--text-secondary)" }}
              >
                Real Estate Infrastructure <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
