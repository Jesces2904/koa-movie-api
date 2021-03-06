FROM alpine:latest
RUN apk add --update bash && rm -rf /var/cache/apk/*
RUN apk add --update nodejs npm
RUN apk add --update build-base libffi-dev  
RUN apk add --update git
RUN apk add --update sudo
RUN apk add --no-cache openssh-client
RUN mkdir ./src
RUN npm install -g nodemon
