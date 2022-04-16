import * as React from "react";
import { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";
import Seo from "./seo";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";

interface Props {
  children: ReactNode;
}

// markup
const Layout = ({ children }: Props) => {
  return (
    <ChakraProvider theme={theme}>
      <Seo />
      <Header />
      {children}
      <Footer />
    </ChakraProvider>
  );
};

export default Layout;
