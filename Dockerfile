
FROM node:latest

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install
RUN npm run knex-seed

EXPOSE 3009 

CMD [ "npm", "start" ]