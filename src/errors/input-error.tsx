import { AnimatePresence, motion, Variants } from "framer-motion";
import { FC } from "react";
import styles from "./errors.module.scss";

const variants: Variants = {
  initial: {
    opacity: 0.5,
    y: 25,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    y: 25,
  },
};

export interface InputErrorProps {
  show: boolean;
  message?: string;
}

const InputError: FC<InputErrorProps> = ({ show, message }) => {
  return (
    <div className={styles.input_error}>
      <AnimatePresence initial={false} exitBeforeEnter>
        {show && (
          <motion.span
            variants={variants}
            initial="initial"
            exit="exit"
            animate="animate"
            className={styles._text}
          >
            <span>{message}</span>
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InputError;
