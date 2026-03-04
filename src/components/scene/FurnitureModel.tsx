"use client";

import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Group } from "three";
import type { ModelConfig } from "@/types/workspace";

type FurnitureModelProps = Omit<ModelConfig, "path"> & {
  path: string;
};

export function FurnitureModel({
  path,
  position = [0, 0, 0],
  scale = 1,
  rotation = [0, 0, 0],
}: FurnitureModelProps) {
  const { scene } = useGLTF(path);
  const ref = useRef<Group>(null);
  return (
    <group ref={ref} position={position} rotation={rotation}>
      <primitive object={scene.clone()} scale={scale} />
    </group>
  );
}
