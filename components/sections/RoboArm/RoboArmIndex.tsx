import { RoboArm } from "./RoboArm";
import { RoboArmAplications } from "./RoboArmAplications";
import { RoboArmParallax } from "./RoboArmParalax";

export function RoboArmIndex() {
  return (
    <>
      <RoboArmParallax />
      <RoboArm />
      <RoboArmAplications />
    </>
  );
}
