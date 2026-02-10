# Stage 1: Install dependencies
FROM node:24-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

# Stage 2: Build the application
FROM node:24-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Remove data dir so it doesn't get baked into the image;
# it will be mounted as a volume at runtime
RUN rm -rf ./data

ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build

# Stage 3: Production runner
FROM node:24-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy public assets
COPY --from=builder /app/public ./public

# Copy standalone build output
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Install su-exec for dropping privileges in entrypoint
RUN apk add --no-cache su-exec

# Create data directory as a mount point
RUN mkdir -p /app/data && chown nextjs:nodejs /app/data

# Copy entrypoint script
COPY --chmod=755 docker-entrypoint.sh /app/docker-entrypoint.sh

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Run as root so entrypoint can fix permissions, then drops to nextjs
ENTRYPOINT ["/app/docker-entrypoint.sh"]
