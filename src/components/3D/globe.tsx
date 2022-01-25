import { Box, OrbitControls, Sphere } from "@react-three/drei";
import styles from "./3d.module.scss";
import { Canvas } from "@react-three/fiber";
import { FC, useEffect, useState } from "react";
import { Texture, TextureLoader } from "three";
import { text } from "stream/consumers";

interface GlobeProps {}

const Globe: FC<GlobeProps> = () => {
  const [texture, setTexture] = useState<{ [key: string]: Texture | null }>({
    map: null,
  });
  useEffect(() => {
    const loader = new TextureLoader();
    const map = loader.load("/3d/moon.jpg");
    const earth = loader.load("3d/earth.jpg");
    const earthBumps = loader.load("3d/earth.bump.jpg");
    setTexture((prev) => ({ ...prev, map, earth, bumps: earthBumps }));
  }, []);
  return (
    <Canvas className={styles.globe_canvas}>
      <spotLight intensity={1} color={"#fff"} position={[0, 10, 30]} />

      <ambientLight intensity={1} />
      <Sphere args={[2, 100, 100]} rotation={[Math.PI / 12, -Math.PI, 0]}>
        <meshStandardMaterial
          attach="material"
          map={texture.earth}
          normalMap={texture.bumps}
        />
      </Sphere>

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default Globe;
