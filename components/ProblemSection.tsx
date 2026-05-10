'use client';

import { ClipboardList, FileWarning, Clock, SearchX, AlertTriangle, Globe } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

const problems = [
  {
    icon: ClipboardList,
    title: 'Manual Contract Reviews',
    description:
      'Shariah reviews depend heavily on manual effort and individual interpretation, causing delays, inconsistency, and bottlenecks across products and geographies.',
    index: '01',
  },
  {
    icon: FileWarning,
    title: 'Inconsistent Documentation',
    description:
      'No standardised framework exists for documenting compliance findings — resulting in fragmented records and serious exposure during regulatory audits.',
    index: '02',
  },
  {
    icon: Clock,
    title: 'Scholar Coordination Delays',
    description:
      'Engaging Shariah scholars involves lengthy, unstructured back-and-forth. There is no digital workflow to manage review cycles, annotations, or sign-offs.',
    index: '03',
  },
  {
    icon: SearchX,
    title: 'Limited Audit Traceability',
    description:
      'Compliance decisions are poorly tracked, making it difficult to demonstrate due diligence to regulators, external auditors, or Shariah supervisory boards.',
    index: '04',
  },
  {
    icon: AlertTriangle,
    title: 'Regulatory Fragmentation',
    description:
      'Institutions operating across GCC, Pakistan, and UK face different regulatory frameworks with no unified compliance layer — creating risk at every boundary.',
    index: '05',
  },
  {
    icon: Globe,
    title: 'No Scalable Infrastructure',
    description:
      'As Islamic finance volumes grow globally, existing compliance processes cannot scale. Manual operations become a strategic risk for growth-oriented institutions.',
    index: '06',
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ProblemSection() {
  return (
    <section className="py-24 bg-gray-50" id="problem">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 text-xs font-semibold px-4 py-1.5 rounded-full border border-red-100 mb-6">
            The Challenge
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            The Shariah Compliance{' '}
            <span style={{ color: '#0F3D2E' }}>Infrastructure Gap</span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Global Islamic finance institutions face compounding operational and regulatory
            challenges in maintaining consistent, auditable Shariah compliance at scale.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {problems.map((problem) => (
            <motion.div
              key={problem.title}
              variants={cardVariants}
              whileHover={{ scale: 1.02, boxShadow: '0 8px 28px -6px rgba(15,61,46,0.10)' }}
              className="group relative bg-white rounded-2xl border border-gray-100 p-7 transition-all duration-300 overflow-hidden"
            >
              {/* Ghost number */}
              <div className="absolute top-4 right-5 text-5xl font-black text-gray-50 select-none group-hover:text-gray-100 transition-colors leading-none">
                {problem.index}
              </div>

              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center mb-5">
                <problem.icon className="w-5 h-5 text-red-600" />
              </div>

              <h3 className="text-sm font-bold text-gray-900 mb-2.5 leading-snug">
                {problem.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{problem.description}</p>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: '#0F3D2E' }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
