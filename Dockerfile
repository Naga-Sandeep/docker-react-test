FROM node:alpine as docker_react_test_builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

CMD ["npm", "run", "build"]

FROM nginx
EXPOSE 80
COPY --from=docker_react_test_builder /app/build /usr/share/nginx/html
