import { FC } from "react";
import Cursor from "./cursor";
import Footer from "./footer";

interface LayoutProps {}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Cursor />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
