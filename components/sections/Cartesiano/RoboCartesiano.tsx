export function RoboBandeja() {
  return (
    <section id="sobre" className="mx-auto bg-(--bg-cinza)">
      <div className="max-w-[1920px] max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="rounded-lg overflow-hidden">
              {/* Robotic Arm Illustration */}
              <video
                src="/assets/videos/videoCartesiano.mp4"
                autoPlay
                loop
                muted
                className="object-cover"
              ></video>
            </div>
          </div>
          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 leading-tight text-balance">
              Robô Cartesiano
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Solução de automação industrial para operações repetitivas e de
              alta precisão. Ideal para montagem, pintura, polimento e
              manipulação de peças, com confiabilidade em ambientes industriais
              exigentes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
