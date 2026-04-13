export function Parafusadeira() {
  return (
    <section className="max-w-[1920px] mx-auto py-24 lg:py-32 scroll-mt-24 sm:scroll-mt-28 lg:scroll-mt-32 overflow-x-clip bg-cover bg-center">
      <div className="max-w-[1920px] max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="indent-8 2xl:text-2xl text-lg leading-relaxed mb-8">
              Com um conjunto de eixos lineares, desenvolvemos manipuladores que
              tornam possível a{" "}
              <span className="text-2xl text-primary font-bold">
                automação de processos manuais
              </span>
              , garantindo repetibilidade e produção contínua. Os movimentos são
              comandados por softwares inteligentes, que analisam o ambiente e
              enviam instruções ao manipulador, permitindo a execução de
              movimentos suaves e contínuos.
            </p>
          </div>
          {/* Visual */}
          <div className="relative flex justify-center lg:mx-0 order-2 lg:order-1">
            <video
              src="/assets/videos/cartesiano.mp4"
              autoPlay
              loop
              muted
              width="400px"
              className="object-cover syntro"
              aria-label="Parafusadeira automatizada, Automatizacao de processo manual, movimentacao automatizada"
            ></video>
          </div>
        </div>
      </div>
    </section>
  );
}
