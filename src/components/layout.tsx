import * as React from "react";
import { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";
import Seo from "./seo";

interface Props {
  children: ReactNode;
}

// markup
const Layout = ({ children }: Props) => {
  return (
    <>
      <Seo />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
