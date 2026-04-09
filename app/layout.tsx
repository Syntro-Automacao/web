import React from "react";
import type { Metadata, Viewport } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/providers/Theme-provider";
import "@/styles/globals.css";
import { WhatsAppFloat } from "@/components/floating/WhatsappFloat";
import BackToTopButton from "@/components/floating/BackToTop";

const _inter = Inter({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

// Definição da fonte local Galano
const galano = localFont({
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
    // Adicione outros pesos aqui se você os tiver (e.g., Regular, Medium)
  ],
  display: "swap",
  variable: "--font-galano", // Cria uma variável CSS
});

// app/layout.tsx
export const metadata: Metadata = {
  title: "Syntro Automação Industrial",
  description: "Soluções completas em automação industrial",
  // Preconecte a domínios importantes
  metadataBase: new URL("https://syntro.com.br"),
  alternates: {
    canonical: "/",
  },
  // Resource hints críticas
  other: {
    preconnect: "https://fonts.googleapis.com",
    "preconnect-dns": "https://fonts.gstatic.com",
    prefetch: "/assets/fonts/*",
  },
  // Open Graph otimizado
  openGraph: {
    title: "Syntro Automação Industrial",
    description: "Soluções completas em automação industrial",
    url: "https://syntro.com.br",
    siteName: "Syntro",
    images: [
      {
        url: "https://syntro.com.br/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Syntro Automação Industrial",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  // Configuração de ícones
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
    ],
    shortcut: "/favicon.svg",
    apple: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${galano.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
        <BackToTopButton />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
