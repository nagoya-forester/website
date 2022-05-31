import * as React from "react";
import Layout from "../components/layout";
import { graphql, Link as GatsbyLink, useStaticQuery } from "gatsby";
import Seo from "../components/seo";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Text,
  Heading,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

type Props = {
  location: Location;
};
// markup
const Contact = ({ location }: Props) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `);
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
  };
  return (
    <Layout>
      <Seo
        PageTitle="お問い合わせ"
        PageDesc="NPO法人名古屋シティフォレスター俱楽部に関するお問い合わせはこちらからお問い合わせください。"
        PagePath={location.pathname}
        PageNoindex={false}
        PageSchema={schema}
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
                <BreadcrumbLink as={GatsbyLink} to={"/contact/"}>
                  お問い合わせ
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Heading fontSize={"5xl"} as="h1">
              お問い合わせ
            </Heading>
          </Container>

          <Container mt={16} maxW="fit-content">
            <Box maxW={"3xl"}>
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
          </Container>
          <Box as="footer" />
        </Box>
      </Box>
    </Layout>
  );
};

export default Contact;
