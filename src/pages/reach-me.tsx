import SocialLink from "@components/social-link";
import { Facebook, GitHub, Mail, Twitter, WhatsApp } from "@material-ui/icons";
import { FC } from "react";

import styles from "@styles/pages.module.scss";
import Head from "next/head";

interface ReachMeProps {}

const ReachMe: FC<ReachMeProps> = () => {
  return (
    <main className={styles.reach_me}>
      <Head>
        <title>Reach Me - Dulranga</title>
        <meta
          name="description"
          content="I am available in social-media. Leave a msg to start working for a brand new amazing website"
        />
      </Head>
      <div>
        <h1>Reach Me</h1>
        <SocialLink
          label="Email"
          icon={<Mail htmlColor="#fff" />}
          link="/github"
        />
        <SocialLink
          label="Github"
          icon={<GitHub htmlColor="#fff" />}
          link="/github"
        />
        <SocialLink
          label="Facebook"
          icon={<Facebook htmlColor="#4267B2" />}
          link="/github"
        />
        <SocialLink
          label="Twitter"
          icon={<Twitter htmlColor="#00acee" />}
          link="/github"
        />
        <SocialLink
          label="WhatsApp"
          icon={<WhatsApp htmlColor="#25D366" />}
          link="/github"
        />
      </div>
      <h1>globe</h1>
    </main>
  );
};

export default ReachMe;
