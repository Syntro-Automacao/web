// components/sections/Hero/Hero.tsx
"use client";

import { useEffect, useRef, useState, useCallback } from "react";

type HeroProps = {
  isVisible?: boolean;
  onReady?: () => void;
};

export function Hero({ isVisible, onReady }: HeroProps) {
  const [isFixed, setIsFixed] = useState(true);
  const [videoReady, setVideoReady] = useState(false);
  const [connection, setConnection] = useState<"slow-2g" | "2g" | "3g" | "4g">(
    "4g",
  );

  const videoRef = useRef<HTMLVideoElement>(null);
  const hasNotifiedReady = useRef(false);
  const abortControllerRef = useRef<AbortController | null>(null);

  // Detecta velocidade da conexão
  useEffect(() => {
    if ("connection" in navigator) {
      const updateConnection = () => {
        const conn = (navigator as any).connection;
        if (conn) {
          setConnection(conn.effectiveType || "4g");
        }
      };

      updateConnection();
      (navigator as any).connection?.addEventListener(
        "change",
        updateConnection,
      );

      return () => {
        (navigator as any).connection?.removeEventListener(
          "change",
          updateConnection,
        );
      };
    }
  }, []);

  // Otimização de scroll com RAF
  useEffect(() => {
    let rafId: number;

    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const aranhaSection = document.getElementById("aranha");
        if (!aranhaSection) return;

        const rect = aranhaSection.getBoundingClientRect();
        setIsFixed(rect.top > 0);
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const notifyReady = useCallback(() => {
    if (hasNotifiedReady.current) return;
    hasNotifiedReady.current = true;
    onReady?.();
  }, [onReady]);

  // 🎬 OTIMIZAÇÃO ULTRA INTELIGENTE DO VÍDEO
  useEffect(() => {
    if (!isVisible || !videoRef.current) return;

    const video = videoRef.current;
    abortControllerRef.current = new AbortController();
    const { signal } = abortControllerRef.current;

    const tryPlay = async () => {
      try {
        // 🎯 Estratégia baseada na conexão
        if (connection === "slow-2g" || connection === "2g") {
          // Em conexões lentas, não tenta carregar vídeo
          setVideoReady(false);
          notifyReady();
          return;
        }

        // Configurações otimizadas
        video.muted = true;
        video.playsInline = true;
        video.preload = connection === "3g" ? "metadata" : "auto";
        video.playbackRate = 1;

        // 🚀 Preload inteligente
        if (connection !== "3g") {
          await video.load(); // Força pré-carregamento
        }

        // Tenta tocar com retry exponencial
        let retries = 0;
        const maxRetries = 3;

        const attemptPlay = async () => {
          if (signal.aborted) return;

          try {
            await video.play();
            setVideoReady(true);
            notifyReady();
          } catch (error) {
            if (retries < maxRetries && !signal.aborted) {
              retries++;
              const delay = Math.min(1000 * Math.pow(2, retries), 5000);
              setTimeout(attemptPlay, delay);
            } else {
              // Fallback: mantém preview image
              setVideoReady(false);
              notifyReady();
            }
          }
        };

        attemptPlay();
      } catch (error) {
        console.log("❌ Erro crítico no vídeo:", error);
        setVideoReady(false);
        notifyReady();
      }
    };

    tryPlay();

    return () => {
      abortControllerRef.current?.abort();
      video.pause();
      video.removeAttribute("src");
      video.load();
    };
  }, [isVisible, connection, notifyReady]);

  // 🎯 Fontes otimizadas baseadas na conexão
  const videoSrc =
    connection === "3g"
      ? "/assets/videos/videoSite_mobile.mp4" // Versão mobile menor
      : "/assets/videos/videoSite.mp4";

  const posterSrc = "/assets/videos/syntro_entrada.webp";

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden pt-20">
      <div
        className={`inset-0 bg-gradient-to-b from-background via-background/95 to-background ${
          isFixed ? "fixed" : "absolute"
        }`}
      >
        {/* Preview otimizado - sempre visível em conexões lentas */}
        <img
          src={posterSrc}
          alt="Syntro Automação Industrial"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
            videoReady ? "opacity-0" : "opacity-100"
          }`}
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />

        {/* Vídeo otimizado - com múltiplas fontes */}
        <video
          ref={videoRef}
          poster={posterSrc}
          preload={connection === "3g" ? "metadata" : "auto"}
          autoPlay
          loop
          muted
          playsInline
          disableRemotePlayback
          disablePictureInPicture
          onLoadedData={() => {
            setVideoReady(true);
            notifyReady();
          }}
          onError={(e) => {
            console.log("❌ Erro no vídeo:", e);
            setVideoReady(false);
            notifyReady();
          }}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            videoReady ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <source src={videoSrc} type="video/mp4" />
          {/* Fallback para navegadores antigos */}
          <img
            src={posterSrc}
            alt="Syntro Automação Industrial"
            className="h-full w-full object-cover"
          />
        </video>

        {/* Overlay de conteúdo - sempre visível */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </div>
    </section>
  );
}
