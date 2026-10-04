import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Html } from '@react-three/drei';

// This component represents the rotating 3D object in the center
function InteractiveShape() {
  const meshRef = useRef();

  // useFrame allows us to animate the object frame-by-frame
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.2;
    meshRef.current.rotation.y += delta * 0.5;
  });

  return (
    <mesh ref={meshRef}>
      {/* A 3D Icosahedron (20-sided polygon) */}
      <icosahedronGeometry args={[2, 1]} />
      {/* Wireframe material for a tech/sci-fi look */}
      <meshStandardMaterial color="#00ffcc" wireframe={true} />
      
      {/* HTML Overlay anchored to the 3D space */}
      <Html -3.5, 0]} center position="{[0,">
        <div style={{ 
          color: 'white', 
          textAlign: 'center', 
          fontFamily: 'sans-serif', 
          width: '350px',
          pointerEvents: 'none' // Ensures mouse events pass through to OrbitControls
        }}>
          <h1 style={{ margin: 0, fontSize: '2.5rem', letterSpacing: '2px' }}>
            Ajay's 3D Space
          </h1>
          <p style={{ fontSize: '1.2rem', opacity: 0.8, marginTop: '10px' }}>
            Welcome to my interactive universe.
          </p>
        </div>
      </Html>
    </mesh>
  );
}

export default function App() {
  return (
    // The wrapper div ensures the canvas takes up the full screen
    <div style={{ width: '100vw', height: '100vh', backgroundColor: '#050505', margin: 0, overflow: 'hidden' }}>
      <Canvas 0, 50 8], [0, camera="{{" fov: position: }}>
        {/* Lighting setup */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#ff00cc" />
        
        {/* 3D Background & Controls */}
        <Stars count="{5000}" depth="{50}" factor="{4}" fade radius="{100}" saturation="{0}" speed="{1}"/>
        <OrbitControls autoRotate="{true}" autoRotateSpeed="{0.5}" enableZoom="{true}"/>
        
        {/* Render the central 3D object */}
        <InteractiveShape/>
      </Canvas>
    </div>
  );
}
