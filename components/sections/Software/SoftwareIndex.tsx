import { Software } from "./Software";
import { Criatividade } from "./Criatividade";
import { Multiplataforma } from "./Multiplataforma";
import { RevealIf } from "@/components/motion/RevealIf";

export function SoftwareIndex() {
  return (
    <>
      <RevealIf
        enabled
        once={false}
        direction="left"
        rotateStart={18}
        rotateEnd={0}
        yStart={60}
        scaleStart={0.995}
        duration={0.7}
      >
        <Software />
      </RevealIf>
      <RevealIf
        enabled
        once={false}
        direction="left"
        rotateStart={35}
        rotateEnd={0}
        yStart={100}
        scaleStart={0.98}
        duration={0.85}
      >
        <Multiplataforma />
      </RevealIf>
      <RevealIf
        enabled
        once={false}
        direction="left"
        rotateStart={18}
        rotateEnd={0}
        depthStart={-40}
        yStart={60}
        scaleStart={0.995}
      >
        <Criatividade />
      </RevealIf>
    </>
  );
}
