import angularLogo from "@assets/tech/angular.png";
import nextLogo from "@assets/tech/nextjs.png";
import npmLogo from "@assets/tech/npm.png";
import reactLogo from "@assets/tech/react.png";
import reduxLogo from "@assets/tech/redux.png";
import muiLogo from "@assets/tech/mui.png";
import { LocalLibrary, School } from "@material-ui/icons";
import Image from "next/image";
import { FC } from "react";
import styles from "./tech.module.scss";

const tech = [
  { name: "ReactJS", logo: reactLogo },
  { name: "Next.js", logo: nextLogo },
  { name: "React Native", logo: reactLogo },
  { name: "Redux", logo: reduxLogo },
  { name: "Angular", logo: angularLogo, learning: true },
  { name: "Material UI", logo: muiLogo, learning: true },
  { name: "NPM", logo: npmLogo },
];

interface TechStackProps {}

const TechStack: FC<TechStackProps> = () => {
  return (
    <section>
      <legend>
        <h1>Technologies I am familiar</h1>
      </legend>
      <div className={styles.content}>
        {tech.map((technology) => (
          <div className={styles.tech}>
            <div className={styles.cover}>
              <Image
                src={technology.logo}
                alt={technology.name}
                width={200}
                height={200}
                objectFit="contain"
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
      </div>
    </section>
  );
};

export default TechStack;
