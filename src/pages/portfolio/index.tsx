import PortfolioMini from "@components/portfolio-preview";
import { FC } from "react";
import styles from "@styles/pages.module.scss";
import Head from "next/head";
import NextPage from "@components/next-page";

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
      <h1>My BEST creations</h1>
      <div className={styles.portfolio_content}>
        {cards.map((card, i) => (
          <PortfolioMini delay={0.1 * i} {...card} key={card.id} />
        ))}
      </div>
      <NextPage link="/reach-me" />
    </main>
  );
};

const cards = [
  {
    title: "Gaming Marketplace",
    description: "an NFSW games marketplace build with React.js",
    image: "/images/portfolios/spicygaming.jpg",
    id: "spicy-1",
  },
  {
    title: "Gaming Marketplace",
    description: "an NFSW games marketplace build with React.js",
    image: "/images/portfolios/spicygaming.jpg",
    id: "spicy-2",
  },
  {
    title: "Gaming Marketplace",
    description: "an NFSW games marketplace build with React.js",
    image: "/images/portfolios/spicygaming.jpg",
    id: "spicy-3",
  },
  {
    title: "Gaming Marketplace",
    description: "an NFSW games marketplace build with React.js",
    image: "/images/portfolios/spicygaming.jpg",
    id: "spicy-4",
  },
];

export default Portfolio;
