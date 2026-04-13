export function FerramentalVideo() {
  return (
    <section
      id="ferramentalVideo"
      className="relative z-20 mx-auto py-24 lg:py-32 scroll-mt-24 sm:scroll-mt-28 lg:scroll-mt-32 bg-(--background)"
    >
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="indent-8 text-muted-foreground 2xl:text-2xl text-lg leading-relaxed mb-8">
              O{" "}
              <span className="text-2xl text-primary font-bold">
                sistema de visão é o que orienta o robô
              </span>{" "}
              quanto à coordenada de um objeto para executar a sua pega ou
              definir o sentido de um movimento. No vídeo, é possível verificar
              a leitura da caixa e seu movimento entrando sobre a colmeia da
              caixa para requisitar o que há em seu interior. Trabalhamos com o
              <span className="text-2xl text-primary font-bold">
                {" "}
                desenvolvimento de softwares para análise de imagens
              </span>
              .
            </p>
          </div>
          <div className="relative flex justify-center">
            <video
              src="/assets/videos/robo_sistema_de_visao_pega_objeto.mp4"
              autoPlay
              loop
              muted
              aria-label="Sistema de visao para robo"
              className="object-cover syntro"
            ></video>
          </div>
        </div>
      </div>
    </section>
  );
}
