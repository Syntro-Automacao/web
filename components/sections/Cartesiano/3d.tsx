import { FeatureSection } from "@/components/sections/Features/FeatureSection";
import { SECTION_IDS } from "@/components/sections/hooks/section-ids";
export function RoboBandeja3D() {
  return (
    <FeatureSection
      id="cartesiano-3d"
      title=""
      description={
        <>
          Os robôs cartesianos oferecem precisão milimétrica, garantindo
          operações altamente confiáveis e consistentes em toda a linha de
          produção. Com{" "}
          <span className="text-2xl text-primary font-bold">
            movimentos suaves{" "}
          </span>{" "}
          e controlados nos eixos X, Y e Z, proporcionam estabilidade e
          repetibilidade mesmo nas aplicações mais exigentes. Além disso,
          permitem{" "}
          <span className="text-2xl text-primary font-bold">
            fácil integração com diversos sistemas
          </span>
          , como sistemas de visão, ERPs e outras plataformas capazes de enviar
          instruções para a execução de processos específicos."
        </>
      }
      imageSrc="/assets/robos/bandeja/M_Synbot20_001.webp"
      imageAlt="Robo cartesiano"
      contentFirst={false} // texto à esquerda
      reverseOnMobile={false}
      imageWidth={600}
      imageHeight={600}
    />
  );
}
