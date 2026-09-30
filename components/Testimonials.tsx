import Image from "next/image";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  product: string;
  logo?: string;
};

// Add real client reviews here; the scrolling row picks them up automatically.
const testimonials: Testimonial[] = [
  {
    quote: "You have something that moves people, something others don't have. Great work on LuxeProperty AI.",
    name: "Josie",
    role: "Client",
    product: "LuxeProperty AI",
  },
  {
    quote:
      "Aylinor will be the first software of its kind. We have never seen anything like it before. It will definitely help Shariah advisors in banks and lessen the burden.",
    name: "Shariah Advisor",
    role: "Islamic Banking",
    product: "Aylinor",
  },
  {
    quote: "Ask Aylinor, together with the software, is something we need the most.",
    name: "Shariah Advisor",
    role: "Islamic Banking",
    product: "Ask Aylinor",
  },
  {
    quote:
      "Really liked the layout of the LuxeProperty dashboard, especially how investors can see and manage their whole portfolio, statements, and invest in other properties directly through the marketplace.",
    name: "Izeah Voltaire",
    role: "Founder, Floense",
    product: "LuxeProperty AI",
    logo: "/floense.png",
  },
];

const initials = (name: string) =>
  name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export default function Testimonials() {
  // Four copies: the track slides by -50% (two copies), so the loop is seamless even on wide screens.
  const loop = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="py-24 md:py-28" style={{ backgroundColor: "var(--bg-page)" }}>
      <div className="max-w-7xl mx-auto px-6 text-center mb-12 md:mb-14">
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] mb-4" style={{ color: "var(--text-muted)" }}>
          Client Reviews
        </p>
        <h2 className="text-[30px] md:text-[44px] font-extrabold tracking-tight leading-[1.05]" style={{ color: "var(--text-primary)" }}>
          What Our Clients Say
        </h2>
      </div>

      <div className="marquee py-4">
        <div className="marquee-track marquee-slow items-stretch gap-6 pr-6">
          {loop.map((t, i) => {
            const isCopy = i >= testimonials.length;
            return (
              <figure
                key={`${t.name}-${i}`}
                aria-hidden={isCopy || undefined}
                className="review-card shrink-0 w-[320px] md:w-[420px] rounded-[24px] p-7 md:p-9 flex flex-col justify-between relative overflow-hidden"
              >
                <span
                  aria-hidden="true"
                  className="absolute -top-4 right-5 text-[140px] leading-none font-serif select-none pointer-events-none"
                  style={{ color: "rgba(255,255,255,0.06)" }}
                >
                  &rdquo;
                </span>

                <div className="relative">
                  <span
                    className="inline-block text-[10px] font-bold tracking-[0.18em] uppercase px-3 py-1.5 rounded-full mb-6"
                    style={{ border: "1px solid rgba(255,255,255,0.22)", color: "rgba(255,255,255,0.8)" }}
                  >
                    {t.product}
                  </span>
                  <blockquote className="text-[16px] md:text-[18px] leading-[1.6] font-medium" style={{ color: "#F5F5F5" }}>
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                </div>

                <figcaption className="relative flex items-center gap-3.5 mt-8 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.10)" }}>
                  <div className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 overflow-hidden bg-white">
                    {t.logo ? (
                      <Image src={t.logo} alt="" width={44} height={44} className="object-contain" />
                    ) : (
                      <span className="text-[13px] font-extrabold text-black">{initials(t.name)}</span>
                    )}
                  </div>
                  <div className="text-left">
                    <p className="text-[14.5px] font-bold text-white">{t.name}</p>
                    <p className="text-[12px]" style={{ color: "rgba(255,255,255,0.5)" }}>{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
