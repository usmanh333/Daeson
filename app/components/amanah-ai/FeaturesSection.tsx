"use client";

import {
  ScanText,
  AlertOctagon,
  BookOpen,
  ClipboardList,
  FileBarChart,
  Users,
} from "lucide-react";

const features = [
  {
    icon: ScanText,
    title: "Contract Analysis",
    description:
      "Automatically detects compliance issues and flags critical clauses across Murabaha, Ijara, and Musharakah contract types.",
    tag: "Core",
    tagColor: "bg-[#0F3D2E]/8 text-[#0F3D2E]",
  },
  {
    icon: AlertOctagon,
    title: "Risk Flags",
    description:
      "Quantifies compliance exposure with standardized risk indicators — giving institutions a clear severity score per contract.",
    tag: "Analytics",
    tagColor: "bg-amber-50 text-amber-700",
  },
  {
    icon: BookOpen,
    title: "Scholar Review Interface",
    description:
      "Structured interface for Shariah scholars to review AI findings, approve decisions, or flag contracts for further deliberation.",
    tag: "Workflow",
    tagColor: "bg-blue-50 text-blue-700",
  },
  {
    icon: ClipboardList,
    title: "Audit Logs",
    description:
      "Full immutable audit trails for every compliance decision — ready for internal review or SBP regulatory examination.",
    tag: "Compliance",
    tagColor: "bg-[#16A34A]/10 text-[#16A34A]",
  },
  {
    icon: FileBarChart,
    title: "Reporting",
    description:
      "Generate structured Shariah compliance reports instantly — exportable for boards, regulators, and Shariah supervisory committees.",
    tag: "Reporting",
    tagColor: "bg-purple-50 text-purple-700",
  },
  {
    icon: Users,
    title: "Multi-Role Access",
    description:
      "Purpose-built for compliance officers, Shariah scholars, auditors, and senior management — each with tailored views.",
    tag: "Platform",
    tagColor: "bg-[#0F3D2E]/8 text-[#0F3D2E]",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#0F3D2E]/8 text-[#0F3D2E] text-xs font-semibold px-4 py-1.5 rounded-full border border-[#0F3D2E]/12">
            Platform Features
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1F2937] tracking-tight">
            Everything You Need for{" "}
            <span className="text-[#0F3D2E]">Shariah Compliance</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            A complete intelligence layer for Islamic finance compliance — from AI
            analysis to scholar workflows and regulatory reporting.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-white rounded-xl border border-gray-200 p-6 hover:border-[#0F3D2E]/20 hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 rounded-lg bg-[#0F3D2E]/8 flex items-center justify-center group-hover:bg-[#0F3D2E]/12 transition-colors">
                  <feature.icon className="w-5 h-5 text-[#0F3D2E]" />
                </div>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${feature.tagColor}`}>
                  {feature.tag}
                </span>
              </div>

              <h3 className="text-base font-bold text-[#1F2937] mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
