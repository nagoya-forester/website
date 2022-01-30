import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link as GatsbyLink, graphql } from "gatsby"
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Stat,
  StatLabel,
  StatNumber,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"
import { StaticImage } from "gatsby-plugin-image"
import { FcCalendar, FcConferenceCall, FcLandscape } from "react-icons/fc"
// query
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
  }
`

// markup
const IndexPage = ({ location, data }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: data.site.siteMetadata.title,
    url: data.site.siteMetadata.siteUrl,
    logo: data.site.siteMetadata.siteUrl + "/mstile-310x310.png",
    sameAs: data.site.siteMetadata.siteUrl,
  }
  return (
    <Layout>
      <Seo schemaMarkup={schema} />
      <Container as="main" maxW={"7xl"} mt={4} mb={10}>
        <Box as="article">
          <Box as="header" />

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

          <Box maxW={"3xl"} mt={16} mb={2} mx={"auto"}>
            <Heading
              mt={16}
              mb={2}
              fontSize={"4xl"}
              as="h2"
              textAlign={"center"}
            >
              お知らせ
            </Heading>
            {/*
            <VStack
              mt={8}
              divider={<StackDivider borderColor="gray.400" />}
              align="stretch"
              spacing={3}
            >
              {data.allNodeNews.edges.map(({ node }) => (
                <Stack
                  direction={["column", "row"]}
                  spacing={[0, 10]}
                  key={node.id}
                >
                  <Text>{node.created}</Text>
                  <Text>{node.title}</Text>
                </Stack>
              ))}
            </VStack>
            */}
          </Box>

          <Box maxW={"5xl"} mt={16} mb={2} mx={"auto"}>
            <SimpleGrid
              mt={8}
              columns={[1, 2, 3]}
              spacing={10}
              maxW={"3xl"}
              mx={"auto"}
            >
              <Stat
                border={"1px solid"}
                borderColor={useColorModeValue("gray.800", "gray.500")}
                rounded={"lg"}
                p={5}
              >
                <Flex justifyContent={"space-between"}>
                  <Box pl={{ base: 2, md: 3 }}>
                    <StatLabel fontWeight={"medium"}>会員数（人）</StatLabel>
                    <StatNumber fontWeight={"bold"} fontSize={"2xl"}>
                      30
                    </StatNumber>
                  </Box>
                  <Box fontSize={"6xl"} alignContent={"center"} my={"auto"}>
                    <FcConferenceCall />
                  </Box>
                </Flex>
              </Stat>

              <Stat
                border={"1px solid"}
                borderColor={useColorModeValue("gray.800", "gray.500")}
                rounded={"lg"}
                p={5}
              >
                <Flex justifyContent={"space-between"}>
                  <Box pl={{ base: 2, md: 3 }}>
                    <StatLabel fontWeight={"medium"}>活動場所</StatLabel>
                    <StatNumber fontWeight={"bold"} fontSize={"2xl"}>
                      4
                    </StatNumber>
                  </Box>
                  <Box fontSize={"6xl"} alignContent={"center"} my={"auto"}>
                    <FcLandscape />
                  </Box>
                </Flex>
              </Stat>

              <Stat
                border={"1px solid"}
                borderColor={useColorModeValue("gray.800", "gray.500")}
                rounded={"lg"}
                p={5}
              >
                <Flex justifyContent={"space-between"}>
                  <Box pl={{ base: 2, md: 3 }}>
                    <StatLabel fontWeight={"medium"}>活動期間（年）</StatLabel>
                    <StatNumber fontWeight={"bold"} fontSize={"2xl"}>
                      20
                    </StatNumber>
                  </Box>
                  <Box fontSize={"6xl"} alignContent={"center"} my={"auto"}>
                    <FcCalendar />
                  </Box>
                </Flex>
              </Stat>
            </SimpleGrid>
          </Box>

          <Box
            as="section"
            mt={16}
            mb={2}
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

          <Box as="footer" />
        </Box>
      </Container>
    </Layout>
  )
}

export default IndexPage
