FROM node:20-alpine as development

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

FROM node:20-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

COPY package*.json .

RUN npm ci --only=production
RUN npm install --global pm2

COPY --from=development /app/.next .next

EXPOSE 3000

CMD [ "pm2-runtime", "npm", "--", "start" ]
