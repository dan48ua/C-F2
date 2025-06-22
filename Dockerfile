FROM node:18-alpine AS deps

WORKDIR /app

COPY package*.json ./

RUN npm ci
COPY . .

RUN npm run build
FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

CMD ["npm", "start"]
