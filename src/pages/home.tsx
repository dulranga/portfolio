import Intro from "@components/intro";
import NextPage from "@components/next-page";
import styles from "@styles/index.module.scss";
import Head from "next/head";
import { FC } from "react";

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
  return (
    <main>
      <Head>
        <title>Introduction - Dulranga</title>
        <meta
          name="description"
          content=" a Frontend developer with 3+ years of experience with responsiveness, animations, bugs etc"
        />
      </Head>
      <Intro />
      <NextPage link="/tech-stack" />
      {/* <section className={styles.more}>
        <h1>More and more content is coming on the way!</h1>
        <p>Hang tight!</p>
      </section> */}
    </main>
  );
};

export default Home;
