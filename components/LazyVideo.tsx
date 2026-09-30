"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

// `aspect` is the video's own width/height, so the box matches the video and nothing is cropped.
export default function LazyVideo({ src, label, aspect }: { src: string; label: string; aspect: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const visibleRef = useRef(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [ready, setReady] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    // Browsers only allow autoplay for muted video; set the property directly since React's `muted` prop is unreliable.
    video.muted = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting;
        if (entry.isIntersecting) {
          setShouldLoad(true);
          if (video.readyState >= 2) video.play().catch(() => {});
        } else if (!video.paused) {
          video.pause();
        }
      },
      { rootMargin: "200px 0px" }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // With preload="none", attaching the src alone never starts a download, play() kicks it off.
    if (shouldLoad && visibleRef.current) videoRef.current?.play().catch(() => {});
  }, [shouldLoad]);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    const nextMuted = !muted;
    video.muted = nextMuted;
    if (!nextMuted) video.currentTime = 0;
    video.play().catch(() => {});
    setMuted(nextMuted);
  };

  return (
    <div className="relative w-full" style={{ aspectRatio: aspect, backgroundColor: "#000" }}>
      <video
        ref={videoRef}
        src={shouldLoad ? src : undefined}
        preload={shouldLoad ? "auto" : "none"}
        loop
        playsInline
        aria-label={label}
        className="absolute inset-0 w-full h-full object-contain"
        onCanPlay={() => {
          setReady(true);
          if (visibleRef.current) videoRef.current?.play().catch(() => {});
        }}
        onWaiting={() => setReady(false)}
        onPlaying={() => setReady(true)}
      />

      {!ready && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3" aria-live="polite">
          <span
            className="w-9 h-9 rounded-full border-2 animate-spin"
            style={{ borderColor: "rgba(255,255,255,0.18)", borderTopColor: "#FFFFFF" }}
          />
          <span className="text-[11px] font-semibold tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.6)" }}>
            Loading video
          </span>
        </div>
      )}

      {ready && (
        <button
          type="button"
          onClick={toggleSound}
          aria-label={muted ? "Play with sound" : "Mute video"}
          className="absolute bottom-4 right-4 inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-[12px] font-semibold transition-all hover:scale-105"
          style={{ backgroundColor: "rgba(255,255,255,0.95)", color: "#000" }}
        >
          {muted ? <VolumeX size={14} /> : <Volume2 size={14} />}
          {muted ? "Tap for sound" : "Sound on"}
        </button>
      )}
    </div>
  );
}
