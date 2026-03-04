"use client";

import { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { KeyboardControls, KeyboardControlsEntry } from "@react-three/drei";
import { useCatalogStore } from "@/features/catalog/store/useCatalogStore";
import { SceneContent } from "./SceneContent";
import { Loader } from "./Loader";

enum Controls {
  forward = "forward",
  backward = "backward",
  left = "left",
  right = "right",
}

export const WorkspaceScene = () => {
  const hasAnyItem = useCatalogStore(
    (s) => !!(s.selectedDesk || s.selectedChair || s.accessories.length > 0),
  );

  const map = useMemo<KeyboardControlsEntry<Controls>[]>(
    () => [
      { name: Controls.forward, keys: ["ArrowUp", "KeyW"] },
      { name: Controls.backward, keys: ["ArrowDown", "KeyS"] },
      { name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
      { name: Controls.right, keys: ["ArrowRight", "KeyD"] },
    ],
    [],
  );

  return (
    <div className="workspace-scene w-full h-full relative">
      <KeyboardControls map={map}>
        <Canvas
          camera={{ position: [2, 2.5, 4], fov: 35 }}
          shadows
          gl={{ antialias: true, alpha: true }}
          style={{ background: "transparent" }}
        >
          <Suspense fallback={<Loader />}>
            <SceneContent />
          </Suspense>
        </Canvas>
      </KeyboardControls>

      {!hasAnyItem && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
          <span className="font-prada text-[10px] tracking-[0.3em] text-text-muted uppercase">
            SELECT ITEMS TO PREVIEW
          </span>
        </div>
      )}
    </div>
  );
};
