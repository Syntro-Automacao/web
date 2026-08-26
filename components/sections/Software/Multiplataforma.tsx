import { FeatureSection } from "@/components/sections/Features/FeatureSection";
import { SECTION_IDS } from "@/components/sections/hooks/section-ids";
export function Multiplataforma() {
  return (
    <FeatureSection
      id={SECTION_IDS.MULTIPLATAFORMA}
      title=""
      description="Nossas soluções são multiplataforma, operando de forma integrada entre servidores, dispositivos móveis e smartwatches, com projetos escaláveis que acompanham a evolução da tecnologia. Além disso, contamos com interfaces modernas, dinâmicas e intuitivas, alinhadas às aplicações, e com o apoio de inteligência artificial para análise e tomada de decisão em tempo real."
      description2="Sistemas IoT (Internet das Coisas) interconectam objetos físicos à internet por meio de sensores, softwares e redes, permitindo seu controle e monitoramento. Entre as aplicações, destacam-se o monitoramento de sistemas de captação de energia solar, gerenciamento da iluminação de quadras, ruas, pátios e campos, além do controle do consumo de água e energia. Também é possível controlar e monitorar o tratamento da água de piscinas, sendo esses recursos utilizados em clubes, condomínios, bairros, indústrias, hospitais e laboratórios, entre outros."
      imageSrc="/assets/images/sistema-iot.webp"
      imageAlt="Desenvolvimento de sistemas multiplataforma, servidores, dispositivos móveis, app e smartwatch"
      contentFirst={true} // imagem à esquerda
      imageWidth={800}
      imageHeight={600}
      reverseOnMobile={true}
    />
  );
}
