'use client';

import { Landmark, TrendingUp, Building2, CreditCard } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const useCases = [
  {
    icon: Building2,
    title: 'Banks & Financial Institutions',
    description:
      'Deploy compliance infrastructure across retail and corporate Islamic banking divisions. Streamline Shariah board review with structured, pre-analysed contract submissions and automated risk flagging.',
    tags: ['Retail Banking', 'Corporate Finance', 'Shariah Board Support'],
    markets: ['GCC', 'Pakistan', 'UK'],
    color: '#0F3D2E',
    bg: '#e8f4ef',
  },
  {
    icon: Landmark,
    title: 'Islamic Fintech Platforms',
    description:
      'Embed real-time Shariah compliance validation directly into product flows — from loan origination to investment recommendation engines. Reduce manual scholar review time by over 70%.',
    tags: ['Contract Validation', 'Real-time Scoring', 'API Integration'],
    markets: ['GCC', 'UK'],
    color: '#1a6b50',
    bg: '#d1ead8',
  },
  {
    icon: TrendingUp,
    title: 'Investment Funds & Asset Managers',
    description:
      'Screen investment instruments against Shariah screens at scale. Generate compliant fund documentation and maintain auditable compliance records for boards, regulators, and external auditors.',
    tags: ['Instrument Screening', 'Fund Documentation', 'Board Reporting'],
    markets: ['GCC', 'UK', 'Pakistan'],
    color: '#D4AF37',
    bg: '#fdf8e7',
  },
  {
    icon: CreditCard,
    title: 'Payment & Lending Platforms',
    description:
      'Validate BNPL, murabaha-based credit, and deposit product structures against Shariah standards before launch. Reduce regulatory risk with automated pre-launch compliance checks.',
    tags: ['Product Validation', 'Pre-launch Review', 'Ongoing Monitoring'],
    markets: ['Pakistan', 'GCC'],
    color: '#0F3D2E',
    bg: '#e8f4ef',
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function UseCases() {
  return (
    <section className="py-24 bg-white" id="use-cases">
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
            Use Cases
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Designed for Every{' '}
            <span style={{ color: '#0F3D2E' }}>Islamic Finance Institution</span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Whether you&apos;re a fintech startup or a multinational bank, Amanah AI fits into
            your compliance workflow without disruption.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-2 gap-5"
        >
          {useCases.map((uc) => (
            <motion.div
              key={uc.title}
              variants={cardVariants}
              whileHover={{ scale: 1.02, boxShadow: '0 16px 40px -12px rgba(15,61,46,0.14)' }}
              className="group relative bg-white rounded-2xl border border-gray-100 p-8 transition-all duration-300 overflow-hidden"
            >
              {/* Icon + title */}
              <div className="flex items-start gap-5 mb-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: uc.bg }}
                >
                  <uc.icon className="w-5 h-5" style={{ color: uc.color }} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-base leading-snug group-hover:text-[#0F3D2E] transition-colors">
                    {uc.title}
                  </h3>
                  <div className="flex gap-1.5 mt-1.5 flex-wrap">
                    {uc.markets.map((m) => (
                      <span
                        key={m}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                        style={{ background: '#f1f5f9', color: '#64748b' }}
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-500 leading-relaxed mb-5">{uc.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {uc.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-semibold px-3 py-1 rounded-lg"
                    style={{ background: uc.bg, color: uc.color }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: uc.color }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
