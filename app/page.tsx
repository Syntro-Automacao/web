"use client";

import { useEffect, useState } from "react";
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
import { Software } from "@/components/sections/Software/Software";

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
        <Software />
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
    </>
  );
}
