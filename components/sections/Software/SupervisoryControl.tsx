import { FeatureSection } from "@/components/sections/Features/FeatureSection";
import { SECTION_IDS } from "@/components/sections/hooks/section-ids";
export function SupervisoryControl() {
  return (
    <FeatureSection
      id={SECTION_IDS.SUPERVISORY}
      title=""
      description="Sistemas IoT (Internet das Coisas) interconectam objetos físicos à internet por meio de sensores, softwares e redes, permitindo seu controle e monitoramento. Entre as aplicações, destacam-se o monitoramento de sistemas de captação de energia solar, gerenciamento da iluminação de quadras, ruas, pátios e campos, além do controle do consumo de água e energia. Também é possível controlar e monitorar o tratamento da água de piscinas, sendo esses recursos utilizados em clubes, condomínios, bairros, indústrias, hospitais e laboratórios, entre outros."
      imageSrc="/assets/images/supervisory_control.webp"
      imageAlt="Desenvolvimento de sistemas Iot, Software monitoramento e contole"
      contentFirst={false}
      imageWidth={600}
      imageHeight={600}
      reverseOnMobile={true}
    />
  );
}
