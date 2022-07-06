import * as React from "react";
import { Link as GatsbyLink } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import {
  Box,
  Container,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Link,
  Text,
  Drawer,
  useDisclosure,
  Flex,
  Stack,
  Input,
  HStack,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  ChevronUpIcon,
  SearchIcon,
  Icon,
} from "@chakra-ui/icons";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaGitlab } from "@react-icons/all-files/fa/FaGitlab";
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { HeaderLinks, HeaderPickup } from "../data/header_links";

// markup
const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleClick = () => {
    window["scrollTo"]({ top: 0, behavior: "smooth" });
  };
  return (
    <Box as="header" h={{ base: "60px", md: "70px", lg: "80px" }}>
      <Container
        maxWidth="container.2xl"
        display="flex"
        justifyContent="space-between"
      >
        <Box w={{ base: "240px", md: "280px", lg: "320px" }} mr="auto">
          <Link as={GatsbyLink} to={"/"} display="flex">
            <StaticImage
              src="../images/site_logo.png"
              alt="NPO法人 名古屋シティフォレスター倶楽部"
              placeholder="blurred"
              layout="constrained"
              width={320}
              height={80}
            />
          </Link>
        </Box>
        <Flex
          display={{ base: "none", md: "none", lg: "flex" }}
          ml="auto"
          fontWeight="bold"
          pr={5}
        >
          {HeaderPickup.map((header_pickup) => (
            <Box key={header_pickup.url}>
              <Link
                as={GatsbyLink}
                to={header_pickup.url}
                mx=".60vw"
                px=".60vw"
                display="flex"
                h="100%"
                alignItems="center"
              >
                {header_pickup.name}
              </Link>
            </Box>
          ))}
        </Flex>

        <Flex>
          {/* SearchIcon */}
          <Box
            aria-label="サイト内検索"
            as="button"
            display={["none", "block", "block", "none", "block"]}
            h={{ base: "60px", md: "70px", lg: "80px" }}
            w={{ base: "60px", md: "70px", lg: "80px" }}
            onClick={onOpen}
          >
            <SearchIcon w={6} h={6} />
            <Box mt={[0.5, 0.5, 1]} fontSize="xs">
              検索
            </Box>
          </Box>
          {/* SearchIcon End */}
          {/* HamburgerMenu */}
          <Box
            aria-label="メニュー"
            as="button"
            h={{ base: "60px", md: "70px", lg: "80px" }}
            w={{ base: "60px", md: "70px", lg: "80px" }}
            onClick={onOpen}
          >
            <HamburgerIcon w={7} h={7} />
            <Box mt={[0.5, 0.5, 1]} fontSize="xs">
              MENU
            </Box>
          </Box>
          <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <HamburgerMenu />
          </Drawer>
          {/* HamburgerMenu End */}
        </Flex>

        {/* MobileNavigation */}

        <Container
          backgroundColor="white"
          zIndex="docked"
          display={{ base: "flex", md: "none" }}
          justifyContent="space-between"
          position="fixed"
          bottom={0}
          width="full"
          height="56px"
          left={0}
          right={0}
        >
          <Box
            onClick={handleClick}
            aria-label="ページトップに戻る"
            as="button"
            h="56px"
            w="56px"
          >
            <ChevronUpIcon w={8} h={8} />
            <Box fontSize="xs">先頭へ</Box>
          </Box>
          <Box
            aria-label="サイト内検索"
            as="button"
            h="56px"
            w="56px"
            onClick={onOpen}
          >
            <SearchIcon w={5} h={5} />
            <Box mt={0.5} fontSize="xs">
              検索
            </Box>
          </Box>
          <Box
            aria-label="メニュー"
            as="button"
            h="56px"
            w="56px"
            onClick={onOpen}
          >
            <HamburgerIcon w={7} h={7} />
            <Box mt={0.5} fontSize="xs">
              MENU
            </Box>
          </Box>
        </Container>

        {/* MobileNavigation End */}
      </Container>
    </Box>
  );
};

export default Header;

const HamburgerMenu = () => {
  return (
    <>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader as="div">
          <DrawerCloseButton />
        </DrawerHeader>

        <DrawerBody as="nav">
          <Input my={5} size="lg" placeholder="サイト内検索" />
          <Stack
            listStyleType={"none"}
            as="ul"
            fontSize="lg"
            spacing={4}
            fontWeight="bold"
          >
            {HeaderLinks.map((header_links) => (
              <Box as="li" key={header_links.url}>
                <Link
                  display="inline-block"
                  py={1}
                  as={GatsbyLink}
                  to={header_links.url}
                >
                  {header_links.name}
                </Link>
              </Box>
            ))}
          </Stack>

          <Box my={5} py={5} borderY={"1px"} borderColor="gray.200">
            <Text fontSize="lg" fontWeight="bold" mb={3}>
              ソーシャルメディア
            </Text>
            <HStack spacing={5}>
              <Link href="https://twitter.com/nagoya_forester" isExternal>
                <Icon as={FaTwitter} w={8} h={8} color="logo.twitter" />
              </Link>
              <Link href="https://github.com/nagoya-forester" isExternal>
                <Icon as={FaGithub} w={8} h={8} color="logo.github" />
              </Link>
              <Link
                href="https://www.youtube.com/channel/UCBgEHLLEbfyKDyLvZuxHbRA"
                isExternal
              >
                <Icon as={FaYoutube} w={8} h={8} color="logo.youtube" />
              </Link>
              <Link href="https://gitlab.com/nagoya-forester" isExternal>
                <Icon as={FaGitlab} w={8} h={8} color="logo.gitlab" />
              </Link>
            </HStack>
          </Box>

          <Stack mt={4} spacing={2}>
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
        </DrawerBody>

        {/*
        <DrawerFooter as="div">
          <Text>iogsaghahsg</Text>
        </DrawerFooter>
        */}
      </DrawerContent>
    </>
  );
};
