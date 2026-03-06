"use client";

import { useCallback, useMemo, useState } from "react";
import { RoboCarrinho } from "@/components/sections/CarrinhoAranha/RoboCarrinho";
import { RoboAranha } from "@/components/sections/CarrinhoAranha/RoboAranha";

export function CarrinhoAranhaFlow() {
  const [carrinhoReady, setCarrinhoReady] = useState(false);
  const [aranhaInView, setAranhaInView] = useState(false);

  const shouldPlayAranha = useMemo(() => {
    return carrinhoReady && aranhaInView;
  }, [carrinhoReady, aranhaInView]);

  const handleCarrinhoReachEnd = useCallback(() => {
    setCarrinhoReady(true);
  }, []);

  const handleCarrinhoLeaveEnd = useCallback(() => {
    setCarrinhoReady(false);
  }, []);

  const handleAranhaInViewChange = useCallback((inView: boolean) => {
    setAranhaInView(inView);
  }, []);

  return (
    <>
      <RoboCarrinho
        onReachEnd={handleCarrinhoReachEnd}
        onLeaveEnd={handleCarrinhoLeaveEnd}
      />

      <RoboAranha
        shouldPlay={shouldPlayAranha}
        onInViewChange={handleAranhaInViewChange}
      />
    </>
  );
}
