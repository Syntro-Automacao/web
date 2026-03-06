"use client";

import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { TypingText } from "@/components/motion/TypingText";
import { SECTION_IDS } from "@/components/sections/hooks/section-ids";

type RoboAranhaProps = {
  shouldPlay: boolean;
  onInViewChange?: (inView: boolean) => void;
};

export function RoboAranha({ shouldPlay, onInViewChange }: RoboAranhaProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const isInView = useInView(sectionRef, {
    amount: 0.35,
    margin: "0px 0px -10% 0px",
  });

  useEffect(() => {
    onInViewChange?.(isInView);
  }, [isInView, onInViewChange]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (shouldPlay) {
      video.play().catch(() => {});
    } else {
      video.pause();
      //video.currentTime = 0;
    }
  }, [shouldPlay]);

  return (
    <section
      ref={sectionRef}
      id={SECTION_IDS.ARANHA}
      className="relative z-20 mx-auto py-24 lg:py-32 scroll-mt-24 sm:scroll-mt-28 lg:scroll-mt-32 bg-(--background)"
    >
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <TypingText
              text="Robo Aranha"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 leading-tight text-balance"
            />
            <TypingText
              text="O Robo Aranha é um robô industrial de alto desempenho, projetado para automatizar tarefas complexas na indústria. Com sua capacidade de navegação e manipulação de objetos, o Robo Aranha é uma solução eficiente e flexível para a Indústria 4.0."
              className="text-muted-foreground text-lg leading-relaxed mb-8"
            />
          </div>

          <div className="relative">
            <div className="rounded-lg overflow-hidden">
              <video
                ref={videoRef}
                src="/assets/videos/videoAranha.mp4"
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
