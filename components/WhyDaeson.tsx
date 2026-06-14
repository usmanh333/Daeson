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
      "We don't over-engineer. Systems are scoped to solve the specific operational problems you have — not every problem you might have in five years.",
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
    tag: "Secure",
    title: "Enterprise-grade architecture as standard",
    description:
      "Role-based access, data governance, and audit infrastructure are included by default — not add-ons. Particularly relevant for compliance-driven industries.",
  },
];

export default function WhyDaeson() {
  return (
    <section className="bg-[#0D1521] py-28 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.07] bg-white/[0.02] text-[#94A3B8] text-[11px] font-semibold tracking-widest uppercase mb-6">
            Why Companies Work With Daeson
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-end">
            <h2 className="text-[34px] md:text-[42px] font-extrabold tracking-tight text-white leading-[1.1]">
              A Systems Partner.
              <br />
              <span className="text-[#94A3B8] font-semibold">Not a Software Agency.</span>
            </h2>
            <p className="text-[15px] text-[#94A3B8] leading-relaxed">
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
              className="bg-[#070B12] border border-white/[0.07] rounded-xl p-6 hover:border-white/[0.11] transition-all duration-300"
            >
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#3B6AFF]/8 border border-[#3B6AFF]/20 text-[#3B6AFF] text-[10px] font-semibold uppercase tracking-widest mb-4">
                {reason.tag}
              </div>
              <h3 className="text-[14px] font-bold text-white mb-2.5 leading-snug">{reason.title}</h3>
              <p className="text-[12px] text-[#94A3B8] leading-relaxed">{reason.description}</p>
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
          <p className="text-[13px] text-[#4B5568] max-w-xl mx-auto leading-relaxed">
            We are selective about the engagements we take on. We work with organizations where
            operational complexity is real — and where infrastructure ownership makes a measurable difference.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
