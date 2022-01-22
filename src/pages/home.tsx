import Intro from "@components/intro";
import TechStack from "@components/tech-stack";
import styles from "@styles/index.module.scss";
import Link from "next/link";
import { FC } from "react";

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
  return (
    <main>
      <Link href={"/"}>Back</Link>
      <Intro />
      <TechStack />
      <section className={styles.more}>
        <h1>More and more content is coming on the way!</h1>
        <p>Hang tight!</p>
      </section>
    </main>
  );
};

export default Home;
