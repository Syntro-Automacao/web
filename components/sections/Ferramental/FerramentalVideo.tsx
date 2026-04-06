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
              Na ponta do eixo Z, é possível desenvolver diversas ferramentas de
              trabalho, como conjuntos de ventosas para manipulação de
              componentes por vácuo, garras mecânicas ou dispositivos de
              dispensação para aplicação de resina, cola e outros materiais em
              um determinado produto; também é possível integrar uma pistola de
              pintura ou uma tocha para soldagem, ampliando ainda mais as
              possibilidades de aplicação. Esse robô cartesiano pode ser
              utilizado em diversas atividades industriais e, além disso,
              contamos com um software CAD próprio, no qual simulamos e
              analisamos os movimentos dos eixos, avaliando aspectos como
              inércia, precisão e velocidade de operação, bem como as condições
              reais do ambiente e do processo, garantindo maior confiabilidade
              nas aplicações; o software também permite o envio de comandos
              complexos de movimentação diretamente para o robô.
            </p>
          </div>
          <div className="relative flex justify-center">
            <video
              src="/assets/videos/robo_sistema_de_visao_pega_objeto.mp4"
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
