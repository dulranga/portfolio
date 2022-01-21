import { FC, useEffect } from "react";
import styles from "./welcome.module.scss";
import { AllInbox, KeyboardArrowDown } from "@material-ui/icons";

const notes = [
  { label: "Welcome" },
  { label: "to" },
  { label: "the home of" },
  { label: "a front-end developer" },
];

interface WelcomeProps {
  skip?: () => void;
}

const Welcome: FC<WelcomeProps> = ({ skip }) => {
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      console.log(e);
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.welcome}>
        {notes.map((note, i) => {
          const color = "#121212";
          const styles = { "--i": i, "--color": color };
          return (
            // @ts-ignore
            <h1 key={`note-${i}`} style={styles}>
              {note.label}
            </h1>
          );
        })}
      </div>
      <div className={styles.background}></div>

      <div className={styles.actions}>
        <button className={styles.skipper} onClick={skip}>
          <AllInbox />
          <span>Go to Main Content</span>
        </button>
        <div className={styles.info}>
          <KeyboardArrowDown />
          scroll
        </div>
      </div>
    </div>
  );
};

export default Welcome;
