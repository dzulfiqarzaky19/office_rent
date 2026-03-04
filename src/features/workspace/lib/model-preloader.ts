import { useGLTF } from "@react-three/drei";
import { MODEL_CONFIG } from "./model-config";

export function preloadAllModels() {
    const uniquePaths = [...new Set(Object.values(MODEL_CONFIG).map((c) => c.path))];
    uniquePaths.forEach((path) => useGLTF.preload(path));
}
