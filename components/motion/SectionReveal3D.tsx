"use client";

import { ReactNode, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";

type SectionReveal3DProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  direction?: "left" | "right" | "center";
  rotateStart?: number;
  rotateEnd?: number;
  yStart?: number;
  xStart?: number;
  scaleStart?: number;
  perspective?: number;
  duration?: number;
  delay?: number;
  once?: boolean;
  mobileDisabled?: boolean;
};

export function SectionReveal3D({
  children,
  className = "",
  id,
  direction = "center",
  rotateStart = 40,
  rotateEnd = 0,
  yStart = 100,
  xStart,
  scaleStart = 0.98,
  perspective = 1400,
  duration = 0.8,
  delay = 0,
  mobileDisabled = true,
  once = false,
}: SectionReveal3DProps) {
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useIsMobile();

  // Estado para controlar se o componente está montado (evita hydration mismatch)
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const simpleMode =
    prefersReducedMotion || (mobileDisabled && isMounted && isMobile);

  const initialX =
    typeof xStart === "number"
      ? xStart
      : direction === "left"
        ? -24
        : direction === "right"
          ? 24
          : 0;

  // Aguardar montagem completa para evitar hydration mismatch
  if (!isMounted) {
    return (
      <section
        id={id}
        className={`relative overflow-visible ${className}`}
        style={{ perspective: "none" }}
      >
        <div style={{ opacity: 0 }}>{children}</div>
      </section>
    );
  }

  return (
    <section
      id={id}
      className={`relative overflow-visible ${className}`}
      style={{
        perspective: simpleMode ? "none" : `${perspective}px`,
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        initial={
          simpleMode
            ? {
                opacity: 0,
                y: 32,
              }
            : {
                opacity: 0,
                y: yStart,
                x: initialX,
                rotateX: rotateStart,
                scale: scaleStart,
              }
        }
        whileInView={
          simpleMode
            ? {
                opacity: 1,
                y: 0,
              }
            : {
                opacity: 1,
                y: 0,
                x: 0,
                rotateX: rotateEnd,
                scale: 1,
              }
        }
        viewport={{
          once,
          amount: 0.2,
        }}
        transition={{
          duration,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{
          transformOrigin: "center bottom",
          transformStyle: "preserve-3d",
          willChange: "transform, opacity",
          backfaceVisibility: "hidden",
        }}
      >
        {children}
      </motion.div>
    </section>
  );
}
