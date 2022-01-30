import * as React from "react"
import Seo from "../components/seo"
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Container,
  Heading,
  Text,
} from "@chakra-ui/react"
import { ChevronRightIcon } from "@chakra-ui/icons"
import Layout from "../components/layout"
import { Link as GatsbyLink } from "gatsby"
// styles

// markup
const NotFoundPage = ({ location }) => {
  return (
    <Layout>
      <Seo pagetitle="404 Not Found" pagepath={location.pathname} />

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
                <BreadcrumbLink as={GatsbyLink} to={"/404/"}>
                  404 Not Found
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Heading fontSize={"5xl"} as="h1">
              404 Not Found
            </Heading>
          </Box>

          <Box maxW={"3xl"} mt={16} mb={2} mx={"auto"}>
            <Heading mt={16} mb={2} fontSize={"4xl"} as="h2">
              ページが見つかりません
            </Heading>
            <Text mt={5}>
              いつもNPO法人名古屋シティフォレスター俱楽部ウェブサイトをご利用いただきありがとうございます。
              <br />
              アクセスしようとしたURLが変更されているため、見つけることができません。
              <br />
              お手数ですが、以下の方法でページをお探しください。
            </Text>
            <Heading mt={16} mb={2} fontSize={"4xl"} as="h2">
              サイト内検索で探す
            </Heading>
            <Heading mt={16} mb={2} fontSize={"4xl"} as="h2">
              サイトマップで探す
            </Heading>
            <Button
              mt={5}
              as={GatsbyLink}
              to={"/sitemap/"}
              size="lg"
              colorScheme="blue"
              fontWeight="bold"
            >
              サイトマップ
            </Button>
          </Box>

          <Box as="footer" />
        </Box>
      </Container>
    </Layout>
  )
}

export default NotFoundPage
