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
  Heading,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

type Props = {
  location: Location;
};
// markup
const PrivacyPolicy = ({ location }: Props) => {
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
        name: "プライバシーポリシー",
        item: site.siteMetadata.siteUrl + "/privacy-policy/",
      },
    ],
  };
  return (
    <Layout>
      <Seo
        PageTitle="プライバシーポリシー"
        PageDesc="NPO法人名古屋シティフォレスター俱楽部のプライバシーポリシーを記載しており弊倶楽部の個人情報の取得や利用方法について記載しています。"
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
                <BreadcrumbLink as={GatsbyLink} to={"/privacy-policy/"}>
                  プライバシーポリシー
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Heading fontSize={"5xl"} as="h1">
              プライバシーポリシー
            </Heading>
          </Container>
          {
            // FIXME ここにプライバシーポリシーを追加
          }
          <Container mt={16} maxW="fit-content">
            <Box maxW={"3xl"}></Box>
          </Container>

          <Box as="footer" />
        </Box>
      </Box>
    </Layout>
  );
};

export default PrivacyPolicy;
