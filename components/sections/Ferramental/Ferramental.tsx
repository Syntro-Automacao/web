import { SECTION_IDS } from "@/components/sections/hooks/section-ids";
export function Ferramental() {
  return (
    <section
      id={SECTION_IDS.FERRAMENTAL}
      className="mx-auto bg-(--background-darky)"
    >
      <div className="max-w-[1920px] max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-(--color-blue) text-balance">
              Ferramental{" "}
              <span className="text-3xl font-light text-white">
                para robôs e{" "}
              </span>
              Sistemas de análise{" "}
              <span className="text-3xl font-light text-white">
                que auxiliar robôs
              </span>
            </h2>
            <p className="indent-8 2xl:text-2xl text-lg leading-relaxed text-white mb-8">
              Ferramental de robôs, são componentes desenvolvidos para realizar
              alguma tarefa para o robô, o robô em si só tem como objetivos
              movimentação, no qual posiciona as ferramental para executar uma
              tarefa, assim como um humano manipulado uma ferramenta.
            </p>
            <p className="indent-8 2xl:text-2xl text-lg leading-relaxed text-white mb-8">
              Já os sistemas de análises, são sensores, câmeras e outros
              softwares / recursos, no qual orienta o robô a fazer um movimento,
              muito utilizado são os sensores de visão, que permitem análise
              visuais das situações, para possibilitar o robô reconhecer o atual
              senário.
            </p>
          </div>
          {/* Visual */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden flex justify-center">
              <img
                src="/assets/images/ferramental.webp"
                alt="Robô industrial HD, integrado pela Syntro"
                className="h-auto object-contain"
                sizes="(max-width: 500px) 95vw, (max-width: 500px) 90vw, 85vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
