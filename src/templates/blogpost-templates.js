import * as React from "react";
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
} from "@chakra-ui/react";
import {
  RepeatIcon,
  RepeatClockIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { graphql, Link as GatsbyLink } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import ReactHtmlParser, { processNodes } from "react-html-parser";
import Layout from "../components/layout";
import Seo from "../components/seo";

// query
export const query = graphql`
  query BlogPost($id: String!) {
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
      body {
        value
        summary
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
const BlogPost = ({ location, data }) => {
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
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.blog?.title,
    datePublished: data.blog?.created,
    dateModified: data.blog?.changed,
    author: {
      "@type": "Organization",
      url: data.site?.siteMetadata?.siteUrl,
      name: data.site?.siteMetadata?.title,
    },
  };
  const schemaBreadcrumb = {
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
      {
        "@type": "ListItem",
        position: 3,
        name: data.blog?.title,
        item: data.site?.siteMetadata?.siteUrl + location.pathname,
      },
    ],
  };
  return (
    <Layout>
      <Seo
        PageTitle={data.blog?.title || ""}
        PageDesc={data.blog?.body?.summary || ""}
        PagePath={location.pathname}
        PageNoindex={false}
        PageSchema={[schemaBreadcrumb, schema]}
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
                <BreadcrumbLink as={GatsbyLink} to={"/blog/"}>
                  ブログ
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink as={GatsbyLink} to={location.pathname}>
                  {data.blog?.title}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Heading fontSize={"5xl"} as="h1" mb={4}>
              {data.blog?.title}
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
                <Text ml={3}>{data.blog.create}</Text>
              </Flex>
              <Flex align="center">
                <Tag>
                  <TagLeftIcon boxSize="12px" as={RepeatIcon} />
                  <TagLabel>更新日</TagLabel>
                </Tag>
                <Text ml={3}>{data.blog.update}</Text>
              </Flex>
            </Stack>
            {data.blog?.relationships?.field_image && (
              <Box overflow={"hidden"}>
                <GatsbyImage
                  image={
                    data.blog.relationships.field_image.localFile
                      ?.childImageSharp?.gatsbyImageData
                  }
                  alt={data.blog.field_image?.alt}
                />
              </Box>
            )}
          </Container>

          <Container mt={16} maxW="fit-content">
            <Box maxW={"3xl"}>
              {ReactHtmlParser(data.blog?.body?.value, options)}
            </Box>
          </Container>

          <Box as="footer" />
        </Box>
      </Box>
    </Layout>
  );
};
export default BlogPost;
/* eslint-enable */
