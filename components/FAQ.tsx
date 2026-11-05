"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

import { faqs } from "@/lib/homeFaqs";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      className="py-28 relative overflow-hidden"
      id="faq"
      style={{ backgroundColor: "var(--bg-surface)" }}
    >
      <div className="section-sep absolute top-0 left-0 right-0" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-widest uppercase mb-6"
            style={{ border: "1px solid var(--border)", color: "var(--text-muted)", backgroundColor: "var(--bg-elevated)" }}
          >
            FAQ
          </div>
          <h2
            className="text-[34px] md:text-[42px] font-bold tracking-tight mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-[15px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Answers to the most common questions about operational infrastructure, custom development, and how we work.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.04, duration: 0.4, ease: "easeOut" }}
              className="rounded-xl overflow-hidden transition-all duration-200"
              style={{
                border: open === i ? "1px solid var(--blue-border)" : "1px solid var(--border)",
                backgroundColor: open === i ? "var(--blue-muted)" : "var(--bg-card)",
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-(--blue-muted)"
              >
                <span
                  className="text-[14px] font-semibold leading-snug transition-colors"
                  style={{ color: "var(--text-primary)" }}
                >
                  {faq.q}
                </span>
                <span
                  className="shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all"
                  style={{
                    borderColor: open === i ? "var(--blue)" : "var(--border-hover)",
                    backgroundColor: open === i ? "var(--blue-muted)" : "transparent",
                    color: open === i ? "var(--blue)" : "var(--text-faint)",
                  }}
                >
                  {open === i ? <Minus size={12} /> : <Plus size={12} />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-5">
                      <div className="h-px mb-4" style={{ backgroundColor: "var(--border)" }} />
                      <p
                        className="text-[13px] leading-[1.8] whitespace-pre-line"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
