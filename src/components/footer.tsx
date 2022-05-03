import * as React from "react";

import { Link as GatsbyLink } from "gatsby";
import {
  Box,
  Container,
  Flex,
  HStack,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube";
import { FaGitlab } from "@react-icons/all-files/fa/FaGitlab";

// markup
const Footer = () => {
  return (
    <Box
      as="footer"
      pt={16}
      bg={"gray.100"}
      color={"gray.700"}
      pb={{ base: "56px", md: "0" }}
    >
      <Container maxWidth="9xl" pb={8}>
        <Stack direction={["column", "row", "row"]} spacing={4}>
          <Text>私たちをフォロー</Text>
          <HStack spacing={3}>
            <Link href="https://twitter.com/nagoya_forester" isExternal>
              <Icon as={FaTwitter} w={7} h={7} color="logo.twitter" />
            </Link>
            <Link href="https://github.com/nagoya-forester" isExternal>
              <Icon as={FaGithub} w={7} h={7} color="logo.github" />
            </Link>
            <Link href="" isExternal>
              <Icon as={FaYoutube} w={7} h={7} color="logo.youtube" />
            </Link>
            <Link href="https://gitlab.com/nagoya-forester" isExternal>
              <Icon as={FaGitlab} w={7} h={7} color="logo.gitlab" />
            </Link>
          </HStack>
        </Stack>
      </Container>
      <Container maxWidth="9xl" pb={10}>
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

      <Box borderTopWidth={1} borderStyle={"solid"} borderColor={"gray.200"}>
        <Container
          as={Stack}
          maxW={"9xl"}
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
  );
};

export default Footer;
