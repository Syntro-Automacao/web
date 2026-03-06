"use client";

import { motion } from "framer-motion";

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.02, // Aumenta o atraso entre as letras
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

type TypingTextProps = {
  text: string;
  as?: "h1" | "h2" | "h3" | "p"; // Propriedade para definir a tag
  className?: string;
};

export function TypingText({ text, as = "p", className }: TypingTextProps) {
  const MotionComponent = motion[as]; // Cria o componente dinamicamente (motion.h3, motion.p, etc)

  return (
    <MotionComponent
      className={className}
      variants={sentence}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
    >
      {text.split("").map((char, index) => (
        <motion.text key={index} variants={letter}>
          {char}
        </motion.text>
      ))}
    </MotionComponent>
  );
}
