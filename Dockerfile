FROM node:18-alpine

# Install pnpm
RUN npm install -g pnpm

WORKDIR /app
COPY package*.json ./
RUN pnpm install

COPY . .
RUN pnpm build

ENV HOST=0.0.0.0
ENV PORT=3000
EXPOSE 3000

CMD ["node", "./dist/server/entry.mjs"] 