import * as React from "react"
import { Link as GatsbyLink } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
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
  Stack,
  useDisclosure,
  Flex,
} from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"

// styles

// markup
const Header = () => {
  return (
    <Box as="header" h={{ base: "60px", md: "70px", lg: "80px" }}>
      <Container maxWidth="8xl" display="flex" justify="space-between">
        <Box w={{ base: "240px", md: "280px", lg: "320px" }} mr="auto">
          <Link as={GatsbyLink} to={"/"} d="flex">
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
              to={"/about/"}
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
              to={"/blog/"}
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
              to={"/event/"}
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
              to={"/contact/"}
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
  )
}

export default Header

const HamburgerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
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

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader as="div">
            <DrawerCloseButton />
          </DrawerHeader>

          <DrawerBody as="nav">
            <Stack
              listStyleType={"none"}
              as="ul"
              fontSize="lg"
              spacing={4}
              fontWeight="bold"
            >
              <Box as="li">
                <Link d="inline-block" py={1} as={GatsbyLink} to={"/"}>
                  ホーム
                </Link>
              </Box>
              <Box as="li">
                <Link d="inline-block" py={1} as={GatsbyLink} to={"/about/"}>
                  私たちについて
                </Link>
              </Box>
              <Box as="li">
                <Link d="inline-block" py={1} as={GatsbyLink} to={"/blog/"}>
                  ブログ
                </Link>
              </Box>
              <Box as="li">
                <Link d="inline-block" py={1} as={GatsbyLink} to={"/event/"}>
                  イベント
                </Link>
              </Box>
              <Box>
                <Link d="inline-block" py={1} as={GatsbyLink} to={"/support/"}>
                  サポート
                </Link>
              </Box>
              <Box as="li">
                <Link
                  d="inline-block"
                  py={1}
                  as={GatsbyLink}
                  to={"/volunteer/"}
                >
                  ボランティア
                </Link>
              </Box>
              <Box as="li">
                <Link
                  d="inline-block"
                  py={1}
                  as={GatsbyLink}
                  to={"/education/"}
                >
                  教育
                </Link>
              </Box>
              <Box as="li">
                <Link d="inline-block" py={1} as={GatsbyLink} to={"/"}>
                  お知らせ
                </Link>
              </Box>
              <Box as="li">
                <Link
                  d="inline-block"
                  py={1}
                  as={GatsbyLink}
                  to={"/admission/"}
                >
                  入会案内
                </Link>
              </Box>
              <Box as="li">
                <Link d="inline-block" py={1} as={GatsbyLink} to={"/contact/"}>
                  お問い合わせ
                </Link>
              </Box>
            </Stack>
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
        </DrawerContent>
      </Drawer>
    </>
  )
}
