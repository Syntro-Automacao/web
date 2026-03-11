"use client";

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

export default function HomePage() {
  return (
    <>
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
    </>
  );
}
