import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber';
import { useRef, Suspense } from 'react';
import { Model } from './My_animated_mewtwo';

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
  const canvasRef = useRef();
  
  return (
    <div className="card">
      <div className="card-border"></div>
      <div className="card-description"
        style={{zIndex:4, color:'#f5f5f5'}}>
        <h3>Card Title</h3>
        <p>Description text goes here.</p>
      </div>
      <div className="card-content">
        <Canvas className='Canvas' ref={canvasRef}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          {/* <Box /> */}
          <Suspense>
            <Model></Model>
          </Suspense>
          <OrbitControls enablePan={true} 
                        enableZoom={true}
                        enableRotate={true}
                        domElement={canvasRef.current}
          />
        </Canvas>
      </div>
    </div>
  );
}
