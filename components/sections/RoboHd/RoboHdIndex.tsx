import { RoboHD } from "./RoboHd";
import { RoboHDVideo } from "./RoboHdVideo";
import { VideoParallax } from "./VideoParalax";
import { RevealIf } from "@/components/motion/RevealIf";

export function RoboHdIndex() {
  return (
    <>
      <VideoParallax />
      <RevealIf
        enabled
        once={false}
        direction="left"
        rotateStart={18}
        rotateEnd={0}
        yStart={60}
        scaleStart={0.995}
      >
        <RoboHD />
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
        <RoboHDVideo />
      </RevealIf>
    </>
  );
}
