import Image from "next/image";

const badges = [
  { src: "/clutch.png", alt: "Clutch", href: "https://clutch.co/profile/daeson-technologies" },
  { src: "/goodfirm.png", alt: "GoodFirms", href: "https://www.goodfirms.co/company/daeson-technologies" },
  { src: "/google-reviews-logo.png", alt: "Google Reviews", href: "https://www.google.com/reviews/daeson-technologies" },
  { src: "/Trustpilot.png", alt: "Trustpilot", href: "https://www.trustpilot.com/verify/daeson-technologies" },
  { src: "/Designrush.png", alt: "DesignRush", href: "https://www.designrush.com/agency/profile/daeson-technologies" },
];

export default function TrustMarquee() {
  // Four copies: the track slides by -50% (two copies), so the loop is seamless even on wide screens.
  const loop = [...badges, ...badges, ...badges, ...badges];

  return (
    <section className="py-14 md:py-16" style={{ backgroundColor: "var(--bg-page)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <p className="text-center text-[11px] font-bold tracking-[0.22em] uppercase mb-10" style={{ color: "var(--text-muted)" }}>
        Verified &amp; Reviewed On
      </p>
      <div className="marquee">
        <div className="marquee-track items-center gap-20 pr-20">
          {loop.map((b, i) => {
            const isCopy = i >= badges.length;
            return (
              <a
                key={`${b.alt}-${i}`}
                href={b.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-hidden={isCopy || undefined}
                tabIndex={isCopy ? -1 : undefined}
                className="shrink-0 transition-transform duration-300 hover:scale-110"
              >
                <Image
                  src={b.src}
                  alt={isCopy ? "" : `Daeson Technologies on ${b.alt}`}
                  width={240}
                  height={96}
                  className="h-20 md:h-24 w-auto object-contain"
                />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
