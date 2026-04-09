import { Ferramental } from "./Ferramental";
import { Ferramental3D } from "./Ferramental3D";
import { FerramentalVideo } from "./FerramentalVideo";
import { RevealIf } from "@/components/motion/RevealIf";
export function FerramentalIndex() {
  return (
    <>
      <Ferramental />
      <Ferramental3D />
      <RevealIf
        enabled
        once={false}
        direction="left"
        rotateStart={18}
        rotateEnd={0}
        yStart={60}
        scaleStart={0.995}
      >
        <FerramentalVideo />
      </RevealIf>
    </>
  );
}
