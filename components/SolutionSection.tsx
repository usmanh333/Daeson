'use client';

import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const pillars = [
  {
    step: '01',
    title: 'Ingest Financial Contracts',
    desc: 'Upload contracts in any standard format. The system parses, structures, and classifies content automatically — including complex multi-clause instruments.',
    color: '#0F3D2E',
  },
  {
    step: '02',
    title: 'AI-Powered Shariah Analysis',
    desc: 'Deep analysis of contract clauses against Shariah principles, AAOIFI standards, and institution-specific rulings — with explainable risk scoring.',
    color: '#1a6b50',
  },
  {
    step: '03',
    title: 'Scholar Review & Decision',
    desc: 'Structured digital workflow for Shariah scholars to review flagged clauses, add annotations, and formally approve or reject compliance findings.',
    color: '#D4AF37',
  },
  {
    step: '04',
    title: 'Report & Audit Trail',
    desc: 'Instant generation of institution-grade compliance reports with an immutable audit trail — ready for regulators, boards, and external auditors.',
    color: '#0F3D2E',
  },
];

const benefits = [
  'Reduces manual review time by over 70%',
  'Consistent, standards-based compliance decisions',
  'Regulator-ready documentation at all times',
  'Scales from single-product to institution-wide deployment',
];

export default function SolutionSection() {
  return (
    <section className="py-24 section-gradient" id="solution">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="space-y-6 lg:sticky lg:top-28"
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold border"
              style={{ background: '#e8f4ef', borderColor: '#0F3D2E', color: '#0F3D2E' }}
            >
              <Sparkles className="w-3.5 h-3.5" style={{ color: '#D4AF37' }} />
              Our Solution
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              A New Standard for{' '}
              <span className="block" style={{ color: '#0F3D2E' }}>
                Shariah Compliance
              </span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Amanah AI is the Shariah Compliance Intelligence Platform — enabling financial
              institutions to analyse contracts with AI, validate against Shariah principles, and
              streamline scholar decision-making within a unified, auditable system.
            </p>

            <p className="text-base text-gray-500 leading-relaxed">
              From automated risk scoring to structured scholar workflows and complete audit trails,
              Amanah AI delivers the infrastructure Islamic finance institutions need to operate with
              confidence, consistency, and regulatory transparency — across every market.
            </p>

            {/* Benefits */}
            <ul className="space-y-3 pt-2">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: '#0F3D2E' }} />
                  <span className="text-sm text-gray-700">{b}</span>
                </li>
              ))}
            </ul>

            <a
              href="#cta"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 mt-2"
              style={{ background: 'linear-gradient(135deg, #0F3D2E 0%, #1a6b50 100%)' }}
            >
              Explore the Platform
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Right: Step visual */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="rounded-2xl p-8 shadow-xl border border-gray-100 bg-white"
          >
            <div className="space-y-0">
              {pillars.map((item, idx) => (
                <div key={item.step} className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold text-white shrink-0"
                      style={{ background: item.color }}
                    >
                      {item.step}
                    </div>
                    {idx < pillars.length - 1 && (
                      <div
                        className="w-px flex-1 my-1"
                        style={{ background: '#e5e7eb', minHeight: '28px' }}
                      />
                    )}
                  </div>
                  <div className={`pb-6 ${idx === pillars.length - 1 ? '' : ''}`}>
                    <div className="font-bold text-gray-900 text-sm leading-snug mb-1.5 pt-2">
                      {item.title}
                    </div>
                    <div className="text-sm text-gray-500 leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
