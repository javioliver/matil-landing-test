import { Canvas } from '@react-three/fiber';
import { Sphere, OrbitControls } from '@react-three/drei';

function DottedSphere() {
  const numPoints = 2050; // Número de puntos en la esfera
  const radius = 27; // Radio de la esfera

  // Función para generar posiciones en una esfera
  const generateSpherePoints = () => {
    const points = [];
    for (let i = 0; i < numPoints; i++) {
      const phi = Math.acos(2 * Math.random() - 1); // Ángulo phi
      const theta = 2 * Math.PI * Math.random(); // Ángulo theta

      const x = radius * Math.sin(phi) * Math.cos(theta); // Coordenada x
      const y = radius * Math.sin(phi) * Math.sin(theta); // Coordenada y
      const z = radius * Math.cos(phi); // Coordenada z

      points.push({ position: [x, y, z], color: 'white' });
    }
    return points;
  };

  const points = generateSpherePoints();

  return (
    <Canvas camera={{ position: [0, 0, 30], fov: 130 }}>
      {points.map((point, index) => (
        <Sphere key={index} args={[0.1, 16, 16]} position={point.position}>
          <meshBasicMaterial color={point.color} />
        </Sphere>
      ))}
      <OrbitControls enableZoom={false} enablePan={true} enableRotate={true} />
    </Canvas>
  );
}

export default DottedSphere;
