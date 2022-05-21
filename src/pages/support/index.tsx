import * as React from "react";
import { graphql, Link as GatsbyLink, useStaticQuery } from "gatsby";
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
import Layout from "../../components/layout";
import Seo from "../../components/seo";

type Props = {
  location: Location;
};
// markup
const Support = ({ location }: Props) => {
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
        name: "サポート",
        item: site.siteMetadata.siteUrl + "/support/",
      },
    ],
  };
  return (
    <Layout>
      <Seo
        PageTitle="サポート"
        PageDesc="NPO法人名古屋シティフォレスター俱楽部の共同作業や他の団体協力に関する情報を記載しています。"
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
                <BreadcrumbLink as={GatsbyLink} to={"/support/"}>
                  サポート
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Heading fontSize={"5xl"} as="h1">
              サポート
            </Heading>
          </Container>

          <Container mt={16} maxW="fit-content">
            <Box maxW={"3xl"}>
              <Text mt={5}>
                中部森林管理局及び愛知県県有林事務所と協定書を締結し、国有林２ヶ所（段戸及び定光寺）と県有林１ヶ所（ひざわの森）の間伐などの森林整備や遊歩道整備などのボランティア活動を行うほか、豊田市内の民有林の間伐作業や竹林の除伐作業などのボランティア活動を行っています。
              </Text>
              <Heading mt={16} mb={2} fontSize={"4xl"} as="h2">
                協働作業
              </Heading>
              <Text mt={5}>
                現在、２法人と森林の整備・管理に関する支援協定書を締結し、企業の社員や家族と共に国有林や県有林の整備活動を協働で行っています。
              </Text>
              <Heading mt={16} mb={2} fontSize={"4xl"} as="h2">
                作業補助
              </Heading>
              <Text mt={5}>
                企業が行う植樹等の事業に参加し、植樹場所を確保するための除伐や草刈り・整備などの補助を行い、植樹方法などのアドバイスを行っています。
              </Text>
            </Box>
          </Container>

          <Box as="footer" />
        </Box>
      </Box>
    </Layout>
  );
};

export default Support;
