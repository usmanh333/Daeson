"use client";

// import { useState, useEffect } from "react";
import Image from "next/image";

import {
  MagnifyingGlassIcon,
  ComputerDesktopIcon,
  PencilSquareIcon,
  WrenchScrewdriverIcon,
  CursorArrowRaysIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";





/* ---------------- MAIN COMPONENT ---------------- */
export default function DaesonLanding() {


 const services = [
  {
    title: "MVPs for Startups",
    icon: MagnifyingGlassIcon,
    points: [
       "Rapid development to validate startup ideas",
    "Cost-effective and lean product approach",
    "User-focused design and functionality",
    "Scalable architecture for future growth",
    "Fast iteration based on real user feedback"
    ],
  },
  {
    title: "SaaS Platforms",
    icon: ComputerDesktopIcon,
    points: [
      "Multi-tenant architecture for scalable apps",
      "Subscription and billing integrations",
      "User management and role-based access",
      "Analytics and reporting dashboards",
      "Cloud-native deployment for reliability",
    ],
  },
  {
    title: "Internal Systems & Dashboards",
    icon: PencilSquareIcon,
    points: [
 "Custom dashboards for data visualization",
      "Automation of internal processes",
      "Secure access controls for employees",
      "Real-time monitoring and alerts",
      "Integration with internal databases and APIs",
    ],
  },
  {
    title: "Technical Strategy & Consulting",
    icon: WrenchScrewdriverIcon,
    points: [
      "Technical guidance for product development",
      "Architecture and tech stack recommendations",
      "Scaling strategies for growing teams",
      "Process optimization for faster delivery",
      "Ongoing support as a strategic partner",
    ],
  },
  {
    title:  "Agency & Product Collaboration",
    icon: CursorArrowRaysIcon,
    points: [
 "Dedicated development team for agencies",
      "Extend internal capabilities without hiring",
      "Co-development for product-focused businesses",
      "Flexible collaboration models",
      "Delivering quality software efficiently",
    ],
  },
  {
    title: "Fintech AI Chatbot Integration",  
    icon: ChatBubbleLeftRightIcon,
    points: [
"Intelligent conversational interfaces for banking and fintech apps",
    "24/7 customer support for account queries, transactions, and payments",
    "Secure integration with banking systems, CRMs, and payment platforms",
    "Context-aware responses for financial regulations and user intent",
    "Multi-language support with secure data handling and compliance"
    ],
  },
];


  // useEffect(() => {
  //   const t = setInterval(() => {
  //     setSlide((s) => (s + 1) % slides.length);
  //   }, 4500);
  //   return () => clearInterval(t);
  // }, [slides.length]);

  return (
   <>
    <div className="min-h-screen bg-white text-black font-sans">

    
      {/* ---------------- HEADER ---------------- */} 
<header className="border-b bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-md transition-all duration-500">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo and Company Name */}
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
  className="p-3 rounded-full bg-black/10 text-black shadow-md hover:scale-110 hover:shadow-lg transition-transform duration-300 flex items-center justify-center"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    viewBox="0 0 24 24"
    className="inline-block"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.026-3.036-1.849-3.036-1.849 0-2.133 1.444-2.133 2.939v5.666h-3.554V8.998h3.414v1.561h.049c.476-.9 1.637-1.849 3.37-1.849 3.602 0 4.268 2.37 4.268 5.455v6.287zM5.337 7.433c-1.144 0-2.07-.927-2.07-2.07 0-1.144.926-2.07 2.07-2.07 1.143 0 2.07.926 2.07 2.07 0 1.143-.927 2.07-2.07 2.07zm1.777 13.019H3.56V8.998h3.554v11.454z"/>
  </svg>
</a>

        </div>
      </div>
    </header>

     
     

     {/* ---------------- HERO ---------------- */}

 
    <section
  className="relative bg-black text-white overflow-hidden"
  style={{
    backgroundImage: "url('/hero-cover.png')", // put your image in /public
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  <div className="max-w-7xl mx-auto px-6 py-32 lg:grid lg:grid-cols-2 gap-12 items-center relative z-10">
    {/* LEFT HERO CONTENT */}
    <div className="space-y-6 transform transition-transform duration-700 ease-out hover:scale-105">
      <h1 className="text-4xl sm:text-6xl font-extrabold italic leading-tight">
        Your Vision, <br /> Powered by Technology
      </h1>
      <p className="mt-4 text-lg sm:text-xl text-gray-200 max-w-lg">
        We design and build AI systems, SaaS platforms, automation pipelines, and scalable web applications
        for startups and fintechs worldwide.
      </p>

      {/* CTA Buttons */}
      <div className="mt-6 flex gap-4">
        <a
          href="#contact"
          className="px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          Get Started
        </a>
        <a
          href="#services"
          className="px-6 py-3 border-2 bg-white text-black font-medium rounded-lg shadow-lg  transition-all duration-300 transform hover:scale-105"
        >
          Learn More
        </a>
      </div>
    </div>

    {/* RIGHT HERO IMAGE */}
    <div className="relative h-[350px] sm:h-[450px] rounded-3xl overflow-hidden shadow-2xl transform transition-transform duration-700 hover:scale-105">
      {/* Optional right image overlay or illustration */}
      <div
        className="absolute inset-0 bg-yellow-400/10 rounded-3xl"
        style={{ backgroundBlendMode: "soft-light" }}
      ></div>
    </div>
  </div>
</section>

 

 



      {/* ---------------- AGENCY INTRO ---------------- */}
     <section className="relative py-20 bg-gray-50 overflow-hidden">
  {/* Decorative abstract circles */}
  <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-yellow-400 opacity-20 blur-3xl animate-bounce-slow"></div>
  <div className="absolute -bottom-20 -right-10 w-72 h-72 rounded-full bg-black opacity-10 blur-2xl animate-pulse-slow"></div>

  <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
    <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
      NO Extra Jargon. <span className="text-yellow-400">Just Results.</span>
    </h2>
    <p className="text-gray-700 text-lg sm:text-xl max-w-3xl mx-auto">
      With <span className="font-semibold">Just Trust</span>.  
      We build trust through transparency, consistent communication, and delivering measurable results that drive your business forward.
    </p>

    <div className="mt-8">
      <a
        href="#contact"
        className="inline-block px-8 py-4 bg-yellow-400 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105"
      >
        Start a Project
      </a>
    </div>
  </div>

  {/* Tailwind Animations */}
  <div className="hidden">
    <style>{`
      @keyframes bounce-slow {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-15px); }
      }
      .animate-bounce-slow { animation: bounce-slow 6s infinite ease-in-out; }

      @keyframes pulse-slow {
        0%, 100% { transform: scale(1); opacity: 0.2; }
        50% { transform: scale(1.2); opacity: 0.3; }
      }
      .animate-pulse-slow { animation: pulse-slow 8s infinite ease-in-out; }
    `}</style>
  </div>
</section>



      {/* ---------------- SERVICES ---------------- */}
      <section className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-14">
          <h2 className="text-5xl font-bold mb-4">
            Tech Services
          </h2>
          <p className="text-gray-400 max-w-4xl">
        In today’s fast-paced fintech and startup ecosystem, having a robust digital and technology strategy is critical to driving growth and staying ahead of the competition. We help startups and fintech companies leverage data-driven campaigns, automation, and AI-powered solutions to build scalable products, streamline operations, and deliver measurable results.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-gray-800">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-10 border-b border-r border-gray-800 hover:bg-neutral-900 transition"
            >
              <service.icon className="w-10 h-10 mb-6 text-white" />

              <h3 className="text-2xl font-semibold mb-6">
                {service.title}
              </h3>

              <ul className="space-y-4">
                {service.points.map((point, i) => (
                  <li key={i} className="flex gap-3 text-gray-300">
                    <span className="text-yellow-400 font-bold">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-end mt-10">
          <button className="bg-yellow-400 text-black font-semibold px-8 py-3 rounded hover:bg-yellow-300 transition">
            GET A QUOTE
          </button>
        </div>
      </div>
    </section>

{/* --------------------- ABOUT / MISSION ---------------------- */}
<section className="relative bg-black py-24 px-6 overflow-hidden">
  {/* Bird-style background shapes */}
  <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply opacity-30 translate-x-1/3 translate-y-1/3"></div>

  <div
    className="
      relative
      max-w-7xl mx-auto
      bg-white
      border border-black
      rounded-4xl
      p-10 md:p-16
      shadow-xl
    "
  >
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* LEFT CONTENT */}
      <div>
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Who we are and our mission
        </h2>

        <p className="text-gray-700 mb-5 leading-relaxed">
          <span className="font-semibold">Daeson Technologies</span> is a modern
          technology agency bringing together engineers, designers, and AI
          specialists to build intelligent digital solutions.
        </p>

        <p className="text-gray-700 mb-5 leading-relaxed">
          We help businesses, startups, and founders implement scalable technology
          clearly and effectively — from idea to launch.
        </p>

        <p className="text-gray-700 mb-5 leading-relaxed">
          Our mission is to make advanced technology accessible, practical, and
          growth-driven for companies worldwide.
        </p>

        <p className="text-gray-700 leading-relaxed">
          With years of experience in web platforms, AI systems, and automation,
          we deliver reliable, production-ready solutions.
        </p>

        <button
          className="
            mt-10
            px-8 py-4
            rounded-full
            bg-gray-800
            text-white
            font-semibold
            hover:bg-yellow-400
            hover:text-black
            transition
          "
        >
          LEARN MORE ABOUT US
        </button>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative">
        <div className="rounded-3xl overflow-hidden bg-gray-200 shadow-lg transform hover:scale-105 transition-transform duration-500">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475"
            alt="Technology and innovation"
            className="w-full h-full object-cover grayscale"
          />
        </div>
      </div>
    </div>
  </div>
</section>

{/* what we built */}
<section className="bg-white py-24 relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">

    {/* HEADING */}
    <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
      How we build
    </h2>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

      {/* LEFT CONTENT */}
      <div className="space-y-10">

        <div className="flex items-start gap-6">
          <span className="shrink-0 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
            1
          </span>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Product-first thinking
            </h3>
            <p className="text-gray-600 mt-2">
              We start by understanding the problem, users, and business goals
              before choosing any technology or architecture.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-6">
          <span className="shrink-0 w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
            2
          </span>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Right technology choices
            </h3>
            <p className="text-gray-600 mt-2">
              We carefully select the stack — AI, full-stack, automation,
              or computer vision — without unnecessary complexity.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-6">
          <span className="shrink-0 w-10 h-10 bg-green-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
            3
          </span>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Fast and iterative delivery
            </h3>
            <p className="text-gray-600 mt-2">
              Early prototypes, quick feedback loops, and continuous improvements
              to reach production faster.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-6">
          <span className="shrink-0 w-10 h-10 bg-purple-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
            4
          </span>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Automation and scalability
            </h3>
            <p className="text-gray-600 mt-2">
              We design systems that automate workflows, scale efficiently,
              and remain easy to maintain as your business grows.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-6">
          <span className="shrink-0 w-10 h-10 bg-pink-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
            5
          </span>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Measurable business results
            </h3>
            <p className="text-gray-600 mt-2">
              Fewer manual tasks, faster launches, better insights,
              and technology that directly supports real business outcomes.
            </p>
          </div>
        </div>

      </div>

      {/* RIGHT IMAGE */}
      <div className="relative w-full h-[480px] rounded-xl overflow-hidden shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
          alt="Clean workspace"
          className="w-full h-full object-cover"
        />
      </div>

    </div>
  </div>

  {/* Optional: soft abstract circles as background for bird-style feel */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-200 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full opacity-20 translate-x-1/3 translate-y-1/3"></div>
</section>



{/* how we satisfy clients */}
{/* ---------------- HOW WE SATISFY CLIENTS ---------------- */}
   


<section className="bg-black py-24 relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">

    {/* HEADING */}
    <h2 className="text-4xl font-bold text-center text-white mb-20">
      How we satisfy clients
    </h2>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

      {/* LEFT IMAGE */}
      <div className="relative w-full h-[520px] rounded-2xl overflow-hidden shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="Team collaboration and client success"
          className="w-full h-full object-cover"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="space-y-12">
        {[
          {
            title: "Deep understanding of your business",
            description: "We begin by understanding your goals, challenges, users, and market so every decision is aligned with real business needs."
          },
          {
            title: "Clear communication and transparency",
            description: "Regular updates, clear timelines, and honest feedback ensure you always know what is being built and why."
          },
          {
            title: "High-quality, scalable solutions",
            description: "We deliver clean, secure, and scalable systems that perform reliably today and continue to grow with your business."
          },
          {
            title: "On-time delivery with flexibility",
            description: "Fast execution with room for iteration — we adapt quickly while keeping deadlines and quality intact."
          },
          {
            title: "Long-term partnership mindset",
            description: "We don’t disappear after delivery. Ongoing support, optimization, and guidance help you succeed long after launch."
          }
        ].map((item, index) => (
          <div key={index} className="flex items-start gap-6">
            {/* Tick marker */}
            <span className="shrink-0 w-10 h-10 bg-yellow-400 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-md">
              ✔
            </span>
            <div>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="text-gray-300 mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Background abstract shapes */}
  <div className="absolute top-0 left-0 w-80 h-80 bg-green-500 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full opacity-20 translate-x-1/4 translate-y-1/4"></div>
</section>





{/* Case Study Section */}
<section className="relative bg-white text-black overflow-hidden rounded-b-[40px]">
  <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
    
    {/* LEFT TEXT */}
    <div className="space-y-6 max-w-md">
      <p className="uppercase tracking-widest text-lg border-b-2 border-black inline-block">
        Our Work
      </p>
      <h1 className="text-3xl md:text-5xl font-semibold leading-snug">
        Our Case Studies <br /> 
        A <span className="text-yellow-400">Successful Projects</span>.
      </h1>
      <p className="mt-2 text-black font-medium">
        We always aim to exceed our clients expectations.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 mt-4">
        <Link
          href="/collective-casestudies"
          className="px-6 py-3 border-2 border-black text-black font-medium rounded-lg hover:bg-yellow-400 hover:text-white transition-all duration-300"
        >
          View All Case Studies
        </Link>
      </div>
    </div>

    {/* RIGHT IMAGE WITH CENTER CIRCLE BUTTON */}
    <div className="relative group w-full max-w-md mx-auto mt-10 md:mt-0">
      <div className="relative w-full aspect-square overflow-hidden rounded-3xl shadow-2xl transform transition-transform duration-500 group-hover:scale-105">
        <Image
          src="/casestudy.png"
          alt="Sheriff Police System Interface"
          width={600}
          height={600}
          className="object-cover w-full h-full"
          priority
        />

        {/* CENTER CIRCULAR BUTTON OVERLAY */}
        <Link
          href="/case-studies/sheriff-police-system"
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-white text-black flex items-center justify-center text-lg font-medium tracking-wide hover:bg-yellow-400 hover:text-white transition-all duration-300 cursor-pointer">
            VIEW
          </div>
        </Link>
      </div>
    </div>
  </div>
</section>

  


  

 
  
      {/* ---------------- CONTACT ---------------- */}
      <section id="contact" className="py-20 bg-black">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start bg-black p-10 rounded-2xl">

    {/* LEFT SIDE */}
    <div>
      <h2 className="text-3xl font-extrabold text-white">
        Let’s Build Something Great
      </h2>

      <p className="text-gray-300 mt-3">
        Have a project in mind? Book a call or send us a message.
      </p>

      {/* BOOK A CALL BOX */}
      <div className="mt-6 p-5 rounded-xl border border-yellow-500/50 bg-black shadow-lg">
        <p className="text-yellow-300 font-semibold text-lg mb-2">
          Book a Free Strategy Call
        </p>

        <p className="text-gray-300 text-sm mb-4">
          Schedule a 30-minute call to discuss your idea, requirements, and
          how we can help you scale with AI & automation.
        </p>

   <a
  href="https://wa.me/923264501373?text=Hi%20I%20want%20to%20book%20a%20call%20with%20your%20agency"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block px-6 py-3 rounded-md bg-yellow-400 text-black font-bold hover:scale-[1.03] transition shadow-lg"
>
  Book a Strategy Call
</a>



      </div>
    </div>

    {/* RIGHT SIDE — CONTACT FORM */}
    <form
      action="https://api.web3forms.com/submit"
      method="POST"
      className="p-8 rounded-xl shadow-xl space-y-5 bg-black border border-yellow-500/40"
    >
      <input
        type="hidden"
        name="access_key"
        value="edde7579-53d7-4400-869f-0b007911e1b4"
      />

      <input
        name="name"
        placeholder="Your name"
        className="w-full p-3 rounded-md bg-black border border-yellow-500/40 text-yellow-200 placeholder-yellow-300 focus:ring-2 focus:ring-yellow-400 outline-none"
        required
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        className="w-full p-3 rounded-md bg-black border border-yellow-500/40 text-yellow-200 placeholder-yellow-300 focus:ring-2 focus:ring-yellow-400 outline-none"
        required
      />

      <textarea
        name="message"
        rows={4}
        placeholder="Message"
        className="w-full p-3 rounded-md bg-black border border-yellow-500/40 text-yellow-200 placeholder-yellow-300 focus:ring-2 focus:ring-yellow-400 outline-none"
        required
      />

      <button
        type="submit"
        className="w-full py-3 rounded-md bg-linear-to-r from-yellow-500 to-yellow-300 text-black font-bold shadow-lg hover:shadow-yellow-500/50 hover:scale-[1.02] transition"
      >
        Send Message
      </button>
    </form>

  </div>

  {/* CALENDLY SCRIPT — REQUIRED ONCE */}
  <script
    src="https://assets.calendly.com/assets/external/widget.js"
    async
  ></script>
</section>


{/* footer */}
<footer className="bg-white/70 text-black px-6 py-6">
  <div className="max-w-7xl mx-auto">

    {/* MAIN GRID */}
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">

      {/* LEFT COLUMN */}
      <div>
        <p className="text-2xl font-light">Interested in working with us?</p>
        <a href="/contact" className="inline-block mt-4 text-xl border-b-2 border-yellow-400 pb-1">Start a Project</a>

        <div className="flex items-center gap-6 mt-8 flex-wrap">
          <img src="/google-reviews-logo.png" alt="Google" className="h-15 w-auto opacity-80 hover:opacity-100 transition" />
          <img src="/Trustpilot.png" alt="Trustpilot" className="h-15 w-auto opacity-80 hover:opacity-100 transition" />
          <a href="https://clutch.co/profile/daeson-technologies" target="_blank" rel="noopener noreferrer">
            <img src="/clutch.png" alt="Clutch" className="h-15 w-auto opacity-80 hover:opacity-100 transition" />
          </a>
          <a href="https://www.goodfirms.co/company/daeson-technologies" target="_blank" rel="noopener noreferrer">
            <img src="/Goodfirms.png" alt="GoodFirms" className="h-15 w-auto opacity-80 hover:opacity-100 transition" />
          </a>
        </div>
      </div>

      {/* CAREERS */}
      <div>
        <p className="uppercase text-sm tracking-widest text-black">Careers</p>
        <p className="text-black mt-6">We’re always looking for talented people to join our team.</p>
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
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>Cookie Policy</li>
        </ul>
      </div>

    </div>

    {/* BOTTOM BAR */}
    <div className="border-t border-black/10 mt-12 pt-6 flex flex-col lg:flex-row justify-between gap-6 text-sm text-gray-500">
      <p>Home &gt; <span className="text-black">Case Studies</span></p>
      <p>© 2025 <span className="text-black">Daeson Technologies</span> All rights reserved.</p>
    </div>

  </div>
</footer>
</div>
   </>
  );
}