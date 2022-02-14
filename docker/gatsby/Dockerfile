FROM node:lts-alpine
RUN apk update && apk add --no-cache git
RUN yarn global add gatsby-cli
# demo Create config
RUN gatsby new decoy https://github.com/gatsbyjs/gatsby-starter-minimal.git
RUN rm -rf decoy
RUN sed -i 's/npm/yarn/g' /root/.config/gatsby/config.json

RUN gatsby new website https://github.com/nagoya-forester/website.git
WORKDIR /website
COPY .env.local /website/

CMD gatsby build
