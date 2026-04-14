"use client";

import {
  Upload,
  Cpu,
  Search,
  BookOpen,
  FileCheck,
} from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload",
    description: "Upload contract documents securely into the platform.",
    step: "01",
  },
  {
    icon: Cpu,
    title: "AI Review",
    description: "AI engine analyzes clauses and identifies compliance risks.",
    step: "02",
  },
  {
    icon: Search,
    title: "Compliance",
    description: "Compliance officers review AI findings and risk scores.",
    step: "03",
  },
  {
    icon: BookOpen,
    title: "Scholar",
    description: "Shariah scholars approve, reject, or flag for revision.",
    step: "04",
  },
  {
    icon: FileCheck,
    title: "Report",
    description: "Automated Shariah compliance report generated instantly.",
    step: "05",
  },
];

export default function WorkflowSection() {
  return (
    <section className="py-24 bg-[#F9FAFB]" id="workflow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#0F3D2E]/8 text-[#0F3D2E] text-xs font-semibold px-4 py-1.5 rounded-full border border-[#0F3D2E]/12">
            How It Works
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1F2937] tracking-tight">
            From Upload to Compliance —{" "}
            <span className="text-[#0F3D2E]">Fully Streamlined</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            A five-step process that transforms contract review from a manual bottleneck
            into a fast, transparent, and auditable workflow.
          </p>
        </div>

        {/* Desktop: horizontal steps */}
        <div className="hidden lg:flex items-start gap-0">
          {steps.map((step, i) => (
            <div key={step.title} className="flex-1 relative group">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="absolute top-[22px] left-1/2 w-full h-px z-0">
                  <div className="h-full bg-gray-200" />
                </div>
              )}

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center text-center px-2">
                {/* Step icon */}
                <div className="w-11 h-11 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center mb-3 shadow-sm group-hover:border-[#0F3D2E] group-hover:bg-[#0F3D2E]/4 transition-all">
                  <step.icon className="text-[#0F3D2E]" style={{ width: "18px", height: "18px" }} />
                </div>

                {/* Step number */}
                <div className="text-[10px] font-bold text-[#16A34A] mb-1 tracking-wider">{step.step}</div>

                {/* Title */}
                <h3 className="text-sm font-bold text-[#1F2937] mb-1.5">{step.title}</h3>

                {/* Description */}
                <p className="text-xs text-gray-500 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: vertical steps */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, i) => (
            <div key={step.title} className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-[#0F3D2E]/8 border-2 border-[#0F3D2E]/20 flex items-center justify-center flex-shrink-0">
                  <step.icon className="w-4 h-4 text-[#0F3D2E]" />
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px h-8 bg-gray-200 mt-1" />
                )}
              </div>
              <div className="pb-2">
                <div className="text-[10px] font-bold text-[#16A34A] tracking-wider mb-0.5">{step.step}</div>
                <h3 className="text-sm font-bold text-[#1F2937] mb-1">{step.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-8 py-4 shadow-sm">
            <span className="text-sm text-gray-600">Average time from upload to compliance decision:</span>
            <span className="text-lg font-bold text-[#0F3D2E]">&lt; 15 minutes</span>
          </div>
        </div>
      </div>
    </section>
  );
}
