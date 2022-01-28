import SocialLink from "@components/social-link";
import { Facebook, GitHub, Mail, Twitter, WhatsApp } from "@material-ui/icons";
import { FC } from "react";

import styles from "@styles/pages.module.scss";
import Head from "next/head";
import Globe from "@components/3D/globe";
import NextPage from "@components/next-page";

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
            link={encodeURI(
              "mailto:dulranga.webdesign@gmail.com?subject=Website Creation&body=Hi, I am interested to create my next website with you! Can we discuss that?"
            )}
          />
          <SocialLink
            label="Github"
            icon={<GitHub htmlColor="#fff" />}
            link="/github"
          />
          <SocialLink
            label="Facebook"
            icon={<Facebook htmlColor="#4267B2" />}
            link="/facebook"
          />
          <SocialLink
            label="Twitter"
            icon={<Twitter htmlColor="#00acee" />}
            link="/twitter"
          />
          <SocialLink
            label="WhatsApp"
            icon={<WhatsApp htmlColor="#25D366" />}
            link="/whatsapp"
          />
        </div>

        <Globe />
      </div>
      <NextPage link="/contact" />
    </main>
  );
};

export default ReachMe;
