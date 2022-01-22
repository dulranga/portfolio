import Image from "next/image";
import React, { FC } from "react";
import styles from "./intro.module.scss";
import photo from "@assets/photo.png";

interface IntroProps {}

const Intro = React.forwardRef<HTMLElement>(({}: IntroProps, ref) => {
  return (
    <section className={styles.container} ref={ref}>
      <div className={styles.cover}>
        <Image
          src={photo}
          alt="Dulranga Dhawanitha"
          width={300}
          height={400}
          blurDataURL={photo.blurDataURL}
          objectFit="contain"
        />
      </div>
      <div className={styles.content}>
        <div>
          <p>I am</p>
          <h1>Dulranga Dhawanitha</h1>
          <p>
            <small>
              a Frontend developer with 3+ years of experience with
              responsiveness, animations, bugs etc
            </small>
          </p>
        </div>

        <button className={styles.resume}>
          <a
            href="/CV.pdf"
            download="dulranga-cv"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Resume
          </a>
        </button>
      </div>
    </section>
  );
});

export default Intro;
