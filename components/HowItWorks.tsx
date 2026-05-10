'use client';

import { Upload, BrainCircuit, ShieldCheck, FileText } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const steps = [
  {
    icon: Upload,
    step: '01',
    label: 'Upload Document or Contract',
    desc: 'Submit financial contracts, investment documents, or product structures in any standard format. Bulk uploads supported for institutional-scale operations.',
    color: '#0F3D2E',
    bg: '#e8f4ef',
    detail: 'PDF, DOCX, XML, JSON — any format accepted',
  },
  {
    icon: BrainCircuit,
    step: '02',
    label: 'AI Parsing & Risk Analysis',
    desc: 'The AI engine extracts clauses, identifies contract type, scores Shariah risk, and flags elements requiring scholar review — in under 30 seconds.',
    color: '#1a6b50',
    bg: '#d1ead8',
    detail: 'Powered by NLP tuned for Islamic finance',
  },
  {
    icon: ShieldCheck,
    step: '03',
    label: 'Compliance Engine Validation',
    desc: 'A deterministic rule engine cross-validates AI findings against encoded Shariah principles and AAOIFI standards — producing structured, explainable decisions.',
    color: '#D4AF37',
    bg: '#fdf8e7',
    detail: 'AAOIFI-aligned rule set, institution-configurable',
  },
  {
    icon: FileText,
    step: '04',
    label: 'Audit-Ready Output',
    desc: 'Receive a full Shariah compliance report with scholar annotations, risk scores, and an immutable audit trail — ready for regulators, boards, and external audit.',
    color: '#0F3D2E',
    bg: '#e8f4ef',
    detail: 'Formatted for SBP, SAMA, FCA, and board reporting',
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white" id="how-it-works">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 border"
            style={{ background: '#e8f4ef', borderColor: '#0F3D2E', color: '#0F3D2E' }}
          >
            Platform Workflow
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            From Upload to Compliance —
            <span style={{ color: '#0F3D2E' }}> Fully Streamlined</span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Four clear steps take any financial contract from submission to a fully documented
            Shariah compliance output — with zero gaps in the audit trail.
          </p>
        </motion.div>

        {/* Steps grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              variants={itemVariants}
              whileHover={{ scale: 1.03, boxShadow: '0 12px 32px -8px rgba(15,61,46,0.12)' }}
              className="group relative flex flex-col bg-white rounded-2xl border border-gray-100 p-7 transition-all duration-300 overflow-hidden"
            >
              {/* Step number watermark */}
              <div
                className="absolute top-4 right-5 text-5xl font-black opacity-[0.05] select-none leading-none"
                style={{ color: step.color }}
              >
                {step.step}
              </div>

              {/* Connector line (desktop only) — visual only */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-[46px] right-0 w-6 h-px bg-gray-200 z-10" />
              )}

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 shrink-0"
                style={{ background: step.bg }}
              >
                <step.icon className="w-5 h-5" style={{ color: step.color }} />
              </div>

              <div
                className="text-xs font-bold tracking-widest uppercase mb-2"
                style={{ color: step.color }}
              >
                Step {step.step}
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-2.5 leading-snug">
                {step.label}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed flex-1">{step.desc}</p>

              <div className="mt-4 pt-4 border-t border-gray-50">
                <span className="text-[11px] text-gray-400 italic">{step.detail}</span>
              </div>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: step.color }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Performance callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="rounded-2xl border border-gray-100 p-8 text-center"
          style={{ background: 'linear-gradient(135deg, #f8fffe 0%, #e8f4ef 100%)' }}
        >
          <p className="text-lg font-semibold text-gray-800 mb-1">
            Average end-to-end review time:{' '}
            <span style={{ color: '#0F3D2E' }}>under 3 minutes</span>
          </p>
          <p className="text-sm text-gray-500">
            Compared to industry average of 3–7 days for manual Shariah review cycles.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
