# Build app
FROM node:18-slim AS builder
WORKDIR /src

COPY package*.json ./
RUN npm install --frozen-lockfile

COPY src ./src
COPY public ./public
COPY tsconfig.json ./
RUN npm run build

# Run app
FROM node:18-slim
WORKDIR /src

COPY --from=builder /src /src
# COPY --from=builder /usr/src/newshive/build ./build
# COPY --from=builder /usr/src/newshive/node_modules ./node_modules

ENV NODE_ENV=production

EXPOSE 8080

CMD [ "node" , "./build/index.js"]
