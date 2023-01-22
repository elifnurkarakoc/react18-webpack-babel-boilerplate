FROM node:19-slim
WORKDIR /src
COPY . .
RUN npm install --force
RUN npm install -g live-server
RUN npm run build
EXPOSE 8080
CMD ["live-server","build/"]