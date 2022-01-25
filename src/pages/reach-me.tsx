import SocialLink from "@components/social-link";
import { Facebook, GitHub, Mail, Twitter, WhatsApp } from "@material-ui/icons";
import { FC } from "react";

import styles from "@styles/pages.module.scss";
import Head from "next/head";
import Globe from "@components/3D/globe";

interface ReachMeProps {}

const ReachMe: FC<ReachMeProps> = () => {
  return (
    <main>
      <Head>
        <title>Reach Me - Dulranga</title>
        <meta
          name="description"
          content="I am available in social-media. Leave a msg to start working for a brand new amazing website"
        />
      </Head>

      <h1>Reach Me</h1>
      <div className={styles.reach_me}>
        <div>
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

        <Globe />
      </div>
    </main>
  );
};

export default ReachMe;
