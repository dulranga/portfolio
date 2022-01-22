import NextPage from "@components/next-page";
import { ChevronRight } from "@material-ui/icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { FC } from "react";
import styles from "./welcome.module.scss";

const notes = [
  { label: "Welcome" },
  { label: "to" },
  { label: "the home of" },
  { label: "a front-end developer" },
];

interface WelcomeProps {
  skip?: () => void;
}

const Welcome: FC<WelcomeProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.welcome}>
        {notes.map((note, i) => {
          const variants = {
            initial: { y: 100 },
            enter: { y: 0 },
          };
          return (
            <div className={styles.item} key={`note-${i}`}>
              <motion.h1
                variants={variants}
                initial="initial"
                animate="enter"
                transition={{ delay: 0.2, type: "linear" }}
              >
                {note.label}
              </motion.h1>
            </div>
          );
        })}
      </div>
      <div className={styles.background}></div>

      <NextPage link="/home" />
    </div>
  );
};

export default Welcome;
