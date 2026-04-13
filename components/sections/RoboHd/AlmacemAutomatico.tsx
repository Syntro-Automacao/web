import { FeatureSection } from "@/components/sections/Features/FeatureSection";

export function AlmacemAutomatico() {
  return (
    <FeatureSection
      id="AlmacemAutomatico"
      title=""
      description={
        <>
          Podemos aplicar automatização em diversas áreas, obtendo muitos
          ganhos, um exemplo é um{" "}
          <span className="text-2xl text-primary font-bold">
            armazenamento automatizado
          </span>
          , fazendo com que o controle seja{" "}
          <span className="text-2xl text-primary font-bold">
            totalmente automatizado sem interversão humana
          </span>
          , isso faz com que o equipamento possa ser de grande alturas
          verticais, obtendo menor espaço de ocupação no local, e com a maior
          quantidade de itens por metro quadrado, com uma certa inteligência de
          pesagem e sistemas de visão, sobre os itens da caixa podemos fazer o
          inventário de forma automática, e com uma biblioteca cadastrada de
          itens com fotos em tempo real, agiliza a procura de itens e ajuda em
          diversos fatores administrativos."
        </>
      }
      imageSrc="/assets/images/almacem_automatico.webp"
      imageAlt="Renderização 3D do Robô Cartesiano da Syntro"
      contentFirst={false} // texto à esquerda
      reverseOnMobile={true}
      imageWidth={600}
      imageHeight={600}
    />
  );
}
