'use client';

import {
  BrainCircuit,
  BarChart3,
  BookOpen,
  ClipboardCheck,
  FileText,
  Users,
} from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const features = [
  {
    icon: BrainCircuit,
    title: 'AI Contract Analysis',
    description:
      'Automatically detects compliance risks and flags critical clauses using NLP models tuned specifically for Islamic finance terminology and contract structures.',
    badge: 'Core AI',
    color: '#0F3D2E',
    bg: '#e8f4ef',
  },
  {
    icon: BarChart3,
    title: 'Shariah Risk Scoring',
    description:
      'Quantifies compliance exposure with clear, weighted risk indicators across contract types — giving decision-makers actionable clarity on every submission.',
    badge: 'Risk Engine',
    color: '#D4AF37',
    bg: '#fdf8e7',
  },
  {
    icon: BookOpen,
    title: 'Scholar Review Workflow',
    description:
      'A structured digital interface for Shariah scholars to review flagged clauses, add annotations, and formally approve or reject compliance decisions.',
    badge: 'Governance',
    color: '#0F3D2E',
    bg: '#e8f4ef',
  },
  {
    icon: ClipboardCheck,
    title: 'Immutable Audit Trails',
    description:
      'Full, tamper-proof audit trails for every compliance decision — built for regulatory review, internal governance, and external reporting requirements.',
    badge: 'Compliance',
    color: '#D4AF37',
    bg: '#fdf8e7',
  },
  {
    icon: FileText,
    title: 'Compliance Reporting',
    description:
      'Generate structured, institution-grade Shariah compliance reports instantly — formatted for boards, regulators, and external auditors across all markets.',
    badge: 'Reporting',
    color: '#0F3D2E',
    bg: '#e8f4ef',
  },
  {
    icon: Users,
    title: 'Multi-Role Access',
    description:
      'Designed for compliance officers, Shariah scholars, auditors, and executives — each with the right level of access, visibility, and workflow permissions.',
    badge: 'Enterprise',
    color: '#D4AF37',
    bg: '#fdf8e7',
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Features() {
  return (
    <section className="py-24 bg-gray-50" id="features">
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
            Platform Capabilities
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Built for Every Layer of
            <span style={{ color: '#0F3D2E' }}> Compliance</span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            From initial contract ingestion to final board reporting, Amanah AI covers every
            step of the institutional Shariah compliance lifecycle.
          </p>
        </motion.div>

        {/* Feature cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={cardVariants}
              whileHover={{ scale: 1.03, boxShadow: '0 12px 32px -8px rgba(15,61,46,0.13)' }}
              className="group relative bg-white rounded-2xl border border-gray-100 p-7 transition-all duration-300 overflow-hidden"
            >
              {/* Badge */}
              <div
                className="absolute top-5 right-5 text-[10px] font-bold px-2.5 py-1 rounded-full"
                style={{ background: f.bg, color: f.color }}
              >
                {f.badge}
              </div>

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: f.bg }}
              >
                <f.icon className="w-5 h-5" style={{ color: f.color }} />
              </div>

              <h3 className="font-bold text-gray-900 text-sm mb-2.5 group-hover:text-[#0F3D2E] transition-colors leading-snug">
                {f.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.description}</p>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: f.color }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
