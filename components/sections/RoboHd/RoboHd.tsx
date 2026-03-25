import { SECTION_IDS } from "@/components/sections/hooks/section-ids";

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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance">
              Robô Industrial HD
            </h2>
            <p className="2xl:text-2xl text-lg leading-relaxed mb-8">
              Solução de automação industrial para operações repetitivas e de
              alta precisão.
            </p>
          </div>
          {/* Visual */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden flex justify-center">
              <img
                src="/assets/robos/robo-hd.webp"
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
