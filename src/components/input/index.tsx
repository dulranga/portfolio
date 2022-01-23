import { motion, Variants } from "framer-motion";
import React, { ChangeEvent, FC, InputHTMLAttributes } from "react";
import styles from "./input.module.scss";

export interface InputProps {
  label: string;
  icon: React.ReactNode;
  id: string;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  inputElement?: React.ReactElement;
}
type Common = { delay: number; updateState: (value: any) => void };

const Input: FC<InputProps & Common> = ({
  icon,
  label,
  inputProps,
  id,
  delay,
  inputElement,
  updateState,
}) => {
  const variants: Variants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay,
      },
    },
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.type === "file") {
      const file = e.target.files![0];
      return updateState(file);
    }
    updateState(e.target.value);
  };
  return (
    <motion.div
      className={styles.container}
      variants={variants}
      animate="animate"
      initial="initial"
    >
      {icon}
      <div className={styles.input}>
        <label htmlFor={id}>{label}</label>
        {inputElement ? (
          React.cloneElement(inputElement, { ...inputProps, onChange })
        ) : (
          <input type="text" id={id} {...inputProps} onChange={onChange} />
        )}
      </div>
    </motion.div>
  );
};

export default Input;
