"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useCatalogStore } from "@/features/catalog/store/useCatalogStore";
import { SceneContent } from "./SceneContent";
import { Loader } from "./Loader";

export default function WorkspaceScene() {
  const hasAnyItem = useCatalogStore(
    (s) => !!(s.selectedDesk || s.selectedChair || s.accessories.length > 0)
  );

  return (
    <div className="workspace-scene w-full h-full relative">
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

      {!hasAnyItem && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
          <span className="font-prada text-[10px] tracking-[0.3em] text-text-muted uppercase">
            SELECT ITEMS TO PREVIEW
          </span>
        </div>
      )}
    </div>
  );
}
