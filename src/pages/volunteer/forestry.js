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
            <Text mt={5}>
              森林・林業ボランティアとは、植樹・下草刈り・間伐・枝打ちをはじめ、森の植生調査や林道整備などを行うボランティアです。活動をする以外にも寄付や森づくりについて考え実践することも立派な森林・林業ボランティア活動です。
            </Text>
            <Heading mt={16} mb={2} fontSize={"4xl"} as="h2">
              多様な活動
            </Heading>
            <Text mt={5}>
              各団体や企業が多種多様な活動を行っており、得意分野もそれぞれです。自分が活動したい活動を行っている団体を探してみましょう。
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
