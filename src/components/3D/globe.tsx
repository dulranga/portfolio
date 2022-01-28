import { OrbitControls, Sphere } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { FC, useEffect, useRef, useState } from "react";
import { Texture, TextureLoader } from "three";
import styles from "./3d.module.scss";

interface GlobeProps {}

const Globe: FC<GlobeProps> = () => {
  return (
    <Canvas className={styles.globe_canvas} camera={{ fov: 50 }}>
      <Earth />
      <spotLight intensity={1} color={"#fff"} position={[0, 10, 30]} />

      <ambientLight intensity={2} />

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};
const Earth = () => {
  const [texture, setTexture] = useState<{ [key: string]: Texture | null }>({});
  const loader = new TextureLoader();

  const sphere = useRef<any>(null);

  useEffect(() => {
    const earth = loader.load("/3d/earth.jpg");
    const bumps = loader.load("/3d/earth.bump.jpg");
    setTexture((prev) => ({ ...prev, earth, bumps }));
  }, []);

  useFrame(() => {
    if (sphere.current) sphere.current.rotation.y += 0.005;
  });

  return (
    <Sphere
      args={[2, 100, 100]}
      rotation={[Math.PI / 12, -Math.PI, 0]}
      ref={sphere}
    >
      <meshStandardMaterial
        attach="material"
        map={texture.earth}
        normalMap={texture.bumps}
      />
    </Sphere>
  );
};
export default Globe;
