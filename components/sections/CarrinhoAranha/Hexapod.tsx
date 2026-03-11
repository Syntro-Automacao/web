"use client";

import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import {
  useInView,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { SECTION_IDS } from "@/components/sections/hooks/section-ids";

type HexapodProps = {
  onInViewChange?: (inView: boolean) => void;
};

const TOTAL_FRAMES = 48;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function getFrameSrc(index: number) {
  const num = String(index + 1).padStart(4, "0");
  return `/assets/hexapod-seq/frame-${num}.webp`;
}

export function Hexapod({ onInViewChange }: HexapodProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const scrubAreaRef = useRef<HTMLDivElement | null>(null);

  const [frameIndex, setFrameIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const isInView = useInView(sectionRef, {
    amount: 0.35,
    margin: "0px 0px -10% 0px",
  });

  useEffect(() => {
    onInViewChange?.(isInView);
  }, [isInView, onInViewChange]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // janela menor = animação mais rápida
  const progress = useTransform(scrollYProgress, [0.18, 0.55], [0, 1]);

  useMotionValueEvent(progress, "change", (latest) => {
    if (isDragging) return;

    const clamped = clamp(latest, 0, 1);
    const nextIndex = Math.round(clamped * (TOTAL_FRAMES - 1));

    setFrameIndex((prev) => (prev === nextIndex ? prev : nextIndex));
  });

  const updateFrameByPointer = useCallback((clientX: number) => {
    const area = scrubAreaRef.current;
    if (!area) return;

    const rect = area.getBoundingClientRect();
    const x = clamp(clientX - rect.left, 0, rect.width);
    const ratio = rect.width > 0 ? x / rect.width : 0;
    const nextIndex = Math.round(ratio * (TOTAL_FRAMES - 1));

    setFrameIndex((prev) => (prev === nextIndex ? prev : nextIndex));
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    updateFrameByPointer(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    updateFrameByPointer(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);

    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  };

  const currentSrc = useMemo(() => getFrameSrc(frameIndex), [frameIndex]);

  useEffect(() => {
    let loadedCount = 0;
    let isMounted = true;

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFrameSrc(i);

      img.onload = () => {
        loadedCount += 1;

        if (isMounted && loadedCount >= 1) {
          setIsLoaded(true);
        }
      };
    }

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id={SECTION_IDS.SOBRE}
      className="relative z-20 mx-auto py-24 lg:py-32 scroll-mt-24 sm:scroll-mt-28 lg:scroll-mt-32 bg-(--background)"
    >
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <h3 className="sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 leading-tight text-balance">
              Sobre Nós
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Se sua indústria busca autonomia, inteligência e modernização
              dentro dos conceitos da Indústria 4.0, você está no lugar certo.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Somos uma empresa de tecnologia dedicada ao desenvolvimento de
              robôs, manipuladores e sistemas industriais de alta performance,
              projetados para aplicações que exigem velocidade, precisão e
              confiabilidade absoluta.
            </p>
          </div>

          <div className="relative">
            <div
              ref={scrubAreaRef}
              className="relative rounded-lg overflow-hidden select-none touch-none cursor-ew-resize"
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
            >
              <div className="relative w-full bg-black/5">
                {isLoaded ? (
                  <img
                    src={currentSrc}
                    alt="Animação interativa do robô aranha"
                    draggable={false}
                    className="w-full h-full object-cover pointer-events-none"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-sm text-muted-foreground">
                    Carregando animação...
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
