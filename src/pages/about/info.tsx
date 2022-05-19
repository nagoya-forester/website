import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Heading,
  Tabs,
  Text,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  TableContainer,
  Table,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Link as GatsbyLink } from "gatsby";

// markup
const Info = () => {
  return (
    <Layout>
      <Seo
        PageTitle="団体情報"
        PageDesc="NPO法人名古屋シティフォレスター俱楽部の法人情報や団体の概要を紹介しています。"
        PagePath={""}
        PageNoindex={false}
      />

      <Box as="main" mt={4} mb={10}>
        <Box as="article">
          <Container as="header" maxW={"6xl"}>
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
                <BreadcrumbLink as={GatsbyLink} to={"/about/info/"}>
                  団体情報
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Heading fontSize={"5xl"} as="h1">
              団体情報
            </Heading>
          </Container>

          <TableContainer
            marginX="auto"
            px={4}
            mt={16}
            maxW={"3xl"}
            overflowX={"auto"}
          >
            <Table variant="simple">
              <Tbody>
                <Tr>
                  <Th>名称</Th>
                  <Td>特定非営利活動法人名古屋シティフォレスター俱楽部</Td>
                </Tr>
                <Tr>
                  <Th>主たる事務所</Th>
                  <Td>愛知県名古屋市緑区潮見が丘三丁目57番地</Td>
                </Tr>
                <Tr>
                  <Th>代表者氏名</Th>
                  <Td>山田均</Td>
                </Tr>
                <Tr>
                  <Th>設立認証年月日</Th>
                  <Td>2011年03月11日</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>

          <Tabs
            isFitted
            variant="enclosed"
            marginX="auto"
            px={4}
            mt={16}
            maxW={"4xl"}
            overflowX={"auto"}
          >
            <TabList>
              <Tab>基本情報</Tab>
              <Tab>主な活動内容</Tab>
              <Tab>財政状況</Tab>
              <Tab>募集内容</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <TableContainer marginX="auto" overflowX={"auto"}>
                  <Table variant="simple">
                    <Tbody>
                      <Tr>
                        <Th>法人番号</Th>
                        <Td>6180005014088</Td>
                      </Tr>
                      <Tr>
                        <Th>所轄庁</Th>
                        <Td>愛知県</Td>
                      </Tr>
                      <Tr>
                        <Th>目的</Th>
                        <Td>
                          <Text w={"2xl"}>
                            この法人は、森林の重要性とその必要性を認識し、森林整備体験活動等を通して豊かな森づくりを進めると共に、地域・一般市民、企業等と協働活動を行い、森林の環境整備を図ることを目的とする。
                          </Text>
                        </Td>
                      </Tr>
                      <Tr>
                        <Th>事務局責任者</Th>
                        <Td></Td>
                      </Tr>
                      <Tr>
                        <Th>理事数</Th>
                        <Td></Td>
                      </Tr>
                      <Tr>
                        <Th>監事数</Th>
                        <Td></Td>
                      </Tr>
                      <Tr>
                        <Th>有給役員数</Th>
                        <Td></Td>
                      </Tr>
                      <Tr>
                        <Th>事務局スタッフ数</Th>
                        <Td></Td>
                      </Tr>
                      <Tr>
                        <Th>電話番号</Th>
                        <Td></Td>
                      </Tr>
                      <Tr>
                        <Th>FAX</Th>
                        <Td></Td>
                      </Tr>
                      <Tr>
                        <Th>ホームページアドレス</Th>
                        <Td></Td>
                      </Tr>
                      <Tr>
                        <Th>ホームページの内容</Th>
                        <Td></Td>
                      </Tr>
                      <Tr>
                        <Th>E-Mail</Th>
                        <Td></Td>
                      </Tr>
                      <Tr>
                        <Th>ブログ</Th>
                        <Td></Td>
                      </Tr>
                      <Tr>
                        <Th>ブログRSS</Th>
                        <Td></Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel>
                <p>one!</p>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>

          <Container mt={16} maxW="fit-content">
            <Box maxW={"3xl"}>
              <Heading mt={16} mb={5} fontSize={"4xl"} as="h2">
                倶楽部の概要
              </Heading>
              <Text mt={5}>
                当倶楽部は、森林の重要性とその必要性を認識し、森林整備活動を通して豊かな森づくりを進めることを目的とした団体です。
              </Text>
              <Text mt={5}>
                平成１２年に設立し、平成２３年３月にＮＰＯ法人として認証されました。
              </Text>
              <Text mt={5}>
                平成２７年には、国有林を管理する林野庁から感謝状を頂きました。
              </Text>
              <Text mt={5}>
                令和２年５月現在の倶楽部員は３０名です。４０代から７０年代まで幅広い年齢構成となっています。ご夫婦で活動に参加されている方もおられます。
              </Text>
              <Text mt={5}>
                年間活動日数は約４６日程度を予定しています。月平均で週末が２～３日、平日が２日です。ご都合の良い日に参加できます。
              </Text>
              <Text mt={5}>
                年会費は３,０００円です。（親睦イベント時には実費を頂く場合があります。）
              </Text>
            </Box>
          </Container>

          <Box as="footer" />
        </Box>
      </Box>
    </Layout>
  );
};

export default Info;
