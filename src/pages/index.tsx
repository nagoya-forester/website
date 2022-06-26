import * as React from "react";
import Layout from "../components/layout";
import { Link as GatsbyLink } from "gatsby";
import { Box, Button, Container, Heading, Stack, Text } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";

// query
// markup
const IndexPage = () => {
  return (
    <Layout>
      <Box as="main" mt={4} mb={10}>
        <Box as="article">
          <Container maxW={"8xl"} mt={4} mb={10}>
            <Stack
              as={"section"}
              align={"center"}
              spacing={{ base: 8, md: 10 }}
              py={{ base: 3.5, md: 5 }}
              direction={{ base: "column", md: "row" }}
            >
              <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                <Heading
                  as="h1"
                  fontWeight={600}
                  fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }}
                >
                  <Text
                    as={"span"}
                    position={"relative"}
                    _after={{
                      content: "''",
                      width: "full",
                      height: "30%",
                      position: "absolute",
                      bottom: 1,
                      left: 0,
                      bg: "green.300",
                      zIndex: -1,
                    }}
                  >
                    森が私達の活動場所です
                  </Text>
                  <br />
                  <Text as={"span"} color={"green.500"}>
                    あなたの近くに森はありますか？
                  </Text>
                </Heading>
                <Text>
                  NPO法人
                  名古屋シティフォレスター倶楽部では2000年の発足以来２１年間メンバーと共に森林整備活動を行っています。あなたもぜひ活動に加わり「緑を守り育てる」第一歩を踏み出しませんか？
                </Text>
              </Stack>
              <Box
                rounded={"2xl"}
                boxShadow={"2xl"}
                w={{ base: "100%", md: "50%" }}
                overflow={"hidden"}
              >
                <StaticImage
                  src="../images/tophero.webp"
                  alt="NPO法人 名古屋シティフォレスター倶楽部"
                  placeholder="blurred"
                  layout="constrained"
                />
              </Box>
            </Stack>
          </Container>

          <Box
            as="section"
            mt={16}
            maxW="3xl"
            mx="auto"
            px={{ base: "6", lg: "8" }}
            py={{ base: "16", sm: "20" }}
            textAlign="center"
          >
            <Heading as={"h2"} size="2xl" fontWeight="extrabold">
              「緑を守り育てる」第一歩を踏み出しませんか？
            </Heading>
            <Text mt="4" fontSize="lg">
              NPO法人
              名古屋シティフォレスター倶楽部では森林の重要性とその必要性を認識し、森林整備活動を通して豊かな森作りを進める活動を行っています。
            </Text>
            <Button
              mt="8"
              as={GatsbyLink}
              to={"/admission/"}
              size="lg"
              colorScheme="blue"
              fontWeight="bold"
            >
              活動に参加
            </Button>
          </Box>

          {/*
            <Container mt={16} maxW="fit-content">
              <Box maxW={"3xl"}></Box>
            </Container>
          */}
        </Box>
      </Box>
    </Layout>
  );
};

export default IndexPage;
