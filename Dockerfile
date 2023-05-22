# Stage 1: Build the Expo app
FROM node:14.17.0 as build-stage

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Stage 2: Serve the Expo app using Expo CLI
FROM node:14.17.0-alpine

WORKDIR /app

COPY --from=build-stage /app .

RUN npm install -g expo-cli

EXPOSE 19000
EXPOSE 19001
EXPOSE 19002

CMD ["expo", "start"]