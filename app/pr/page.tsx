"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

const pressItems = [
  {
    id: 1,
    outlet: "LinkedIn",
    outletLogo: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#0A66C2]">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.026-3.036-1.849-3.036-1.849 0-2.133 1.444-2.133 2.939v5.666h-3.554V8.998h3.414v1.561h.049c.476-.9 1.637-1.849 3.37-1.849 3.602 0 4.268 2.37 4.268 5.455v6.287zM5.337 7.433c-1.144 0-2.07-.927-2.07-2.07 0-1.144.926-2.07 2.07-2.07 1.143 0 2.07.926 2.07 2.07 0 1.143-.927 2.07-2.07 2.07zm1.777 13.019H3.56V8.998h3.554v11.454z" />
      </svg>
    ),
    category: "Article",
    headline: "The Future of Islamic Finance Compliance: How AI Is Redefining Shariah Review",
    excerpt:
      "In this article, we explore how artificial intelligence is transforming the compliance landscape for Islamic financial institutions — reducing review times from weeks to minutes and driving unprecedented accuracy.",
    date: "March 2026",
    readTime: "6 min read",
    href: "https://www.linkedin.com/company/daeson-tech-agency/",
    tag: "Islamic Finance",
    bgGrad: "from-[#0A66C2]/10 to-[#0A66C2]/5",
    border: "border-[#0A66C2]/20",
    badgeColor: "bg-[#0A66C2]/10 text-[#0A66C2]",
  },
  {
    id: 2,
    outlet: "TradingView",
    outletLogo: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#2962FF]">
        <path d="M3 13.5L7.5 9l3 3 4.5-5.25L21 13.5H3z" />
      </svg>
    ),
    category: "Press Release",
    headline: "Daeson Technologies Announces Amanah AI — Shariah Compliance Platform for Gulf & Pakistani Banks",
    excerpt:
      "Daeson Technologies today announced the official launch of Amanah AI, an intelligent Shariah compliance platform purpose-built for Islamic financial institutions operating in Pakistan and the wider Gulf region.",
    date: "February 2026",
    readTime: "Press Release",
    href: "https://www.tradingview.com/",
    tag: "Product Launch",
    bgGrad: "from-[#2962FF]/10 to-[#2962FF]/5",
    border: "border-[#2962FF]/20",
    badgeColor: "bg-[#2962FF]/10 text-[#2962FF]",
  },
  {
    id: 3,
    outlet: "Gulf Business",
    outletLogo: <span className="text-2xl font-black text-gray-800">GB</span>,
    category: "Feature",
    headline: "AI-Powered Shariah Compliance Comes to Gulf Banking — Amanah AI Leads the Way",
    excerpt:
      "Gulf Business speaks with the founders of Daeson Technologies about how Amanah AI is disrupting the decades-old manual Shariah review process at major Islamic banks across the MENA region.",
    date: "January 2026",
    readTime: "8 min read",
    href: "https://gulfbusiness.com/",
    tag: "Islamic Banking",
    bgGrad: "from-gray-800/10 to-gray-800/5",
    border: "border-gray-700/20",
    badgeColor: "bg-gray-100 text-gray-700",
  },
  {
    id: 4,
    outlet: "Arabian Business",
    outletLogo: <span className="text-2xl font-black text-[#C0001D]">AB</span>,
    category: "Coverage",
    headline: "Pakistani Startup Bridges the Gap in Gulf Shariah Compliance Technology",
    excerpt:
      "Arabian Business profiles Daeson Technologies and its flagship product Amanah AI, a compliance engine that has already helped 6+ Pakistani banks automate Shariah review workflows with 94% accuracy.",
    date: "December 2025",
    readTime: "5 min read",
    href: "https://www.arabianbusiness.com/",
    tag: "Fintech",
    bgGrad: "from-[#C0001D]/10 to-[#C0001D]/5",
    border: "border-[#C0001D]/20",
    badgeColor: "bg-[#C0001D]/10 text-[#C0001D]",
  },
];

export default function PRPage() {
  return (
    <>
      <div className="min-h-screen bg-black text-white font-sans">

        {/* ── HEADER ── */}
        <header className="border-b border-white/10 bg-white/90 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Image src="/logo.png" alt="Daeson Technologies" width={50} height={50} />
              <h1 className="text-2xl sm:text-3xl font-extrabold italic text-black">
                Daeson <span className="font-light">Technologies</span>
              </h1>
            </div>
            {/* <Link
              href="/"
              className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors text-sm font-semibold"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link> */}
          </div>
        </header>

        {/* ── HERO ── */}
        <section className="relative py-24 px-6 overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[400px] rounded-full bg-yellow-400/8 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-yellow-400/5 blur-3xl pointer-events-none" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <span className="inline-block text-yellow-400 uppercase tracking-widest text-xs font-bold mb-6 border border-yellow-400/30 px-4 py-1.5 rounded-full">
              Press &amp; Media
            </span>
            <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6">
              Daeson in the <span className="text-yellow-400">News</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Our work in Islamic finance AI, Shariah compliance technology, and Gulf fintech
              innovation — as covered by leading media outlets worldwide.
            </p>
          </div>
        </section>

        {/* ── STATS BAR ── */}
        <div className="border-y border-white/10 bg-white/5 py-8 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {[
              { value: "4+", label: "Media Outlets" },
              { value: "Gulf & MENA", label: "Coverage Region" },
              { value: "2025–2026", label: "Press History" },
              { value: "Islamic Finance", label: "Core Topic" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-extrabold text-yellow-400">{s.value}</div>
                <div className="text-xs text-gray-500 mt-1 uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── PR CARDS ── */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-8">
              {pressItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative flex flex-col bg-linear-to-br ${item.bgGrad} border ${item.border} rounded-2xl p-8 hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(234,179,8,0.12)] transition-all duration-300`}
                >
                  {/* Top row */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                        {item.outletLogo}
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm">{item.outlet}</p>
                        <p className="text-gray-500 text-xs">{item.date} · {item.readTime}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${item.badgeColor}`}>
                        {item.category}
                      </span>
                      <ExternalLink className="w-4 h-4 text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>

                  {/* Headline */}
                  <h2 className="text-white font-bold text-lg leading-snug mb-4 group-hover:text-yellow-300 transition-colors">
                    {item.headline}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-6">
                    {item.excerpt}
                  </p>

                  {/* Footer row */}
                  <div className="flex items-center justify-between pt-5 border-t border-white/10">
                    <span className="text-xs bg-yellow-400/10 text-yellow-400 font-semibold px-3 py-1 rounded-full border border-yellow-400/20">
                      {item.tag}
                    </span>
                    <span className="flex items-center gap-1.5 text-yellow-400 text-sm font-semibold group-hover:gap-2.5 transition-all">
                      Read Article <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 px-6 border-t border-white/10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold mb-4">
              Want to feature <span className="text-yellow-400">Daeson Technologies?</span>
            </h2>
            <p className="text-gray-400 mb-8">
              For press inquiries, media kits, or interview requests, reach out to our team.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:info@daesontechagency.online"
                className="px-8 py-3.5 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-300 transition-all hover:scale-105 shadow-lg"
              >
                Media Enquiry
              </a>
              <Link
                href="/"
                className="px-8 py-3.5 border border-white/20 text-white font-semibold rounded-lg hover:border-yellow-400/50 hover:text-yellow-400 transition-all"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </section>

        {/* ── FOOTER (same as home) ── */}
        <footer className="bg-white text-black px-6 py-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">

              {/* LEFT */}
              <div>
                <p className="text-2xl font-light">Interested in working with us?</p>
                <Link href="/contact" className="inline-block mt-4 text-xl border-b-2 border-yellow-400 pb-1">
                  Start a Project
                </Link>
                <div className="flex items-center gap-4 mt-8 flex-wrap">
                  <Image src="/google-reviews-logo.png" alt="Google" width={160} height={48} className="h-12 w-auto opacity-80 hover:opacity-100 transition" />
                  <Image src="/Trustpilot.png" alt="Trustpilot" width={160} height={48} className="h-12 w-auto opacity-80 hover:opacity-100 transition" />
                  <a href="https://clutch.co/profile/daeson-technologies" target="_blank" rel="noopener noreferrer">
                    <Image src="/clutch.png" alt="Clutch" width={150} height={48} className="h-12 w-auto opacity-80 hover:opacity-100 transition" />
                  </a>
                </div>
              </div>

              {/* MEDIA & PRESS */}
              <div>
                <p className="uppercase text-sm tracking-widest text-black">Media &amp; Press</p>
                <ul className="mt-6 space-y-3">
                  <li>
                    <a href="https://www.linkedin.com/pulse/responsible-ai-islamic-finance-governance-opportunity-mahnoor-zafar-0jbnf/?trackingId=0pXo2zRVa%2FtnKLGt6edU3Q%3D%3D" target="_blank" rel="noopener noreferrer" className="text-black hover:text-yellow-600 transition-colors text-sm">
                      Islamic Finance AI — LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="https://thearabianpost.com/ai-co-pilot-targets-shariah-compliance-gaps/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-yellow-600 transition-colors text-sm">
                      Arabian Post Coverage
                    </a>
                  </li>
                  <li>
                    <a href="https://www.tradingview.com/news/reuters.com,2026-03-25:newsml_Zaw5f1H9W:0-zawya-daeson-technologies-introduces-shariah-ai-compliance-co-pilot-to-strengthen-governance-in-gcc-islamic-banking/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-yellow-600 transition-colors text-sm">
                      Zawya Featured
                    </a>
                  </li>
                  <li>
                    <Link href="/pr" className="text-yellow-600 font-semibold hover:underline text-sm">
                      → View All Press Releases
                    </Link>
                  </li>
                </ul>
              </div>

              {/* SUPPORT */}
              <div>
                <p className="uppercase text-sm tracking-widest text-black">Need Support?</p>
                <p className="text-black mt-6">Contact us during business hours.</p>
                <p className="mt-6 text-black">☎ 09:00 am – 17:00 pm</p>
                <p className="mt-2 text-black underline">info@daesontechagency.online</p>
              </div>

              {/* LEGAL */}
              <div>
                <p className="uppercase text-sm tracking-widest text-black">Legal</p>
                <ul className="mt-6 space-y-3 text-black">
                  <li>Terms &amp; Conditions</li>
                  <li>Privacy Policy</li>
                  <li>Cookie Policy</li>
                </ul>
              </div>

            </div>

            <div className="border-t border-black/10 mt-12 pt-6 flex flex-col lg:flex-row justify-between gap-6 text-sm text-gray-500">
              <p>Home &gt; <span className="text-black">Press &amp; Media</span></p>
              <p>© 2025 <span className="text-black">Daeson Technologies</span> All rights reserved.</p>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}
