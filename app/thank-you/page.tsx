import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { CheckCircle, ArrowRight, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Consultation Request Received",
  description: "Thank you for contacting Daeson Technologies.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#070B12] min-h-screen pt-24 flex items-center">
        <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[#3B6AFF]/[0.05] blur-[120px] pointer-events-none" />

        <div className="relative max-w-2xl mx-auto px-6 py-24 text-center w-full">
          {/* Check */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-emerald-400/10 border border-emerald-400/25 flex items-center justify-center">
              <CheckCircle size={28} className="text-emerald-400" />
            </div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] text-emerald-400 text-[11px] font-semibold tracking-widest uppercase mb-6">
            Request Received
          </div>

          <h1 className="text-[36px] md:text-[44px] font-extrabold text-white tracking-tight leading-[1.08] mb-5">
            Consultation Request Received.
          </h1>

          <p className="text-[16px] text-[#94A3B8] leading-[1.75] mb-3 max-w-lg mx-auto">
            Thank you for contacting Daeson Technologies. Our team reviews every inquiry carefully
            and typically responds within{" "}
            <span className="text-[#EDF2FF] font-semibold">24–48 business hours</span>.
          </p>

          <p className="text-[14px] text-[#4B5568] mb-12">
            You will receive a response from{" "}
            <span className="text-[#94A3B8]">contact@daesontechagency.online</span>
          </p>

          {/* Divider */}
          <div className="h-px bg-white/[0.06] mb-10" />

          {/* Optional Calendly */}
          <div className="bg-[#0D1521] border border-white/[0.07] rounded-2xl p-7 mb-10">
            <p className="text-[13px] font-semibold text-[#94A3B8] uppercase tracking-widest mb-3">
              Prefer to speak directly?
            </p>
            <h2 className="text-[20px] font-bold text-white mb-3 tracking-tight">
              Schedule an Introductory Call
            </h2>
            <p className="text-[13px] text-[#94A3B8] leading-relaxed mb-6">
              If you&apos;d prefer to speak with our team before we respond by email, you can schedule
              a brief introductory call. No preparation required.
            </p>
            <a
              href="https://calendly.com/daeson-technologies/executive-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#3B6AFF] hover:bg-[#4F7FFF] text-white text-[13px] font-semibold rounded-xl transition-colors"
            >
              <Calendar size={14} />
              Schedule Introductory Call
              <ArrowRight size={13} />
            </a>
          </div>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-3 border border-white/[0.10] hover:border-white/[0.18] text-[#EDF2FF] text-[13px] font-semibold rounded-xl transition-colors hover:bg-white/[0.03]"
            >
              Return Home
            </Link>
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#94A3B8] hover:text-white transition-colors"
            >
              Explore our research <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
