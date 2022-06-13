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
  SimpleGrid,
  Stack,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
} from "@chakra-ui/react";
import { CalendarIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

// query
export const query = graphql`
  query EventIndex {
    allNodeEvent(sort: { fields: field_start_time, order: DESC }) {
      edges {
        node {
          drupal_id
          id
          title
          ufl: drupal_internal__nid
          field_start_time(formatString: "YYYY年MM月DD日HH時mm分")
          field_end_time(formatString: "YYYY年MM月DD日HH時mm分")
          field_image {
            alt
          }
          field_location
          relationships {
            field_image {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    layout: FULL_WIDTH
                    formats: WEBP
                    aspectRatio: 1.618
                    placeholder: BLURRED
                    transformOptions: { fit: COVER }
                  )
                }
              }
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;
type Props = {
  data: GatsbyTypes.EventIndexQuery;
  location: Location;
};
// markup
const Event = ({ location, data }: Props) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "ホーム",
        item: data.site?.siteMetadata?.siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "イベント",
        item: data.site?.siteMetadata?.siteUrl + "/event/",
      },
    ],
  };
  return (
    <Layout>
      <Seo
        PageTitle="イベント"
        PageDesc="NPO法人名古屋シティフォレスター倶楽部のイベント、植樹・下草刈り・間伐・枝打ちなど森林ボランティアの一般参加体験会などの開催情報や申し込み方法を記載しています。"
        PagePath={location.pathname}
        PageNoindex={false}
        PageSchema={schema}
      />

      <Box as="main" mt={4} mb={10}>
        <Box>
          <Container maxW={"8xl"}>
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
                <BreadcrumbLink as={GatsbyLink} to={"/event/"}>
                  イベント
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Heading fontSize={"5xl"} as="h1">
              イベント
            </Heading>
          </Container>

          <Container mt={16} maxW="8xl">
            <Heading mt={16} mb={5} fontSize={"4xl"} as="h2">
              開催予定イベント
            </Heading>
            <LinkBox mx={"auto"} maxW={"5xl"} as="article">
              <Stack direction={["column", "column", "row"]} spacing={5}>
                <Box mx={"auto"} overflow={"hidden"} rounded={"xl"}>
                  <StaticImage
                    src="../../images/event/20220723-1.webp"
                    alt="NoImage"
                    aspectRatio={1.618}
                    placeholder="blurred"
                    layout="constrained"
                  />
                </Box>
                <Box mx={"auto"} maxW={["100%", "100%", "50%"]}>
                  <Heading as="h2" mt={[3, 3, 4]} fontSize="xl">
                    <LinkOverlay as={GatsbyLink} to={`/event/20220723/`}>
                      里山学校「森林環境学習と体験」第15回
                    </LinkOverlay>
                  </Heading>
                  <Stack mt={5} direction={["column", "row", "row", "row"]}>
                    <Tag minW="78px">
                      <TagLeftIcon boxSize="12px" as={CalendarIcon} />
                      <TagLabel>日時</TagLabel>
                    </Tag>
                    <Text ml={3}>2022年7月23日(土) 9時～15時</Text>
                  </Stack>
                  <Stack mt={5} direction={["column", "row", "row", "row"]}>
                    <Tag minW="50px">
                      <TagLabel>場所</TagLabel>
                    </Tag>
                    <Text ml={3}>
                      「愛知森林管理事務所森林交流館の奥の建物」瀬戸川平町１
                    </Text>
                  </Stack>
                  <Text ml={5}>
                    第15回里山学校「森林環境学習と体験」を開催します。横笛つくりや巣箱づくり「森林の生態系保全」学習や森林内体験と観察を行います。ぜひご参加ください。
                  </Text>
                </Box>
              </Stack>
            </LinkBox>
            <Heading mt={16} mb={5} fontSize={"4xl"} as="h2">
              過去のイベント
            </Heading>
            <SimpleGrid
              columns={[2, 2, 4, 5]}
              spacing={[3, 4, 5, 5, 6]}
              justifyItems={"center"}
            >
              {data.allNodeEvent.edges.map(({ node }) => (
                <LinkBox maxW={"xs"} as="article" key={node.id} w="100%">
                  <Box overflow={"hidden"} rounded={"xl"}>
                    {node.relationships?.field_image ? (
                      <GatsbyImage
                        image={
                          node.relationships.field_image.localFile
                            ?.childImageSharp?.gatsbyImageData
                        }
                        alt={node.field_image?.alt || ""}
                      />
                    ) : (
                      <StaticImage
                        src="../../images/no-image.webp"
                        alt="NoImage"
                        aspectRatio={1.618}
                        placeholder="blurred"
                        layout="constrained"
                      />
                    )}
                  </Box>
                  <Heading as="h2" mt={[3, 3, 4]} fontSize="xl">
                    <LinkOverlay as={GatsbyLink} to={`/event/${node.ufl}/`}>
                      {node.title}
                    </LinkOverlay>
                  </Heading>
                </LinkBox>
              ))}
            </SimpleGrid>
          </Container>
        </Box>
      </Box>
    </Layout>
  );
};

export default Event;
