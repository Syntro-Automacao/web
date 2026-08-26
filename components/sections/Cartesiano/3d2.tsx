export function RoboBandeja3D2() {
  return (
    <section
      id="cartesiano3d2"
      className="relative z-20 mx-auto py-24 lg:py-32 scroll-mt-24 sm:scroll-mt-28 lg:scroll-mt-32 bg-(--background)"
    >
      <div className="max-w-[1920px] max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <p className="indent-8 2xl:text-2xl text-lg leading-relaxed mb-8">
              Esses equipamentos são de{" "}
              <span className="text-2xl text-primary font-bold">
                fácil manutenção
              </span>
              , com os componentes projetados e instalados em locais de fácil
              acesso, cabos de movimentação para maior durabilidade, projetos
              elétricos e mecânico{" "}
              <span className="text-2xl text-primary font-bold">
                padronizados e organizados{" "}
              </span>{" "}
              de forma inteligentes para melhor entendimento e agilidade durante
              a manutenção.
            </p>
            <p className="indent-8 2xl:text-2xl text-lg leading-relaxed mb-8">
              O equipamento conta também com sistema de{" "}
              <span className="text-2xl text-primary font-bold">
                segurança operacional,{" "}
              </span>
              conforme normas{" "}
              <span className="text-2xl text-primary font-bold">NR12</span>, com
              barreiras de luz e botões de emergência, com parada imediata
              conforme o acionamento da segurança.
            </p>
          </div>
          {/* Visual */}
          <div className="relative order-1 lg:order-2">
            <div className="rounded-lg overflow-hidden flex justify-center">
              <img
                src="/assets/images/synbotmini25-transparent.webp"
                alt="Robo cartesiano economico"
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
