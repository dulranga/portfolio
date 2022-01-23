import { motion, transform, useMotionValue, useTransform } from "framer-motion";
import { FC, useEffect } from "react";

type Value = {
  x: number | string;
  y: number | string;
};
interface MouseMoveProps {
  start: Value;
  end: Value;
}

const MouseMove: FC<MouseMoveProps> = ({ start, end, children }) => {
  const move = useMotionValue(0);
  const x = useTransform(move, [0, 1000], [start.x, end.x], { clamp: true });
  const y = useTransform(move, [0, 1000], [start.y, end.y], { clamp: true });

  useEffect(() => {
    const trackMove = (e: MouseEvent) => {
      move.set(e.pageX);
    };
    window.addEventListener("mousemove", trackMove);
    return () => {
      window.removeEventListener("mousemove", trackMove);
    };
  }, []);

  return (
    <motion.div
      style={{
        position: "absolute",
        x,
        y,
      }}
    >
      {children}
    </motion.div>
  );
};

export default MouseMove;
