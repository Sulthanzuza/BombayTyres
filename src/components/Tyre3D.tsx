import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface Tyre3DProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
  autoRotate?: boolean;
  hovered?: boolean;
}

const Tyre3D: React.FC<Tyre3DProps> = ({ 
  position = [0, 0, 0], 
  rotation = [0, 0, 0], 
  scale = [1, 1, 1], 
  autoRotate = false,
  hovered = false 
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const tyreRef = useRef<THREE.Mesh>(null);
  const rimRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (groupRef.current) {
      if (autoRotate) {
        groupRef.current.rotation.y += delta * 0.3;
      }
      
      if (hovered) {
        groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 2) * 0.1;
        groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 3) * 0.1;
      }
    }
  });

  return (
    <group ref={groupRef} position={position} rotation={rotation} scale={scale}>
      {/* Main Tyre Body */}
      <mesh ref={tyreRef}>
        <torusGeometry args={[2.2, 0.9, 24, 64]} />
        <meshStandardMaterial 
          color="#1a1a1a" 
          roughness={0.9} 
          metalness={0.1}
          normalScale={[0.5, 0.5]}
        />
      </mesh>
      
      {/* Tyre Sidewall */}
      <mesh position={[0, 0, 0.4]}>
        <torusGeometry args={[2.2, 0.3, 16, 32]} />
        <meshStandardMaterial 
          color="#2a2a2a" 
          roughness={0.8} 
          metalness={0.05}
        />
      </mesh>
      
      <mesh position={[0, 0, -0.4]}>
        <torusGeometry args={[2.2, 0.3, 16, 32]} />
        <meshStandardMaterial 
          color="#2a2a2a" 
          roughness={0.8} 
          metalness={0.05}
        />
      </mesh>
      
      {/* Alloy Rim */}
      <mesh ref={rimRef} position={[0, 0, 0]}>
        <cylinderGeometry args={[1.3, 1.3, 0.6, 32]} />
        <meshStandardMaterial 
          color="#e5e7eb" 
          roughness={0.1} 
          metalness={0.9}
          envMapIntensity={1.5}
        />
      </mesh>
      
      {/* Rim Center Cap */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 0.1, 16]} />
        <meshStandardMaterial 
          color="#f97316" 
          roughness={0.2} 
          metalness={0.8}
          emissive="#f97316"
          emissiveIntensity={0.1}
        />
      </mesh>
      
      {/* Realistic Tyre Treads */}
      {Array.from({ length: 48 }).map((_, i) => {
        const angle = (i / 48) * Math.PI * 2;
        const x = Math.cos(angle) * 2.2;
        const z = Math.sin(angle) * 2.2;
        
        return (
          <mesh key={i} position={[x, 0, z]} rotation={[0, angle, 0]}>
            <boxGeometry args={[0.08, 0.4, 0.9]} />
            <meshStandardMaterial 
              color="#0f0f0f" 
              roughness={1} 
              metalness={0}
            />
          </mesh>
        );
      })}
      
      {/* Rim Spokes - 5 spoke design */}
      {Array.from({ length: 5 }).map((_, i) => {
        const angle = (i / 5) * Math.PI * 2;
        
        return (
          <group key={i} rotation={[0, 0, angle]}>
            {/* Main spoke */}
            <mesh position={[0.65, 0, 0]} rotation={[0, 0, 0]}>
              <boxGeometry args={[1.1, 0.15, 0.4]} />
              <meshStandardMaterial 
                color="#d1d5db" 
                roughness={0.2} 
                metalness={0.8}
              />
            </mesh>
            
            {/* Spoke detail */}
            <mesh position={[0.4, 0, 0]} rotation={[0, 0, 0]}>
              <boxGeometry args={[0.6, 0.08, 0.35]} />
              <meshStandardMaterial 
                color="#9ca3af" 
                roughness={0.3} 
                metalness={0.7}
              />
            </mesh>
          </group>
        );
      })}
      
      {/* Brake Disc (visible through spokes) */}
      <mesh position={[0, 0, 0.35]}>
        <cylinderGeometry args={[1.1, 1.1, 0.05, 32]} />
        <meshStandardMaterial 
          color="#6b7280" 
          roughness={0.4} 
          metalness={0.6}
        />
      </mesh>
      
      {/* Brake Disc Holes */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const x = Math.cos(angle) * 0.8;
        const z = Math.sin(angle) * 0.8;
        
        return (
          <mesh key={i} position={[x, 0, 0.36]}>
            <cylinderGeometry args={[0.08, 0.08, 0.06, 8]} />
            <meshStandardMaterial 
              color="#374151" 
              roughness={0.6} 
              metalness={0.4}
            />
          </mesh>
        );
      })}
      
      {/* Valve Stem */}
      <mesh position={[1.8, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.05, 0.05, 0.3, 8]} />
        <meshStandardMaterial 
          color="#1f2937" 
          roughness={0.7} 
          metalness={0.2}
        />
      </mesh>
    </group>
  );
};

export default Tyre3D;