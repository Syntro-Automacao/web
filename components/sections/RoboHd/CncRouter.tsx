export function CncRouter() {
  return (
    <section className="max-w-[1920px] mx-auto py-24 lg:py-32 scroll-mt-24 sm:scroll-mt-28 lg:scroll-mt-32 overflow-x-clip bg-cover bg-center">
      <div className="max-w-[1920px] max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Visual */}
          <div className="relative flex justify-center order-1 lg:order-2">
            <video
              src="/assets/videos/CncRouter.mp4"
              autoPlay
              loop
              muted
              width="400px"
              className="object-cover syntro"
              aria-label="Desenvolvimento de projetos CNC, para cortes"
            ></video>
          </div>
          {/* Content */}
          <div className="lg:mx-0 order-2 lg:order-1">
            <p className="indent-8 2xl:text-2xl text-lg leading-relaxed mb-8">
              O{" "}
              <span className="text-2xl text-primary font-bold">
                controle de movimento é o que possibilita grande parte de nossos
                trabalhos
              </span>
              . Com ele, desenvolvemos equipamentos CNC, capazes de manipular
              ferramentas de corte, spindle, laser industrial, plasma e
              ferramentas diamantadas, entre outras aplicações. Esses sistemas
              permitem a usinagem de diversos materiais, com interpolação de
              eixos por meio de G-code, em equipamentos que podem possuir de 3 a
              6 eixos, operando de forma precisa e sincronizada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
