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
  Drawer,
  useDisclosure,
  Flex,
  Stack,
  Input,
} from "@chakra-ui/react";
import { HamburgerIcon, ChevronUpIcon, SearchIcon } from "@chakra-ui/icons";
import { HeaderLinks, HeaderPickup } from "../data/header_links";

// markup
const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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

        <Box>
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
        </Box>

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
          <Box aria-label="ページトップに戻る" as="button" h="56px" w="56px">
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
          {/*
          <Box>
            <Text fontWeight="bold" fontSize="lg">
              ソーシャルメディア
            </Text>
          </Box>
          */}
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
