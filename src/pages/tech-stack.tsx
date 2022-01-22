import NextPage from "@components/next-page";
import TechStack from "@components/tech-stack";
import { FC } from "react";

interface TechProps {}

const Tech: FC<TechProps> = () => {
  return (
    <div>
      <TechStack />
      <NextPage link="/portfolio" />
    </div>
  );
};

export default Tech;
