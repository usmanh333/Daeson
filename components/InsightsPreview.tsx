"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    category: "Real Estate Operations",
    color: "var(--blue)",
    rawColor: "#3B6AFF",
    title: "Why Real Estate Firms Are Replacing SaaS Stacks with Owned Infrastructure",
    excerpt:
      "Forward-thinking property firms are moving away from stitched-together SaaS tools. The case for owned operational platforms is increasingly compelling — especially for firms with investor complexity, multi-market portfolios, and reporting demands that generic CRMs were never designed to handle.",
    readTime: "8 min read",
    status: "Publishing soon",
    href: "/insights",
  },
  {
    category: "Islamic Finance",
    color: "var(--gold)",
    rawColor: "#D4AF37",
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
    rawColor: "#10B981",
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
    <section
      className="py-28 relative overflow-hidden"
      style={{ backgroundColor: "var(--bg-page)" }}
    >
      <div className="absolute inset-0 grid-bg opacity-15" />

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
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-widest uppercase mb-6"
              style={{ border: "1px solid var(--border)", color: "var(--text-muted)", backgroundColor: "var(--bg-surface)" }}
            >
              Insights & Research
            </div>
            <h2
              className="text-[32px] md:text-[40px] font-bold tracking-tight leading-tight"
              style={{ color: "var(--text-primary)" }}
            >
              Thinking on Operational Systems.
            </h2>
            <p
              className="text-[14px] mt-3 max-w-md leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Research and frameworks from the Daeson team on operational infrastructure,
              AI governance, and workflow intelligence.
            </p>
          </div>
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-[13px] font-semibold shrink-0 transition-colors"
            style={{ color: "var(--blue)" }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "var(--blue-hover)")}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "var(--blue)")}
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
              className="rounded-2xl p-6 flex flex-col transition-all duration-300"
              style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)" }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border-hover)")}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")}
            >
              <div className="flex items-start justify-between mb-5">
                <div
                  className="inline-flex items-center px-2.5 py-1 rounded-lg text-[10px] font-semibold uppercase tracking-wider"
                  style={{ backgroundColor: `${article.rawColor}12`, color: article.color }}
                >
                  {article.category}
                </div>
                <span className="text-[11px]" style={{ color: "var(--text-faint)" }}>{article.readTime}</span>
              </div>

              <h3
                className="text-[15px] font-bold mb-3 leading-snug tracking-tight flex-1"
                style={{ color: "var(--text-primary)" }}
              >
                {article.title}
              </h3>
              <p
                className="text-[12px] leading-relaxed mb-5"
                style={{ color: "var(--text-secondary)" }}
              >
                {article.excerpt}
              </p>

              <div className="flex items-center justify-between mt-auto">
                <span className="text-[11px] font-medium" style={{ color: "var(--text-faint)" }}>
                  {article.status}
                </span>
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
