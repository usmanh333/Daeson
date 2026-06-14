import Link from "next/link";
import Image from "next/image";

const solutions = [
  { label: "Real Estate Infrastructure", href: "/real-estate" },
  { label: "Amanah AI", href: "/amanah-ai" },
  { label: "Enterprise AI Systems", href: "/industries" },
];

const company = [
  { label: "About", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

const markets = ["UAE & GCC", "Canada", "United States", "Pakistan", "United Kingdom"];

export default function Footer() {
  return (
    <footer className="bg-[#070B12] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid md:grid-cols-[1.6fr_1fr_1fr_1.2fr] gap-12 mb-14">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#3B6AFF] to-[#1A45CC] flex items-center justify-center flex-shrink-0">
                <Image src="/logo.png" alt="Daeson" width={20} height={20} className="object-contain" unoptimized />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[13px] font-bold tracking-[0.12em] text-white uppercase">Daeson</span>
                <span className="text-[9px] font-medium tracking-[0.18em] text-[#94A3B8] uppercase">Technologies</span>
              </div>
            </Link>
            <p className="text-[13px] text-[#94A3B8] leading-relaxed mb-6 max-w-xs">
              AI-powered operational infrastructure for real estate firms, Islamic financial institutions,
              and enterprise organizations.
            </p>
            <p className="text-[12px] text-[#4B5568]">
              info@daesontechagency.online
            </p>
          </div>

          {/* Solutions */}
          <div>
            <p className="text-[10px] font-semibold tracking-[0.15em] text-[#4B5568] uppercase mb-5">Solutions</p>
            <ul className="space-y-3">
              {solutions.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[13px] text-[#94A3B8] hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-[10px] font-semibold tracking-[0.15em] text-[#4B5568] uppercase mb-5">Company</p>
            <ul className="space-y-3">
              {company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[13px] text-[#94A3B8] hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Markets */}
          <div>
            <p className="text-[10px] font-semibold tracking-[0.15em] text-[#4B5568] uppercase mb-5">Markets Served</p>
            <ul className="space-y-3">
              {markets.map((market) => (
                <li key={market} className="flex items-center gap-2 text-[13px] text-[#94A3B8]">
                  <span className="w-1 h-1 rounded-full bg-[#3B6AFF]" />
                  {market}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/[0.06] mb-6" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-[#4B5568]">
          <p>© {new Date().getFullYear()} Daeson Technologies. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-[#94A3B8] transition-colors">About</Link>
            <Link href="/contact" className="hover:text-[#94A3B8] transition-colors">Contact</Link>
            <Link href="/insights" className="hover:text-[#94A3B8] transition-colors">Insights</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
