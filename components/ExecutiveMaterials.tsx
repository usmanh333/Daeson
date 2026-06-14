"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";

const materials = [
  {
    icon: FileText,
    tag: "Real Estate",
    tagColor: "#3B6AFF",
    title: "Real Estate Infrastructure\nBrochure",
    description:
      "An executive overview of the Real Estate Operations Platform — covering system architecture, modules, implementation approach, and expected operational outcomes.",
    audience: "Real estate executives, investment firms, property developers",
    format: "PDF · 12 pages",
    href: "/contact",
    cta: "Request Brochure",
  },
  {
    icon: FileText,
    tag: "Islamic Finance",
    tagColor: "#C9A84C",
    title: "Amanah AI\nProduct Overview",
    description:
      "A detailed overview of Amanah AI's Shariah compliance infrastructure approach — including workflow architecture, compliance scope, and institutional positioning.",
    audience: "Islamic bank leadership, Shariah boards, fintech executives",
    format: "PDF · 10 pages",
    href: "/contact",
    cta: "Request Overview",
  },
  {
    icon: FileText,
    tag: "Company",
    tagColor: "#10B981",
    title: "Daeson Technologies\nCompany Overview",
    description:
      "A concise company overview covering Daeson's positioning, infrastructure disciplines, methodology, and current focus areas — suitable for internal sharing.",
    audience: "Enterprise decision-makers, procurement, C-suite",
    format: "PDF · 8 pages",
    href: "/contact",
    cta: "Request Overview",
  },
];

export default function ExecutiveMaterials() {
  return (
    <section className="bg-[#0D1521] py-28 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.07] bg-white/[0.02] text-[#94A3B8] text-[11px] font-semibold tracking-widest uppercase mb-6">
            Executive Materials
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-end">
            <h2 className="text-[34px] md:text-[42px] font-extrabold tracking-tight text-white leading-[1.1]">
              Share Internally.
              <br />
              <span className="text-[#94A3B8] font-semibold">Structured for decision-makers.</span>
            </h2>
            <p className="text-[15px] text-[#94A3B8] leading-relaxed">
              Professional materials for internal review, procurement evaluation, and leadership briefing.
              Requested and delivered directly — no forms to a marketing funnel.
            </p>
          </div>
        </motion.div>

        {/* Material cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {materials.map((material, i) => (
            <motion.div
              key={material.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
              className="bg-[#070B12] border border-white/[0.07] rounded-2xl p-7 flex flex-col hover:border-white/[0.11] transition-all duration-300 group"
            >
              {/* Icon */}
              <div
                className="w-10 h-10 rounded-xl border flex items-center justify-center mb-6"
                style={{
                  backgroundColor: `${material.tagColor}10`,
                  borderColor: `${material.tagColor}25`,
                }}
              >
                <material.icon size={16} style={{ color: material.tagColor }} />
              </div>

              {/* Tag */}
              <div
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-semibold uppercase tracking-wider mb-4 self-start"
                style={{ backgroundColor: `${material.tagColor}12`, color: material.tagColor }}
              >
                {material.tag}
              </div>

              {/* Title */}
              <h3 className="text-[17px] font-bold text-white mb-3 tracking-tight whitespace-pre-line leading-snug">
                {material.title}
              </h3>

              {/* Description */}
              <p className="text-[13px] text-[#94A3B8] leading-relaxed mb-5 flex-1">{material.description}</p>

              {/* Meta */}
              <div className="space-y-2 mb-6">
                <div className="flex items-start gap-2 text-[11px] text-[#4B5568]">
                  <span className="shrink-0 mt-0.5 font-semibold uppercase tracking-widest">Audience</span>
                  <span className="text-[#94A3B8]">{material.audience}</span>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-[#4B5568]">
                  <span className="shrink-0 font-semibold uppercase tracking-widest">Format</span>
                  <span className="text-[#94A3B8]">{material.format}</span>
                </div>
              </div>

              {/* CTA */}
              <Link
                href={material.href}
                className="inline-flex items-center gap-2 text-[13px] font-semibold transition-colors"
                style={{ color: material.tagColor }}
              >
                {material.cta}
                <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center text-[12px] text-[#4B5568] mt-8"
        >
          All materials delivered via email within 24 hours of request.
        </motion.p>
      </div>
    </section>
  );
}
