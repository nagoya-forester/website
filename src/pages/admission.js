import * as React from "react"
import Layout from "../components/layout"
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Heading,
  Text,
  Link,
  Button,
} from "@chakra-ui/react"
import { ChevronRightIcon } from "@chakra-ui/icons"
import Seo from "../components/seo"
import { graphql, Link as GatsbyLink, useStaticQuery } from "gatsby"

// styles

// markup
const Admission = ({ location }) => {
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
        name: "入会案内",
        item: site.siteMetadata.siteUrl + "/admission/",
      },
    ],
  }
  return (
    <Layout>
      <Seo
        pagetitle="入会案内"
        pagedesc="NPO法人名古屋シティフォレスター倶楽部の入会案内です。"
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
                <BreadcrumbLink as={GatsbyLink} to={"/admission/"}>
                  入会案内
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Heading fontSize={"5xl"} as="h1">
              入会案内
            </Heading>
          </Box>

          <Box maxW={"3xl"} mt={16} mb={2} mx={"auto"}>
            <Text mt={5}>
              特定非営利活動法人名古屋シティ・フォレスター倶楽部は森林の重要性とその必要性を認識し、森林整備活動を通して豊かな森づくりを進めることを目的とした団体です。
            </Text>
            <Text mt={5}>
              私たちは年に数回、一般の方が参加できるイベント（間伐体験研修・森林環境学習）を行っています。また、その他にも体験参加を随時受け付けております。
            </Text>
            <Text mt={5}>
              私たちの活動に興味があり、活動に参加したい方はお気軽に私どもまでお問い合わせください。
            </Text>
            <Text mt={5}>
              私たちの情報については
              <Link as={GatsbyLink} to={"/about/info/"} color="blue.500">
                団体情報
              </Link>
              ページをご覧ください。
            </Text>
            <Button
              mt="8"
              as={GatsbyLink}
              to={"/contact/"}
              size="lg"
              colorScheme="blue"
              fontWeight="bold"
            >
              お問い合わせ
            </Button>
          </Box>

          <Box as="footer" />
        </Box>
      </Container>
    </Layout>
  )
}

export default Admission
