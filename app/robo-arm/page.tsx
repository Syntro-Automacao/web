import { createSEO } from "@/components/seo/useSEO";
import { RoboArmIndex } from "@/components/sections/RoboArm/RoboArmIndex";

export const metadata = createSEO({
  title: "Robô Arm Industrial",
  description:
    "Robôs manipuladores articulados para automação industrial. Soluções flexíveis para picking, packing, paletização e operações complexas.",
  keywords: [
    "robô arm",
    "manipulador articulado",
    "automação industrial",
    "picking",
    "paletização",
  ],
});

export default function RoboArmPage() {
  return <RoboArmIndex />;
}
