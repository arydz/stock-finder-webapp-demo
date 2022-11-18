FROM node:18.12-alpine
WORKDIR /app
COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli@14.2.7
COPY . /app
CMD npm start
