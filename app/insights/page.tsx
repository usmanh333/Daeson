import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Insights — Operational Infrastructure Research",
  description:
    "Research and analysis from Daeson Technologies on operational infrastructure, AI for business operations, real estate technology, Islamic finance AI, and enterprise workflow systems.",
};

const articles = [
  {
    category: "Real Estate Operations",
    color: "#3B6AFF",
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
    color: "#C9A84C",
    title: "AI and Shariah Compliance: Building Infrastructure That Supports Scholars",
    excerpt:
      "Artificial intelligence in Islamic finance is not about replacing Shariah scholars — it's about building infrastructure that removes the operational burden from compliance workflows, so scholars can focus on jurisprudential judgment rather than manual document review.",
    readTime: "10 min read",
    topics: ["Amanah AI", "Shariah Compliance", "Governance Systems"],
    href: "/insights/ai-shariah-compliance",
    available: false,
  },
  {
    category: "Operational Intelligence",
    color: "#10B981",
    title: "What Is Operational Infrastructure? A Framework for Complex Businesses",
    excerpt:
      "Most businesses understand software. Few understand operational infrastructure — the layer of purpose-built systems that connect data, workflows, and intelligence across an organization. This piece defines the framework and explains why it matters for complex operations.",
    readTime: "12 min read",
    topics: ["Operational Infrastructure", "Enterprise AI", "Workflow Automation"],
    href: "/insights/operational-infrastructure-framework",
    available: false,
  },
  {
    category: "Enterprise Systems",
    color: "#7B6AFF",
    title: "The Total Cost of SaaS Dependency for Enterprise Operations",
    excerpt:
      "When you add up per-seat licensing, integration costs, customization limits, and the hidden cost of data fragmentation — most enterprise SaaS stacks are more expensive than owned infrastructure within three years.",
    readTime: "9 min read",
    topics: ["SaaS vs Custom", "Enterprise Cost Analysis", "Build vs Buy"],
    href: "/insights/saas-dependency-cost",
    available: false,
  },
  {
    category: "AI Governance",
    color: "#EF4444",
    title: "AI Governance for Regulated Industries: Principles and Infrastructure",
    excerpt:
      "As AI becomes embedded in compliance, finance, and operational workflows, the question of AI governance becomes critical — particularly in regulated industries like Islamic finance and real estate. This piece outlines the infrastructure principles that enable responsible AI deployment.",
    readTime: "11 min read",
    topics: ["AI Governance", "Compliance Infrastructure", "Regulated Industries"],
    href: "/insights/ai-governance-regulated-industries",
    available: false,
  },
  {
    category: "Real Estate Technology",
    color: "#3B6AFF",
    title: "Investor Reporting Infrastructure for Real Estate Firms: Building vs Buying",
    excerpt:
      "Investor relations in real estate requires consistent, accurate, and timely reporting — but most generic tools weren't designed for this use case. We examine the build vs. buy decision for real estate investor reporting infrastructure.",
    readTime: "7 min read",
    topics: ["Investor Relations", "Real Estate CRM", "Reporting Automation"],
    href: "/insights/investor-reporting-real-estate",
    available: false,
  },
];

export default function InsightsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#070B12] min-h-screen pt-24">
        <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

        {/* Header */}
        <section className="relative max-w-7xl mx-auto px-6 pt-16 pb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/8 bg-white/3 text-[#94A3B8] text-[11px] font-semibold tracking-widest uppercase mb-8">
            Insights & Research
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-end">
            <h1 className="text-[42px] md:text-[52px] font-extrabold text-white tracking-tight leading-[1.06]">
              Thinking on{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #3B6AFF 0%, #7B9FFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Operational Systems.
              </span>
            </h1>
            <p className="text-[15px] text-[#94A3B8] leading-relaxed">
              Research, frameworks, and analysis on operational infrastructure, AI for business operations,
              real estate technology, and Islamic finance systems.
            </p>
          </div>
        </section>

        {/* Articles */}
        <section className="relative max-w-7xl mx-auto px-6 pb-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <div
                key={article.title}
                className="bg-[#0D1521] border border-white/8 rounded-2xl p-6 flex flex-col hover:border-white/12 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-semibold uppercase tracking-wider"
                    style={{ backgroundColor: `${article.color}15`, color: article.color }}
                  >
                    {article.category}
                  </div>
                  <span className="text-[11px] text-[#4B5568]">{article.readTime}</span>
                </div>

                <h2 className="text-[16px] font-bold text-white mb-3 leading-snug tracking-tight">{article.title}</h2>
                <p className="text-[13px] text-[#94A3B8] leading-relaxed mb-5 flex-1">{article.excerpt}</p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {article.topics.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-md bg-white/4 border border-white/6 text-[10px] text-[#94A3B8]"
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
                  <span className="text-[12px] text-[#4B5568] font-medium">Publishing soon</span>
                )}
              </div>
            ))}
          </div>

          {/* Subscribe */}
          <div className="mt-16 bg-[#0D1521] border border-white/8 rounded-2xl p-8 text-center max-w-2xl mx-auto">
            <h2 className="text-[22px] font-bold text-white mb-3 tracking-tight">
              Get notified when articles publish
            </h2>
            <p className="text-[14px] text-[#94A3B8] leading-relaxed mb-6">
              We publish research on operational infrastructure, AI systems, and enterprise technology.
              No noise — just high-signal thinking.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#3B6AFF] hover:bg-[#4F7FFF] text-white text-[14px] font-semibold rounded-xl transition-colors"
            >
              Stay in Touch <ArrowRight size={14} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
