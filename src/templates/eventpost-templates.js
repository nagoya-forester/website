import * as React from "react";
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
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { graphql, Link as GatsbyLink } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import ReactHtmlParser, { processNodes } from "react-html-parser";
import Layout from "../components/layout";
import Seo from "../components/seo";

// query
export const query = graphql`
  query EventPost($id: String!) {
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
`;

// markup
/* eslint-disable */
const EventPost = ({ location, data }) => {
  function transform(node) {
    if (node.type === "tag" && node.name === "img") {
      let uuid = node.attribs["data-entity-uuid"];
      let alt = node.attribs["alt"];
      return data.allFileFile.edges.map((edge) => {
        if (edge.node.drupal_id === uuid) {
          return (
            <GatsbyImage
              alt={alt}
              image={edge.node.localFile?.childImageSharp?.gatsbyImageData}
            />
          );
        }
        return undefined;
      });
    }
    if (node.type === "tag" && node.name === "p") {
      return <Text mt={5}>{processNodes(node.children, transform)}</Text>;
    }
    if (node.type === "tag" && node.name === "h2") {
      return (
        <Heading mt={16} mb={5} fontSize={"4xl"} as="h2">
          {processNodes(node.children, transform)}
        </Heading>
      );
    }
    if (node.type === "tag" && node.name === "h3") {
      return (
        <Heading mt={8} mb={5} fontSize={"3xl"} as="h3">
          {processNodes(node.children, transform)}
        </Heading>
      );
    }
    if (node.type === "tag" && node.name === "h4") {
      return (
        <Heading mt={4} mb={5} fontSize={"2xl"} as="h4">
          {processNodes(node.children, transform)}
        </Heading>
      );
    }
    if (node.type === "tag" && node.name === "ul") {
      return (
        <UnorderedList my={5} ml={7}>
          {processNodes(node.children, transform)}
        </UnorderedList>
      );
    }
    if (node.type === "tag" && node.name === "ol") {
      return (
        <OrderedList my={5} ml={7}>
          {processNodes(node.children, transform)}
        </OrderedList>
      );
    }
    if (node.type === "tag" && node.name === "li") {
      return <ListItem>{processNodes(node.children, transform)}</ListItem>;
    }
  }
  const options = {
    decodeEntities: true,
    transform,
  };
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
        name: data.event.title,
        item: data.site.siteMetadata.siteUrl + location.pathname,
      },
    ],
  };
  return (
    <Layout>
      <Seo
        PageTitle={data.event.title || ""}
        PageDesc={
          "場所: " +
            data.event.field_location +
            ", 開始時刻: " +
            data.event.field_start_time +
            ", 終了時刻: " +
            data.event.field_end_time || ""
        }
        PagePath={location.pathname}
        PageNoindex={true}
        PageSchema={schemaBreadcrumb}
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
                <BreadcrumbLink as={GatsbyLink} to={"/event/"}>
                  イベント
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink as={GatsbyLink} to={location.pathname}>
                  {data.event.title}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Heading fontSize={"5xl"} as="h1" mb={4}>
              {data.event.title}
            </Heading>
            {data.event.relationships.field_image && (
              <Box overflow={"hidden"}>
                <GatsbyImage
                  image={
                    data.event.relationships.field_image.localFile
                      .childImageSharp.gatsbyImageData
                  }
                  alt={data.event.field_image.alt}
                />
              </Box>
            )}
          </Container>

          <Container mt={16} maxW="fit-content">
            <Box maxW={"3xl"}>
              {ReactHtmlParser(data.event?.body?.value, options)}
            </Box>
          </Container>

          <Box as="footer" />
        </Box>
      </Box>
    </Layout>
  );
};
export default EventPost;
/* eslint-enable */
