import * as React from "react";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

type Props = {
  PageTitle: string;
  PageDesc: string;
  PagePath: string;
  PageNoindex: boolean;
  PageSchema: any;
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
  const PageSchema = props.PageSchema;
  const default_schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: data.site.siteMetadata.title,
    url: data.site.siteMetadata.siteUrl,
    logo: data.site.siteMetadata.siteUrl + "/icon-512.png",
    sameAs: data.site.siteMetadata.siteUrl,
  };
  //
  return (
    <Helmet>
      {/* common */}
      <html lang={data.site.siteMetadata.lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {/* index */}
      {noindex && <meta name="robots" content="noindex" />}
      {/* schema.org */}
      <script type="application/ld+json">
        {JSON.stringify(default_schema)}
      </script>
      <script type="application/ld+json">{JSON.stringify(PageSchema)}</script>
      {/* OGP */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={data.site.siteMetadata.title} />
      <meta property="og:locale" content={data.site.siteMetadata.locale} />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={url} />
      <meta property="og:description" content={description} />
      {/* favicon */}
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    </Helmet>
  );
};

export default Seo;
