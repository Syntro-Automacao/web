export function SistemaVisao() {
  return (
    <section className="relative z-20 mx-auto py-24 lg:py-32 scroll-mt-24 sm:scroll-mt-28 lg:scroll-mt-32 bg-(--background)">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="indent-8 text-muted-foreground 2xl:text-2xl text-lg leading-relaxed mb-8">
              Esses equipamentos são de fácil manutenção, com os componentes
              projetado e instalado em locais com fácil acesso, cabos de
              movimentação para maior durabilidade, projetos elétricos e
              mecânico padronizados e organizados de forma inteligentes para
              melhor entendimento.
            </p>
          </div>
          <div className="relative flex justify-center">
            <video
              src="/assets/videos/Sistemavisao01.mp4"
              autoPlay
              loop
              muted
              className="object-cover syntro"
            ></video>
          </div>
        </div>
      </div>
    </section>
  );
}
