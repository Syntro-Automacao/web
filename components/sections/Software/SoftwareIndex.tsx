import { Software } from "./Software";
import { Criatividade } from "./Criatividade";
import { Multiplataforma } from "./Multiplataforma";
import { SupervisoryControl } from "./SupervisoryControl";

export function SoftwareIndex() {
  return (
    <>
      <Software />
      <Multiplataforma />
      <SupervisoryControl />
      <Criatividade />
    </>
  );
}
