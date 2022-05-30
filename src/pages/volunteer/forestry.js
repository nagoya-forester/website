import * as React from "react"
import Layout from "../../components/layout"
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Heading,
  Link,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react"
import { ChevronRightIcon } from "@chakra-ui/icons"
import Seo from "../../components/seo"
import { graphql, Link as GatsbyLink, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

// styles

// markup
const Forestry = ({ location }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          siteUrl
        }
      }
    }
  `)
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "森林・林業ボランティア",
    datePublished: "2022-01-01T00:00:00+09:00",
    dateModified: "2022-01-23T05:50:00+09:00",
    author: {
      "@type": "Organization",
      url: site.siteMetadata.siteUrl,
      name: site.siteMetadata.title,
    },
  }
  const schemaBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "ホーム",
        item: site.siteMetadata.siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "ボランティア",
        item: site.siteMetadata.siteUrl + "/volunteer/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "森林・林業ボランティア",
        item: site.siteMetadata.siteUrl + "/volunteer/forestry/",
      },
    ],
  }
  return (
    <Layout>
      <Seo
        pagetitle="森林・林業ボランティア"
        pagedesc="森林・林業ボランティアとは、植樹・下草刈り・間伐・枝打ちをはじめ、森の植生調査や林道整備などを行うボランティアです。活動をする以外にも寄付や森づくりについて考え実践することも立派な森林・林業ボランティア活動です。"
        pagepath={location.pathname}
        schemaMarkup={[schemaBreadcrumb, schema]}
      />

      <Container as="main" maxW={"6xl"} mt={4} mb={10}>
        <Box as="article">
          <Box as="header">
            <Breadcrumb
              mb={3.5}
              spacing="8px"
              separator={<ChevronRightIcon color="gray.500" />}
            >
              <BreadcrumbItem>
                <BreadcrumbLink as={GatsbyLink} to={"/"}>
                  ホーム
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink as={GatsbyLink} to={"/volunteer/"}>
                  ボランティア
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink as={GatsbyLink} to={"/volunteer/forestry/"}>
                  森林・林業ボランティア
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Heading fontSize={"5xl"} as="h1" mb={4}>
              森林・林業ボランティア
            </Heading>
            <Box overflow={"hidden"}>
              <StaticImage
                src="../../images/volunteer/headerb.webp"
                alt="森林・林業ボランティア活動"
                placeholder="blurred"
                layout="constrained"
              />
            </Box>
          </Box>

          <Box maxW={"3xl"} mt={16} mb={2} mx={"auto"}>
            <Heading mt={16} mb={5} fontSize={"4xl"} as="h2">
              森林・林業ボランティアとは
            </Heading>
            <Text mt={5}>
              森林・林業ボランティアとは、主に環境保護を目的としたNPO法人が行っているボランティア活動の一つで、植樹・下草刈り・間伐・枝打ちをはじめ、森の植生調査や林道整備などを行うボランティア活動です。
            </Text>
            <Heading mt={16} mb={5} fontSize={"4xl"} as="h2">
              活動の種類
            </Heading>
            <Text mt={5}>
              森林・林業ボランティア活動を行っている団体は日本国内外に数多くあり、活動内容も様々です。多くの団体で複数の種類の活動が活発に行われています。その活動の一例を紹介します。
            </Text>
            <Heading mt={8} mb={5} fontSize={"3xl"} as="h3">
              1.情報発信
            </Heading>
            <Text mt={5}>
              森林に関する内容はもちろん環境保全活動に関する情報をまとめ様々な環境NPO法人が行っている活動を紹介して環境に関する普及啓発を行う活動です。
            </Text>
            <Heading mt={8} mb={5} fontSize={"3xl"} as="h3">
              2.林業活動
            </Heading>
            <Text mt={5}>
              植樹・下草刈り・間伐・枝打ちをはじめ、森の植生調査や林道整備などを行い地域にあった森林づくりを行う活動です。実際に現場へ入り作業を行う活動です。
            </Text>
            <Heading mt={8} mb={5} fontSize={"3xl"} as="h3">
              3.教育・体験
            </Heading>
            <Text mt={5}>
              一般人を対象とした里山学校や間伐体験を開催して、森林の果たす役割や生態系に配慮した森づくりの在り方やその必要性を学習してもらうと伴に、竹材や間伐材を利用した木づかい体験や安全な伐倒方法と理論を学ぶ間伐体験などの教育活動を行います。
            </Text>
            <Heading mt={8} mb={5} fontSize={"3xl"} as="h3">
              4.調査・研究
            </Heading>
            <Text mt={5}>
              森林面積や植生調査などを行い結果のデータを得る活動です。多くの団体で林業活動の成果を確認するために間伐や除伐を行った後に、特定の地域を設け、その後の新たな植物の生育状況や切り株から発生した萌芽状況を管理・観察し、記録を作成して今後の活動に生かします。
            </Text>
            <Heading mt={16} mb={2} fontSize={"4xl"} as="h2">
              魅力
            </Heading>
            <Text mt={5}>
              森林・林業ボランティア活動に感じる魅力は人それぞれです。休日に豊かな自然を感じリラックスするために活動をする人、健康的な体力づくりのために参加している人など様々です。多くのボランティア団体で体験活動が盛んに行われています。あなたも森で活動する楽しさを見つけてみませんか。
            </Text>
            <Heading mt={16} mb={2} fontSize={"4xl"} as="h2">
              私たちの活動
            </Heading>
            <Text mt={5}>
              私たちNPO法人名古屋シティフォレスター俱楽部が行っている活動の一例です。最新の活動は「
              <Link as={GatsbyLink} to={"/about/record/"} color="blue.500">
                活動記録
              </Link>
              」をご覧ください。
            </Text>
            <UnorderedList my={5} ml={7}>
              <ListItem>森林整備（植樹・下草刈り・間伐・枝打ち等）</ListItem>
              <ListItem>林道整備</ListItem>
              <ListItem>森林斜面崩壊個所での防護柵設置</ListItem>
              <ListItem>植生調査</ListItem>
              <ListItem>ハルリンドウ保護支援活動</ListItem>
              <ListItem>里山学校</ListItem>
              <ListItem>企業ボランティアへの支援活動</ListItem>
              <ListItem>一般募集による体験研修</ListItem>
              <ListItem>自然観察会</ListItem>
            </UnorderedList>
          </Box>

          <Box as="footer" />
        </Box>
      </Container>
    </Layout>
  )
}

export default Forestry
