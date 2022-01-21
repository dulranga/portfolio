import Welcome from "@components/welcome";
import { FC } from "react";

interface Props {}
const Home: FC<Props> = ({}) => {
  return (
    <main>
      <Welcome />
    </main>
  );
};

export default Home;
