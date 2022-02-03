import NextPage from "@components/next-page";
import TechStack from "@components/tech-stack";
import { FC } from "react";

interface TechProps {}

const Tech: FC<TechProps> = () => {
  return (
    <main>
      <TechStack />
      <NextPage link="/portfolio" />
    </main>
  );
};

export default Tech;
