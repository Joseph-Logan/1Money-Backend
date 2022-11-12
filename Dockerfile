###################
# BUILD FOR LOCAL DEVELOPMENT https://www.tomray.dev/nestjs-docker-production
###################

# Base image
FROM node:16.16.0-alpine AS development

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND pnpm-lock.yaml are copied
# Copying this first prevents re-running npm install on every code change.
COPY --chown=node:node .npmrc package.json pnpm-lock.yaml tsconfig.build.json ./

# Install app dependencies
RUN npm install -g pnpm
RUN pnpm install 

# Bundle app source
COPY . .

# Creates a "dist" folder with the production build
RUN pnpm run prebuild
RUN pnpm run build

# Use the node user from the image (instead of the root user)
USER node

# NODE_ENV is used to configure or choose which .env file will be readed
ENV NODE_ENV=development

# Start the server using the production build
CMD ["node", "dist/main"]
