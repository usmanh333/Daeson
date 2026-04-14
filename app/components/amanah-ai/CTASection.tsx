"use client";

import { ArrowRight, Mail } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 bg-white" id="cta">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-[#0F3D2E] rounded-3xl p-12 sm:p-16 text-center overflow-hidden shadow-[0_30px_80px_-10px_rgba(15,61,46,0.35)]">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-[#D4AF37]/8 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
          </div>

          <div className="relative space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/15 text-[#D4AF37] text-xs font-semibold px-4 py-1.5 rounded-full border border-[#D4AF37]/25">
              For Banks & Fintechs
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Explore the Future of{" "}
                <span className="text-[#D4AF37]">Shariah Compliance</span>
              </h2>
              <p className="text-white/70 text-base max-w-xl mx-auto leading-relaxed">
                Partner with us to modernize your institution&apos;s Islamic finance
                compliance infrastructure with AI-powered intelligence.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:info@daesontechagency.online"
                className="inline-flex items-center gap-2.5 bg-[#D4AF37] text-[#0F3D2E] font-bold px-8 py-4 rounded-xl hover:bg-[#E8C84D] transition-all shadow-lg hover:shadow-xl text-sm group"
              >
                Request Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="mailto:contact@daesontechagency.online"
                className="inline-flex items-center gap-2.5 border-2 border-white/25 text-white font-semibold px-8 py-4 rounded-xl hover:border-white/50 hover:bg-white/8 transition-all text-sm"
              >
                <Mail className="w-4 h-4" />
                Contact Us
              </a>
            </div>

            {/* Subtext */}
            <p className="text-white/40 text-xs">
              Confidential — For institutional preview only
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
