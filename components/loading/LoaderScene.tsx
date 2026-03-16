"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Float,
  OrbitControls,
  ContactShadows,
  useGLTF,
  Html,
} from "@react-three/drei";
import { Suspense } from "react";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";

// Componente para detectar timeout no carregamento
type TimeoutFallbackProps = {
  onTimeout: () => void;
  timeout: number;
  debug?: boolean;
};

function TimeoutFallback({ onTimeout, timeout, debug }: TimeoutFallbackProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (debug) {
        console.log(`⏰ Timeout de ${timeout}ms atingido - ativando fallback`);
      }
      onTimeout();
    }, timeout);

    return () => clearTimeout(timer);
  }, [onTimeout, timeout, debug]);

  return null;
}

type ModelProps = {
  url: string;
  debug?: boolean;
};

function Model({ url, debug }: ModelProps) {
  const groupRef = useRef<THREE.Group>(null);
  const [hasError, setHasError] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  try {
    const { scene } = useGLTF(url);

    useEffect(() => {
      if (scene && debug) {
        console.log("✅ Modelo 3D carregado com sucesso:", url);
        setHasLoaded(true);
      }
    }, [scene, url, debug]);

    useFrame((_, delta) => {
      if (!groupRef.current) return;

      groupRef.current.rotation.y += delta * 0.45;
      groupRef.current.position.y = Math.sin(Date.now() * 0.0015) * 0.05;
    });

    return (
      <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.25}>
        <group ref={groupRef}>
          <primitive object={scene} scale={1.3} position={[0, -0.5, 0]} />
        </group>
      </Float>
    );
  } catch (error) {
    console.error("❌ Erro ao carregar modelo 3D:", error);
    setHasError(true);

    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-white text-6xl animate-spin">⚙️</div>
      </div>
    );
  }
}

type LoaderSceneProps = {
  modelUrl: string;
  debug?: boolean;
};

export function LoaderScene({ modelUrl, debug = false }: LoaderSceneProps) {
  const [modelError, setModelError] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);

  useEffect(() => {}, [modelUrl, debug]);

  const handleModelError = (error: any) => {
    setModelError(true);
  };

  const handleModelLoad = () => {
    if (debug) {
    }
    setModelLoaded(true);
  };

  // Fallback visual quando o modelo falha
  if (modelError) {
    return (
      <div className="flex items-center justify-center h-full bg-[#050816]">
        <div className="text-center">
          <div className="text-white text-8xl mb-4 animate-spin">⚙️</div>
          <div className="text-white/70 text-sm font-mono">
            Carregando sistema...
          </div>
        </div>
      </div>
    );
  }

  return (
    <Canvas camera={{ position: [0, 0.6, 4.5], fov: 35 }} dpr={[1, 2]}>
      <color attach="background" args={["#050816"]} />
      <fog attach="fog" args={["#050816", 6, 12]} />

      {/* Fallback se o modelo não carregar em 3 segundos */}
      <TimeoutFallback
        onTimeout={() => setModelError(true)}
        timeout={3000}
        debug={debug}
      />

      <ambientLight intensity={0.9} />
      <directionalLight position={[3, 4, 2]} intensity={2.2} />
      <directionalLight position={[-2, 2, -2]} intensity={1.2} />
      <spotLight
        position={[0, 5, 3]}
        angle={0.35}
        penumbra={1}
        intensity={2.5}
      />

      <Environment preset="city" />

      <Model url={modelUrl} debug={debug} />

      <ContactShadows
        position={[0, -1.5, 0]}
        opacity={0.45}
        scale={10}
        blur={2}
        far={4}
      />

      {debug && <OrbitControls enablePan enableZoom enableRotate />}
    </Canvas>
  );
}

useGLTF.preload("/models/industrial_robot_arm.glb");
