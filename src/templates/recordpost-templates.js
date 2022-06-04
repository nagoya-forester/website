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
  AtSignIcon,
  SunIcon,
  AddIcon,
  CalendarIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { graphql, Link as GatsbyLink } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import ReactHtmlParser, { processNodes } from "react-html-parser";
import Layout from "../components/layout";
import Seo from "../components/seo";

// query
export const query = graphql`
  query RecordPost($id: String!) {
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
`;

// markup
/* eslint-disable */
const RecordPost = ({ location, data }) => {
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
    "@type": "BlogPosting",
    headline: data.record.title,
    datePublished: data.record.field_start_time,
    dateModified: data.record.changed,
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
        name: data.record.title,
        item: data.site.siteMetadata.siteUrl + location.pathname,
      },
    ],
  };
  return (
    <Layout>
      <Seo
        PageTitle={data.record.title || ""}
        PageDesc={
          "活動場所: " +
            data.record.field_place +
            ", 活動日: " +
            data.record.activity_day +
            ", 参加人数: " +
            data.record.field_number_participants +
            ", 天候: " +
            data.record.field_weather || ""
        }
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
                  {data.record.title}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Heading fontSize={"5xl"} as="h1" mb={4}>
              {data.record.title}
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
                <Text ml={3}>{data.record?.field_place}</Text>
              </Flex>
              <Flex align="center">
                <Tag>
                  <TagLeftIcon boxSize="12px" as={CalendarIcon} />
                  <TagLabel>活動日</TagLabel>
                </Tag>
                <Text ml={3}>{data.record.activity_day}</Text>
              </Flex>
              <Flex align="center">
                <Tag>
                  <TagLeftIcon boxSize="12px" as={AddIcon} />
                  <TagLabel>参加人数</TagLabel>
                </Tag>
                <Text ml={3}>{data.record?.field_number_participants}人</Text>
              </Flex>
              <Flex align="center">
                <Tag>
                  <TagLeftIcon boxSize="12px" as={SunIcon} />
                  <TagLabel>天候</TagLabel>
                </Tag>
                <Text ml={3}>{data.record?.field_weather}</Text>
              </Flex>
            </Stack>
            {data.record.relationships.field_image && (
              <Box overflow={"hidden"}>
                <GatsbyImage
                  image={
                    data.record.relationships.field_image.localFile
                      .childImageSharp.gatsbyImageData
                  }
                  alt={data.record.field_image.alt}
                />
              </Box>
            )}
          </Container>

          <Container mt={16} maxW="fit-content">
            <Box maxW={"3xl"}>
              {ReactHtmlParser(data.record.body?.value, options)}
            </Box>
          </Container>

          <Box as="footer" />
        </Box>
      </Box>
    </Layout>
  );
};
export default RecordPost;
/* eslint-enable */
