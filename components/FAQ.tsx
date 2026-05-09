'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'Is Amanah AI replacing Shariah scholars?',
    answer:
      'No — and this is by design. Amanah AI is a decision-support platform, not a replacement for qualified Shariah scholars. The platform automates the preparatory work: parsing contracts, flagging risk areas, and structuring information for review. Scholars retain full authority over compliance decisions, and the platform is specifically built to enhance their workflow — giving them cleaner, faster inputs and a structured interface for annotations and approvals.',
  },
  {
    question: 'Is the platform on-premises or API-based?',
    answer:
      'Amanah AI offers flexible deployment options. For institutions with strict data sovereignty requirements (common in GCC and Pakistan regulated banking), we support on-premises deployment. We also offer a secure API-based SaaS model for fintechs and lighter integrations. All deployment modes maintain the same feature set and audit trail integrity.',
  },
 
  {
    question: 'Is the platform AAOIFI aligned?',
    answer:
      'Yes. The compliance rule engine is built with reference to AAOIFI Shariah Standards (SS) — the globally recognised benchmark for Islamic finance compliance. Institutions can also configure the engine to reflect additional rulings from local Shariah supervisory boards, national regulators (SBP, SAMA, UAE Central Bank), or their own institutional fatawa. The platform supports layered, configurable rule sets.',
  },
  {
    question: 'Which markets and regulators does it support?',
    answer:
      'Amanah AI currently supports institutions operating in GCC (with specific SAMA and UAE Central Bank awareness), Pakistan (SBP Islamic banking framework), and the UK (FCA-regulated Islamic finance). The platform is designed to be multi-jurisdictional — allowing institutions operating across markets to maintain consistent compliance standards while meeting local regulatory requirements.',
  },
 
  {
    question: 'How long does it take to onboard?',
    answer:
      'For API-based SaaS deployments, initial integration and onboarding typically takes 2–4 weeks, including rule set configuration and user access setup. On-premises deployments are coordinated with your infrastructure team and typically complete in 6–8 weeks. We assign a dedicated implementation specialist for every institutional client.',
  },
];

function FAQAccordion({ item, isOpen, onToggle }: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden bg-white">
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 px-7 py-5 text-left hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F3D2E] focus-visible:ring-inset"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-gray-900 text-sm leading-snug pr-2">
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
          style={{ background: isOpen ? '#e8f4ef' : '#f1f5f9' }}
        >
          <ChevronDown
            className="w-3.5 h-3.5"
            style={{ color: isOpen ? '#0F3D2E' : '#9ca3af' }}
          />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-7 pb-6 pt-1">
              <div
                className="w-12 h-px mb-4"
                style={{ background: '#0F3D2E', opacity: 0.3 }}
              />
              <p className="text-sm text-gray-500 leading-relaxed">{item.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-24 bg-gray-50" id="faq">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 border"
            style={{ background: '#e8f4ef', borderColor: '#0F3D2E', color: '#0F3D2E' }}
          >
            Frequently Asked
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Questions We Get
            <span style={{ color: '#0F3D2E' }}> Most Often</span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto">
            Answers to the most common questions from compliance teams, Shariah scholars, and
            institutional leadership evaluating Amanah AI.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="space-y-3"
        >
          {faqs.map((faq, i) => (
            <FAQAccordion
              key={faq.question}
              item={faq}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-500 mb-4">
            Have a specific question about your institution&apos;s requirements?
          </p>
          <a
            href="#cta"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg, #0F3D2E 0%, #1a6b50 100%)' }}
          >
            Talk to Our Team
          </a>
        </motion.div>
      </div>
    </section>
  );
}
