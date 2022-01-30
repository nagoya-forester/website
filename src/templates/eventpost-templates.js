import * as React from "react"
import Layout from "../components/layout"
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Heading,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
} from "@chakra-ui/react"
import { ChevronRightIcon } from "@chakra-ui/icons"
import Seo from "../components/seo"
import { graphql, Link as GatsbyLink } from "gatsby"
import ReactHtmlParser, { processNodes } from "react-html-parser"
import { GatsbyImage } from "gatsby-plugin-image"

export const query = graphql`
  query ($id: String!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    event: nodeEvent(id: { eq: $id }) {
      id
      drupal_id
      title
      field_location
      field_start_time(formatString: "YYYY年MM月DD日HH時mm分")
      field_end_time(formatString: "YYYY年MM月DD日HH時mm分")
      body {
        value
        format
      }
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
const EventPost = ({ location, data }) => {
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
  const event = data.event
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
        name: "イベント",
        item: data.site.siteMetadata.siteUrl + "/event/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: event.title,
        item: data.site.siteMetadata.siteUrl + location.pathname,
      },
    ],
  }
  return (
    <Layout>
      <Seo
        pagetitle={event.title}
        pagedesc={
          "場所: " +
          event.field_location +
          ", 開始時刻: " +
          event.field_start_time +
          ", 終了時刻: " +
          event.field_end_time
        }
        pagepath={location.pathname}
        schemaMarkup={[schemaBreadcrumb]}
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
                <BreadcrumbLink as={GatsbyLink} to={"/event/"}>
                  イベント
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink as={GatsbyLink} to={location.pathname}>
                  {event.title}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Heading fontSize={"5xl"} as="h1" mb={4}>
              {event.title}
            </Heading>
            {event.relationships.field_image && (
              <Box overflow={"hidden"}>
                <GatsbyImage
                  image={
                    event.relationships.field_image.localFile.childImageSharp
                      .gatsbyImageData
                  }
                  alt={event.field_image.alt}
                />
              </Box>
            )}
          </Box>

          <Box maxW={"3xl"} mt={16} mb={2} mx={"auto"}>
            {ReactHtmlParser(event.body.value, options)}
          </Box>

          <Box as="footer" />
        </Box>
      </Container>
    </Layout>
  )
}

export default EventPost
