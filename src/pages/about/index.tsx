import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Heading,
  Link,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { ChevronRightIcon, LinkIcon } from "@chakra-ui/icons";
import { graphql, Link as GatsbyLink, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

type Props = {
  location: Location;
};
// markup
const About = ({ location }: Props) => {
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
        name: "私たちについて",
        item: site.siteMetadata.siteUrl + "/about/",
      },
    ],
  };
  return (
    <Layout>
      <Seo
        PageTitle="私たちについて"
        PageDesc="NPO法人名古屋シティフォレスター俱楽部の団体についての情報を紹介しています。"
        PagePath={location.pathname}
        PageNoindex={false}
        PageSchema={schema}
      />

      <Box as="main" mt={4} mb={10}>
        <Box as="article">
          <Container as="header" maxW={"7xl"}>
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
                <BreadcrumbLink as={GatsbyLink} to={"/about/"}>
                  私たちについて
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Heading fontSize={"5xl"} as="h1">
              私たちについて
            </Heading>
          </Container>

          <Container maxW={"6xl"} mt={16} mb={2}>
            <Wrap justify="center" spacing={8}>
              <WrapItem>
                <LinkBox w={[20, 32, 40]}>
                  <StaticImage
                    src="../../images/about/schedule-icooon.webp"
                    alt="活動予定表"
                    placeholder="blurred"
                    layout="fullWidth"
                  />
                  <Heading textAlign={"center"} size="md" my="2">
                    <LinkOverlay as={GatsbyLink} to={"/about/schedule/"}>
                      活動予定表
                    </LinkOverlay>
                  </Heading>
                </LinkBox>
              </WrapItem>
              <WrapItem>
                <LinkBox w={[20, 32, 40]}>
                  <StaticImage
                    src="../../images/about/record-icooon.webp"
                    alt="活動記録"
                    placeholder="blurred"
                    layout="fullWidth"
                  />
                  <Heading textAlign={"center"} size="md" my="2">
                    <LinkOverlay as={GatsbyLink} to={"/about/record/"}>
                      活動記録
                    </LinkOverlay>
                  </Heading>
                </LinkBox>
              </WrapItem>
              <WrapItem>
                <LinkBox w={[20, 32, 40]}>
                  <StaticImage
                    src="../../images/about/information-icooon.webp"
                    alt="団体情報"
                    placeholder="blurred"
                    layout="fullWidth"
                  />
                  <Heading textAlign={"center"} size="md" my="2">
                    <LinkOverlay as={GatsbyLink} to={"/about/info/"}>
                      団体情報
                    </LinkOverlay>
                  </Heading>
                </LinkBox>
              </WrapItem>
              <WrapItem>
                <LinkBox w={[20, 32, 40]}>
                  <StaticImage
                    src="../../images/about/location-icooon.webp"
                    alt="活動場所"
                    placeholder="blurred"
                    layout="fullWidth"
                  />
                  <Heading textAlign={"center"} size="md" my="2">
                    <LinkOverlay as={GatsbyLink} to={"/about/place/"}>
                      活動場所
                    </LinkOverlay>
                  </Heading>
                </LinkBox>
              </WrapItem>
            </Wrap>
          </Container>
          <Container maxW={"7xl"} mt={16} mx={"auto"}>
            <SimpleGrid columns={[1, 1, 2]} spacingX="2rem" spacingY="3rem">
              <VStack justify="center" order={[1, 1, 2]}>
                <Heading textAlign="center" fontSize={"3xl"} as="h3">
                  {
                    // FIXME リンク修正
                  }
                  <Link as={GatsbyLink} to={"/about/info/"}>
                    森林の保護と成長
                    <LinkIcon w={5} h={5} color="digital.300" />
                  </Link>
                </Heading>
                <Text>
                  森林の重要性とその必要性を認識し、森林整備活動を通して豊かな森作りを進める活動を行っています。主な活動として・植樹・下草刈り・間伐・枝打ち等を行っています。高い技術力がなければ適切な森林整備を行うことができません。私たちは常に技術の向上を目指し適切な安全管理を行っています。
                </Text>
              </VStack>
              <Box
                w="100%"
                order={[2, 2, 1]}
                rounded={"3xl"}
                overflow={"hidden"}
              >
                <StaticImage
                  src="../../images/about/work_introduction_0.webp"
                  alt="間伐作業"
                  placeholder="blurred"
                  layout="fullWidth"
                />
              </Box>

              <VStack justify="center" order={3}>
                <Heading textAlign="center" fontSize={"3xl"} as="h3">
                  {
                    // FIXME リンク修正
                  }
                  <Link as={GatsbyLink} to={"/about/info/"}>
                    人と森林
                    <LinkIcon w={5} h={5} color="digital.300" />
                  </Link>
                </Heading>
                <Text>
                  人と森林の共生を目指し林道整備や間伐材の利用、チェーンソーアートなど人と森林の共生を目指す活動を行っています。
                </Text>
              </VStack>
              <Box w="100%" order={4} rounded={"3xl"} overflow={"hidden"}>
                <StaticImage
                  src="../../images/about/work_introduction_1.webp"
                  alt="林道"
                  placeholder="blurred"
                  layout="fullWidth"
                />
              </Box>

              <VStack justify="center" order={[5, 5, 6]}>
                <Heading textAlign="center" fontSize={"3xl"} as="h3">
                  {
                    // FIXME リンク修正
                  }
                  <Link as={GatsbyLink} to={"/about/info/"}>
                    森林の理解
                    <LinkIcon w={5} h={5} color="digital.300" />
                  </Link>
                </Heading>
                <Text>
                  森林整備活動のほか、森林の自然観察会や企業へのボランティア活動支援、環境教育の場として里山学校の開催をといった森林の理解を進める活動を行っています。
                </Text>
              </VStack>
              <Box
                w="100%"
                order={[6, 6, 5]}
                rounded={"3xl"}
                overflow={"hidden"}
              >
                <StaticImage
                  src="../../images/about/work_introduction_2.webp"
                  alt="倉庫"
                  placeholder="blurred"
                  layout="fullWidth"
                />
              </Box>
            </SimpleGrid>
          </Container>
          <Box as="footer" />
        </Box>
      </Box>
    </Layout>
  );
};

export default About;
