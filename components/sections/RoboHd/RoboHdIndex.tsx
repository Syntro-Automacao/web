import { RoboHD } from "./RoboHd";
import { RoboHDVideo } from "./RoboHdVideo";
import { VideoParallax } from "./VideoParalax";

export function RoboHdIndex() {
  return (
    <>
      <VideoParallax />
      <RoboHD />
      <RoboHDVideo />
    </>
  );
}
