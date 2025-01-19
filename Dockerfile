FROM node:18-alpine

# Install pnpm
RUN npm install -g pnpm serve

WORKDIR /app
COPY package*.json ./
RUN pnpm install

COPY . .
RUN pnpm build

ENV HOST=0.0.0.0
ENV PORT=3000
EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"] 