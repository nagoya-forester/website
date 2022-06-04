import * as React from "react";
import { graphql, Link as GatsbyLink, useStaticQuery } from "gatsby";
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
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

type Props = {
  location: Location;
};
// markup
const Volunteer = ({ location }: Props) => {
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
        name: "ボランティア",
        item: site.siteMetadata.siteUrl + "/volunteer/",
      },
    ],
  };
  return (
    <Layout>
      <Seo
        PageTitle="ボランティア"
        PageDesc="NPO法人名古屋シティフォレスター俱楽部の森林整備や林業ボランティア間伐ボランティア活動について紹介しています。"
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
                <BreadcrumbLink as={GatsbyLink} to={"/volunteer/"}>
                  ボランティア
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Heading fontSize={"5xl"} as="h1">
              ボランティア
            </Heading>
          </Container>

          <Container mt={16} maxW="fit-content">
            <Box maxW={"3xl"}>
              <Stack direction={"column"} spacing={8} mt={16}>
                <LinkBox
                  as="article"
                  p="5"
                  borderWidth="2px"
                  rounded="md"
                  backgroundColor={"gray.100"}
                >
                  <Heading my="2">
                    <LinkOverlay as={GatsbyLink} to={"/volunteer/forestry/"}>
                      森林・林業ボランティア
                    </LinkOverlay>
                  </Heading>
                  <Text>
                    森林・林業ボランティアとは、植樹・下草刈り・間伐・枝打ちをはじめ、森の植生調査や林道整備などを行うボランティアです。
                  </Text>
                </LinkBox>

                <LinkBox
                  as="article"
                  p="5"
                  borderWidth="2px"
                  rounded="md"
                  backgroundColor={"gray.100"}
                >
                  <Heading my="2">
                    <LinkOverlay as={GatsbyLink} to={"/volunteer/environment/"}>
                      環境ボランティア
                    </LinkOverlay>
                  </Heading>
                  <Text>
                    豊田市内の自治体が行う地域の花や緑の育成・整備活動に参加し、その一環として除伐や間伐などの活動を行っています。
                  </Text>
                </LinkBox>

                <LinkBox
                  as="article"
                  p="5"
                  borderWidth="2px"
                  rounded="md"
                  backgroundColor={"gray.100"}
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
          </Container>

          <Box as="footer" />
        </Box>
      </Box>
    </Layout>
  );
};

export default Volunteer;
