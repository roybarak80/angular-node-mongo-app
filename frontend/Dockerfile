# frontend/Dockerfile
FROM node:20 AS builder

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build -- --configuration=production
RUN ls -la /app/dist/mongo-app  # Debug: Verify build output

FROM nginx:alpine
COPY --from=builder /app/dist/mongo-app /usr/share/nginx/html
RUN ls -la /usr/share/nginx/html  # Debug: Verify copied files
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80