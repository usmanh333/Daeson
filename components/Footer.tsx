import { Shield, Mail, Globe, Linkedin, Twitter } from 'lucide-react';

const platformLinks = [
  { label: 'AI Contract Analysis', href: '#features' },
  { label: 'Compliance Engine', href: '#solution' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Scholar Workflow', href: '#how-it-works' },
  { label: 'Audit Trail', href: '#features' },
  { label: 'Compliance Reporting', href: '#features' },
];

const companyLinks = [
  { label: 'About Amanah AI', href: '#' },
  { label: 'Use Cases', href: '#use-cases' },
  { label: 'Global Markets', href: '#trust' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Request Demo', href: '#cta' },
  { label: 'Contact Us', href: 'mailto:contact@amanah-ai.com' },
];

const markets = [
  { flag: '🇸🇦', label: 'GCC / Saudi Arabia' },
  { flag: '🇦🇪', label: 'UAE' },
  { flag: '🇵🇰', label: 'Pakistan' },
  { flag: '🇬🇧', label: 'United Kingdom' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 pt-16 pb-8" id="footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #0F3D2E 0%, #1a6b50 100%)' }}
              >
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-bold text-lg text-white leading-none">
                  Amanah<span style={{ color: '#D4AF37' }}>AI</span>
                </div>
                <div className="text-[9px] font-semibold tracking-widest uppercase text-gray-500 mt-0.5">
                  Shariah Intelligence
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              AI-powered Shariah compliance intelligence for modern Islamic finance institutions
              — globally.
            </p>
            <a
              href="mailto:contact@amanah-ai.com"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4 text-gray-500" />
              contact@amanah-ai.com
            </a>
            {/* Social */}
            <div className="flex gap-3 pt-1">
              {[
                { Icon: Linkedin, href: '#', label: 'LinkedIn' },
                { Icon: Twitter, href: '#', label: 'Twitter' },
                { Icon: Globe, href: '#', label: 'Website' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center bg-gray-800 hover:bg-[#0F3D2E] text-gray-400 hover:text-white transition-all duration-200"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-5">Platform</h4>
            <ul className="space-y-3">
              {platformLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-5">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Markets */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-5">Markets Served</h4>
            <ul className="space-y-3">
              {markets.map((m) => (
                <li key={m.label} className="flex items-center gap-2.5">
                  <span className="text-base">{m.flag}</span>
                  <span className="text-sm text-gray-400">{m.label}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-5 border-t border-gray-800">
              <div className="text-xs font-semibold text-gray-500 mb-3 uppercase tracking-widest">
                Standards
              </div>
              {['AAOIFI', 'IFSB', 'SAMA', 'SBP', 'FCA'].map((s) => (
                <span
                  key={s}
                  className="inline-block text-xs font-bold px-2 py-0.5 rounded mr-1.5 mb-1.5 bg-gray-800 text-gray-400"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Amanah AI. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-sm text-gray-600 hover:text-gray-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
