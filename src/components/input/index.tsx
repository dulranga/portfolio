import InputError, { InputErrorProps } from "@errors/input-error";
import { motion, Variants } from "framer-motion";
import React, { ChangeEvent, FC, InputHTMLAttributes, useState } from "react";
import styles from "./input.module.scss";

export interface InputProps {
  label: string;
  icon: React.ReactNode;
  id: string;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  inputElement?: React.ReactElement;
  validator?: (currentValue: string) => {
    valid: boolean;
    message?: string;
  };
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
  validator,
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

  const [error, setError] = useState<InputErrorProps>({ show: false });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (e.target.type === "file") {
      const file = e.target.files![0];
      return updateState(file);
    }

    const validate = validator?.(value);
    if (validate?.valid) {
      updateState(value);
      if (error.show) setError({ show: false });
    } else {
      updateState("");
      setError({ show: true, message: validate?.message });
    }
  };
  return (
    <motion.div
      className={styles.container}
      variants={variants}
      animate="animate"
      initial="initial"
      aria-required={!!inputProps?.required}
    >
      {icon}
      <div className={styles.input}>
        <label htmlFor={id}>{label}</label>
        {inputElement ? (
          React.cloneElement(inputElement, { ...inputProps, onChange })
        ) : (
          <input
            type="text"
            id={id}
            name={id}
            {...inputProps}
            onChange={onChange}
          />
        )}

        <InputError {...error} />
      </div>
    </motion.div>
  );
};

export default Input;
