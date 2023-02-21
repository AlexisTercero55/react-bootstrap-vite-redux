import { Canvas } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

function Box() {
  const meshRef = useRef();

  useFrame(() => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.02;
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry />
      <meshStandardMaterial />
    </mesh>
  );
}

export default function CardWithCanvas() {
  return (
    <div className="card">
      <div className="card-border"></div>
      <div className="card-description"
      style={{zIndex:4, color:'#f5f5f5'}}>
        <h3>Card Title</h3>
        <p>Description text goes here.</p>
      </div>
      <div className="card-content">
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Box />
        </Canvas>
      </div>
    </div>
  );
}
