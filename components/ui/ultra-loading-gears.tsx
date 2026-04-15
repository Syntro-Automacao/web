"use client";

import { useState, useEffect } from "react";
import { GearsSpinner } from "./gears-spinner";

interface UltraLoadingGearsProps {
  src: string;
  alt: string;
  className?: string;
  minHeight?: number;
  spinnerSize?: number;
  spinnerText?: string;
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
}

export function UltraLoadingGears({
  src,
  alt,
  className = "",
  minHeight = 100,
  spinnerSize = 80,
  spinnerText = "Carregando...",
  objectFit = "contain",
}: UltraLoadingGearsProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Sistema ultra-confiável com GearsSpinner
    const img = document.createElement("img");

    img.onload = () => {
      setIsLoaded(true);
    };

    img.onerror = () => {
      // Mesmo com erro, mostra a imagem (fallback)
      setIsLoaded(true);
    };

    img.src = src;

    // Verifica se já está no cache
    if (img.complete) {
      setIsLoaded(true);
    }
  }, [src]);

  return (
    <div
      className="flex justify-center items-center"
      style={{ minHeight: `${minHeight}px` }}
    >
      {!isLoaded && <GearsSpinner size={spinnerSize} text={spinnerText} />}

      <img
        src={src}
        alt={alt}
        className={`${isLoaded ? "block" : "hidden"} ${className} object-${objectFit}`}
        loading="lazy"
      />
    </div>
  );
}
