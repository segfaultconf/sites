FROM alpine:3.7

ADD https://github.com/gohugoio/hugo/releases/download/v0.55.6/hugo_0.55.6_Linux-64bit.tar.gz /tmp/hugo.tar.gz

EXPOSE 1313

RUN apk update && apk add git ncftp lftp && mkdir .bin && tar xzvf /tmp/hugo.tar.gz -C .bin/
