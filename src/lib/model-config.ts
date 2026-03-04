import type { ModelConfig, IDefault } from "@/types/workspace";

export const DEFAULT: IDefault = {
    desk: {
        position: [0, 0, -1.2],
        scale: 1,
        rotation: [0, 0, 0],
    },
    chair: {
        position: [0, 0, -0.7],
        scale: 1,
        rotation: [0, 9.45, 0],
    },
};

export const MODEL_CONFIG: Record<string, ModelConfig> = {
    // Desks
    "desk-electrical": { path: "/3d/desk_1.glb", position: DEFAULT.desk.position, scale: DEFAULT.desk.scale, rotation: DEFAULT.desk.rotation },
    "desk-mechanical": { path: "/3d/desk_1.glb", position: DEFAULT.desk.position, scale: DEFAULT.desk.scale, rotation: DEFAULT.desk.rotation },
    "desk-basic": { path: "/3d/desk_1.glb", position: DEFAULT.desk.position, scale: DEFAULT.desk.scale, rotation: DEFAULT.desk.rotation },
    // Chairs
    "chair-ergonomic": { path: "/3d/chair_2.glb", position: [0, 0.43, -0.7], scale: 0.46, rotation: DEFAULT.chair.rotation },
    "chair-standard": { path: "/3d/chair_1.glb", position: DEFAULT.chair.position, scale: DEFAULT.chair.scale, rotation: DEFAULT.chair.rotation },
    "chair-stool": { path: "/3d/chair_2.glb", position: [0, 0.43, -0.7], scale: 0.46, rotation: DEFAULT.chair.rotation },
    // Accessories
    "acc-monitor-24": { path: "/3d/24_monitor.glb", position: [0, 0.78, -1.35], scale: 0.25, rotation: [1.57, 0, 0] },
    "acc-monitor-34": { path: "/3d/34_monitor.glb", position: [0, 0.9, -1.35], scale: 0.38, rotation: [-1.6, 3.14, 0] },
    "acc-keyboard": { path: "/3d/keyboard.glb", position: [0, 0.59, -1.12], scale: 0.15, rotation: [0, 0, 0] },
    "acc-mouse": { path: "/3d/mouse.glb", position: [0.3, 0.58, -1.12], scale: 0.09, rotation: [0, 3.14, 0] },
    "acc-plant": { path: "/3d/desk_plant.glb", position: [0.4, 0.58, -1.32], scale: 0.25, rotation: [0, 0, 0] },
    "acc-light-bar": { path: "/3d/lamp.glb", position: [0.3, 0.58, -1.32], scale: 0.2, rotation: [0, 0, 0] },
};
