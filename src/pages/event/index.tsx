import * as React from "react";
import { graphql, Link as GatsbyLink } from "gatsby";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Heading,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
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
            <Alert
              status="info"
              variant="subtle"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              height="200px"
            >
              <AlertIcon boxSize="40px" mr={0} />
              <AlertTitle mt={4} mb={1} fontSize="lg">
                お知らせ
              </AlertTitle>
              <AlertDescription maxWidth="sm">
                現在開催予定のイベントはありません。
              </AlertDescription>
            </Alert>
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
