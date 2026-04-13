import { Ferramental } from "./Ferramental";
import { Ferramental3D } from "./Ferramental3D";
import { FerramentalVideo } from "./FerramentalVideo";
import { RevealIf } from "@/components/motion/RevealIf";
export function FerramentalIndex() {
  return (
    <>
      <Ferramental />
      <Ferramental3D />
      <FerramentalVideo />
    </>
  );
}
