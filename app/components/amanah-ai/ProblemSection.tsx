"use client";

import { motion } from "framer-motion";
import { ClipboardList, FileWarning, Clock, SearchX } from "lucide-react";

const problems = [
  {
    icon: ClipboardList,
    title: "Manual Contract Reviews",
    description:
      "Shariah reviews depend heavily on manual effort and individual interpretation, creating delays and inconsistency across products and branches.",
  },
  {
    icon: FileWarning,
    title: "Inconsistent Documentation",
    description:
      "No standardized framework exists for documenting compliance findings — resulting in fragmented records and exposure during regulatory audits.",
  },
  {
    icon: Clock,
    title: "Time-Consuming Scholar Coordination",
    description:
      "Engaging Shariah scholars for review, deliberation, and approval involves lengthy back-and-forth with no structured digital workflow.",
  },
  {
    icon: SearchX,
    title: "Limited Audit Traceability",
    description:
      "Compliance decisions are poorly tracked, making it difficult to demonstrate due diligence to SBP examiners or board-level Shariah committees.",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-24 bg-[#F9FAFB]" id="problem">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <motion.div
          className="text-center mb-16 space-y-3"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 text-xs font-semibold px-4 py-1.5 rounded-full border border-red-100">
            The Challenge
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1F2937] tracking-tight">
            Challenges in Shariah{" "}
            <span className="text-[#0F3D2E]">Compliance Workflows</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            Pakistani financial institutions face compounding operational and regulatory
            challenges in maintaining consistent, auditable Shariah compliance.
          </p>
        </motion.div>

        {/* Problem cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              className="group relative bg-white rounded-xl border border-gray-200 p-6 hover:border-[#0F3D2E]/20 hover:shadow-md transition-all"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.1,
              }}
            >
              {/* Number */}
              <div className="absolute top-4 right-5 text-4xl font-black text-gray-50 select-none group-hover:text-gray-100 transition-colors">
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Icon */}
              <div className="w-11 h-11 rounded-lg bg-red-50 flex items-center justify-center mb-4">
                <problem.icon className="w-5 h-5 text-red-600" />
              </div>

              <h3 className="text-sm font-bold text-[#1F2937] mb-2.5 leading-snug">
                {problem.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{problem.description}</p>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-xl bg-[#0F3D2E] opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
