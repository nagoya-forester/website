import * as React from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Heading,
  ListItem,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  UnorderedList,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { graphql, Link as GatsbyLink, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

type Props = {
  location: Location;
};
// markup
const Using = ({ location }: Props) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `);
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
        name: "ご利用にあたって",
        item: site.siteMetadata.siteUrl + "/using/",
      },
    ],
  };
  return (
    <Layout>
      <Seo
        PageTitle="ご利用にあたって"
        PageDesc="NPO法人名古屋シティフォレスター俱楽部WEBサイト利用に関する情報を記載しています。"
        PagePath={location.pathname}
        PageNoindex={false}
        PageSchema={schema}
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
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink as={GatsbyLink} to={"/using/"}>
                  ご利用にあたって
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Heading fontSize={"5xl"} as="h1">
              ご利用にあたって
            </Heading>
          </Container>

          <Container mt={16} maxW="fit-content">
            <Box maxW={"3xl"}>
              <Text mt={5}>
                日頃よりNPO法人名古屋シティフォレスター倶楽部WEBサイト（以下「当ウェブサイト」といいます）をご利用いただきありがとうございます。
              </Text>
              <Text mt={5}>
                当ウェブサイトは、NPO法人名古屋シティフォレスター俱楽部（以下「当倶楽部」といいます）により管理、運営されております。閲覧・利用にあっては下記事項をご一読いただきますようお願いいたします。なお、下記内容は予告なく変更する可能性があります。
              </Text>
              <Heading mt={16} mb={2} fontSize={"4xl"} as="h2">
                免責事項
              </Heading>
              <UnorderedList mt={5} ml={7}>
                <ListItem mt={2}>
                  当ウエブサイトのご利用は、利用者自身の責任で行われるものとします。記載されている情報は慎重に作成、管理しておりますが、正確性や安全性を保障するものではありません。当ウェブサイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
                </ListItem>
                <ListItem mt={2}>
                  当ウェブサイトに掲載する情報の全部または一部を予告なく変更する場合があります。
                </ListItem>
                <ListItem mt={2}>
                  当倶楽部は、当ウェブサイトからリンクが張られている第三者のウェブサイト、または当ウェブサイトへリンクを張っている第三者のウェブサイトから取得された各種情報のご利用によって生じたいかなる損害についても責任を負いません。
                </ListItem>
              </UnorderedList>

              <Heading mt={16} mb={2} fontSize={"4xl"} as="h2">
                著作権
              </Heading>
              <UnorderedList mt={5} ml={7}>
                <ListItem mt={2}>
                  当ウェブサイト上に掲載されている著作物の著作権は当倶楽部または第三者が保有しており、著作権法上認められる例外を除き、著作権者の許諾なしに、これらの著作物を複製、翻案、公衆送信等することはできません。
                </ListItem>
                <ListItem mt={2}>
                  当ウェブサイトに記載されている著作物に関して問題がございましたら、お問い合わせよりご連絡ください。迅速に対応いたします。
                </ListItem>
              </UnorderedList>
              <Heading mt={16} mb={2} fontSize={"4xl"} as="h2">
                推奨環境について
              </Heading>
              <Text mt={5}>
                当ウェブサイトを安全で高速な環境でご利用いただくため、下記の条件を満たすOS・ブラウザでご覧ください。
              </Text>
              <Text mt={5}>※それ以外では正しく動作しません。</Text>

              <Table mt={5} variant="simple">
                <Thead>
                  <Th>種類</Th>
                  <Th>環境</Th>
                </Thead>
                <Tbody>
                  <Tr>
                    <Th>TLS</Th>
                    <Td>
                      TLS 1.2
                      <br />
                      TLS 1.3
                    </Td>
                  </Tr>
                  <Tr>
                    <Th>ブラウザ</Th>
                    <Td>
                      以下の各公式最新バージョン
                      <br />
                      Mozilla Firefox
                      <br />
                      Google Chrome
                      <br />
                      Microsoft Edge
                      <br />
                      Safari
                      <br />
                    </Td>
                  </Tr>
                  <Tr>
                    <Th>プロトコル</Th>
                    <Td>
                      HTTP/2
                      <br />
                      HTTP/3
                    </Td>
                  </Tr>
                  <Tr>
                    <Th>画像</Th>
                    <Td>WebP</Td>
                  </Tr>
                </Tbody>
              </Table>

              <Heading mt={16} mb={2} fontSize={"4xl"} as="h2">
                TLSについて
              </Heading>
              <Text mt={5}>
                当ウェブサイトは利用者の個人情報保護のため、TLS(Transport Layer
                Security)を利用しています。当ウェブサイトは楕円曲線暗号を使用しています。
              </Text>
            </Box>
          </Container>

          <Box as="footer" />
        </Box>
      </Box>
    </Layout>
  );
};

export default Using;
