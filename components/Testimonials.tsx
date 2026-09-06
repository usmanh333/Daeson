"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Really liked the layout of the LuxeProperty dashboard, especially how investors can see and manage their whole portfolio, statements, and invest in other properties directly through the marketplace.",
    name: "Izeah Voltaire",
    role: "Founder, Floense",
    logo: "/floense.png",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];
  const hasMultiple = testimonials.length > 1;

  const prev = () => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section className="py-24 px-6" style={{ backgroundColor: "var(--bg-page)" }}>
      <div className="max-w-2xl mx-auto">
        <p
          className="text-[10px] font-bold uppercase tracking-widest mb-10 text-center"
          style={{ color: "var(--text-faint)" }}
        >
          What Investors Are Saying
        </p>

        <div
          className="rounded-2xl p-9 md:p-12 relative"
          style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}
        >
          <Quote size={28} style={{ color: "var(--blue)", opacity: 0.5 }} className="mb-5" />

          <p
            className="text-[19px] md:text-[22px] leading-[1.55] font-medium mb-8"
            style={{ color: "var(--text-primary)" }}
          >
            &ldquo;{active.quote}&rdquo;
          </p>

          <div className="flex items-center gap-3">
            <div
              className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 overflow-hidden"
              style={{ backgroundColor: "#FFFFFF", border: "1px solid var(--border)" }}
            >
              <Image src={active.logo} alt={active.role} width={44} height={44} className="object-contain" />
            </div>
            <div>
              <p className="text-[14px] font-bold" style={{ color: "var(--text-primary)" }}>{active.name}</p>
              <p className="text-[12px]" style={{ color: "var(--text-faint)" }}>{active.role}</p>
            </div>
          </div>

          {hasMultiple && (
            <div className="flex items-center justify-center gap-4 mt-9 pt-7" style={{ borderTop: "1px solid var(--border)" }}>
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                style={{ border: "1px solid var(--border)", color: "var(--text-secondary)" }}
              >
                <ChevronLeft size={14} />
              </button>
              <div className="flex items-center gap-1.5">
                {testimonials.map((t, i) => (
                  <button
                    key={t.name}
                    onClick={() => setIndex(i)}
                    aria-label={`Show testimonial from ${t.name}`}
                    className="rounded-full transition-all"
                    style={{
                      width: i === index ? "18px" : "6px",
                      height: "6px",
                      backgroundColor: i === index ? "var(--blue)" : "var(--border-strong)",
                    }}
                  />
                ))}
              </div>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                style={{ border: "1px solid var(--border)", color: "var(--text-secondary)" }}
              >
                <ChevronRight size={14} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
