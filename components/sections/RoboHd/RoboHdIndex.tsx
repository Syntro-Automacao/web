import { RoboHD } from "./RoboHd";
import { VideoParallax } from "./VideoParalax";
import { RevealIf } from "@/components/motion/RevealIf";
import { CncRouter } from "./CncRouter";
import { Equipamentos } from "./Equipamentos";
import { TesteRcp } from "./TesteRcp";
import { ConteudoRouter } from "./ConteudoRouter";
import { Parafusadeira } from "./Parafusadeira";
import { AlmacemAutomatico } from "./AlmacemAutomatico";

export function RoboHdIndex() {
  return (
    <>
      <VideoParallax />
      <RoboHD />
      <RevealIf
        enabled
        once={false}
        direction="left"
        rotateStart={18}
        rotateEnd={0}
        yStart={60}
        scaleStart={0.995}
      >
        <Equipamentos />
      </RevealIf>
      <TesteRcp />
      <CncRouter />
      <Parafusadeira />
      <ConteudoRouter />
      <AlmacemAutomatico />
    </>
  );
}
