"use client";

import { useState, FormEvent } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

const interests = [
  "Real Estate Operations Platform",
  "Amanah AI",
  "Enterprise AI Systems",
  "Strategic Partnership",
  "Executive Consultation",
  "Other",
];

const industries = ["Real Estate & PropTech", "Islamic Finance", "Enterprise Operations", "Other"];

const budgets = [
  "Exploring — budget TBD",
  "Under $25,000",
  "$25,000 – $75,000",
  "$75,000 – $150,000",
  "$150,000+",
];

const timelines = [
  "Immediately (within 1 month)",
  "Soon (1–3 months)",
  "Planning (3–6 months)",
  "Exploring (6+ months)",
];

const teamSizes = ["1–10", "11–50", "51–200", "200+"];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formsubmit.co/ajax/contact@daesontechnologies.online", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className="rounded-2xl p-7 md:p-8 flex flex-col items-center text-center"
        style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)" }}
      >
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
          style={{ backgroundColor: "var(--blue-muted)", border: "1px solid var(--blue-border)" }}
        >
          <CheckCircle size={26} style={{ color: "var(--blue)" }} />
        </div>
        <h2 className="text-[20px] font-bold mb-2 tracking-tight" style={{ color: "var(--text-primary)" }}>
          Thank you.
        </h2>
        <p className="text-[14px] leading-relaxed max-w-sm" style={{ color: "var(--text-secondary)" }}>
          Our team will respond to you within a day.
        </p>
      </div>
    );
  }

  return (
    <div
      className="rounded-2xl p-7 md:p-8"
      style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)" }}
    >
      <h2 className="text-[20px] font-bold mb-1 tracking-tight" style={{ color: "var(--text-primary)" }}>
        Tell us about your business
      </h2>
      <p className="text-[12px] mb-7" style={{ color: "var(--text-faint)" }}>
        Fields marked * are required. We respond within 24–48 hours.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input type="hidden" name="_subject" value="New Executive Consultation Request — Daeson Technologies" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input type="text" name="_honey" className="hidden" aria-hidden="true" tabIndex={-1} />

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: "var(--text-muted)" }}>
              First Name *
            </label>
            <input
              type="text"
              name="first_name"
              required
              autoComplete="given-name"
              className="w-full rounded-xl px-4 py-3 text-[13px] transition-colors focus:outline-none"
              style={{ backgroundColor: "var(--bg-page)", border: "1px solid var(--border)", color: "var(--text-primary)" }}
              placeholder="First name"
            />
          </div>
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: "var(--text-muted)" }}>
              Last Name *
            </label>
            <input
              type="text"
              name="last_name"
              required
              autoComplete="family-name"
              className="w-full rounded-xl px-4 py-3 text-[13px] transition-colors focus:outline-none"
              style={{ backgroundColor: "var(--bg-page)", border: "1px solid var(--border)", color: "var(--text-primary)" }}
              placeholder="Last name"
            />
          </div>
        </div>

        <div>
          <label className="block text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: "var(--text-muted)" }}>
            Business Email *
          </label>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            className="w-full rounded-xl px-4 py-3 text-[13px] transition-colors focus:outline-none"
            style={{ backgroundColor: "var(--bg-page)", border: "1px solid var(--border)", color: "var(--text-primary)" }}
            placeholder="you@company.com"
          />
        </div>

        <div>
          <label className="block text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: "var(--text-muted)" }}>
            Company *
          </label>
          <input
            type="text"
            name="company"
            required
            autoComplete="organization"
            className="w-full rounded-xl px-4 py-3 text-[13px] transition-colors focus:outline-none"
            style={{ backgroundColor: "var(--bg-page)", border: "1px solid var(--border)", color: "var(--text-primary)" }}
            placeholder="Company name"
          />
        </div>

        <div>
          <label className="block text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: "var(--text-muted)" }}>
            Area of Interest *
          </label>
          <select
            name="area_of_interest"
            required
            className="w-full rounded-xl px-4 py-3 text-[13px] focus:outline-none appearance-none"
            style={{ backgroundColor: "var(--bg-page)", border: "1px solid var(--border)", color: "var(--text-primary)" }}
          >
            <option value="">Select area of interest</option>
            {interests.map((i) => (
              <option key={i} value={i}>{i}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: "var(--text-muted)" }}>
              Industry
            </label>
            <select
              name="industry"
              className="w-full rounded-xl px-4 py-3 text-[13px] focus:outline-none appearance-none"
              style={{ backgroundColor: "var(--bg-page)", border: "1px solid var(--border)", color: "var(--text-primary)" }}
            >
              <option value="">Select</option>
              {industries.map((i) => (
                <option key={i} value={i}>{i}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: "var(--text-muted)" }}>
              Team Size
            </label>
            <select
              name="team_size"
              className="w-full rounded-xl px-4 py-3 text-[13px] focus:outline-none appearance-none"
              style={{ backgroundColor: "var(--bg-page)", border: "1px solid var(--border)", color: "var(--text-primary)" }}
            >
              <option value="">Select</option>
              {teamSizes.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: "var(--text-muted)" }}>
              Budget Range
            </label>
            <select
              name="budget"
              className="w-full rounded-xl px-4 py-3 text-[13px] focus:outline-none appearance-none"
              style={{ backgroundColor: "var(--bg-page)", border: "1px solid var(--border)", color: "var(--text-primary)" }}
            >
              <option value="">Select</option>
              {budgets.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: "var(--text-muted)" }}>
              Timeline
            </label>
            <select
              name="timeline"
              className="w-full rounded-xl px-4 py-3 text-[13px] focus:outline-none appearance-none"
              style={{ backgroundColor: "var(--bg-page)", border: "1px solid var(--border)", color: "var(--text-primary)" }}
            >
              <option value="">Select</option>
              {timelines.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: "var(--text-muted)" }}>
            Your Operational Challenge *
          </label>
          <textarea
            name="challenge"
            required
            rows={4}
            className="w-full rounded-xl px-4 py-3 text-[13px] transition-colors focus:outline-none resize-none"
            style={{ backgroundColor: "var(--bg-page)", border: "1px solid var(--border)", color: "var(--text-primary)" }}
            placeholder="Tell us about your business, current systems, and what you're trying to improve. Be as specific as you like — the more context you share, the more useful our first conversation will be."
          />
        </div>

        {status === "error" && (
          <p className="text-[12px] text-center" style={{ color: "#E5806D" }}>
            Something went wrong sending your request. Please try again or email us directly.
          </p>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full py-4 text-[14px] font-bold rounded-xl transition-all hover:opacity-90 disabled:opacity-60"
          style={{ backgroundColor: "var(--blue)", color: "var(--on-blue)", boxShadow: "0 4px 20px rgba(0,0,0,0.35)" }}
        >
          {status === "submitting" ? "Sending..." : "Request Executive Consultation"}
          {status !== "submitting" && <ArrowRight size={14} className="inline ml-1.5 -mt-0.5" />}
        </button>

        <p className="text-[11px] text-center leading-relaxed" style={{ color: "var(--text-faint)" }}>
          We respond within 24–48 business hours. Your information is handled with complete discretion.
        </p>
      </form>
    </div>
  );
}
