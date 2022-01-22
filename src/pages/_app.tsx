import Layout from "@components/layout";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { AppProps, NextWebVitalsMetric } from "next/app";
import "../styles/animations.scss";
import "../styles/globals.scss";
import "../styles/variables.globals.scss";

const reportWebVitals = (metric: NextWebVitalsMetric) => {
  // console.log(metric);
};

// pat.ns.cloudflare.com
// thaddeus.ns.cloudflare.com

const variants: Variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, y: -200 },
};

const NextApp = ({ Component, pageProps, router }: AppProps) => {
  console.log(router.route);
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          variants={variants}
          initial="hidden"
          animate="enter"
          exit="exit"
          key={router.route}
          transition={{ type: "linear", duration: 0.5 }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
};

export { reportWebVitals };
export default NextApp;
