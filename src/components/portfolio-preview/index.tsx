import { Portfolio } from "@interfaces/portfolio";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import styles from "./portfolio.module.scss";

type Extra = {
  delay: number;
};
const PortfolioMini: FC<Portfolio & Extra> = ({
  delay,
  title,
  short_description,
  image,
  id,
}) => {
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
      transition: {
        delay,
      },
    },
    hover: {
      scale: 1.2,
      zIndex: 5,
      boxShadow: "0 0 100px 10px #000000",
    },
  };

  return (
    <Link href={`portfolio/${id}`}>
      <a>
        <motion.div
          className={styles.container}
          variants={variants}
          initial="initial"
          animate="animate"
          whileHover="hover"
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
            <p>{short_description}</p>
          </div>
        </motion.div>
      </a>
    </Link>
  );
};

export default PortfolioMini;
