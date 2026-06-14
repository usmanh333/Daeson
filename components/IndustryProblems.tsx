"use client";

import { motion } from "framer-motion";

const industries = [
  {
    name: "Real Estate & PropTech",
    color: "#3B6AFF",
    badge: "Real Estate",
    problems: [
      "Fragmented CRM and lead management systems",
      "No unified visibility across portfolio assets",
      "SaaS dependency with zero ownership",
      "Manual investor reporting and updates",
      "Disconnected payment and project tracking",
    ],
  },
  {
    name: "Islamic Finance",
    color: "#C9A84C",
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
    color: "#10B981",
    badge: "Enterprise",
    problems: [
      "Disconnected systems across departments",
      "Poor cross-team operational visibility",
      "Manual reporting and data aggregation",
      "No AI integration or workflow automation",
      "Executives making decisions on stale data",
    ],
  },
];

export default function IndustryProblems() {
  return (
    <section className="bg-[#070B12] py-28 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-red-500/20 bg-red-500/[0.06] text-red-400 text-[11px] font-semibold tracking-widest uppercase mb-6">
            The Problem
          </div>
          <h2 className="text-[36px] md:text-[44px] font-extrabold tracking-tight text-white mb-4">
            Industries Built on Fragile Infrastructure
          </h2>
          <p className="text-[16px] text-[#94A3B8] max-w-2xl mx-auto leading-relaxed">
            Operationally complex businesses are patching together SaaS tools that were never designed for their
            workflows. The result is fragmented data, manual bottlenecks, and zero infrastructure ownership.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
              className="bg-[#0D1521] border border-white/[0.07] rounded-2xl p-6 hover:border-white/[0.12] transition-all duration-300"
            >
              <div
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-semibold uppercase tracking-wider mb-6"
                style={{ backgroundColor: `${industry.color}15`, color: industry.color }}
              >
                <span className="w-1 h-1 rounded-full" style={{ backgroundColor: industry.color }} />
                {industry.badge}
              </div>

              <h3 className="text-[16px] font-bold text-white mb-5">{industry.name}</h3>

              <ul className="space-y-3">
                {industry.problems.map((problem) => (
                  <li key={problem} className="flex items-start gap-3 text-[13px] text-[#94A3B8] leading-relaxed">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-red-500/60 flex-shrink-0" />
                    {problem}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
          className="mt-12 text-center"
        >
          <p className="text-[14px] text-[#4B5568]">
            These aren&apos;t software problems. They&apos;re{" "}
            <span className="text-[#EDF2FF] font-semibold">infrastructure problems</span> — and they require
            infrastructure solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
