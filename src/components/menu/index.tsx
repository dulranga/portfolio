import { GitHub, Menu as MenuIcon } from "@material-ui/icons";
import { AnimatePresence, motion, useCycle, Variants } from "framer-motion";
import Link from "next/link";
import { FC, useState } from "react";
import styles from "./menu.module.scss";

interface MenuProps {}

const links = [
  { name: "Home", path: "/home" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Reach Me", path: "/reach-me" },
  { name: "Contact", path: "/contact" },
];
const linkVariants = {
  initial: { y: 100 },
  enter: { y: 0 },
  exit: { y: 100 },
};
const menuVariants: Variants = {
  initial: {
    opacity: 0,
    clipPath: "circle(3rem at calc(100% - 2rem) 2rem)",
    height: 0,
  },
  enter: {
    opacity: 1,
    clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
    height: "100%",
  },
  exit: {
    clipPath: "clip-path: circle(0 at 100% 0%);",
    height: 0,
    opacity: 0,
  },
};

const Menu: FC<MenuProps> = () => {
  const [open, toggleOpen] = useCycle(false, true);

  return (
    <div>
      <button className={styles.icon} onClick={() => toggleOpen()}>
        <MenuIcon />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.nav
            className={styles.menu}
            variants={menuVariants}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            <h1>Helllo!</h1>
            <ul className={styles.link}>
              {links.map((link, i) => (
                <div key={link.path}>
                  <motion.li
                    variants={linkVariants}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                    transition={{ delay: 0.02 * i + 0.4 }}
                    data-name={link.name}
                    onClick={() => toggleOpen()}
                  >
                    <Link href={link.path}>
                      <a>{link.name}</a>
                    </Link>
                  </motion.li>
                </div>
              ))}
            </ul>

            <h3>
              Impressed by my work? &nbsp;
              <a
                href="https://github.com/dulranga/portfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                See the <GitHub /> Repo
              </a>
            </h3>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Menu;
