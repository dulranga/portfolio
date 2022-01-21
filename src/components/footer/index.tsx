import { FC } from "react";
import styles from "./footer.module.scss";

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <footer className={styles.footer}>
      <h2>Dulranga Dhawanitha</h2>

      <p>2022 &copy;</p>
    </footer>
  );
};

export default Footer;
