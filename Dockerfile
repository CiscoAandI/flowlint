FROM node:16.7.0

COPY package.json package.json
RUN yarn install

# Copy source libraries
COPY flowlint flowlint

ENTRYPOINT ["node", "/flowlint/index.js", "lint"]