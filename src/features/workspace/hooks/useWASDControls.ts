"use client";

import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";

const MOVE_SPEED = 0.03;
const keys: Record<string, boolean> = {};

export function useWASDControls(controlsRef: React.RefObject<OrbitControlsImpl | null>) {
    useEffect(() => {
        const onDown = (e: KeyboardEvent) => { keys[e.key.toLowerCase()] = true; };
        const onUp = (e: KeyboardEvent) => { keys[e.key.toLowerCase()] = false; };
        window.addEventListener("keydown", onDown);
        window.addEventListener("keyup", onUp);
        return () => {
            window.removeEventListener("keydown", onDown);
            window.removeEventListener("keyup", onUp);
        };
    }, []);

    const vecs = useRef({ forward: new Vector3(), right: new Vector3() });

    useFrame(({ camera }) => {
        const controls = controlsRef.current;
        if (!controls) return;
        const { forward, right } = vecs.current;

        camera.getWorldDirection(forward);
        forward.y = 0;
        forward.normalize();
        right.crossVectors(forward, new Vector3(0, 1, 0)).normalize();

        let dx = 0, dz = 0;
        if (keys["w"]) { dx += forward.x * MOVE_SPEED; dz += forward.z * MOVE_SPEED; }
        if (keys["s"]) { dx -= forward.x * MOVE_SPEED; dz -= forward.z * MOVE_SPEED; }
        if (keys["a"]) { dx -= right.x * MOVE_SPEED; dz -= right.z * MOVE_SPEED; }
        if (keys["d"]) { dx += right.x * MOVE_SPEED; dz += right.z * MOVE_SPEED; }

        if (dx !== 0 || dz !== 0) {
            controls.target.x += dx;
            controls.target.z += dz;
            camera.position.x += dx;
            camera.position.z += dz;
            controls.update();
        }
    });
}
