"use client";

import { IKEAWindow } from "./IKEAWindow";

export function Room() {
  return (
    <group>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[3, 3]} />
        <meshStandardMaterial color="#ef8354" roughness={0.75} metalness={0} />
      </mesh>
      {/* Back wall */}
      <mesh position={[0, 1, -1.5]} receiveShadow>
        <planeGeometry args={[3, 2]} />
        <meshStandardMaterial color="#4f5d75" roughness={0.92} metalness={0} />
      </mesh>
      {/* Left wall */}
      <mesh position={[-1.5, 1, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <planeGeometry args={[3, 2]} />
        <meshStandardMaterial color="#4f5d75" roughness={0.92} metalness={0} />
      </mesh>
      {/* Window */}
      <IKEAWindow position={[0.5, 1.15, -1.48]} />
      {/* Baseboards */}
      <mesh position={[0, 0.03, -1.48]}>
        <boxGeometry args={[3, 0.06, 0.03]} />
        <meshStandardMaterial color="#ccc6bc" roughness={0.8} />
      </mesh>
      <mesh position={[-1.48, 0.03, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[3, 0.06, 0.03]} />
        <meshStandardMaterial color="#ccc6bc" roughness={0.8} />
      </mesh>
    </group>
  );
}
