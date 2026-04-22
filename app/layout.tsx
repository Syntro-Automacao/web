import React from "react";
import type { Metadata, Viewport } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/providers/Theme-provider";
import "@/styles/globals.css";
import { WhatsAppFloat } from "@/components/floating/WhatsappFloat";
import BackToTopButton from "@/components/floating/BackToTop";
import { StructuredData } from "@/components/seo/StructuredData";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";

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
  title: {
    default: "Syntro Automação Industrial | Robôs Cartesianos, SCADA e IoT",
    template: "%s | Syntro Automação",
  },
  description:
    "Especialistas em automação industrial com robôs cartesianos, sistemas SCADA, IoT industrial e CLP. Soluções completas para indústrias em São Paulo e Brasil.",
  keywords: [
    "automação industrial",
    "robôs cartesianos",
    "scada",
    "iot industrial",
    "clp",
    "indústria 4.0",
    "automação industrial são paulo",
    "syntro",
  ],
  metadataBase: new URL("https://syntro.com.br"),
  alternates: { canonical: "https://syntro.com.br" }, // Será sobrescrito pelas páginas individuais
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://syntro.com.br",
    siteName: "Syntro Automação Industrial",
    title: "Syntro Automação Industrial | Robôs Cartesianos, SCADA e IoT",
    description:
      "Especialistas em automação industrial com robôs cartesianos, sistemas SCADA, IoT industrial e CLP. Soluções completas para indústrias em São Paulo e Brasil.",
    images: [
      {
        url: "https://syntro.com.br/og-image.jpg",
        width: 1200,
        height: 447,
        alt: "Syntro Automação Industrial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Syntro Automação Industrial | Robôs Cartesianos, SCADA e IoT",
    description:
      "Especialistas em automação industrial com robôs cartesianos, sistemas SCADA, IoT industrial e CLP. Soluções completas para indústrias em São Paulo e Brasil.",
    images: ["https://syntro.com.br/og-image.jpg"],
  },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.json",
  // Verificação do Google Search Console
  verification: {
    google: "hhLt_Q3V0h9c0w3o1-Xx0CioZ5y99YdS88uNhpP6Bns",
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
        <StructuredData />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
        <BackToTopButton />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
