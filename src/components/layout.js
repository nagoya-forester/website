import * as React from "react"
import Header from "./header"
import Footer from "./footer"
import { Global, css } from "@emotion/react"
import "focus-visible/dist/focus-visible"
import Seo from "./seo"

// styles
const GlobalStyles = css`
  /*
    This will hide the focus indicator if the element receives focus    via the mouse,
    but it will still show up on keyboard focus.
  */
  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }
`

// markup
const Layout = ({ children }) => {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Seo />
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
