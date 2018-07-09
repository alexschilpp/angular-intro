FROM node:9.11.1-alpine as angular-intro-builder
#as angular-intro-builder tag

RUN npm install -g @angular/cli

# As the source folder is only temporary and will be deleted later we are storing package.json & node_modules on a separate layer outside of source.
# Thereby we don't have to run a full npm install at each build.
COPY package.json ./
COPY package-lock.json ./
RUN npm install \
  && mkdir -p /opt/angular-intro-built/source \
  && cp -R ./node_modules ./opt/angular-intro-built/source

WORKDIR /opt/angular-intro-built/source

COPY . .

# Build the angular app and store the artifacts in dist folder
RUN ng build --prod && mv dist ../dist

WORKDIR /opt/angular-intro-built/

RUN rm -rf source/

### nginx ###
FROM nginx:alpine

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

WORKDIR /opt/app

# Create the server and location configuration
COPY docker/conf/nginx/default.conf /etc/nginx/conf.d/default.conf

# Install tools
RUN apk update \
  && apk add supervisor jq

ADD docker/conf/supervisor.d/default.ini /etc/supervisor.d/

# From ‘builder’ stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=angular-intro-builder /opt/angular-intro-built /opt/app
