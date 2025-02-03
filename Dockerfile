FROM node:18-slim

WORKDIR /app

# Copy package files
COPY package.json ./

# Install dependencies
RUN npm install

# Copy source files
COPY . .

# Build the app
RUN npm run build

# Expose the port the app runs on
ENV HOST=0.0.0.0
ENV PORT=3000
EXPOSE 3000

# Start the app
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "3000"] 