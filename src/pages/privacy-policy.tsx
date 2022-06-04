import * as React from "react";
import Layout from "../components/layout";
import { graphql, Link as GatsbyLink, useStaticQuery } from "gatsby";
import Seo from "../components/seo";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

type Props = {
  location: Location;
};
// markup
const PrivacyPolicy = ({ location }: Props) => {
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
        name: "プライバシーポリシー",
        item: site.siteMetadata.siteUrl + "/privacy-policy/",
      },
    ],
  };
  return (
    <Layout>
      <Seo
        PageTitle="プライバシーポリシー"
        PageDesc="NPO法人名古屋シティフォレスター俱楽部のプライバシーポリシーを記載しており弊倶楽部の個人情報の取得や利用方法について記載しています。"
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
                <BreadcrumbLink as={GatsbyLink} to={"/privacy-policy/"}>
                  プライバシーポリシー
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Heading fontSize={"5xl"} as="h1">
              プライバシーポリシー
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
                1.基本方針
              </Heading>
              <Text mt={5}>
                当倶楽部は個人情報の取り扱いに関する重要性を認識し、適切な管理体制のもと個人情報の保護を行います。
              </Text>

              <Heading mt={16} mb={2} fontSize={"4xl"} as="h2">
                2.定義
              </Heading>
              <Text mt={5}>
                このプライバシーポリシーにおいて「個人情報」とは、個人情報の保護に関する法律第2条1項に定める情報をいいます。また、このプライバシーポリシーにおいて「個人データ」とは、個人情報の保護に関する法律第2条4項に定める情報をいい、「個人保有データ」とは個人情報の保護に関する法律第2条5項に定める情報をいいます。
              </Text>

              <Heading mt={16} mb={2} fontSize={"4xl"} as="h2">
                3.個人情報の取得方法
              </Heading>
              <Text mt={5}>
                当倶楽部への個人情報の提供は利用者の判断によるものであり、当倶楽部が強要するものではありません。また個人情報の提供をお願いする場合、利用目的及び個人データを提供する第三者の範囲を明らかにしたうえで、利用者からの同意をいただきます。
              </Text>

              <Heading mt={16} mb={2} fontSize={"4xl"} as="h2">
                4.個人情報の利用
              </Heading>
              <Text mt={5}>
                当倶楽部は取得した個人情報を下記目的のために利用させていただきます。
              </Text>
              <UnorderedList mt={5} ml={7}>
                <ListItem>各種問合せへの対応</ListItem>
                <ListItem>各種ご連絡・挨拶状の送付</ListItem>
                <ListItem>
                  当倶楽部が主催し、あるいは当倶楽部の提携先が主催する体験会などへの開催通知などの送付
                </ListItem>
                <ListItem>利用者の管理</ListItem>
                <ListItem>利用者に対するアンケートの実施</ListItem>
                <ListItem>メールマガジンの送信</ListItem>
                <ListItem>契約や法律等に基づく権利の行使や義務の履行</ListItem>
                <ListItem>その他個別に承諾いただいた目的</ListItem>
              </UnorderedList>

              <Heading mt={16} mb={2} fontSize={"4xl"} as="h2">
                5.個人情報の管理
              </Heading>
              <Text mt={5}>
                当倶楽部は利用者から提供された個人情報を適切かつ慎重に管理し、その漏洩、誤用、改ざん、不正アクセスなどの危険については、必要かつ適切な安全対策のもと個人情報の保護に努めます。
              </Text>

              <Heading mt={16} mb={2} fontSize={"4xl"} as="h2">
                6.開示、訂正等の手続きについて
              </Heading>
              <Text mt={5}>
                本人から個人情報の開示、訂正、追加、削除、利用停止のご希望の場合には、本人であることを確認させていただいたうえ、速やかに対応させていただきます。
              </Text>

              <Heading mt={16} mb={2} fontSize={"4xl"} as="h2">
                7.プライバシーポリシーの変更について
              </Heading>
              <Text mt={5}>
                当倶楽部は、個人情報に関して適用される日本の法令を遵守するとともに、本ポリシーの内容を適宜見直しその改善に努めます。修正された最新のプライバシーポリシーは常に本ページにて開示されます。
              </Text>
            </Box>
          </Container>
        </Box>
      </Box>
    </Layout>
  );
};

export default PrivacyPolicy;
