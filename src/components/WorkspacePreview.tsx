"use client";

import { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  ContactShadows,
  useGLTF,
} from "@react-three/drei";
import { useWorkspace } from "@/context/workspace-context";
import { Group, Vector3 } from "three";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";

/* ── WASD keyboard camera movement ───────────────────────────────── */
const MOVE_SPEED = 0.03;
const keys: Record<string, boolean> = {};

function WASDControls({ controlsRef }: { controlsRef: React.RefObject<OrbitControlsImpl | null> }) {
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
    if (keys["a"]) { dx -= right.x * MOVE_SPEED;   dz -= right.z * MOVE_SPEED; }
    if (keys["d"]) { dx += right.x * MOVE_SPEED;   dz += right.z * MOVE_SPEED; }

    if (dx !== 0 || dz !== 0) {
      controls.target.x += dx;
      controls.target.z += dz;
      camera.position.x += dx;
      camera.position.z += dz;
      controls.update();
    }
  });

  return null;
}

/* ── Per-model config ────────────────────────────────────────────── */
interface ModelConfig {
  path: string;
  position: [number, number, number];
  scale: number;
  rotation: [number, number, number];
}

interface IDefault {
  desk : Omit<ModelConfig, "path">,
  chair : Omit<ModelConfig, "path">
}

const DEFAULT: IDefault = {
  desk: {
    position: [0, 0, -1.2],
    scale: 1,
    rotation: [0,0,0]
  },
  chair: {
    position: [0, 0, -0.7],
    scale: 1,
    rotation: [0, 9.45, 0]
  }
}

const MODEL_CONFIG: Record<string, ModelConfig> = {
  // Desks                                                    
  "desk-electrical":  { path: "/3d/desk_1.glb",      position: DEFAULT.desk.position,       scale: DEFAULT.desk.scale,    rotation: DEFAULT.desk.rotation },
  "desk-mechanical":  { path: "/3d/desk_1.glb",      position: DEFAULT.desk.position,         scale: DEFAULT.desk.scale,    rotation: DEFAULT.desk.rotation },
  "desk-basic":       { path: "/3d/desk_1.glb",      position: DEFAULT.desk.position,      scale: DEFAULT.desk.scale,    rotation: DEFAULT.desk.rotation },
  // Chairs
  "chair-ergonomic":  { path: "/3d/chair_2.glb",     position: [0,0.43,-0.7],     scale: .46,    rotation: DEFAULT.chair.rotation },
  "chair-standard":   { path: "/3d/chair_1.glb",     position: DEFAULT.chair.position,    scale: DEFAULT.chair.scale,    rotation: DEFAULT.chair.rotation },
  "chair-stool":      { path: "/3d/chair_2.glb",     position: [0,0.43,-0.7],     scale: .46,    rotation: DEFAULT.chair.rotation },
  // Accessories                                              //x, z, y                                   //depan, kiri->kanan, z [11, 9.45, 19.35]
  "acc-monitor-24":   { path: "/3d/24_monitor.glb",  position: [0, 0.78, -1.35], scale: 0.25, rotation: [1.57, 0, 0] },
  "acc-monitor-34":   { path: "/3d/34_monitor.glb",  position: [0, 0.9, -1.35],  scale: 0.38, rotation: [-1.6, 3.14, 0] },
  "acc-keyboard":     { path: "/3d/keyboard.glb",    position: [0, 0.59, -1.12],     scale: 0.15, rotation: [0,0,0] },
  "acc-mouse":     { path: "/3d/mouse.glb",    position: [0.3, 0.58, -1.12],     scale: 0.09, rotation: [0,3.14,0] },
  "acc-plant":     { path: "/3d/desk_plant.glb",    position: [0.4, 0.58, -1.32],     scale: 0.25, rotation: [0,0,0] },
  "acc-light-bar":    { path: "/3d/lamp.glb",        position: [0.3, 0.58, -1.32],   scale: 0.2,  rotation: [0,0,0] },
};

/* ── Static GLTF model ───────────────────────────────────────────── */
function Model({
  path,
  position = [0, 0, 0],
  scale = 1,
  rotation = [0, 0, 0],
}: {
  path: string;
  position?: [number, number, number];
  scale?: number;
  rotation?: [number, number, number];
}) {
  const { scene } = useGLTF(path);
  const ref = useRef<Group>(null);
  return (
    <group ref={ref} position={position} rotation={rotation}>
      <primitive object={scene.clone()} scale={scale} />
    </group>
  );
}

function IKEAWindow({ position, rotation }: {
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
      <mesh position={[0, 0, -0.03]}>
        <boxGeometry args={[totalW + 0.06, totalH + 0.06, 0.06]} />
        <meshStandardMaterial color="#ef8354" roughness={0.9} />
      </mesh>

      {/* Sky backing — light blue behind glass */}
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

      {/* Center divider (mullion) */}
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

/* ── Scene content ───────────────────────────────────────────────── */
function SceneContent() {
  const { selectedDesk, selectedChair, accessories } = useWorkspace();
  const controlsRef = useRef<OrbitControlsImpl>(null);

  return (
    <>
      {/* ── Lighting ── */}
      {/* Soft ambient fill */}
      <ambientLight intensity={0.6} color="#ef8354" />

      {/* Main key light — warm sunlight from window direction */}
      <directionalLight
        position={[2, 5, 4]}
        intensity={1.8}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        color="#ef8354"
      />

      {/* Fill light — soft cool from opposite side */}
      <directionalLight position={[-3, 4, -1]} intensity={0.4} color="#4f5d75" />

      {/* Window glow — simulates daylight coming through */}
      <pointLight position={[0.5, 1.2, -1.2]} intensity={3} color="#ef8354" distance={3} decay={2} />

      {/* Subtle top-down fill */}
      <pointLight position={[0, 2.5, 0]} intensity={1} color="#4f5d75" distance={4} decay={2} />

      <Environment preset="sunset" />

      <ContactShadows
        position={[0, 0.01, 0]}
        opacity={0.35}
        scale={4}
        blur={2.5}
        far={3}
      />

      {/* ── Room geometry ── */}
      {/* Floor — warm light wood */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[3, 3]} />
        <meshStandardMaterial color="#ef8354" roughness={0.75} metalness={0} />
      </mesh>

      {/* Back wall — soft warm grey */}
      <mesh position={[0, 1, -1.5]} receiveShadow>
        <planeGeometry args={[3, 2]} />
        <meshStandardMaterial color="#4f5d75" roughness={0.92} metalness={0} />
      </mesh>

      {/* Left wall — slightly cooler grey */}
      <mesh position={[-1.5, 1, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <planeGeometry args={[3, 2]} />
        <meshStandardMaterial color="#4f5d75" roughness={0.92} metalness={0} />
      </mesh>

      {/* ── Window (IKEA style) on back wall ── */}
      <IKEAWindow position={[0.5, 1.15, -1.48]} />

      {/* ── Baseboards ── */}
      <mesh position={[0, 0.03, -1.48]}>
        <boxGeometry args={[3, 0.06, 0.03]} />
        <meshStandardMaterial color="#ccc6bc" roughness={0.8} />
      </mesh>
      <mesh position={[-1.48, 0.03, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[3, 0.06, 0.03]} />
        <meshStandardMaterial color="#ccc6bc" roughness={0.8} />
      </mesh>

      {/* ── Furniture ── */}
      {selectedDesk && MODEL_CONFIG[selectedDesk.id] && (() => {
        const cfg = MODEL_CONFIG[selectedDesk.id];
        return <Model path={cfg.path} position={cfg.position} scale={cfg.scale} rotation={cfg.rotation} />;
      })()}

      {selectedChair && MODEL_CONFIG[selectedChair.id] && (() => {
        const cfg = MODEL_CONFIG[selectedChair.id];
        return <Model path={cfg.path} position={cfg.position} scale={cfg.scale} rotation={cfg.rotation} />;
      })()}

      {accessories.map((acc) => {
        const cfg = MODEL_CONFIG[acc.id];
        if (!cfg) return null;
        return <Model key={acc.id} path={cfg.path} position={cfg.position} scale={cfg.scale} rotation={cfg.rotation} />;
      })}

      {/* ── Camera controls — 60° orbit in front of desk ── */}
      <OrbitControls
        ref={controlsRef}
        makeDefault
        enablePan={false}
        /* Vertical: ~60° range — from slightly above to moderately high */
        minPolarAngle={Math.PI / 6}       /* 45° — not too high above */
        maxPolarAngle={Math.PI / 2}  /* 105° — not below horizon */
        /* Horizontal: 60° range centered on the front view */
        minAzimuthAngle={-Math.PI / 6}    /* -30° */
        maxAzimuthAngle={Math.PI / 6}     /* +30° */
        minDistance={1.5}
        maxDistance={3}
        target={[0, 0.4, 0]}
      />

      <WASDControls controlsRef={controlsRef} />
    </>
  );
}

/* ── Loading fallback ────────────────────────────────────────────── */
function Loader() {
  return (
    <mesh>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color="#e5e5e5" wireframe />
    </mesh>
  );
}

/* ── Main component ──────────────────────────────────────────────── */
export default function WorkspacePreview() {
  const { selectedDesk, selectedChair, accessories } = useWorkspace();
  const hasAnyItem = !!(selectedDesk || selectedChair || accessories.length > 0);

  return (
    <div className="workspace-scene w-full h-full relative">
      <Canvas
        camera={{ position: [2, 2.5, 4], fov: 35 }}
        shadows
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={<Loader />}>
          <SceneContent />
        </Suspense>
      </Canvas>

      {!hasAnyItem && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
          <span className="font-prada text-[10px] tracking-[0.3em] text-text-muted uppercase">
            SELECT ITEMS TO PREVIEW
          </span>
        </div>
      )}
    </div>
  );
}
