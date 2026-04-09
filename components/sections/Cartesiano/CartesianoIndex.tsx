import { RoboBandeja3D } from "./3d";
import { RoboBandeja3D2 } from "./3d2";
import { RoboBandeja } from "./RoboCartesiano";
import { Simulacao } from "./Simulacao";
//import { SistemaVisao } from "./SistemaVisao";
import { RevealIf } from "@/components/motion/RevealIf";

export function CartesianoIndex() {
  return (
    <>
      <RoboBandeja />
      <RevealIf
        enabled
        once={false}
        direction="left"
        rotateStart={18}
        rotateEnd={0}
        yStart={60}
        scaleStart={0.995}
      >
        <RoboBandeja3D />
      </RevealIf>
      <RevealIf
        enabled
        once={false}
        direction="left"
        rotateStart={18}
        rotateEnd={0}
        yStart={60}
        scaleStart={0.995}
      >
        <RoboBandeja3D2 />
      </RevealIf>
      <RevealIf
        enabled
        once={false}
        direction="left"
        rotateStart={18}
        rotateEnd={0}
        yStart={60}
        scaleStart={0.995}
      >
        <Simulacao />
      </RevealIf>

      {/* <SistemaVisao /> */}
    </>
  );
}
