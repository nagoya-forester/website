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
import Layout from "../components/layout";
import Seo from "../components/seo";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

// query
export const query = graphql`
  query BlogIndex {
    allNodeBlog(sort: { fields: created, order: DESC }) {
      edges {
        node {
          id
          title
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
  }
`;
type Props = {
  data: GatsbyTypes.BlogIndexQuery;
};

// markup
const Blog = ({ data }: Props) => {
  return (
    <Layout>
      <Seo
        PageTitle="ブログ"
        PageDesc="NPO法人名古屋シティフォレスター俱楽部の活動での知識や技術を記載しています。"
        PagePath={""}
        PageNoindex={true}
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
            <SimpleGrid columns={[2, 3, 4, 5, 5]} spacing={6}>
              {data.allNodeBlog?.edges.map(({ node }) => (
                <LinkBox
                  key={node.id}
                  as="article"
                  borderRadius="md"
                  p="5"
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
                      200202020
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
