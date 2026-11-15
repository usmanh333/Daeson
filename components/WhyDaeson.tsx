"use client";

import { motion } from "framer-motion";
import { GOLD } from "@/lib/services";

const reasons = [
  { title: "Workflow first", body: "We map how your work really runs before any design or code." },
  { title: "Founder-led", body: "Our founding team is directly involved, from discovery to delivery." },
  { title: "Start small, scale what works", body: "One measurable workflow first, so you see results before committing more." },
  { title: "People stay in control", body: "AI prepares and suggests. Responsible people approve what matters." },
  { title: "Secure by design", body: "Role-based access, audit trails and data protection included from day one." },
  { title: "Built to grow", body: "Systems designed to extend as you add teams, markets and products." },
];

export default function WhyDaeson() {
  return (
    <section className="py-28" style={{ backgroundColor: "var(--bg-page)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid md:grid-cols-[1fr_1.3fr] gap-8 mb-14 items-end"
        >
          <div>
            <p className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] mb-5" style={{ color: "var(--text-muted)" }}>
              <span className="w-8 h-px" style={{ backgroundColor: GOLD }} />
              Why Daeson
            </p>
            <h2 className="text-[34px] md:text-[46px] font-bold tracking-tight leading-[1.08]" style={{ color: "var(--text-primary)" }}>
              A systems partner,
              <br />
              <span style={{ color: "var(--text-muted)" }}>not just a vendor.</span>
            </h2>
          </div>
          <p className="text-[15px] leading-relaxed md:pb-2" style={{ color: "var(--text-secondary)" }}>
            Agencies build what you ask for. We start with what your operation actually needs, then build it
            with you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3" style={{ borderTop: "1px solid var(--border)", borderLeft: "1px solid var(--border)" }}>
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.45, ease: "easeOut" }}
              className="group p-9 transition-colors hover:bg-[#E1D3B6]"
              style={{ borderRight: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span aria-hidden className="w-2.5 h-2.5 rotate-45 transition-transform duration-300 group-hover:rotate-[135deg]" style={{ backgroundColor: GOLD }} />
                <span className="text-[12px] font-bold tracking-widest" style={{ color: "var(--text-faint)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-[18px] font-bold tracking-tight mb-2.5" style={{ color: "var(--text-primary)" }}>{r.title}</h3>
              <p className="text-[14px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>{r.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
