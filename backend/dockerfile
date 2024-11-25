FROM node:lts-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies (including nodemon for development)
RUN npm install

# Install nodemon globally for development (optional, for easier dev mode)
RUN npm install -g nodemon

# Copy the rest of the backend code
COPY . .

# Expose the backend port (default: 9000)
EXPOSE 9000

# Run the server in development mode using nodemon
CMD ["npm", "start"]
