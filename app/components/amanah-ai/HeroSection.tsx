"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, CheckCircle2, Shield, TrendingUp, FileText } from "lucide-react";

function DashboardMock() {
  return (
    <div className="relative w-full max-w-[520px]">
      {/* Main dashboard card */}
      <div className="relative bg-[#16A34A] rounded-xl shadow-[0_8px_40px_-8px_rgba(15,61,46,0.15)] border border-gray-200 overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-gray-200 bg-[#0F3D2E]">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-white/80" />
            <span className="text-white text-sm font-semibold tracking-tight">Amanah AI — Compliance Dashboard</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-[#16A34A]" />
            <span className="text-white/70 text-xs">Live</span>
          </div>
        </div>

        <div className="p-5 bg-[#F9FAFB]">
          {/* Stats row */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            {[
              { label: "Contracts Reviewed", value: "1,247", icon: FileText, color: "text-[#0F3D2E]", bg: "bg-[#0F3D2E]/8" },
              { label: "Compliance Rate", value: "94.2%", icon: TrendingUp, color: "text-[#16A34A]", bg: "bg-[#16A34A]/10" },
              { label: "Risk Flags", value: "23", icon: Shield, color: "text-amber-600", bg: "bg-amber-50" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-lg p-3 border border-gray-100 shadow-sm">
                <div className={`w-7 h-7 rounded-lg ${stat.bg} flex items-center justify-center mb-2`}>
                  <stat.icon className={`w-3.5 h-3.5 ${stat.color}`} />
                </div>
                <div className={`text-base font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-xs text-gray-500 mt-0.5 leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Contract list */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
            <div className="px-4 py-2.5 border-b border-gray-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-700">Recent Contract Reviews</span>
              <span className="text-xs text-[#16A34A] font-medium cursor-pointer">View all</span>
            </div>
            <div className="divide-y divide-gray-50">
              {[
                { name: "Murabaha - Meezan Bank", risk: "Low", status: "Approved", pct: 92 },
                { name: "Ijara Agreement - HBL Islamic", risk: "Medium", status: "Review", pct: 71 },
                { name: "Diminishing Musharakah - UBL", risk: "Low", status: "Approved", pct: 88 },
                { name: "Sukuk Structure - BankIslami", risk: "High", status: "Flagged", pct: 45 },
              ].map((item) => (
                <div key={item.name} className="flex items-center justify-between px-4 py-2.5 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0F3D2E] flex-shrink-0"></div>
                    <span className="text-xs font-medium text-gray-800 truncate">{item.name}</span>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0 ml-2">
                    <div className="w-16 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${item.pct > 80 ? "bg-emerald-500" : item.pct > 60 ? "bg-amber-400" : "bg-red-400"}`}
                        style={{ width: `${item.pct}%` }}
                      />
                    </div>
                    <span
                      className={`text-xs font-semibold px-2 py-0.5 rounded-md ${
                        item.status === "Approved"
                          ? "bg-[#16A34A]/10 text-[#16A34A]"
                          : item.status === "Review"
                          ? "bg-amber-50 text-amber-700"
                          : "bg-red-50 text-red-700"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chart placeholder */}
          <div className="mt-3 bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-gray-700">Compliance Trend — 2026</span>
              <BarChart3 className="w-3.5 h-3.5 text-gray-400" />
            </div>
            <div className="flex items-end gap-1.5 h-12">
              {[65, 72, 68, 80, 85, 78, 90, 88, 94, 91, 96, 94].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col justify-end">
                  <div
                    className={`rounded-sm ${i === 11 ? "bg-[#0F3D2E]" : "bg-[#0F3D2E]/20"}`}
                    style={{ height: `${(h / 100) * 48}px` }}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-1.5">
              {["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"].map((m) => (
                <span key={m} className="text-[10px] text-gray-400 flex-1 text-center">{m}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating badge */}
      <div className="absolute -top-3 -right-3 bg-[#0F3D2E] text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-md">
        AI Powered
      </div>

      {/* Floating compliance badge */}
      <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-md border border-gray-100 px-4 py-2.5 flex items-center gap-2">
        <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
        <span className="text-xs font-semibold text-gray-800">Shariah Review Complete</span>
      </div>
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay: i * 0.12 },
  }),
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#F9FAFB] pt-16 overflow-hidden" id="hero">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-[#0F3D2E]/4 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-[#16A34A]/5 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Content */}
          <div className="space-y-8">
            {/* Trust signals */}
            <motion.div
              className="flex flex-wrap items-center gap-3"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0}
            >
              <span className="inline-flex items-center gap-1.5 bg-[#0F3D2E]/8 text-[#0F3D2E] text-xs font-semibold px-3 py-1.5 rounded-full border border-[#0F3D2E]/15">
                <Shield className="w-3 h-3" />
                Built for Islamic Finance
              </span>
              <span className="inline-flex items-center gap-1.5 bg-[#16A34A]/10 text-[#16A34A] text-xs font-semibold px-3 py-1.5 rounded-full border border-[#16A34A]/20">
                <CheckCircle2 className="w-3 h-3" />
                Pakistan Regulatory Ready
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              className="space-y-4"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
            >
              <h1 className="text-4xl sm:text-5xl font-bold leading-[1.15] tracking-tight text-[#1F2937]">
                Strengthening Shariah Compliance{" "}
                <span className="text-[#0F3D2E]">for Modern Banking</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                Amanah AI helps financial institutions streamline contract review, identify compliance considerations, and maintain audit-ready workflows.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap items-center gap-4"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
            >
              <a
                href="#cta"
                className="inline-flex items-center gap-2 bg-[#0F3D2E] text-white font-semibold px-7 py-3.5 rounded-lg shadow-md hover:bg-[#1A5C42] hover:shadow-lg transition-all text-sm group"
              >
                Request Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 border border-[#0F3D2E]/25 text-[#0F3D2E] font-semibold px-7 py-3.5 rounded-lg hover:border-[#0F3D2E]/50 hover:bg-[#0F3D2E]/4 transition-all text-sm"
              >
                View Platform
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex flex-wrap items-center gap-8 pt-2 border-t border-gray-200"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={3}
            >
              {[
                { value: "1,200+", label: "Contracts Analyzed" },
                { value: "94%", label: "Compliance Accuracy" },
                { value: "6+", label: "Pakistani Banks" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-[#0F3D2E]">{stat.value}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Dashboard Mock */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 40, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          >
            <DashboardMock />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
