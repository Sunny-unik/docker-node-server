FROM ubuntu 

RUN apt-get update
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get upgrade -y
RUN apt-get install -y nodejs

COPY package*.json /node-app/.

RUN cd node-app && npm install

COPY . /node-app/.

CMD [ "node", "node-app/index.js" ]