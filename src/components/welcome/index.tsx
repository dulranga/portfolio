import { FC, useEffect, useState } from "react";
import styles from "./welcome.module.scss";

const notes = ["Welcome", "to", "a world of", "front-end developer"];

interface WelcomeProps {}

const Welcome: FC<WelcomeProps> = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const onWheel = (e: WheelEvent) => {
    setCurrentSlide((prev) => {
      console.log(prev, notes.length);
      if (prev + 1 >= notes.length) {
        setIsFinished(true);
      }

      if (e.deltaY < 0 && prev < 0) return prev - 1;
      if (e.deltaY > 0) return prev + 1;
      return 0;
    });
  };

  useEffect(() => {
    document.addEventListener("wheel", onWheel);
    return () => {
      document.removeEventListener("wheel", onWheel);
    };
  }, []);
  if (isFinished) return <h1>finished</h1>;

  return (
    <div className={styles.welcome}>
      <h1>{notes[currentSlide]}</h1>
    </div>
  );
};

export default Welcome;
