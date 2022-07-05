// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config({
  path: `.env.local`,
});

import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "NPO法人名古屋シティフォレスター倶楽部",
    description:
      "あなたの近くに森はありますか？森が私達の活動場所です。NPO法人名古屋シティフォレスター倶楽部では2000年の発足以来２０年間メンバーと共に森林整備活動や森林・林業ボランティア活動を行っています。あなたもぜひ活動に加わり「緑を守り育てる」第一歩を踏み出しませんか？",
    siteUrl: process.env.SITE_URL,
    lang: "ja",
    locale: "ja_JP",
  },
  plugins: [
    `gatsby-plugin-typegen`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        resetCSS: true,
        isUsingColorMode: false,
      },
    },
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: process.env.API_URL,
        apiBase: `jsonapi`,
        concurrentFileRequests: 100,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `NPO法人名古屋シティフォレスター倶楽部`,
        short_name: `NCFC`,
        start_url: `/`,
        background_color: `#ffffff`,
        description: `あなたの近くに森はありますか？森が私達の活動場所です。NPO法人名古屋シティフォレスター倶楽部では2000年の発足以来２０年間メンバーと共に森林整備活動や森林・林業ボランティア活動を行っています。あなたもぜひ活動に加わり「緑を守り育てる」第一歩を踏み出しませんか？`,
        lang: `ja`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icons: [
          {
            src: `/maskable_icon_x512.png`,
            sizes: `512x512`,
            type: `image/png`,
            purpose: "maskable",
          },
          {
            src: `/icon-192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/icon-512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
  ],
};

export default config;
