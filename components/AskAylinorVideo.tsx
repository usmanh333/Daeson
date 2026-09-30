import Link from "next/link";
import { ShieldCheck, Lock, UserCheck, ArrowRight } from "lucide-react";
import LazyVideo from "@/components/LazyVideo";
import { PRODUCT_URLS, newTab } from "@/lib/products";

const points = [
  {
    icon: UserCheck,
    title: "Shariah Officer + Personal Assistant",
    body: "Ask financing and governance questions, surface the right documentation, and move faster, while the scholar keeps the final say.",
  },
  {
    icon: Lock,
    title: "100% Private. Fully Protected.",
    body: "Your conversations stay inside your institution. No one else can see your chat.",
  },
  {
    icon: ShieldCheck,
    title: "Built for Every Institution",
    body: "Microfinance bank to commercial bank. Pakistan to Europe. Aylinor is for all.",
  },
];

export default function AskAylinorVideo() {
  return (
    <section className="section-light px-6 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[11px] font-bold tracking-[0.2em] uppercase mb-5" style={{ color: "var(--text-muted)" }}>
            Now Introducing
          </p>
          <h2 className="text-[38px] md:text-[60px] font-extrabold leading-[1.05] tracking-tight mb-6" style={{ color: "var(--text-primary)" }}>
            Meet{" "}
            <span className="inline-block px-4 md:px-5 pb-1 rounded-xl" style={{ backgroundColor: "#000", color: "#FFF" }}>
              Ask Aylinor
            </span>
          </h2>
          <p className="text-[18px] md:text-[20px] leading-relaxed max-w-2xl mx-auto font-medium" style={{ color: "var(--text-secondary)" }}>
            Your <strong style={{ color: "var(--text-primary)" }}>Shariah officer</strong> and{" "}
            <strong style={{ color: "var(--text-primary)" }}>personal assistant</strong>: in one secure AI built for
            Islamic financial institutions.
          </p>
        </div>

        <div
          className="rounded-3xl overflow-hidden grid md:grid-cols-5"
          style={{ border: "1px solid rgba(0,0,0,0.12)", boxShadow: "0 30px 80px rgba(0,0,0,0.12)" }}
        >
          <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center" style={{ backgroundColor: "#FFF" }}>
            <div className="space-y-6 mb-10">
              {points.map(({ icon: Icon, title, body }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "#000" }}>
                    <Icon size={17} color="#FFF" />
                  </div>
                  <div>
                    <p className="text-[16px] font-extrabold mb-1" style={{ color: "var(--text-primary)" }}>{title}</p>
                    <p className="text-[14px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>{body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link href="/contact" className="btn-solid inline-flex items-center gap-2 px-7 py-4 text-[14px] font-bold rounded-xl">
                Contact Us for Full Software Access <ArrowRight size={15} />
              </Link>
              <Link href={PRODUCT_URLS.aylinor} {...newTab} className="btn-ghost inline-flex items-center gap-2 px-6 py-4 text-[14px] font-semibold rounded-xl">
                Explore Aylinor
              </Link>
            </div>
          </div>

          <div className="md:col-span-2 flex items-center" style={{ backgroundColor: "#000" }}>
            <LazyVideo src="/Ask%20Aylinor.mp4" label="Ask Aylinor product video" aspect="720 / 1082" />
          </div>
        </div>
      </div>
    </section>
  );
}
