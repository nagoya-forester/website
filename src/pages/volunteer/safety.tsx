import * as React from "react";
import { graphql, Link as GatsbyLink, useStaticQuery } from "gatsby";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Heading,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { CheckIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

type Props = {
  location: Location;
};
// markup
const Safety = ({ location }: Props) => {
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
      {
        "@type": "ListItem",
        position: 3,
        name: "安全について",
        item: site.siteMetadata.siteUrl + "/volunteer/safety/",
      },
    ],
  };
  return (
    <Layout>
      <Seo
        PageTitle="安全について"
        PageDesc="NPO法人名古屋シティフォレスター俱楽部が森林林業ボランティアで行っている安全対策について記載しています。"
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
                <BreadcrumbLink as={GatsbyLink} to={"/volunteer/"}>
                  ボランティア
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink as={GatsbyLink} to={"/volunteer/safety/"}>
                  安全について
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Heading fontSize={"5xl"} as="h1">
              安全について
            </Heading>
          </Container>

          <Container mt={16} maxW="fit-content">
            <Box maxW={"3xl"}>
              <Heading mt={16} mb={5} fontSize={"4xl"} as="h2">
                当倶楽部の安全対策
              </Heading>

              <List spacing={5}>
                <ListItem>
                  <ListIcon as={CheckIcon} color="green.500" />
                  倶楽部員全員がボランティア保険に加入します。
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="green.500" />
                  チェーンソー使用者は別途保険に加入します。
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="green.500" />
                  手鋸、鉈、チェーンソーを使用しますので安全第一で作業します。
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="green.500" />
                  全員がヘルメットを装着し、チェーンソー使用者はチェーンソーパンツを装着します。
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="green.500" />
                  活動前に作業方針などの打ち合わせを行います。
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="green.500" />
                  技術向上のため、毎年、安全・技術研修会を開催しています。
                </ListItem>
              </List>
            </Box>
          </Container>

          <Box as="footer" />
        </Box>
      </Box>
    </Layout>
  );
};

export default Safety;
