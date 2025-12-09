"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function DaesonLanding() {
  const [slide, setSlide] = useState(0);

  const slides = [
    {
      title: "Smart ML Dashboards",
      caption: "Predictive analytics that guide decisions",
      img: "/ML.png",
    },
    {
      title: "Automated Chatbots",
      caption: "Conversational AI that reduces workload",
      img: "/chatbot.png",
    },
    {
      title: "Data Engineering",
      caption: "Reliable pipelines for accurate insights",
      img: "/Data.png",
    },
  ];

  useEffect(() => {
    const t = setInterval(
      () => setSlide((s) => (s + 1) % slides.length),
      4500
    );
    return () => clearInterval(t);
  }, []);
  


  // ⭐ Instagram-Style Portfolio Card Component
const PortfolioCard = ({ image, video }: { image: string; video: string }) => {
  return (
    <div className="relative group cursor-pointer rounded-xl overflow-hidden shadow-lg">
      {/* Image Layer */}
      <div className="w-full h-72 overflow-hidden">
        <Image
          src={image}
          alt="portfolio image"
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Video Layer */}
      <video
        className="w-full h-72 absolute top-0 left-0 hidden group-hover:block object-cover"
        muted
        autoPlay
        loop
      >
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};


  return (
    <div className="min-h-screen bg-white text-black antialiased font-sans">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap");
        html,
        body,
        #__next {
          font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto,
            "Helvetica Neue", Arial;
        }
      `}</style>

      {/* --------------------- HEADER ---------------------- */}
      <header className="relative bg-white/80 backdrop-blur-md border-b border-gray-300">
  <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">

    {/* Stylish Italian Style Title */}
    <h1 className="text-4xl font-extrabold text-black mx-auto tracking-wide text-center font-serif italic">
      Daeson <span className="font-light italic">Technologies</span>
    </h1>

    {/* Logo on Right - Round */}
    <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center ml-6 overflow-hidden">
      <Image
        src="/logo.png"         // <-- only this path works
        alt="Daeson Logo"
        width={65}
        height={65}
        className="rounded-full object-cover"
      />
    </div>

  </div>

  {/* Working Icons */}
  <div className="flex justify-center gap-4 pb-4">

    {/* Email Icon */}
    <a
      href="mailto:contact@daesontechagency.online"
      className="p-2 rounded-full bg-black/10 hover:bg-black/20 transition"
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
      className="p-2 rounded-full bg-black/10 hover:bg-black/20 transition"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        fill="black"
        viewBox="0 0 24 24"
      >
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4v14h-4V8zm7 0h3.8v1.9h.05c.53-.95 1.82-1.9 3.75-1.9 4 0 4.75 2.63 4.75 6v8h-4v-7.1c0-1.7-.03-3.9-2.4-3.9-2.4 0-2.8 1.8-2.8 3.8V22h-4V8z"/>
      </svg>
    </a>

  </div>
</header>


      {/* --------------------- HERO ---------------------- */}
      <main id="top">
        <section className="relative overflow-hidden bg-white">

          {/* Left-side images now displayed as background */}
          <div className="absolute inset-0 -z-10 opacity-20">
            <Image
              src={slides[slide].img}
              alt="Background slide"
              fill
              className="object-cover"
            />
          </div>

          <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-black">

     <h2 className="text-6xl font-extrabold leading-tight text-black font-serif italic tracking-wide">
  Your vision, powered by our technology.
</h2>



              {/* About Paragraph UNCHANGED EXACTLY */}
              <p className="text-xl text-black max-w-2xl">
                Daeson Technologies is a modern AI and Machine Learning agency focused on helping businesses turn data into real-world results. We build intelligent solutions that simplify operations, automate workflows, and support smarter decision-making.

                Our team specializes in creating AI models, data analytics dashboards, automation systems, and smart chatbots for companies across the UAE, Qatar, Türkiye, Pakistan, and worldwide.

                We believe advanced technology should be simple to understand that’s why every project includes clear summaries and visual reports.

                Our mission is to help organizations grow, automate, and stay ahead with reliable, future-ready AI solutions.
              </p>

              <div className="flex gap-4 items-center">
                <a
                  href="#contact"
                  className="px-6 py-3 bg-black text-white rounded-lg shadow-lg hover:bg-gray-800"
                >
                  Get in touch
                </a>
                <a
                  href="#portfolio"
                  className="px-5 py-3 border border-black rounded-lg"
                >
                  See portfolio
                </a>
              </div>
            </div>

            {/* keep your original hero box visible */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative w-full h-96">
                <Image
                  src={slides[slide].img}
                  alt="ML slide"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

          </div>
        </section>
{/* --------------------- SERVICES ---------------------- */}
<section id="services" className="py-20 bg-black text-white">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>

    {/* 1. Machine Learning */}
    <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
      <div>
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
          alt="Machine Learning"
          className="w-full rounded-xl shadow-lg"
        />
      </div>
      <div>
        <h3 className="text-3xl font-semibold mb-4">Machine Learning & Predictive Modeling</h3>
        <p className="text-gray-300 leading-relaxed">
         Our Machine Learning & Predictive Modeling service helps businesses make smarter decisions using the power of data. We build custom ML models that analyze patterns, forecast outcomes, and provide insights that support real business growth.

Whether you want to understand customer behavior, predict sales, detect risks, or automate a process, our models turn raw data into accurate, actionable results. Every solution is created specifically for your industry and business goals.

What We Deliver

Custom ML models (classification, regression, clustering)

Sales, demand, and trend forecasting

Customer behavior predictions

Risk detection & anomaly detection

Recommendation systems

Clean data preprocessing & feature engineering

Model evaluation, accuracy reports & charts

Easy-to-understand summaries for non-technical teams

Why It Matters

Machine Learning allows your business to move from guessing to knowing — enabling faster decisions, reduced costs, and improved performance.
        </p>
      </div>
    </div>

    {/* 2. Data Analytics & Dashboards */}
    <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
      <div>
        <img
          src="https://images.unsplash.com/photo-1556155092-8707de31f9c4"
          alt="Data Analytics Dashboard"
          className="w-full rounded-xl shadow-lg"
        />
      </div>
      <div>
        <h3 className="text-3xl font-semibold mb-4">Data Analytics & Dashboards</h3>
        <p className="text-gray-300 leading-relaxed">
        Our Data Analytics & Dashboards service transforms your raw data into clear, meaningful insights that help you make confident business decisions. We clean, analyze, and visualize your data in a way that’s easy to understand — even for non-technical teams.

Whether you need to track performance, monitor KPIs, understand customer behavior, or analyze trends, we design dashboards that bring your data to life. Each dashboard is fully customized to your business goals and updated in real time whenever required.

What We Deliver

Data cleaning & preprocessing

Advanced analytics & insights

Interactive dashboards (Power BI, Tableau, Python)

KPI tracking & performance reports

Trend, sales, and market analysis

Visual charts, graphs, and summaries

Text-based insights for non-technical users

Exportable reports for teams & management

Why It Matters

Clear analytics help you see what’s working, what’s not, and where your business can grow — allowing you to make smart decisions backed by data, not guesswork.
        </p>
      </div>
    </div>

    {/* 3. AI Chatbots & Automation */}
    <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
      <div>
        <img
          src="portfolio/chatbot.jpg"
          alt="AI Chatbot Automation"
          className="w-full rounded-xl shadow-lg"
        />
      </div>
      <div>
        <h3 className="text-3xl font-semibold mb-4">AI Chatbots + 1 Year Automation Maintenance</h3>
        <p className="text-gray-300 leading-relaxed">
          Our AI Chatbot service helps businesses automate customer support, handle inquiries, take orders, and stay available 24/7 — without hiring extra staff. We build intelligent, human-like chatbots for WhatsApp, websites, Instagram, Facebook, and custom platforms that streamline communication and improve customer experience.

Every chatbot is designed to understand your business, answer questions naturally, and guide users smoothly through their journey. From restaurants and online stores to agencies and service-based companies, our bots handle your daily tasks so you can focus on growth.

What We Deliver

WhatsApp, Website, Instagram & Facebook Chatbots

AI-powered replies with custom personality

Order-taking & booking systems

Customer support automation

Lead generation & FAQs

Multilingual support (English, Arabic, Turkish & more)

Full setup, integration & testing

Business-friendly instructions and documentation

1 Year Free Automation Repair & Maintenance
(bug fixes, improvements, small workflow updates, stability checks)

Why It Matters

AI chatbots reduce workload, speed up response times, and create a smoother experience for your customers — while saving time and operational costs.
        </p>
      </div>
    </div>

    {/* 4. Computer Vision */}
    <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
      <div>
        <img
          src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
          alt="Computer Vision"
          className="w-full rounded-xl shadow-lg"
        />
      </div>
      <div>
        <h3 className="text-3xl font-semibold mb-4">Computer Vision Systems</h3>
        <p className="text-gray-300 leading-relaxed">
        Our Computer Vision service helps businesses automate tasks, understand images and video, and extract valuable insights from visual data. Using advanced AI models, we build systems that can recognize objects, detect patterns, analyze images, and support real-time decision-making.

From retail and manufacturing to security, healthcare, and logistics Computer Vision unlocks new levels of efficiency and accuracy that traditional tools can’t match.

What We Deliver

Image classification & object detection

Face & emotion recognition

Product, item & defect detection

Image processing & enhancement

OCR (text extraction from images/PDFs)

Video analysis & monitoring

Custom datasets & training

Detailed accuracy reports & visual results

Easy explanations for non-technical teams

Why It Matters

Computer Vision allows your business to automate repetitive tasks, improve quality control, enhance security, and analyze visual content at scale — saving time and reducing manual effort.
        </p>
      </div>
    </div>

    {/* 5. Website Development */}
    <div className="grid md:grid-cols-2 gap-10 items-center mb-10">
      <div>
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
          alt="Website Development"
          className="w-full rounded-xl shadow-lg"
        />
      </div>
      <div>
        <h3 className="text-3xl font-semibold mb-4">Website Development (React, Next.js)</h3>
        <p className="text-gray-300 leading-relaxed">
         Our Website Development service helps businesses build fast, modern, and visually impressive websites using the latest technologies like React, Next.js, TailwindCSS, and Node.js. We focus on clean design, strong performance, and user-friendly experiences that reflect your brand and support your business goals.

Whether you need a landing page, portfolio, business website, or a full web application, we create digital experiences that are responsive, secure, and optimized for all devices.

What We Deliver

Modern websites built with React & Next.js

Landing pages, portfolios & business websites

API integration & backend development

Responsive design for mobile & desktop

TailwindCSS, animations & UI components

SEO-friendly structure

Fast loading speed & performance optimization

Deployment on Vercel, Netlify, AWS, etc.

Clean code + documentation

Why It Matters

A modern website builds trust, improves customer experience, and helps your business stand out — while offering speed, security, and long-term scalability.
        </p>
      </div>
    </div>

  </div>
</section>

        {/* --------------------- PORTFOLIO ---------------------- */}
    <section id="portfolio" className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-4xl font-extrabold">Portfolio</h2>
    <p className="text-gray-600 mt-2 max-w-xl">Selected visual & ML projects.</p>

    <div className="mt-16 space-y-20">

      {/* 1 — Media Left / Text Right */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <PortfolioCard
          image="/portfolio/data visualization image.png"
          video="/portfolio/ML.mp4"
        />
        <div>
          <h3 className="text-2xl font-bold">Data Visualization & ML Insights</h3>
          <p className="text-gray-600 mt-3">
            We engineered a complete Machine Learning solution designed to transform raw data into actionable intelligence. Our team handled the full workflow — from data cleaning and feature engineering to advanced model training and evaluation. Using SVM and multiple comparative ML algorithms, we identified the most accurate and reliable predictive model tailored to the client’s objectives. The system includes optimized preprocessing pipelines, hyperparameter tuning, and detailed performance reporting with metrics such as accuracy, recall, and F1-score. This project highlights our capability to build scalable, production-ready ML models that help businesses automate decisions, reduce operational overhead, and unlock deeper insights through data.
          </p>
        </div>
      </div>

      {/* 2 — Media Right / Text Left */}
      <div className="grid md:grid-cols-2 gap-10 items-center md:flex-row-reverse">
        <div>
          <h3 className="text-2xl font-bold">Sora French Micheline Restaurant</h3>
        
                  <ul className="space-y-3 text-black-300 text-base">
          <li className="flex gap-2"> 
            <span className="text-purple-600 font-bold">•</span>
            Designed as a luxury restaurant chatbot with a brand-aligned conversational tone.
          </li>

          <li className="flex gap-2">
            <span className="text-purple-400">•</span>
            Helps customers explore menu items, chef specials, and personalized dish suggestions.
          </li>

          <li className="flex gap-2">
            <span className="text-purple-400">•</span>
            Handles reservation requests, availability checks, and peak-time inquiries.
          </li>

          <li className="flex gap-2">
            <span className="text-purple-400">•</span>
            Offers multiple payment methods for international fine-dining guests.
          </li>

          <li className="flex gap-2">
            <span className="text-purple-400">•</span>
            Reduces staff workload by responding to FAQs instantly and accurately.
          </li>

          <li className="flex gap-2">
            <span className="text-purple-400">•</span>
            Built using scalable AI architecture for smooth performance during busy dining hours.
          </li>

          <li className="flex gap-2">
            <span className="text-purple-400">•</span>
            Crafted to reflect the elegance, warmth, and sophistication of French fine dining.
          </li>
        </ul>
        </div>
        <PortfolioCard
          image="/portfolio/Sora.png"
          video="/portfolio/Sora1.mp4"
        />
      </div>

      {/* 3 — Media Left / Text Right */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <PortfolioCard
          image="/portfolio/cafe.png"
          video="/portfolio/Cafe.mp4"
        />
        <div>
          <h3 className="text-2xl font-bold">Cafe Amur Premium Restaurant Website (Turkey)</h3>
         <ul className="list-disc list-inside text-gray-700 space-y-1">
    <li>Developed a high-end restaurant website for <strong>Cafe Amur</strong> using modern React architecture.</li>
    <li>Designed with premium Turkey-inspired visuals and warm café aesthetics.</li>
    <li>Integrated smooth animations and a fully responsive layout.</li>
  </ul>

  <h4 className="text-xl font-semibold mt-4">Key Features</h4>

  <ol className="list-decimal list-inside text-gray-700 space-y-1">
    <li><strong>Homepage Menu Bar:</strong> A highlighted menu section with signature dishes and categories.</li>
    <li><strong>Dedicated Reservation Page:</strong> Includes a complete booking form with date & time selection.</li>
    <li><strong>Premium Visual Identity:</strong> Uses Turkish café color palette: gold, cocoa, earthy tones.</li>
    <li><strong>SEO-Optimized:</strong> Structured content to attract local and tourist diners.</li>
    <li><strong>Fully Responsive:</strong> Optimized for mobile, tablet, and desktop visitors.</li>
  </ol>
        </div>
      </div>

      {/* 4 — Media Right / Text Left */}
      <div className="grid md:grid-cols-2 gap-10 items-center md:flex-row-reverse">
        <div>
          <h3 className="text-2xl font-bold">🌍 Multilingual AI Chatbot 10+ Languages for Global Businesses</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
    <li>
      Developed a powerful AI-driven chatbot capable of communicating in 
      <strong>10+ international languages</strong>, including English, Urdu, Hindi, Turkish, Arabic, French, Spanish, German, Chinese, and Japanese.
    </li>
    <li>
      Designed for <strong>fast, accurate, and natural responses</strong> across cultural and linguistic boundaries.
    </li>
    <li>
      Helps businesses scale globally by handling customers from any region without needing additional support staff.
    </li>
  </ul>

  <h4 className="text-xl font-semibold mt-4">Key Business Advantages</h4>

  <ol className="list-decimal list-inside text-gray-700 space-y-1">
    <li>
      <strong>E-commerce Automation:</strong> Handles product inquiries, order tracking, recommendations, delivery updates, and FAQs.
    </li>
    <li>
      <strong>Customer Support:</strong> Offers 24/7 smart responses, reducing the need for human agents.
    </li>
    <li>
      <strong>Lead Generation:</strong> Captures customer details, preferences, and queries in multiple languages.
    </li>
    <li>
      <strong>Business Scalability:</strong> Allows companies to serve global customers without increasing workload.
    </li>
    <li>
      <strong>High Accuracy:</strong> Uses advanced ML/NLP models for context-aware answers and multilingual understanding.
    </li>
  </ol>
        </div>
        <PortfolioCard
          image="/portfolio/Multi.png"
          video="/portfolio/Multilingual chatbot.mp4"
        />
      </div>

    </div>
  </div>
</section>




        {/* --------------------- CONTACT ---------------------- */}
  <section
  id="contact"
  className="py-20 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage:
      "url('portfolio/back.avif')",
  }}
>
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start bg-black/70 p-10 rounded-2xl">

    {/* LEFT SIDE */}
    <div>
      <h2 className="text-3xl font-extrabold text-white">Let’s Build Something Great</h2>
      <p className="text-gray-300 mt-3">Have a project in mind? Let’s talk.</p>

      {/* WhatsApp Box */}
      <div className="mt-6 p-5 rounded-xl border border-yellow-500/50 bg-black/60 backdrop-blur-md shadow-lg flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white text-2xl">
          📱
        </div>

        <div>
          <p className="text-yellow-300 font-semibold text-lg">WhatsApp Us</p>
          <a
            href="https://wa.me/923264501373"
            target="_blank"
            className="text-white hover:text-yellow-300 transition"
          >
            +92 326 4501373
          </a>
        </div>
      </div>
    </div>

    {/* RIGHT SIDE — ORIGINAL FORM */}
    <form
      action="https://api.web3forms.com/submit"
      method="POST"
      className="p-8 rounded-xl shadow-xl space-y-5 bg-black/70 backdrop-blur-md border border-yellow-500/40"
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
        Send
      </button>
    </form>
  </div>
</section>


      </main>
      <footer className="py-6 text-center">
  <div className="text-center text-gray-500 mt-10 text-sm">
    © 2025 Daeson Tech Agency — All rights reserved.
  </div>
</footer>

    </div>







  );
}

   
