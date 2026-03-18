"use client";

import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";

type LoaderScreenProps = {
  canFinish: boolean;
  onFinish?: () => void;
};

const DEBUG_MIN_DURATION = 1000;

export function LoaderScreen({ canFinish, onFinish }: LoaderScreenProps) {
  const { resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  const [realProgress, setRealProgress] = useState(0);
  const [displayProgress, setDisplayProgress] = useState(0);
  const [minTimeReached, setMinTimeReached] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === "dark" : true;
  const minDuration = useMemo(() => DEBUG_MIN_DURATION, []);

  useEffect(() => {
    const start = Date.now();

    const preloadAssets = () => {
      // Poster (rápido)
      const heroPoster = new Image();
      heroPoster.src = "/assets/videos/syntro_entrada.webp";

      const criticalAssets = [
        // "/assets/videos/videoSite.mp4", // 🔥 REMOVIDO: permite início imediato
        "/models/industrial_robot_arm.glb",
      ];

      const createdLinks: HTMLLinkElement[] = [];

      criticalAssets.forEach((asset) => {
        const link = document.createElement("link");

        if (asset.endsWith(".mp4")) {
          link.rel = "preload";
          link.as = "video";
          link.type = "video/mp4";
        } else if (asset.endsWith(".glb")) {
          link.rel = "preload";
          link.as = "fetch";
          link.crossOrigin = "anonymous";
        } else {
          link.rel = "prefetch";
        }

        link.href = asset;
        document.head.appendChild(link);
        createdLinks.push(link);
      });

      return () => {
        createdLinks.forEach((link) => {
          if (document.head.contains(link)) {
            document.head.removeChild(link);
          }
        });
      };
    };

    const cleanupPreloads = preloadAssets();

    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min((elapsed / minDuration) * 100, 100);

      setRealProgress(pct);

      if (pct >= 100) {
        clearInterval(interval);
        setMinTimeReached(true);
      }
    }, 60);

    return () => {
      clearInterval(interval);
      cleanupPreloads();
    };
  }, [minDuration]);

  // animação suave
  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayProgress((prev) => {
        const target = minTimeReached ? 100 : realProgress;
        if (prev >= target) return prev;
        return Math.min(prev + 1, target);
      });
    }, 30);

    return () => clearInterval(interval);
  }, [realProgress, minTimeReached]);

  // saída do loader
  useEffect(() => {
    if (!minTimeReached || displayProgress < 100 || !canFinish) return;

    const exitTimer = setTimeout(() => setIsLeaving(true), 150);
    const finishTimer = setTimeout(() => onFinish?.(), 700);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(finishTimer);
    };
  }, [minTimeReached, displayProgress, canFinish, onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[9999] overflow-hidden transition-opacity duration-700 ${
        isLeaving ? "opacity-0 pointer-events-none" : "opacity-100"
      } ${isDark ? "bg-[#050816] text-white" : "bg-[#038ad0] text-white"}`}
    >
      {/* background */}
      <div
        className={`absolute inset-0 ${
          isDark
            ? "bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18),transparent_45%)]"
            : "bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_45%)]"
        }`}
      />

      {/* spinner */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative text-center">
          <div className="text-8xl animate-spin">⚙️</div>
          <div
            className={`absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-mono ${
              isDark ? "text-white/60" : "text-black/60"
            }`}
          >
            Sistema Inicializando
          </div>
        </div>
      </div>

      {/* topo */}
      <div className="pointer-events-none absolute inset-x-0 top-[10%] flex flex-col items-center">
        <span
          className={`mb-3 text-xs uppercase tracking-[0.45em] ${
            isDark ? "text-white/50" : "text-black/50"
          }`}
        >
          Syntro Automation
        </span>
      </div>

      {/* barra */}
      <div className="pointer-events-none absolute inset-x-0 bottom-14 flex flex-col items-center px-6">
        <div
          className={`mb-3 flex w-full max-w-[320px] items-center justify-between text-xs uppercase tracking-[0.3em] ${
            isDark ? "text-white/60" : "text-black/60"
          }`}
        >
          <span>Loading</span>
          <span>{Math.round(displayProgress)}%</span>
        </div>

        <div
          className={`h-1 w-full max-w-[320px] overflow-hidden rounded-full ${
            isDark ? "bg-[#038ad0]/10" : "bg-black/10"
          }`}
        >
          <div
            className={`h-full rounded-full transition-[width] duration-150 ${
              isDark ? "bg-[#038ad0]" : "bg-black"
            }`}
            style={{ width: `${displayProgress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
