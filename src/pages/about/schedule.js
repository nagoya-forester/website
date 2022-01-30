import * as React from "react"
import Layout from "../../components/layout"
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Heading,
} from "@chakra-ui/react"
import { ChevronRightIcon } from "@chakra-ui/icons"
import Seo from "../../components/seo"
import { graphql, Link as GatsbyLink, useStaticQuery } from "gatsby"

// styles

// markup
const Schedule = ({ location }) => {
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
        name: "活動予定表",
        item: site.siteMetadata.siteUrl + "/about/schedule/",
      },
    ],
  }
  return (
    <Layout>
      <Seo
        pagetitle="活動予定表"
        pagedesc="NPO法人名古屋シティフォレスター俱楽部の森林ボランティア活動予定を記載しています。"
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
                <BreadcrumbLink as={GatsbyLink} to={"/about/schedule/"}>
                  活動予定表
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Heading fontSize={"5xl"} as="h1">
              活動予定表
            </Heading>
          </Box>

          <Box maxW={"3xl"} mt={16} mb={2} mx={"auto"}>
            <iframe
              src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Asia%2FTokyo&amp;src=dWFpbWY4cHJkOXZyZzRuYTZkYnAyOTE4dThAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%230B8043&amp;mode=AGENDA&amp;showTitle=0&amp;showTz=0&amp;showCalendars=1&amp;showTabs=1&amp;showPrint=1&amp;showDate=1&amp;showNav=1&amp;title=%E6%B4%BB%E5%8B%95%E4%BA%88%E5%AE%9A%E8%A1%A8"
              frameBorder="0"
              scrolling="no"
              width="100%"
              height="600px"
              title="活動予定表"
            />
          </Box>

          <Box as="footer" />
        </Box>
      </Container>
    </Layout>
  )
}

export default Schedule
