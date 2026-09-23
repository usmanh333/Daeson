import Link from "next/link";
import { ShieldCheck, Lock, Sparkles, ArrowRight } from "lucide-react";

export default function AskAylinorVideo() {
  return (
    <section className="section-light px-6 py-20 md:py-28" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase mb-6"
            style={{ border: "1px solid var(--gold-border)", backgroundColor: "var(--gold-muted)", color: "var(--gold)" }}
          >
            <Sparkles size={11} />
            Introducing
          </div>

          <h2 className="text-[34px] md:text-[52px] font-extrabold leading-[1.08] tracking-tight mb-5" style={{ color: "var(--text-primary)" }}>
            Meet{" "}
            <span
              style={{
                background: "linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 50%, var(--gold) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Ask Aylinor.
            </span>
          </h2>

          <p className="text-[17px] md:text-[19px] leading-relaxed max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            Your Shariah compliance officer and personal assistant — combined into one
            AI built for how Islamic financial institutions actually work.
          </p>
        </div>

        <div
          className="rounded-3xl overflow-hidden relative"
          style={{
            border: "1px solid var(--gold-border)",
            boxShadow: "0 20px 60px rgba(185, 145, 47, 0.15), 0 2px 8px rgba(0,0,0,0.06)",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none opacity-60"
            style={{ background: "radial-gradient(ellipse 80% 50% at 50% -10%, var(--gold-muted) 0%, transparent 70%)" }}
          />

          <div className="relative z-10 grid md:grid-cols-5">
            <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center" style={{ backgroundColor: "var(--bg-card)" }}>
              <div className="space-y-5 mb-9">
                <div className="flex items-start gap-3.5">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                    style={{ backgroundColor: "var(--gold-muted)", border: "1px solid var(--gold-border)" }}
                  >
                    <Lock size={16} style={{ color: "var(--gold)" }} />
                  </div>
                  <div>
                    <p className="text-[15px] font-bold mb-1" style={{ color: "var(--text-primary)" }}>
                      100% Private, Fully Protected
                    </p>
                    <p className="text-[13.5px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      Every conversation is secured end to end. No one outside your
                      institution can see your chat — not even us.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                    style={{ backgroundColor: "var(--gold-muted)", border: "1px solid var(--gold-border)" }}
                  >
                    <ShieldCheck size={16} style={{ color: "var(--gold)" }} />
                  </div>
                  <div>
                    <p className="text-[15px] font-bold mb-1" style={{ color: "var(--text-primary)" }}>
                      Built for Every Scale
                    </p>
                    <p className="text-[13.5px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      From microfinance banks to commercial institutions, from Pakistan
                      to Europe — Aylinor is built for all of them.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-[14px] font-bold rounded-xl transition-all hover:opacity-90 hover:-translate-y-0.5"
                  style={{
                    background: "linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%)",
                    color: "#0B0E14",
                    boxShadow: "0 8px 20px rgba(185, 145, 47, 0.35)",
                  }}
                >
                  Contact Us for Full Software Access <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            <div className="md:col-span-2 relative" style={{ backgroundColor: "#0B0E14" }}>
              <video
                src="/Ask Aylinor.mp4"
                controls
                playsInline
                preload="metadata"
                className="w-full h-full object-cover block"
                style={{ minHeight: "280px" }}
              >
                Your browser does not support embedded video.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
