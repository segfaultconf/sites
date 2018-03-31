FROM alpine:3.7

ADD https://github.com/gohugoio/hugo/releases/download/v0.37.1/hugo_0.37.1_Linux-64bit.tar.gz /tmp/hugo.tar.gz

RUN apk update && apk add git ncftp && mkdir .bin && tar xzvf /tmp/hugo.tar.gz -C .bin/
