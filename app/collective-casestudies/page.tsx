"use client";

import Image from "next/image";
import Link from "next/link";

export default function CaseStudiesPage() {
  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="border-b bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-md transition-all duration-500">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* Logo & Company Name */}
          <div className="flex items-center gap-4">
            <Image
              src="/logo.png"
              alt="Daeson Technologies Logo"
              width={60}
              height={60}
              className="transition-transform duration-500 hover:rotate-6 hover:scale-105"
            />

            <h1 className="text-3xl sm:text-4xl font-extrabold italic text-gray-900">
              Daeson <span className="font-light">Technologies</span>
            </h1>
          </div>

          {/* Navigation */}
          {/* <nav className="hidden md:flex gap-10 text-sm font-medium text-gray-700">
            <Link href="/" className="hover:text-black transition">Home</Link>
            <Link href="/case-studies" className="hover:text-black transition">Case Studies</Link>
            <Link href="/about" className="hover:text-black transition">About</Link>
            <Link href="/contact" className="hover:text-black transition">Contact</Link>
          </nav> */}

        
         {/* Top-right Email and LinkedIn */}
        <div className="flex items-center gap-4">
          {/* Email Icon */}
          <a
            href="mailto:contact@daesontechagency.online"
            className="p-2 rounded-full bg-black/10 hover:bg-black/20 transition-transform duration-300 hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="black"
              viewBox="0 0 24 24"
            >
              <path d="M12 13L2 6.76V18h20V6.76L12 13z" />
              <path d="M12 11L2 4h20l-10 7z" />
            </svg>
          </a>

          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/company/daeson-tech-agency/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-black/10 hover:bg-black/20 transition-transform duration-300 hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="black"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4v14h-4V8zm7 0h3.8v1.9h.05c.53-.95 1.82-1.9 3.75-1.9 4 0 4.75 2.63 4.75 6v8h-4v-7.1c0-1.7-.03-3.9-2.4-3.9-2.4 0-2.8 1.8-2.8 3.8V22h-4V8z" />
            </svg>
          </a>
        </div>
      </div>
      </header>

    <main className="bg-[#f5f5f3] text-black">

      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-40">
        <p className="uppercase tracking-[0.25em] text-[13px] text-gray-500">
          Our Work
        </p>

        <h1 className="mt-6 text-[42px] font-medium leading-[1.2] max-w-[720px]">
          A selection of case studies showcasing our approach to
          design, technology, and problem-solving.
        </h1>
      </section>

      {/* ================= CASE STUDIES ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-40 space-y-32">

        {/* ========== CASE 01 ========== */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* NUMBER */}
          <div className="relative">
            <span className="absolute -top-20 left-0 text-[120px] font-light text-black/10">
              01
            </span>

            <p className="uppercase tracking-[0.2em] text-[13px] text-gray-500">
              Premium Website
            </p>

            <h2 className="mt-6 text-[32px] font-medium leading-[1.3]">
              InQueue Agency — Premium Instagram-Style Website
            </h2>

            <p className="mt-8 text-gray-700 leading-[1.8] max-w-[520px]">
              A visually driven, premium agency website inspired by Instagram-style
              layouts. Designed to highlight brand identity, portfolio content,
              and storytelling while maintaining performance, accessibility,
              and scalability.
            </p>

            <ul className="mt-8 space-y-2 text-gray-700 leading-[1.8]">
              <li>• Premium UI & motion-ready layout</li>
              <li>• Instagram-style visual storytelling</li>
              <li>• SEO-optimized and performance-focused</li>
              <li>• Scalable design system for growth</li>
            </ul>

            <Link
              href="https://www.inqueuestudio.com/"
              className="inline-block mt-10 border-b border-black pb-1 hover:text-yellow-400 hover:border-yellow-400 transition"
            >
              View Website
            </Link>
          </div>

          {/* IMAGE */}
          <div className="relative h-[420px] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1920&q=80"
              alt="InQueue Agency Website"
              fill
              className="object-cover"
            />
          </div>

        </div>

        {/* ========== CASE 02 ========== */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* IMAGE */}
          <div className="relative h-[420px] rounded-2xl overflow-hidden order-2 lg:order-1">
            <Image
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1920&q=80"
              alt="Michelin Star Restaurant AI Chatbot"
              fill
              className="object-cover"
            />
          </div>

          {/* TEXT */}
          <div className="relative order-1 lg:order-2">
            <span className="absolute -top-20 left-0 text-[120px] font-light text-black/10">
              02
            </span>

            <p className="uppercase tracking-[0.2em] text-[13px] text-gray-500">
              AI Chatbot System
            </p>

            <h2 className="mt-6 text-[32px] font-medium leading-[1.3]">
              Michelin-Star Restaurant — Advanced AI Ordering Assistant
            </h2>

            <p className="mt-8 text-gray-700 leading-[1.8] max-w-[520px]">
              An advanced AI-powered chatbot designed for a Michelin-star
              restaurant to enhance customer experience, streamline operations,
              and automate ordering workflows — from discovery to payment.
            </p>

            <ul className="mt-8 space-y-2 text-gray-700 leading-[1.8]">
              <li>• Intelligent menu search & dish descriptions</li>
              <li>• AI-driven food ordering & recommendations</li>
              <li>• Integrated payment & invoice generation</li>
              <li>• Review collection & customer feedback</li>
              <li>• Backend reporting & order management</li>
            </ul>

            {/* <Link
              href="/case-studies/michelin-ai-chatbot"
              className="inline-block mt-10 border-b border-black pb-1 hover:text-yellow-400 hover:border-yellow-400 transition"
            >
              View Case Study
            </Link> */}
          </div>

        </div>

      </section>

      {/* ================= FOOTER CTA ================= */}
      <section className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col lg:flex-row justify-between items-center gap-6">
          <h3 className="text-[22px] font-medium">
            Interested in working with us?
          </h3>

         <Link
  href="https://app.clickup.com/90182422977/chat/r/2kzmn4e1-58"
  target="_blank"
  rel="noopener noreferrer"
  className="border-b border-white pb-1 text-white! hover:text-yellow-400 hover:border-yellow-400 transition"
>
  Start a Project
</Link>

        </div>
      </section>

    </main>
     </>
  );
}
