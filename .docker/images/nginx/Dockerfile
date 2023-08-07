FROM nginx
COPY certs/selcuklu.crt /etc/nginx/certs/
COPY certs/selcuklu.key /etc/nginx/certs/
COPY sites.conf /etc/nginx/conf.d/sites.conf
COPY nginx.conf /etc/nginx/nginx.conf
RUN mkdir -p /etc/nginx/logs

