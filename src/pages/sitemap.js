import * as React from "react"
import Layout from "../components/layout"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Heading,
  SimpleGrid,
  Text,
  Link,
  Stack,
  Box,
} from "@chakra-ui/react"
import { ChevronRightIcon, WarningIcon } from "@chakra-ui/icons"
import Seo from "../components/seo"
import { graphql, Link as GatsbyLink, useStaticQuery } from "gatsby"

// styles

// markup
const Sitemap = ({ location }) => {
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
        name: "サイトマップ",
        item: site.siteMetadata.siteUrl + "/sitemap/",
      },
    ],
  }
  return (
    <Layout>
      <Seo
        pagetitle="サイトマップ"
        pagedesc="NPO法人名古屋シティフォレスター俱楽部のサイトマップを記載しています。各ページの一覧をご覧ください。"
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
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink as={GatsbyLink} to={"/sitemap/"}>
                  サイトマップ
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Heading fontSize={"5xl"} as="h1">
              サイトマップ
            </Heading>
          </Box>

          <Container mt={16} mb={2} maxW={"5xl"}>
            <SimpleGrid
              columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 4 }}
              spacing={10}
            >
              <Stack>
                <Link as={GatsbyLink} to={"/"}>
                  ホーム
                </Link>
                <Link as={GatsbyLink} to={"/privacy-policy/"}>
                  プライバシーポリシー
                </Link>
                <Link as={GatsbyLink} to={"/using/"}>
                  ご利用にあたって
                </Link>
                <Link as={GatsbyLink} to={"/sitemap/"}>
                  サイトマップ
                </Link>
                <Link as={GatsbyLink} to={"/sitemap/"}>
                  <WarningIcon mr={2} color="red.500" />
                  お知らせ
                </Link>
                <Link as={GatsbyLink} to={"/admission/"}>
                  入会案内
                </Link>
                <Link as={GatsbyLink} to={"/contact/"}>
                  お問い合わせ
                </Link>
              </Stack>

              <Stack align={"flex-start"}>
                <Text fontWeight="bold" mb={2}>
                  私達について
                </Text>
                <Link as={GatsbyLink} to={"/about/schedule/"}>
                  活動予定表
                </Link>
                <Link as={GatsbyLink} to={"/about/info/"}>
                  団体情報
                </Link>
                <Link href={"/about/place/"}>活動場所</Link>
                <Link as={GatsbyLink} to={"/about/record/"}>
                  活動記録
                </Link>
              </Stack>

              <Stack align={"flex-start"}>
                <Text fontWeight="bold" mb={2}>
                  ブログ
                </Text>
              </Stack>

              <Stack align={"flex-start"}>
                <Text fontWeight="bold" mb={2}>
                  イベント
                </Text>
                <Link as={GatsbyLink} to={"/event/"}>
                  開催予定イベント
                </Link>
                <Link as={GatsbyLink} to={"/event/"}>
                  過去のイベント
                </Link>
              </Stack>

              <Stack align={"flex-start"}>
                <Text fontWeight="bold" mb={2}>
                  サポート
                </Text>
                <Link as={GatsbyLink} to={"/support/"}>
                  協働作業
                </Link>
                <Link as={GatsbyLink} to={"/support/"}>
                  作業補助
                </Link>
              </Stack>

              <Stack align={"flex-start"}>
                <Text fontWeight="bold" mb={2}>
                  ボランティア
                </Text>
                <Link as={GatsbyLink} to={"/volunteer/forestry/"}>
                  森林・林業ボランティア
                </Link>
                <Link as={GatsbyLink} to={"/volunteer/environment/"}>
                  環境
                </Link>
                <Link as={GatsbyLink} to={"/volunteer/safety/"}>
                  安全について
                </Link>
              </Stack>

              <Stack align={"flex-start"}>
                <Text fontWeight="bold" mb={2}>
                  教育
                </Text>
                <Link as={GatsbyLink} to={"/education/sustainable/"}>
                  持続可能な森林
                </Link>
                <Link as={GatsbyLink} to={"/education/environmental/"}>
                  環境教育
                </Link>
              </Stack>
            </SimpleGrid>
          </Container>

          <Box as="footer" />
        </Box>
      </Container>
    </Layout>
  )
}

export default Sitemap
