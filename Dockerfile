# Build app
FROM node:18-slim AS builder

COPY package*.json ./newshive/

COPY backend /newshive/backend

WORKDIR /newshive
RUN npm install --frozen-lockfile

WORKDIR /newshive/backend
RUN npm run build

RUN npm install --frozen-lockfile --production --ignore-scripts

# Run app
FROM node:18-slim
COPY --from=builder /newshive /newshive

WORKDIR /newshive/backend

# COPY --from=builder /usr/newshive/newshive/build ./build
# COPY --from=builder /usr/newshive/newshive/node_modules ./node_modules

ENV NODE_ENV=production

EXPOSE 8080

CMD [ "node" , "./build/index.js"]
