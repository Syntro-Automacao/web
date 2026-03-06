"use client";

import React from "react";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

type RevealImageProps = {
  src: string;
  alt: string;
  className?: string; // wrapper
  imgClassName?: string; // img
  delay?: number;
  from?: "left" | "right";
};

export function RevealImage({
  src,
  alt,
  className,
  imgClassName,
  delay = 0,
  from = "left",
}: RevealImageProps) {
  const variants = {
    hidden: {
      opacity: 0,
      x: from === "left" ? -20 : 20, // Começa um pouco deslocado
    },
    visible: {
      opacity: 1,
      x: 0, // Termina na posição central
      transition: {
        duration: 1.5, // Aumenta a duração para um movimento mais suave
        ease: "easeInOut",
        delay,
      },
    },
  };

  const imgVariants = {
    hidden: {
      scale: 1.2, // Começa com um leve zoom
    },
    visible: {
      scale: 1, // Termina na escala normal
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        delay,
      },
    },
  };

  return (
    <Reveal className={className} variants={variants}>
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={imgClassName}
        variants={imgVariants}
      />
    </Reveal>
  );
}
