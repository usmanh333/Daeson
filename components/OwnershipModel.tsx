"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    number: "01",
    title: "Control",
    color: "#3B6AFF",
    points: [
      "Your data lives in your infrastructure",
      "You control the product roadmap",
      "No vendor can change pricing or remove features",
      "Integrations built exactly as you need them",
    ],
  },
  {
    number: "02",
    title: "Cost Model",
    color: "#C9A84C",
    points: [
      "One-time infrastructure investment vs. perpetual subscriptions",
      "No per-seat licensing as teams grow",
      "No forced upgrades or tier restrictions",
      "Total cost typically lower within 2–3 years",
    ],
  },
  {
    number: "03",
    title: "Operational Intelligence",
    color: "#10B981",
    points: [
      "AI built on your actual business data",
      "Reporting designed around your decisions",
      "Workflows aligned to how your team operates",
      "Visibility across every layer of the business",
    ],
  },
];

export default function OwnershipModel() {
  return (
    <section className="bg-[#0D1521] py-28 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#C9A84C]/25 bg-[#C9A84C]/[0.06] text-[#C9A84C] text-[11px] font-semibold tracking-widest uppercase mb-6">
            The Ownership Model
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-end">
            <h2 className="text-[34px] md:text-[42px] font-extrabold tracking-tight text-white leading-[1.08]">
              Beyond the Subscription.
              <br />
              <span className="text-[#94A3B8] font-semibold">Own what powers your operations.</span>
            </h2>
            <p className="text-[15px] text-[#94A3B8] leading-relaxed">
              Most operationally complex businesses are paying monthly for tools that were built for a general
              market — not their specific workflow. The result is operational debt that grows as the business
              does.
            </p>
          </div>
        </motion.div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
              className="bg-[#070B12] border border-white/[0.07] rounded-2xl p-7 hover:border-white/[0.11] transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="text-[11px] font-black tracking-widest"
                  style={{ color: `${pillar.color}60` }}
                >
                  {pillar.number}
                </span>
                <div className="h-px flex-1 bg-white/[0.06]" />
              </div>
              <h3
                className="text-[20px] font-bold mb-5 tracking-tight"
                style={{ color: pillar.color }}
              >
                {pillar.title}
              </h3>
              <ul className="space-y-3">
                {pillar.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-[13px] text-[#94A3B8] leading-relaxed">
                    <span
                      className="mt-1.5 w-1 h-1 rounded-full shrink-0"
                      style={{ backgroundColor: pillar.color }}
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Key message */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
          className="bg-[#3B6AFF]/[0.06] border border-[#3B6AFF]/20 rounded-2xl px-8 py-6 text-center"
        >
          <p className="text-[15px] text-[#EDF2FF] leading-relaxed max-w-2xl mx-auto">
            <span className="font-semibold">We typically begin with the highest operational priority</span>{" "}
            and evolve systems gradually — reducing risk and accelerating value from the first phase.
          </p>
          <p className="text-[12px] text-[#94A3B8] mt-3">
            Start with one operational layer. Scale according to your priorities.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
