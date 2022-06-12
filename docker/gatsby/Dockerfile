FROM node:lts-alpine
RUN apk update && apk add --no-cache git &&\
    yarn global add gatsby-cli &&\
    # demo Create config
    gatsby new decoy https://github.com/gatsbyjs/gatsby-starter-minimal.git &&\
    rm -rf decoy &&\
    sed -i 's/npm/yarn/g' /root/.config/gatsby/config.json &&\
    gatsby new website https://github.com/nagoya-forester/website.git

WORKDIR /website
COPY .env.local /website/

CMD gatsby build
