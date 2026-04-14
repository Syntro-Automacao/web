export function TesteRcp() {
  return (
    <section className="max-w-[1920px] mx-auto py-24 lg:py-32 scroll-mt-24 sm:scroll-mt-28 lg:scroll-mt-32 overflow-x-clip bg-cover bg-center">
      <div className="max-w-[1920px] max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Visual */}
          <div className="relative flex justify-center lg:mx-0 order-1 lg:order-2">
            <video
              src="/assets/videos/Servo_Motor_otm.mp4"
              autoPlay
              loop
              muted
              width="800px"
              className="object-cover syntro"
              aria-label="Desenvolvimento de projetos com servos motores e eixos lineares"
            ></video>
          </div>
          {/* Content */}
          <div className="order-2 lg:order-2">
            <p className="indent-8 2xl:text-2xl text-lg leading-relaxed mb-8">
              Para obtermos{" "}
              <span className="text-2xl text-primary font-bold">
                controle preciso de movimentação
              </span>
              , utilizamos servomotores, que são uma de nossas especialidades.
              Quando integrados a mecanismos específicos, eles permitem alcançar
              <span className="text-2xl text-primary font-bold">
                {" "}
                altos níveis de precisão, velocidade e controle de torque nos
                movimentos
              </span>
              . Ao lado, apresentamos um vídeo que simula a vibração e a
              precisão de um equipamento hospitalar, que exige calibração
              rigorosa, no qual utilizamos controle de torque e posicionamento
              para garantir o desempenho e a exatidão necessários.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
