"use client";

export const Loader = () => {
  return (
    <mesh>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color="#e5e5e5" wireframe />
    </mesh>
  );
};
