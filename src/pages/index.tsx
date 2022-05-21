import * as React from "react";
import Layout from "../components/layout";
import { Box, Button, Container } from "@chakra-ui/react";
import { graphql } from "gatsby";
import Seo from "../components/seo";

// query
export const query = graphql`
  query IndexPage {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
  }
`;
type Props = {
  data: GatsbyTypes.IndexPageQuery;
  location: Location;
};
// markup
const IndexPage = ({ location, data }: Props) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: data.site.siteMetadata.title,
    url: data.site.siteMetadata.siteUrl,
    logo: data.site.siteMetadata.siteUrl + "/mstile-310x310.png",
    sameAs: data.site.siteMetadata.siteUrl,
  };
  return (
    <Layout>
      <Seo SchemaMarkup={schema} />
      <p>Index Page</p>
      <Box bg="brand.900">Welcome</Box>
      <Button colorScheme="blue">Button</Button>
      <Button colorScheme="blue">Button</Button>
      <Box height="2000px" />
      <Button colorScheme="blue">Button</Button>
      <Container maxW="container.2xl" bg="green.400" color="#262626">
        <p>uigigi</p>
      </Container>
    </Layout>
  );
};

export default IndexPage;
