import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react"
import { ChevronRightIcon } from "@chakra-ui/icons"
import { StaticImage } from "gatsby-plugin-image"
import { graphql, Link as GatsbyLink, useStaticQuery } from "gatsby"

// markup
const Place = ({ location }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `)
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "ホーム",
        item: site.siteMetadata.siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "私たちについて",
        item: site.siteMetadata.siteUrl + "/about/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "活動場所",
        item: site.siteMetadata.siteUrl + "/about/place/",
      },
    ],
  }
  return (
    <Layout>
      <Seo
        pagetitle="活動場所"
        pagedesc="NPO法人名古屋シティフォレスター俱楽部の活動場所である「段戸ふれあいの森」「定光寺自然休養林」「ひざわの森」「新森地区民有林」についての紹介です。"
        pagepath={location.pathname}
        schemaMarkup={schema}
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
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink as={GatsbyLink} to={"/about/place/"}>
                  活動場所
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Heading fontSize={"5xl"} as="h1" mb={4}>
              活動場所
            </Heading>
            <Box overflow={"hidden"}>
              <StaticImage
                src="../../images/about/placehero.webp"
                alt="地図"
                placeholder="blurred"
                layout="constrained"
              />
            </Box>
          </Box>

          <Box maxW={"6xl"} mt={[20, 20, 40]} mb={2} mx={"auto"}>
            <Stack spacing={20}>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <Stack spacing={4}>
                  <Heading as="h2" mt={{ base: 0, md: 4 }} fontSize={"4xl"}>
                    段戸ふれあいの森
                  </Heading>
                  <Heading as="h3" fontSize={"3xl"}>
                    人と自然を大切にする豊かな森
                  </Heading>
                  <Text>
                    段戸国有林の約2.63ヘクタールをフィールドとして活動しています。1998年にヒノキを約7000本植樹し、下草刈り、枝打ちもひと段落して、
                    現在は不要木等の除伐を行っていますが、本格的な間伐は数年先になりそうです。
                  </Text>
                </Stack>
                <Flex>
                  <StaticImage
                    src="../../images/no-image.webp"
                    alt="地図"
                    placeholder="blurred"
                    layout="constrained"
                  />
                </Flex>
              </SimpleGrid>

              <SimpleGrid my={12} columns={{ base: 1, md: 2 }} spacing={10}>
                <Stack spacing={4}>
                  <Heading as="h2" mt={{ base: 0, md: 4 }} fontSize={"4xl"}>
                    定光寺ふれあいの森
                  </Heading>
                  <Heading as="h3" fontSize={"3xl"}>
                    四季の彩りが美しい自然林と野鳥のさえずる緑豊かな瀬戸の丘
                  </Heading>
                  <Text>
                    定光寺国有林41.14ヘクタールをフィールドに活動しています。やすらぎの道約1.4km。入口で迎えてくれるソヨゴの倒木から萌芽した「森の竪琴」
                    続いて雑木林、ビートルアパート、中間地点には見晴らしの良い「NCFCの広場」少し下れは椿の群生、曲がりくねったつづら坂、タヌキの空住居穴
                    は自然のまま。2021年から大径木の間伐作業に入ります。
                  </Text>
                </Stack>
                <Flex>
                  <StaticImage
                    src="../../images/no-image.webp"
                    alt="地図"
                    placeholder="blurred"
                    layout="constrained"
                  />
                </Flex>
              </SimpleGrid>

              <SimpleGrid my={12} columns={{ base: 1, md: 2 }} spacing={10}>
                <Stack spacing={4}>
                  <Heading as="h2" mt={{ base: 0, md: 4 }} fontSize={"4xl"}>
                    ひざわの森
                  </Heading>
                  <Heading as="h3" fontSize={"3xl"}>
                    広大な県有林をフィールドとして活動
                  </Heading>
                  <Text>
                    豊田市御作町にある県有林5.0ヘクタールをフィールドに活動しています。2018年3月までは別フィールドの大径木の間伐を行いましたが、現在は小径木エリアの間伐と不要木の除伐を行っています。
                  </Text>
                </Stack>
                <Flex>
                  <StaticImage
                    src="../../images/no-image.webp"
                    alt="地図"
                    placeholder="blurred"
                    layout="constrained"
                  />
                </Flex>
              </SimpleGrid>

              <SimpleGrid my={12} columns={{ base: 1, md: 2 }} spacing={10}>
                <Stack spacing={4}>
                  <Heading as="h2" mt={{ base: 0, md: 4 }} fontSize={"4xl"}>
                    新盛地区民有林
                  </Heading>
                  <Heading as="h3" fontSize={"3xl"}>
                    民有林の間伐作業もお手伝い
                  </Heading>
                  <Text>
                    豊田市新盛町で、数名の山主さんと協定を結び、間伐時期を迎えた山林の間伐作業など森林整備を行っています。
                  </Text>
                </Stack>
                <Flex>
                  <StaticImage
                    src="../../images/no-image.webp"
                    alt="地図"
                    placeholder="blurred"
                    layout="constrained"
                  />
                </Flex>
              </SimpleGrid>
            </Stack>
          </Box>

          <Box as="footer" />
        </Box>
      </Container>
    </Layout>
  )
}

export default Place
