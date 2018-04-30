FROM node:8.11.1-alpine

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN yarn install

EXPOSE 3004

CMD [ "npm", "run", "docker" ]