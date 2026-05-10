'use client';

import { Lock, Server, Building2, Globe, ShieldCheck, Users } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

const pillars = [
  {
    icon: Server,
    title: 'Enterprise-Grade Architecture',
    desc: 'Built to handle institutional-scale contract volumes with 99.9% uptime and robust reliability standards.',
    color: '#0F3D2E',
    bg: '#e8f4ef',
  },
  {
    icon: Lock,
    title: 'Secure & Compliant Infrastructure',
    desc: 'End-to-end encryption, role-based access controls, and data residency options designed for regulated financial institutions.',
    color: '#D4AF37',
    bg: '#fdf8e7',
  },
  {
    icon: Building2,
    title: 'Built for Financial Institutions',
    desc: 'Designed from the ground up for banks, Islamic finance houses, and regulated fintechs — not adapted from generic compliance tools.',
    color: '#0F3D2E',
    bg: '#e8f4ef',
  },
  {
    icon: Globe,
    title: 'Multi-Market Deployment',
    desc: 'Cloud-native architecture that scales from single-market operations to GCC-wide, Pakistan, and UK deployments seamlessly.',
    color: '#D4AF37',
    bg: '#fdf8e7',
  },
  {
    icon: ShieldCheck,
    title: 'Regulatory Readiness',
    desc: 'Built with awareness of SAMA, SBP, UAE Central Bank, and FCA requirements for Islamic and ethical finance compliance.',
    color: '#0F3D2E',
    bg: '#e8f4ef',
  },
  {
    icon: Users,
    title: 'Multi-Stakeholder Access',
    desc: 'Supporting compliance officers, Shariah scholars, auditors, and executive leadership within one unified platform.',
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
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function TrustSection() {
  return (
    <section className="py-24 bg-white" id="trust">
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
            Institutional Confidence
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Designed for{' '}
            <span style={{ color: '#0F3D2E' }}>Institutional Use</span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Every layer of Amanah AI is built to meet the expectations of global financial institutions
            — from security architecture to regulatory documentation readiness.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {pillars.map((p) => (
            <motion.div
              key={p.title}
              variants={cardVariants}
              whileHover={{ y: -4, boxShadow: '0 12px 32px -8px rgba(15,61,46,0.12)' }}
              className="group flex gap-5 p-7 rounded-2xl border border-gray-100 bg-white transition-all duration-300"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: p.bg }}
              >
                <p.icon className="w-5 h-5" style={{ color: p.color }} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm mb-2 group-hover:text-[#0F3D2E] transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom trust band */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-16 rounded-2xl border border-gray-100 bg-gray-50 p-8"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-sm font-semibold text-gray-700 text-center sm:text-left">
              Trusted by institutions across GCC · Pakistan · UK
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {['AAOIFI', 'SAMA Aware', 'SBP Aligned', 'FCA Compatible', 'ISO 27001'].map((badge) => (
                <span
                  key={badge}
                  className="text-xs font-bold px-3 py-1.5 rounded-lg border"
                  style={{ borderColor: '#0F3D2E', color: '#0F3D2E', background: '#e8f4ef' }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
