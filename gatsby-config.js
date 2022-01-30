require("dotenv").config({
  path: `.env.local`,
})
module.exports = {
  siteMetadata: {
    title: "NPO法人 名古屋シティフォレスター倶楽部",
    description:
      "あなたの近くに森はありますか？森が私達の活動場所です。NPO法人 名古屋シティフォレスター倶楽部では2000年の発足以来２０年間メンバーと共に森林整備活動や森林・林業ボランティア活動を行っています。あなたもぜひ活動に加わり「緑を守り育てる」第一歩を踏み出しませんか？",
    siteUrl: process.env.SITE_URL, // No trailing slash allowed!
    lang: "ja",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    "@chakra-ui/gatsby-plugin",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: process.env.API_URL,
        apiBase: `jsonapi`, // optional, defaults to `jsonapi`
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `NPO法人 名古屋シティフォレスター倶楽部`,
        short_name: `NCFC`,
        start_url: `/`,
        background_color: `#ffffff`,
        description: `あなたの近くに森はありますか？森が私達の活動場所です。NPO法人 名古屋シティフォレスター倶楽部では2000年の発足以来２０年間メンバーと共に森林整備活動や森林・林業ボランティア活動を行っています。あなたもぜひ活動に加わり「緑を守り育てる」第一歩を踏み出しませんか？`,
        lang: `ja`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icons: [
          {
            src: `/maskable_icon.png`,
            sizes: `512x512`,
            type: `image/png`,
            purpose: "maskable",
          },
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-lodash`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-preact`,
  ],
}
