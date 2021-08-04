FROM node:16.6.1

COPY package.json package.json
RUN yarn install

# Copy source libraries
COPY flowlint flowlint

ENTRYPOINT ["node", "/flowlint/index.js", "lint"]