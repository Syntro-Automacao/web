import GridMotion from "./GridMotion";
import { useEffect, useState } from "react";

export default function Grid() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detecta se é mobile (largura < 1024px)
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Imagens para Desktop
  const desktopItems = [
    "/assets/images/iot/scada_freezer.webp",
    "/assets/images/iot/supervisorio_frezer.webp",
    "/assets/images/iot/monitoramento_hospitalar.webp",
    "/assets/images/iot/reservatorio_agua.webp",
    "/assets/images/iot/sistema_supervisorio.webp",
    "/assets/images/iot/supervisorio_freezer3.webp",
    "/assets/images/iot/reservatorio_agua.webp",
    "/assets/images/iot/painel_solar.webp",
    "/assets/images/iot/linha_montagem.webp",
    "/assets/images/iot/proceso_enchimento.webp",
    "/assets/images/iot/planta_quimica.webp",
    "/assets/images/iot/sistema_supervisorio.webp",
    "/assets/images/iot/painel_solar.webp",
    "/assets/images/iot/sistema_supervisorio.webp",
    "/assets/images/iot/planta_quimica.webp",
    "/assets/images/iot/reservatorio_agua.webp",
    "/assets/images/iot/supervisorio_frezer2.webp",
    "/assets/images/iot/supervisorio_freezer3.webp",
    "/assets/images/iot/supervisorio_freezer3.webp",
  ];

  // Imagens para Mobile (apenas as que existem realmente)
  const mobileItems = [
    "/assets/images/iot/mobile/scada_freezer.webp", // ← usar mesma imagem do desktop
    "/assets/images/iot/mobile/supervisorio_frezer.webp",
    "/assets/images/iot/mobile/monitoramento_hospitalar.webp",
    "/assets/images/iot/mobile/reservatorio_agua.webp",
    "/assets/images/iot/mobile/sistema_supervisorio.webp",
    "/assets/images/iot/mobile/supervisorio_freezer3.webp",
    "/assets/images/iot/mobile/painel_solar.webp",
    "/assets/images/iot/mobile/reservatorio_agua.webp",
    "/assets/images/iot/mobile/linha_montagem.webp", // ← única imagem mobile que existe!
    "/assets/images/iot/mobile/monitoramento_hospitalar.webp",
    "/assets/images/iot/mobile/planta_quimica.webp",
    "/assets/images/iot/mobile/proceso_enchimento.webp",
    "/assets/images/iot/mobile/linha_montagem.webp",
    "/assets/images/iot/mobile/planta_quimica.webp",
    "/assets/images/iot/mobile/proceso_enchimento.webp",
    "/assets/images/iot/mobile/sistema_supervisorio.webp",
    "/assets/images/iot/mobile/scada_freezer.webp",
    "/assets/images/iot/mobile/supervisorio_freezer3.webp",
  ];

  const items = isMobile ? mobileItems : desktopItems;

  return <GridMotion items={items} gradientColor="black" />;
}
