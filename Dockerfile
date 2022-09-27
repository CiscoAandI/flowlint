FROM node:18.9.1

COPY package.json package.json
RUN yarn install

# Copy source libraries
COPY flowlint flowlint

ENTRYPOINT ["node", "/flowlint/index.js", "lint"]