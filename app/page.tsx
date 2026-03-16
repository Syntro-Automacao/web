"use client";
import { useState } from "react";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";
import { Hero } from "@/components/sections/Hero/Hero";
import { Iot } from "@/components/sections/Iot/Iot";
import { RoboParallax } from "@/components/sections/Borunte/RoboParalax";
import { Borunte } from "@/components/sections/Borunte/Borunte";
import { BorunteAplications } from "@/components/sections/Borunte/BorunteAplications";
import { VideoParallax } from "@/components/sections/RoboHd/VideoParalax";
import { RoboHD } from "@/components/sections/RoboHd/RoboHd";
import { RoboBandeja } from "@/components/sections/Cartesiano/RoboCartesiano";
import { RoboBandeja3D } from "@/components/sections/Cartesiano/3d";
import { RoboEscada } from "@/components/sections/RoboEscada/RoboEscada";
import { RoboDelta } from "@/components/sections/Delta/Delta";
import { Services } from "@/components/sections/Services";
import { Differentials } from "@/components/sections/Differentials";
import { Cases } from "@/components/sections/Cases";
import { Mission } from "@/components/sections/Mission";
import { CTA } from "@/components/sections/Cta";
import { RedutorPlanetario } from "@/components/sections/CarrinhoAranha/RedutorPlanetario";
import { Hexapod } from "@/components/sections/CarrinhoAranha/Hexapod";
import { RoboCarrinho } from "@/components/sections/CarrinhoAranha/RoboCarrinho";
import { LoaderScreen } from "@/components/loading/LoaderScreen";

export default function HomePage() {
  const [loadingFinished, setLoadingFinished] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [debugPhase, setDebugPhase] = useState("inicio");

  const handleLoadingFinish = () => {
    setLoadingFinished(true);
    setShowContent(true);
    setDebugPhase("loading_finalizado");
  };

  return (
    <>
      {!loadingFinished && <LoaderScreen onFinish={handleLoadingFinish} />}

      {/* Renderização condicional correta - só renderiza após loading */}
      {showContent && (
        <div className="transition-opacity duration-1000 opacity-100">
          <Header />
          <main className="relative">
            <Hero />
            <RoboCarrinho />
            <Hexapod />
            <RedutorPlanetario />
            <Iot />
            <RoboParallax />
            <Borunte />
            <BorunteAplications />
            <VideoParallax />
            <RoboHD />
            <RoboBandeja />
            <RoboBandeja3D />
            <RoboEscada />
            <RoboDelta />
            <Services />
            <Differentials />
            <Cases />
            <Mission />
            <CTA />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}
