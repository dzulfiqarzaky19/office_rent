export interface ModelConfig {
    path: string;
    position: [number, number, number];
    scale: number;
    rotation: [number, number, number];
}

export interface IDefault {
    desk: Omit<ModelConfig, "path">;
    chair: Omit<ModelConfig, "path">;
}
