import * as React from "react"
import Layout from "../../components/layout"
import {
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
  Text,
} from "@chakra-ui/react"
import { ChevronRightIcon } from "@chakra-ui/icons"
import Seo from "../../components/seo"
import { graphql, Link as GatsbyLink } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

// query
export const query = graphql`
  query {
    allNodeBlog(sort: { fields: created, order: DESC }) {
      edges {
        node {
          id
          drupal_id
          drupal_internal__nid
          title
          created(formatString: "YYYY年MM月DD日HH時mm分")
          changed
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
`
// markup
const Blog = ({ location, data }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "ホーム",
        item: data.site.siteMetadata.siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "ブログ",
        item: data.site.siteMetadata.siteUrl + "/blog/",
      },
    ],
  }
  return (
    <Layout>
      <Seo
        pagetitle="ブログ"
        pagedesc="NPO法人名古屋シティフォレスター俱楽部の活動での知識や技術を記載しています。"
        pagepath={location.pathname}
        schemaMarkup={schema}
      />

      <Container as="main" maxW={"6xl"} mt={4} mb={10}>
        <Box as="article">
          <Box as="header">
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
          </Box>

          <Flex
            justifyContent={"center"}
            maxW={"5xl"}
            mt={16}
            mb={2}
            mx={"auto"}
          >
            <SimpleGrid columns={[1, 1, 2, 3]} spacing={6}>
              {data.allNodeBlog.edges.map(({ node }) => (
                <LinkBox
                  as="article"
                  borderRadius="md"
                  p="5"
                  maxW="320px"
                  borderWidth="1px"
                  key={node.id}
                >
                  <Box overflow={"hidden"} mb={2}>
                    {node.relationships.field_image ? (
                      <GatsbyImage
                        image={
                          node.relationships.field_image.localFile
                            .childImageSharp.gatsbyImageData
                        }
                        alt={node.field_image.alt}
                      />
                    ) : (
                      <StaticImage
                        src="../../images/no-image.webp"
                        alt="NoImage"
                        placeholder="blurred"
                        layout="constrained"
                      />
                    )}
                  </Box>
                  <Heading as="h2" fontSize="lg">
                    <LinkOverlay
                      as={GatsbyLink}
                      to={`/blog/${node.drupal_internal__nid}/`}
                    >
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
          </Flex>

          <Box as="footer" />
        </Box>
      </Container>
    </Layout>
  )
}

export default Blog
