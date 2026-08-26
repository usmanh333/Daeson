import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Press & Media — Daeson Technologies in the News",
  description:
    "Press coverage, media features, and articles about Daeson Technologies and Aylinor — as featured by TradingView/Zawya, The Arabian Post, LinkedIn, International Business Media, and Gazet International.",
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
    author: "Daeson Technologies",
    headline: "Daeson Technologies Introduces Shariah AI Compliance Co-Pilot to Strengthen Governance in GCC Islamic Banking",
    excerpt:
      "Zawya, powered by Reuters, covers Daeson Technologies' official announcement of the Shariah AI Compliance Co-Pilot — a purpose-built AI platform designed to strengthen Shariah governance workflows across Islamic banking institutions in the GCC.",
    date: "March 25, 2026",
    isoDate: "2026-03-25",
    readTime: "Press Release",
    href: "https://www.tradingview.com/news/reuters.com,2026-03-25:newsml_Zaw5f1H9W:0-zawya-daeson-technologies-introduces-shariah-ai-compliance-co-pilot-to-strengthen-governance-in-gcc-islamic-banking/",
    tag: "Product Launch",
  },
  {
    id: 2,
    outlet: "The Arabian Post",
    wordmark: "The Arabian Post",
    category: "Feature",
    author: "Daeson Technologies",
    headline: "AI Co-Pilot Targets Shariah Compliance Gaps",
    excerpt:
      "The Arabian Post features Daeson Technologies and its Shariah AI Compliance Co-Pilot, examining how the platform addresses longstanding compliance gaps in Islamic finance — reducing manual review burden and strengthening institutional governance across the GCC.",
    date: "March 2026",
    isoDate: "2026-03-01",
    readTime: "Feature Article",
    href: "https://thearabianpost.com/ai-co-pilot-targets-shariah-compliance-gaps/",
    tag: "Islamic Finance",
  },
  {
    id: 3,
    outlet: "LinkedIn Pulse",
    wordmark: "LinkedIn",
    category: "Thought Leadership",
    author: "Mahnoor Zafar",
    headline: "Islamic Finance Has a Technology Gap — Mahnoor Zafar",
    excerpt:
      "Founder Mahnoor Zafar publishes an in-depth LinkedIn Pulse article exploring the technology infrastructure gap in Islamic finance and how AI-powered compliance tools are beginning to address the operational challenges facing institutions across the GCC and beyond.",
    date: "March 2026",
    isoDate: "2026-03-01",
    readTime: "6 min read",
    href: "https://www.linkedin.com/pulse/islamic-finance-has-technology-gap-mahnoor-zafar-mbmtf/",
    tag: "Founder Insight",
  },
  {
    id: 4,
    outlet: "International Business Media",
    wordmark: "IB Media",
    category: "Coverage",
    author: "Daeson Technologies",
    headline: "Daeson Technologies Introduces Shariah AI Compliance Co-Pilot",
    excerpt:
      "International Business Media covers the formal launch of Daeson Technologies' Shariah AI Compliance Co-Pilot, reporting on the platform's capacity to automate contract analysis, compliance reporting, and Shariah governance workflows for banks across Pakistan and the GCC.",
    date: "March 26, 2026",
    isoDate: "2026-03-26",
    readTime: "Coverage",
    href: "https://intlbm.com/2026/03/26/daeson-technologies-introduces-shariah-ai-compliance-co-pilot/",
    tag: "Product Launch",
  },
  {
    id: 5,
    outlet: "Gazet International",
    wordmark: "Gazet Intl.",
    category: "Press Release",
    author: "Daeson Technologies",
    headline: "Daeson Technologies Introduces Shariah AI Compliance Co-Pilot to Strengthen GCC Islamic Banking Governance",
    excerpt:
      "Gazet International publishes coverage of Daeson Technologies' Shariah AI Compliance Co-Pilot launch, highlighting the platform's potential to become an essential technology layer supporting next-generation Islamic fintech infrastructure in the Gulf region.",
    date: "March 2026",
    isoDate: "2026-03-01",
    readTime: "Press Release",
    href: "https://gazetinternational.com/daeson-technologies-introduces-shariah-ai-compliance-co-pilot-to-strengthen-governance-in-gcc-islamic-banking/",
    tag: "GCC Fintech",
  },
  {
    id: 6,
    outlet: "Medium",
    wordmark: "Medium",
    category: "Thought Leadership",
    author: "Daeson Technologies",
    headline: "Islamic Finance Has a Technology Gap, Not a Finance Gap",
    excerpt:
      "Daeson Technologies publishes a founder perspective on Medium arguing that Islamic finance institutions face a technology infrastructure gap rather than a capital or product gap — and how AI-powered compliance tooling addresses that specific bottleneck.",
    date: "July 2026",
    isoDate: "2026-07-09",
    readTime: "Thought Leadership",
    href: "https://medium.com/@daesontechnologies/islamic-finance-has-a-technology-gap-not-a-finance-gap-39836ddc31a1",
    tag: "Founder Insight",
  },
  {
    id: 7,
    outlet: "Dev.to",
    wordmark: "DEV",
    category: "Thought Leadership",
    author: "Daeson Technologies",
    headline: "Why Real Estate Market Needs Better Investor Transparency",
    excerpt:
      "Daeson Technologies argues that real estate developers courting international investors are held back by fragmented communication and reporting — and that AI-powered operational platforms are what actually close the transparency gap.",
    date: "July 2026",
    isoDate: "2026-07-09",
    readTime: "Thought Leadership",
    href: "https://dev.to/daeson_technologies_612f4/why-real-estate-market-needs-better-investor-transparency-1o09",
    tag: "Real Estate",
  },
  {
    id: 8,
    outlet: "Dev.to",
    wordmark: "DEV",
    category: "Thought Leadership",
    author: "Daeson Technologies",
    headline: "Residential Property Management Is Broken. The Problem Isn't People. It's Systems.",
    excerpt:
      "A look at why residential property management breaks down — not from staff failures, but from fragmented, disconnected systems — and how a unified operational platform restores visibility and resident satisfaction.",
    date: "July 2026",
    isoDate: "2026-07-09",
    readTime: "Thought Leadership",
    href: "https://dev.to/daeson_technologies_612f4/residential-property-management-is-broken-the-problem-isnt-people-its-systems-1hmd",
    tag: "Real Estate",
  },
  {
    id: 9,
    outlet: "Dev.to",
    wordmark: "DEV",
    category: "Thought Leadership",
    author: "Daeson Technologies",
    headline: "The Part of Real Estate Nobody's Actually Fixing",
    excerpt:
      "Most proptech investment focuses on the transaction. Daeson Technologies makes the case that post-transaction operations — routine communication, coordination across time zones, administrative overhead — is the underserved half of the industry.",
    date: "July 2026",
    isoDate: "2026-07-09",
    readTime: "Thought Leadership",
    href: "https://dev.to/daeson_technologies_612f4/the-part-of-real-estate-nobodys-actually-fixing-10m5",
    tag: "Real Estate",
  },
  {
    id: 10,
    outlet: "Medium",
    wordmark: "Medium",
    category: "Thought Leadership",
    author: "Daeson Technologies",
    headline: "AI FinTech Development Company: Why Financial Institutions Need Technology Partners, Not Just Software Vendors",
    excerpt:
      "Daeson Technologies argues that financial institutions are better served by technology partners who build owned, purpose-built platforms than by generic SaaS vendors — covering AI integration, digital wallets, and compliance infrastructure built around the institution's actual operations.",
    date: "July 2026",
    isoDate: "2026-07-09",
    readTime: "Thought Leadership",
    href: "https://medium.com/@daesontechnologies/ai-fintech-development-company-why-financial-institutions-need-technology-partners-not-just-f0ffedce0e27",
    tag: "Fintech",
  },
  {
    id: 11,
    outlet: "Medium",
    wordmark: "Medium",
    category: "Thought Leadership",
    author: "Daeson Technologies",
    headline: "Shariah Compliance Is Still Manual. That's the Real Risk.",
    excerpt:
      "Islamic financial institutions have digitized banking but not Shariah governance — Daeson Technologies makes the case for structured, AI-assisted compliance workflows that support scholars rather than replace their judgment.",
    date: "July 2026",
    isoDate: "2026-07-09",
    readTime: "Thought Leadership",
    href: "https://medium.com/@daesontechnologies/shariah-compliance-is-still-manual-thats-the-real-risk-bbdae3f2efdc",
    tag: "Islamic Finance",
  },
  {
    id: 12,
    outlet: "Medium",
    wordmark: "Medium",
    category: "Thought Leadership",
    author: "Daeson Technologies",
    headline: "When Does a Real Estate Operating Platform Beat One-Off Deals?",
    excerpt:
      "The companion piece to our site framework: the five signals — opaque comps, deal sourcing friction, rate volatility, slow diligence, fragmented LP reporting — that indicate it's time to build operating infrastructure instead of running deals one at a time.",
    date: "July 2026",
    isoDate: "2026-07-09",
    readTime: "Thought Leadership",
    href: "https://medium.com/@daesontechnologies/when-does-a-real-estate-operating-platform-beat-one-off-deals-deb124a19782",
    tag: "Real Estate",
  },
  {
    id: 13,
    outlet: "Medium",
    wordmark: "Medium",
    category: "Thought Leadership",
    author: "Daeson Technologies",
    headline: "How SaaS Real Estate Investment Platforms Work and How They Compare to REITs",
    excerpt:
      "Daeson Technologies distinguishes SaaS real estate platforms — operational software for firms managing multiple deals — from REITs and traditional ownership, arguing they solve an infrastructure problem for operators, not a passive-investment problem for individual investors.",
    date: "July 2026",
    isoDate: "2026-07-09",
    readTime: "Thought Leadership",
    href: "https://medium.com/@daesontechnologies/how-saas-real-estate-investment-platforms-work-and-how-they-compare-to-reits-962162ff582b",
    tag: "Real Estate",
  },
  {
    id: 14,
    outlet: "Medium",
    wordmark: "Medium",
    category: "Thought Leadership",
    author: "Daeson Technologies",
    headline: "What to Look for in Islamic Finance Software With Real Analytics and Reporting",
    excerpt:
      "Daeson Technologies argues Islamic finance software should integrate compliance verification with structured analytics as one system, not two — institutions need reportable data over time, not a binary compliance certificate.",
    date: "July 2026",
    isoDate: "2026-07-09",
    readTime: "Thought Leadership",
    href: "https://medium.com/@daesontechnologies/what-to-look-for-in-islamic-finance-software-with-real-analytics-and-reporting-0f523a3b10cb",
    tag: "Islamic Finance",
  },
  {
    id: 15,
    outlet: "Dev.to",
    wordmark: "DEV",
    category: "Thought Leadership",
    author: "Daeson Technologies",
    headline: "The Complete Guide to Investing in U.S. Real Estate Remotely Using SaaS Platforms",
    excerpt:
      "A look at how real-time data visibility through SaaS platforms has replaced the need for physical presence and trusted local intermediaries, making remote U.S. real estate investing genuinely feasible for investors based in the GCC and Southeast Asia.",
    date: "July 2026",
    isoDate: "2026-07-09",
    readTime: "Thought Leadership",
    href: "https://dev.to/daeson_technologies_612f4/the-complete-guide-to-investing-in-us-real-estate-remotely-using-saas-platforms-2j0b",
    tag: "Real Estate",
  },
  {
    id: 16,
    outlet: "Dev.to",
    wordmark: "DEV",
    category: "Thought Leadership",
    author: "Daeson Technologies",
    headline: "Building an AI Co-Pilot for AAOIFI Compliance: Why 'Confident and Wrong' Is the Failure Mode That Matters Most",
    excerpt:
      "Daeson Technologies makes the case that AI compliance systems for Islamic finance must be built to surface ambiguity and support expert judgment — not to sound confident — since incorrect rulings carry real consequences.",
    date: "July 2026",
    isoDate: "2026-07-09",
    readTime: "Thought Leadership",
    href: "https://dev.to/daeson_technologies_612f4/building-an-ai-co-pilot-for-aaoifi-compliance-why-confident-and-wrong-is-the-failure-mode-that-1mn8",
    tag: "Islamic Finance",
  },
  {
    id: 17,
    outlet: "Medium",
    wordmark: "Medium",
    category: "Thought Leadership",
    author: "Daeson Technologies",
    headline: "Murabaha Compliance Is More Than a Checklist: Why Islamic Banks Need Better Digital Shariah Governance",
    excerpt:
      "Daeson Technologies argues Murabaha compliance requires structured digital governance infrastructure rather than a checklist, introducing Aylinor as a platform built to strengthen Shariah governance — not replace it — through documentation and evidence tracking alongside human review.",
    date: "July 2026",
    isoDate: "2026-07-24",
    readTime: "Thought Leadership",
    href: "https://medium.com/@daesontechnologies/murabaha-compliance-is-more-than-a-checklist-why-islamic-banks-need-better-digital-shariah-09bb03c6c2f0",
    tag: "Islamic Finance",
  },
  {
    id: 18,
    outlet: "Medium",
    wordmark: "Medium",
    category: "Thought Leadership",
    author: "Daeson Technologies",
    headline: "Real Estate Investors Don't Need More Reports. They Need Real-Time Portfolio Intelligence.",
    excerpt:
      "Daeson Technologies argues real estate investors need continuous portfolio visibility through centralized dashboards rather than periodic reports — covering how LuxeProperty AI addresses this through integrated analytics and AI-powered operational insight.",
    date: "July 2026",
    isoDate: "2026-07-24",
    readTime: "Thought Leadership",
    href: "https://medium.com/@daesontechnologies/real-estate-investors-dont-need-more-reports-they-need-real-time-portfolio-intelligence-dbbdfe564606",
    tag: "Real Estate",
  },
  {
    id: 19,
    outlet: "Medium",
    wordmark: "Medium",
    category: "Thought Leadership",
    author: "Daeson Technologies",
    headline: "Why Real Estate Advisors Are Moving Beyond Traditional CRMs",
    excerpt:
      "Daeson Technologies makes the case that traditional CRM systems fall short for modern real estate advisory, and argues for AI-powered platforms that integrate investor intelligence, portfolio analytics, and operational infrastructure into one system.",
    date: "July 2026",
    isoDate: "2026-07-24",
    readTime: "Thought Leadership",
    href: "https://medium.com/@daesontechnologies/why-real-estate-advisors-are-moving-beyond-traditional-crms-ai-investor-intelligence-and-the-next-9d1f25b342a0",
    tag: "Real Estate",
  },
  {
    id: 20,
    outlet: "Dev.to",
    wordmark: "DEV",
    category: "Thought Leadership",
    author: "Daeson Technologies",
    headline: "AI and Shariah Compliance: Why Islamic Finance Shouldn't Fear Artificial Intelligence",
    excerpt:
      "Daeson Technologies argues AI can support Islamic financial compliance when designed to assist rather than replace qualified Shariah scholars, introducing Aylinor's emphasis on human oversight, structured workflows, and auditable decision-making.",
    date: "July 2026",
    isoDate: "2026-07-24",
    readTime: "Thought Leadership",
    href: "https://dev.to/daeson_technologies_612f4/ai-and-shariah-compliance-why-islamic-finance-shouldnt-fear-artificial-intelligence-1dj",
    tag: "Islamic Finance",
  },
  {
    id: 21,
    outlet: "Dev.to",
    wordmark: "DEV",
    category: "Thought Leadership",
    author: "Daeson Technologies",
    headline: "The Hidden Cost of Property Management: Why Spreadsheets, WhatsApp and Manual Processes Don't Scale",
    excerpt:
      "Daeson Technologies argues property management fails from accumulated operational inefficiency, not individual hard tasks — and introduces Home 1.0, a unified platform for tenant, lease, payment, and maintenance management built to stay affordable for mid-sized operators.",
    date: "July 2026",
    isoDate: "2026-07-24",
    readTime: "Thought Leadership",
    href: "https://dev.to/daeson_technologies_612f4/the-hidden-cost-of-property-management-why-spreadsheets-whatsapp-and-manual-processes-dont-scale-3832",
    tag: "Real Estate",
  },
  {
    id: 22,
    outlet: "Dev.to",
    wordmark: "DEV",
    category: "Thought Leadership",
    author: "Daeson Technologies",
    headline: "Why Real Estate Software Should Think in Workflows, Not Features",
    excerpt:
      "Daeson Technologies argues real estate firms don't struggle from a lack of software features but from disconnected systems — where employees end up acting as the manual API between platforms — and makes the case for workflow-first design.",
    date: "July 2026",
    isoDate: "2026-07-24",
    readTime: "Thought Leadership",
    href: "https://dev.to/daeson_technologies_612f4/why-real-estate-software-should-think-in-workflows-not-features-4032",
    tag: "Real Estate",
  },
  {
    id: 23,
    outlet: "Dev.to",
    wordmark: "DEV",
    category: "Thought Leadership",
    author: "Daeson Technologies",
    headline: "Why Real Estate Investment Firms Need Smarter Technology",
    excerpt:
      "Daeson Technologies argues real estate firms need technology that provides business context, not just raw data — how AI and intelligent systems help professionals prioritize information and make better decisions without automating judgment-based calls.",
    date: "July 2026",
    isoDate: "2026-07-24",
    readTime: "Thought Leadership",
    href: "https://dev.to/daeson_technologies_612f4/why-real-estate-investment-firms-need-smarter-technology-3c68",
    tag: "Real Estate",
  },
  {
    id: 24,
    outlet: "Medium",
    wordmark: "Medium",
    category: "Thought Leadership",
    author: "Daeson Technologies",
    headline: "The UAE Real Estate Market Is Growing Up. Its Software Needs to Grow With It.",
    excerpt:
      "Daeson Technologies makes the case that as the UAE real estate market matures, the fragmented software stacks firms have relied on no longer match the operational complexity of the market itself.",
    date: "July 2026",
    isoDate: "2026-07-24",
    readTime: "Thought Leadership",
    href: "https://medium.com/@daesontechnologies/the-uae-real-estate-market-is-growing-up-its-software-needs-to-grow-with-it-381d3acc851e",
    tag: "Real Estate",
  },
  {
    id: 25,
    outlet: "Medium",
    wordmark: "Medium",
    category: "Thought Leadership",
    author: "Daeson Technologies",
    headline: "The Operational Challenges Facing Modern Real Estate Investment Firms",
    excerpt:
      "Daeson Technologies surveys the recurring operational friction points modern real estate investment firms face — from fragmented reporting to disconnected deal pipelines — and where owned infrastructure closes the gap.",
    date: "July 2026",
    isoDate: "2026-07-24",
    readTime: "Thought Leadership",
    href: "https://medium.com/@daesontechnologies/the-operational-challenges-facing-modern-real-estate-investment-firms-6a1703bf522a",
    tag: "Real Estate",
  },
  {
    id: 26,
    outlet: "Medium",
    wordmark: "Medium",
    category: "Thought Leadership",
    author: "Daeson Technologies",
    headline: "Salesforce for Real Estate Investors: What to Look for in an Investor CRM",
    excerpt:
      "Daeson Technologies breaks down what real estate investors should actually evaluate in an investor CRM beyond a generic Salesforce setup — workflow fit, reporting depth, and ownership of the underlying data.",
    date: "July 2026",
    isoDate: "2026-07-24",
    readTime: "Thought Leadership",
    href: "https://medium.com/@daesontechnologies/salesforce-for-real-estate-investors-what-to-look-for-in-an-investor-crm-2d7dded5e414",
    tag: "Real Estate",
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
    linkLabel: "How Aylinor approaches this",
  },
];

const articleListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Daeson Technologies Press Coverage",
  description: "Press releases, articles, and media coverage featuring Daeson Technologies and Aylinor.",
  url: "https://daesontechnologies.online/pr",
  itemListElement: pressItems.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": item.category === "Thought Leadership" ? "Article" : "PressRelease",
      name: item.headline,
      url: item.href,
      author: { "@type": item.author === "Daeson Technologies" ? "Organization" : "Person", name: item.author },
      publisher: { "@type": "Organization", name: item.outlet },
      datePublished: item.isoDate,
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
