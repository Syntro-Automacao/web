﻿﻿import path from "path";
import pkg from "@next/bundle-analyzer";
const { withBundleAnalyzer } = pkg;

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },

  output: "export",
  trailingSlash: true,

  images: {
    unoptimized: true,
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2560],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512],
  },

  // Otimizações de performance
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  experimental: {
    optimizePackageImports: [
      "@radix-ui/react-*",
      "lucide-react",
      "framer-motion",
      "three",
    ],
    // Ativa otimizações modernas
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
  },

  // Configuração do Turbopack para resolver conflitos
  turbopack: {
    // Configuração básica do Turbopack
  },

  // Desabilitar webpack para evitar conflitos com Turbopack
  webpack: undefined,

  // Compressão Gzip/Brotli
  compress: true,
  generateEtags: true,
  poweredByHeader: false,

  // Otimizações de bundle
  // REMOVIDO: serverExternalPackages: ["three"], // Conflito com Turbopack

  // Desabilitar webpack para evitar conflitos com Turbopack
  // As otimizações agora são feitas via Turbopack
};

// Adicione bundle analyzer apenas em desenvolvimento
export default process.env.ANALYZE === "true"
  ? withBundleAnalyzer(nextConfig)
  : nextConfig;
