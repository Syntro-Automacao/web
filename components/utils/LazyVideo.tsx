"use client";

import React, { useEffect, useRef, useState } from "react";

interface LazyVideoProps {
  src: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  preload?: "none" | "metadata" | "auto";
}

/**
 * Componente LazyVideo otimizado com:
 * - Lazy loading de vídeos
 * - Intersection Observer para detecção de visibilidade
 * - Preload apenas quando elemento fica visível
 */
export function LazyVideo({
  src,
  poster,
  className,
  autoPlay = true,
  muted = true,
  loop = true,
  controls = false,
  preload = "metadata",
}: LazyVideoProps) {
  const [shouldLoad, setShouldLoad] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Usar Intersection Observer para detectar quando vídeo é visível
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !shouldLoad) {
            setShouldLoad(true);
            // Começar autoplay se configurado
            if (autoPlay && videoRef.current) {
              videoRef.current.play().catch(() => {
                // Alguns navegadores podem bloquear autoplay
                console.log("Autoplay foi bloqueado pelo navegador");
              });
            }
          }
        });
      },
      { rootMargin: "100px" },
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, [shouldLoad, autoPlay]);

  return (
    <video
      ref={videoRef}
      className={className}
      poster={poster}
      autoPlay={shouldLoad && autoPlay}
      muted={muted}
      loop={loop}
      controls={controls}
      preload={shouldLoad ? preload : "none"}
      style={{ width: "100%", height: "auto" }}
    >
      {shouldLoad && <source src={src} type="video/mp4" />}
      Seu navegador não suporta o elemento de vídeo.
    </video>
  );
}
