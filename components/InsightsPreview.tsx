"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    category: "Real Estate Operations",
    color: "#3B6AFF",
    title: "Why Real Estate Firms Are Replacing SaaS Stacks with Owned Infrastructure",
    excerpt:
      "Forward-thinking property firms are moving away from stitched-together SaaS tools. The case for owned operational platforms is increasingly compelling — especially for firms with investor complexity, multi-market portfolios, and reporting demands that generic CRMs were never designed to handle.",
    readTime: "8 min read",
    status: "Publishing soon",
    href: "/insights",
  },
  {
    category: "Islamic Finance",
    color: "#C9A84C",
    title: "AI and Shariah Compliance: Building Infrastructure That Supports Scholars",
    excerpt:
      "AI in Islamic finance is most valuable when it removes operational burden from compliance workflows — freeing scholars to focus on substantive jurisprudential decisions rather than manual document review. This is an infrastructure problem, not a technology problem.",
    readTime: "10 min read",
    status: "Publishing soon",
    href: "/insights",
  },
  {
    category: "Operational Intelligence",
    color: "#10B981",
    title: "What Is Operational Infrastructure? A Framework for Complex Businesses",
    excerpt:
      "Most business leaders understand software. Fewer understand operational infrastructure — the layer of purpose-built systems that connects data, workflows, and intelligence across an organization. This piece defines the framework and explains why the distinction matters.",
    readTime: "12 min read",
    status: "Publishing soon",
    href: "/insights",
  },
];

export default function InsightsPreview() {
  return (
    <section className="bg-[#070B12] py-28 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.07] bg-white/[0.02] text-[#94A3B8] text-[11px] font-semibold tracking-widest uppercase mb-6">
              Insights & Research
            </div>
            <h2 className="text-[34px] md:text-[42px] font-extrabold tracking-tight text-white leading-tight">
              Thinking on Operational Systems.
            </h2>
            <p className="text-[14px] text-[#94A3B8] mt-3 max-w-md leading-relaxed">
              Research and frameworks from the Daeson team on operational infrastructure,
              AI governance, and workflow intelligence.
            </p>
          </div>
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#3B6AFF] hover:text-[#4F7FFF] transition-colors shrink-0"
          >
            All research <ArrowRight size={13} />
          </Link>
        </motion.div>

        {/* Article cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {articles.map((article, i) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
              className="bg-[#0D1521] border border-white/[0.07] rounded-2xl p-6 flex flex-col hover:border-white/[0.11] transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-5">
                <div
                  className="inline-flex items-center px-2.5 py-1 rounded-lg text-[10px] font-semibold uppercase tracking-wider"
                  style={{ backgroundColor: `${article.color}12`, color: article.color }}
                >
                  {article.category}
                </div>
                <span className="text-[11px] text-[#4B5568]">{article.readTime}</span>
              </div>

              <h3 className="text-[15px] font-bold text-white mb-3 leading-snug tracking-tight flex-1">
                {article.title}
              </h3>
              <p className="text-[12px] text-[#94A3B8] leading-relaxed mb-5">{article.excerpt}</p>

              <div className="flex items-center justify-between mt-auto">
                <span className="text-[11px] text-[#4B5568] font-medium">{article.status}</span>
                <Link
                  href={article.href}
                  className="inline-flex items-center gap-1.5 text-[12px] font-semibold transition-colors"
                  style={{ color: article.color }}
                >
                  Read <ArrowRight size={11} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
