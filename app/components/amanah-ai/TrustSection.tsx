"use client";

import { Building2, Landmark, Smartphone, ShieldCheck } from "lucide-react";

const institutions = [
  {
    type: "Full Islamic Bank",
    examples: ["Meezan Bank", "BankIslami", "Al Baraka Bank"],
    icon: Building2,
    color: "text-[#0F3D2E]",
    bg: "bg-[#0F3D2E]/8",
    border: "border-[#0F3D2E]/15",
  },
  {
    type: "Islamic Window",
    examples: ["HBL Konnect Islamic", "UBL Ameen", "MCB Islamic"],
    icon: Landmark,
    color: "text-[#1F2937]",
    bg: "bg-[#1F2937]/8",
    border: "border-[#1F2937]/15",
  },
  {
    type: "Islamic Fintech",
    examples: ["Finja", "NayaPay Islamic", "Sadapay"],
    icon: Smartphone,
    color: "text-[#16A34A]",
    bg: "bg-[#16A34A]/10",
    border: "border-[#16A34A]/20",
  },
];

const mockLogos = [
  "Meezan Bank",
  "HBL Islamic",
  "BankIslami",
  "UBL Ameen",
  "Al Baraka Bank",
  "Faysal Bank Islamic",
  "Dubai Islamic Bank PK",
  "MCB Islamic",
];

export default function TrustSection() {
  return (
    <section className="py-20 bg-white border-t border-b border-gray-100" id="trust">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#0F3D2E]/8 text-[#0F3D2E] text-xs font-semibold px-4 py-1.5 rounded-full border border-[#0F3D2E]/12">
            <ShieldCheck className="w-3.5 h-3.5" />
            Institutional Trust
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1F2937] tracking-tight">
            Designed for{" "}
            <span className="text-[#0F3D2E]">Islamic Financial Institutions</span>
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto text-base">
            Purpose-built for the full spectrum of Islamic finance — from standalone
            Islamic banks to conventional institutions with Islamic windows and digital fintechs.
          </p>
        </div>

        {/* Institution type cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {institutions.map((inst) => (
            <div
              key={inst.type}
              className={`bg-white rounded-xl border ${inst.border} p-6 hover:shadow-md transition-shadow`}
            >
              <div
                className={`w-11 h-11 rounded-lg ${inst.bg} flex items-center justify-center mb-4`}
              >
                <inst.icon className={`w-5 h-5 ${inst.color}`} />
              </div>
              <h3 className={`text-base font-bold ${inst.color} mb-3`}>{inst.type}</h3>
              <ul className="space-y-2">
                {inst.examples.map((ex) => (
                  <li key={ex} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className={`w-1.5 h-1.5 rounded-full ${inst.bg.replace("/8", "").replace("/10", "")}`}
                      style={{ background: inst.color.includes("0F3D2E") ? "#0F3D2E" : inst.color.includes("1F2937") ? "#1F2937" : "#16A34A" }}
                    />
                    {ex}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mock logos strip */}
        <div className="border-t border-gray-100 pt-10">
          <p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">
            Designed for institutions including
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {mockLogos.map((logo) => (
              <div
                key={logo}
                className="px-5 py-2.5 bg-[#F9FAFB] border border-gray-200 rounded-lg text-sm font-semibold text-gray-600 hover:border-[#0F3D2E]/30 hover:text-[#0F3D2E] hover:bg-white transition-all cursor-default"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>

        {/* Compliance bar */}
        <div className="mt-10 bg-[#F9FAFB] rounded-xl border border-gray-200 p-6">
          <div className="flex flex-wrap items-center justify-center gap-10">
            {[
              { label: "Data Encryption", value: "AES-256" },
              { label: "Access Control", value: "RBAC" },
              { label: "Uptime SLA", value: "99.9%" },
              { label: "Audit Retention", value: "7 Years" },
              { label: "Deployment", value: "On-Premise / Cloud" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-base font-bold text-[#0F3D2E]">{item.value}</div>
                <div className="text-xs text-gray-500 mt-0.5">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
