import angular from "@assets/tech/angular.png";
import mui from "@assets/tech/mui.png";
import next from "@assets/tech/nextjs.png";
import npm from "@assets/tech/npm.png";
import react from "@assets/tech/react.png";
import redux from "@assets/tech/redux.png";
import gcloud from "@assets/tech/gcloud.png";
import aws from "@assets/tech/aws.png";
import { LocalLibrary } from "@material-ui/icons";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import Image from "next/image";
import { FC } from "react";
import styles from "./tech.module.scss";

const CARD_SIZE = 300;

const tech = [
  { name: "ReactJS", logo: react },
  { name: "Next.js", logo: next },
  { name: "React Native", logo: react },
  { name: "Redux", logo: redux },
  { name: "Angular", logo: angular, learning: true },
  { name: "Material UI", logo: mui, learning: true },
  { name: "NPM", logo: npm },
  { name: "Google cloud", logo: gcloud, learning: true },
  { name: "AWS", logo: aws, learning: true },
];

interface TechStackProps {}

const TechStack: FC<TechStackProps> = () => {
  const { scrollYProgress } = useViewportScroll();

  const translateX = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -1 * CARD_SIZE * tech.length],
    { clamp: true }
  );

  return (
    <main
      className={styles.section}
      style={{ height: tech.length * 80 + "vh" }}
    >
      <legend>
        <h1>Technologies I am familiar</h1>
      </legend>
      <div className={styles.content}>
        <motion.div className={styles.wrapper} style={{ translateX }}>
          {tech.map((technology) => (
            <div className={styles.tech} key={technology.name}>
              <div className={styles.cover}>
                <Image
                  src={technology.logo}
                  alt={technology.name}
                  width={200}
                  height={200}
                  color="#fff"
                  objectFit="contain"
                  placeholder="blur"
                  blurDataURL={technology.logo.blurDataURL}
                />
                {technology.learning && (
                  <div className={styles.learning}>
                    <LocalLibrary />
                    <span>Learning</span>
                  </div>
                )}
              </div>

              <div className={styles.name}>{technology.name}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </main>
  );
};

export default TechStack;
