FROM node:lts-buster

WORKDIR /app
RUN yarn global add @vue/cli

# This enforces hot-loading files in docker.
ENV CHOKIDAR_USEPOLLING=true

CMD yarn && yarn serve
