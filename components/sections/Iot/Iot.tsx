import { SECTION_IDS } from "@/components/sections/hooks/section-ids";

export function Iot() {
  return (
    <section
      id={SECTION_IDS.IOT}
      className="max-w-[1920px] mx-auto py-24 lg:py-32 scroll-mt-24 sm:scroll-mt-28 lg:scroll-mt-32 overflow-x-clip bg-(--background-darky)"
    >
      <div className="max-w-[1920px] max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-white text-balance">
              Desenvolvimento de softwares
            </h2>
            <p className="text-lg leading-relaxed mb-8 text-(--text-h3-dark)"></p>
            <p>
              <span className="text-3xl text-primary font-bold">
                Sistemas SCADA,{" "}
              </span>
              <span className="text-5xl font-light text-white">
                Internet das coisas (IOT),
              </span>
            </p>
            <p>
              <span className="text-3xl font-light text-white">
                Controladores programáveis (PLC),{" "}
              </span>
              <span className="text-3xl text-primary font-bold">
                Interfaces intuitivas, simples e dinâmicas,{" "}
              </span>
              <span className="text-3xl font-light text-white">
                Integração com Inteligência artificiais{" "}
              </span>
            </p>
          </div>
          {/* Visual */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden">
              {/* Robotic Arm Illustration */}
              <video
                src="/assets/videos/videoprogramacao.mp4"
                autoPlay
                loop
                muted
                className="object-cover"
              ></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
