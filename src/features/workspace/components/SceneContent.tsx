"use client";

import { useRef } from "react";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import { useCatalogStore } from "@/features/catalog/store/useCatalogStore";
import { MODEL_CONFIG } from "../lib/model-config";
import { useWASDControls } from "../hooks/useWASDControls";
import { Room } from "./Room";
import { FurnitureModel } from "./FurnitureModel";

export function SceneContent() {
  const { selectedDesk, selectedChair, accessories } = useCatalogStore();
  const controlsRef = useRef<OrbitControlsImpl>(null);

  useWASDControls(controlsRef);

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.6} color="#ef8354" />
      <directionalLight position={[2, 5, 4]} intensity={1.8} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} color="#ef8354" />
      <directionalLight position={[-3, 4, -1]} intensity={0.4} color="#4f5d75" />
      <pointLight position={[0.5, 1.2, -1.2]} intensity={3} color="#ef8354" distance={3} decay={2} />
      <pointLight position={[0, 2.5, 0]} intensity={1} color="#4f5d75" distance={4} decay={2} />

      <Environment preset="sunset" />
      <ContactShadows position={[0, 0.01, 0]} opacity={0.35} scale={4} blur={2.5} far={3} />

      {/* Room */}
      <Room />

      {/* Furniture */}
      {selectedDesk && MODEL_CONFIG[selectedDesk.id] && (() => {
        const cfg = MODEL_CONFIG[selectedDesk.id];
        return <FurnitureModel path={cfg.path} position={cfg.position} scale={cfg.scale} rotation={cfg.rotation} />;
      })()}

      {selectedChair && MODEL_CONFIG[selectedChair.id] && (() => {
        const cfg = MODEL_CONFIG[selectedChair.id];
        return <FurnitureModel path={cfg.path} position={cfg.position} scale={cfg.scale} rotation={cfg.rotation} />;
      })()}

      {accessories.map((acc) => {
        const cfg = MODEL_CONFIG[acc.id];
        if (!cfg) return null;
        return <FurnitureModel key={acc.id} path={cfg.path} position={cfg.position} scale={cfg.scale} rotation={cfg.rotation} />;
      })}

      {/* Camera controls */}
      <OrbitControls
        ref={controlsRef}
        makeDefault
        enablePan={false}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 2}
        minAzimuthAngle={-Math.PI / 6}
        maxAzimuthAngle={Math.PI / 6}
        minDistance={1.5}
        maxDistance={3}
        target={[0, 0.4, 0]}
      />
    </>
  );
}
