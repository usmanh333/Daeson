"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

const trustStrip = [
  "Workflow-first",
  "Operational visibility",
  "Ownership model",
  "Governance-sensitive",
  "Scalable systems",
  "Founder-led",
  "Secure architecture",
];

const architectureModules = [
  {
    title: "Real Estate Operations",
    tag: "Concept Architecture",
    items: [
      { label: "Lead & Deal Pipeline", note: "Unified CRM" },
      { label: "Investor Visibility Portal", note: "Real-time" },
      { label: "Payment & Rent Tracking", note: "Centralized" },
    ],
  },
  {
    title: "Amanah AI",
    tag: "In Development",
    items: [
      { label: "Murabaha Workflow", note: "Structured" },
      { label: "Shariah Governance", note: "Documented" },
      { label: "Compliance Visibility", note: "Auditable" },
    ],
  },
];

function FadeUp({
  delay,
  children,
  className,
}: {
  delay: number;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "var(--bg-page)" }}
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-bg opacity-50" />

      {/* Ambient glows — very restrained */}
      <div
        className="absolute top-1/4 -left-40 w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(59,106,255,0.055) 0%, transparent 70%)", filter: "blur(80px)" }}
      />
      <div
        className="absolute bottom-1/4 -right-40 w-[440px] h-[440px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(212,175,55,0.04) 0%, transparent 70%)", filter: "blur(80px)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left — Copy ── */}
          <div>
            {/* Trust Label */}
            <FadeUp delay={0}>
              <div className="inline-flex items-center gap-2 mb-8">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.08em]"
                  style={{
                    border: "1px solid var(--gold-border)",
                    backgroundColor: "var(--gold-muted)",
                    color: "var(--gold)",
                  }}
                >
                  Founder-led Operational Infrastructure
                </div>
              </div>
            </FadeUp>

            {/* Headline */}
            <FadeUp delay={0.08}>
              <h1
                className="text-[40px] md:text-[52px] lg:text-[56px] font-bold leading-[1.06] tracking-[-0.025em] mb-6"
                style={{ color: "var(--text-primary)" }}
              >
                Operational Infrastructure
                <br />
                <span style={{ color: "var(--text-secondary)", fontWeight: 600 }}>
                  for Modern Businesses
                </span>
              </h1>
            </FadeUp>

            {/* Subheadline */}
            <FadeUp delay={0.16}>
              <p
                className="text-[17px] leading-[1.75] mb-4 max-w-[520px]"
                style={{ color: "var(--text-secondary)" }}
              >
                We help real estate firms and governance-sensitive organizations replace
                fragmented workflows with owned AI-powered operational systems aligned to
                how their business actually operates.
              </p>
            </FadeUp>

            {/* Supporting line */}
            <FadeUp delay={0.22}>
              <p
                className="text-[14px] leading-relaxed mb-10 max-w-[480px]"
                style={{ color: "var(--text-muted)" }}
              >
                Built around operational realities — not rigid software subscriptions.
              </p>
            </FadeUp>

            {/* CTAs */}
            <FadeUp delay={0.28}>
              <div className="flex flex-col sm:flex-row gap-3 mb-14">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-white text-[14px] font-semibold rounded-xl transition-all duration-200"
                  style={{
                    backgroundColor: "var(--blue)",
                    boxShadow: "0 4px 20px rgba(59, 106, 255, 0.28)",
                  }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--blue-hover)")}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--blue)")}
                >
                  Request Executive Consultation
                  <ArrowRight size={14} />
                </Link>
                <Link
                  href="#concept-demonstrations"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[14px] font-semibold rounded-xl transition-all duration-200"
                  style={{
                    border: "1px solid var(--border)",
                    color: "var(--text-primary)",
                    backgroundColor: "transparent",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border-hover)";
                    (e.currentTarget as HTMLElement).style.backgroundColor = "var(--bg-surface)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                    (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                  }}
                >
                  Explore Concept Demonstrations
                  <ChevronRight size={14} />
                </Link>
              </div>
            </FadeUp>

            {/* Trust strip */}
            <FadeUp delay={0.36}>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2.5">
                {trustStrip.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-[12px] font-medium"
                    style={{ color: "var(--text-faint)" }}
                  >
                    <span
                      className="w-1 h-1 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "var(--gold)" }}
                    />
                    {item}
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* ── Right — Architecture cards ── */}
          <div className="relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.55, ease: "easeOut" }}
              className="space-y-4"
            >
              {architectureModules.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.38 + i * 0.12, duration: 0.5, ease: "easeOut" }}
                  style={{
                    marginLeft: i === 1 ? "28px" : "0px",
                    backgroundColor: "var(--bg-surface)",
                    border: "1px solid var(--border)",
                    borderRadius: "16px",
                    padding: "20px 22px",
                    transition: "border-color 0.2s ease",
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-[12px] font-semibold tracking-tight"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {card.title}
                    </span>
                    <span
                      className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                      style={{
                        backgroundColor: "var(--blue-muted)",
                        color: "var(--blue)",
                      }}
                    >
                      {card.tag}
                    </span>
                  </div>
                  <div className="space-y-2.5">
                    {card.items.map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center justify-between"
                      >
                        <span
                          className="text-[12px]"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          {item.label}
                        </span>
                        <span
                          className="text-[11px] font-medium px-2 py-0.5 rounded"
                          style={{
                            backgroundColor: "var(--bg-elevated)",
                            color: "var(--text-muted)",
                          }}
                        >
                          {item.note}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* Ownership badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.72, duration: 0.4, ease: "easeOut" }}
                className="absolute -bottom-3 -right-3 text-white text-[11px] font-bold px-3 py-2 rounded-xl"
                style={{
                  backgroundColor: "var(--blue)",
                  boxShadow: "0 4px 20px rgba(59, 106, 255, 0.35)",
                }}
              >
                ✦ Fully Owned
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
        style={{ background: "linear-gradient(to top, var(--bg-page), transparent)" }}
      />
    </section>
  );
}
