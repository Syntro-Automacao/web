"use client";

import { useEffect, useState, lazy, Suspense } from "react";
import dynamic from "next/dynamic";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";
import { Hero } from "@/components/sections/Hero/Hero";
import { LoaderScreen } from "@/components/loading/LoaderScreen";

// Carregamento estático de componentes críticos
import { Multiplataforma } from "@/components/sections/Software/Multiplataforma";
import { Services } from "@/components/sections/Services";
import { Differentials } from "@/components/sections/Differentials";
import { Cases } from "@/components/sections/Cases";
import { Mission } from "@/components/sections/Mission";
import { CTA } from "@/components/sections/Cta";
import { Criatividade } from "@/components/sections/Software/Criatividade";
import { RoboHDVideo } from "@/components/sections/RoboHd/RoboHdVideo";
import { RoboBandeja3D2 } from "@/components/sections/Cartesiano/3d2";
import { Ferramental } from "@/components/sections/Cartesiano/Ferramental";
import { SistemaVisao } from "@/components/sections/Cartesiano/SistemaVisao";

// Carregamento dinâmico de componentes animados/3D (não críticos)
const Iot = dynamic(
  () =>
    import("@/components/sections/Iot/Iot").then((mod) => ({
      default: mod.Iot,
    })),
  { ssr: true },
);
const RoboParallax = dynamic(
  () =>
    import("@/components/sections/Borunte/RoboParalax").then((mod) => ({
      default: mod.RoboParallax,
    })),
  { ssr: true },
);
const Borunte = dynamic(
  () =>
    import("@/components/sections/Borunte/Borunte").then((mod) => ({
      default: mod.Borunte,
    })),
  { ssr: true },
);
const BorunteAplications = dynamic(
  () =>
    import("@/components/sections/Borunte/BorunteAplications").then((mod) => ({
      default: mod.BorunteAplications,
    })),
  { ssr: true },
);
const VideoParallax = dynamic(
  () =>
    import("@/components/sections/RoboHd/VideoParalax").then((mod) => ({
      default: mod.VideoParallax,
    })),
  { ssr: true },
);
const RoboHD = dynamic(
  () =>
    import("@/components/sections/RoboHd/RoboHd").then((mod) => ({
      default: mod.RoboHD,
    })),
  { ssr: true },
);
const RoboBandeja = dynamic(
  () =>
    import("@/components/sections/Cartesiano/RoboCartesiano").then((mod) => ({
      default: mod.RoboBandeja,
    })),
  { ssr: true },
);
const RoboBandeja3D = dynamic(
  () =>
    import("@/components/sections/Cartesiano/3d").then((mod) => ({
      default: mod.RoboBandeja3D,
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
const RedutorPlanetario = dynamic(
  () =>
    import("@/components/sections/CarrinhoAranha/RedutorPlanetario").then(
      (mod) => ({ default: mod.RedutorPlanetario }),
    ),
  { ssr: true },
);
const Hexapod = dynamic(
  () =>
    import("@/components/sections/CarrinhoAranha/Hexapod").then((mod) => ({
      default: mod.Hexapod,
    })),
  { ssr: true },
);
const RoboCarrinho = dynamic(
  () =>
    import("@/components/sections/CarrinhoAranha/RoboCarrinho").then((mod) => ({
      default: mod.RoboCarrinho,
    })),
  { ssr: true },
);
const Software = dynamic(
  () =>
    import("@/components/sections/Software/Software").then((mod) => ({
      default: mod.Software,
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
        <Hexapod />
        <RedutorPlanetario />
        <Iot />
        <Grid />
        <Software />
        <Multiplataforma />
        <Criatividade />
        <RoboParallax />
        <Borunte />
        <BorunteAplications />
        <VideoParallax />
        <RoboHD />
        <RoboHDVideo />
        <RoboBandeja />
        <RoboBandeja3D />
        <RoboBandeja3D2 />
        <SistemaVisao />
        <Ferramental />
        <RoboEscada />
        <RoboDelta />
        <Services />
        <Differentials />
        <Cases />
        <Mission />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
