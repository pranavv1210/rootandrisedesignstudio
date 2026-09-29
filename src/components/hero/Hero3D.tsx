"use client";

import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, OrthographicCamera, Float, Line } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

// An abstract architectural grid/blueprint that gains depth
function BlueprintLines() {
  const group = useRef<THREE.Group>(null);
  
  useFrame(({ clock, pointer }) => {
    if (group.current) {
      // Subtle rotation based on mouse
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, (pointer.x * Math.PI) / 20, 0.05);
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, (pointer.y * Math.PI) / 20, 0.05);
      
      // Gradually rise the elements to show depth
      const t = Math.min(clock.getElapsedTime() * 0.5, 1);
      group.current.position.y = THREE.MathUtils.lerp(-5, 0, t);
    }
  });

  // Generate some grid lines
  const lines = useMemo(() => {
    const arr = [];
    const size = 20;
    const step = 2;
    for (let i = -size; i <= size; i += step) {
      arr.push([new THREE.Vector3(-size, 0, i), new THREE.Vector3(size, 0, i)]);
      arr.push([new THREE.Vector3(i, 0, -size), new THREE.Vector3(i, 0, size)]);
    }
    return arr;
  }, []);

  return (
    <group ref={group}>
      {lines.map((pts, i) => (
        <Line key={i} points={pts} color="#111312" opacity={0.1} transparent lineWidth={1} />
      ))}
      
      {/* Abstract Walls rising */}
      <Float speed={2} rotationIntensity={0.1} floatIntensity={0.2}>
        <mesh position={[-4, 1, -4]} castShadow receiveShadow>
          <boxGeometry args={[8, 2, 0.2]} />
          <meshStandardMaterial color="#E7E8E3" roughness={0.9} />
        </mesh>
        
        <mesh position={[2, 1.5, -2]} rotation={[0, Math.PI/2, 0]} castShadow receiveShadow>
          <boxGeometry args={[6, 3, 0.2]} />
          <meshStandardMaterial color="#F5F5F2" roughness={0.7} />
        </mesh>
        
        {/* Accent elements */}
        <mesh position={[-1, 0.5, 2]} castShadow>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#6E7565" roughness={0.5} />
        </mesh>
      </Float>
    </group>
  );
}

export default function Hero3D() {
  // Use a simpler scene for mobile if needed, but R3F is generally fast for this low poly count.
  return (
    <Canvas shadows dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
      <OrthographicCamera makeDefault position={[20, 20, 20]} zoom={30} near={-100} far={100} />
      
      <ambientLight intensity={0.5} />
      <directionalLight 
        position={[10, 20, 5]} 
        intensity={1.5} 
        castShadow 
        shadow-mapSize={[1024, 1024]}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <directionalLight position={[-10, 10, -10]} intensity={0.5} color="#B56B4D" />
      
      <BlueprintLines />
      
      {/* Soft studio environment */}
      <Environment preset="city" />
    </Canvas>
  );
}
