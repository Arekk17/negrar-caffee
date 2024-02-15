FROM node:18-alpine
WORKDIR /react-docker-app/
COPY public/ /react-docker-app/public
COPY src/ /react-docker-app/src
COPY package.json /react-docker-app/
RUN yarn install
CMD [ "yarn", "dev" ]