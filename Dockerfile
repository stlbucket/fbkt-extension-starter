FROM mhart/alpine-node:6.9.2

WORKDIR /var/fbkt-extension

COPY . /var/fbkt-extension

RUN npm install

EXPOSE 20831

ENV NODE_ENV=dev

CMD ["node", "server"]