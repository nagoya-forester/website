import * as React from "react"
import Layout from "../../components/layout"
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Heading,
  Text,
} from "@chakra-ui/react"
import { ChevronRightIcon } from "@chakra-ui/icons"
import Seo from "../../components/seo"
import { graphql, Link as GatsbyLink, useStaticQuery } from "gatsby"

// styles

// markup
const Environment = ({ location }) => {
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
        name: "ボランティア",
        item: site.siteMetadata.siteUrl + "/volunteer/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "環境",
        item: site.siteMetadata.siteUrl + "/volunteer/environment/",
      },
    ],
  }
  return (
    <Layout>
      <Seo
        pagetitle="環境"
        pagedesc="環境ページ"
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
                <BreadcrumbLink as={GatsbyLink} to={"/volunteer/"}>
                  ボランティア
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink as={GatsbyLink} to={"/volunteer/environment/"}>
                  環境
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Heading fontSize={"5xl"} as="h1">
              環境
            </Heading>
          </Box>

          <Box maxW={"3xl"} mt={16} mb={2} mx={"auto"}>
            <Text mt={5}>
              豊田市内の自治体が行う地域の花や緑の育成・整備活動に参加し、その一環として除伐や間伐などの活動を行っています。
            </Text>
          </Box>

          <Box as="footer" />
        </Box>
      </Container>
    </Layout>
  )
}

export default Environment
