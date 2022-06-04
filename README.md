# **NagoyaCityForesterClub Website**

This is the repository for the main [NagoyaCityForesterClub website](https://nagoya-forester.or.jp).

This site is built with [Gatsby](https://gatsbyjs.org).

## 🖥️ System used

- Gatsby
  - yarn
  - TypeScript
- Drupal
  - Apache
  - MariaDB

## 🔰 Development

### 1.Install

To set up the development environment, install the [Gatsby CLI (yarn)](https://www.gatsbyjs.com/docs/glossary/yarn/) and then follow the steps below.

```shell
gatsby new website [GitHub Url]
```

### 2.Edit file

```shell
cd website/
```

Rename `.env.example` file to `.env.local` and edit this file.

```text
# .env.local
SITE_URL=https://nagoya-forester.or.jp
API_URL=https://app.nagoya-forester.or.jp
```

### 3.Start development

```shell
gatsby develop
```

Your site can be viewed at `http://localhost:8000`.

## Change schedule

- Change WEBDesign
