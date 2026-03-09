"use client";

import Image from "next/image";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useMemo, useRef, useState, useCallback, useEffect } from "react";
import { SECTION_IDS } from "@/components/sections/hooks/section-ids";
import "./css/styles.css";

type RoboCarrinhoProps = {
  onReachEnd?: () => void;
  onLeaveEnd?: () => void;
};

export function RoboCarrinho({ onReachEnd, onLeaveEnd }: RoboCarrinhoProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const imageWrapRef = useRef<HTMLDivElement | null>(null);
  const textWrapRef = useRef<HTMLDivElement | null>(null);

  const [showText, setShowText] = useState(false);
  const hasReachedEnd = useRef(false);

  const lastScrollY = useRef(0);
  const scrollDirectionRef = useRef<"down" | "up">("down");

  const { scrollY, scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const p = useTransform(scrollYProgress, [0.05, 0.95], [0, 1]);

  const spring = useMemo(() => ({ stiffness: 90, damping: 22, mass: 0.8 }), []);

  const xRaw = useTransform(p, [0, 1], ["60vw", "-50vw"]);
  const yRaw = useTransform(p, [0, 1], ["-22vh", "28vh"]);
  const scaleRaw = useTransform(p, [0, 1], [0.55, 1]);
  const opacityRaw = useTransform(p, [0, 0.08, 1], [0, 1, 1]);

  const x = useSpring(xRaw, spring);
  const y = useSpring(yRaw, spring);
  const scale = useSpring(scaleRaw, spring);
  const opacity = useSpring(opacityRaw, spring);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = lastScrollY.current;

    if (current > previous) {
      scrollDirectionRef.current = "down";
    } else if (current < previous) {
      scrollDirectionRef.current = "up";
    }

    lastScrollY.current = current;
  });

  const checkTextVisibility = useCallback(() => {
    if (!imageWrapRef.current || !textWrapRef.current) return;

    const imageRect = imageWrapRef.current.getBoundingClientRect();
    const textRect = textWrapRef.current.getBoundingClientRect();

    const imageCenterY = imageRect.top + imageRect.height / 2;
    const textCenterY = textRect.top + textRect.height / 2;

    const delta = imageCenterY - textCenterY;

    const showThreshold = -30;
    const hideThreshold = -90;

    if (scrollDirectionRef.current === "down") {
      if (delta >= showThreshold && !showText) {
        setShowText(true);
      }
    }

    if (scrollDirectionRef.current === "up") {
      if (delta < hideThreshold && showText) {
        setShowText(false);
      }
    }
  }, [showText]);

  useMotionValueEvent(x, "change", checkTextVisibility);
  useMotionValueEvent(y, "change", checkTextVisibility);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    // chegou no final descendo
    if (value >= 0.88 && !hasReachedEnd.current) {
      hasReachedEnd.current = true;
      onReachEnd?.();
    }

    // subiu e saiu da zona final
    if (value < 0.72 && hasReachedEnd.current) {
      hasReachedEnd.current = false;
      onLeaveEnd?.();
    }
  });

  useEffect(() => {
    const handleResize = () => checkTextVisibility();
    const handleScroll = () => checkTextVisibility();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    checkTextVisibility();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [checkTextVisibility]);

  return (
    <section
      ref={sectionRef}
      id={SECTION_IDS.CARRINHO}
      className="relative z-30 mx-auto py-24 lg:py-32 scroll-mt-24 sm:scroll-mt-28 lg:scroll-mt-32 bg-(--background) overflow-x-clip"
    >
      <div className="z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* COLUNA VISUAL */}
          <div className="relative min-h-[420px] lg:min-h-[520px] overflow-visible">
            <motion.div
              ref={imageWrapRef}
              className="absolute inset-0 z-50 pointer-events-none"
              style={{ x, y, opacity }}
            >
              <motion.div
                className="relative w-full h-full will-change-transform"
                style={{ scale }}
              >
                <Image
                  src="/assets/robos/telemax.webp"
                  alt="Robô Telemax com rodas, da Syntro"
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 720px"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* COLUNA TEXTO */}
          <div className="relative min-h-[220px]">
            <h3>
              <p>
                <span className="text-3xl text-primary font-bold">
                  Software,{" "}
                </span>
                <span className="text-2xl font-light">
                  Robôs, Manipuladores
                </span>
              </p>
              <p>
                <span className="text-2xl text-primary font-bold">
                  Automação,{" "}
                </span>
                <span className="text-5xl text-primary font-bold">
                  Industria 4.0
                </span>
              </p>
              <p>
                <span className="text-2xl font-light">Dispositivos, </span>
                <span className="text-3xl text-primary font-bold">
                  Sistemas Autônomos,{" "}
                </span>
                <span className="text-2xl font-light">IOT</span>
              </p>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
