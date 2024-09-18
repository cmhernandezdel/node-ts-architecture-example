FROM node:22-alpine AS builder
WORKDIR /app

COPY package*.json /app

RUN npm install

COPY . .

RUN npm run build

FROM node:22-alpine AS runtime
WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/package*.json .
RUN npm install --only=production
COPY --from=builder /app/dist /app/dist
EXPOSE 3000

CMD ["node", "dist/app.js"]