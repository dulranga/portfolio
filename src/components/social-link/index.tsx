import { motion, Variants } from "framer-motion";
import Link from "next/link";
import React, { FC } from "react";
import styles from "./social-link.module.scss";

interface SocialLinkProps {
  link: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink: FC<SocialLinkProps> = ({ link, icon, label }) => {
  const variants: Variants = {
    animate: {
      opacity: 1,
      y: 1,
      transition: {
        delay: 0.2,
      },
    },
    initial: {
      opacity: 0,
      y: 100,
    },
  };

  return (
    <Link href={link}>
      <a>
        <div className={styles.wrapper}>
          <motion.div
            className={styles.container}
            variants={variants}
            animate={"animate"}
            initial="initial"
          >
            <div className={styles.icon}>{icon}</div>
            <div className={styles.label}>{label}</div>
          </motion.div>
        </div>
      </a>
    </Link>
  );
};

export default SocialLink;
