"use client";

import { useEffect, useRef, useState } from "react";

type HeroProps = {
  isVisible?: boolean;
  onReady?: () => void;
};

export function Hero({ isVisible, onReady }: HeroProps) {
  const [isFixed, setIsFixed] = useState(true);
  const [videoReady, setVideoReady] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const hasNotifiedReady = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const aranhaSection = document.getElementById("aranha");
      if (!aranhaSection) return;

      const rect = aranhaSection.getBoundingClientRect();
      setIsFixed(rect.top > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const notifyReady = () => {
    if (hasNotifiedReady.current) return;
    hasNotifiedReady.current = true;
    onReady?.();
  };

  // 🔥 INICIA IMEDIATAMENTE quando visível
  useEffect(() => {
    if (!isVisible || !videoRef.current) return;

    //console.log("🎯 Hero visível - iniciando vídeo...");

    const video = videoRef.current;

    const tryPlay = async () => {
      try {
        video.muted = true;
        video.playsInline = true;
        video.preload = "metadata"; // Carrega só o necessário primeiro

        //console.log("🚀 Tentando iniciar vídeo...");
        await video.play();
        //console.log("✅ Vídeo iniciado com sucesso!");
        setVideoReady(true);
        notifyReady();
      } catch (error) {
        //console.log("❌ Falha ao iniciar vídeo:", error);
        // Tenta novamente em 1 segundo
        setTimeout(tryPlay, 1000);
      }
    };

    tryPlay();
  }, [isVisible]);

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden pt-20">
      <div
        className={`inset-0 bg-gradient-to-b from-background via-background/95 to-background ${
          isFixed ? "fixed" : "absolute"
        }`}
      >
        {!videoReady && (
          <img
            src="/assets/videos/syntro_entrada.webp"
            alt="Preview do hero"
            className="absolute inset-0 h-full w-full object-cover"
            onLoad={notifyReady}
          />
        )}

        <video
          ref={videoRef}
          src="/assets/videos/videoSite.mp4"
          preload="metadata"
          autoPlay
          loop
          muted
          playsInline
          //preload="auto"
          poster="/assets/videos/syntro_entrada.webp"
          onLoadedData={() => {
            setVideoReady(true);
            notifyReady();
          }}
          onCanPlay={() => {
            setVideoReady(true);
          }}
          onPlay={() => {
            setVideoReady(true);
            notifyReady();
          }}
          onError={(e) => {
            //console.log("❌ Erro no vídeo:", e);
            notifyReady();
          }}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </section>
  );
}
