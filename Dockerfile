FROM node:14.15.0

COPY package.json package.json
RUN yarn install

# Copy source libraries
COPY lib flowlint

ENTRYPOINT ["node", "/flowlint/index.js", "lint"]