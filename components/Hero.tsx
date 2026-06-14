"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

const systemCards = [
  {
    title: "Real Estate Operations",
    items: [
      { label: "Lead Pipeline", value: "Active", dot: "bg-emerald-400" },
      { label: "Portfolio Systems", value: "Connected", dot: "bg-emerald-400" },
      { label: "Investor Reporting", value: "Automated", dot: "bg-[#3B6AFF]" },
    ],
  },
  {
    title: "Amanah AI",
    items: [
      { label: "Shariah Compliance", value: "Active", dot: "bg-emerald-400" },
      { label: "Contract Analysis", value: "Running", dot: "bg-[#C9A84C]" },
      { label: "Audit Trail", value: "Immutable", dot: "bg-emerald-400" },
    ],
  },
  {
    title: "Enterprise Systems",
    items: [
      { label: "Workflows", value: "Automated", dot: "bg-emerald-400" },
      { label: "AI Integration", value: "Active", dot: "bg-[#3B6AFF]" },
      { label: "Visibility Layer", value: "Live", dot: "bg-emerald-400" },
    ],
  },
];

function FadeUp({ delay, children, className }: { delay: number; children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.55, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#070B12] overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] rounded-full bg-[#3B6AFF]/[0.07] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-[#C9A84C]/[0.05] blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Copy */}
          <div>
            {/* Badge */}
            <FadeUp delay={0}>
              <div className="inline-flex items-center gap-2 mb-8">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#3B6AFF]/30 bg-[#3B6AFF]/[0.08] text-[#3B6AFF] text-[11px] font-semibold tracking-[0.1em] uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3B6AFF] animate-pulse" />
                  Enterprise AI Infrastructure
                </div>
              </div>
            </FadeUp>

            {/* Headline */}
            <FadeUp delay={0.1}>
              <h1 className="text-[42px] md:text-[56px] lg:text-[60px] font-extrabold leading-[1.04] tracking-[-0.02em] text-white mb-6">
                Operational Systems for{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #3B6AFF 0%, #7B9FFF 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Complex Businesses.
                </span>
              </h1>
            </FadeUp>

            {/* Subheadline */}
            <FadeUp delay={0.2}>
              <p className="text-[17px] text-[#94A3B8] leading-[1.7] mb-10 max-w-xl">
                Daeson Technologies designs and deploys intelligent operational
                infrastructure for real estate firms, Islamic financial institutions,
                and enterprise organizations navigating complex workflows.
              </p>
            </FadeUp>

            {/* CTAs */}
            <FadeUp delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 mb-14">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#3B6AFF] hover:bg-[#4F7FFF] text-white text-[14px] font-semibold rounded-xl transition-all duration-200 shadow-xl shadow-[#3B6AFF]/25"
                >
                  Schedule Executive Consultation
                  <ArrowRight size={15} />
                </Link>
                <Link
                  href="#concept-demonstrations"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-white/[0.12] hover:border-white/[0.22] text-[#EDF2FF] text-[14px] font-semibold rounded-xl transition-all duration-200 hover:bg-white/[0.03]"
                >
                  Explore Concept Demonstrations
                  <ChevronRight size={15} />
                </Link>
              </div>
            </FadeUp>

            {/* Trust signals */}
            <FadeUp delay={0.4}>
              <div className="flex flex-wrap items-center gap-6 text-[12px] text-[#4B5568]">
                {["Real Estate Operations", "Islamic Finance AI", "Enterprise Systems"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#3B6AFF]" />
                    {item}
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* Right — System Cards */}
          <div className="relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
              className="relative space-y-4"
            >
              {systemCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5, ease: "easeOut" }}
                  style={{ marginLeft: i === 1 ? "24px" : i === 2 ? "8px" : "0px" }}
                  className="bg-[#0D1521] border border-white/[0.07] rounded-2xl p-5 hover:border-white/[0.12] transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[12px] font-semibold text-[#EDF2FF] tracking-tight">{card.title}</span>
                    <span className="text-[10px] font-medium text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">
                      Operational
                    </span>
                  </div>
                  <div className="space-y-3">
                    {card.items.map((item) => (
                      <div key={item.label} className="flex items-center justify-between">
                        <span className="text-[12px] text-[#94A3B8]">{item.label}</span>
                        <div className="flex items-center gap-1.5">
                          <span className={`w-1.5 h-1.5 rounded-full ${item.dot}`} />
                          <span className="text-[11px] font-medium text-[#EDF2FF]">{item.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* Floating label */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.4, ease: "easeOut" }}
                className="absolute -bottom-4 -right-4 bg-[#3B6AFF] text-white text-[11px] font-semibold px-3 py-2 rounded-xl shadow-lg shadow-[#3B6AFF]/30"
              >
                ✦ Owned Infrastructure
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#070B12] to-transparent pointer-events-none" />
    </section>
  );
}
