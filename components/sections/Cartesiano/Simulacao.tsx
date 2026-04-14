export function Simulacao() {
  return (
    <section
      id="simulacao"
      className="relative z-20 mx-auto py-24 lg:py-32 scroll-mt-24 sm:scroll-mt-28 lg:scroll-mt-32 bg-(--background)"
    >
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative flex justify-center lg:mx-0 order-1 lg:order-1">
            <video
              src="/assets/videos/SistemaroboxyzR.mp4"
              autoPlay
              loop
              muted
              aria-label="Software CAD, simulacao robo, planejamento de trajetoria"
              className="object-cover syntro"
            ></video>
          </div>
          <div className="order-2 lg:order-2">
            <p className="indent-8 text-muted-foreground 2xl:text-2xl text-lg leading-relaxed mb-8">
              Os robôs podem ser utilizados em diversas atividades industriais.
              Para isso, contamos com um{" "}
              <span className="text-2xl text-primary font-bold">
                software CAD{" "}
              </span>
              próprio, no qual{" "}
              <span className="text-2xl text-primary font-bold">
                simulamos e analisamos os movimentos dos eixos
              </span>
              , avaliando aspectos como inércia, precisão e velocidade de
              operação, bem como as condições reais do ambiente e do processo,
              garantindo maior confiabilidade nas aplicações. O software também
              permite o envio de comandos complexos de movimentação diretamente
              para o robô.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
