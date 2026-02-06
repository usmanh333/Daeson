"use client";

import Image from "next/image";
import Link from "next/link";

export default function SheriffCaseStudy() {
  return (
    <main className="bg-[#f5f5f3] text-black">

      {/* ================= HERO ================= */}
      <section className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 pt-32 pb-40 grid lg:grid-cols-2 gap-20 items-center">

          <div>
            <p className="uppercase tracking-[0.2em] text-[13px] text-gray-400">
              Case Study
            </p>

            <h1 className="mt-6 text-[42px] font-medium leading-[1.2] tracking-tight">
              Desktop System for <br /> USA Sheriff Police Department
            </h1>

            <p className="mt-8 text-gray-400 leading-[1.8] max-w-[520px]">
              A secure, mission-critical desktop application built to manage
              law enforcement operations, case records, and sensitive data
              with absolute reliability.
            </p>
          </div>

          <div className="relative h-[420px] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1920&q=80"
              alt="Sheriff Police Desktop System"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <h2 className="text-[32px] font-medium leading-[1.3] max-w-[640px]">
          Building secure, reliable software for modern law enforcement
        </h2>

        <p className="mt-10 text-gray-700 leading-[1.8] max-w-[640px]">
          The USA Sheriff Police Department required a unified desktop solution
          capable of operating securely in high-risk, low-latency environments
          while maintaining strict compliance standards.
        </p>
      </section>

      {/* ================= CHALLENGES ================= */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-20">

          <div>
            {/* <span className="inline-block w-10 h-1 bg-yellow-400 mb-4"></span> */}
            <h3 className="text-[22px] font-medium underline underline-offset-8 decoration-yellow-400">
              The Challenges
            </h3>
          </div>

          <p className="leading-[1.8] text-gray-700">
            The USA Sheriff Police Department required a unified, high-performance
            desktop solution capable of operating securely in high-risk,
            low-latency environments while maintaining strict federal and
            departmental compliance standards.
            <br /><br />
            Daily operations involved managing sensitive criminal records,
            incident reports, personnel data, and internal communications — all
            demanding absolute reliability and security. Any downtime or data
            inconsistency posed serious operational and legal risks.
            <br /><br />
            Existing systems were fragmented across multiple tools, leading to
            inefficiencies, manual workarounds, and increased exposure to human
            error. Officers needed a dependable platform that could operate
            offline, scale across departments, and protect highly sensitive
            law-enforcement data.
          </p>

        </div>
      </section>

      {/* ================= SOLUTION ================= */}
      <section className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-20">

          <div>
            {/* <span className="inline-block w-10 h-1 bg-yellow-400 mb-4"></span> */}
            <h3 className="text-[22px] font-medium underline underline-offset-8 decoration-yellow-400">
              Our Solution
            </h3>
          </div>
          <p className="leading-[1.8] text-gray-400">
            We designed and built a custom desktop application tailored
            specifically for sheriff departments, focusing on reliability,
            usability, and compliance.
            <br /><br />
            The system supports secure authentication, role-based permissions,
            encrypted data storage, and fast data retrieval. It features a
            clean, simple user interface optimized for officers and
            administrative staff.
            <br /><br />
            The application includes structured forms, print-ready reports,
            admin login controls, and a robust backend enabling secure data
            handling, audit trails, and reliable performance even in
            low-connectivity environments.
          </p>

        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-32">

          <div className="mb-12">
            {/* <span className="inline-block w-10 h-1 bg-yellow-400 mb-4"></span> */}
            <h3 className="text-[22px] font-medium underline underline-offset-8 decoration-yellow-400">
              Key Features
            </h3>
          </div>

          <ul className="grid md:grid-cols-2 gap-x-20 gap-y-6 text-gray-700 leading-[1.8] list-disc pl-5">
            <li>Secure case & incident management</li>
            <li>Role-based access control</li>
            <li>Offline-first architecture</li>
            <li>Encrypted local & cloud storage</li>
            <li>Personnel, records & report management</li>
            <li>Audit logs & compliance reporting</li>
            <li>Admin login & system control panel</li>
            <li>Print-out functionality for official documents</li>
          </ul>

        </div>
      </section>

      {/* ================= RESULTS ================= */}
      <section className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-32">

          <div className="mb-8">
            {/* <span className="inline-block w-10 h-1 bg-yellow-400 mb-4"></span> */}
            <h3 className="text-[22px] font-medium underline underline-offset-8 decoration-yellow-400">
              Results & Impact
            </h3>
          </div>

          <p className="text-gray-400 leading-[1.8] max-w-[640px]">
            The new system significantly reduced operational delays, improved
            data accuracy, and strengthened overall security compliance.
            Officers now access and manage critical information faster and
            safer — even in demanding operational environments.
            <br /><br />
            By replacing fragmented tools with a unified platform, the
            department achieved better transparency, consistent reporting,
            and improved workflow efficiency across teams.
          </p>

        </div>
      </section>

      {/* ================= NEXT ================= */}
      <section className="bg-[#111] text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 flex justify-between items-center">
          <h3 className="text-[22px] font-medium">Next Case Study</h3>
          <Link
  href="/collective-casestudies"
  className="inline-block border-b border-white pb-1 text-white! font-medium 
             hover:text-yellow-400 hover:border-yellow-400 transition-colors"
>
  View all case studies
</Link>

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-white text-black px-6 py-10">
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">

            <div>
              <p className="text-2xl font-light">Interested in working with us?</p>
              <a href="/contact" className="inline-block mt-4 text-xl border-b-2 border-yellow-400 pb-1">
                Start a Project
              </a>

              <div className="flex gap-6 mt-8 flex-wrap">
                <img src="/google-reviews-logo.png" className="h-10 opacity-80" />
                <img src="/trustpilot.png" className="h-10 opacity-80" />
                <a href="https://clutch.co/profile/daeson-technologies" target="_blank">
                  <img src="/clutch.png" className="h-10 opacity-80" />
                </a>
                <a href="https://www.goodfirms.co/company/daeson-technologies" target="_blank">
                  <img src="/goodfirms.png" className="h-10 opacity-80" />
                </a>
              </div>
            </div>

            <div>
              <p className="uppercase text-sm tracking-widest">Careers</p>
              <p className="mt-6">We’re always looking for talented people.</p>
            </div>

            <div>
              <p className="uppercase text-sm tracking-widest">Support</p>
              <p className="mt-6">09:00 am – 17:00 pm</p>
              <p className="underline mt-2">info@daesontechagency.online</p>
            </div>

            <div>
              <p className="uppercase text-sm tracking-widest">Legal</p>
              <ul className="mt-6 space-y-3">
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Cookie Policy</li>
              </ul>
            </div>

          </div>

          <div className="border-t border-black/10 mt-12 pt-6 flex justify-between text-sm text-gray-500">
            <p>Home &gt; Case Studies</p>
            <p>© 2025 Daeson Technologies</p>
          </div>

        </div>
      </footer>

    </main>
  );
}
