import { ChevronRight } from "@material-ui/icons";
import Link from "next/link";
import { FC } from "react";
import styles from "./next-page.module.scss";

interface NextPageProps {
  link: string;
  label?: string;
}

const NextPage: FC<NextPageProps> = ({ link, label }) => {
  return (
    <div className={styles.actions}>
      <Link href={link}>
        <a>
          <button className={styles.skipper}>
            <ChevronRight />
            {label && (
              <div
                aria-label={`Go to ${label} details page`}
                className={styles.label}
              >
                {label}
              </div>
            )}
          </button>
        </a>
      </Link>
    </div>
  );
};

export default NextPage;
