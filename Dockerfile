FROM node:11.14-alpine

COPY ./package.json ./package.json
COPY ./webpack.config.js ./webpack.config.js

RUN npm install

CMD ["npm", "run", "watch"]