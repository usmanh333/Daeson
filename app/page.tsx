"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  ChevronDown,
  Eye,
  Brain,
  Layers,
  Workflow,
} from "lucide-react";




/* ---------------- MAIN COMPONENT ---------------- */
export default function DaesonLanding() {
  const [slide, setSlide] = useState(0);

  const [aiOpen, setAiOpen] = useState(false);
  const [mernOpen, setMernOpen] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);
  const [n8nOpen, setN8nOpen] = useState(false);

  const slides = [
    { title: "Smart ML Dashboards", img: "/ML.png" },
    { title: "Automated Chatbots", img: "/Chatbot.png" },
    { title: "Data Engineering", img: "/Data.png" },
  ];
 

  useEffect(() => {
    const t = setInterval(() => {
      setSlide((s) => (s + 1) % slides.length);
    }, 4500);
    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <div className="min-h-screen bg-white text-black font-sans">

      {/* ---------------- HEADER ---------------- */}
      {/* ---------------- HEADER ---------------- */} 
<header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-md transition-all duration-500 hover:shadow-xl">
  <div className="max-w-7xl mx-auto px-6 py-6 flex justify-center items-center gap-4">
    <h1 className="text-3xl sm:text-4xl font-extrabold italic text-gray-900 transform transition-transform duration-500 hover:scale-105 hover:text-blue-600">
      Daeson <span className="font-light">Technologies</span>
    </h1>
    <Image 
      src="/logo.png" 
      alt="logo" 
      width={60} 
      height={60} 
      className="transition-transform duration-500 hover:rotate-12 hover:scale-110"
    />
  </div>

  {/* Working Icons */}
  <div className="flex justify-center gap-4 pb-4">

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
        className="transition-colors duration-300 hover:fill-blue-600"
      >
        <path d="M12 13L2 6.76V18h20V6.76L12 13z" />
        <path d="M12 11L2 4h20l-10 7z" />
      </svg>
    </a>

    {/* LinkedIn Icon */}
    <a
      href="https://www.linkedin.com/company/daeson-tech-agency/"
      target="_blank"
      className="p-2 rounded-full bg-black/10 hover:bg-black/20 transition-transform duration-300 hover:scale-110"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        fill="black"
        viewBox="0 0 24 24"
        className="transition-colors duration-300 hover:fill-blue-600"
      >
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4v14h-4V8zm7 0h3.8v1.9h.05c.53-.95 1.82-1.9 3.75-1.9 4 0 4.75 2.63 4.75 6v8h-4v-7.1c0-1.7-.03-3.9-2.4-3.9-2.4 0-2.8 1.8-2.8 3.8V22h-4V8z"/>
      </svg>
    </a>

  </div>
</header>

     
     

     {/* ---------------- HERO ---------------- */}
<section className="relative overflow-hidden">
  {/* Background image */}
  <div className="absolute inset-0 -z-10 opacity-20 transition-opacity duration-1000 ease-in-out">
    <Image src={slides[slide].img} alt="bg" fill className="object-cover" />
  </div>

  <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">

    {/* LEFT HERO CONTENT */}
    <div className="space-y-6 transform transition-transform duration-700 ease-out hover:scale-105">
      <h2 className="text-4xl sm:text-6xl font-extrabold italic text-gray-900 leading-tight">
        Your vision, powered by our technology.
      </h2>
      <p className="mt-6 text-lg sm:text-xl text-gray-700 max-w-xl">
        We build AI systems, SaaS platforms, automation pipelines, and scalable web applications for global businesses.
      </p>
      <div className="mt-6 flex gap-4">
        <a
          href="#contact"
          className="px-6 py-3 bg-white-600 text-white rounded-lg shadow-lg hover:bg-yellow-200 transition-all duration-300 transform hover:scale-105"
        >
          Get Started
        </a>
        <a
          href="#services"
          className="px-6 py-3 border border-yellow-200 text-black-500 rounded-lg shadow-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
        >
          Learn More
        </a>
      </div>
    </div>

    {/* RIGHT HERO IMAGE */}
    <div className="relative h-[300px] sm:h-[380px] rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-700 hover:scale-105">
      <Image src={slides[slide].img} alt="hero" fill className="object-cover" />
    </div>
    
  </div>

  {/* Smooth scroll */}
  <style jsx>{`
    html {
      scroll-behavior: smooth;
    }
  `}</style>
</section>


      {/* ---------------- AGENCY INTRO ---------------- */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold mb-4">
            NO Extra Jargon. Just Results.
           
          </h2>
          <p className="text-gray-600 text-lg">
            With 100% Free 1 year mentainance.
            We build trust through transparency, communication, and delivering measurable results that drive your business forward.
            </p>
        </div>
      </section>

      {/* ---------------- SERVICES ---------------- */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 space-y-20">

          <h2 className="text-4xl font-bold text-center">Our Services</h2>

          {/* MERN STACK */}
          <ServiceBlock
            icon={<Layers />}
            title="MERN Stack Development"
            open={mernOpen}
            setOpen={setMernOpen}
            items={[
              "Custom dashboards & CRMs",
              "Scalable backend APIs",
              "Cloud deployment & optimization",
            ]}
          />

          {/* AI SAAS */}
          <ServiceBlock
            icon={<Brain />}
            title="AI SaaS Platforms"
            open={aiOpen}
            setOpen={setAiOpen}
            items={[
              "AI chatbot platforms & Custom Assistants",
              "Analytics dashboardsc& ML models",
              "Subscription & billing systems & Data visualization",
              
            ]}
          />

          {/* COMPUTER VISION */}
          <ServiceBlock
            icon={<Eye />}
            title="Computer Vision Services"
            open={cvOpen}
            setOpen={setCvOpen}
            items={[
              "Image recognition & OCR",
              "Video analytics & tracking",
              "Retail, healthcare & security AI",
            ]}
          />

          {/* N8N */}
          <ServiceBlock
            icon={<Workflow />}
            title="n8n Automation"
            open={n8nOpen}
            setOpen={setN8nOpen}
            items={[
              "Workflow automation & Custom Agents",
              "API integrations",
              "CRM & SaaS automation",
            ]}
          />

        </div>
      </section>
{/* --------------------- ABOUT US ---------------------- */}
{/* --------------------- ABOUT / MISSION ---------------------- */}
<section className="bg-black py-24 px-6">
  <div
    className="
      max-w-7xl mx-auto
      bg-white
      border border-black
      rounded-32px]
      p-10 md:p-16
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
        <div className="rounded-3xl overflow-hidden bg-gray-200">
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
<section className="bg-white py-24">
  <div className="max-w-7xl mx-auto px-6">

    {/* HEADING */}
    <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
      How we build
    </h2>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

      {/* LEFT CONTENT */}
      <div className="space-y-10">

        <div className="flex items-start gap-6">
          <span className="text-8xl font-bold">→</span>
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
          <span className="text-8xl font-bold">→</span>
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
          <span className="text-8xl font-bold">→</span>
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
          <span className="text-8xl font-bold">→</span>
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
          <span className="text-8xl font-bold">→</span>
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
      <div className="relative w-full h-[480px] rounded-xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
          alt="Clean workspace"
          className="w-full h-full object-cover"
        />
      </div>

    </div>
  </div>
</section>


{/* how we satisfy clients */}
{/* ---------------- HOW WE SATISFY CLIENTS ---------------- */}
   
              




<section className="bg-white py-24">
  <div className="max-w-7xl mx-auto px-6">

    {/* HEADING */}
    <h2 className="text-4xl font-bold text-center text-gray-900 mb-20">
      How we satisfy clients
    </h2>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

      {/* LEFT IMAGE */}
      <div className="relative w-full h-[520px] rounded-2xl overflow-hidden">
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
            <span className="text-6xl font-bold text-gray-900 leading-none">→</span>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
          </div>
        ))}
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

<section className="py-12 text-center">
  <h3 className="text-xl font-semibold mb-4">
    Recognized by GoodFirms
  </h3>

  <p className="max-w-xl mx-auto mb-6 text-gray-600">
    Daeson Technologies is featured on GoodFirms, a trusted platform
    for evaluating top IT and software development companies worldwide.
  </p>

  <a href="https://www.goodfirms.co/" target="_blank" rel="dofollow">
    <img src="/goodfirm.png" alt="GoodFirms Logo" className="mx-auto w-44" />
  </a>
</section>



      <footer className="py-6 text-center bg-black text-white text-sm">
        © 2025 Daeson Tech Agency — All rights reserved.
      </footer>

    </div>
  );
}

/* ---------------- SERVICE BLOCK COMPONENT ---------------- */
function ServiceBlock({
  icon,
  title,
  open,
  setOpen,
  items,
}: any) {
  return (
    <div className="border border-gray-800 rounded-xl p-6">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full"
      >
        <div className="flex items-center gap-3 text-xl font-semibold">
          {icon}
          {title}
        </div>
        <ChevronDown className={open ? "rotate-180 transition" : "transition"} />
      </button>

      {open && (
        <div className="grid sm:grid-cols-3 gap-4 mt-6">
          {items.map((i: string) => (
            <div key={i} className="bg-gray-900 p-5 rounded-xl text-center">
              {i}
            </div>
          ))}
        </div>
      )}
    </div>
    
  );
}
