import * as React from "react"
import Layout from "../components/layout"
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Flex,
  Heading,
  ListItem,
  OrderedList,
  Stack,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
  UnorderedList,
} from "@chakra-ui/react"
import { RepeatIcon, RepeatClockIcon, ChevronRightIcon } from "@chakra-ui/icons"
import Seo from "../components/seo"
import { graphql, Link as GatsbyLink } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import ReactHtmlParser, { processNodes } from "react-html-parser"

// styles
export const query = graphql`
  query ($id: String!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    blog: nodeBlog(id: { eq: $id }) {
      id
      title
      created(formatString: "YYYY-MM-DDTHH:mm:ss+09:00")
      changed(formatString: "YYYY-MM-DDTHH:mm:ss+09:00")
      create: created(formatString: "YYYY年MM月DD日")
      update: changed(formatString: "YYYY年MM月DD日")
      field_image {
        alt
      }
      body {
        value
        summary
      }
      relationships {
        field_image {
          localFile {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                formats: WEBP
                aspectRatio: 1.777
                placeholder: BLURRED
                transformOptions: { fit: COVER }
              )
            }
          }
        }
      }
    }
    allFileFile {
      edges {
        node {
          drupal_id
          localFile {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                formats: WEBP
                placeholder: BLURRED
                transformOptions: { fit: COVER }
              )
            }
          }
        }
      }
    }
  }
`
// markup
const BlogPost = ({ location, data }) => {
  function transform(node) {
    if (node.type === "tag" && node.name === "img") {
      let uuid = node.attribs["data-entity-uuid"]
      let alt = node.attribs["alt"]
      return data.allFileFile.edges.map((edge) => {
        if (edge.node.drupal_id === uuid) {
          return (
            <GatsbyImage
              alt={alt}
              image={edge.node.localFile.childImageSharp.gatsbyImageData}
            />
          )
        }
        return undefined
      })
    }
    if (node.type === "tag" && node.name === "p") {
      return <Text mt={5}>{processNodes(node.children, transform)}</Text>
    }
    if (node.type === "tag" && node.name === "h2") {
      return (
        <Heading mt={16} mb={2} fontSize={"4xl"} as="h2">
          {processNodes(node.children, transform)}
        </Heading>
      )
    }
    if (node.type === "tag" && node.name === "h3") {
      return (
        <Heading mt={8} mb={2} fontSize={"3xl"} as="h3">
          {processNodes(node.children, transform)}
        </Heading>
      )
    }
    if (node.type === "tag" && node.name === "h4") {
      return (
        <Heading mt={4} mb={2} fontSize={"2xl"} as="h4">
          {processNodes(node.children, transform)}
        </Heading>
      )
    }
    if (node.type === "tag" && node.name === "ul") {
      return (
        <UnorderedList my={5} ml={7}>
          {processNodes(node.children, transform)}
        </UnorderedList>
      )
    }
    if (node.type === "tag" && node.name === "ol") {
      return (
        <OrderedList my={5} ml={7}>
          {processNodes(node.children, transform)}
        </OrderedList>
      )
    }
    if (node.type === "tag" && node.name === "li") {
      return <ListItem>{processNodes(node.children, transform)}</ListItem>
    }
  }
  const options = {
    decodeEntities: true,
    transform,
  }
  const blog = data.blog
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    datePublished: blog.created,
    dateModified: blog.changed,
    author: {
      "@type": "Organization",
      url: data.site.siteMetadata.siteUrl,
      name: data.site.siteMetadata.title,
    },
  }
  const schemaBreadcrumb = {
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
      {
        "@type": "ListItem",
        position: 3,
        name: blog.title,
        item: data.site.siteMetadata.siteUrl + location.pathname,
      },
    ],
  }
  return (
    <Layout>
      <Seo
        pagetitle={blog.title}
        pagedesc={blog.body.summary}
        pagepath={location.pathname}
        schemaMarkup={[schema, schemaBreadcrumb]}
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
              <BreadcrumbItem>
                <BreadcrumbLink as={GatsbyLink} to={"/blog/"}>
                  ブログ
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink as={GatsbyLink} to={location.pathname}>
                  {blog.title}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Heading fontSize={"5xl"} as="h1" mb={4}>
              {blog.title}
            </Heading>
            <Stack
              direction={["column", "column", "row"]}
              mb={[5, 5, 8]}
              spacing={[3, 3, 10]}
              align="stretch"
              justify="right"
            >
              <Flex align="center">
                <Tag>
                  <TagLeftIcon boxSize="12px" as={RepeatClockIcon} />
                  <TagLabel>作成日</TagLabel>
                </Tag>
                <Text ml={3}>{blog.create}</Text>
              </Flex>
              <Flex align="center">
                <Tag>
                  <TagLeftIcon boxSize="12px" as={RepeatIcon} />
                  <TagLabel>更新日</TagLabel>
                </Tag>
                <Text ml={3}>{blog.update}</Text>
              </Flex>
            </Stack>
            {blog.relationships.field_image && (
              <Box overflow={"hidden"}>
                <GatsbyImage
                  image={
                    blog.relationships.field_image.localFile.childImageSharp
                      .gatsbyImageData
                  }
                  alt={blog.field_image.alt}
                />
              </Box>
            )}
          </Box>

          <Box maxW={"3xl"} mt={16} mb={2} mx={"auto"}>
            {ReactHtmlParser(blog.body.value, options)}
          </Box>

          <Box as="footer" />
        </Box>
      </Container>
    </Layout>
  )
}

export default BlogPost
