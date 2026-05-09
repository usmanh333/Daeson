'use client';

import {
  ArrowRight,
  BarChart3,
  Shield,
  TrendingUp,
  FileText,
  CheckCircle2,
} from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

function DashboardPreview() {
  return (
    <div className="relative w-full max-w-xl mx-auto">
      {/* Glow backdrop */}
      <div
        className="absolute -inset-4 rounded-3xl opacity-20 blur-2xl"
        style={{ background: 'radial-gradient(ellipse, #0F3D2E 0%, transparent 70%)' }}
      />

      <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
        {/* Header bar */}
        <div
          className="flex items-center justify-between px-5 py-3"
          style={{ background: '#0F3D2E' }}
        >
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-white/80" />
            <span className="text-white text-sm font-semibold tracking-tight">
              Amanah AI — Global Dashboard
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-white/60 text-xs">Live</span>
          </div>
        </div>

        <div className="p-5 bg-gray-50">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            {[
              { label: 'Contracts Reviewed', value: '3,891', icon: FileText, color: '#0F3D2E', bg: '#e8f4ef' },
              { label: 'Compliance Rate', value: '96.4%', icon: TrendingUp, color: '#16A34A', bg: '#dcfce7' },
              { label: 'Risk Flags', value: '41', icon: Shield, color: '#d97706', bg: '#fef3c7' },
            ].map((s) => (
              <div key={s.label} className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center mb-2"
                  style={{ background: s.bg }}
                >
                  <s.icon className="w-3.5 h-3.5" style={{ color: s.color }} />
                </div>
                <div className="text-base font-bold" style={{ color: s.color }}>
                  {s.value}
                </div>
                <div className="text-[11px] text-gray-500 leading-tight mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Contract list */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm mb-3">
            <div className="px-4 py-2.5 border-b border-gray-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-700">Global Contract Reviews</span>
              <span className="text-xs font-medium" style={{ color: '#0F3D2E' }}>
                View all
              </span>
            </div>
            <div className="divide-y divide-gray-50">
              {[
                { name: 'Murabaha — Meezan Bank (PK)', pct: 92, status: 'Approved' },
                { name: 'Sukuk Structure — ADIB (UAE)', pct: 95, status: 'Approved' },
                { name: 'Ijara — Al Rayan Bank (UK)', pct: 74, status: 'Review' },
                { name: 'Musharakah — Kuwait Finance House', pct: 48, status: 'Flagged' },
              ].map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between px-4 py-2.5 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#0F3D2E' }} />
                    <span className="text-xs font-medium text-gray-800 truncate">{item.name}</span>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0 ml-2">
                    <div className="w-16 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${item.pct}%`,
                          background:
                            item.pct > 80
                              ? '#22c55e'
                              : item.pct > 60
                              ? '#f59e0b'
                              : '#ef4444',
                        }}
                      />
                    </div>
                    <span
                      className={`text-xs font-semibold px-2 py-0.5 rounded-md ${
                        item.status === 'Approved'
                          ? 'bg-emerald-50 text-emerald-700'
                          : item.status === 'Review'
                          ? 'bg-amber-50 text-amber-700'
                          : 'bg-red-50 text-red-700'
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Market distribution */}
          <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-gray-700">Market Coverage</span>
              <BarChart3 className="w-3.5 h-3.5 text-gray-400" />
            </div>
            <div className="space-y-2">
              {[
                { label: '🇸🇦 GCC', pct: 52, color: '#0F3D2E' },
                { label: '🇵🇰 Pakistan', pct: 31, color: '#1a6b50' },
                { label: '🇬🇧 UK & Europe', pct: 17, color: '#D4AF37' },
              ].map((b) => (
                <div key={b.label} className="flex items-center gap-2.5">
                  <span className="text-[10px] text-gray-500 w-24 flex-shrink-0">{b.label}</span>
                  <div className="flex-1 h-1.5 rounded-full bg-gray-100 overflow-hidden">
                    <div
                      className="h-1.5 rounded-full transition-all"
                      style={{ width: `${b.pct}%`, background: b.color }}
                    />
                  </div>
                  <span className="text-[10px] font-semibold text-gray-500 w-8 text-right">
                    {b.pct}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating badges */}
      <div
        className="absolute -top-3 -right-3 text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg"
        style={{ background: '#0F3D2E' }}
      >
        AAOIFI Aligned
      </div>
      <div
        className="absolute -bottom-3 -left-3 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg"
        style={{ background: '#D4AF37', color: '#082818' }}
      >
        Scholar Validated ✓
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-16">
      {/* Background */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #0F3D2E 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-8 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-7"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold border"
                style={{
                  background: '#e8f4ef',
                  borderColor: '#0F3D2E',
                  color: '#0F3D2E',
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: '#D4AF37' }}
                />
                Now serving GCC · Pakistan · UK
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.1] tracking-tight text-gray-900"
            >
              Shariah Compliance{' '}
              <span
                className="block"
                style={{ color: '#0F3D2E' }}
              >
                Intelligence for
              </span>
              <span className="block text-gold-gradient">Modern Finance</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-500 leading-relaxed max-w-xl"
            >
              AI-assisted. Scholar-validated. Audit-ready.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-base text-gray-500 leading-relaxed max-w-xl"
            >
              Amanah AI gives financial institutions the infrastructure to review contracts, validate
              Shariah compliance, and produce regulator-ready audit trails — at scale.
            </motion.p>

            {/* Trust signals */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              {[
                'AAOIFI Aligned',
                'Scholar Workflow Built-in',
                'Full Audit Trail',
              ].map((tag) => (
                <div key={tag} className="flex items-center gap-1.5 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: '#0F3D2E' }} />
                  {tag}
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 pt-1">
              <motion.a
                href="#cta"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all"
                style={{
                  background: 'linear-gradient(135deg, #0F3D2E 0%, #1a6b50 100%)',
                }}
              >
                Request Demo
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#solution"
                whileHover={{ y: -1 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm border-2 border-gray-200 text-gray-700 hover:border-[#0F3D2E] hover:text-[#0F3D2E] transition-all"
              >
                See How It Works
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right: Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          >
            <DashboardPreview />
          </motion.div>
        </div>

        {/* Bottom stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.55 }}
          className="relative mt-20 pt-10 border-t border-gray-100 grid grid-cols-2 sm:grid-cols-4 gap-8"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -left-20 -top-12 h-56 w-[78%] rounded-[160px] blur-3xl"
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(212, 175, 55, 0.18) 0%, rgba(212, 175, 55, 0.1) 46%, rgba(212, 175, 55, 0) 82%)',
            }}
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-[15%] -top-9 h-44 w-[40%] rounded-[120px] blur-3xl"
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(212, 175, 55, 0.34) 0%, rgba(212, 175, 55, 0.18) 44%, rgba(212, 175, 55, 0) 80%)',
            }}
          />
          {[
            { value: '40+', label: 'Financial institutions' },
            { value: '96.4%', label: 'Average compliance rate' },
            { value: '3 markets', label: 'GCC · Pakistan · UK' },
            { value: '<30s', label: 'Contract analysis time' },
          ].map((stat) => (
            <div key={stat.label} className="text-center relative">
              <div className="text-2xl font-bold" style={{ color: '#0F3D2E' }}>
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
