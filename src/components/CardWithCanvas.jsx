/** 2/20/23 : CDMX/México.
 * @author  @AlexisTercero55
 * @github  https://github.com/AlexisTercero55
 * @mail    alexistercero55@gmail.com
 * @license MPL-2.0
 */
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber';
import { useRef, Suspense, useState } from 'react';
import { Model } from './My_animated_mewtwo';
import '../css/CardWithCanvas.css';

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
  const [pokeName, setpokeName] = useState('Pokemon');
  
  return (
    <div className="card">
      <div className="card-border"></div>
      <div className="card-description">
        <h3>{pokeName}</h3>
        <p>Description text.</p>
      </div>
      <div className="card-content">
        <Canvas className='Canvas'>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Suspense>
            <Model></Model>
          </Suspense>
          <OrbitControls enablePan={true} 
                        enableZoom={true}
                        enableRotate={true}
          />
        </Canvas>
      </div>
    </div>
  );
}
