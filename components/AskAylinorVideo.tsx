import Link from "next/link";
import { ShieldCheck, Lock, MessageCircleQuestion, ArrowRight } from "lucide-react";

export default function AskAylinorVideo() {
  return (
    <section className="px-6 py-16 md:py-20">
      <div
        className="max-w-4xl mx-auto rounded-2xl p-7 md:p-10 relative overflow-hidden"
        style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--gold-border)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 60% at 85% 0%, var(--gold-muted) 0%, transparent 65%)" }}
        />

        <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase mb-6"
              style={{ border: "1px solid var(--gold-border)", backgroundColor: "var(--gold-muted)", color: "var(--gold-light)" }}
            >
              <MessageCircleQuestion size={11} />
              Meet Ask Aylinor
            </div>

            <h2 className="text-[24px] md:text-[30px] font-extrabold leading-[1.15] tracking-tight mb-4" style={{ color: "var(--text-primary)" }}>
              Your Shariah officer and personal assistant, in one place.
            </h2>

            <p className="text-[14px] leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>
              Ask Aylinor is built to work like a Shariah compliance officer and a personal
              assistant combined — answering financing and governance questions, surfacing
              documentation, and helping your team move faster, without ever replacing the
              scholar&apos;s own judgment.
            </p>

            <div className="space-y-3 mb-7">
              <div className="flex items-start gap-2.5 text-[13px]" style={{ color: "var(--text-secondary)" }}>
                <Lock size={15} className="mt-0.5 shrink-0" style={{ color: "var(--gold)" }} />
                <span>100% secure, protected privacy — your conversations are never visible to anyone outside your institution.</span>
              </div>
              <div className="flex items-start gap-2.5 text-[13px]" style={{ color: "var(--text-secondary)" }}>
                <ShieldCheck size={15} className="mt-0.5 shrink-0" style={{ color: "var(--gold)" }} />
                <span>From microfinance banks to commercial institutions, from Pakistan to Europe — Aylinor is built for every scale of Islamic financial institution.</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-[13px] font-bold rounded-xl transition-all hover:opacity-90"
                style={{ backgroundColor: "var(--gold-light)", color: "#0B0E14" }}
              >
                Contact Us for Full Software Access <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden" style={{ border: "1px solid var(--gold-border)" }}>
            <video
              src="/Ask Aylinor.mp4"
              controls
              playsInline
              preload="metadata"
              className="w-full h-auto block"
              style={{ backgroundColor: "#0B0E14" }}
            >
              Your browser does not support embedded video.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
