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
              Robôs Industriais
            </h3>

            <p className="indent-8 text-muted-foreground 2xl:text-2xl text-lg leading-relaxed mb-8">
              Nosso{" "}
              <span className="text-2xl text-primary font-bold">
                {" "}
                robô Industrial{" "}
              </span>{" "}
              de 6 Eixos foi desenvolvido para oferecer alta{" "}
              <span className="text-2xl text-primary font-bold">
                {" "}
                precisão, velocidade e flexibilidade{" "}
              </span>{" "}
              em aplicações industriais que exigem desempenho e confiabilidade.
            </p>
            <p className="indent-8 text-muted-foreground 2xl:text-2xl text-lg leading-relaxed mb-8">
              Com arquitetura avançada e controle de movimento de alta
              performance, o robô é capaz de executar tarefas complexas com
              <span className="text-2xl text-primary font-bold">
                {" "}
                movimentos suaves
              </span>
              , repetibilidade elevada e grande liberdade de posicionamento.
              Seus seis eixos permitem alcançar diferentes orientações e
              trajetórias, tornando-o ideal para operações que demandam
              agilidade e precisão.
            </p>
          </div>
          <div className="relative flex justify-center">
            <video
              src="/assets/videos/borunte.mp4"
              autoPlay
              loop
              muted
              aria-label="Robo industrial"
              className="object-cover syntro"
            ></video>
          </div>
        </div>
      </div>
    </section>
  );
}
