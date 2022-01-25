import { GetStaticPaths, GetStaticProps } from "next";
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@styles/portfolio-page.module.scss";
import buttonStyles from "@components/intro/intro.module.scss";

interface CreationsPageProps {
  title: string;
  description: string;
  thumbnail: string;
  link: string;
}

const CreationsPage: FC<CreationsPageProps> = ({
  title,
  description,
  thumbnail,
  link,
}) => {
  return (
    <main className={styles.container}>
      <div className={styles.cover}>
        <Image
          src={thumbnail}
          alt={title}
          width={480}
          height={480}
          objectFit="cover"
        />
      </div>
      <h1>{title}</h1>
      <p className={styles.description}>{description}</p>
      <button className={[buttonStyles.resume, styles.visit].join(" ")}>
        <Link href={link}>
          <a target="_blank" rel="noopener noreferrer">
            Visit
          </a>
        </Link>
      </button>
    </main>
  );
};

export const getStaticProps: GetStaticProps<CreationsPageProps> = () => {
  return {
    props: {
      title: "something",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, ex tempora! Veniam numquam ducimus debitis velit illo obcaecati perspiciatis architecto natus eligendi illum dolore quis, asperiores possimus maiores sed reprehenderit qui totam tempore. Consequatur, libero porro expedita obcaecati asperiores iure?",
      thumbnail: "/images/portfolios/spicygaming.jpg",
      link: "https://www.spicygaming.net",
    },
  };
};
export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export default CreationsPage;
