"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const TOTAL_FRAMES = 9;

const generateFrameUrls = (basePath: string) => {
  const frames = [];
  for (let i = 1; i <= TOTAL_FRAMES; i++) {
    const frameNumber = String(i).padStart(3, "0");
    frames.push(`${basePath}/ferramental_${frameNumber}.webp`);
  }
  return frames;
};

export function Ferramental3D() {
  const [currentFrame, setCurrentFrame] = useState(0); // Inicia com ferramental_001.webp (não aparece na lista)
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const [touchedIndex, setTouchedIndex] = useState<number | null>(null);

  const frameUrls = useMemo(() => generateFrameUrls("/assets/ferramental"), []);
  // useEffect removido - não precisa mais de cleanup

  const partNames = [
    "Sensor de vácuo",
    "Cam Light",
    "Sensor laser",
    "Câmara (System Vision)",
    "Ferramenta magnética articulada",
    "Apalpador",
    "Ventosa",
    "Engate de tomada eletrônica e pneumática",
  ];

  const handlePartClick = (partIndex: number) => {
    setCurrentFrame(partIndex + 1);
    // Feedback visual para mobile
    setTouchedIndex(partIndex);
    setTimeout(() => setTouchedIndex(null), 200); // Remove após 200ms
  };

  const handlePartHover = (partIndex: number) => {
    setIsHovered(partIndex + 1);
    setCurrentFrame(partIndex + 1);
  };

  const handlePartLeave = () => {
    setIsHovered(null);
  };

  return (
    <section
      id="ferramental3d"
      className="max-w-[1920px] mx-auto py-24 lg:py-32 scroll-mt-24 sm:scroll-mt-28 lg:scroll-mt-32 overflow-x-clip bg-(--background)"
    >
      <div className="max-w-[1920px] max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="grid lg:gap-20 text-center mb-8">
          <p className="indent-8 text-muted-foreground 2xl:text-2xl text-lg leading-relaxed mb-8">
            O ferramental pode ser{" "}
            <span className="text-2xl text-primary font-bold">
              simples ou complexo
            </span>
            , variando conforme a aplicação. Vamos apresentar uma ferramental
            intermediário como exemplo: um ferramental que possibilita a pega de
            componentes por vácuo ou por sistema magnético. Essa{" "}
            <span className="text-2xl text-primary font-bold">
              ferramenta também possui câmeras para sistema de visão
            </span>
            , onde será realizada a orientação das coordenadas para que o robô
            execute a manipulação e, sensores à laser, que transferem alguns
            dados para o sistema. Esse ferramental é específico para robôs
            cartesianos.
          </p>
        </div>
        <div className="grid lg:grid-cols-4 gap-12 lg:gap-20 items-center">
          {/* Content - Lista de partes (1/4 da largura) */}
          <div className="lg:col-span-1 space-y-4">
            <ul className="space-y-1">
              {partNames.map((name, index) => (
                <motion.li
                  key={index}
                  className={`
                    list-decimal list-inside cursor-pointer transition-colors duration-150 font-semibold py-2 px-4 border rounded
                    ${
                      currentFrame === index + 1 // +1 porque começamos do frame 002
                        ? "bg-blue-500 text-white border-blue-500"
                        : "bg-transparent text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white hover:border-transparent"
                    }
                  `}
                  onClick={() => handlePartClick(index)}
                  onMouseEnter={() => handlePartHover(index)}
                  onMouseLeave={handlePartLeave}
                  onTouchStart={() => handlePartClick(index)}
                  initial={{ opacity: 0, x: 0 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  {name}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Visual - Frame do ferramental (3/4 da largura) */}
          <div className="lg:col-span-3 relative">
            <div className="rounded-lg overflow-hidden flex justify-center p-8 min-h-[400px] items-center relative">
              <AnimatePresence mode="wait">
                <Image
                  src={frameUrls[currentFrame]}
                  alt={
                    currentFrame === 0
                      ? "Ferramental - Vista Inicial"
                      : `Ferramental - ${partNames[currentFrame - 1]}`
                  }
                  fill
                  className="object-contain"
                  priority
                />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
