import { FeatureSection } from "@/components/sections/Features/FeatureSection";

export function ConteudoRouter() {
  return (
    <FeatureSection
      id="ConteudoRouter"
      title=""
      description={
        <>
          Normalmente, é na ponta do eixo Z que instalamos ou desenvolvemos as
          ferramentas de trabalho, como ventosas, garras e sensores de teste. Um
          dos casos mais comuns é o uso de{" "}
          <span className="text-2xl text-primary font-bold">
            {" "}
            dispensers de fluidos{" "}
          </span>{" "}
          para aplicação de resinas, colas e outros tipos de materiais. Esse
          tipo de equipamento também é utilizado na automação de experimentos em
          laboratórios de testes químicos e biológicos.
        </>
      }
      imageSrc="/assets/images/ferramental_spencer.webp"
      imageAlt="Robo para inserção de fluidos"
      contentFirst={true} // texto à esquerda
      reverseOnMobile={true}
      imageWidth={600}
      imageHeight={600}
    />
  );
}
