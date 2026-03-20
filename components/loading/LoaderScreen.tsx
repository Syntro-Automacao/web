"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import { useTheme } from "next-themes";

type LoaderScreenProps = {
  canFinish: boolean;
  onFinish?: () => void;
};

// Reduzido de 1000ms para 400ms - mais rápido
const DEBUG_MIN_DURATION = 400;

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

  // Otimizado: Reduzir interval de 60ms para 50ms
  useEffect(() => {
    const start = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min((elapsed / minDuration) * 100, 100);

      setRealProgress(pct);

      if (pct >= 100) {
        clearInterval(interval);
        setMinTimeReached(true);
      }
    }, 50); // Reduzido de 60ms

    return () => clearInterval(interval);
  }, [minDuration]);

  // Animação suave com interval reduzido
  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayProgress((prev) => {
        const target = minTimeReached ? 100 : realProgress;
        if (prev >= target) return prev;
        // Incremento maior para animação mais rápida
        return Math.min(prev + 2, target);
      });
    }, 20); // Reduzido de 30ms para 20ms

    return () => clearInterval(interval);
  }, [realProgress, minTimeReached]);

  // Saída otimizada do loader
  useEffect(() => {
    if (!minTimeReached || displayProgress < 100 || !canFinish) return;

    // Reduzido de 150ms + 700ms = 850ms para 80ms + 250ms = 330ms
    const exitTimer = setTimeout(() => setIsLeaving(true), 80);
    const finishTimer = setTimeout(() => onFinish?.(), 250);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(finishTimer);
    };
  }, [minTimeReached, displayProgress, canFinish, onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[9999] overflow-hidden transition-opacity duration-500 ${
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
            className={`h-full rounded-full transition-[width] duration-100 ${
              isDark ? "bg-[#038ad0]" : "bg-black"
            }`}
            style={{ width: `${displayProgress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
