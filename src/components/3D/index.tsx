import { OrbitControls, Sphere, Stars } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { motionValue } from "framer-motion";
import { FC, useEffect } from "react";
import styles from "./3d.module.scss";

interface ThreeDProps {}

const ThreeD: FC<ThreeDProps> = () => {
  return (
    <Canvas className={styles.canvas}>
      <Camera />
      <Stars count={200} depth={1} saturation={5} fade factor={10} />
    </Canvas>
  );
};

const Camera = () => {
  useFrame(({ camera, clock }) => {
    camera.position.z = 50 + Math.cos(clock.getElapsedTime()) * 30;
  });

  return null;
};
export default ThreeD;
