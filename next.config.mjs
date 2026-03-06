import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },

  // necessário para deploy estático
  output: "export",

  // evita problemas com next/image no export
  images: {
    unoptimized: true,
  },

  // corrige warning de workspace root
  turbopack: {
    root: path.join(process.cwd()),
  },

  // melhora compatibilidade com hosting simples
  trailingSlash: true,
};

export default nextConfig;
