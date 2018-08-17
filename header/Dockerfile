FROM node

COPY package.json .

# need to complie next.js
RUN npm install -g yarn
RUN yarn
RUN cd node_modules/next && yarn && npm link
RUN cd /

COPY . .

RUN yarn build

CMD yarn start
