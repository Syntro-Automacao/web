import { Inter, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";

// Fontes do Google com preloading
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
  adjustFontFallback: true,
});

export const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

// Fonte local otimizada
export const galano = localFont({
  src: [
    {
      path: "./fonts/galano/GalanoGrotesqueAlt-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/galano/GalanoGrotesqueAlt-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
  variable: "--font-galano",
});
