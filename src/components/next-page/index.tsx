import { ChevronRight } from "@material-ui/icons";
import Link from "next/link";
import { FC } from "react";
import styles from "./next-page.module.scss";

interface NextPageProps {
  link: string;
}

const NextPage: FC<NextPageProps> = ({ link }) => {
  return (
    <div className={styles.actions}>
      <button className={styles.skipper}>
        <Link href={link}>
          <ChevronRight />
        </Link>
      </button>
    </div>
  );
};

export default NextPage;
