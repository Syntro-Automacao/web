import { FeatureSection } from "@/components/sections/Features/FeatureSection";
import { SECTION_IDS } from "@/components/sections/hooks/section-ids";
export function Borunte() {
  return (
    <section
      id={SECTION_IDS.BORUNTE}
      className="relative z-20 mx-auto py-24 lg:py-32 scroll-mt-24 sm:scroll-mt-28 lg:scroll-mt-32 bg-(--background)"
    >
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h3 className="xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 leading-tight text-balance">
              Robô Industrial de Seis Eixos
            </h3>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Nosso Robô Industrial de 6 Eixos foi desenvolvido para oferecer
              alta precisão, velocidade e flexibilidade em aplicações
              industriais que exigem desempenho e confiabilidade.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Com arquitetura avançada e controle de movimento de alta
              performance, o robô é capaz de executar tarefas complexas com
              movimentos suaves, repetibilidade elevada e grande liberdade de
              posicionamento. Seus seis eixos permitem alcançar diferentes
              orientações e trajetórias, tornando-o ideal para operações que
              demandam agilidade e precisão.
            </p>
          </div>
          <div className="relative">
            <img src="/assets/robos/borunte.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
