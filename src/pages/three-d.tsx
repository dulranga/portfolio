import { Canvas, useFrame } from "@react-three/fiber";
import { FC, useRef } from "react";
import styles from "@styles/3d.module.scss";
import { Vector3 } from "three";

interface THREEProps {}

const THREE: FC<THREEProps> = () => {
  return (
    <main>
      <Canvas
        shadows
        className={styles.canvas}
        camera={{
          fov: 100,
        }}
      >
        <directionalLight
          castShadow
          position={[0, 5, 0]}
          intensity={2}
          color={"green"}
        />
        <group>
          <mesh
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -3, 0]}
            receiveShadow
          >
            <planeBufferGeometry attach="geometry" args={[100, 100]} />
            {/* <meshStandardMaterial attach="material" /> */}
            <shadowMaterial attach="material" opacity={0.5} />
          </mesh>
        </group>

        <ambientLight intensity={1} color={"#190eb1"} />
        <pointLight intensity={0.5} position={[-10, 0, 10]} color={"yellow"} />
        <Mesh x={-5} />
        <Mesh x={-10} />
        <Mesh x={0} />
        <Mesh x={5} />
        <Mesh x={10} />
      </Canvas>
    </main>
  );
};

const Mesh = ({ x }: { x: number }) => {
  const mesh = useRef<JSX.IntrinsicElements["mesh"]>(null);
  useFrame(() => {
    mesh.current?.rotateX?.(1 / (Math.PI * 16));
    mesh.current?.rotateY?.(1 / (Math.PI * 16));
  });
  return (
    <mesh ref={mesh} castShadow position={[x, 0, 0]}>
      {/* <torusGeometry attach={"geometry"} args={[0.5, 0.5, 100, 100]} /> */}
      <boxBufferGeometry attach="geometry" args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial attach="material" color={"#b5beb6"} />
    </mesh>
  );
};
export default THREE;
