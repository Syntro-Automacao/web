"use client";

import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import {
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
  const [isDesktop, setIsDesktop] = useState(false);

  const dragStartXRef = useRef(0);
  const dragStartYRef = useRef(0);
  const isHorizontalDragRef = useRef(false);

  const isInView = useInView(sectionRef, {
    amount: 0.2,
  });

  useEffect(() => {
    onInViewChange?.(isInView);
  }, [isInView, onInViewChange]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");

    const update = () => setIsDesktop(media.matches);
    update();

    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const progress = useTransform(scrollYProgress, [0.08, 0.62], [0, 1]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!isDesktop) return;
    setSceneProgress(latest);
  });

  useMotionValueEvent(progress, "change", (latest) => {
    if (!isDesktop || isDragging) return;

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
    isHorizontalDragRef.current = false;
    dragStartXRef.current = e.clientX;
    dragStartYRef.current = e.clientY;

    e.currentTarget.setPointerCapture(e.pointerId);

    if (isDesktop) {
      updateFrameByPointer(e.clientX);
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    if (isDesktop) {
      updateFrameByPointer(e.clientX);
      return;
    }

    const dx = e.clientX - dragStartXRef.current;
    const dy = e.clientY - dragStartYRef.current;

    if (!isHorizontalDragRef.current) {
      if (Math.abs(dx) > 8 && Math.abs(dx) > Math.abs(dy)) {
        isHorizontalDragRef.current = true;
      } else if (Math.abs(dy) > 8 && Math.abs(dy) > Math.abs(dx)) {
        return;
      }
    }

    if (isHorizontalDragRef.current) {
      updateFrameByPointer(e.clientX);
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    isHorizontalDragRef.current = false;

    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  };

  const currentSrc = useMemo(() => getFrameSrc(frameIndex), [frameIndex]);

  const showHint = isDesktop ? sceneProgress < 0.12 : frameIndex < 8;

  const showFinalText = isDesktop ? frameIndex >= 74 : true;

  const textOpacity = isDesktop ? mapRange(frameIndex, 74, 75, 0, 1) : 1;
  const textTranslateX = mapRange(frameIndex, 74, 75, 42, 0);

  const imageScale = isDesktop
    ? mapRange(sceneProgress, 0.6, 0.76, 1, 1.045)
    : mapRange(frameIndex, 70, 75, 1, 1.02);

  const imageTranslateX = isDesktop
    ? mapRange(sceneProgress, 0.6, 0.76, 0, -140)
    : 0;

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
      className="relative z-20 bg-(--background) lg:h-[340vh]"
    >
      <div className="relative h-full">
        <div className="relative overflow-hidden lg:sticky lg:top-0 lg:h-screen">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/95" />

          <div className="relative mx-auto flex h-full w-full max-w-[1920px] items-center justify-center overflow-visible px-4 sm:px-6 lg:px-8">
            <div className="relative mx-auto h-full w-full max-w-[1600px]">
              {/* MOBILE */}
              <div className="lg:hidden">
                <div className="mx-auto max-w-xl rounded-[28px] pt-8">
                  <div className="mb-4 h-px w-12 bg-white/20" />

                  <h3 className="mt-4 mb-6 text-balance font-bold leading-tight text-foreground xs:text-3xl sm:text-4xl lg:text-5xl">
                    Redutor planetário
                  </h3>

                  <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                    Nossa engenharia integra mecatrônica, controle avançado de
                    movimento e ciência da computação, permitindo a criação de
                    máquinas e sistemas inteligentes capazes de transformar
                    processos produtivos em operações mais eficientes,
                    conectadas e automatizadas.
                  </p>

                  <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                    Desenvolvemos tecnologia nacional de alto nível, oferecendo
                    soluções inovadoras com excelente relação entre performance,
                    custo e escalabilidade.
                  </p>

                  <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                    Nosso objetivo é impulsionar a evolução da manufatura
                    através de robótica, automação inteligente, sistemas
                    conectados e IoT industrial.
                  </p>
                </div>
              </div>

              <div
                ref={scrubAreaRef}
                className="
                  relative z-10 flex min-h-[60vh] items-center justify-center
                  lg:h-full lg:justify-start
                  select-none
                  lg:cursor-ew-resize
                  touch-pan-y
                "
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
              >
                {isLoaded ? (
                  <img
                    src={currentSrc}
                    alt="Animação interativa do redutor planetário"
                    draggable={false}
                    className="h-auto w-full transition-transform duration-500 ease-out pointer-events-none"
                    style={{
                      transform: `translateX(${imageTranslateX}px) scale(${imageScale})`,
                    }}
                  />
                ) : (
                  <div className="flex min-h-[420px] items-center justify-center text-sm text-muted-foreground" />
                )}
              </div>

              <div
                className="absolute top-4 left-1/2 z-30 -translate-x-1/2 rounded-full border border-white/10 bg-background/70 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-muted-foreground backdrop-blur-md transition-all duration-300 lg:left-auto lg:right-0 lg:translate-x-0"
                style={{
                  opacity: showHint ? 1 : 0,
                  transform: showHint
                    ? isDesktop
                      ? "translateY(0)"
                      : "translateX(-50%) translateY(0)"
                    : isDesktop
                      ? "translateY(-10px)"
                      : "translateX(-50%) translateY(-10px)",
                }}
              ></div>

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
                    <h3 className="mt-4 mb-6 text-balance font-bold leading-tight text-foreground xs:text-3xl sm:text-4xl lg:text-5xl">
                      Redutor planetário
                    </h3>

                    <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                      Nossa engenharia integra mecatrônica, controle avançado de
                      movimento e ciência da computação, permitindo a criação de
                      máquinas e sistemas inteligentes capazes de transformar
                      processos produtivos em operações mais eficientes,
                      conectadas e automatizadas.
                    </p>

                    <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                      Desenvolvemos tecnologia nacional de alto nível,
                      oferecendo soluções inovadoras com excelente relação entre
                      performance, custo e escalabilidade.
                    </p>

                    <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
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
