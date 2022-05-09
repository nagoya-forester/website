import * as React from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Heading,
  Text,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Link as GatsbyLink } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

// markup
const Using = () => {
  return (
    <Layout>
      <Seo
        PageTitle="ご利用にあたって"
        PageDesc="NPO法人名古屋シティフォレスター俱楽部WEBサイト利用に関する情報を記載しています。"
        PagePath={""}
        PageNoindex={true}
      />

      <Box as="main" mt={4} mb={10}>
        <Box as="article">
          <Container as="header" maxW={"6xl"}>
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
                <BreadcrumbLink as={GatsbyLink} to={"/using/"}>
                  ご利用にあたって
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Heading fontSize={"5xl"} as="h1">
              ご利用にあたって
            </Heading>
          </Container>

          <Container mt={16} maxW="fit-content">
            <Box maxW={"3xl"}>
              <Heading mt={16} mb={2} fontSize={"4xl"} as="h2">
                TLSについて
              </Heading>
              <Text mt={5}>
                当ウェブサイトは利用者の個人情報保護のため、TLS(Transport Layer
                Security)を利用しています。当ウェブサイトは楕円曲線暗号を使用しています。
              </Text>
            </Box>
          </Container>

          <Box as="footer" />
        </Box>
      </Box>
    </Layout>
  );
};

export default Using;
