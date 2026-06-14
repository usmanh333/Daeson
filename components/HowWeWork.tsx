"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery & Workflow Mapping",
    description:
      "We begin by mapping your operations in detail — understanding your workflows, pain points, data flows, and compliance requirements before writing a single line of code.",
    detail: "2–3 weeks",
  },
  {
    number: "02",
    title: "Operational Architecture",
    description:
      "We design your system architecture around your business logic — not templates. Every integration, data model, and user role is defined before development begins.",
    detail: "1–2 weeks",
  },
  {
    number: "03",
    title: "Interactive Prototyping",
    description:
      "You see and approve your system before it's built. Interactive prototypes let your team validate workflows, user experience, and feature completeness.",
    detail: "2–4 weeks",
  },
  {
    number: "04",
    title: "System Development",
    description:
      "Structured development with weekly progress reviews. Every feature is documented, tested, and built to enterprise standards with clear handover documentation.",
    detail: "6–16 weeks",
  },
  {
    number: "05",
    title: "Deployment & Optimization",
    description:
      "We handle deployment, team training, and ongoing optimization as your business scales. We don't disappear after launch.",
    detail: "Ongoing",
  },
];

export default function HowWeWork() {
  return (
    <section className="bg-[#070B12] py-28 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-25" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[#3B6AFF]/[0.04] blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#3B6AFF]/25 bg-[#3B6AFF]/8 text-[#3B6AFF] text-[11px] font-semibold tracking-widest uppercase mb-6">
            How We Work
          </div>
          <h2 className="text-[36px] md:text-[44px] font-extrabold tracking-tight text-white mb-4">
            Built Around Your Workflow —
            <br className="hidden md:block" />
            <span className="text-[#94A3B8]"> Not Forced Software.</span>
          </h2>
          <p className="text-[15px] text-[#94A3B8] max-w-xl mx-auto leading-relaxed">
            Our process is modeled on how operational leaders think — from systems design to execution and scale.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#3B6AFF]/30 via-[#3B6AFF]/10 to-transparent md:-translate-x-1/2 hidden sm:block" />

          <div className="space-y-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.07, duration: 0.5, ease: "easeOut" }}
                className={`relative grid md:grid-cols-2 gap-8 items-center ${
                  i % 2 === 1 ? "md:grid-flow-dense" : ""
                }`}
              >
                {/* Content */}
                <div className={i % 2 === 1 ? "md:col-start-2" : ""}>
                  <div className="bg-[#0D1521] border border-white/[0.07] rounded-2xl p-6 hover:border-white/[0.12] transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#3B6AFF]/10 border border-[#3B6AFF]/20 flex items-center justify-center">
                        <span className="text-[11px] font-bold text-[#3B6AFF]">{step.number}</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-[16px] font-bold text-white">{step.title}</h3>
                        </div>
                        <p className="text-[13px] text-[#94A3B8] leading-relaxed mb-3">{step.description}</p>
                        <div className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#4B5568]">
                          <span className="w-1 h-1 rounded-full bg-[#4B5568]" />
                          Typical duration: {step.detail}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center dot — md only */}
                <div
                  className={`hidden md:flex absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#3B6AFF] border-2 border-[#070B12] shadow-lg shadow-[#3B6AFF]/40 z-10`}
                  style={{ top: "50%", transform: "translate(-50%, -50%)" }}
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
          className="text-center text-[13px] text-[#4B5568] mt-16"
        >
          Every engagement starts with a{" "}
          <span className="text-[#EDF2FF] font-semibold">complimentary discovery call</span> — no commitment required.
        </motion.p>
      </div>
    </section>
  );
}
