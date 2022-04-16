import * as React from "react";
import Layout from "../components/layout";
import { Box, Button, Container } from "@chakra-ui/react";

// markup
const IndexPage = () => {
  return (
    <Layout>
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
