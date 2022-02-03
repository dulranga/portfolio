import { FC, useEffect, useState } from "react";
import ThreeD from "./3D";
import Cursor from "./cursor";
import Footer from "./footer";
import Menu from "./menu";

interface LayoutProps {}

const Layout: FC<LayoutProps> = ({ children }) => {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    setMobile(matchMedia("(max-width: 840px)").matches);
  }, []);

  return (
    <>
      {!mobile && <Cursor />}

      <Menu />
      {children}
      <Footer />
      <ThreeD />
    </>
  );
};

export default Layout;
