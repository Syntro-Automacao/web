import { Software } from "./Software";
import { Criatividade } from "./Criatividade";
import { Multiplataforma } from "./Multiplataforma";
import { RevealIf } from "@/components/motion/RevealIf";
import { SupervisoryControl } from "./SupervisoryControl";

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
      >
        <Software />
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
        <Multiplataforma />
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
        <SupervisoryControl />
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
        <Criatividade />
      </RevealIf>
    </>
  );
}
