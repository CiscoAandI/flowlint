FROM node:14.16.1

COPY package.json package.json
RUN yarn install

# Copy source libraries
COPY lib flowlint

ENTRYPOINT ["node", "/flowlint/index.js", "lint"]