import { GetStaticPaths, GetStaticProps } from "next";
import { FC, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@styles/portfolio-page.module.scss";
import buttonStyles from "@components/intro/intro.module.scss";
import portfolioData from "@constants/portfolio";
import { Portfolio } from "@interfaces/portfolio";
import NextPage from "@components/next-page";
import Head from "next/head";

const CreationsPage: FC<Portfolio> = (props) => {
  const { title, description, image, link, id, short_description } = props;

  const next = useMemo(() => {
    const currentIndex = portfolioData.findIndex((item) => item.id === id);
    if (currentIndex + 1 < portfolioData.length) return currentIndex + 1;
    return null;
  }, [id]);

  return (
    <main className={styles.container}>
      <Head>
        <title>{title} - Dulranga.ml</title>
        <meta name="description" content={short_description} />
        <meta name="twitter:site" content="@dulrangaD" />
        <meta property="og:url" content="https://dulranga.ml" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${title} - Dulranga.ml`} />
        <meta property="og:description" content={short_description} />
        <meta property="og:image" content={image} />
        <meta property="og:image:width" content="880" />
        <meta property="og:image:height" content="660" />
      </Head>
      <div className={styles.cover}>
        <Image
          src={image}
          alt={title}
          width={480}
          height={480}
          objectFit="cover"
        />
      </div>
      <h1>{title}</h1>
      <p className={styles.description}>{description}</p>
      {link && (
        <button className={[buttonStyles.resume, styles.visit].join(" ")}>
          <Link href={link}>
            <a target="_blank" rel="noopener noreferrer">
              Visit
            </a>
          </Link>
        </button>
      )}

      {next && (
        <NextPage
          link={`./${portfolioData[next].id}`}
          label={portfolioData[next].title}
        />
      )}
    </main>
  );
};

export const getStaticProps: GetStaticProps<Portfolio> = (ctx) => {
  const { name } = ctx.params!;

  const page = portfolioData.find((portfolio) => portfolio.id === name);

  if (!page) return { notFound: true };

  return {
    props: {
      ...page,
    },
  };
};
export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: portfolioData.map((portfolio) => ({
      params: { name: portfolio.id },
    })),
    fallback: "blocking",
  };
};

export default CreationsPage;
