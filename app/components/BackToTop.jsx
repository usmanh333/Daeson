"use client";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  className={`
    fixed bottom-6 right-6 z-50
    w-14 h-14
    rounded-full
    bg-[#7C3AED] text-white
    border border-[#E8DCC4]/40
    flex items-center justify-center
    transition-all
    hover:bg-[#6D28D9] hover:text-white
    ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}
  `}
  aria-label="Back to top"
>
  <span className="text-3xl font-extrabold leading-none">↑</span>
</button>

  );
}
