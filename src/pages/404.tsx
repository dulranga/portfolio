import { FC } from "react";
import styles from "@styles/error.module.scss";
import Link from "next/link";

interface Error404Props {}

const Error404: FC<Error404Props> = () => {
  return (
    <main className={styles.container}>
      <h1>Oops!</h1>
      <p>This page is 404 (not found)</p>
      <p>
        You should go to{" "}
        <Link href={"/home"}>
          <a>home</a>
        </Link>{" "}
        before someone see 🤫
      </p>
    </main>
  );
};

export default Error404;
