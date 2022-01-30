import * as React from "react"
import Layout from "../../components/layout"
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Flex,
  Heading,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
  VStack,
} from "@chakra-ui/react"
import { AtSignIcon, CalendarIcon, ChevronRightIcon } from "@chakra-ui/icons"
import Seo from "../../components/seo"
import { graphql, Link as GatsbyLink } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

// query
export const query = graphql`
  query {
    allNodeEvent(sort: { fields: field_start_time, order: DESC }) {
      edges {
        node {
          drupal_id
          id
          title
          ufl: field_start_time(formatString: "YYYY-MM-DD")
          field_start_time(formatString: "YYYY年MM月DD日HH時mm分")
          field_end_time(formatString: "YYYY年MM月DD日HH時mm分")
          field_image {
            alt
          }
          field_location
          relationships {
            field_image {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    layout: FULL_WIDTH
                    formats: WEBP
                    aspectRatio: 1.618
                    placeholder: BLURRED
                    transformOptions: { fit: COVER }
                  )
                }
              }
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`
// markup
const Event = ({ location, data }) => {
  const schema = {
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
        name: "ブログ",
        item: data.site.siteMetadata.siteUrl + "/event/",
      },
    ],
  }
  return (
    <Layout>
      <Seo
        pagetitle="イベント"
        pagedesc="NPO法人名古屋シティフォレスター倶楽部のイベント、植樹・下草刈り・間伐・枝打ちなど森林ボランティアの一般参加体験会などの開催情報や申し込み方法を記載しています。"
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
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink as={GatsbyLink} to={"/event/"}>
                  イベント
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Heading fontSize={"5xl"} as="h1">
              イベント
            </Heading>
          </Box>

          <Flex
            justifyContent={"center"}
            maxW={"5xl"}
            mt={16}
            mb={2}
            mx={"auto"}
          >
            <SimpleGrid columns={[1, 1, 2, 3]} spacing={6}>
              {data.allNodeEvent.edges.map(({ node }) => (
                <LinkBox maxW={"xs"} as="article" key={node.id}>
                  <Box overflow={"hidden"} rounded={"xl"}>
                    {node.relationships.field_image ? (
                      <GatsbyImage
                        image={
                          node.relationships.field_image.localFile
                            .childImageSharp.gatsbyImageData
                        }
                        alt={node.field_image.alt}
                      />
                    ) : (
                      <StaticImage
                        src="../../images/no-image.webp"
                        alt="NoImage"
                        aspectRatio={1.618}
                        placeholder="blurred"
                        layout="constrained"
                      />
                    )}
                    {/*
                    {node.field_held ? (
                      <></>
                    ) : (
                      <Badge
                        top={3}
                        left={3}
                        fontSize="xl"
                        position="absolute"
                        colorScheme="green"
                      >
                        参加者募集
                      </Badge>
                    )}
                    */}
                  </Box>
                  <Heading as="h2" mt={[3, 3, 4]} fontSize="xl">
                    <LinkOverlay as={GatsbyLink} to={`/event/${node.ufl}/`}>
                      {node.title}
                    </LinkOverlay>
                  </Heading>
                  <VStack mt={3} spacing={2} align="stretch">
                    <Flex align="center">
                      <Tag>
                        <TagLeftIcon boxSize="12px" as={AtSignIcon} />
                        <TagLabel>場所</TagLabel>
                      </Tag>
                      <Text ml={3}>{node.field_location}</Text>
                    </Flex>
                    <Flex align="center">
                      <Tag>
                        <TagLeftIcon boxSize="12px" as={CalendarIcon} />
                        <TagLabel>開始</TagLabel>
                      </Tag>
                      <Text ml={3}>{node.field_start_time}</Text>
                    </Flex>
                    <Flex align="center">
                      <Tag>
                        <TagLeftIcon boxSize="12px" as={CalendarIcon} />
                        <TagLabel>終了</TagLabel>
                      </Tag>
                      <Text ml={3}>{node.field_end_time}</Text>
                    </Flex>
                  </VStack>
                </LinkBox>
              ))}
            </SimpleGrid>
          </Flex>

          <Box as="footer" />
        </Box>
      </Container>
    </Layout>
  )
}

export default Event
