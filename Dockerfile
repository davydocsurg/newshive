# Build app
FROM node:18-slim AS builder
WORKDIR /usr/src/newshive

COPY package*.json ./
RUN npm install --frozen-lockfile

COPY src ./src
COPY public ./public
RUN npm run build

# Run app
FROM node:18-slim
WORKDIR /usr/src/newshive

COPY --from=builder /usr/src/newshive/build ./build
COPY --from=builder /usr/src/newshive/node_modules ./node_modules

ENV NODE_ENV=production

EXPOSE 8080

CMD [ "node" , "./build/index.js"]
