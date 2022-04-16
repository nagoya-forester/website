import * as React from "react";
import { Link as GatsbyLink } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import {
  Box,
  Text,
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
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

// markup
const Header = () => {
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
          <Box>
            <Link
              as={GatsbyLink}
              to={"/"}
              mx=".60vw"
              px=".60vw"
              display="flex"
              h="100%"
              alignItems="center"
            >
              ホーム
            </Link>
          </Box>
          <Box>
            <Link
              as={GatsbyLink}
              to={"/"}
              mx=".60vw"
              px=".60vw"
              display="flex"
              h="100%"
              alignItems="center"
            >
              私たちについて
            </Link>
          </Box>
          <Box>
            <Link
              as={GatsbyLink}
              to={"/"}
              mx=".60vw"
              px=".60vw"
              display="flex"
              h="100%"
              alignItems="center"
            >
              ブログ
            </Link>
          </Box>
          <Box>
            <Link
              as={GatsbyLink}
              to={"/"}
              mx=".60vw"
              px=".60vw"
              display="flex"
              h="100%"
              alignItems="center"
            >
              イベント
            </Link>
          </Box>
          <Box>
            <Link
              as={GatsbyLink}
              to={"/"}
              mx=".60vw"
              px=".60vw"
              display="flex"
              h="100%"
              alignItems="center"
            >
              お問い合わせ
            </Link>
          </Box>
        </Flex>

        <Box>
          <HamburgerMenu />
        </Box>
      </Container>
    </Box>
  );
};

export default Header;

const HamburgerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        aria-label="メニュー"
        as="button"
        h={{ base: "60px", md: "70px", lg: "80px" }}
        w={{ base: "60px", md: "70px", lg: "80px" }}
        onClick={onOpen}
      >
        <HamburgerIcon w={[6, 6, 7]} h={[6, 6, 7]} />
        <Box mt={[0.5, 0.5, 1]} fontSize="xs">
          MENU
        </Box>
      </Box>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader as="div">
            <DrawerCloseButton />
          </DrawerHeader>

          <DrawerBody>
            <Text>waagsgsagassgjpodgsgopsdjgewt;lwetwetweetewtljtwerwergd</Text>
            <Box height="800px" />
            <Text>waagsgsagassgjpodgsgopsdjgewt;lwetwetweetewtljtwerwergd</Text>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
