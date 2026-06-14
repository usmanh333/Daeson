"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    number: "01",
    title: "Control",
    color: "var(--blue)",
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
    color: "var(--gold)",
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
    <section
      className="py-28 relative overflow-hidden"
      style={{ backgroundColor: "var(--bg-surface)" }}
    >
      <div className="section-sep absolute top-0 left-0 right-0" />
      <div className="section-sep absolute bottom-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-widest uppercase mb-6"
            style={{ border: "1px solid var(--gold-border)", backgroundColor: "var(--gold-muted)", color: "var(--gold)" }}
          >
            The Ownership Model
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-end">
            <h2
              className="text-[32px] md:text-[40px] font-bold tracking-tight leading-[1.08]"
              style={{ color: "var(--text-primary)" }}
            >
              Beyond the Subscription.
              <br />
              <span style={{ color: "var(--text-secondary)", fontWeight: 600 }}>Own what powers your operations.</span>
            </h2>
            <p className="text-[15px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Most operationally complex businesses are paying monthly for tools that were built for a general
              market — not their specific workflow. The result is operational debt that grows as the business does.
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
              className="rounded-2xl p-7 transition-all duration-300"
              style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border-hover)")}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")}
            >
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="text-[11px] font-black tracking-widest"
                  style={{ color: "var(--text-faint)" }}
                >
                  {pillar.number}
                </span>
                <div className="h-px flex-1" style={{ backgroundColor: "var(--border)" }} />
              </div>
              <h3
                className="text-[20px] font-bold mb-5 tracking-tight"
                style={{ color: pillar.color }}
              >
                {pillar.title}
              </h3>
              <ul className="space-y-3">
                {pillar.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-[13px] leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
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
          className="rounded-2xl px-8 py-6 text-center"
          style={{ backgroundColor: "var(--blue-muted)", border: "1px solid var(--blue-border)" }}
        >
          <p className="text-[15px] leading-relaxed max-w-2xl mx-auto" style={{ color: "var(--text-primary)" }}>
            <span className="font-semibold">We typically begin with the highest operational priority</span>{" "}
            and evolve systems gradually — reducing risk and accelerating value from the first phase.
          </p>
          <p className="text-[12px] mt-3" style={{ color: "var(--text-secondary)" }}>
            Start with one operational layer. Scale according to your priorities.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
