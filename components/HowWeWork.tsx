"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Operational Discovery",
    description:
      "We map your operations in detail — workflows, data flows, decision-making patterns, compliance requirements, and friction points — before any architecture or code decisions are made.",
    detail: "2–3 weeks",
  },
  {
    number: "02",
    title: "Workflow Architecture",
    description:
      "Every integration, data model, user role, and system boundary is designed around your business logic — not adapted from a generic template. Architecture is reviewed and approved before development begins.",
    detail: "1–2 weeks",
  },
  {
    number: "03",
    title: "Prototype & Validation",
    description:
      "You see and approve your system before it's built. Interactive prototypes allow your team to validate workflows, confirm business logic, and identify gaps — reducing downstream risk significantly.",
    detail: "2–4 weeks",
  },
  {
    number: "04",
    title: "Development & Integration",
    description:
      "Structured build with weekly progress reviews and clear milestones. Every feature is documented and tested. Integration with existing tools and data sources is handled methodically.",
    detail: "6–16 weeks",
  },
  {
    number: "05",
    title: "Deployment & Evolution",
    description:
      "Deployment, team training, and documentation are handled systematically. Post-deployment, we support operational optimization and system evolution as your business grows.",
    detail: "Ongoing",
  },
];

export default function HowWeWork() {
  return (
    <section
      className="py-28 relative overflow-hidden"
      style={{ backgroundColor: "var(--bg-page)" }}
    >
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.045) 0%, transparent 70%)", filter: "blur(80px)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-widest uppercase mb-6"
            style={{ border: "1px solid var(--blue-border)", backgroundColor: "var(--blue-muted)", color: "var(--blue)" }}
          >
            How We Build Operational Systems
          </div>
          <h2
            className="text-[32px] md:text-[42px] font-bold tracking-tight leading-[1.1] mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            A Structured Path from Discovery
            <br />
            <span style={{ color: "var(--text-secondary)", fontWeight: 600 }}>to Production-Ready System</span>
          </h2>
          <p className="text-[15px] max-w-xl mx-auto leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            We typically begin with the highest operational priority and evolve systems gradually —
            reducing adoption risk while delivering measurable value from the first phase.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical connector line */}
          <div
            className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px hidden sm:block md:-translate-x-1/2"
            style={{ background: "linear-gradient(to bottom, var(--blue-border), rgba(255,255,255,0.10), transparent)" }}
          />

          <div className="space-y-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.07, duration: 0.5, ease: "easeOut" }}
                className={`relative grid md:grid-cols-2 gap-8 items-center ${
                  i % 2 === 1 ? "md:grid-flow-dense" : ""
                }`}
              >
                {/* Content card */}
                <div className={i % 2 === 1 ? "md:col-start-2" : ""}>
                  <div
                    className="rounded-2xl p-6 transition-all duration-300"
                    style={{
                      backgroundColor: "var(--bg-surface)",
                      border: "1px solid var(--border)",
                    }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border-hover)")}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{
                          backgroundColor: "var(--blue-muted)",
                          border: "1px solid var(--blue-border)",
                        }}
                      >
                        <span className="text-[11px] font-bold" style={{ color: "var(--blue)" }}>
                          {step.number}
                        </span>
                      </div>
                      <div>
                        <h3
                          className="text-[16px] font-bold mb-2"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {step.title}
                        </h3>
                        <p
                          className="text-[13px] leading-relaxed mb-3"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          {step.description}
                        </p>
                        <div
                          className="inline-flex items-center gap-1.5 text-[11px] font-medium"
                          style={{ color: "var(--text-faint)" }}
                        >
                          <span
                            className="w-1 h-1 rounded-full"
                            style={{ backgroundColor: "var(--text-faint)" }}
                          />
                          Typical duration: {step.detail}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center dot on md */}
                <div
                  className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full z-10"
                  style={{
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    backgroundColor: "var(--blue)",
                    border: "2px solid var(--bg-page)",
                    boxShadow: "0 0 0 4px var(--blue-muted)",
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center text-[13px] mt-16"
          style={{ color: "var(--text-faint)" }}
        >
          Every engagement starts with a{" "}
          <span className="font-semibold" style={{ color: "var(--text-primary)" }}>
            complimentary discovery call
          </span>{" "}
          — no commitment required.
        </motion.p>
      </div>
    </section>
  );
}
