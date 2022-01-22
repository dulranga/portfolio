import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { FC } from "react";
import styles from "./portfolio.module.scss";
interface PortfolioMiniProps {}

const variants: Variants = {
  initial: {
    opacity: 0.2,
    y: 100,
    x: 0,
  },
  animate: {
    transition: { delay: 0.5 },
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
const PortfolioMini: FC<PortfolioMiniProps> = () => {
  return (
    <motion.div
      className={styles.container}
      variants={variants}
      initial="initial"
      animate="animate"
      whileHover="hover"
    >
      <Image
        src={"/images/portfolios/spicygaming.jpg"}
        width={480}
        height={320}
        alt="Spicy Gaming"
        className={styles.image}
        objectFit="cover"
      />
      <div className={styles.content}>
        <h2>Gaming Marketplace</h2>
        <p>an NFSW games marketplace build with React.js</p>
      </div>
    </motion.div>
  );
};

export default PortfolioMini;
