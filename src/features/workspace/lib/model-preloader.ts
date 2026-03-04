import { useGLTF } from "@react-three/drei";
import { MODEL_CONFIG } from "./model-config";

/**
 * Call this at the app level (layout.tsx or builder page) to start
 * downloading all GLB files before the user selects anything.
 */
export function preloadAllModels() {
    const uniquePaths = [...new Set(Object.values(MODEL_CONFIG).map((c) => c.path))];
    uniquePaths.forEach((path) => useGLTF.preload(path));
}
