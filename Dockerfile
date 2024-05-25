FROM node:22-alpine

RUN npm install -g pnpm

EXPOSE 3000 4000 5000 4173 5173 9323
