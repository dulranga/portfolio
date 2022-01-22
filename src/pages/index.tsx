import Intro from "@components/intro";
import TechStack from "@components/tech-stack";
import Welcome from "@components/welcome";
import Head from "next/head";
import { useRouter } from "next/router";
import { FC, useRef } from "react";

interface Props {}
const Home: FC<Props> = ({}) => {
  const router = useRouter();
  const skipToMainContent = () => {
    router.push("/home");
  };

  return (
    <main>
      <Head>
        <title>Portfolio of Dulranga</title>
        <meta
          name="description"
          content="I am Dulranga Dhawanitha. a self tought frontend developer who is more familiar with react js. Go to the website to see the projects I've done."
        />
      </Head>
      <Welcome skip={skipToMainContent} />
    </main>
  );
};

export default Home;
