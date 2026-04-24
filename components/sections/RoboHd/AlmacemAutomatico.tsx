import { FeatureSection } from "@/components/sections/Features/FeatureSection";

export function AlmacemAutomatico() {
  return (
    <FeatureSection
      id="AlmacemAutomatico"
      title=""
      description={
        <>
          Podemos aplicar automatização em diversas áreas, obtendo muitos
          ganhos. Um exemplo é um{" "}
          <span className="text-2xl text-primary font-bold">
            armazenamento automatizado
          </span>
          , fazendo com que o controle seja{" "}
          <span className="text-2xl text-primary font-bold">
            totalmente automatizado sem interversão humana.{" "}
          </span>
          Isso faz com que o equipamento possa armazenar de forma vertical,
          ocupando assim, menor espaço no local, com maior quantidade de itens
          por metro quadrado. Com um software inteligente de pesagem e sistemas
          de visão, o inventário é feito de forma automática, e com uma
          biblioteca cadastrada de itens com fotos em tempo real, agilizando a
          procura de itens e ajudando em diversos fatores administrativos.
        </>
      }
      imageSrc="/assets/images/almacem_automatico.webp"
      imageAlt="Renderização 3D do Robô Cartesiano da Syntro"
      contentFirst={false} // texto à esquerda
      reverseOnMobile={false}
      imageWidth={600}
      imageHeight={600}
    />
  );
}
