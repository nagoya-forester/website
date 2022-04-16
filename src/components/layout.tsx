import * as React from "react";
import { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";
import Seo from "./seo";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import { Global } from "@emotion/react";
import GlobalStyles from "../theme/styles";

interface Props {
  children: ReactNode;
}

// markup
const Layout = ({ children }: Props) => {
  return (
    <ChakraProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <Seo PageTitle={""} PageDesc={""} PagePath={""} />
      <Header />
      {children}
      <Footer />
    </ChakraProvider>
  );
};

export default Layout;
