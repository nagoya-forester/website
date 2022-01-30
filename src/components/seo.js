import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Seo = (props) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          lang
          title
          description
          siteUrl
        }
      }
    }
  `)
  //
  const title = props.pagetitle
    ? `${props.pagetitle} | ${site.siteMetadata.title}`
    : site.siteMetadata.title
  const description = props.pagedesc || site.siteMetadata.description
  const url = props.pagepath
    ? `${site.siteMetadata.siteUrl}${props.pagepath}`
    : site.siteMetadata.siteUrl
  const schema = props.schemaMarkup
  //
  return (
    <Helmet>
      {/* common */}
      <html lang={site.siteMetadata.lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {/* schema.org */}
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
      {/* favicon */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#00aba9" />
    </Helmet>
  )
}
export default Seo
