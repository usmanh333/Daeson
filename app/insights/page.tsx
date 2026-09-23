import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Insights — Infrastructure Research",
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
    title: "Insights — Operational Infrastructure Research | Daeson Technologies",
    description:
      "Research and frameworks on operational infrastructure, AI for business operations, real estate technology, and Islamic finance systems from Daeson Technologies.",
    url: "https://daesontechnologies.online/insights",
  },
  alternates: {
    canonical: "https://daesontechnologies.online/insights",
  },
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://daesontechnologies.online/insights",
  url: "https://daesontechnologies.online/insights",
  name: "Insights — Operational Infrastructure Research",
  description:
    "Research and analysis from Daeson Technologies on operational infrastructure, AI for business operations, real estate technology, and Islamic finance systems.",
  dateModified: new Date().toISOString(),
  author: {
    "@type": "Organization",
    "@id": "https://daesontechnologies.online/#organization",
    name: "Daeson Technologies",
  },
  isPartOf: { "@id": "https://daesontechnologies.online/#website" },
  about: { "@id": "https://daesontechnologies.online/#organization" },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Why Real Estate Firms Are Replacing SaaS Stacks with Owned Infrastructure",
        url: "https://daesontechnologies.online/insights/real-estate-saas-vs-owned",
        description:
          "The era of patching together Salesforce, Excel, and email for real estate operations is ending. Forward-thinking property firms are building owned operational platforms that give them infrastructure control, data ownership, and AI capability without vendor dependency.",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "AI and Shariah Compliance: Building Infrastructure That Supports Scholars",
        url: "https://daesontechnologies.online/insights/ai-shariah-compliance",
        description:
          "AI in Islamic finance is most valuable when it removes operational burden from compliance workflows — freeing scholars to focus on substantive jurisprudential decisions rather than manual document review.",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "What Is Operational Infrastructure? A Framework for Complex Businesses",
        url: "https://daesontechnologies.online/insights/operational-infrastructure-framework",
        description:
          "Most businesses understand software. Few understand operational infrastructure — the layer of purpose-built systems that connect data, workflows, and intelligence across an organization.",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "The Total Cost of SaaS Dependency for Enterprise Operations",
        url: "https://daesontechnologies.online/insights/saas-dependency-cost",
        description:
          "When you add up per-seat licensing, integration costs, customization limits, and the hidden cost of data fragmentation — most enterprise SaaS stacks are more expensive than owned infrastructure within three years.",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "AI Governance for Regulated Industries: Principles and Infrastructure",
        url: "https://daesontechnologies.online/insights/ai-governance-regulated-industries",
        description:
          "As AI becomes embedded in compliance, finance, and operational workflows, the question of AI governance becomes critical — particularly in regulated industries like Islamic finance and real estate.",
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Investor Reporting Infrastructure for Real Estate Firms: Building vs Buying",
        url: "https://daesontechnologies.online/insights/investor-reporting-real-estate",
        description:
          "Investor relations in real estate requires consistent, accurate, and timely reporting — but most generic tools weren't designed for this use case.",
      },
      {
        "@type": "ListItem",
        position: 7,
        name: "When Does a Real Estate Operating Platform Beat One-Off Property Deals?",
        url: "https://daesontechnologies.online/insights/real-estate-operating-platform-vs-one-off-deals",
        description:
          "A framework for investors and asset managers: the five signals that indicate it's time to build real estate operating infrastructure instead of running one-off deals.",
      },
      {
        "@type": "ListItem",
        position: 8,
        name: "Why the Future of Islamic Finance Depends on Shariah-Compliant Software",
        url: "https://daesontechnologies.online/insights/shariah-compliant-software-future",
        description:
          "Why the future of Islamic finance depends on Shariah-compliant software — and how Aylinor is building the infrastructure to support it, starting with Murabaha financing.",
      },
      {
        "@type": "ListItem",
        position: 9,
        name: "Home 1.0: Building Happier Tenants, Better Communities",
        url: "https://daesontechnologies.online/insights/home-1-0-residential-property-management",
        description:
          "Home 1.0 is Daeson Technologies' AI-powered residential property management platform — built for happier tenants, better living communities, and smarter operations.",
      },
      {
        "@type": "ListItem",
        position: 10,
        name: "The Murabaha Contract Review Bottleneck",
        url: "https://daesontechnologies.online/insights/murabaha-contract-review-bottleneck",
        description:
          "Why manual Murabaha contract review is the single biggest operational bottleneck in Islamic banking, and what AI-assisted review changes without replacing scholars.",
      },
      {
        "@type": "ListItem",
        position: 11,
        name: "Why Shariah Governance Needs Audit Trails",
        url: "https://daesontechnologies.online/insights/shariah-governance-audit-trail",
        description:
          "Undocumented Shariah governance decisions are a regulatory exposure, not just an inefficiency. Why immutable audit trails matter as much as the ruling itself.",
      },
      {
        "@type": "ListItem",
        position: 12,
        name: "Multi-Market Islamic Finance Compliance",
        url: "https://daesontechnologies.online/insights/multi-market-islamic-finance-compliance",
        description:
          "Islamic financial institutions operating across the GCC, Pakistan, and the UK face different regulators and reporting formats for the same underlying transactions.",
      },
      {
        "@type": "ListItem",
        position: 13,
        name: "How to Choose Shariah Compliance Software",
        url: "https://daesontechnologies.online/insights/choosing-shariah-compliance-software",
        description:
          "A practical checklist for Islamic financial institutions evaluating Shariah compliance software — what actually matters beyond the feature list.",
      },
      {
        "@type": "ListItem",
        position: 14,
        name: "AAOIFI & IFSB Standards in Compliance Software",
        url: "https://daesontechnologies.online/insights/aaoifi-ifsb-compliance-software",
        description:
          "Generic compliance checklists don't understand AAOIFI or IFSB standards. Why Shariah compliance software needs standards-awareness built into its architecture.",
      },
      {
        "@type": "ListItem",
        position: 15,
        name: "More Investors Means More Scrutiny",
        url: "https://daesontechnologies.online/insights/investor-growth-demands-transparency",
        description:
          "Every investor you add doesn't just add capital — it adds a relationship that expects its own visibility. Why investor growth breaks manual reporting.",
      },
      {
        "@type": "ListItem",
        position: 16,
        name: "What Breaks First When Sales Outpaces Your Systems",
        url: "https://daesontechnologies.online/insights/sales-growth-needs-management-systems",
        description:
          "More sales is supposed to be the good problem. Why revenue growth without an internal management system underneath it becomes the actual bottleneck.",
      },
      {
        "@type": "ListItem",
        position: 17,
        name: "The Hidden Tax of Growing Your Team Across Tools",
        url: "https://daesontechnologies.online/insights/team-growth-tool-sprawl-tax",
        description:
          "Every new hire in a growing real estate firm inherits 5 to 10 disconnected tools and the phone calls needed to keep them in sync.",
      },
      {
        "@type": "ListItem",
        position: 18,
        name: "AI Is No Longer a Luxury for Small Property Owners",
        url: "https://daesontechnologies.online/insights/ai-property-management-software-uae",
        description:
          "AI-powered property management software for UAE landlords and property managers — tenants, rent, maintenance, and leases in one platform. 30-day free trial.",
      },
      {
        "@type": "ListItem",
        position: 19,
        name: "What Is Islamic Banking Software and Why Does It Matter?",
        url: "https://daesontechnologies.online/insights/islamic-banking-software-guide",
        description:
          "What Islamic banking software actually needs to support — financing workflows, Shariah governance, audit trails and AAOIFI-aligned compliance — and how to evaluate vendors.",
      },
      {
        "@type": "ListItem",
        position: 20,
        name: "How Shariah-Compliant Banking Software Supports Modern Financial Institutions",
        url: "https://daesontechnologies.online/insights/shariah-compliant-banking-software",
        description:
          "How Shariah-compliant banking software supports modern Islamic financial institutions — governance, contract-level review, and where AI can responsibly help.",
      },
      {
        "@type": "ListItem",
        position: 21,
        name: "Choosing the Best Islamic Banking Software for Commercial Banks",
        url: "https://daesontechnologies.online/insights/best-islamic-banking-software-commercial-banks",
        description:
          "A practical framework for commercial banks evaluating Islamic banking software — product coverage, core banking integration, Shariah governance, security and vendor transparency.",
      },
      {
        "@type": "ListItem",
        position: 22,
        name: "What to Check Before Signing a Long-Term Real Estate Technology Contract",
        url: "https://daesontechnologies.online/insights/real-estate-technology-contract-checklist",
        description:
          "Uptime, data ownership, backups, support, pricing and integration — a practical checklist before committing to a long-term real estate technology contract.",
      },
      {
        "@type": "ListItem",
        position: 23,
        name: "What Buyers and Investors Should Compare Across UAE Property Developers",
        url: "https://daesontechnologies.online/insights/uae-property-developer-visibility",
        description:
          "A practical framework for comparing UAE property developer projects, payment plans, fees, transparency and investor visibility.",
      },
      {
        "@type": "ListItem",
        position: 24,
        name: "Murabaha Financing Software: What It Needs to Actually Support",
        url: "https://daesontechnologies.online/insights/murabaha-financing-software",
        description:
          "Murabaha financing software has to manage a real sale structure, not a relabeled loan — what asset ownership sequencing, profit disclosure and documentation actually require.",
      },
      {
        "@type": "ListItem",
        position: 25,
        name: "Islamic Banking Software Vendors: What to Ask Before Signing",
        url: "https://daesontechnologies.online/insights/islamic-banking-software-vendors",
        description:
          "A short vendor-evaluation guide for Islamic banking software — what to ask about product coverage, Shariah governance, customization and data control.",
      },
      {
        "@type": "ListItem",
        position: 26,
        name: "Islamic Banking Software for Financial Institutions: Beyond the Bank",
        url: "https://daesontechnologies.online/insights/islamic-banking-software-financial-institutions",
        description:
          "Islamic banking software isn't only for banks. What Islamic windows, fintechs, and other financial institutions should look for beyond core banking.",
      },
      {
        "@type": "ListItem",
        position: 27,
        name: "Islamic Banking Software Solutions: Core Modules Explained",
        url: "https://daesontechnologies.online/insights/islamic-banking-software-solutions",
        description:
          "A short breakdown of the core modules that make up Islamic banking software solutions — financing workflows, governance, audit trails and reporting.",
      },
      {
        "@type": "ListItem",
        position: 28,
        name: "How to Vet an Islamic Banking Software Provider",
        url: "https://daesontechnologies.online/insights/islamic-banking-software-provider",
        description:
          "What separates a credible Islamic banking software provider from one that has simply relabeled a conventional platform — a short vetting guide.",
      },
      {
        "@type": "ListItem",
        position: 29,
        name: "Islamic Retail Banking Software: What Customer-Facing Products Need",
        url: "https://daesontechnologies.online/insights/islamic-retail-banking-software",
        description:
          "Islamic retail banking software has to support customer-facing financing products like Murabaha home finance and Ijarah — with documentation and disclosure built in.",
      },
      {
        "@type": "ListItem",
        position: 30,
        name: "Islamic Core Banking Software vs. a Shariah Compliance Layer",
        url: "https://daesontechnologies.online/insights/islamic-core-banking-software",
        description:
          "Islamic core banking software and Shariah compliance intelligence solve different problems. What each one actually covers, and when you need both.",
      },
    ],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://daesontechnologies.online" },
    { "@type": "ListItem", position: 2, name: "Insights", item: "https://daesontechnologies.online/insights" },
  ],
};

const articles = [
  {
    category: "Real Estate Operations",
    color: "var(--blue)",
    rawColor: "#888888",
    title: "Why Real Estate Firms Are Replacing SaaS Stacks with Owned Infrastructure",
    excerpt:
      "The era of patching together Salesforce, Excel, and email for real estate operations is ending. Forward-thinking property firms are building owned operational platforms that give them infrastructure control, data ownership, and AI capability without vendor dependency.",
    readTime: "8 min read",
    topics: ["CRM Ownership", "Real Estate AI", "Operational Infrastructure"],
    href: "/insights/real-estate-saas-vs-owned",
  },
  {
    category: "Islamic Finance",
    color: "var(--gold)",
    rawColor: "#B9912F",
    title: "AI and Shariah Compliance: Building Infrastructure That Supports Scholars",
    excerpt:
      "Artificial intelligence in Islamic finance is not about replacing Shariah scholars — it is about building infrastructure that removes operational burden from compliance workflows, so scholars can focus on jurisprudential judgment rather than manual document review.",
    readTime: "10 min read",
    topics: ["Aylinor", "Shariah Compliance", "Governance Systems"],
    href: "/insights/ai-shariah-compliance",
  },
  {
    category: "Founder Insight",
    color: "var(--text-secondary)",
    rawColor: "#888888",
    title: "Islamic Finance Has a Technology Gap",
    excerpt:
      "A $3 trillion industry still running on spreadsheets and manual approval chains. Founder Mahnoor Zafar examines why Islamic finance institutions have fallen behind on operational technology — and what closing the gap actually requires.",
    readTime: "6 min read",
    topics: ["Islamic Finance", "Operational Technology", "Fintech Infrastructure"],
    href: "/insights/islamic-finance-technology-gap",
  },
  {
    category: "Real Estate Operations",
    color: "var(--blue)",
    rawColor: "#888888",
    title: "When Does a Real Estate Operating Platform Beat One-Off Property Deals?",
    excerpt:
      "A framework for investors and asset managers: the five signals that indicate it's time to build real estate operating infrastructure instead of running deal-by-deal — opaque comps, deal sourcing, rate volatility, slow diligence, and fragmented LP reporting.",
    readTime: "7 min read",
    topics: ["Deal Flow", "LP Reporting", "Asset Management"],
    href: "/insights/real-estate-operating-platform-vs-one-off-deals",
  },
  {
    category: "Islamic Finance",
    color: "var(--gold)",
    rawColor: "#B9912F",
    title: "Why the Future of Islamic Finance Depends on Shariah-Compliant Software",
    excerpt:
      "Most Shariah compliance processes are still heavily manual. As Islamic finance goes digital, governance has to become structured, auditable software — this is why Daeson Technologies is building Aylinor, starting with Murabaha financing.",
    readTime: "6 min read",
    topics: ["Aylinor", "Shariah Compliance", "Islamic Banking Software"],
    href: "/insights/shariah-compliant-software-future",
  },
  {
    category: "Real Estate Operations",
    color: "var(--blue)",
    rawColor: "#888888",
    title: "Home 1.0: Building Happier Tenants, Better Communities",
    excerpt:
      "Home 1.0 is Daeson Technologies' AI-powered residential property management platform — unifying resident communication, maintenance, leasing, and payments into one owned system instead of spreadsheets and WhatsApp groups.",
    readTime: "6 min read",
    topics: ["Home 1.0", "PropTech", "Property Management"],
    href: "/insights/home-1-0-residential-property-management",
  },
  {
    category: "Islamic Finance",
    color: "var(--gold)",
    rawColor: "#B9912F",
    title: "The Murabaha Contract Review Bottleneck",
    excerpt:
      "Murabaha is the most common Islamic financing structure — and at most institutions, still the most manually reviewed. Why review capacity doesn't scale with volume, and what changes when it's structured instead of manual.",
    readTime: "5 min read",
    topics: ["Murabaha", "Aylinor", "Shariah Compliance"],
    href: "/insights/murabaha-contract-review-bottleneck",
  },
  {
    category: "Islamic Finance",
    color: "var(--gold)",
    rawColor: "#B9912F",
    title: "Why Shariah Governance Needs Audit Trails",
    excerpt:
      "A compliant decision that isn't documented is functionally indistinguishable, to a regulator, from a decision that was never made. Why immutable, contract-linked audit trails matter as much as the ruling itself.",
    readTime: "5 min read",
    topics: ["Shariah Governance", "Audit Trail", "Aylinor"],
    href: "/insights/shariah-governance-audit-trail",
  },
  {
    category: "Islamic Finance",
    color: "var(--gold)",
    rawColor: "#B9912F",
    title: "Multi-Market Islamic Finance Compliance",
    excerpt:
      "Institutions operating across the GCC, Pakistan, and the UK face different regulators and report formats for the same underlying transaction. Why one canonical compliance record beats parallel record-keeping.",
    readTime: "6 min read",
    topics: ["Multi-Market Compliance", "Aylinor", "Regulatory Reporting"],
    href: "/insights/multi-market-islamic-finance-compliance",
  },
  {
    category: "Islamic Finance",
    color: "var(--gold)",
    rawColor: "#B9912F",
    title: "How to Choose Shariah Compliance Software",
    excerpt:
      "A practical checklist for what to verify before signing a long-term vendor contract — audit trail integrity, multi-jurisdiction support, scholar workflow, uptime guarantees, and data ownership.",
    readTime: "7 min read",
    topics: ["Buyer's Guide", "Shariah Compliance", "Aylinor"],
    href: "/insights/choosing-shariah-compliance-software",
  },
  {
    category: "Islamic Finance",
    color: "var(--gold)",
    rawColor: "#B9912F",
    title: "AAOIFI & IFSB Standards in Compliance Software",
    excerpt:
      "Generic compliance checklists don't understand AAOIFI or IFSB standards. Why standards-awareness has to be architecture, not a checklist bolted onto conventional fintech software.",
    readTime: "6 min read",
    topics: ["AAOIFI", "IFSB", "Aylinor"],
    href: "/insights/aaoifi-ifsb-compliance-software",
  },
  {
    category: "Founder Insight",
    color: "var(--text-secondary)",
    rawColor: "#888888",
    title: "More Investors Means More Scrutiny",
    excerpt:
      "Every investor you add doesn't just add capital — it adds a relationship that expects its own visibility. Why investor growth breaks manual reporting, and what real-time transparency actually requires.",
    readTime: "5 min read",
    topics: ["Investor Relations", "LuxeProperty AI", "Transparency"],
    href: "/insights/investor-growth-demands-transparency",
  },
  {
    category: "Founder Insight",
    color: "var(--text-secondary)",
    rawColor: "#888888",
    title: "What Breaks First When Sales Outpaces Your Systems",
    excerpt:
      "More sales is supposed to be the good problem. Without an internal management system underneath it, revenue growth just means more manual work and leadership decisions made on stale data.",
    readTime: "5 min read",
    topics: ["Internal Management Systems", "LuxeProperty AI", "Sales Operations"],
    href: "/insights/sales-growth-needs-management-systems",
  },
  {
    category: "Founder Insight",
    color: "var(--text-secondary)",
    rawColor: "#888888",
    title: "The Hidden Tax of Growing Your Team Across Tools",
    excerpt:
      "A founder juggling 5 to 10 disconnected tools can hold it together from memory. Once a team grows, that coordination becomes phone calls and asking everyone individually — here's the actual fix.",
    readTime: "5 min read",
    topics: ["Tool Sprawl", "LuxeProperty AI", "Team Operations"],
    href: "/insights/team-growth-tool-sprawl-tax",
  },
  {
    category: "Product Announcement",
    color: "var(--blue)",
    rawColor: "#888888",
    title: "AI Is No Longer a Luxury for Small Property Owners",
    excerpt:
      "Why we built Home 1.0 for the owners and property managers still doing too much manually — AI-assisted property management for UAE landlords, with a 30-day free trial.",
    readTime: "8 min read",
    topics: ["Home 1.0", "AI Property Management", "UAE"],
    href: "/insights/ai-property-management-software-uae",
  },
  {
    category: "Islamic Finance",
    color: "var(--gold)",
    rawColor: "#B9912F",
    title: "What Is Islamic Banking Software and Why Does It Matter?",
    excerpt:
      "What Islamic banking software actually needs to support — financing workflows, Shariah governance, audit trails and AAOIFI-aligned compliance — and how to evaluate vendors.",
    readTime: "9 min read",
    topics: ["Islamic Banking Software", "AAOIFI", "Aylinor"],
    href: "/insights/islamic-banking-software-guide",
  },
  {
    category: "Islamic Finance",
    color: "var(--gold)",
    rawColor: "#B9912F",
    title: "How Shariah-Compliant Banking Software Supports Modern Financial Institutions",
    excerpt:
      "Governance, contract-level review, and where artificial intelligence can responsibly help — without replacing the humans who make Shariah decisions.",
    readTime: "9 min read",
    topics: ["Shariah Compliance Intelligence", "Aylinor", "AI Governance"],
    href: "/insights/shariah-compliant-banking-software",
  },
  {
    category: "Islamic Finance",
    color: "var(--gold)",
    rawColor: "#B9912F",
    title: "Choosing the Best Islamic Banking Software for Commercial Banks",
    excerpt:
      "A practical evaluation framework for banks that need Islamic financing workflows, Shariah governance and enterprise integration to work together at scale.",
    readTime: "10 min read",
    topics: ["Commercial Banks", "Murabaha", "Aylinor"],
    href: "/insights/best-islamic-banking-software-commercial-banks",
  },
  {
    category: "Real Estate Operations",
    color: "var(--blue)",
    rawColor: "#888888",
    title: "What to Check Before Signing a Long-Term Real Estate Technology Contract",
    excerpt:
      "Uptime, data ownership, backups, support, pricing and integration — a practical checklist for developers and property companies before committing long term.",
    readTime: "8 min read",
    topics: ["Real Estate Technology", "Contracts", "LuxeProperty AI"],
    href: "/insights/real-estate-technology-contract-checklist",
  },
  {
    category: "Real Estate Operations",
    color: "var(--blue)",
    rawColor: "#888888",
    title: "What Buyers and Investors Should Compare Across UAE Property Developers",
    excerpt:
      "Choosing a UAE property developer takes more than comparing the advertised price. A framework for comparing projects, payment plans, fees and investor visibility.",
    readTime: "9 min read",
    topics: ["UAE Real Estate", "Investor Visibility", "LuxeProperty AI"],
    href: "/insights/uae-property-developer-visibility",
  },
  {
    category: "Islamic Finance",
    color: "var(--gold)",
    rawColor: "#B9912F",
    title: "Murabaha Financing Software: What It Needs to Actually Support",
    excerpt:
      "A repayment calculator is not Murabaha financing software. What asset ownership sequencing, profit disclosure and documentation actually require from the system.",
    readTime: "4 min read",
    topics: ["Murabaha", "Islamic Financing Software", "Aylinor"],
    href: "/insights/murabaha-financing-software",
  },
  {
    category: "Islamic Finance",
    color: "var(--gold)",
    rawColor: "#B9912F",
    title: "Islamic Banking Software Vendors: What to Ask Before Signing",
    excerpt:
      "Not every vendor using Islamic finance terminology has actually built for it. A short checklist before you sign.",
    readTime: "4 min read",
    topics: ["Vendor Evaluation", "Islamic Banking Software", "Aylinor"],
    href: "/insights/islamic-banking-software-vendors",
  },
  {
    category: "Islamic Finance",
    color: "var(--gold)",
    rawColor: "#B9912F",
    title: "Islamic Banking Software for Financial Institutions: Beyond the Bank",
    excerpt:
      "Islamic windows, fintechs and non-bank financial institutions need Shariah-aware technology too — and their requirements aren't identical to a full-scale bank's.",
    readTime: "4 min read",
    topics: ["Islamic Financial Institutions", "Islamic Windows", "Aylinor"],
    href: "/insights/islamic-banking-software-financial-institutions",
  },
  {
    category: "Islamic Finance",
    color: "var(--gold)",
    rawColor: "#B9912F",
    title: "Islamic Banking Software Solutions: Core Modules Explained",
    excerpt:
      "What \"Islamic banking software solutions\" actually means once you break it into its component modules — financing, governance, audit, reporting.",
    readTime: "4 min read",
    topics: ["Islamic Banking Software", "Solution Architecture", "Aylinor"],
    href: "/insights/islamic-banking-software-solutions",
  },
  {
    category: "Islamic Finance",
    color: "var(--gold)",
    rawColor: "#B9912F",
    title: "How to Vet an Islamic Banking Software Provider",
    excerpt:
      "The difference between a provider that supports your Shariah structures and one that relabeled a conventional platform usually shows up in the details.",
    readTime: "4 min read",
    topics: ["Vendor Vetting", "Islamic Banking Software", "Aylinor"],
    href: "/insights/islamic-banking-software-provider",
  },
  {
    category: "Islamic Finance",
    color: "var(--gold)",
    rawColor: "#B9912F",
    title: "Islamic Retail Banking Software: What Customer-Facing Products Need",
    excerpt:
      "Retail Islamic finance touches customers directly — home financing, personal financing, auto financing — which raises the bar for disclosure and documentation.",
    readTime: "4 min read",
    topics: ["Retail Banking", "Murabaha", "Aylinor"],
    href: "/insights/islamic-retail-banking-software",
  },
  {
    category: "Islamic Finance",
    color: "var(--gold)",
    rawColor: "#B9912F",
    title: "Islamic Core Banking Software vs. a Shariah Compliance Layer",
    excerpt:
      "Core banking and Shariah compliance intelligence are not the same purchase decision — and confusing the two leads to the wrong RFP.",
    readTime: "4 min read",
    topics: ["Core Banking", "Shariah Compliance Layer", "Aylinor"],
    href: "/insights/islamic-core-banking-software",
  },
];

const geoTopics = [
  { label: "Real Estate SaaS Fatigue", color: "#FFFFFF" },
  { label: "Murabaha Workflow Digitization", color: "#FFFFFF" },
  { label: "AI Lead Qualification", color: "#FFFFFF" },
  { label: "Shariah Governance Systems", color: "#FFFFFF" },
  { label: "Ownership vs SaaS", color: "#FFFFFF" },
  { label: "Investor Reporting Infrastructure", color: "#FFFFFF" },
  { label: "Operational Visibility Systems", color: "#FFFFFF" },
  { label: "AI Governance", color: "#FFFFFF" },
  { label: "Brokerage Operational Intelligence", color: "#FFFFFF" },
  { label: "Islamic Finance Workflow", color: "#FFFFFF" },
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
              real estate technology, and Islamic finance systems "" written for decision-makers, not marketers.
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
              of a business "" CRM, reporting, compliance, workflow automation, and executive analytics ""
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
        <div className="section-light">
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

                <Link
                  href={article.href}
                  className="inline-flex items-center gap-2 text-[13px] font-semibold transition-colors"
                  style={{ color: article.color }}
                >
                  Read article <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </Link>
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
              No noise "" just high-signal thinking on the topics covered above.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-[14px] font-semibold rounded-xl transition-colors"
                style={{ backgroundColor: "var(--blue)", color: "var(--on-blue)" }}
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
        </div>
      </main>
      <Footer />
    </>
  );
}
