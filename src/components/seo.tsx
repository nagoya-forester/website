import * as React from "react";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

type Props = {
  PageTitle: string;
  PageDesc: string;
  PagePath: string;
  PageNoindex: boolean;
};

const Seo = (props: Props) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          lang
          title
          description
          siteUrl
          locale
        }
      }
    }
  `);
  const title = props.PageTitle
    ? `${props.PageTitle} | ${data.site.siteMetadata.title}`
    : data.site.siteMetadata.title;
  const description = props.PageDesc || data.site.siteMetadata.description;
  const url = props.PagePath
    ? `${data.site.siteMetadata.siteUrl}${props.PagePath}`
    : data.site.siteMetadata.siteUrl;
  const noindex = props.PageNoindex;
  return (
    <Helmet>
      {/* common */}
      <html lang={data.site.siteMetadata.lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {/* index */}
      {noindex && <meta name="robots" content="noindex" />}
      {/* OGP */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={data.site.siteMetadata.title} />
      <meta property="og:locale" content={data.site.siteMetadata.locale} />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={url} />
      <meta property="og:description" content={description} />
    </Helmet>
  );
};

export default Seo;
