import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { FC } from "react";
import styles from "./portfolio.module.scss";

const variants: Variants = {
  initial: {
    opacity: 0.2,
    y: 100,
    x: 0,
  },
  animate: {
    opacity: 1,
    y: 0,
    x: 0,
  },
  hover: {
    scale: 1.2,
    zIndex: 5,
    boxShadow: "0 0 100px 10px #000000",
  },
};

interface PortfolioMiniProps {
  delay: number;
  title: string;
  description: string;
  image: string;
}

const PortfolioMini: FC<PortfolioMiniProps> = ({
  delay,
  title,
  description,
  image,
}) => {
  return (
    <motion.div
      className={styles.container}
      variants={variants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      transition={{ delay }}
    >
      <Image
        src={image}
        width={480}
        height={320}
        alt="Spicy Gaming"
        className={styles.image}
        objectFit="cover"
      />
      <div className={styles.content}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </motion.div>
  );
};

export default PortfolioMini;
