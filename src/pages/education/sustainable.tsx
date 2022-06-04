import * as React from "react";
import { graphql, Link as GatsbyLink, useStaticQuery } from "gatsby";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Text,
  Heading,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

type Props = {
  location: Location;
};
// markup
const Sustainable = ({ location }: Props) => {
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
        name: "教育",
        item: site.siteMetadata.siteUrl + "/education/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "持続可能な森林",
        item: site.siteMetadata.siteUrl + "/education/sustainable/",
      },
    ],
  };
  return (
    <Layout>
      <Seo
        PageTitle="持続可能な森林"
        PageDesc="持続可能な森林"
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
              <BreadcrumbItem>
                <BreadcrumbLink as={GatsbyLink} to={"/education/"}>
                  教育
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink as={GatsbyLink} to={"/education/sustainable/"}>
                  持続可能な森林
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Heading fontSize={"5xl"} as="h1">
              持続可能な森林
            </Heading>
          </Container>

          <Container mt={16} maxW="fit-content">
            <Box maxW={"3xl"}>
              <Text mt={5}>
                間伐や除伐を行った後に、特定の地域を設け、その後の新たな植物の生育状況や切り株から発生した萌芽状況を管理・観察し、持続可能な森林となるような活動を行っています。
              </Text>
            </Box>
          </Container>

          <Box as="footer" />
        </Box>
      </Box>
    </Layout>
  );
};

export default Sustainable;
