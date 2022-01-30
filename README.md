# **NagoyaForester Website**
**Project name** kukunochi-gatsby

This is the repository for the main [NagoyaForester website](https://nagoya-forester.or.jp).

This site is built with [Gatsby](https://gatsbyjs.org).

## 🖥️ System used
- Gatsby
- Drupal
  - Apache
  - MariaDB

## 🔰 Development
### 1.Install
To set up the development environment, install the Gatsby CLI and then follow the steps below.
```shell
gatsby new kukunochi-gatsby [GitHub Url]
```
### 2.Edit file
```shell
cd kukunochi-gatsby/
```
Rename `.env.example` file to `.env.local` and edit this file.
```shell
# .env.local
SITE_URL=https://example.com
API_URL=https://api.example.com
```
### 3.Start development
```shell
gatsby develop
```
Your site can be viewed at `http://localhost:8000`.

### 🧐 Organization
```text
kukunochi-gatsby
├─ src
│  ├─ components
│  │   ├─ footer.js
│  │   ├─ header.js
│  │   ├─ seo.js
│  │   └─ layout.js
│  └─ pages
│      └─ ***
└─ package.json
```
## Change schedule
- Add news page
- Change Chakra UI
## Others
This site is developed using Windows Subsystem for Linux.
