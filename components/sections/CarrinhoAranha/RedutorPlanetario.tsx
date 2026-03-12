"use client";

import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { SECTION_IDS } from "@/components/sections/hooks/section-ids";

type RedutorPlanetarioProps = {
  onInViewChange?: (inView: boolean) => void;
};

const TOTAL_FRAMES = 76;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function mapRange(
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number,
) {
  if (value <= inMin) return outMin;
  if (value >= inMax) return outMax;

  const progress = (value - inMin) / (inMax - inMin);
  return outMin + progress * (outMax - outMin);
}

function getFrameSrc(index: number) {
  const num = String(index + 1).padStart(3, "0");
  return `/assets/redutor-seq/redutor-${num}.webp`;
}

export function RedutorPlanetario({ onInViewChange }: RedutorPlanetarioProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const scrubAreaRef = useRef<HTMLDivElement | null>(null);

  const [frameIndex, setFrameIndex] = useState(0);
  const [sceneProgress, setSceneProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const isInView = useInView(sectionRef, {
    amount: 0.2,
  });

  useEffect(() => {
    onInViewChange?.(isInView);
  }, [isInView, onInViewChange]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // deixa a animação terminar antes para sobrar tempo do estado final
  const progress = useTransform(scrollYProgress, [0.08, 0.62], [0, 1]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setSceneProgress(latest);
  });

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

  const showHint = sceneProgress < 0.12;

  // texto aparece quando chega no final da montagem
  const showFinalText = frameIndex >= 74;
  const textOpacity = mapRange(frameIndex, 74, 75, 0, 1);
  const textTranslateX = mapRange(frameIndex, 74, 75, 42, 0);
  const textTranslateYMobile = mapRange(frameIndex, 74, 75, 24, 0);

  const imageScale = mapRange(sceneProgress, 0.6, 0.76, 1, 1.045);
  const imageTranslateX = mapRange(sceneProgress, 0.6, 0.76, 0, -140);
  const glowOpacity = mapRange(sceneProgress, 0, 0.18, 0.18, 0.32);

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
      id={SECTION_IDS.ABOUT}
      className="relative z-20 h-[340vh] bg-(--background)"
    >
      <div className="relative h-full">
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/95" />

          <div
            ref={scrubAreaRef}
            className="relative mx-auto flex h-full w-full max-w-[1920px] select-none touch-none items-center justify-center overflow-visible px-4 sm:px-6 lg:px-8 cursor-ew-resize"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
          >
            <div className="relative h-full w-full max-w-[1600px]">
              <div className="relative z-10 flex h-full items-center justify-center lg:justify-start">
                {isLoaded ? (
                  <img
                    src={currentSrc}
                    alt="Animação interativa do redutor planetário"
                    draggable={true}
                    className="pointer-events-none h-auto w-full transition-transform duration-500 ease-out"
                  />
                ) : (
                  <div className="flex min-h-[420px] items-center justify-center text-sm text-muted-foreground"></div>
                )}
              </div>
              {/* DESKTOP */}
              <div
                className="pointer-events-none absolute top-1/2 right-0 z-30 hidden lg:block"
                style={{
                  opacity: showFinalText ? textOpacity : 0,
                  transition: "opacity 260ms ease",
                }}
              >
                <div
                  style={{
                    transform: `translateY(-50%) translateX(${showFinalText ? textTranslateX : 42}px)`,
                    transition: "transform 260ms ease",
                  }}
                >
                  <div className="max-w-[800px] min-w-[320px] pr-8">
                    <h3 className="sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 leading-tight text-balance">
                      Redutor planetário
                    </h3>

                    <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                      Nossa engenharia integra mecatrônica, controle avançado de
                      movimento e ciência da computação, permitindo a criação de
                      máquinas e sistemas inteligentes capazes de transformar
                      processos produtivos em operações mais eficientes,
                      conectadas e automatizadas.
                    </p>

                    <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                      Desenvolvemos tecnologia nacional de alto nível,
                      oferecendo soluções inovadoras com excelente relação entre
                      performance, custo e escalabilidade.
                    </p>

                    <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                      Nosso objetivo é impulsionar a evolução da manufatura
                      através de robótica, automação inteligente, sistemas
                      conectados e IoT industrial.
                    </p>
                  </div>
                </div>
              </div>

              {/* MOBILE */}
              <div
                className="absolute inset-x-0 bottom-8 z-30 px-4 lg:hidden"
                style={{
                  opacity: showFinalText ? textOpacity : 0,
                  transition: "opacity 260ms ease",
                }}
              >
                <div
                  style={{
                    transform: `translateY(${showFinalText ? textTranslateYMobile : 24}px)`,
                    transition: "transform 260ms ease",
                  }}
                >
                  <div className="mx-auto max-w-xl rounded-[28px] border border-white/10 bg-background/88 p-5 shadow-[0_24px_100px_rgba(0,0,0,0.38)] backdrop-blur-xl">
                    <div className="mb-4 h-px w-12 bg-white/20" />

                    <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.24em] text-muted-foreground/90">
                      Redutor planetário
                    </p>

                    <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                      Nossa engenharia integra mecatrônica, controle avançado de
                      movimento e ciência da computação, permitindo a criação de
                      máquinas e sistemas inteligentes capazes de transformar
                      processos produtivos em operações mais eficientes,
                      conectadas e automatizadas.
                    </p>

                    <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                      Desenvolvemos tecnologia nacional de alto nível,
                      oferecendo soluções inovadoras com excelente relação entre
                      performance, custo e escalabilidade.
                    </p>

                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Nosso objetivo é impulsionar a evolução da manufatura
                      através de robótica, automação inteligente, sistemas
                      conectados e IoT industrial.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
