"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download, X } from "lucide-react";

const REPORT_URL = "/reports/ifn-shariah-compliance-meets-ai.pdf";
const SUMMARY_URL = "/insights/ifn-shariah-compliance-meets-ai";
const STORAGE_KEY = "ifn-report-popup-dismissed";
const OPEN_DELAY_MS = 900;

// Fixed colors so the popup looks the same over the white homepage and the navy inner pages.
const GOLD = "#D4AF37";
const GOLD_LIGHT = "#F0D060";
const EMERALD = "#10B981";
const SURFACE = "#0A1628";

export default function IFNReportPopup() {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let dismissed = false;
    try {
      dismissed = sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {}
    if (dismissed) return;
    const t = setTimeout(() => setOpen(true), OPEN_DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {}
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  const item = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="ifn-popup"
          className="fixed inset-0 z-[100] flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(3, 8, 18, 0.62)" }}
            initial={{ backdropFilter: "blur(0px)" }}
            animate={{ backdropFilter: "blur(8px)" }}
            exit={{ backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
            onClick={close}
          />

          {/* Card with rotating gradient border */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="ifn-popup-title"
            aria-describedby="ifn-popup-desc"
            className="relative w-full max-w-[560px] rounded-[28px] p-[1.5px] overflow-hidden"
            style={{ boxShadow: "0 30px 80px -20px rgba(0,0,0,0.6), 0 0 60px -10px rgba(212,175,55,0.25)" }}
            initial={{ opacity: 0, y: reduceMotion ? 0 : 40, scale: reduceMotion ? 1 : 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: reduceMotion ? 0 : 24, scale: reduceMotion ? 1 : 0.96 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
          >
            <motion.div
              aria-hidden
              className="absolute inset-[-60%]"
              style={{
                background: `conic-gradient(from 0deg, ${GOLD}, ${EMERALD}, transparent 40%, ${GOLD_LIGHT}, ${EMERALD}, transparent 85%, ${GOLD})`,
              }}
              animate={reduceMotion ? undefined : { rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />

            <div className="relative rounded-[26.5px] overflow-hidden" style={{ backgroundColor: SURFACE }}>
              {/* Ambient glow */}
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 60% 50% at 85% 0%, rgba(212,175,55,0.18) 0%, transparent 70%), radial-gradient(ellipse 50% 45% at 0% 100%, rgba(16,185,129,0.14) 0%, transparent 70%)",
                }}
              />

              <button
                ref={closeRef}
                type="button"
                onClick={close}
                aria-label="Close"
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-white/10"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                <X size={18} />
              </button>

              <motion.div
                className="relative z-10 p-7 sm:p-10 flex flex-col sm:flex-row gap-7 sm:gap-8 sm:items-center"
                initial="hidden"
                animate="show"
                variants={{ show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } } }}
              >
                {/* Publication illustration */}
                <motion.div variants={item} className="shrink-0 mx-auto sm:mx-0">
                  <motion.div
                    className="relative w-[104px] h-[136px]"
                    animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div
                      className="absolute inset-0 rounded-lg"
                      style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", transform: "rotate(8deg) translate(10px, 4px)" }}
                    />
                    <div
                      className="absolute inset-0 rounded-lg p-3 flex flex-col gap-1.5"
                      style={{ background: "linear-gradient(160deg, #FFFFFF 0%, #EEF2F7 100%)", transform: "rotate(-4deg)", boxShadow: "0 14px 30px -8px rgba(0,0,0,0.5)" }}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[13px] font-black tracking-tight" style={{ color: "#0A1628" }}>IFN</span>
                        <span className="text-[6px] font-bold" style={{ color: "#64748B" }}>V23 · I40</span>
                      </div>
                      <div className="h-[3px] rounded-full w-full" style={{ backgroundColor: GOLD }} />
                      <div className="h-[5px] rounded-sm w-[85%] mt-1" style={{ backgroundColor: "#0A1628" }} />
                      <div className="h-[5px] rounded-sm w-[60%]" style={{ backgroundColor: "#0A1628" }} />
                      {[100, 92, 96, 80, 94, 70].map((w, i) => (
                        <div key={i} className="h-[3px] rounded-full" style={{ width: `${w}%`, backgroundColor: "#CBD5E1" }} />
                      ))}
                    </div>
                  </motion.div>
                </motion.div>

                <div className="flex-1 text-center sm:text-left">
                  <motion.div
                    variants={item}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase mb-4"
                    style={{ border: "1px solid rgba(212,175,55,0.35)", backgroundColor: "rgba(212,175,55,0.10)", color: GOLD_LIGHT }}
                  >
                    <span className="relative flex w-1.5 h-1.5">
                      {!reduceMotion && (
                        <span className="absolute inset-0 rounded-full animate-ping" style={{ backgroundColor: GOLD }} />
                      )}
                      <span className="relative w-1.5 h-1.5 rounded-full" style={{ backgroundColor: GOLD }} />
                    </span>
                    Read our full report
                  </motion.div>

                  <motion.h2
                    id="ifn-popup-title"
                    variants={item}
                    className="text-[22px] sm:text-[25px] font-extrabold leading-[1.2] tracking-tight mb-3"
                    style={{ color: "#FFFFFF" }}
                  >
                    When Shariah compliance meets AI:{" "}
                    <span
                      style={{
                        background: `linear-gradient(90deg, ${GOLD_LIGHT}, ${GOLD})`,
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent",
                      }}
                    >
                      Innovation must know its limits
                    </span>
                  </motion.h2>

                  <motion.p
                    id="ifn-popup-desc"
                    variants={item}
                    className="text-[13.5px] leading-relaxed mb-6"
                    style={{ color: "rgba(255,255,255,0.65)" }}
                  >
                    First published in IFN Volume 23, Issue 40, dated{" "}
                    <time dateTime="2026-10-07">7 October 2026</time>.
                  </motion.p>

                  <motion.div variants={item} className="flex flex-col sm:flex-row items-center gap-3">
                    <motion.a
                      href={REPORT_URL}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={close}
                      className="relative overflow-hidden inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 text-[13px] font-bold rounded-xl"
                      style={{ background: `linear-gradient(135deg, ${GOLD_LIGHT}, ${GOLD})`, color: "#0B0E14" }}
                      whileHover={reduceMotion ? undefined : { scale: 1.03 }}
                      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                    >
                      {!reduceMotion && (
                        <motion.span
                          aria-hidden
                          className="absolute inset-y-0 w-1/3 pointer-events-none"
                          style={{ background: "linear-gradient(100deg, transparent, rgba(255,255,255,0.6), transparent)" }}
                          initial={{ x: "-150%" }}
                          animate={{ x: "350%" }}
                          transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 2.2, ease: "easeInOut", delay: 0.8 }}
                        />
                      )}
                      <Download size={14} className="relative" />
                      <span className="relative">Download the report</span>
                    </motion.a>
                    <Link
                      href={SUMMARY_URL}
                      onClick={close}
                      className="inline-flex items-center gap-1 text-[12.5px] font-medium px-3 py-2 rounded-lg transition-colors hover:bg-white/5"
                      style={{ color: "rgba(255,255,255,0.7)" }}
                    >
                      Read the summary <ArrowRight size={12} />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
