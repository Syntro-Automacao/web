"use client";

import { useEffect, useState } from "react";

export function Hero() {
  const [isFixed, setIsFixed] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const roboBraco = document.getElementById("aranha");
      if (!roboBraco) return;

      const rect = roboBraco.getBoundingClientRect();
      setIsFixed(rect.top > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden pt-20">
      <div
        className={`inset-0 bg-gradient-to-b from-background via-background/95 to-background ${
          isFixed ? "fixed" : "absolute"
        }`}
      >
        <video
          src="/assets/videos/videoSite.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
