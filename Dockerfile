FROM node:lts-alpine3.16

RUN mkdir -p /usr/src/nuxt-app
WORKDIR /ust/src/nuxt-app

RUN apk update && apk upgrade
RUN apk add git

COPY . /ust/src/nuxt-app/
RUN npm install
RUN npm run build

EXPOSE 3000

ENV NUXT_HOST = 0.0.0.0
ENV NUXT_PORT = 3000

CMD ["npm", "start"]
