"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, RotateCw } from "lucide-react";

type Props = {
  index: string;
  icon: ReactNode;
  title: string;
  summary: string;
  points: string[];
  href: string;
  accent?: string;
};

// Front shows the headline; tapping flips to the detail list. Both faces are real buttons/links,
// so the card works with a keyboard and screen readers, not only with a mouse.
export default function ExpertiseFlipCard({ index, icon, title, summary, points, href, accent = "var(--text-primary)" }: Props) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="h-[460px] sm:h-[420px]" style={{ perspective: "1600px" }}>
      <div
        className="relative w-full h-full transition-transform duration-700 motion-reduce:transition-none"
        style={{ transformStyle: "preserve-3d", transform: flipped ? "rotateY(180deg)" : "none" }}
      >
        {/* Front */}
        <button
          type="button"
          onClick={() => setFlipped(true)}
          aria-hidden={flipped}
          tabIndex={flipped ? -1 : 0}
          aria-label={`${title}: show details`}
          className="absolute inset-0 rounded-3xl p-8 flex flex-col text-left transition-shadow hover:shadow-[var(--shadow-lg)]"
          style={{ backfaceVisibility: "hidden", backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}
        >
          <div className="flex items-center justify-between mb-10">
            <span
              className="w-12 h-12 rounded-2xl flex items-center justify-center"
              style={{ border: "1px solid var(--border-strong)", color: accent }}
            >
              {icon}
            </span>
            <span className="text-[12px] font-bold tracking-widest" style={{ color: "var(--text-faint)" }}>{index}</span>
          </div>
          <h3 className="text-[22px] font-bold tracking-tight leading-snug mb-4" style={{ color: "var(--text-primary)" }}>
            {title}
          </h3>
          <p className="text-[14px] leading-relaxed flex-1" style={{ color: "var(--text-secondary)" }}>
            {summary}
          </p>
          <span className="inline-flex items-center gap-2 text-[12px] font-semibold mt-6" style={{ color: "var(--text-muted)" }}>
            <RotateCw size={13} /> Tap to see what&apos;s included
          </span>
        </button>

        {/* Back */}
        <div
          aria-hidden={!flipped}
          className="absolute inset-0 rounded-3xl p-8 flex flex-col"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            backgroundColor: "#0A0A0A",
            color: "#FFFFFF",
          }}
        >
          <div className="flex items-center justify-between mb-6">
            <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.5)" }}>
              {index} · What&apos;s included
            </p>
            <button
              type="button"
              onClick={() => setFlipped(false)}
              tabIndex={flipped ? 0 : -1}
              aria-label={`${title}: back to summary`}
              className="w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:bg-white/10"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              <RotateCw size={14} />
            </button>
          </div>
          <h3 className="text-[18px] font-bold tracking-tight mb-5">{title}</h3>
          <ul className="space-y-3 flex-1">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-[13px] leading-snug" style={{ color: "rgba(255,255,255,0.78)" }}>
                <ArrowRight size={13} className="mt-0.5 shrink-0" style={{ color: "#D4AF37" }} />
                {p}
              </li>
            ))}
          </ul>
          <Link
            href={href}
            tabIndex={flipped ? 0 : -1}
            className="inline-flex items-center gap-2 text-[13px] font-semibold mt-6"
            style={{ color: "#FFFFFF" }}
          >
            Learn more <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </div>
  );
}
