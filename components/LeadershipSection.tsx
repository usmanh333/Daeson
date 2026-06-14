"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Linkedin, Mail, ArrowUpRight } from "lucide-react";

const leaders = [
  {
    initials: "MZ",
    name: "Mahnoor Zafar",
    title: "Founder & Strategic Systems Lead",
    accentColor: "#3B6AFF",
    positioning:
      "Focused on operational infrastructure, workflow intelligence, and scalable business systems for real estate and governance-sensitive industries.",
    areas: [
      "Operational Architecture",
      "Real Estate Systems Strategy",
      "Governance-Sensitive Industries",
      "Workflow Intelligence Design",
    ],
    linkedin: "https://www.linkedin.com/in/mahnoor-zafar-6a33a4248/",
    note: "Open to strategic advisory and institutional partnership discussions.",
  },
  {
    initials: "UA",
    name: "Usman Ahmad",
    title: "Co-Founder & Technical Lead",
    accentColor: "#6A7FFF",
    positioning:
      "Responsible for system architecture, scalable product execution, and technology operations across Daeson's enterprise infrastructure platforms.",
    areas: [
      "Enterprise System Architecture",
      "AI Infrastructure Engineering",
      "Scalable Product Execution",
      "Technology Operations",
    ],
   
  },
];

function LinkedInBadge({ href, label = "LinkedIn" }: { href: string; label?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/[0.08] hover:border-[#0A66C2]/40 bg-white/[0.02] hover:bg-[#0A66C2]/[0.06] text-[11px] font-semibold text-[#94A3B8] hover:text-[#0A66C2] transition-all duration-200 group"
    >
      <Linkedin size={11} className="shrink-0" />
      {label}
      <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
    </a>
  );
}

export default function LeadershipSection() {
  return (
    <section className="bg-[#0A0D14] py-28 relative overflow-hidden">
      {/* Separators */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.07] bg-white/[0.02] text-[#94A3B8] text-[11px] font-semibold tracking-[0.14em] uppercase mb-6">
            Leadership
          </div>
          <div className="grid md:grid-cols-[1fr_auto] gap-6 items-end">
            <h2 className="text-[34px] md:text-[42px] font-extrabold tracking-tight text-white leading-[1.08]">
              The People Behind the Systems.
            </h2>
            <div className="hidden md:block">
              <LinkedInBadge
                href="https://www.linkedin.com/company/daeson-tech-agency/"
                label="Daeson Technologies on LinkedIn"
              />
            </div>
          </div>
          <p className="text-[15px] text-[#94A3B8] mt-4 max-w-xl leading-relaxed">
            Daeson Technologies is led by a small, focused team with deep expertise in operational systems,
            enterprise architecture, and governance-sensitive industry design.
          </p>
        </motion.div>

        {/* Leader Cards */}
        <div className="grid md:grid-cols-2 gap-5 mb-8">
          {leaders.map((leader, i) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
              className="relative bg-[#0D1521] border border-white/[0.07] rounded-2xl p-7 overflow-hidden group hover:border-white/[0.11] transition-all duration-300"
            >
              {/* Subtle accent corner */}
              <div
                className="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-[0.04]"
                style={{ backgroundColor: leader.accentColor }}
              />

              {/* Avatar + Name row */}
              <div className="flex items-start gap-5 mb-6">
                {/* Portrait — editorial initials style */}
                <div
                  className="relative w-14 h-14 rounded-xl border flex items-center justify-center shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${leader.accentColor}18 0%, ${leader.accentColor}08 100%)`,
                    borderColor: `${leader.accentColor}30`,
                  }}
                >
                  <span
                    className="text-[17px] font-black tracking-tight"
                    style={{ color: leader.accentColor }}
                  >
                    {leader.initials}
                  </span>
                </div>

                <div>
                  <h3 className="text-[17px] font-bold text-white tracking-tight mb-0.5">
                    {leader.name}
                  </h3>
                  <p
                    className="text-[12px] font-semibold uppercase tracking-[0.1em]"
                    style={{ color: leader.accentColor }}
                  >
                    {leader.title}
                  </p>
                </div>
              </div>

              {/* Positioning */}
              <div className="h-px bg-white/[0.05] mb-5" />
              <p className="text-[13px] text-[#94A3B8] leading-[1.75] mb-6">
                {leader.positioning}
              </p>

              {/* Focus areas */}
              <div className="mb-6">
                <p className="text-[10px] font-semibold text-[#4B5568] uppercase tracking-[0.14em] mb-3">Areas of focus</p>
                <div className="space-y-2">
                  {leader.areas.map((area) => (
                    <div key={area} className="flex items-center gap-2.5 text-[12px] text-[#94A3B8]">
                      <span
                        className="w-1 h-1 rounded-full shrink-0"
                        style={{ backgroundColor: leader.accentColor }}
                      />
                      {area}
                    </div>
                  ))}
                </div>
              </div>

              {/* Advisory note */}
              {leader.note && (
                <p className="text-[11px] text-[#4B5568] italic mb-5">{leader.note}</p>
              )}

              {/* LinkedIn */}
              {leader.linkedin && (
                <LinkedInBadge href={leader.linkedin} label={`${leader.name.split(" ")[0]} on LinkedIn`} />
              )}
            </motion.div>
          ))}
        </div>

        {/* Business Development & Partnerships */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
          className="bg-[#070B12] border border-white/[0.07] rounded-2xl p-8 md:p-10"
        >
          <div className="grid md:grid-cols-[1.5fr_1px_1fr] gap-8 md:gap-12 items-start">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg border border-white/[0.07] bg-white/[0.02] text-[10px] font-semibold uppercase tracking-[0.14em] text-[#94A3B8] mb-5">
                Business Development & Strategic Partnerships
              </div>
              <h3 className="text-[22px] font-bold text-white tracking-tight mb-3">
                Partner with Daeson Technologies
              </h3>
              <p className="text-[14px] text-[#94A3B8] leading-relaxed max-w-md">
                We work with strategic partners, enterprise clients, and institutional advisors across
                real estate, Islamic finance, and enterprise operations. We are selective about
                engagements and prioritize long-term operational fit.
              </p>
            </div>

            {/* Divider */}
            <div className="hidden md:block bg-white/[0.05] h-full" />

            {/* Right — contacts */}
            <div className="space-y-5">
              <div>
                <p className="text-[10px] font-semibold text-[#4B5568] uppercase tracking-[0.14em] mb-3">Contact</p>
                <div className="space-y-3">
                  <a
                    href="mailto:partnerships@daesontechagency.online"
                    className="flex items-center gap-3 text-[13px] text-[#94A3B8] hover:text-white transition-colors group"
                  >
                    <div className="w-7 h-7 rounded-lg bg-[#3B6AFF]/10 border border-[#3B6AFF]/20 flex items-center justify-center shrink-0">
                      <Mail size={12} className="text-[#3B6AFF]" />
                    </div>
                    <div>
                      <span className="block font-medium">Strategic Partnerships</span>
                      <span className="text-[11px] text-[#4B5568]">partnerships@daesontechagency.online</span>
                    </div>
                  </a>
                  <a
                    href="mailto:contact@daesontechagency.online"
                    className="flex items-center gap-3 text-[13px] text-[#94A3B8] hover:text-white transition-colors group"
                  >
                    <div className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center shrink-0">
                      <Mail size={12} className="text-[#94A3B8]" />
                    </div>
                    <div>
                      <span className="block font-medium">General Inquiries</span>
                      <span className="text-[11px] text-[#4B5568]">contact@daesontechagency.online</span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="h-px bg-white/[0.05]" />

              <div>
                <p className="text-[10px] font-semibold text-[#4B5568] uppercase tracking-[0.14em] mb-2">
                  Response time
                </p>
                <p className="text-[13px] text-[#94A3B8]">
                  We typically respond within{" "}
                  <span className="text-[#EDF2FF] font-semibold">24 business hours</span>.
                  Partnership inquiries are reviewed by leadership directly.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#3B6AFF] hover:bg-[#4F7FFF] text-white text-[13px] font-semibold rounded-lg transition-colors duration-200"
              >
                Schedule a consultation
                <ArrowUpRight size={13} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
