import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Heading,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Tr,
} from "@chakra-ui/react"
import { ChevronRightIcon } from "@chakra-ui/icons"
import { graphql, Link as GatsbyLink, useStaticQuery } from "gatsby"
// styles

// markup
const Info = ({ location }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `)
  const schema = {
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
        name: "私たちについて",
        item: site.siteMetadata.siteUrl + "/about/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "団体情報",
        item: site.siteMetadata.siteUrl + "/about/info/",
      },
    ],
  }
  return (
    <Layout>
      <Seo
        pagetitle="団体情報"
        pagedesc="NPO法人名古屋シティフォレスター俱楽部の法人情報や団体の概要を紹介しています。"
        pagepath={location.pathname}
        schemaMarkup={schema}
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
                <BreadcrumbLink as={GatsbyLink} to={"/about/"}>
                  私たちについて
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink as={GatsbyLink} to={"/about/info/"}>
                  団体情報
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Heading fontSize={"5xl"} as="h1">
              団体情報
            </Heading>
          </Box>

          <Box maxW={"3xl"} mt={16} mb={2} mx={"auto"}>
            <Heading mt={16} mb={2} fontSize={"4xl"} as="h2">
              法人情報
            </Heading>

            <Table variant="simple">
              <Tbody>
                <Tr>
                  <Th>名称</Th>
                  <Td>特定非営利活動法人名古屋シティ・フォレスター俱楽部</Td>
                </Tr>
                <Tr>
                  <Th>主たる事務所</Th>
                  <Td>愛知県名古屋市緑区潮見が丘三丁目57番地</Td>
                </Tr>
                <Tr>
                  <Th>代表者氏名</Th>
                  <Td>山田均</Td>
                </Tr>
                <Tr>
                  <Th>設立認証年月日</Th>
                  <Td>2011年03月11日</Td>
                </Tr>
              </Tbody>
            </Table>

            <Heading mt={16} mb={2} fontSize={"4xl"} as="h2">
              倶楽部の概要
            </Heading>
            <Text mt={5}>
              当倶楽部は、森林の重要性とその必要性を認識し、森林整備活動を通して豊かな森づくりを進めることを目的とした団体です。
            </Text>
            <Text mt={5}>
              平成１２年に設立し、平成２３年３月にＮＰＯ法人として認証されました。
            </Text>
            <Text mt={5}>
              平成２７年には、国有林を管理する林野庁から感謝状を頂きました。
            </Text>
            <Text mt={5}>
              令和２年５月現在の倶楽部員は３０名です。４０代から７０年代まで幅広い年齢構成となっています。ご夫婦で活動に参加されている方もおられます。
            </Text>
            <Text mt={5}>
              年間活動日数は約４６日程度を予定しています。月平均で週末が２～３日、平日が２日です。ご都合の良い日に参加できます。
            </Text>
            <Text mt={5}>
              年会費は３,０００円です。（親睦イベント時には実費を頂く場合があります。）
            </Text>
          </Box>

          <Box as="footer" />
        </Box>
      </Container>
    </Layout>
  )
}

export default Info
