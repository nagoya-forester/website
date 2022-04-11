import * as React from "react";
import Header from "./header";
import Footer from "./footer";
import { ReactNode } from "react";
interface Props {
  children: ReactNode;
}

// markup
const Layout = ({ children }: Props) => {
  return (
    <>
      <>
        <Header />
        {children}
        <Footer />
      </>
    </>
  );
};

export default Layout;
