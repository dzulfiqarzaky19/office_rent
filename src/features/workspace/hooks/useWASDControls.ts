"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useKeyboardControls } from "@react-three/drei";
import { Vector3 } from "three";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";

const MOVE_SPEED = 0.03;

export const useWASDControls = (
    controlsRef: React.RefObject<OrbitControlsImpl | null>
) => {
    const [, getKeys] = useKeyboardControls();
    const vecs = useRef({ forward: new Vector3(), right: new Vector3() });

    useFrame(({ camera }) => {
        const controls = controlsRef.current;
        if (!controls) return;

        const { forward, backward, left, right: isRight } = getKeys();
        if (!forward && !backward && !left && !isRight) return;

        const { forward: fwdVec, right: rightVec } = vecs.current;

        camera.getWorldDirection(fwdVec);
        fwdVec.y = 0;
        fwdVec.normalize();
        rightVec.crossVectors(fwdVec, new Vector3(0, 1, 0)).normalize();

        let dx = 0, dz = 0;
        if (forward) { dx += fwdVec.x * MOVE_SPEED; dz += fwdVec.z * MOVE_SPEED; }
        if (backward) { dx -= fwdVec.x * MOVE_SPEED; dz -= fwdVec.z * MOVE_SPEED; }
        if (left) { dx -= rightVec.x * MOVE_SPEED; dz -= rightVec.z * MOVE_SPEED; }
        if (isRight) { dx += rightVec.x * MOVE_SPEED; dz += rightVec.z * MOVE_SPEED; }

        if (dx !== 0 || dz !== 0) {
            controls.target.x += dx;
            controls.target.z += dz;
            camera.position.x += dx;
            camera.position.z += dz;
            controls.update();
        }
    });
};
