FROM node:20-alpine as development

WORKDIR /app

COPY package*.json .

RUN npm install --production

COPY . .

RUN npm run build

COPY .next ./.next

CMD ["npm", "start"]