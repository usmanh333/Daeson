import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Real Estate & PropTech Infrastructure",
  description:
    "Real estate firms, brokerages, and property developers running on fragmented SaaS tools face data silos, manual reporting, and vendor lock-in. See why the industry is shifting to owned operational infrastructure — and how Daeson Technologies builds it.",
  keywords: [
    "real estate industry technology challenges",
    "proptech operational infrastructure",
    "why real estate firms need owned software",
    "real estate SaaS fragmentation",
  ],
  alternates: { canonical: "https://daesontechnologies.online/industries/real-estate" },
  openGraph: {
    title: "Real Estate & PropTech Industry | Daeson Technologies",
    description:
      "Why real estate firms are replacing fragmented SaaS tools with owned operational infrastructure — unified CRM, investor dashboards, and AI lead intelligence.",
    url: "https://daesontechnologies.online/industries/real-estate",
  },
};

const challenges = [
  {
    title: "Data Fragmentation Across SaaS Tools",
    body: "Real estate firms typically operate across 5–10 disconnected SaaS subscriptions — a CRM, a reporting tool, a payment tracker, a marketing platform. None of them share data. Leadership has no unified view of operations.",
  },
  {
    title: "Manual Investor Reporting",
    body: "Investor reporting is frequently built from manual spreadsheet pulls across multiple systems. This is slow, error-prone, and delays the frequency and quality of investor communication — creating relationship risk.",
  },
  {
    title: "No Real-Time Operational Visibility",
    body: "Real estate executives cannot see portfolio performance, pipeline health, and team productivity in real time. Reports are assembled manually and are always behind the current state of the business.",
  },
  {
    title: "AI Lead Intelligence Is Absent",
    body: "Most real estate CRMs have basic lead management. None provide AI-powered lead scoring, behavioral qualification, or conversion probability prediction — despite the commercial value these capabilities represent.",
  },
  {
    title: "Subscription Costs Compound at Scale",
    body: "As a real estate firm grows, per-seat SaaS pricing compounds. Firms with 30+ staff are paying tens of thousands annually for tools that weren't built for real estate workflows — and still require manual work to connect them.",
  },
  {
    title: "Operational Knowledge Is Not Captured",
    body: "Because operations live in disconnected tools, organizational knowledge — about clients, transactions, market history — is fragmented and at risk every time a team member leaves.",
  },
];

const capabilities = [
  {
    title: "Unified CRM & Deal Pipeline",
    description: "A single system for managing leads, deals, clients, and transactions — replacing fragmented CRM tools with an owned platform aligned to how your firm actually manages its pipeline.",
    items: ["Lead capture & qualification", "Deal stage management", "Client relationship tracking", "Pipeline analytics & forecasting"],
  },
  {
    title: "Investor Visibility Portal",
    description: "Real-time investor portal giving portfolio investors visibility into their investments — portfolio performance, distributions, documentation, and communication — without manual report generation.",
    items: ["Real-time portfolio dashboards", "Automated investor reporting", "Document management & sharing", "Communication history"],
  },
  {
    title: "Payment & Rent Tracking",
    description: "Centralized payment tracking across the portfolio — rent collection, developer payments, commissions, and receivables — with automated reconciliation and exception alerts.",
    items: ["Rent collection tracking", "Commission management", "Payment reconciliation", "Overdue & exception alerts"],
  },
  {
    title: "AI Lead Intelligence",
    description: "AI-powered lead analysis that scores, qualifies, and prioritizes leads based on behavioral signals, conversion history, and property match criteria.",
    items: ["AI lead scoring & ranking", "Behavioral qualification", "Conversion probability prediction", "Lead assignment optimization"],
  },
  {
    title: "Executive Analytics",
    description: "Operational dashboards for leadership — portfolio performance, team productivity, pipeline health, revenue tracking, and market activity — all real-time, all owned.",
    items: ["Portfolio performance dashboards", "Team productivity metrics", "Revenue & commission analytics", "Market activity tracking"],
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is real estate operational infrastructure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Real estate operational infrastructure refers to a unified, owned technology platform that manages the core operational functions of a real estate firm — CRM, investor reporting, payment tracking, AI lead intelligence, and executive analytics — in a single integrated system. Unlike fragmented SaaS tools, operational infrastructure is purpose-built around the specific workflows and data model of a real estate business and is fully owned by the firm.",
      },
    },
    {
      "@type": "Question",
      name: "Why do real estate firms need owned software instead of SaaS tools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Real estate firms that have grown beyond startup scale typically operate across 5–10 SaaS tools that weren't built for real estate workflows. This creates data fragmentation, manual reporting overhead, subscription cost compounding, and no real-time operational visibility for leadership. Owned software eliminates these problems by providing a unified platform aligned to the firm's actual workflows — with no ongoing subscription costs and full control over the operational logic of the business.",
      },
    },
    {
      "@type": "Question",
      name: "How does AI improve real estate operations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI improves real estate operations primarily in three areas: lead intelligence (AI-powered scoring and qualification of leads based on behavioral signals and conversion patterns), investor reporting (automated generation of accurate investor dashboards and reports from live portfolio data), and operational analytics (real-time intelligence on portfolio performance, pipeline health, and market activity that gives leadership the visibility to make faster, better decisions).",
      },
    },
    {
      "@type": "Question",
      name: "What markets does Daeson Technologies serve for real estate technology?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Daeson Technologies serves real estate firms and brokerages across UAE, Dubai, Abu Dhabi, GCC markets (Saudi Arabia, Qatar, Kuwait), Canada (Toronto, Vancouver, Calgary), and UK markets. Our systems are designed for multi-market, multi-currency operations — supporting real estate firms that operate across multiple geographies.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build a real estate operations platform?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A core real estate operations platform — including operational discovery, architecture design, development, and deployment — typically takes 3 to 6 months for a first production version covering CRM, investor dashboards, and payment tracking. AI lead intelligence and advanced analytics layers are typically added in subsequent phases. We show working prototypes within 4–6 weeks of engagement start.",
      },
    },
  ],
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Real Estate Technology — Daeson Technologies",
  url: "https://daesontechnologies.online/industries/real-estate",
  isPartOf: { "@id": "https://daesontechnologies.online/#website" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://daesontechnologies.online" },
      { "@type": "ListItem", position: 2, name: "Industries", item: "https://daesontechnologies.online/industries" },
      { "@type": "ListItem", position: 3, name: "Real Estate", item: "https://daesontechnologies.online/industries/real-estate" },
    ],
  },
};

export default function RealEstateIndustryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main style={{ backgroundColor: "var(--bg-page)", minHeight: "100vh" }}>

        {/* Hero */}
        <div className="max-w-5xl mx-auto px-6 pt-36 pb-20">
          <p className="text-[11px] font-bold uppercase tracking-widest mb-3" style={{ color: "var(--text-faint)" }}>
            Industries / Real Estate
          </p>
          <h1 className="text-[38px] md:text-[52px] font-bold tracking-tight leading-[1.05] mb-6 max-w-4xl" style={{ color: "var(--text-primary)" }}>
            Operational Infrastructure for
            <br />
            <span style={{ color: "var(--green)" }}>Real Estate Firms & Brokerages</span>
          </h1>
          <p className="text-[16px] leading-relaxed max-w-2xl mb-4" style={{ color: "var(--text-secondary)" }}>
            Real estate firms with serious portfolio complexity and investor relationships need more than
            a CRM. They need a unified operational platform built around how their business actually operates.
          </p>
          <p className="text-[13px] mb-8" style={{ color: "var(--text-muted)" }}>
            UAE · GCC · Canada · United Kingdom · United States
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 text-[14px] font-semibold rounded-xl" style={{ backgroundColor: "var(--green)", color: "var(--on-blue)" }}>
              Request Consultation <ArrowRight size={14} />
            </Link>
            <Link href="/demo?demo=real-estate" className="inline-flex items-center gap-2 px-6 py-3.5 text-[14px] font-semibold rounded-xl" style={{ border: "1px solid var(--border)", color: "var(--text-primary)" }}>
              View Demo
            </Link>
          </div>
        </div>

        {/* Industry Challenges */}
        <div className="section-light" style={{ backgroundColor: "var(--bg-surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
          <div className="max-w-5xl mx-auto px-6 py-20">
            <p className="text-[10px] font-bold uppercase tracking-widest mb-10" style={{ color: "var(--text-faint)" }}>
              Industry Challenges
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {challenges.map((c, i) => (
                <div key={i} className="p-6 rounded-xl" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}>
                  <div className="w-8 h-px mb-5" style={{ backgroundColor: "var(--green)" }} />
                  <h3 className="text-[14px] font-bold mb-2.5 tracking-tight" style={{ color: "var(--text-primary)" }}>{c.title}</h3>
                  <p className="text-[12px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Platform Capabilities */}
        <div className="max-w-5xl mx-auto px-6 py-20">
          <p className="text-[10px] font-bold uppercase tracking-widest mb-10" style={{ color: "var(--text-faint)" }}>
            The Platform
          </p>
          <div className="space-y-5">
            {capabilities.map((cap, i) => (
              <div key={i} className="rounded-2xl p-7" style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)" }}>
                <div className="grid md:grid-cols-[1.4fr_1fr] gap-10 items-start">
                  <div>
                    <h3 className="text-[17px] font-bold mb-3 tracking-tight" style={{ color: "var(--text-primary)" }}>{cap.title}</h3>
                    <p className="text-[13px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>{cap.description}</p>
                  </div>
                  <ul className="space-y-2">
                    {cap.items.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-[12px]" style={{ color: "var(--text-secondary)" }}>
                        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "var(--green)" }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
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
            <div className="space-y-4">
              {faqSchema.mainEntity.map((item, i) => (
                <div key={i} className="p-6 rounded-xl" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}>
                  <h3 className="text-[14px] font-semibold mb-3" style={{ color: "var(--text-primary)" }}>{item.name}</h3>
                  <p className="text-[12px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-3 text-[13px] font-semibold rounded-lg" style={{ backgroundColor: "var(--green)", color: "var(--on-blue)" }}>
                Request Consultation <ArrowRight size={13} />
              </Link>
              <Link href="/research" className="inline-flex items-center gap-2 px-5 py-3 text-[13px] font-semibold rounded-lg" style={{ border: "1px solid var(--border)", color: "var(--text-primary)" }}>
                Download Whitepaper
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
