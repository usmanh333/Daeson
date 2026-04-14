"use client";

import { Server, Cloud, Lock, Plug, CheckCircle2 } from "lucide-react";

const deploymentFeatures = [
  {
    icon: Server,
    title: "Deployable Within Bank Infrastructure",
    description:
      "Amanah AI can be deployed entirely within your institution’s own data center or private cloud — no mandatory external connectivity required.",
    detail: "On-premise ready",
  },
  {
    icon: Cloud,
    title: "Supports Internal Cloud Environments",
    description:
      "Compatible with private cloud deployments including VMware, OpenStack, and institutional hybrid architectures at scale.",
    detail: "Private cloud compatible",
  },
  {
    icon: Lock,
    title: "No External Data Hosting",
    description:
      "All contract data, compliance findings, and audit records remain within the bank’s controlled environment. Zero data leaves the institution.",
    detail: "Data sovereignty",
  },
  {
    icon: Plug,
    title: "API-Ready Integration",
    description:
      "RESTful APIs allow seamless integration with core banking systems, document management platforms, and existing compliance workflows.",
    detail: "Core banking connectors",
  },
];

const securitySpecs = [
  { label: "Deployment", value: "On-Premise / Private Cloud" },
  { label: "Data Residency", value: "Within Bank" },
  { label: "Encryption", value: "AES-256" },
  { label: "Authentication", value: "SSO / LDAP" },
  { label: "Integration", value: "REST API" },
  { label: "Uptime SLA", value: "99.9%" },
];

export default function PakistanFocusSection() {
  return (
    <section className="py-24 bg-[#0F3D2E]" id="deployment">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-white/15 text-white text-xs font-semibold px-4 py-1.5 rounded-full border border-white/20">
            Enterprise Deployment
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Designed for{" "}
            <span className="text-[#16A34A]">Institutional Environments</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-base">
            Amanah AI is built from the ground up for regulated financial institutions —
            with the security, control, and integration capabilities that enterprise banking demands.
          </p>
        </div>

        {/* Deployment feature grid */}
        <div className="grid sm:grid-cols-2 gap-5 mb-14">
          {deploymentFeatures.map((feature) => (
            <div
              key={feature.title}
              className="bg-white/8 border border-white/12 rounded-xl p-6 hover:bg-white/12 hover:border-[#16A34A]/30 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#16A34A]/20 transition-colors">
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-sm font-bold text-white leading-snug">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-sm text-white/60 leading-relaxed mb-3">
                    {feature.description}
                  </p>
                  <div className="inline-flex items-center gap-1.5 bg-[#16A34A]/20 text-[#16A34A] text-xs font-semibold px-2.5 py-1 rounded-full border border-[#16A34A]/30">
                    <CheckCircle2 className="w-3 h-3" />
                    {feature.detail}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Security specs bar */}
        <div className="border-t border-white/12 pt-10">
          <p className="text-center text-xs font-semibold text-white/40 uppercase tracking-widest mb-6">
            Technical Specifications
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
            {securitySpecs.map((spec) => (
              <div
                key={spec.label}
                className="bg-white/8 border border-white/10 rounded-lg p-3 text-center"
              >
                <div className="text-sm font-bold text-white mb-1">{spec.value}</div>
                <div className="text-xs text-white/45">{spec.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Note for UBL */}
        <div className="mt-10 bg-white/8 border border-white/15 rounded-xl p-6 text-center">
          <p className="text-sm text-white/70 max-w-2xl mx-auto">
            Available for institutional pilot deployment. Integration support provided
            for all major Pakistani banking core systems.
          </p>
        </div>
      </div>
    </section>
  );
}
