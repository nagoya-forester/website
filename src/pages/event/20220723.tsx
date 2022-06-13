import * as React from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Heading,
  Link,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { ChevronRightIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { graphql, Link as GatsbyLink, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

// query

type Props = {
  location: Location;
};
// markup
const EventPost20220723 = ({ location }: Props) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          siteUrl
        }
      }
    }
  `);
  const schemaBreadcrumb = {
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
        name: "イベント",
        item: site.siteMetadata.siteUrl + "/event/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "里山学校「森林環境学習と体験」第15回",
        item: site.siteMetadata.siteUrl + location.pathname,
      },
    ],
  };
  const schemaEvent = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "里山学校「森林環境学習と体験」第15回",
    startDate: "2022-07-23T09:00:00+09:00",
    endDate: "2022-07-23T15:00:00+09:00",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "愛知森林管理事務所森林交流館の奥の建物",
      address: {
        "@type": "PostalAddress",
        name: "〒489-0001 愛知県瀬戸市川平町１",
      },
    },
    image: [
      site.siteMetadata.siteUrl + "/20220723-2.webp",
      site.siteMetadata.siteUrl + "/20220723-1.webp",
    ],
    description:
      "第15回里山学校「森林環境学習と体験」を開催します。横笛つくりや巣箱づくり「森林の生態系保全」学習や森林内体験と観察を行います。ぜひご参加ください。",
    organizer: {
      "@type": "Organization",
      name: site.siteMetadata.title,
      url: site.siteMetadata.siteUrl,
    },
  };
  return (
    <Layout>
      <Seo
        PageTitle={"里山学校「森林環境学習と体験」第15回"}
        PageDesc={
          "第15回里山学校「森林環境学習と体験」を開催します。横笛つくりや巣箱づくり「森林の生態系保全」学習や森林内体験と観察を行います。ぜひご参加ください。"
        }
        PagePath={location.pathname}
        PageNoindex={false}
        PageSchema={[schemaBreadcrumb, schemaEvent]}
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
                <BreadcrumbLink as={GatsbyLink} to={"/event/"}>
                  イベント
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink as={GatsbyLink} to={location.pathname}>
                  里山学校「森林環境学習と体験」第15回
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Heading fontSize={"5xl"} as="h1" mb={4}>
              里山学校「森林環境学習と体験」第15回
            </Heading>
          </Container>

          <Container mt={16} maxW="fit-content">
            <Box maxW={"3xl"}>
              <Heading
                textAlign={"center"}
                mt={16}
                mb={5}
                fontSize={"4xl"}
                as="h2"
              >
                2022年7月23日(土) 9時～15時
              </Heading>
              <Heading
                textAlign={"center"}
                mt={5}
                mb={5}
                fontSize={"4xl"}
                as="h2"
              >
                愛知県森林管理事務所森林交流館の奥の建物
              </Heading>
              <Heading
                textAlign={"center"}
                mt={5}
                fontSize={"6xl"}
                as="h2"
                color={""}
              >
                開催!!
              </Heading>
            </Box>
          </Container>
          <Container mt={16} maxW="fit-content">
            <Box maxW={"6xl"}>
              <Heading textAlign={"center"} mb={10} fontSize={"4xl"} as="h2">
                体験学習内容
              </Heading>
              <SimpleGrid columns={[1, 1, 2]} spacing={5}>
                <Box>
                  <Heading textAlign={"center"} fontSize={"3xl"} as="h3">
                    1 横笛つくり体験
                  </Heading>
                  <Text textAlign={"center"} mt={5}>
                    笛を吹いて、演奏してみよう。
                  </Text>
                </Box>
                <Box>
                  <Heading textAlign={"center"} fontSize={"3xl"} as="h3">
                    2 巣箱つくりと巣箱かけ
                  </Heading>
                  <Text textAlign={"center"} mt={5}>
                    板をカットし、組み立てます。出来上がった巣箱は森林内にかけます。
                  </Text>
                </Box>
                <Box>
                  <StaticImage
                    src="../../images/event/20220723-2.webp"
                    alt="巣箱"
                    placeholder="blurred"
                    layout="fullWidth"
                  />
                </Box>
                <Box>
                  <StaticImage
                    src="../../images/event/20220723-1.webp"
                    alt="参加の様子"
                    placeholder="blurred"
                    layout="fullWidth"
                  />
                </Box>
                <Box>
                  <Heading textAlign={"center"} fontSize={"3xl"} as="h3">
                    3 「森林の生態系保全」についての学習
                  </Heading>
                  <Text textAlign={"center"} mt={5}>
                    人工林と自然林の生態系など
                  </Text>
                </Box>
                <Box>
                  <Heading textAlign={"center"} fontSize={"3xl"} as="h3">
                    4 森林内体験と観察
                  </Heading>
                  <Text textAlign={"center"} mt={5}>
                    森林交流館付近の森林を散策し、学習します。
                  </Text>
                </Box>
              </SimpleGrid>
            </Box>
          </Container>
          <Container mt={16} maxW="fit-content">
            <Box maxW={"3xl"}>
              <UnorderedList my={5} ml={7}>
                <ListItem>日時: 2022年7月23日(土) 9時～15時</ListItem>
                <ListItem>
                  場所: 「愛知森林管理事務所森林交流館の奥の建物」瀬戸川平町１
                  駐車場有
                  <br />
                  下で地図のダウンロードができます。
                </ListItem>
              </UnorderedList>
              <UnorderedList my={5} ml={7}>
                <ListItem>
                  換気は良好ですが、家族単位等少人数グループで行います。なお、アルコール消毒を準備します。マスクを持参ください。
                </ListItem>
                <ListItem>昼食、飲み物は各自持参ください。</ListItem>
                <ListItem>損害保険は倶楽部で加入します。</ListItem>
              </UnorderedList>
              <Text mt={5}>30名を上限に募集します。家族参加を歓迎します。</Text>
              <Heading mt={5} mb={5} fontSize={"3xl"} as="h2">
                申込締切 7月13日(水)
              </Heading>
              <Heading mt={16} mb={5} fontSize={"4xl"} as="h2">
                お問い合わせと申し込み先
              </Heading>
              <Text mt={5}>名古屋市シティフォレスター俱楽部</Text>
              <Text mt={5}>458-0037 名古屋市緑区潮見が丘3-57 山田</Text>
              <Text mt={5}>電子メール:</Text>
              <Text mt={5}>ncfc51yamada@gmail.com</Text>
              <Text mt={5}>電話・FAX: 052-896-4654</Text>
              <Heading mt={8} mb={5} fontSize={"3xl"} as="h3">
                申し込み時の連絡事項
              </Heading>
              <Text mt={5}>代表者名前</Text>
              <Text mt={5}>
                参加人数＿＿名（うち、小学生＿＿名 幼児＿＿名）
              </Text>
              <Text mt={5}>連絡先の住所</Text>
              <Text mt={5}>電子メールアドレス</Text>
              <Text mt={5}>携帯電話番号</Text>
              <Heading mt={8} mb={5} fontSize={"3xl"} as="h3">
                その他
              </Heading>
              <Text mt={5}>
                取得した個人情報はイベントの管理運営のために使用します。
              </Text>
              <Text mt={5}>
                詳しくは
                <Link
                  as={GatsbyLink}
                  to={"/privacy-policy/"}
                  color="digital.200"
                >
                  プライバシーポリシー
                </Link>
                をご覧ください。
              </Text>
              <Text mt={5}>
                このイベントは「あいち森と緑づくり環境活動・学習推進事業交付金」を活用して行います。
              </Text>
              <Heading mt={16} mb={5} fontSize={"4xl"} as="h2">
                詳しい案内
              </Heading>
              <Text mt={5}>
                詳しい場所の案内と詳細はイベント案内PDFを御覧ください。
              </Text>
              <Link
                href="https://app.nagoya-forester.or.jp/sites/default/files/2022-06/satoyamagakko.pdf"
                color="digital.200"
                isExternal
              >
                PDFダウンロード <ExternalLinkIcon mx="2px" />
              </Link>
            </Box>
          </Container>
          <Box as="footer" />
        </Box>
      </Box>
    </Layout>
  );
};
export default EventPost20220723;
