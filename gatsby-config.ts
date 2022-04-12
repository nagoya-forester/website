import type { GatsbyConfig } from "gatsby";
/* eslint @typescript-eslint/no-var-requires: "off" */
require("dotenv").config({
  path: `.env.local`,
});
const config: GatsbyConfig = {
  siteMetadata: {
    title: "NPO法人 名古屋シティフォレスター倶楽部",
    description:
      "あなたの近くに森はありますか？森が私達の活動場所です。NPO法人名古屋シティフォレスター倶楽部では2000年の発足以来２０年間メンバーと共に森林整備活動や森林・林業ボランティア活動を行っています。あなたもぜひ活動に加わり「緑を守り育てる」第一歩を踏み出しませんか？",
    siteUrl: process.env.SITE_URL,
    lang: "ja",
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
  ],
};

export default config;
