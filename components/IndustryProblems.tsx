"use client";

import { motion } from "framer-motion";

const industries = [
  {
    name: "Real Estate & PropTech",
    color: "#FFFFFF",
    badge: "Real Estate",
    problems: [
      "Fragmented CRM and lead management systems",
      "No unified visibility across portfolio assets",
      "SaaS dependency with zero infrastructure ownership",
      "Manual investor reporting and updates",
      "Disconnected payment and project tracking",
    ],
  },
  {
    name: "Islamic Finance",
    color: "#D4AF37",
    badge: "Islamic Finance",
    problems: [
      "Manual Shariah contract review workflows",
      "Inconsistent compliance documentation",
      "Scholar coordination delays and bottlenecks",
      "No immutable audit trail infrastructure",
      "Fragmented multi-market regulatory reporting",
    ],
  },
  {
    name: "Enterprise Operations",
    color: "#FFFFFF",
    badge: "Enterprise",
    problems: [
      "Disconnected systems across departments",
      "Poor cross-team operational visibility",
      "Manual reporting and data aggregation",
      "No AI integration or workflow automation",
      "Leadership making decisions on stale data",
    ],
  },
];

export default function IndustryProblems() {
  return (
    <section
      className="py-28 relative overflow-hidden"
      style={{ backgroundColor: "var(--bg-page)" }}
    >
      <div className="absolute inset-0 grid-bg opacity-25" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-widest uppercase mb-6"
            style={{
              border: "1px solid rgba(239, 68, 68, 0.2)",
              backgroundColor: "rgba(239, 68, 68, 0.05)",
              color: "rgba(239, 68, 68, 0.85)",
            }}
          >
            The Problem
          </div>
          <h2
            className="text-[34px] md:text-[42px] font-bold tracking-tight mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Industries Built on Fragile Infrastructure
          </h2>
          <p className="text-[16px] max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Operationally complex businesses are patching together SaaS tools that were never designed for their
            workflows. The result is fragmented data, manual bottlenecks, and zero infrastructure ownership.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
              className="rounded-2xl p-6 transition-all duration-300"
              style={{
                backgroundColor: "var(--bg-surface)",
                border: "1px solid var(--border)",
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border-hover)")}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")}
            >
              <div
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-semibold uppercase tracking-wider mb-6"
                style={{ backgroundColor: `${industry.color}14`, color: industry.color }}
              >
                <span className="w-1 h-1 rounded-full" style={{ backgroundColor: industry.color }} />
                {industry.badge}
              </div>

              <h3 className="text-[16px] font-bold mb-5" style={{ color: "var(--text-primary)" }}>
                {industry.name}
              </h3>

              <ul className="space-y-3">
                {industry.problems.map((problem) => (
                  <li
                    key={problem}
                    className="flex items-start gap-3 text-[13px] leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: "rgba(239,68,68,0.5)" }} />
                    {problem}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
          className="mt-12 text-center"
        >
          <p className="text-[14px]" style={{ color: "var(--text-faint)" }}>
            These aren&apos;t software problems. They&apos;re{" "}
            <span className="font-semibold" style={{ color: "var(--text-primary)" }}>
              infrastructure problems
            </span>{" "}
            — and they require infrastructure solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
