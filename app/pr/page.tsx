import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Press & Media — Daeson Technologies in the News",
  description:
    "Press coverage, media features, and articles about Daeson Technologies and Amanah AI — as featured by TradingView/Zawya, The Arabian Post, LinkedIn, International Business Media, and Gazet International.",
  alternates: { canonical: "https://daesontechnologies.online/pr" },
  openGraph: {
    title: "Press & Media — Daeson Technologies",
    url: "https://daesontechnologies.online/pr",
  },
};

const pressItems = [
  {
    id: 1,
    outlet: "TradingView / Zawya",
    wordmark: "TradingView",
    category: "Press Release",
    headline: "Daeson Technologies Introduces Shariah AI Compliance Co-Pilot to Strengthen Governance in GCC Islamic Banking",
    excerpt:
      "Zawya, powered by Reuters, covers Daeson Technologies' official announcement of the Shariah AI Compliance Co-Pilot — a purpose-built AI platform designed to strengthen Shariah governance workflows across Islamic banking institutions in the GCC.",
    date: "March 25, 2026",
    readTime: "Press Release",
    href: "https://www.tradingview.com/news/reuters.com,2026-03-25:newsml_Zaw5f1H9W:0-zawya-daeson-technologies-introduces-shariah-ai-compliance-co-pilot-to-strengthen-governance-in-gcc-islamic-banking/",
    tag: "Product Launch",
  },
  {
    id: 2,
    outlet: "The Arabian Post",
    wordmark: "The Arabian Post",
    category: "Feature",
    headline: "AI Co-Pilot Targets Shariah Compliance Gaps",
    excerpt:
      "The Arabian Post features Daeson Technologies and its Shariah AI Compliance Co-Pilot, examining how the platform addresses longstanding compliance gaps in Islamic finance — reducing manual review burden and strengthening institutional governance across the GCC.",
    date: "March 2026",
    readTime: "Feature Article",
    href: "https://thearabianpost.com/ai-co-pilot-targets-shariah-compliance-gaps/",
    tag: "Islamic Finance",
  },
  {
    id: 3,
    outlet: "LinkedIn Pulse",
    wordmark: "LinkedIn",
    category: "Thought Leadership",
    headline: "Islamic Finance Has a Technology Gap — Mahnoor Zafar",
    excerpt:
      "Founder Mahnoor Zafar publishes an in-depth LinkedIn Pulse article exploring the technology infrastructure gap in Islamic finance and how AI-powered compliance tools are beginning to address the operational challenges facing institutions across the GCC and beyond.",
    date: "March 2026",
    readTime: "6 min read",
    href: "https://www.linkedin.com/pulse/islamic-finance-has-technology-gap-mahnoor-zafar-mbmtf/",
    tag: "Founder Insight",
  },
  {
    id: 4,
    outlet: "International Business Media",
    wordmark: "IB Media",
    category: "Coverage",
    headline: "Daeson Technologies Introduces Shariah AI Compliance Co-Pilot",
    excerpt:
      "International Business Media covers the formal launch of Daeson Technologies' Shariah AI Compliance Co-Pilot, reporting on the platform's capacity to automate contract analysis, compliance reporting, and Shariah governance workflows for banks across Pakistan and the GCC.",
    date: "March 26, 2026",
    readTime: "Coverage",
    href: "https://intlbm.com/2026/03/26/daeson-technologies-introduces-shariah-ai-compliance-co-pilot/",
    tag: "Product Launch",
  },
  {
    id: 5,
    outlet: "Gazet International",
    wordmark: "Gazet Intl.",
    category: "Press Release",
    headline: "Daeson Technologies Introduces Shariah AI Compliance Co-Pilot to Strengthen GCC Islamic Banking Governance",
    excerpt:
      "Gazet International publishes coverage of Daeson Technologies' Shariah AI Compliance Co-Pilot launch, highlighting the platform's potential to become an essential technology layer supporting next-generation Islamic fintech infrastructure in the Gulf region.",
    date: "March 2026",
    readTime: "Press Release",
    href: "https://gazetinternational.com/daeson-technologies-introduces-shariah-ai-compliance-co-pilot-to-strengthen-governance-in-gcc-islamic-banking/",
    tag: "GCC Fintech",
  },
];

const perspectives = [
  {
    id: "p1",
    title: "SaaS Real Estate Platforms vs. Owned Infrastructure — What Actually Differs",
    body: "SaaS real estate investment platforms (the SaaSProperties.com model, and similar tools) charge a recurring fee for shared, templated software — useful for getting a firm running quickly, but the firm never owns the system or its data. Traditional real estate investing and REIT reporting solve a different problem entirely: capital structure, not day-to-day operations. Firms evaluating either path are usually really asking a third question — do we rent our operating system indefinitely, or build one we own outright? That's the comparison worth making before choosing a platform.",
    href: "/insights/real-estate-saas-vs-owned",
    linkLabel: "Read the full comparison",
  },
  {
    id: "p2",
    title: "What to Actually Compare Between Real Estate SaaS Platforms",
    body: "Feature lists look similar across most real estate SaaS platforms. The differences that matter show up in fees over a 3–5 year horizon, how much of your investor and deal data you can export cleanly if you leave, and whether the roadmap serves your workflow or the vendor's release calendar. Those three questions matter more than any single feature comparison chart.",
    href: "/real-estate",
    linkLabel: "See our operations platform approach",
  },
  {
    id: "p3",
    title: "Dashboarding for REITs and Real Estate Portfolios",
    body: "Most 'real estate dashboard' tools are generic BI wrappers bolted onto a spreadsheet export. A dashboard built for REITs and property portfolios needs to speak the domain directly — occupancy, NOI, investor distributions, and deal-stage pipeline in one view, not a generic chart builder. That distinction is what separates a real estate CRM dashboard from a repurposed analytics tool.",
    href: "/industries/real-estate",
    linkLabel: "See how we approach it",
  },
  {
    id: "p4",
    title: "Choosing a Software Provider for Islamic Finance Analytics & Reporting",
    body: "Islamic finance institutions evaluating analytics and reporting software run into a hard requirement most generic fintech tools skip: Shariah governance has to be built into the workflow, not bolted on afterward. That means contract analysis, scholar review queues, and regulatory reporting need to share one audit trail — not live in three disconnected tools.",
    href: "/amanah-ai",
    linkLabel: "How Amanah AI approaches this",
  },
];

const articleListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Daeson Technologies Press Coverage",
  description: "Press releases, articles, and media coverage featuring Daeson Technologies and Amanah AI.",
  url: "https://daesontechnologies.online/pr",
  itemListElement: pressItems.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": i === 2 ? "Article" : "PressRelease",
      name: item.headline,
      url: item.href,
      author: { "@type": "Organization", name: i === 2 ? "Mahnoor Zafar" : "Daeson Technologies" },
      publisher: { "@type": "Organization", name: item.outlet },
      datePublished: "2026-03-25",
      about: { "@type": "Organization", name: "Daeson Technologies" },
    },
  })),
};

function Wordmark({ text, className = "" }: { text: string; className?: string }) {
  return (
    <div
      className={`inline-flex items-center justify-center px-3 py-2 rounded-lg shrink-0 ${className}`}
      style={{ border: "1px solid var(--border-strong)", backgroundColor: "var(--bg-elevated)" }}
    >
      <span
        className="text-[11px] font-black uppercase tracking-wider whitespace-nowrap"
        style={{ color: "var(--text-primary)" }}
      >
        {text}
      </span>
    </div>
  );
}

export default function PRPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleListSchema) }} />
      <Navbar />
      <main style={{ backgroundColor: "var(--bg-page)", minHeight: "100vh" }}>

        {/* ── HERO ── */}
        <section className="relative overflow-hidden pt-32 pb-20 px-6">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(255,255,255,0.06) 0%, transparent 70%)",
            }}
          />
          <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase mb-8"
              style={{ border: "1px solid var(--blue-border)", backgroundColor: "var(--blue-muted)", color: "var(--blue)" }}
            >
              <FileText size={10} />
              Press &amp; Media
            </div>
            <h1 className="speakable text-[42px] md:text-[60px] font-extrabold leading-[1.04] tracking-tight mb-6" style={{ color: "var(--text-primary)" }}>
              Daeson Technologies{" "}
              <span style={{ color: "var(--blue)" }}>in the News</span>
            </h1>
            <p className="text-[17px] leading-relaxed max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
              Our work in Islamic finance AI, Shariah compliance technology, and Gulf fintech
              innovation — as covered by leading international media outlets.
            </p>
          </div>
        </section>

        {/* ── STATS BAR ── */}
        <div style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", backgroundColor: "var(--bg-surface)" }} className="py-8 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {[
              { value: "5+", label: "Media Outlets" },
              { value: "Gulf & MENA", label: "Coverage Region" },
              { value: "2025–2026", label: "Press History" },
              { value: "Islamic Fintech", label: "Core Topic" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-[28px] font-extrabold" style={{ color: "var(--blue)" }}>{s.value}</div>
                <div className="text-[11px] font-semibold uppercase tracking-widest mt-1" style={{ color: "var(--text-faint)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── FEATURED ARTICLE ── */}
        <div className="section-light">
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <p className="text-[10px] font-bold uppercase tracking-widest mb-8" style={{ color: "var(--text-faint)" }}>
              Featured Coverage
            </p>
            <a
              href={pressItems[0].href}
              target="_blank"
              rel="noopener noreferrer"
              className="press-card block rounded-2xl overflow-hidden group"
              style={{ border: "1px solid var(--blue-border)" }}
            >
              <div
                className="p-10 md:p-12"
                style={{ backgroundColor: "var(--bg-card)" }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Wordmark text={pressItems[0].wordmark} />
                  <div>
                    <p className="text-[13px] font-bold" style={{ color: "var(--text-primary)" }}>{pressItems[0].outlet}</p>
                    <p className="text-[11px]" style={{ color: "var(--text-faint)" }}>{pressItems[0].date} · Zawya / Reuters Wire</p>
                  </div>
                  <span
                    className="ml-auto text-[11px] font-bold px-3 py-1 rounded-full"
                    style={{ backgroundColor: "var(--blue)", color: "var(--on-blue)" }}
                  >
                    Reuters Wire
                  </span>
                </div>
                <h2 className="text-[22px] md:text-[28px] font-extrabold leading-snug mb-4 max-w-3xl" style={{ color: "var(--text-primary)" }}>
                  {pressItems[0].headline}
                </h2>
                <p className="text-[15px] leading-relaxed mb-6 max-w-2xl" style={{ color: "var(--text-secondary)" }}>
                  {pressItems[0].excerpt}
                </p>
                <span
                  className="inline-flex items-center gap-2 text-[14px] font-semibold"
                  style={{ color: "var(--blue)" }}
                >
                  Read full coverage <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </a>
          </div>
        </section>
        </div>

        {/* ── PRESS CARDS ── */}
        <section className="py-4 pb-20 px-6">
          <div className="max-w-6xl mx-auto">
            <p className="text-[10px] font-bold uppercase tracking-widest mb-8" style={{ color: "var(--text-faint)" }}>
              All Coverage
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {pressItems.slice(1).map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="press-card group flex flex-col rounded-2xl p-8"
                  style={{
                    border: "1px solid var(--border)",
                    backgroundColor: "var(--bg-card)",
                  }}
                >
                  {/* Top row */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <Wordmark text={item.wordmark} />
                      <div>
                        <p className="text-[13px] font-bold" style={{ color: "var(--text-primary)" }}>{item.outlet}</p>
                        <p className="text-[11px]" style={{ color: "var(--text-faint)" }}>{item.date} · {item.readTime}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className="text-[11px] font-semibold px-2.5 py-1 rounded-full"
                        style={{ backgroundColor: "var(--blue-muted)", color: "var(--blue)", border: "1px solid var(--blue-border)" }}
                      >
                        {item.category}
                      </span>
                      <ExternalLink size={14} style={{ color: "var(--text-faint)" }} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>

                  {/* Headline */}
                  <h2
                    className="text-[16px] font-bold leading-snug mb-4 transition-colors"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {item.headline}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-[13px] leading-relaxed flex-1 mb-6" style={{ color: "var(--text-secondary)" }}>
                    {item.excerpt}
                  </p>

                  {/* Footer row */}
                  <div
                    className="flex items-center justify-between pt-5"
                    style={{ borderTop: "1px solid var(--border)" }}
                  >
                    <span
                      className="text-[11px] font-semibold px-3 py-1 rounded-full"
                      style={{ backgroundColor: "var(--bg-elevated)", color: "var(--text-muted)", border: "1px solid var(--border)" }}
                    >
                      {item.tag}
                    </span>
                    <span
                      className="flex items-center gap-1.5 text-[13px] font-semibold group-hover:gap-2.5 transition-all"
                      style={{ color: "var(--blue)" }}
                    >
                      Read Article <ArrowRight size={14} />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── PERSPECTIVES (first-party, clearly separate from press coverage) ── */}
        <div className="section-light" style={{ borderTop: "1px solid var(--border)" }}>
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <p className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: "var(--text-faint)" }}>
              Perspectives From Our Team
            </p>
            <p className="text-[13px] mb-8 max-w-2xl" style={{ color: "var(--text-secondary)" }}>
              Short takes from Daeson Technologies — not third-party press, our own perspective on
              questions we hear from prospective clients.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {perspectives.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="press-card group flex flex-col rounded-2xl p-8"
                  style={{ border: "1px solid var(--border)", backgroundColor: "var(--bg-card)" }}
                >
                  <span
                    className="inline-flex items-center self-start text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-5"
                    style={{ backgroundColor: "var(--bg-elevated)", color: "var(--text-muted)", border: "1px solid var(--border)" }}
                  >
                    Daeson Perspective
                  </span>
                  <h3 className="text-[16px] font-bold leading-snug mb-3" style={{ color: "var(--text-primary)" }}>
                    {item.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed flex-1 mb-6" style={{ color: "var(--text-secondary)" }}>
                    {item.body}
                  </p>
                  <span
                    className="flex items-center gap-1.5 text-[13px] font-semibold group-hover:gap-2.5 transition-all pt-5"
                    style={{ color: "var(--blue)", borderTop: "1px solid var(--border)" }}
                  >
                    {item.linkLabel} <ArrowRight size={14} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
        </div>

        {/* ── TRUST BADGES ── */}
        <section
          className="section-light py-16 px-6"
          style={{ backgroundColor: "var(--bg-surface)", borderTop: "1px solid var(--border)" }}
        >
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-[10px] font-bold uppercase tracking-widest mb-8" style={{ color: "var(--text-faint)" }}>
              Recognized By
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <span className="footer-badge-img">
                <Image src="/google-reviews-logo.png" alt="Google Reviews" width={130} height={40} className="h-8 w-auto object-contain" unoptimized />
              </span>
              <span className="footer-badge-img">
                <Image src="/Trustpilot.png" alt="Trustpilot" width={130} height={40} className="h-8 w-auto object-contain" unoptimized />
              </span>
              <a href="https://clutch.co" target="_blank" rel="noopener noreferrer" className="footer-badge-img">
                <Image src="/clutch.png" alt="Clutch" width={120} height={40} className="h-8 w-auto object-contain" unoptimized />
              </a>
              <a href="https://goodfirms.co" target="_blank" rel="noopener noreferrer" className="footer-badge-img">
                <Image src="/goodfirm.png" alt="GoodFirms" width={130} height={40} className="h-8 w-auto object-contain" unoptimized />
              </a>
              <span className="footer-badge-img">
                <Image src="/Designrush.png" alt="DesignRush" width={130} height={40} className="h-8 w-auto object-contain" unoptimized />
              </span>
            </div>
          </div>
        </section>

        {/* ── MEDIA CTA ── */}
        <section className="py-20 px-6">
          <div
            className="max-w-3xl mx-auto rounded-2xl p-12 text-center"
            style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--blue-border)" }}
          >
            <h2 className="text-[28px] md:text-[34px] font-extrabold mb-4" style={{ color: "var(--text-primary)" }}>
              Want to feature{" "}
              <span style={{ color: "var(--blue)" }}>Daeson Technologies?</span>
            </h2>
            <p className="text-[15px] mb-8 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              For press inquiries, media kits, executive interviews, or partnership announcements,
              reach out to our communications team.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:contact@daesontechnologies.online"
                className="px-8 py-3.5 text-[14px] font-bold rounded-xl transition-all hover:opacity-90"
                style={{ backgroundColor: "var(--blue)", color: "var(--on-blue)" }}
              >
                Media Enquiry
              </a>
              <Link
                href="/"
                className="px-8 py-3.5 text-[14px] font-semibold rounded-xl transition-all"
                style={{ border: "1px solid var(--blue-border)", color: "var(--blue)", backgroundColor: "var(--bg-page)" }}
              >
                Back to Home
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
