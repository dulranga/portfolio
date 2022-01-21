import Intro from "@components/intro";
import TechStack from "@components/tech-stack";
import Welcome from "@components/welcome";
import styles from "@styles/index.module.scss";
import { FC, useRef } from "react";

interface Props {}
const Home: FC<Props> = ({}) => {
  const contentRef = useRef<HTMLElement>(null);
  const skipToMainContent = () => {
    contentRef.current?.scrollIntoView();
  };

  return (
    <main>
      <Welcome skip={skipToMainContent} />
      <Intro ref={contentRef} />
      <TechStack />

      <section className={styles.more}>
        <h1>More and more content is coming on the way!</h1>
        <p>Hang tight!</p>
      </section>
    </main>
  );
};

export default Home;
