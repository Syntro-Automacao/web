import { SECTION_IDS } from "@/components/sections/hooks/section-ids";

export function RoboHDVideo() {
  return (
    <section className="max-w-[1920px] mx-auto py-24 lg:py-32 scroll-mt-24 sm:scroll-mt-28 lg:scroll-mt-32 overflow-x-clip bg-(--background)">
      <div className="max-w-[1920px] max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Visual */}
          <div className="relative flex justify-center lg:mx-0 order-2 lg:order-1">
            <video
              src="/assets/videos/cartesiano.mp4"
              autoPlay
              loop
              muted
              width="350px"
              className="object-cover syntro"
            ></video>
          </div>
          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="indent-8 2xl:text-2xl text-lg leading-relaxed mb-8">
              Equipamentos robustos, resistentes com tolerâncias ajustadas para
              melhor montagem, escolha de material de forma inteligente e
              tratamentos químicos nas peças para maior durabilidade.
            </p>
            <p className="indent-8 2xl:text-2xl text-lg leading-relaxed mb-8">
              Pode-se verificar que estamos preparados para a segurança e
              ergonomia operacional da máquina, qualidade em projetos elétricos,
              softwares e periféricos bem diferenciados para que o equipamento
              tenha a melhor dinâmica e desempenho em sua produção.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
