import * as React from "react"
import { Link as GatsbyLink } from "gatsby"
import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"
// styles

// markup
const Footer = () => {
  return (
    <Box
      as="footer"
      pt={16}
      bg={useColorModeValue("gray.100", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container maxWidth="8xl" pb={10}>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3, lg: 5, xl: 6 }}
          spacing={10}
        >
          <Stack align={"flex-start"}>
            <Text fontWeight="bold" mb={2} as={GatsbyLink} to={"/about/"}>
              私たちについて
            </Text>
            <Link as={GatsbyLink} to={"/about/schedule/"}>
              活動予定表
            </Link>
            <Link as={GatsbyLink} to={"/about/record/"}>
              活動記録
            </Link>
            <Link as={GatsbyLink} to={"/about/info/"}>
              団体情報
            </Link>
            <Link as={GatsbyLink} to={"/about/place/"}>
              活動場所
            </Link>
          </Stack>

          <Stack align={"flex-start"}>
            <Text fontWeight="bold" mb={2} as={GatsbyLink} to={"/event/"}>
              イベント
            </Text>
            <Link as={GatsbyLink} to={"/event/"}>
              開催予定イベント
            </Link>
            <Link as={GatsbyLink} to={"/event/"}>
              過去のイベント
            </Link>
          </Stack>

          <Stack align={"flex-start"}>
            <Text fontWeight="bold" mb={2} as={GatsbyLink} to={"/support/"}>
              サポート
            </Text>
            <Link as={GatsbyLink} to={"/support/"}>
              協働作業
            </Link>
            <Link as={GatsbyLink} to={"/support/"}>
              作業補助
            </Link>
          </Stack>

          <Stack align={"flex-start"}>
            <Text fontWeight="bold" mb={2} as={GatsbyLink} to={"/volunteer/"}>
              ボランティア
            </Text>
            <Link as={GatsbyLink} to={"/volunteer/forestry/"}>
              森林・林業ボランティア
            </Link>
            <Link as={GatsbyLink} to={"/volunteer/environment/"}>
              環境
            </Link>
            <Link as={GatsbyLink} to={"/volunteer/safety/"}>
              安全について
            </Link>
          </Stack>

          <Stack align={"flex-start"}>
            <Text fontWeight="bold" mb={2} as={GatsbyLink} to={"/education/"}>
              教育
            </Text>
            <Link as={GatsbyLink} to={"/education/sustainable/"}>
              持続可能な森林
            </Link>
            <Link as={GatsbyLink} to={"/education/environmental/"}>
              環境教育
            </Link>
          </Stack>

          <Stack>
            <Link fontWeight="bold" as={GatsbyLink} to={"/"}>
              お知らせ
            </Link>
            <Link fontWeight="bold" as={GatsbyLink} to={"/admission/"}>
              入会案内
            </Link>
            <Link fontWeight="bold" as={GatsbyLink} to={"/contact/"}>
              お問い合わせ
            </Link>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"8xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "space-between" }}
          align={{ md: "center" }}
        >
          <Stack direction={{ base: "column", lg: "row" }} spacing={6}>
            <Link as={GatsbyLink} to={"/privacy-policy/"}>
              プライバシーポリシー
            </Link>
            <Link as={GatsbyLink} to={"/using/"}>
              ご利用にあたって
            </Link>
            <Link as={GatsbyLink} to={"/sitemap/"}>
              サイトマップ
            </Link>
          </Stack>
          <Box>
            <Text>&copy; 2022 NPO法人名古屋シティフォレスター俱楽部</Text>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default Footer
