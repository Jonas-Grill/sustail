FROM node:18.10

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

RUN npm ci
RUN npm i sharp

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]