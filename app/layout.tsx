import React from "react";
import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/providers/Theme-provider";
import "./globals.css";
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

export const metadata: Metadata = {
  title: "Syntro Automação | Robótica e Automação Industrial",
  description:
    "Empresa brasileira especializada em robótica, automação industrial e Indústria 4.0. Desenvolvemos robôs industriais, projetos turnkey e integramos sistemas com tecnologia 100% nacional.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/assets/favicon.svg",
        type: "image/svg+xml",
      },
    ],
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
