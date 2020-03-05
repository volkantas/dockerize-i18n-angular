# The builder from node image
FROM node:alpine as builder

# build-time variables
# prod|sandbox its value will be come from outside
# ARG env=prod

RUN apk update && apk add --no-cache make git

# Move our files into directory name "app"
WORKDIR /app
COPY package.json package-lock.json  /app/
RUN npm install @angular/cli@9.0.1 -g
RUN cd /app && npm install
COPY .  /app

# Build with $env variable from outside
# RUN cd /app && npm run build:$env
RUN cd /app && npm run build-i18n

# Build a small nginx image with static website
FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY nginx.conf /etc/nginx/nginx.conf
# fixed unshown font icons with mime.types file and ngnix.conf > location ~* .(js|css|ttf|ttc|otf|eot|woff|woff2)$ {...
COPY mime.types /etc/nginx/mime.types
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
