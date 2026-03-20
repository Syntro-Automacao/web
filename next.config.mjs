import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },

  output: "export",

  images: {
    unoptimized: true,
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  turbopack: {
    root: path.join(process.cwd()),
  },

  trailingSlash: true,

  reactStrictMode: true,
  compress: true,
  generateEtags: true,
  serverExternalPackages: ["three"],

  experimental: {
    optimizePackageImports: ["@radix-ui/react-*", "lucide-react"],
  },
};

export default nextConfig;
