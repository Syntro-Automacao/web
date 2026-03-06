"use client";

import React, { useMemo, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

type Ease = [number, number, number, number];

type Direction =
  | "left"
  | "right"
  | "up"
  | "down"
  | "topRight"
  | "topLeft"
  | "bottomRight"
  | "bottomLeft";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;

  /** Direção padrão (left/right/topRight etc) */
  direction?: Direction;

  /** Distância inicial (px ou "%") */
  distance?: number | string;

  /** Scale inicial → final */
  scaleFrom?: number;
  scaleTo?: number;

  /** Opacidade inicial → final */
  opacityFrom?: number;
  opacityTo?: number;

  /** Range do progresso do scroll usado para animar (recorte) */
  progressRange?: [number, number]; // ex: [0.12, 0.75]

  /** Suavização */
  spring?: { stiffness?: number; damping?: number; mass?: number };

  /** Offset do useScroll */
  offset?: [string, string];

  /** Easing (quando você NÃO usa spring — aqui usamos spring, mas deixo pra evoluir depois) */
  ease?: Ease;

  /** Viewport options */
  once?: boolean;
  amount?: number;
};

function resolveVector(direction: Direction, distance: number | string) {
  switch (direction) {
    case "left":
      return { x: `-${distance}`, y: 0 };
    case "right":
      return { x: `${distance}`, y: 0 };
    case "up":
      return { x: 0, y: `-${distance}` };
    case "down":
      return { x: 0, y: `${distance}` };
    case "topRight":
      return { x: `${distance}`, y: `-${distance}` };
    case "topLeft":
      return { x: `-${distance}`, y: `-${distance}` };
    case "bottomRight":
      return { x: `${distance}`, y: `${distance}` };
    case "bottomLeft":
      return { x: `-${distance}`, y: `${distance}` };
    default:
      return { x: `${distance}`, y: 0 };
  }
}

export function ScrollReveal({
  children,
  className,
  direction = "right",
  distance = "120%",

  scaleFrom = 0.85,
  scaleTo = 1,

  opacityFrom = 0,
  opacityTo = 1,

  // recorte padrão bom pra header fixed
  progressRange = [0.12, 0.75],

  spring = { stiffness: 120, damping: 20, mass: 0.6 },

  // comportamento padrão do scroll dentro da seção
  offset = ["start end", "end start"],

  once = false, // importante: com scroll controlado normalmente NÃO é once
  amount = 0.3,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  });

  // recorta o progresso (bom pra header fixed)
  const p = useTransform(scrollYProgress, progressRange, [0, 1]);

  const vec = useMemo(
    () => resolveVector(direction, distance),
    [direction, distance],
  );

  const xRaw = useTransform(p, [0, 1], [vec.x as any, 0 as any]);
  const yRaw = useTransform(p, [0, 1], [vec.y as any, 0 as any]);
  const sRaw = useTransform(p, [0, 1], [scaleFrom, scaleTo]);
  const oRaw = useTransform(p, [0, 0.12], [opacityFrom, opacityTo]);

  const x = useSpring(xRaw, spring);
  const y = useSpring(yRaw, spring);
  const scale = useSpring(sRaw, spring);
  const opacity = useSpring(oRaw, spring);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x, y, scale, opacity, willChange: "transform" }}
      viewport={{ once, amount }}
    >
      {children}
    </motion.div>
  );
}
