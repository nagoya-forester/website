import * as React from "react"
import Layout from "../components/layout"
import {
  Alert,
  AlertIcon,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Heading,
  Text,
} from "@chakra-ui/react"
import { ChevronRightIcon } from "@chakra-ui/icons"
import Seo from "../components/seo"
import { graphql, Link as GatsbyLink, useStaticQuery } from "gatsby"

// styles

// markup
const Contact = ({ location }) => {
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
        name: "お問い合わせ",
        item: site.siteMetadata.siteUrl + "/contact/",
      },
    ],
  }
  return (
    <Layout>
      <Seo
        pagetitle="お問い合わせ"
        pagedesc="NPO法人名古屋シティフォレスター俱楽部に関するお問い合わせはこちらからお問い合わせください。"
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
                <BreadcrumbLink as={GatsbyLink} to={"/contact/"}>
                  お問い合わせ
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Heading fontSize={"5xl"} as="h1">
              お問い合わせ
            </Heading>
          </Box>

          <Box maxW={"3xl"} mt={16} mb={2} mx={"auto"}>
            <Heading mt={16} mb={2} fontSize={"4xl"} as="h2">
              直接のお問い合わせ
            </Heading>
            <Alert mt={5} status="warning">
              <AlertIcon />
              2022年6月1日～2022年6月10日まで担当者不在のためお問い合わせに返信できません。
            </Alert>
            <Text mt={5}>mail:</Text>
            <Text mt={5}>ncfc51yamada@gmail.com</Text>
            <Text mt={5}>理事長 山田 均</Text>
          </Box>

          <Box as="footer" />
        </Box>
      </Container>
    </Layout>
  )
}

export default Contact
