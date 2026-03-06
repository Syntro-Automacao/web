"use client";

import React from "react";
import { motion, type MotionProps, useReducedMotion } from "framer-motion";

type Ease =
  | "linear"
  | "easeIn"
  | "easeOut"
  | "easeInOut"
  | [number, number, number, number];

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  as?: keyof typeof motion;
  delay?: number;

  /** Pode ser number (px) ou string ("120%") */
  x?: number | string;
  y?: number | string;

  scale?: number;
  blur?: number;

  /** Opacidade inicial (default 0) */
  fromOpacity?: number;

  once?: boolean;
  amount?: number;

  duration?: number;
  ease?: Ease;
} & Omit<
  MotionProps,
  "children" | "initial" | "whileInView" | "transition" | "viewport"
>;

export function Reveal({
  children,
  className,
  as = "div",
  delay = 0,

  x = 0,
  y = 14,
  scale = 1,
  blur = 6,
  fromOpacity = 0,

  once = true,
  amount = 0.3,

  duration = 0.7,
  ease = "easeOut",

  ...rest
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const Comp: any = (motion as any)[as] ?? motion.div;

  const initial = reduceMotion
    ? { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" }
    : { opacity: fromOpacity, x, y, scale, filter: `blur(${blur}px)` };

  const animate = reduceMotion
    ? { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" }
    : { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" };

  return (
    <Comp
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once, amount }}
      transition={{ duration, ease, delay }}
      {...rest}
    >
      {children}
    </Comp>
  );
}
