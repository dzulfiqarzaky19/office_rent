"use client";

export function IKEAWindow({ position, rotation }: {
  position: [number, number, number];
  rotation?: [number, number, number];
}) {
  const frameColor = "#e0e0e0";
  const frameThick = 0.025;
  const glassColor = "#ef8354";
  const paneW = 0.35;
  const paneH = 0.55;
  const gap = 0.03;
  const totalW = paneW * 2 + gap + frameThick * 2;
  const totalH = paneH + frameThick * 2;

  return (
    <group position={position} rotation={rotation}>
      {/* Window recess */}
      <mesh position={[0, 0, -0.03]}>
        <boxGeometry args={[totalW + 0.06, totalH + 0.06, 0.06]} />
        <meshStandardMaterial color="#ef8354" roughness={0.9} />
      </mesh>

      {/* Sky backing */}
      <mesh position={[0, 0, -0.005]}>
        <planeGeometry args={[totalW - frameThick * 2, totalH - frameThick * 2]} />
        <meshStandardMaterial color="#ef8354" emissive="#ef8354" emissiveIntensity={0.3} />
      </mesh>

      {/* Outer frame */}
      <mesh position={[0, 0, 0.005]}>
        <boxGeometry args={[totalW, totalH, frameThick]} />
        <meshStandardMaterial color={frameColor} roughness={0.3} metalness={0.1} />
      </mesh>

      {/* Left glass pane */}
      <mesh position={[-(paneW + gap) / 2, 0, 0.02]}>
        <planeGeometry args={[paneW - 0.02, paneH - 0.02]} />
        <meshPhysicalMaterial
          color={glassColor}
          transparent
          opacity={0.25}
          roughness={0.05}
          metalness={0}
          transmission={0.6}
        />
      </mesh>

      {/* Right glass pane */}
      <mesh position={[(paneW + gap) / 2, 0, 0.02]}>
        <planeGeometry args={[paneW - 0.02, paneH - 0.02]} />
        <meshPhysicalMaterial
          color={glassColor}
          transparent
          opacity={0.25}
          roughness={0.05}
          metalness={0}
          transmission={0.6}
        />
      </mesh>

      {/* Center mullion */}
      <mesh position={[0, 0, 0.015]}>
        <boxGeometry args={[frameThick, paneH, frameThick]} />
        <meshStandardMaterial color="#ef8354" roughness={0.3} metalness={0.1} />
      </mesh>

      {/* Horizontal divider */}
      <mesh position={[0, 0.05, 0.015]}>
        <boxGeometry args={[totalW - frameThick * 2, frameThick * 0.7, frameThick]} />
        <meshStandardMaterial color="#ef8354" roughness={0.3} metalness={0.1} />
      </mesh>

      {/* Window sill */}
      <mesh position={[0, -totalH / 2 - 0.01, 0.04]}>
        <boxGeometry args={[totalW + 0.08, 0.025, 0.08]} />
        <meshStandardMaterial color="#ef8354" roughness={0.7} />
      </mesh>
    </group>
  );
}
