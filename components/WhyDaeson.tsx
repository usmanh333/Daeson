"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    tag: "Workflow-First",
    title: "We map operations before writing code",
    description:
      "Every engagement begins with discovery — understanding your actual workflows, data flows, and friction points before any architecture decisions are made.",
  },
  {
    tag: "Ownership",
    title: "Every system is fully owned by you",
    description:
      "No vendor lock-in, no perpetual licensing, no feature restrictions. Complete source code ownership from the first delivery milestone.",
  },
  {
    tag: "Practical",
    title: "Built around operational realities",
    description:
      "We don't over-engineer. Systems are scoped to solve the specific operational problems you have — not hypothetical ones five years from now.",
  },
  {
    tag: "Founder-Led",
    title: "Direct founder involvement throughout",
    description:
      "Daeson's founding team is directly involved in every engagement — from discovery through deployment. Not delegated to a junior team.",
  },
  {
    tag: "Scalable",
    title: "Designed to evolve with your business",
    description:
      "Infrastructure is built with extension in mind. As your operations scale, your systems scale — without starting over or re-platforming.",
  },
  {
    tag: "Governance-Sensitive",
    title: "Enterprise-grade architecture as standard",
    description:
      "Role-based access, data governance, and audit infrastructure are included by default — not add-ons. Particularly relevant for compliance-driven industries.",
  },
];

export default function WhyDaeson() {
  return (
    <section
      className="py-28 relative overflow-hidden"
      style={{ backgroundColor: "var(--bg-surface)" }}
    >
      <div className="section-sep absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-14"
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-widest uppercase mb-6"
            style={{ border: "1px solid var(--border)", color: "var(--text-muted)", backgroundColor: "var(--bg-elevated)" }}
          >
            Why Companies Work With Daeson
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-end">
            <h2
              className="text-[32px] md:text-[40px] font-bold tracking-tight leading-[1.1]"
              style={{ color: "var(--text-primary)" }}
            >
              A Systems Partner.
            
       
            </h2>
            <p className="text-[15px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              The distinction matters. Agencies build what you ask for. We design what your operations
              actually need — then build it with you.
            </p>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.tag}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.45, ease: "easeOut" }}
              className="rounded-xl p-6 transition-all duration-300"
              style={{
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border-hover)")}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")}
            >
              <div
                className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[10px] font-semibold uppercase tracking-widest mb-4"
                style={{
                  backgroundColor: "var(--blue-muted)",
                  border: "1px solid var(--blue-border)",
                  color: "var(--blue)",
                }}
              >
                {reason.tag}
              </div>
              <h3 className="text-[14px] font-bold mb-2.5 leading-snug" style={{ color: "var(--text-primary)" }}>
                {reason.title}
              </h3>
              <p className="text-[12px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom trust statement */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.45, ease: "easeOut" }}
          className="mt-10 text-center"
        >
          <p className="text-[13px] max-w-xl mx-auto leading-relaxed" style={{ color: "var(--text-faint)" }}>
            We are selective about the engagements we take on. We work with organizations where
            operational complexity is real — and where infrastructure ownership makes a measurable difference.
          </p>
        </motion.div>
      </div>

      <div className="section-sep absolute bottom-0 left-0 right-0" />
    </section>
  );
}
