FROM node:lts-alpine

WORKDIR /app

RUN npm install onchange -g

COPY ./package-lock.json ./package-lock.json
COPY ./package.json ./package.json

RUN npm install

CMD ["onchange", "-i", "-k", "-p", "1000", "./dist/index.js", "--", "node", "./dist/index.js"]
