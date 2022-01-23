import { motion, Variants } from "framer-motion";
import { FC, useEffect, useState } from "react";
import Cursor from "./cursor";
import Footer from "./footer";
import Menu from "./menu";
import MouseMove from "./mouse-move";

interface LayoutProps {}

const Layout: FC<LayoutProps> = ({ children }) => {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    setMobile(matchMedia("(max-width: 480px)").matches);
  }, []);

  return (
    <>
      {!mobile && <Cursor />}

      <Menu />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
