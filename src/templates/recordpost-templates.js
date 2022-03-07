import * as React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import ReactHtmlParser, { processNodes } from "react-html-parser"
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
import {
  AtSignIcon,
  SunIcon,
  AddIcon,
  CalendarIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons"
import Seo from "../components/seo"
import { Link as GatsbyLink } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

export const query = graphql`
  query ($id: String!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    record: nodeRecord(id: { eq: $id }) {
      title
      id
      field_place
      field_weather
      field_number_participants
      changed(formatString: "YYYY-MM-DD")
      field_start_time(formatString: "YYYY-MM-DD")
      activity_day: field_start_time(formatString: "YYYY年MM月DD日")
      body {
        value
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
// styles

// markup
const RecordPost = ({ location, data }) => {
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

  const record = data.record
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: record.title,
    datePublished: record.field_start_time,
    dateModified: record.changed,
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
        name: "私たちについて",
        item: data.site.siteMetadata.siteUrl + "/about/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "活動記録",
        item: data.site.siteMetadata.siteUrl + "/about/record/",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: record.title,
        item: data.site.siteMetadata.siteUrl + location.pathname,
      },
    ],
  }

  return (
    <Layout>
      <Seo
        pagetitle={record.title}
        pagedesc={
          "活動場所: " +
          record.field_place +
          ", 活動日: " +
          record.activity_day +
          ", 参加人数: " +
          record.field_number_participants +
          ", 天候: " +
          record.field_weather
        }
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
                <BreadcrumbLink as={GatsbyLink} to={"/about/"}>
                  私たちについて
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink as={GatsbyLink} to={"/about/record/"}>
                  活動記録
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink as={GatsbyLink} to={location.pathname}>
                  {record.title}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Heading fontSize={"5xl"} as="h1" mb={4}>
              {record.title}
            </Heading>
            <Stack
              direction={["column", "column", "row"]}
              mb={[5, 5, 8]}
              spacing={[3, 3, 10]}
              align="stretch"
            >
              <Flex align="center">
                <Tag>
                  <TagLeftIcon boxSize="12px" as={AtSignIcon} />
                  <TagLabel>活動場所</TagLabel>
                </Tag>
                <Text ml={3}>{record.field_place}</Text>
              </Flex>
              <Flex align="center">
                <Tag>
                  <TagLeftIcon boxSize="12px" as={CalendarIcon} />
                  <TagLabel>活動日</TagLabel>
                </Tag>
                <Text ml={3}>{record.activity_day}</Text>
              </Flex>
              <Flex align="center">
                <Tag>
                  <TagLeftIcon boxSize="12px" as={AddIcon} />
                  <TagLabel>参加人数</TagLabel>
                </Tag>
                <Text ml={3}>{record.field_number_participants}人</Text>
              </Flex>
              <Flex align="center">
                <Tag>
                  <TagLeftIcon boxSize="12px" as={SunIcon} />
                  <TagLabel>天候</TagLabel>
                </Tag>
                <Text ml={3}>{record.field_weather}</Text>
              </Flex>
            </Stack>
            {record.relationships.field_image && (
              <Box overflow={"hidden"}>
                <GatsbyImage
                  image={
                    record.relationships.field_image.localFile.childImageSharp
                      .gatsbyImageData
                  }
                  alt={record.field_image.alt}
                />
              </Box>
            )}
          </Box>

          <Box maxW={"3xl"} mt={16} mb={2} mx={"auto"}>
            {ReactHtmlParser(record.body.value, options)}
          </Box>

          <Box as="footer" />
        </Box>
      </Container>
    </Layout>
  )
}

export default RecordPost
