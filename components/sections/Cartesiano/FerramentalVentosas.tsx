import { FeatureSection } from "@/components/sections/Features/FeatureSection";

export function FerramentalVentosas() {
  return (
    <FeatureSection
      id="FerramentalVentosas"
      title=""
      description={
        <>
          Na ponta do eixo Z, é possível{" "}
          <span className="text-2xl text-primary font-bold">
            desenvolver diversas ferramentas{" "}
          </span>{" "}
          de trabalho, como conjuntos de ventosas para manipulação de
          componentes por vácuo; garras mecânicas e dispositivos de dispenser de
          fluidos para aplicação de resina, cola e outros materiais em um
          determinado produto. Também é possível integrar uma pistola de pintura
          ou uma tocha de solda, ampliando ainda mais as possibilidades de
          aplicação.
        </>
      }
      imageSrc="/assets/images/ferramental_ventosas.webp"
      imageAlt="Ferramental de trabalho para robos"
      contentFirst={false} // texto à esquerda
      reverseOnMobile={false}
      imageWidth={300}
      imageHeight={200}
      maxImageWidth="400px"
    />
  );
}
