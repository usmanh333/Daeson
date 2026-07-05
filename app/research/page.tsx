import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

export const metadata: Metadata = {
  title: "Research Center — Whitepapers, Industry Reports & Executive Briefings",
  description:
    "Daeson Technologies Research Center: whitepapers on real estate technology, Islamic finance AI, enterprise workflow automation, and operational intelligence. Executive briefings and industry reports for enterprise decision-makers.",
  alternates: { canonical: "https://daesontechnologies.online/research" },
};

const publishedWhitepapers = [
  {
    category: "Islamic Finance & AI",
    title: "AI and Shariah Compliance in the Next Generation of Financial Technology",
    description:
      "An in-depth examination of how artificial intelligence is reshaping Shariah compliance infrastructure across Islamic financial institutions — covering governance frameworks, contract analysis automation, and the regulatory implications for next-generation Islamic fintech.",
    pages: "Published · Available Now",
    audience: "Islamic bank executives, Shariah compliance officers, Islamic fintech leaders",
    topics: ["AI governance in Islamic finance", "Shariah compliance automation", "Next-gen fintech infrastructure", "Regulatory implications"],
    downloadHref: "/whitepapers/whitepaper-shariah-ai-compliance.pdf",
  },
  {
    category: "GCC SME Finance",
    title: "The Rise of AI Financial Copilots for SMEs in the GCC",
    description:
      "How AI-powered financial copilots are transforming SME access to financial intelligence, working capital management, and decision support across the Gulf Cooperation Council — with analysis of market readiness and adoption barriers.",
    pages: "Published · Available Now",
    audience: "SME operators, fintech investors, GCC financial institutions",
    topics: ["AI financial copilots", "SME financing in GCC", "Working capital intelligence", "Gulf market analysis"],
    downloadHref: "/whitepapers/whitepaper-ai-financial-copilots-gcc.pdf",
  },
  {
    category: "Digital Finance Infrastructure",
    title: "The Infrastructure Gap in SME Digital Finance in the GCC",
    description:
      "A data-driven assessment of the technology infrastructure deficit facing SMEs across GCC markets — examining the gap between enterprise-grade digital finance tools and what is actually available to small and mid-sized businesses in the region.",
    pages: "Published · Available Now",
    audience: "Policymakers, fintech operators, GCC banking executives, SME finance leaders",
    topics: ["SME digital finance gap", "GCC infrastructure deficit", "Fintech accessibility", "Market opportunity analysis"],
    downloadHref: "/whitepapers/whitepaper-sme-digital-finance-gap.pdf",
  },
];

const whitepapers = [
  {
    category: "Real Estate Technology",
    title: "The Operational Infrastructure Gap in Modern Real Estate Firms",
    description:
      "How fragmented SaaS stacks are creating data silos, reporting overhead, and strategic blind spots in real estate operations — and what owned infrastructure looks like as an alternative.",
    pages: "18 pages",
    audience: "Real estate executives, COOs, technology leaders",
    topics: ["SaaS fragmentation analysis", "Operational infrastructure architecture", "ROI of owned systems", "Migration strategy"],
    href: "/contact?topic=whitepaper-re-infrastructure",
  },
  {
    category: "Islamic Finance Technology",
    title: "AI and Shariah Compliance: Automating the Operational Layer of Islamic Finance",
    description:
      "A framework for how AI can responsibly automate the documentation, workflow, and audit functions of Shariah compliance — while preserving the primacy of human scholarly judgment in substantive rulings.",
    pages: "24 pages",
    audience: "Islamic bank executives, Shariah compliance officers, Islamic fintech leaders",
    topics: ["Murabaha digitization framework", "AI governance in Islamic finance", "Scholar review workflow design", "Compliance audit architecture"],
    href: "/contact?topic=whitepaper-amanah-ai",
  },
  {
    category: "Enterprise Operations",
    title: "Operational Intelligence: Moving Beyond Dashboards to Decision Infrastructure",
    description:
      "Why most enterprise analytics implementations fail to drive decision quality — and what distinguishes operational intelligence systems that actually change how leadership teams make decisions.",
    pages: "16 pages",
    audience: "C-suite executives, operations directors, enterprise technology leaders",
    topics: ["Operational intelligence vs. BI", "Decision infrastructure design", "AI integration patterns", "Governance-sensitive analytics"],
    href: "/contact?topic=whitepaper-op-intelligence",
  },
  {
    category: "Workflow Automation",
    title: "Beyond RPA: Building Intelligent Workflow Systems for Enterprise Operations",
    description:
      "The limitations of robotic process automation for complex operational environments — and why intelligent, owned workflow systems produce superior outcomes for enterprise organizations.",
    pages: "20 pages",
    audience: "Operations executives, digital transformation leaders, technology architects",
    topics: ["RPA vs. intelligent workflows", "Workflow design methodology", "AI integration in workflows", "Change management approach"],
    href: "/contact?topic=whitepaper-workflow",
  },
];

const reports = [
  {
    title: "Real Estate Technology Adoption in GCC Markets — 2025 Outlook",
    type: "Industry Report",
    description: "Analysis of technology adoption patterns in UAE and GCC real estate markets, with focus on operational infrastructure maturity.",
    href: "/contact?topic=report-gcc-re",
  },
  {
    title: "Islamic Finance Technology: The Infrastructure Opportunity",
    type: "Sector Report",
    description: "Assessment of the technology infrastructure gap across Islamic banking and finance institutions operating in GCC, UK, and South Asian markets.",
    href: "/contact?topic=report-islamic-fintech",
  },
  {
    title: "Enterprise AI Integration: Readiness Assessment Framework",
    type: "Executive Briefing",
    description: "A structured framework for enterprise organizations assessing readiness for AI integration into core operational systems.",
    href: "/contact?topic=report-ai-readiness",
  },
  {
    title: "Subscription Fatigue in Enterprise Software: The Ownership Case",
    type: "Perspective Paper",
    description: "Analysis of the total cost of ownership implications of subscription SaaS dependency versus owned infrastructure in enterprise environments.",
    href: "/contact?topic=report-ownership-case",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What research does Daeson Technologies publish?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Daeson Technologies publishes whitepapers, industry reports, and executive briefings focused on real estate technology, Islamic finance AI, enterprise workflow automation, and operational intelligence. Our research is practitioner-focused — designed for enterprise decision-makers, not academic audiences.",
      },
    },
    {
      "@type": "Question",
      name: "How can I access Daeson Technologies whitepapers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Daeson Technologies whitepapers are available by request through our contact form. We ask for basic professional context to ensure our research reaches relevant enterprise audiences. All whitepapers are provided at no cost.",
      },
    },
    {
      "@type": "Question",
      name: "What is operational intelligence?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Operational intelligence refers to AI-powered systems that provide real-time visibility into business operations and surface actionable insights from operational data. Unlike business intelligence (which is retrospective and analytical), operational intelligence is designed to support day-to-day decision-making by surfacing the right information at the point of decision. Daeson Technologies builds operational intelligence as a core layer of every system it develops.",
      },
    },
  ],
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Research Center — Daeson Technologies",
  url: "https://daesontechnologies.online/research",
  isPartOf: { "@id": "https://daesontechnologies.online/#website" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://daesontechnologies.online" },
      { "@type": "ListItem", position: 2, name: "Research", item: "https://daesontechnologies.online/research" },
    ],
  },
};

export default function ResearchPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main style={{ backgroundColor: "var(--bg-page)", minHeight: "100vh" }}>

        {/* Hero */}
        <div className="max-w-5xl mx-auto px-6 pt-36 pb-20">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-widest uppercase mb-8"
            style={{ border: "1px solid var(--green-border)", backgroundColor: "var(--green-muted)", color: "var(--green)" }}
          >
            Research Center
          </div>
          <h1 className="text-[38px] md:text-[52px] font-bold tracking-tight leading-[1.05] mb-6 max-w-4xl" style={{ color: "var(--text-primary)" }}>
            Practitioner Research for
            <br />
            <span style={{ color: "var(--green)" }}>Enterprise Decision-Makers</span>
          </h1>
          <p className="text-[16px] leading-relaxed max-w-2xl mb-4" style={{ color: "var(--text-secondary)" }}>
            Daeson Technologies publishes whitepapers, industry reports, and executive briefings on real estate
            technology, Islamic finance AI, workflow automation, and operational intelligence.
          </p>
          <p className="text-[13px] leading-relaxed max-w-lg" style={{ color: "var(--text-muted)" }}>
            All research is practitioner-focused and available at no cost to qualified enterprise professionals.
          </p>
        </div>

        {/* Published Whitepapers — real downloads */}
        <div id="whitepapers" style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
          <div className="max-w-5xl mx-auto px-6 py-20">
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-4" style={{ color: "var(--text-faint)" }}>
                  Published Whitepapers
                </p>
                <h2 className="text-[28px] md:text-[34px] font-bold tracking-tight" style={{ color: "var(--text-primary)" }}>
                  Available for Immediate Download
                </h2>
                <p className="text-[13px] mt-2" style={{ color: "var(--text-muted)" }}>
                  Download directly — no sign-up required.
                </p>
              </div>
              <span
                className="text-[11px] font-semibold px-3 py-1.5 rounded-full"
                style={{ backgroundColor: "var(--blue-muted)", color: "var(--blue)", border: "1px solid var(--blue-border)" }}
              >
                {publishedWhitepapers.length} PDFs
              </span>
            </div>

            <div className="space-y-5">
              {publishedWhitepapers.map((wp, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-7"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    border: "1px solid var(--blue-border)",
                    background: "linear-gradient(135deg, #FFFFFF 0%, #FAFAFF 100%)",
                  }}
                >
                  <div className="grid md:grid-cols-[1.6fr_1fr] gap-8">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span
                          className="text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest"
                          style={{ backgroundColor: "var(--blue-muted)", color: "var(--blue)" }}
                        >
                          {wp.category}
                        </span>
                        <span className="text-[11px] font-medium" style={{ color: "var(--blue)" }}>{wp.pages}</span>
                      </div>
                      <h3 className="text-[17px] font-bold tracking-tight mb-3" style={{ color: "var(--text-primary)" }}>
                        {wp.title}
                      </h3>
                      <p className="text-[13px] leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
                        {wp.description}
                      </p>
                      <p className="text-[11px]" style={{ color: "var(--text-muted)" }}>
                        <span className="font-semibold">For: </span>{wp.audience}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: "var(--text-faint)" }}>
                        Topics Covered
                      </p>
                      <ul className="space-y-2 mb-6">
                        {wp.topics.map((t) => (
                          <li key={t} className="flex items-center gap-2 text-[12px]" style={{ color: "var(--text-secondary)" }}>
                            <span className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: "var(--blue)" }} />
                            {t}
                          </li>
                        ))}
                      </ul>
                      <a
                        href={wp.downloadHref}
                        download
                        className="inline-flex items-center gap-2 px-5 py-3 text-[13px] font-bold rounded-xl transition-all hover:opacity-90 hover:shadow-lg"
                        style={{ backgroundColor: "var(--blue)", color: "var(--on-blue)" }}
                      >
                        <Download size={14} /> Download PDF
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Whitepapers — request access library */}
        <div className="section-light" style={{ backgroundColor: "var(--bg-surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
          <div className="max-w-5xl mx-auto px-6 py-20">
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-4" style={{ color: "var(--text-faint)" }}>
                  Whitepaper Library
                </p>
                <h2 className="text-[28px] md:text-[34px] font-bold tracking-tight" style={{ color: "var(--text-primary)" }}>
                  Research Publications
                </h2>
              </div>
              <span className="text-[12px]" style={{ color: "var(--text-muted)" }}>
                {whitepapers.length} publications available
              </span>
            </div>

            <div className="space-y-5">
              {whitepapers.map((wp, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-7"
                  style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}
                >
                  <div className="grid md:grid-cols-[1.6fr_1fr] gap-8">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span
                          className="text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest"
                          style={{ backgroundColor: "var(--green-muted)", color: "var(--green)" }}
                        >
                          {wp.category}
                        </span>
                        <span className="text-[11px]" style={{ color: "var(--text-faint)" }}>{wp.pages}</span>
                      </div>
                      <h3 className="text-[17px] font-bold tracking-tight mb-3" style={{ color: "var(--text-primary)" }}>
                        {wp.title}
                      </h3>
                      <p className="text-[13px] leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
                        {wp.description}
                      </p>
                      <p className="text-[11px]" style={{ color: "var(--text-muted)" }}>
                        <span className="font-semibold">For: </span>{wp.audience}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: "var(--text-faint)" }}>
                        Topics Covered
                      </p>
                      <ul className="space-y-2 mb-6">
                        {wp.topics.map((t) => (
                          <li key={t} className="flex items-center gap-2 text-[12px]" style={{ color: "var(--text-secondary)" }}>
                            <span className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: "var(--green)" }} />
                            {t}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={wp.href}
                        className="inline-flex items-center gap-2 px-4 py-2.5 text-[12px] font-semibold rounded-lg text-white transition-all"
                        style={{ backgroundColor: "var(--green)" }}
                      >
                        <Download size={12} /> Request Download
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reports & Briefings */}
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="mb-12">
            <p className="text-[10px] font-bold uppercase tracking-widest mb-4" style={{ color: "var(--text-faint)" }}>
              Reports & Briefings
            </p>
            <h2 className="text-[28px] md:text-[34px] font-bold tracking-tight" style={{ color: "var(--text-primary)" }}>
              Industry Reports & Executive Briefings
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {reports.map((r, i) => (
              <div
                key={i}
                className="p-6 rounded-xl flex flex-col"
                style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)" }}
              >
                <span
                  className="self-start text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest mb-4"
                  style={{ backgroundColor: "var(--bg-elevated)", color: "var(--text-muted)" }}
                >
                  {r.type}
                </span>
                <h3 className="text-[14px] font-bold tracking-tight mb-3 flex-1" style={{ color: "var(--text-primary)" }}>
                  {r.title}
                </h3>
                <p className="text-[12px] leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>
                  {r.description}
                </p>
                <Link
                  href={r.href}
                  className="inline-flex items-center gap-1.5 text-[12px] font-semibold transition-colors"
                  style={{ color: "var(--green)" }}
                >
                  Request Access <ArrowRight size={11} />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div style={{ backgroundColor: "var(--bg-surface)", borderTop: "1px solid var(--border)" }}>
          <div className="max-w-5xl mx-auto px-6 py-16">
            <div className="grid md:grid-cols-[1fr_1.6fr] gap-14 items-start">
              <div>
                <h2 className="text-[24px] font-bold tracking-tight mb-4" style={{ color: "var(--text-primary)" }}>
                  Research Access
                </h2>
                <p className="text-[13px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
                  All Daeson Technologies research is available at no cost to qualified enterprise professionals.
                  We ask for basic professional context to ensure our publications reach relevant audiences.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-3 text-white text-[13px] font-semibold rounded-lg"
                  style={{ backgroundColor: "var(--green)" }}
                >
                  Request Research Access <ArrowRight size={13} />
                </Link>
              </div>
              <div className="space-y-4">
                {[
                  { q: "Who is this research for?", a: "Enterprise executives, technology leaders, and operational decision-makers in real estate, Islamic finance, and enterprise operations." },
                  { q: "Is there a cost?", a: "All research publications are provided at no cost. We may ask for your professional context to ensure relevance." },
                  { q: "How long until I receive the research?", a: "Typically within one business day. We review requests personally to ensure publications reach relevant audiences." },
                ].map((item, i) => (
                  <div key={i} className="p-5 rounded-xl" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}>
                    <p className="text-[13px] font-semibold mb-2" style={{ color: "var(--text-primary)" }}>{item.q}</p>
                    <p className="text-[12px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item.a}</p>
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
