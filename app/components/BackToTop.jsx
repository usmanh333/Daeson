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
    bg-black text-white
    border border-white
    flex items-center justify-center
    transition-all
    hover:bg-yellow-400 hover:text-black
    ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}
  `}
  aria-label="Back to top"
>
  <span className="text-3xl font-extrabold leading-none">↑</span>
</button>

  );
}
