FROM node:18-slim

COPY package*.json /usr/package*.json
COPY . .

# Create app directory
WORKDIR /usr/src/newshive

# Install app dependencies
RUN npm install --frozen-lockfile

# Bundle app source
WORKDIR /usr/src/newshive
RUN npm run build

RUN npm install --frozen-lockfile --production --ignore-scripts


# Build app
FROM node:18-slim
COPY --from=builder /usr/src /usr/src

WORKDIR /usr/src/newshive

ENV NODE_ENV=production

EXPOSE 8080

CMD [ "node" , "./build/index.js"]