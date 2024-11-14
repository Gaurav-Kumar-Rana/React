FROM node:23-alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm install

COPY . /app

CMD npm run dev

EXPOSE 1234