"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function VideoParallax() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // progresso do scroll APENAS desta seção
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax sutil (mantém “fixo” visualmente, sem viajar)
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);
  const y = useTransform(scrollYProgress, [0, 1], ["0px", "60px"]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.playsInline = true;
    v.play().catch(() => {});
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-32 relative min-h-160 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"
    >
      <motion.div className="absolute inset-0" style={{ scale, y }}>
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src="/assets/videos/videoParalax.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
        <div className="absolute inset-0 bg-black/45" />
      </motion.div>
    </section>
  );
}
