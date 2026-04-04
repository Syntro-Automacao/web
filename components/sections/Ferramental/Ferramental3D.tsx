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
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  const frameUrls = useMemo(() => generateFrameUrls("/assets/ferramental"), []);
  // Limpar timeout na desmontagem do componente
  useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  const partNames = [
    "Base Estrutural",
    "Sistema de Fixação",
    "Mecanismo de Travamento",
    "Placa de Apoio",
    "Conector Principal",
    "Sistema de Ajuste",
    "Elemento de Segurança",
    "Componentes Internos",
  ];

  const handlePartClick = (partIndex: number) => {
    setCurrentFrame(partIndex + 1);
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
        <div className="grid lg:grid-cols-4 gap-12 lg:gap-20 items-center">
          {/* Content - Lista de partes (1/4 da largura) */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-2xl font-bold mb-6">
              Componentes do Ferramental
            </h3>
            <ul className="space-y-1">
              {partNames.map((name, index) => (
                <motion.li
                  key={index}
                  className={`
                    list-decimal list-inside cursor-pointer transition-colors duration-150 bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded
                    ${
                      currentFrame === index + 1 // +1 porque começamos do frame 002
                        ? "text-blue-500"
                        : "hover:text-blue-500"
                    }
                  `}
                  onClick={() => handlePartClick(index)}
                  onMouseEnter={() => handlePartHover(index)}
                  onMouseLeave={handlePartLeave}
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
            <div className="rounded-lg overflow-hidden flex justify-center p-8 min-h-[400px] items-center">
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
