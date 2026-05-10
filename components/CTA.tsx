'use client';

import { ArrowRight, Mail, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section
      className="relative py-28 overflow-hidden"
      id="cta"
      style={{
        background: 'linear-gradient(135deg, #082818 0%, #0F3D2E 55%, #1a5c3e 100%)',
      }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Gold glow top-right */}
        <div
          className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl"
          style={{ background: '#D4AF37' }}
        />
        {/* Green glow bottom-left */}
        <div
          className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full opacity-15 blur-3xl"
          style={{ background: '#1a6b50' }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-8 border"
          style={{
            background: 'rgba(212,175,55,0.12)',
            borderColor: '#D4AF37',
            color: '#D4AF37',
          }}
        >
          ✦ Institutional Partnership
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight tracking-tight"
        >
          Ready to Modernise Your
          <span className="block mt-1" style={{ color: '#D4AF37' }}>
            Shariah Compliance?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
          style={{ color: 'rgba(255,255,255,0.7)' }}
        >
          Join early-adopter banks and fintechs across GCC, Pakistan, and the UK who are
          building the future of compliant Islamic finance — faster, more consistent, and
          fully auditable.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-14"
        >
          <motion.a
            href="mailto:contact@daesontechagency.online"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm shadow-xl hover:shadow-2xl transition-all animate-pulse-glow"
            style={{ background: '#D4AF37', color: '#082818' }}
          >
            <Calendar className="w-4 h-4" />
            Request a Demo
            <ArrowRight className="w-4 h-4" />
          </motion.a>

          <motion.a
            href="mailto:contact@daesontechagency.online"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm border-2 transition-all"
            style={{
              borderColor: 'rgba(255,255,255,0.3)',
              color: 'white',
              background: 'rgba(255,255,255,0.05)',
            }}
          >
            <Mail className="w-4 h-4" />
            Contact Our Team
          </motion.a>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.45 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {[
            'No commitment required',
            'Tailored to your institution',
            'Deployment in weeks',
          ].map((signal) => (
            <div
              key={signal}
              className="flex items-center gap-2 text-sm"
              style={{ color: 'rgba(255,255,255,0.6)' }}
            >
              <div
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ background: '#D4AF37' }}
              />
              {signal}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
