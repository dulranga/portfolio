import Layout from "@components/layout";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { AppProps, NextWebVitalsMetric } from "next/app";
import Link from "next/link";
import "../styles/animations.scss";
import "../styles/globals.scss";
import "../styles/variables.globals.scss";

const reportWebVitals = (metric: NextWebVitalsMetric) => {
  // console.log(metric);
};

// pat.ns.cloudflare.com
// thaddeus.ns.cloudflare.com

const variants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  enter: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1.2 },
};

const NextApp = ({ Component, pageProps, router }: AppProps) => {
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter initial={false}>
        <motion.div
          variants={variants}
          initial="hidden"
          animate="enter"
          exit="exit"
          key={router.route}
          transition={{ type: "linear", duration: 0.1 }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
};

export { reportWebVitals };
export default NextApp;
