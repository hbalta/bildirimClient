FROM node:18.12

WORKDIR angular

COPY package.json ./

RUN npm install --force

COPY . /etc/web/

RUN npm run build
EXPOSE 4200

CMD ["npm","--max-old-space-size=4096", "start"]


