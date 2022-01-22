import PortfolioMini from "@components/portfolio-preview";
import { FC } from "react";
import styles from "@styles/pages.module.scss";

interface PortfolioProps {}

const Portfolio: FC<PortfolioProps> = () => {
  return (
    <main>
      <h1>My BESTs</h1>
      <div className={styles.portfolio_content}>
        <PortfolioMini />
        <PortfolioMini />
        <PortfolioMini />
        <PortfolioMini />
      </div>
    </main>
  );
};

export default Portfolio;
