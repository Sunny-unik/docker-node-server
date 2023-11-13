FROM ubuntu as builder

RUN apt-get update
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get upgrade -y
RUN apt-get install -y nodejs

WORKDIR /node-app

COPY package*.json .

RUN npm install

COPY . .

FROM node as runner

WORKDIR /node-app

COPY --from=builder node-app/ .

ENTRYPOINT [ "node", "index.js" ]