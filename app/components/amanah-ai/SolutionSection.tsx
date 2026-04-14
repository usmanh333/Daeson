"use client";

import { Brain, AlertOctagon, GitMerge, BookOpen, CheckCircle2 } from "lucide-react";

const solutions = [
  {
    icon: Brain,
    title: "Contract Intelligence",
    description:
      "AI-driven analysis reviews contract clauses at a granular level, identifying language that may conflict with Shariah principles before human review begins.",
  },
  {
    icon: AlertOctagon,
    title: "Risk Identification",
    description:
      "Quantified risk scoring surfaces Riba, Gharar, and structural compliance concerns with clear severity indicators — enabling prioritization.",
  },
  {
    icon: GitMerge,
    title: "Workflow Standardization",
    description:
      "A structured digital pipeline replaces ad-hoc processes — ensuring every contract follows a consistent review, approval, and documentation path.",
  },
  {
    icon: BookOpen,
    title: "Scholar Support",
    description:
      "Shariah scholars receive pre-analyzed contract summaries with flagged concerns, enabling informed decisions faster without compromising deliberation quality.",
  },
];

export default function SolutionSection() {
  return (
    <section className="py-24 bg-white" id="solution">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left: Content */}
          <div className="space-y-7">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#0F3D2E]/8 text-[#0F3D2E] text-xs font-semibold px-4 py-1.5 rounded-full border border-[#0F3D2E]/12">
                Our Solution
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1F2937] tracking-tight leading-tight">
                A Structured Approach{" "}
                <span className="text-[#0F3D2E]">to Compliance</span>
              </h2>
            </div>

            <p className="text-gray-600 text-base leading-relaxed">
              Amanah AI provides a layered compliance intelligence framework — combining
              AI-driven contract analysis with structured scholar workflows and full
              audit traceability for Pakistan’s banking ecosystem.
            </p>

            <div className="space-y-4">
              {solutions.map((item) => (
                <div key={item.title} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-[#0F3D2E]/8 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#0F3D2E]/12 transition-colors">
                    <item.icon className="w-4.5 h-4.5 text-[#0F3D2E]" style={{ width: "18px", height: "18px" }} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#1F2937] mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative">
            <div className="bg-white rounded-xl border border-gray-200 shadow-md p-6 space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <span className="text-sm font-bold text-[#1F2937]">Contract Intelligence</span>
                <span className="text-xs bg-[#16A34A]/10 text-[#16A34A] font-semibold px-2.5 py-1 rounded-full">
                  Active
                </span>
              </div>

              {/* AI Analysis visual */}
              <div className="space-y-3">
                {[
                  { label: "Riba Detection", score: 96, status: "Clear", color: "bg-[#16A34A]" },
                  { label: "Gharar Assessment", score: 88, status: "Low Risk", color: "bg-[#16A34A]/70" },
                  { label: "Asset Backing", score: 72, status: "Review", color: "bg-amber-400" },
                  { label: "Structure Compliance", score: 91, status: "Compliant", color: "bg-[#0F3D2E]" },
                ].map((item) => (
                  <div key={item.label} className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-gray-700">{item.label}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-[#1F2937]">{item.score}%</span>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-md font-medium ${
                            item.status === "Clear" || item.status === "Compliant"
                              ? "bg-[#16A34A]/10 text-[#16A34A]"
                              : item.status === "Low Risk"
                              ? "bg-blue-50 text-blue-700"
                              : "bg-amber-50 text-amber-700"
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${item.color} transition-all duration-700`}
                        style={{ width: `${item.score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div className="mt-2 p-3.5 bg-[#0F3D2E]/4 rounded-lg border border-[#0F3D2E]/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#0F3D2E] flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#0F3D2E]">Overall: Shariah Compliant</p>
                    <p className="text-xs text-gray-500">Pending scholar sign-off</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative */}
            <div className="absolute -z-10 -bottom-8 -right-8 w-56 h-56 rounded-full bg-[#16A34A]/8 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
