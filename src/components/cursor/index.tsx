import { FC, useEffect, useRef } from "react";
import styles from "./cursor.module.scss";

interface CursorProps {}

const Cursor: FC<CursorProps> = () => {
  const cursor = useRef<HTMLDivElement>(null);
  const changePosition = (e: MouseEvent) => {
    cursor.current?.setAttribute(
      "style",
      `top: ${e.pageY}px; left:${e.pageX}px`
    );
  };
  useEffect(() => {
    window.addEventListener("mousemove", changePosition);
  }, []);
  return <div ref={cursor} className={styles.cursor}></div>;
};

export default Cursor;
