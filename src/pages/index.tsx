import Intro from "@components/intro";
import Welcome from "@components/welcome";
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
    </main>
  );
};

export default Home;
