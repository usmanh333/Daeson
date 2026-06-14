import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Real Estate Operational Infrastructure",
  description:
    "Daeson Technologies builds owned, AI-powered operational platforms for real estate firms — replacing fragmented SaaS with unified CRM, investor dashboards, payment tracking, and AI analytics.",
  keywords: [
    "real estate CRM software",
    "real estate operational infrastructure",
    "investor dashboard real estate",
    "property management software",
    "real estate AI",
    "owned real estate platform",
  ],
};

const features = [
  {
    title: "AI-Powered Lead Intelligence",
    description: "Qualify and prioritize leads automatically using behavioral signals and engagement data. No more manually chasing cold contacts.",
  },
  {
    title: "Unified CRM",
    description: "One system for all deals, contacts, and portfolio interactions — designed around real estate workflows, not generic sales pipelines.",
  },
  {
    title: "Investor Dashboard",
    description: "Real-time portfolio visibility for investors. Automated reports, milestone updates, and payment tracking — no manual emails.",
  },
  {
    title: "Payment & Project Tracking",
    description: "Track payment schedules, construction milestones, and project status across all active developments in one place.",
  },
  {
    title: "Document Management",
    description: "Centralized, searchable document storage with version control, e-signature integration, and access controls.",
  },
  {
    title: "Executive Analytics",
    description: "AI-powered operational dashboards that give leadership real-time visibility across portfolio performance, deal pipeline, and team activity.",
  },
];

export default function RealEstatePage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#070B12] min-h-screen pt-24">
        <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
        <div className="absolute top-24 right-0 w-[500px] h-[500px] rounded-full bg-[#3B6AFF]/5 blur-[120px] pointer-events-none" />

        {/* Hero */}
        <section className="relative max-w-7xl mx-auto px-6 pt-16 pb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-semibold uppercase tracking-wider bg-[#3B6AFF]/15 text-[#3B6AFF] mb-8">
              Real Estate Infrastructure
            </div>
            <h1 className="text-[42px] md:text-[56px] font-extrabold text-white tracking-tight leading-[1.06] mb-6">
              Operational Infrastructure for{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #3B6AFF 0%, #7B9FFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Real Estate Firms.
              </span>
            </h1>
            <p className="text-[17px] text-[#94A3B8] leading-relaxed mb-10 max-w-2xl">
              Real estate firms with portfolio complexity, investor relationships, and multi-market operations
              need owned infrastructure — not another SaaS subscription built for generic sales teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#3B6AFF] hover:bg-[#4F7FFF] text-white text-[14px] font-semibold rounded-xl transition-colors shadow-xl shadow-[#3B6AFF]/20"
              >
                Schedule Consultation <ArrowRight size={14} />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/10 hover:border-white/20 text-[#EDF2FF] text-[14px] font-semibold rounded-xl transition-colors"
              >
                View Case Studies <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* Problem vs Solution */}
        <section className="relative bg-[#0D1521] border-y border-white/6 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-[11px] font-semibold text-red-400/80 uppercase tracking-widest mb-6">The Problem</p>
                <div className="space-y-4">
                  {[
                    "CRM not built for real estate deal cycles",
                    "Investor updates sent manually via email",
                    "Payment tracking in Excel spreadsheets",
                    "Lead data siloed across multiple platforms",
                    "No AI analytics or portfolio intelligence",
                    "Complete dependency on SaaS vendor pricing",
                  ].map((p) => (
                    <div key={p} className="flex items-start gap-3 text-[14px] text-[#94A3B8]">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500/60 shrink-0" />
                      {p}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[11px] font-semibold text-[#3B6AFF] uppercase tracking-widest mb-6">The Infrastructure</p>
                <div className="space-y-4">
                  {[
                    "CRM designed around your deal workflow",
                    "Investor dashboards with real-time updates",
                    "Integrated payment and milestone tracking",
                    "Unified lead intelligence across all channels",
                    "AI analytics and executive reporting",
                    "Owned codebase — no vendor dependency",
                  ].map((s) => (
                    <div key={s} className="flex items-start gap-3 text-[14px] text-[#94A3B8]">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#3B6AFF] shrink-0" />
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="mb-14">
            <h2 className="text-[32px] md:text-[40px] font-extrabold text-white tracking-tight mb-4">
              What&apos;s Built Into the Platform
            </h2>
            <p className="text-[15px] text-[#94A3B8] max-w-xl leading-relaxed">
              Every module is designed around real estate workflows — not adapted from generic enterprise software.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-[#0D1521] border border-white/8 rounded-xl p-6 hover:border-white/12 transition-all duration-300"
              >
                <h3 className="text-[15px] font-bold text-white mb-3">{f.title}</h3>
                <p className="text-[13px] text-[#94A3B8] leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="relative max-w-3xl mx-auto px-6 pb-24 text-center">
          <div className="bg-[#0D1521] border border-white/8 rounded-2xl p-10">
            <h2 className="text-[28px] font-bold text-white mb-4 tracking-tight">
              Own Your Real Estate Operations Platform
            </h2>
            <p className="text-[15px] text-[#94A3B8] leading-relaxed mb-8">
              Schedule a complimentary discovery session. We&apos;ll map your current systems and present an
              infrastructure approach tailored to your portfolio.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#3B6AFF] hover:bg-[#4F7FFF] text-white text-[14px] font-semibold rounded-xl transition-colors"
            >
              Schedule Consultation <ArrowRight size={14} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
