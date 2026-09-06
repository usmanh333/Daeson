import Image from "next/image";

const testimonials = [
  {
    quote:
      "Really liked the layout of the LuxeProperty dashboard, especially how investors can see and manage their whole portfolio, statements, and invest in other properties directly through the marketplace.",
    name: "Izeah Voltaire",
    role: "Founder, Floense",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "var(--bg-page)" }}>
      <div className="max-w-2xl mx-auto">
        <p
          className="text-[10px] font-bold uppercase tracking-widest mb-10 text-center"
          style={{ color: "var(--text-faint)" }}
        >
          What Investors Are Saying
        </p>
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="rounded-2xl overflow-hidden"
            style={{ border: "1px solid var(--border)" }}
          >
            <Image
              src="/Review.png"
              alt={`${t.name}, ${t.role}: "${t.quote}"`}
              width={630}
              height={520}
              className="w-full h-auto block"
            />
            {/* Real text alongside the graphic so the quote stays indexable by search and AI answer engines */}
            <figcaption className="sr-only">
              &ldquo;{t.quote}&rdquo; — {t.name}, {t.role}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
