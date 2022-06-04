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
type Props = {
  data: GatsbyTypes.BlogPostQuery;
  location: Location;
};

// markup
const BlogPost = ({ location, data }: Props) => {
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
            <Heading fontSize={"5xl"} as="h1">
              {data.blog?.title}
            </Heading>
          </Container>

          <Container mt={16} maxW="fit-content">
            <Box maxW={"3xl"}></Box>
          </Container>

          <Box as="footer" />
        </Box>
      </Box>
    </Layout>
  );
};
export default BlogPost;
