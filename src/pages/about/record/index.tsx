import * as React from "react";
import { graphql, Link as GatsbyLink, useStaticQuery } from "gatsby";
import {
  Badge,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Flex,
  Heading,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  AddIcon,
  CalendarIcon,
  ChevronRightIcon,
  SunIcon,
} from "@chakra-ui/icons";
import Layout from "../../../components/layout";
import Seo from "../../../components/seo";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

type Props = {
  data: GatsbyTypes.RecordIndexQuery;
  location: Location;
};
// query
export const query = graphql`
  query RecordIndex {
    allNodeRecord(sort: { fields: field_start_time, order: DESC }) {
      edges {
        node {
          id
          field_place
          field_number_participants
          activity_day: field_start_time(formatString: "YYYY年MM月DD日")
          url: drupal_internal__nid
          title
          field_image {
            alt
          }
          field_weather
          relationships {
            field_image {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    layout: CONSTRAINED
                    formats: WEBP
                    aspectRatio: 1.414
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
  }
`;
// markup
const Record = ({ location, data }: Props) => {
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
      {
        "@type": "ListItem",
        position: 3,
        name: "活動記録",
        item: site.siteMetadata.siteUrl + "/about/record/",
      },
    ],
  };
  return (
    <Layout>
      <Seo
        PageTitle="活動記録"
        PageDesc="NPO法人名古屋シティフォレスター俱楽部の活動記録を記載しています。"
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
                <BreadcrumbLink as={GatsbyLink} to={"/about/"}>
                  私たちについて
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink as={GatsbyLink} to={"/about/record/"}>
                  活動記録
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Heading fontSize={"5xl"} as="h1">
              活動記録
            </Heading>
          </Container>

          <Flex
            justifyContent={"center"}
            maxW={"5xl"}
            mt={16}
            mb={2}
            mx={"auto"}
          >
            <SimpleGrid columns={[1, 1, 2, 3]} spacing={6}>
              {data.allNodeRecord?.edges.map(({ node }) => (
                <LinkBox
                  as="article"
                  borderRadius="md"
                  p="5"
                  maxW="320px"
                  borderWidth="1px"
                  key={node.id}
                >
                  <Box overflow={"hidden"}>
                    {node.relationships?.field_image ? (
                      <GatsbyImage
                        image={
                          node.relationships.field_image.localFile
                            .childImageSharp.gatsbyImageData as never
                        }
                        alt={node.field_image.alt}
                      />
                    ) : (
                      <StaticImage
                        src="../../../images/no-image.webp"
                        alt="NoImage"
                        placeholder="blurred"
                        aspectRatio={1.414}
                        layout="constrained"
                      />
                    )}
                  </Box>
                  <Flex align="baseline" mt={2}>
                    <Badge colorScheme="blue">場所</Badge>
                    <Text
                      ml={2}
                      textTransform="uppercase"
                      fontSize="sm"
                      fontWeight="bold"
                      color="blue.700"
                    >
                      {node.field_place}
                    </Text>
                  </Flex>
                  <Heading as="h2" mt={2} fontSize="xl">
                    <LinkOverlay
                      as={GatsbyLink}
                      to={`/about/record/${node.url}/`}
                    >
                      {node.title}
                    </LinkOverlay>
                  </Heading>
                  <VStack mt={4} spacing={2} align="stretch">
                    <Flex align="center">
                      <Tag>
                        <TagLeftIcon boxSize="12px" as={CalendarIcon} />
                        <TagLabel>活動日</TagLabel>
                      </Tag>
                      <Text ml={3}>{node.activity_day}</Text>
                    </Flex>
                    <Flex align="center">
                      <Tag>
                        <TagLeftIcon boxSize="12px" as={AddIcon} />
                        <TagLabel>参加人数</TagLabel>
                      </Tag>
                      <Text ml={3}>{node.field_number_participants}人</Text>
                    </Flex>
                    <Flex align="center">
                      <Tag>
                        <TagLeftIcon boxSize="12px" as={SunIcon} />
                        <TagLabel>天候</TagLabel>
                      </Tag>
                      <Text ml={3}>{node.field_weather}</Text>
                    </Flex>
                  </VStack>
                </LinkBox>
              ))}
            </SimpleGrid>
          </Flex>

          <Container mt={16} maxW="fit-content">
            <Box maxW={"3xl"}></Box>
          </Container>
        </Box>
      </Box>
    </Layout>
  );
};

export default Record;
