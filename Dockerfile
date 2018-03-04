FROM node:8-alpine

ENV PORT 3001

EXPOSE 3001

RUN npm install -g tsc

COPY package.json package.json
RUN npm install

COPY . .
RUN npm run build

CMD ["node", "dist/"]