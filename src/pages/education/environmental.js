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
const Environmental = ({ location }) => {
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
        name: "教育",
        item: site.siteMetadata.siteUrl + "/education/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "環境教育",
        item: site.siteMetadata.siteUrl + "/education/environmental/",
      },
    ],
  }
  return (
    <Layout>
      <Seo
        pagetitle="環境教育"
        pagedesc="環境教育"
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
                <BreadcrumbLink as={GatsbyLink} to={"/education/"}>
                  教育
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink
                  as={GatsbyLink}
                  to={"/education/environmental/"}
                >
                  環境教育
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Heading fontSize={"5xl"} as="h1">
              環境教育
            </Heading>
          </Box>

          <Box maxW={"3xl"} mt={16} mb={2} mx={"auto"}>
            <Text mt={5}>
              一般人を対象とした里山学校や間伐体験を開催して、森林の果たす役割や生態系に配慮した森づくりの在り方やその必要性を学習してもらうと伴に、竹材や間伐材を利用した木づかい体験や安全な伐倒方法と理論を学ぶ間伐体験を行っています。
            </Text>
          </Box>

          <Box as="footer" />
        </Box>
      </Container>
    </Layout>
  )
}

export default Environmental
