import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IndustryProblems from "@/components/IndustryProblems";
import ConceptDemos from "@/components/ConceptDemos";
import OwnershipModel from "@/components/OwnershipModel";
import WhatWeBuild from "@/components/WhatWeBuild";
import HowWeWork from "@/components/HowWeWork";
import WhyDaeson from "@/components/WhyDaeson";
import StrategicCollaboration from "@/components/StrategicCollaboration";
import FounderMessage from "@/components/FounderMessage";
import LeadershipSection from "@/components/LeadershipSection";
import ExecutiveMaterials from "@/components/ExecutiveMaterials";
import InsightsPreview from "@/components/InsightsPreview";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is operational infrastructure software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Operational infrastructure software refers to purpose-built digital systems that serve as the backbone of a company's day-to-day operations. Unlike generic SaaS tools, it is designed specifically around your business's workflows, data models, and compliance requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Do clients own the source code?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every system we build is fully owned by the client. This includes all source code, database schemas, documentation, and intellectual property. We believe businesses should own their infrastructure.",
      },
    },
    {
      "@type": "Question",
      name: "What industries does Daeson Technologies serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Daeson Technologies serves real estate and PropTech firms, Islamic financial institutions, and enterprise operations teams. We specialize in operationally complex businesses that have outgrown generic software tools.",
      },
    },
    {
      "@type": "Question",
      name: "What is Amanah AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Amanah AI is Daeson Technologies' platform currently in strategic development for Islamic financial institutions. It provides AI-assisted Shariah compliance workflows including contract analysis, governance documentation, and scholar review queues — developed in collaboration with Shariah advisory expertise.",
      },
    },
    {
      "@type": "Question",
      name: "What is a Concept Demonstration?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Concept Demonstration is a working prototype that validates architecture, workflow, and business logic for a specific operational domain. Unlike generic demos, our demonstrations are built around real industry workflows and are available for executive review — then tailored and fully built for each client's specific operations.",
      },
    },
    {
      "@type": "Question",
      name: "Does Daeson Technologies operate in the UAE and GCC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Daeson Technologies serves clients across the UAE, GCC, Canada, and international markets. Our systems are designed for multi-market, multi-currency, and regulatory-aware operations.",
      },
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Enterprise Operational Infrastructure",
  provider: {
    "@type": "Organization",
    name: "Daeson Technologies",
    url: "https://daesontechagency.online",
  },
  areaServed: ["UAE", "GCC", "Canada", "United States", "Pakistan", "UK"],
  description:
    "Custom-built operational infrastructure for real estate firms, Islamic financial institutions, and enterprise organizations. Clients own all systems.",
  offers: [
    {
      "@type": "Offer",
      name: "Real Estate Operations Platform",
      description: "Owned operational platform replacing fragmented SaaS for real estate and PropTech firms.",
    },
    {
      "@type": "Offer",
      name: "Amanah AI — Islamic Finance Intelligence",
      description: "Shariah compliance AI platform in strategic development for Islamic financial institutions.",
    },
    {
      "@type": "Offer",
      name: "Enterprise AI Systems",
      description: "Custom AI workflow systems for enterprise operations — fully owned, no subscriptions.",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Navbar />
      <main>
        {/* 1. Hero — establish positioning */}
        <Hero />

        {/* 2. Industry Problems — establish pain points */}
        <IndustryProblems />

        {/* 3. Concept Demonstrations — proof of capability */}
        <ConceptDemos />

        {/* 4. Ownership Model — differentiation */}
        <OwnershipModel />

        {/* 5. What We Build — service pillars */}
        <WhatWeBuild />

        {/* 6. How We Work — methodology */}
        <HowWeWork />

        {/* 7. Why Daeson — trust pillars */}
        <WhyDaeson />

        {/* 8. Strategic Collaboration — Alhamd (subtle) */}
        <StrategicCollaboration />

        {/* 9. Founder Perspective */}
        <FounderMessage />

        {/* 10. Leadership Team */}
        <LeadershipSection />

        {/* 11. Executive Materials */}
        <ExecutiveMaterials />

        {/* 12. Insights & Research */}
        <InsightsPreview />

        {/* 13. FAQ — GEO/LLM SEO */}
        <FAQ />

        {/* 14. Final conversion CTA */}
        <CTA />
      </main>
      <Footer />
    </>
  );
}
