"use client";

import { Shield, Mail, Lock } from "lucide-react";

const footerLinks = [
  { label: "Platform", href: "#features" },
  { label: "Solution", href: "#solution" },
  { label: "Workflow", href: "#workflow" },
  { label: "Deployment", href: "#deployment" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#0F3D2E] flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <div>
                <span className="font-bold text-lg text-[#0F3D2E] block leading-none">
                  Amanah AI
                </span>
                <span className="text-xs text-gray-400">
                  by Daeson Technologies
                </span>
              </div>
            </div>
            <p className="text-xs text-gray-500 max-w-xs leading-relaxed">
              Shariah Compliance Intelligence Platform for modern financial
              institutions across Pakistan.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-gray-500">
              <Mail className="w-3 h-3" />
              <a
                href="mailto:contact@daesontechagency.online"
                className="hover:text-[#0F3D2E] transition-colors"
              >
                contact@daesontechagency.online
              </a>
            </div>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-5">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-gray-500 hover:text-[#0F3D2E] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Daeson Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-xs text-gray-400">
            <Lock className="w-3 h-3" />
            <span>Confidential — For institutional preview only</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
