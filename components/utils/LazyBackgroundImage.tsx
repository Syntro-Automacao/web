"use client";

import React, { useEffect, useRef, useState } from "react";

interface LazyBackgroundImageProps {
  src: string;
  className?: string;
  children?: React.ReactNode;
  placeholder?: string;
}

/**
 * Componente LazyBackgroundImage otimizado com:
 * - Carregamento lazy de imagens de fundo
 * - Intersection Observer para preload
 * - Blur placeholder enquanto carrega
 */
export function LazyBackgroundImage({
  src,
  className,
  children,
  placeholder,
}: LazyBackgroundImageProps) {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Usar Intersection Observer para detectar quando elemento está visível
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !imageSrc) {
            // Preload da imagem quando elemento fica visível
            const img = new Image();
            img.onload = () => {
              setImageSrc(src);
              setIsLoaded(true);
            };
            img.onerror = () => {
              setIsLoaded(false);
            };
            img.src = src;
          }
        });
      },
      { rootMargin: "50px" }, // Começa a carregar 50px antes de ficar visível
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [src, imageSrc]);

  const backgroundStyle: React.CSSProperties = {
    backgroundImage: imageSrc
      ? `url('${imageSrc}')`
      : placeholder
        ? `url('${placeholder}')`
        : undefined,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    transition: "filter 0.3s ease-in-out",
    filter: isLoaded ? "blur(0px)" : "blur(5px)",
  };

  return (
    <div ref={containerRef} className={className} style={backgroundStyle}>
      {children}
    </div>
  );
}
