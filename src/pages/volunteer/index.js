import * as React from "react"
import Layout from "../../components/layout"
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Heading,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"
import { ChevronRightIcon } from "@chakra-ui/icons"
import Seo from "../../components/seo"
import { graphql, Link as GatsbyLink, useStaticQuery } from "gatsby"
// styles

// markup
const Volunteer = ({ location }) => {
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
    ],
  }
  return (
    <Layout>
      <Seo
        pagetitle="ボランティア"
        pagedesc="NPO法人名古屋シティフォレスター俱楽部の森林整備や林業ボランティア間伐ボランティア活動について紹介しています。"
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
                <BreadcrumbLink as={GatsbyLink} to={"/volunteer/"}>
                  ボランティア
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Heading fontSize={"5xl"} as="h1">
              ボランティア
            </Heading>
          </Box>

          <Box maxW={"3xl"} mt={16} mb={2} mx={"auto"}>
            <Stack direction={"column"} spacing={8} mt={16}>
              <LinkBox
                as="article"
                p="5"
                borderWidth="2px"
                rounded="md"
                backgroundColor={useColorModeValue("gray.100", "gray.700")}
              >
                <Heading my="2">
                  <LinkOverlay as={GatsbyLink} to={"/volunteer/forestry/"}>
                    森林・林業ボランティア
                  </LinkOverlay>
                </Heading>
                <Text>
                  -------------------------------------------------------------------------
                </Text>
              </LinkBox>

              <LinkBox
                as="article"
                p="5"
                borderWidth="2px"
                rounded="md"
                backgroundColor={useColorModeValue("gray.100", "gray.700")}
              >
                <Heading my="2">
                  <LinkOverlay as={GatsbyLink} to={"/volunteer/environment/"}>
                    環境
                  </LinkOverlay>
                </Heading>
                <Text>
                  -------------------------------------------------------------------------
                </Text>
              </LinkBox>

              <LinkBox
                as="article"
                p="5"
                borderWidth="2px"
                rounded="md"
                backgroundColor={useColorModeValue("gray.100", "gray.700")}
              >
                <Heading my="2">
                  <LinkOverlay as={GatsbyLink} to={"/volunteer/safety/"}>
                    安全について
                  </LinkOverlay>
                </Heading>
                <Text>
                  NPO法人名古屋シティフォレスター俱楽部の安全対策について記載しています。
                </Text>
              </LinkBox>
            </Stack>
          </Box>

          <Box as="footer" />
        </Box>
      </Container>
    </Layout>
  )
}

export default Volunteer
