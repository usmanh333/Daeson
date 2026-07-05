import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Founder Insights — Operational Intelligence & Enterprise Technology Perspectives",
  description:
    "Perspectives from the Daeson Technologies founding team on operational infrastructure, real estate technology, Islamic finance AI, workflow automation, and the future of enterprise software.",
  alternates: { canonical: "https://daesontechnologies.online/founder-insights" },
};

const articles = [
  {
    category: "Operations",
    title: "Why Operational Ownership Matters More Than Technology Stack",
    excerpt:
      "Most enterprise technology conversations start with 'which tools should we use?' But the more important question is: who owns the operational logic of your business? When you build on SaaS, you lease it. When you build owned infrastructure, your operational knowledge compounds — it becomes a strategic asset.",
    readTime: "8 min read",
    slug: "#why-operational-ownership",
    featured: true,
  },
  {
    category: "Real Estate Technology",
    title: "The Future of Real Estate Technology Is Operational, Not Transactional",
    excerpt:
      "Real estate technology has been dominated by transactional tools — CRMs, listing platforms, transaction management software. The next era belongs to operational platforms: systems that give real estate firms comprehensive visibility into their portfolio, pipeline, investors, and performance in real time.",
    readTime: "7 min read",
    slug: "#future-re-tech",
    featured: false,
  },
  {
    category: "Enterprise Software",
    title: "Subscription Fatigue Is Real — And It's Getting Worse",
    excerpt:
      "The average enterprise technology team now manages dozens of SaaS subscriptions. Each one seemed reasonable when purchased. Together, they create fragmented data, manual integration work, and zero operational coherence. The subscription model was sold as flexibility. It delivered dependency.",
    readTime: "6 min read",
    slug: "#subscription-fatigue",
    featured: false,
  },
  {
    category: "AI Integration",
    title: "AI Beyond Chatbots: What Enterprise AI Actually Does",
    excerpt:
      "Most enterprise AI conversations default to chatbots and Q&A interfaces. But the highest-value AI implementations embed intelligence directly into operational workflows — automating analysis, surfacing patterns, flagging compliance issues, and generating documentation at the point where decisions are made.",
    readTime: "9 min read",
    slug: "#ai-beyond-chatbots",
    featured: false,
  },
  {
    category: "Islamic Finance",
    title: "Islamic Finance Needs Better Infrastructure — Not Just Better Apps",
    excerpt:
      "The Islamic finance industry has seen significant fintech activity at the consumer layer — payment apps, savings products, halal investment platforms. What remains underserved is the operational layer: the compliance workflows, governance documentation, and audit infrastructure that Islamic financial institutions rely on daily.",
    readTime: "10 min read",
    slug: "#islamic-finance-infrastructure",
    featured: false,
  },
  {
    category: "Operational Intelligence",
    title: "Operational Intelligence Explained: What It Is and Why It Matters",
    excerpt:
      "Operational intelligence is not a dashboard. It's a system design principle: the idea that AI should surface the right information at the point of decision, embedded in the operational workflows where that decision occurs. This is fundamentally different from BI reports that describe the past.",
    readTime: "8 min read",
    slug: "#operational-intelligence",
    featured: false,
  },
  {
    category: "Workflow Automation",
    title: "Workflow Automation Best Practices: What Works and What Doesn't",
    excerpt:
      "Ten years of enterprise automation projects have produced a clear pattern: implementations that start from technology (deploy RPA bots) fail; implementations that start from operational workflow mapping succeed. The difference is whether the automation serves the work or replaces it with something the work has to work around.",
    readTime: "7 min read",
    slug: "#workflow-automation-best-practices",
    featured: false,
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is operational ownership in enterprise software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Operational ownership means the organization controls and owns the software systems that run its operations — rather than leasing SaaS tools from third-party vendors. Owned infrastructure means you own the source code, database, architecture, and operational logic. This eliminates subscription dependency, enables deep customization, and turns your operational systems into a compounding strategic asset rather than a recurring cost center.",
      },
    },
    {
      "@type": "Question",
      name: "Why is subscription fatigue a growing problem in enterprise software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Enterprise organizations have accumulated dozens of SaaS subscriptions, each addressing a specific operational need. The cumulative effect is data fragmentation (each system holds different data), integration overhead (manual or brittle connections between systems), vendor dependency (no control over pricing, features, or continuity), and operational incoherence (no unified view of the business). The subscription model is also increasingly expensive at scale — per-seat pricing compounds as organizations grow. The result is that many enterprises are spending more on SaaS than they would have on purpose-built owned systems.",
      },
    },
    {
      "@type": "Question",
      name: "What does AI integration actually do for enterprise operations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When AI is integrated into enterprise operations as an operational layer (not a bolt-on chatbot), it performs three core functions: automation (completing routine analytical tasks that previously required human time), intelligence (surfacing patterns and anomalies from operational data that humans would miss), and decision support (providing relevant context at the point where decisions are made, embedded in the workflows where those decisions occur). The result is measurable improvement in operational efficiency, decision quality, and executive visibility.",
      },
    },
    {
      "@type": "Question",
      name: "Why does Islamic finance need better operational infrastructure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Islamic financial transactions require meticulous Shariah compliance documentation, scholar review, audit trail generation, and governance oversight at every stage. Most Islamic financial institutions manage these requirements through manual, paper-heavy processes — which are slow, error-prone, and create audit risk. Better operational infrastructure means digitizing and automating the compliance workflow layer so scholars can focus on substantive jurisprudential decisions rather than administrative documentation. This is what Amanah AI is designed to do.",
      },
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Founder Insights — Daeson Technologies",
  description: "Perspectives on operational infrastructure, enterprise technology, real estate technology, and Islamic finance AI",
  url: "https://daesontechnologies.online/founder-insights",
  publisher: {
    "@type": "Organization",
    name: "Daeson Technologies",
    url: "https://daesontechnologies.online",
  },
  blogPost: articles.map(a => ({
    "@type": "BlogPosting",
    headline: a.title,
    description: a.excerpt,
    author: { "@type": "Person", name: "Mahnoor Zafar", url: "https://daesontechnologies.online/about" },
    publisher: { "@type": "Organization", name: "Daeson Technologies" },
    url: `https://daesontechnologies.online/founder-insights${a.slug}`,
  })),
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Founder Insights — Daeson Technologies",
  url: "https://daesontechnologies.online/founder-insights",
  isPartOf: { "@id": "https://daesontechnologies.online/#website" },
};

export default function FounderInsightsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main style={{ backgroundColor: "var(--bg-page)", minHeight: "100vh" }}>

        {/* Hero */}
        <div className="max-w-5xl mx-auto px-6 pt-36 pb-20">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-widest uppercase mb-8"
            style={{ border: "1px solid var(--green-border)", backgroundColor: "var(--green-muted)", color: "var(--green)" }}
          >
            Founder Insights
          </div>
          <h1 className="text-[38px] md:text-[52px] font-bold tracking-tight leading-[1.05] mb-6 max-w-4xl" style={{ color: "var(--text-primary)" }}>
            Perspectives on Operational
            <br />
            <span style={{ color: "var(--green)" }}>Infrastructure & Enterprise Technology</span>
          </h1>
          <p className="text-[16px] leading-relaxed max-w-2xl" style={{ color: "var(--text-secondary)" }}>
            Thinking from the Daeson Technologies founding team on the future of enterprise software,
            operational intelligence, real estate technology, and Islamic finance AI.
          </p>
        </div>

        {/* Featured article */}
        {articles.filter(a => a.featured).map((article, i) => (
          <div key={i} style={{ backgroundColor: "var(--bg-surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
            <div className="max-w-5xl mx-auto px-6 py-16">
              <div className="grid md:grid-cols-[1.4fr_1fr] gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <span
                      className="text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest"
                      style={{ backgroundColor: "var(--green-muted)", color: "var(--green)" }}
                    >
                      Featured · {article.category}
                    </span>
                    <span className="text-[11px]" style={{ color: "var(--text-faint)" }}>{article.readTime}</span>
                  </div>
                  <h2 className="text-[24px] md:text-[30px] font-bold tracking-tight mb-4 leading-snug" style={{ color: "var(--text-primary)" }}>
                    {article.title}
                  </h2>
                  <p className="text-[14px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
                    {article.excerpt}
                  </p>
                  <Link
                    href={article.slug}
                    className="inline-flex items-center gap-2 text-[13px] font-semibold transition-colors"
                    style={{ color: "var(--green)" }}
                  >
                    Read Article <ArrowRight size={13} />
                  </Link>
                </div>
                <div
                  className="p-8 rounded-2xl"
                  style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}
                >
                  <p className="text-[11px] font-bold uppercase tracking-widest mb-4" style={{ color: "var(--text-faint)" }}>
                    Key Perspective
                  </p>
                  <blockquote
                    className="text-[16px] leading-relaxed font-medium"
                    style={{ color: "var(--text-primary)", borderLeft: "3px solid var(--green)", paddingLeft: "16px" }}
                  >
                    "When you build on SaaS, you lease it. When you build owned infrastructure, your operational knowledge compounds — it becomes a strategic asset."
                  </blockquote>
                  <p className="mt-4 text-[11px]" style={{ color: "var(--text-faint)" }}>— Mahnoor Zafar, Founder</p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* All articles */}
        <div className="max-w-5xl mx-auto px-6 py-20">
          <p className="text-[10px] font-bold uppercase tracking-widest mb-10" style={{ color: "var(--text-faint)" }}>
            All Insights
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {articles.filter(a => !a.featured).map((article, i) => (
              <div
                key={i}
                className="p-7 rounded-2xl flex flex-col"
                style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest"
                    style={{ backgroundColor: "var(--bg-elevated)", color: "var(--text-muted)" }}
                  >
                    {article.category}
                  </span>
                  <span className="text-[10px]" style={{ color: "var(--text-faint)" }}>{article.readTime}</span>
                </div>
                <h3 className="text-[15px] font-bold tracking-tight mb-3 leading-snug flex-1" style={{ color: "var(--text-primary)" }}>
                  {article.title}
                </h3>
                <p className="text-[12px] leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>
                  {article.excerpt.substring(0, 160)}...
                </p>
                <Link
                  href={article.slug}
                  className="inline-flex items-center gap-1.5 text-[12px] font-semibold transition-colors"
                  style={{ color: "var(--green)" }}
                >
                  Read More <ArrowRight size={11} />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* GEO FAQ section */}
        <div style={{ backgroundColor: "var(--bg-surface)", borderTop: "1px solid var(--border)" }}>
          <div className="max-w-5xl mx-auto px-6 py-20">
            <p className="text-[10px] font-bold uppercase tracking-widest mb-10" style={{ color: "var(--text-faint)" }}>
              Common Questions
            </p>
            <div className="space-y-5">
              {[
                {
                  q: "What is operational ownership in enterprise software?",
                  a: "Operational ownership means the organization controls and owns the software systems that run its operations — rather than leasing SaaS tools from third-party vendors. Owned infrastructure means you own the source code, database, architecture, and operational logic. This eliminates subscription dependency, enables deep customization, and turns your operational systems into a compounding strategic asset.",
                },
                {
                  q: "Why is subscription fatigue a growing problem in enterprise software?",
                  a: "Enterprise organizations have accumulated dozens of SaaS subscriptions, each addressing a specific operational need. The cumulative effect is data fragmentation, integration overhead, vendor dependency, and operational incoherence — no unified view of the business. The subscription model is also increasingly expensive at scale as per-seat pricing compounds with organizational growth.",
                },
                {
                  q: "What does AI integration actually do for enterprise operations?",
                  a: "When AI is integrated as an operational layer — not a bolt-on chatbot — it automates routine analytical tasks, surfaces patterns from operational data, and provides decision support at the point where decisions are made. The result is measurable improvement in operational efficiency, decision quality, and executive visibility.",
                },
                {
                  q: "Why does Islamic finance need better operational infrastructure?",
                  a: "Islamic financial transactions require meticulous Shariah compliance documentation, scholar review, audit trail generation, and governance oversight at every stage. Most institutions manage these through manual, paper-heavy processes that are slow, error-prone, and create audit risk. Better operational infrastructure digitizes the compliance workflow layer so scholars can focus on substantive jurisprudential decisions rather than administrative documentation.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-xl"
                  style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}
                >
                  <h3 className="text-[14px] font-semibold mb-3" style={{ color: "var(--text-primary)" }}>{item.q}</h3>
                  <p className="text-[13px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
