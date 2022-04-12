import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Helmet } from "react-helmet";
// query
const { site } = useStaticQuery<GatsbyTypes.SEOQuery>(graphql`
  query SEO {
    site {
      siteMetadata {
        lang
        title
        description
        siteUrl
      }
    }
  }
`);
type SEO = {
  PageTitle: string;
};

// markup
const Seo = (props: SEO) => {
  const title = props.PageTitle
    ? `${props.PageTitle} | ${site?.siteMetadata?.title}`
    : site?.siteMetadata?.title;
  return (
    <Helmet>
      {/* common */}
      <html lang={site?.siteMetadata?.lang} />
      <title>{title}</title>
    </Helmet>
  );
};

export default Seo;
