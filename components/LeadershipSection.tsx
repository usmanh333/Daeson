"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Linkedin, Mail, ArrowUpRight } from "lucide-react";

const leaders = [
  {
    initials: "MZ",
    name: "Mahnoor Zafar",
    title: "Founder & Strategic Systems Lead",
    accentColor: "var(--blue)",
    rawAccent: "#FFFFFF",
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
    accentColor: "var(--text-secondary)",
    rawAccent: "#888888",
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
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-all duration-200 group"
      style={{
        border: "1px solid var(--border)",
        backgroundColor: "var(--bg-elevated)",
        color: "var(--text-secondary)",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(10, 102, 194, 0.4)";
        (e.currentTarget as HTMLElement).style.color = "#0A66C2";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
        (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
      }}
    >
      <Linkedin size={11} className="shrink-0" />
      {label}
      <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
    </a>
  );
}

export default function LeadershipSection() {
  return (
    <section
      className="py-28 relative overflow-hidden"
      style={{ backgroundColor: "var(--bg-page)" }}
    >
      <div className="section-sep absolute top-0 left-0 right-0" />
      <div className="section-sep absolute bottom-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.14em] uppercase mb-6"
            style={{ border: "1px solid var(--border)", color: "var(--text-muted)", backgroundColor: "var(--bg-elevated)" }}
          >
            Leadership
          </div>
          <div className="grid md:grid-cols-[1fr_auto] gap-6 items-end">
            <h2
              className="text-[32px] md:text-[40px] font-bold tracking-tight leading-[1.08]"
              style={{ color: "var(--text-primary)" }}
            >
              The People Behind the Systems.
            </h2>
            <div className="hidden md:block">
              <LinkedInBadge
                href="https://www.linkedin.com/company/daeson-technologies/"
                label="Daeson Technologies on LinkedIn"
              />
            </div>
          </div>
          <p className="text-[15px] mt-4 max-w-xl leading-relaxed" style={{ color: "var(--text-secondary)" }}>
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
              className="relative rounded-2xl p-7 overflow-hidden transition-all duration-300"
              style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)" }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border-hover)")}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")}
            >
              {/* Subtle accent corner */}
              <div
                className="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-[0.03]"
                style={{ backgroundColor: leader.rawAccent }}
              />

              {/* Avatar + Name row */}
              <div className="flex items-start gap-5 mb-6">
                <div
                  className="relative w-14 h-14 rounded-xl border flex items-center justify-center shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${leader.rawAccent}16 0%, ${leader.rawAccent}06 100%)`,
                    borderColor: `${leader.rawAccent}28`,
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
                  <h3
                    className="text-[17px] font-bold tracking-tight mb-0.5"
                    style={{ color: "var(--text-primary)" }}
                  >
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

              <div className="h-px mb-5" style={{ backgroundColor: "var(--border)" }} />
              <p className="text-[13px] leading-[1.75] mb-6" style={{ color: "var(--text-secondary)" }}>
                {leader.positioning}
              </p>

              {/* Focus areas */}
              <div className="mb-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] mb-3" style={{ color: "var(--text-faint)" }}>
                  Areas of focus
                </p>
                <div className="space-y-2">
                  {leader.areas.map((area) => (
                    <div key={area} className="flex items-center gap-2.5 text-[12px]" style={{ color: "var(--text-secondary)" }}>
                      <span
                        className="w-1 h-1 rounded-full shrink-0"
                        style={{ backgroundColor: leader.accentColor }}
                      />
                      {area}
                    </div>
                  ))}
                </div>
              </div>

              {leader.note && (
                <p className="text-[11px] italic mb-5" style={{ color: "var(--text-faint)" }}>{leader.note}</p>
              )}

              {leader.linkedin && (
                <LinkedInBadge href={leader.linkedin} label={`${leader.name.split(" ")[0]} on LinkedIn`} />
              )}
            </motion.div>
          ))}
        </div>

        {/* Partnerships callout */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
          className="rounded-2xl p-8 md:p-10"
          style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)" }}
        >
          <div className="grid md:grid-cols-[1.5fr_1px_1fr] gap-8 md:gap-12 items-start">
            {/* Left */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg text-[10px] font-semibold uppercase tracking-[0.14em] mb-5"
                style={{ border: "1px solid var(--border)", color: "var(--text-secondary)", backgroundColor: "var(--bg-elevated)" }}
              >
                Business Development & Strategic Partnerships
              </div>
              <h3 className="text-[22px] font-bold tracking-tight mb-3" style={{ color: "var(--text-primary)" }}>
                Partner with Daeson Technologies
              </h3>
              <p className="text-[14px] leading-relaxed max-w-md" style={{ color: "var(--text-secondary)" }}>
                We work with strategic partners, enterprise clients, and institutional advisors across
                real estate, Islamic finance, and enterprise operations. We are selective about
                engagements and prioritize long-term operational fit.
              </p>
            </div>

            {/* Divider */}
            <div className="hidden md:block h-full" style={{ backgroundColor: "var(--border)" }} />

            {/* Right */}
            <div className="space-y-5">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] mb-3" style={{ color: "var(--text-faint)" }}>
                  Contact
                </p>
                <div className="space-y-3">
                  <a
                    href="mailto:partnerships@daesontechnologies.online"
                    className="flex items-center gap-3 text-[13px] transition-colors"
                    style={{ color: "var(--text-secondary)" }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "var(--text-primary)")}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "var(--text-secondary)")}
                  >
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "var(--blue-muted)", border: "1px solid var(--blue-border)" }}
                    >
                      <Mail size={12} style={{ color: "var(--blue)" }} />
                    </div>
                    <div>
                      <span className="block font-medium">Strategic Partnerships</span>
                      <span className="text-[11px]" style={{ color: "var(--text-faint)" }}>partnerships@daesontechnologies.online</span>
                    </div>
                  </a>
                  <a
                    href="mailto:contact@daesontechnologies.online"
                    className="flex items-center gap-3 text-[13px] transition-colors"
                    style={{ color: "var(--text-secondary)" }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "var(--text-primary)")}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "var(--text-secondary)")}
                  >
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "var(--bg-elevated)", border: "1px solid var(--border)" }}
                    >
                      <Mail size={12} style={{ color: "var(--text-muted)" }} />
                    </div>
                    <div>
                      <span className="block font-medium">General Inquiries</span>
                      <span className="text-[11px]" style={{ color: "var(--text-faint)" }}>contact@daesontechnologies.online</span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="h-px" style={{ backgroundColor: "var(--border)" }} />

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] mb-2" style={{ color: "var(--text-faint)" }}>
                  Response time
                </p>
                <p className="text-[13px]" style={{ color: "var(--text-secondary)" }}>
                  We typically respond within{" "}
                  <span className="font-semibold" style={{ color: "var(--text-primary)" }}>24 business hours</span>.
                  Partnership inquiries are reviewed by leadership directly.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-[13px] font-semibold rounded-lg transition-all duration-200"
                style={{ backgroundColor: "var(--blue)", color: "var(--on-blue)" }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--blue-hover)")}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--blue)")}
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
