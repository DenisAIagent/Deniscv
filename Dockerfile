# Build stage
FROM node:20-alpine as builder

WORKDIR /app

# Copy package files
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy source code
COPY . .

# Build the application
RUN yarn build

# Production stage
FROM node:20-alpine

WORKDIR /app

# Copy built assets from builder
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/yarn.lock ./yarn.lock
COPY --from=builder /app/server.js ./server.js
COPY --from=builder /app/api ./api

# Install production dependencies only
RUN yarn install --production --frozen-lockfile

# Expose port
EXPOSE 3000

# Start the server
CMD ["node", "server.js"] 