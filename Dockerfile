FROM node:19.5.0

COPY package.json package.json
RUN yarn install

# Copy source libraries
COPY flowlint flowlint

ENTRYPOINT ["node", "/flowlint/index.js", "lint"]