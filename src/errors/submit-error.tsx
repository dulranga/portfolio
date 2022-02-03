import { Close } from "@material-ui/icons";
import { AnimatePresence, motion, useCycle, Variants } from "framer-motion";
import { FC, useEffect, useState } from "react";
import styles from "./errors.module.scss";

const variants: Variants = {
  initial: {
    opacity: 0.5,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -100,
  },
};
export interface SubmitErrorProps {
  show: boolean;
  message?: string;
  close?: () => void;
  success?: boolean;
}

const SubmitError: FC<SubmitErrorProps> = ({
  show,
  message,
  close,
  success,
}) => {
  return (
    <AnimatePresence initial={false} exitBeforeEnter>
      {show && (
        <motion.div
          variants={variants}
          initial="initial"
          exit="exit"
          key={"submit-error"}
          animate="animate"
          className={[
            styles.submit_error,
            styles.error,
            success && styles.success,
          ].join(" ")}
        >
          <span>{message}</span>
          <button onClick={close}>
            <Close fontSize="small" htmlColor="#fff" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SubmitError;
