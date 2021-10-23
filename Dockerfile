FROM node:lts-buster

RUN npm install -g @vue/cli
WORKDIR /app