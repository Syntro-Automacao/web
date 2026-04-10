import { SECTION_IDS } from "@/components/sections/hooks/section-ids";
import { UltraLoadingGears } from "@/components/ui/ultra-loading-gears";

export function RoboHD() {
  return (
    <section
      id={SECTION_IDS.HD}
      className="max-w-[1920px] mx-auto py-24 lg:py-32 scroll-mt-24 sm:scroll-mt-28 lg:scroll-mt-32 overflow-x-clip bg-(--background)"
    >
      <div className="max-w-[1920px] max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-8 text-balance">
              Desenvolvimento de equipamentos especializados
            </h2>
            <p className="indent-8 2xl:text-2xl text-lg leading-relaxed mb-8">
              Atuamos no desenvolvimento de máquinas especiais, com soluções que
              atendem as necessidades específicas de cada empresa.
            </p>
            <p className="indent-8 2xl:text-2xl text-lg leading-relaxed mb-8">
              O nosso departamento de engenharia faz uma avaliação criteriosa no
              processo fabril, identificando a melhor solução a ser
              desenvolvida. Junto ao orçamento, elaboramos um croqui intuitivo
              com desenhos 3D, com objetivo de mostrar ao cliente uma visão
              detalhada do equipamento, possibilitando sugestões de melhorias
              antes da fabricação e garantindo o sucesso na entrega do
              projeto.{" "}
            </p>
          </div>
          {/* Visual */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden">
              <UltraLoadingGears
                src="/assets/robos/robo-hd.webp"
                alt="Robô industrial HD, integrado pela Syntro"
                className="w-full lg:max-w-[600px] mx-auto"
                minHeight={400}
                spinnerSize={80}
                spinnerText="Carregando robô..."
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
