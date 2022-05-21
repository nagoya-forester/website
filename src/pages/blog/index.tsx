import * as React from "react";
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
  Text,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { graphql, Link as GatsbyLink } from "gatsby";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

// query
export const query = graphql`
  query BlogIndex {
    allNodeBlog(sort: { fields: created, order: DESC }) {
      edges {
        node {
          id
          title
          created(formatString: "YYYY年MM月DD日HH時mm分")
          field_image {
            alt
          }
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
  data: GatsbyTypes.BlogIndexQuery;
  location: Location;
};

// markup
const Blog = ({ location, data }: Props) => {
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
        name: "ブログ",
        item: data.site?.siteMetadata?.siteUrl + "/blog/",
      },
    ],
  };
  return (
    <Layout>
      <Seo
        PageTitle="ブログ"
        PageDesc="NPO法人名古屋シティフォレスター俱楽部の活動での知識や技術を記載しています。"
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
                <BreadcrumbLink as={GatsbyLink} to={"/blog/"}>
                  ブログ
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Heading fontSize={"5xl"} as="h1">
              ブログ
            </Heading>
          </Container>

          <Container mt={16} maxW="8xl">
            <SimpleGrid columns={[2, 3, 4, 5, 5]} spacing={[3, 3, 4, 4, 5]}>
              {data.allNodeBlog?.edges.map(({ node }) => (
                <LinkBox
                  key={node.id}
                  as="article"
                  borderRadius="md"
                  p={[2, 3, 4, 4, 5]}
                  maxW="320px"
                  borderWidth="1px"
                >
                  <Box overflow={"hidden"} mb={2}>
                    {node.relationships?.field_image ? (
                      <GatsbyImage
                        image={
                          node.relationships.field_image.localFile
                            ?.childImageSharp?.gatsbyImageData as never
                        }
                        alt={node.field_image?.alt || ""}
                      />
                    ) : (
                      <StaticImage
                        src="../images/no-image.webp"
                        alt="NoImage"
                        aspectRatio={1.618}
                        placeholder="blurred"
                        layout="constrained"
                      />
                    )}
                  </Box>
                  <Heading as="h2" fontSize="lg">
                    <LinkOverlay as={GatsbyLink} to={`/blog/`}>
                      {node.title}
                    </LinkOverlay>
                  </Heading>
                  <Box mt={1}>
                    <Text fontSize="xs" as="time">
                      {node.created}
                    </Text>
                  </Box>
                </LinkBox>
              ))}
            </SimpleGrid>
          </Container>

          <Box />
        </Box>
      </Box>
    </Layout>
  );
};

export default Blog;
