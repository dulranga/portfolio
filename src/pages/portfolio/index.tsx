import PortfolioMini from "@components/portfolio-preview";
import { FC } from "react";
import styles from "@styles/pages.module.scss";
import Head from "next/head";
import NextPage from "@components/next-page";
import portfolioData from "@constants/portfolio";

interface PortfolioProps {}

const Portfolio: FC<PortfolioProps> = () => {
  return (
    <main>
      <Head>
        <title>My Creations - Dulranga</title>
        <meta
          name="description"
          content="Websites I created. used several modern technologies and principals"
        />
      </Head>
      <h1>My Latest creations</h1>
      <div className={styles.portfolio_content}>
        {portfolioData.map((card, i) => (
          <PortfolioMini delay={0.1 * i} {...card} key={card.id} />
        ))}
      </div>
      <NextPage link="/reach-me" />
    </main>
  );
};

export default Portfolio;
