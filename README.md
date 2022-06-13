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

To set up the development environment, install the [Gatsby CLI (yarn)](https://www.gatsbyjs.com/docs/glossary/yarn/) and
then follow the steps below.

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

## 🔎 Get the deployment files

**⚠️You need [Docker Engine](https://docs.docker.com/engine/) to run it.**

### Files to use

Use the contents of the `docker` file.

```text
kukunochi-gatsby
└─ docker
   ├─ gatsby
   │   ├─ .env.example
   │   └─ Dockerfile
   └─ docker-compose.yml
```

### Create a deployment files

```shell
cd docker
```

#### 1.Edit inside the gatsby folder

Rename `.env.example` file to `.env.local` and edit this file.

```text
# .env.local
SITE_URL=https://nagoya-forester.or.jp
API_URL=https://app.nagoya-forester.or.jp
```

#### 2.Build

It takes a lot of time to create.

```shell
docker-compose up -d
```

#### 3.Confirmation

Once the process is complete, the gatsby container will be stopped and the `public` folder will be completed.

Everything you need to deploy your site ends up in the `public` folder. The build includes minified files, transformed
images, JSON files with information and data for each page, static HTML for each page, and more.

A test web server will be started. Please check it at `http://localhost:8090`.

#### 4.Stop the test web server

Stop the test web server with a command.

```shell
docker-compose stop
```

## Change schedule

- Change WEBDesign
