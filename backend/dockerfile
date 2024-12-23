# Use Node.js image
FROM node:20-slim

WORKDIR /app

# Install nodemon globally
RUN npm install -g nodemon

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5000

# Use nodemon for development
CMD ["nodemon", "server.js"]