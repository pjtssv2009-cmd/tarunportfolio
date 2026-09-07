"use client";

import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Floating geometric card representing design interface layers
function FloatingInterfaceCard({
  position,
  rotation,
  scale = [1, 1, 1],
  color = "#ffffff",
  wireframe = false,
  opacity = 0.85,
  speed = 1,
  offset = 0,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  scale?: [number, number, number];
  color?: string;
  wireframe?: boolean;
  opacity?: number;
  speed?: number;
  offset?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialY = position[1];
  const initialRotX = rotation[0];
  const initialRotY = rotation[1];

  useFrame(({ clock, pointer }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime() * speed + offset;
    
    // Slow elegant float
    meshRef.current.position.y = initialY + Math.sin(t) * 0.18;
    
    // Subtle cursor parallax
    const targetRotX = initialRotX + pointer.y * 0.12;
    const targetRotY = initialRotY + pointer.x * 0.15;
    
    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetRotX, 0.05);
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetRotY, 0.05);
  });

  return (
    <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
      <boxGeometry args={[2.2, 1.4, 0.04]} />
      <meshStandardMaterial
        color={color}
        roughness={0.25}
        metalness={0.1}
        wireframe={wireframe}
        transparent
        opacity={opacity}
      />
    </mesh>
  );
}

// Subtle Blue Accent Orb
function AccentSphere({
  position,
  size = 0.35,
  speed = 1.2,
  offset = 0,
}: {
  position: [number, number, number];
  size?: number;
  speed?: number;
  offset?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialPos = useRef(position);

  useFrame(({ clock, pointer }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime() * speed + offset;
    meshRef.current.position.y = initialPos.current[1] + Math.cos(t) * 0.22;
    meshRef.current.position.x = initialPos.current[0] + Math.sin(t * 0.8) * 0.15 + pointer.x * 0.2;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial
        color="#0047FF"
        emissive="#002DB3"
        emissiveIntensity={0.6}
        roughness={0.15}
        metalness={0.3}
      />
    </mesh>
  );
}

// Geometric Wireframe Ring / Torus
function AbstractTorus({
  position,
  rotation,
  speed = 0.5,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  speed?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock, pointer }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime() * speed;
    meshRef.current.rotation.z = t * 0.3;
    meshRef.current.rotation.x = rotation[0] + pointer.y * 0.1;
    meshRef.current.rotation.y = rotation[1] + pointer.x * 0.1;
  });

  return (
    <mesh ref={meshRef} position={position} rotation={rotation}>
      <torusGeometry args={[1.2, 0.03, 16, 64]} />
      <meshBasicMaterial color="#111111" transparent opacity={0.35} wireframe />
    </mesh>
  );
}

// Floating 3D Scene Composition
function SceneGroup() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ pointer }) => {
    if (!groupRef.current) return;
    // Gentle global camera/scene tilt
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, pointer.x * 0.08, 0.04);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -pointer.y * 0.08, 0.04);
  });

  return (
    <group ref={groupRef}>
      {/* Background Soft Studio Lights */}
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 8, 5]} intensity={1.5} color="#ffffff" />
      <pointLight position={[-4, -2, 2]} intensity={1.8} color="#0047FF" />
      <directionalLight position={[-5, 3, -3]} intensity={0.6} color="#E5E5DE" />

      {/* Main Glass Interface Panel */}
      <FloatingInterfaceCard
        position={[2.4, 0.2, 0]}
        rotation={[-0.1, -0.3, 0.05]}
        scale={[1.1, 1.1, 1]}
        color="#FFFFFF"
        opacity={0.92}
        speed={0.8}
        offset={0}
      />

      {/* Secondary Translucent UI Layer */}
      <FloatingInterfaceCard
        position={[1.6, -0.9, -0.8]}
        rotation={[0.15, -0.2, -0.05]}
        scale={[0.9, 0.9, 1]}
        color="#F0EFEA"
        opacity={0.7}
        speed={0.7}
        offset={1.5}
      />

      {/* Wireframe Architectural Frame */}
      <FloatingInterfaceCard
        position={[3.1, 1.1, -0.5]}
        rotation={[-0.2, -0.4, 0.1]}
        scale={[0.85, 0.85, 1]}
        color="#111111"
        wireframe={true}
        opacity={0.3}
        speed={0.9}
        offset={3.0}
      />

      {/* Abstract Design Torus */}
      <AbstractTorus position={[2.8, -0.4, -0.3]} rotation={[0.5, -0.3, 0]} />

      {/* Royal Blue Energy Accents */}
      <AccentSphere position={[1.1, 1.0, 0.3]} size={0.32} speed={1.0} offset={0.5} />
      <AccentSphere position={[3.6, -1.2, -0.2]} size={0.22} speed={1.3} offset={2.2} />
    </group>
  );
}

export const HeroScene: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
  }, []);

  if (!isClient || reducedMotion) {
    return (
      <div className="absolute inset-0 pointer-events-none opacity-40 flex items-center justify-end pr-12">
        <div className="w-72 h-72 rounded-full border border-accent/30 bg-gradient-to-tr from-accent/10 to-transparent blur-2xl" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-auto overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        dpr={[1, 1.5]}
        className="w-full h-full"
      >
        <SceneGroup />
      </Canvas>
    </div>
  );
};
