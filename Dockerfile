FROM node:18-slim

WORKDIR /app

# Copy package files
COPY package.json ./

# Install dependencies and serve globally
RUN npm install && npm install -g serve

# Copy source files
COPY . .

# Build the app
RUN npm run build

# Expose the port the app runs on
ENV HOST=0.0.0.0
ENV PORT=3000
EXPOSE 3000

# Start the app using serve instead of astro preview
CMD ["serve", "dist", "-l", "3000", "--no-clipboard"] 