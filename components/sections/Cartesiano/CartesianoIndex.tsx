import { RoboBandeja3D } from "./3d";
import { RoboBandeja3D2 } from "./3d2";
import { RoboBandeja } from "./RoboCartesiano";
import { Simulacao } from "./Simulacao";
import { SistemaVisao } from "./SistemaVisao";

export function CartesianoIndex() {
  return (
    <>
      <RoboBandeja />
      <RoboBandeja3D />
      <RoboBandeja3D2 />
      <Simulacao />
      {/* <SistemaVisao /> */}
    </>
  );
}
