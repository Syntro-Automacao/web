"use client";

import { useEffect, useState, lazy, Suspense } from "react";
import dynamic from "next/dynamic";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";
import { Hero } from "@/components/sections/Hero/Hero";
import { SobreIndex } from "@/components/sections/Sobre/SobreIndex";
import { LoaderScreen } from "@/components/loading/LoaderScreen";
import { SoftwareIndex } from "@/components/sections/Software/SoftwareIndex";
import { Services } from "@/components/sections/Services";
import { Differentials } from "@/components/sections/Differentials";
import { Cases } from "@/components/sections/Cases";
import { Mission } from "@/components/sections/Mission";
import { CTA } from "@/components/sections/Cta";
import { BorunteIndex } from "@/components/sections/Borunte/BorunteIndex";
import { RoboHdIndex } from "@/components/sections/RoboHd/RoboHdIndex";
import { CartesianoIndex } from "@/components/sections/Cartesiano/CartesianoIndex";
import { FerramentalIndex } from "@/components/sections/Ferramental/FerramentalIndex";

// Carregamento dinâmico de componentes animados/3D (não críticos)
const Iot = dynamic(
  () =>
    import("@/components/sections/Iot/Iot").then((mod) => ({
      default: mod.Iot,
    })),
  { ssr: true },
);
const RoboEscada = dynamic(
  () =>
    import("@/components/sections/RoboEscada/RoboEscada").then((mod) => ({
      default: mod.RoboEscada,
    })),
  { ssr: true },
);
const RoboDelta = dynamic(
  () =>
    import("@/components/sections/Delta/Delta").then((mod) => ({
      default: mod.RoboDelta,
    })),
  { ssr: true },
);
const RoboCarrinho = dynamic(
  () =>
    import("@/components/sections/Carrinho/RoboCarrinho").then((mod) => ({
      default: mod.RoboCarrinho,
    })),
  { ssr: true },
);
const Grid = dynamic(() => import("@/components/sections/Grid/Grid"), {
  ssr: true,
});

export default function HomePage() {
  const [heroReady, setHeroReady] = useState(false);
  const [loadingFinished, setLoadingFinished] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const fallback = setTimeout(() => {
      setHeroReady(true);
    }, 2500);

    return () => clearTimeout(fallback);
  }, []);

  const handleLoadingFinish = () => {
    setLoadingFinished(true);

    requestAnimationFrame(() => {
      setContentVisible(true);
    });
  };

  return (
    <>
      {!loadingFinished && (
        <LoaderScreen canFinish={heroReady} onFinish={handleLoadingFinish} />
      )}

      <Header />

      <main className="relative">
        <div
          id="syntro"
          className={`transition-opacity duration-700 ${
            contentVisible ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <Hero isVisible={contentVisible} onReady={() => setHeroReady(true)} />
        </div>
        <RoboCarrinho />
        <SobreIndex />
        <Iot />
        <Grid />
        <SoftwareIndex />
        <BorunteIndex />
        <RoboHdIndex />
        <CartesianoIndex />
        <FerramentalIndex />
        {/* <RoboEscada />
        <RoboDelta />
        <Services />
        <Differentials />
        <Cases />
        <Mission />
        <CTA /> */}
      </main>
      <Footer />
    </>
  );
}
