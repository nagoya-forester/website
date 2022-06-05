import * as React from "react";
import { graphql, Link as GatsbyLink, useStaticQuery } from "gatsby";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Heading,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Layout from "../../../components/layout";
import Seo from "../../../components/seo";
import { StaticImage } from "gatsby-plugin-image";

type Props = {
  location: Location;
};
// markup
const Jokoji = ({ location }: Props) => {
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
        name: "私たちについて",
        item: site.siteMetadata.siteUrl + "/about/",
      },

      {
        "@type": "ListItem",
        position: 3,
        name: "活動場所",
        item: site.siteMetadata.siteUrl + "/about/place/",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "定光寺ふれあいの森 2022年度協定フィールドの間伐について",
        item: site.siteMetadata.siteUrl + "/about/place/jokoji/",
      },
    ],
  };
  return (
    <Layout>
      <Seo
        PageTitle="定光寺ふれあいの森 2022年度協定フィールドの間伐について"
        PageDesc="定光寺ふれあいの森 2022年度協定フィールドの間伐について愛知森林管理事務所との協定内容を紹介しています。"
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
              <BreadcrumbItem>
                <BreadcrumbLink as={GatsbyLink} to={"/about/"}>
                  私たちについて
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink as={GatsbyLink} to={"/about/place/"}>
                  活動場所
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink as={GatsbyLink} to={"/about/place/jokoji/"}>
                  定光寺ふれあいの森 2022年度協定フィールドの間伐について
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Heading fontSize={"5xl"} as="h1">
              定光寺ふれあいの森 2022年度協定フィールドの間伐について
            </Heading>
            <Box overflow={"hidden"} mt={4}>
              <StaticImage
                src="../../../images/about/jokojimap.webp"
                alt="地図"
                placeholder="blurred"
                layout="constrained"
              />
            </Box>
          </Container>

          <Container mt={16} maxW="fit-content">
            <Box maxW={"3xl"}>
              <Heading mt={8} mb={5} fontSize={"3xl"} as="h2">
                1
                定光寺は、平成12年段戸ふれあいの森とほぼ同時期に愛知県森林管理事務所と協定を締結しそれ以降5年毎に更新している
              </Heading>
              <Text mt={5}>
                協定森林面積は当初20.26haだったが、のちに拡大し現在24.78haとなっている。
              </Text>
              <Text mt={5}>
                面積の大部分はコナラ・アベナキ・リョウブ・アカマツ・ソヨゴ・ヒサカキ・シイ及びカシ等の雑木林である。
              </Text>
              <Text mt={5}>
                これまで、森林内に約1,500mの散策遊歩道を開設しその後これらの補修整備を継続し行っている。
              </Text>
              <Heading mt={8} mb={5} fontSize={"3xl"} as="h2">
                2
                協定森林内にあるヒノキ人工林3.5haについて令和3年度から4か年計画で間伐を実践することとなっている
              </Heading>
              <Text mt={5}>
                該当ヒノキ人工林は樹齢50年超であるが当俱楽部としては、協定締結後、5ヶ月ほどかけた平成17年を最終年とした間伐を1度行っており、倶楽部として2回目の間伐となる。
              </Text>
              <Text mt={5}>
                今後、4か年計画予定の内令和3年度着手する区域は別紙図面のとおり1.01haである。
              </Text>
              <Heading mt={8} mb={5} fontSize={"3xl"} as="h2">
                3 間伐作業の手順
              </Heading>
              <OrderedList my={5} ml={7}>
                <ListItem>対象区域の現地再確認テープで表示</ListItem>
                <ListItem>
                  除伐の方法・程度、現地確認後協議しつつ、斜面下方向から除伐する。
                </ListItem>
                <ListItem>
                  林文調査は省略するが標準木を選び、樹高・胸高直径・樹齢・枝下高形状比等の計測をする。
                </ListItem>
              </OrderedList>
              <Heading mt={8} mb={5} fontSize={"3xl"} as="h2">
                4 間伐対象木の選定
              </Heading>
              <UnorderedList my={5} ml={7}>
                <ListItem>テープを巻く</ListItem>
                <ListItem>極端な劣勢木・曲木・損傷木等</ListItem>
                <ListItem>
                  残す木と木の間隔を概ねxm程度を目的として伐る木を選ぶ
                </ListItem>
                <ListItem>コナラ・シイノキ等の大木はそのまま残す</ListItem>
              </UnorderedList>
              <Heading mt={8} mb={5} fontSize={"3xl"} as="h2">
                5 伐倒作業について
              </Heading>
              <UnorderedList my={5} ml={7}>
                <ListItem>複数で作業する</ListItem>
                <ListItem>斜面の上の方から着手する</ListItem>
                <ListItem>
                  樹高が20m以上もあり幹廻りも太いのでロープ・プラロック等や木まわし・クサビ等を使用する。
                </ListItem>
                <ListItem>
                  倒した木は適宜玉切り枝払いをして土留めのためなるべく等高線に沿って置く
                </ListItem>
                <ListItem>選木テープを回収する</ListItem>
              </UnorderedList>
              <Heading mt={8} mb={5} fontSize={"3xl"} as="h2">
                6 安全確保について
              </Heading>
              <UnorderedList my={5} ml={7}>
                <ListItem>重心に逆らわず安全な方向へ倒す</ListItem>
                <ListItem>
                  伐るヒノキはいずれも長大であり必ず接近作業、上下作業を避けること
                </ListItem>
                <ListItem>伐倒時の合図と確認の遂行</ListItem>
                <ListItem>単独で無理せず困ったら応援を求める</ListItem>
                <ListItem>
                  急斜面での足場確保除伐をした切り株があり転倒の注意
                </ListItem>
              </UnorderedList>
              <Heading mt={8} mb={5} fontSize={"3xl"} as="h2">
                7 その他予想外のことが生じたらその都度協議する
              </Heading>
            </Box>
          </Container>
        </Box>
      </Box>
    </Layout>
  );
};

export default Jokoji;
