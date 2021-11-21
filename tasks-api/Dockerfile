# Use node as a base image
FROM node:alpine
# Specify a WORKING_DIRECTORY for the container to use
WORKDIR /usr/app

# Copy all package.json files listing all dependencies inside to the WORKING_DIRECTORY
COPY package.json package-lock.json ./
# Run command to install all dependencies
RUN npm install
# Copy all other files and code to the WORKING_DIRECTORY
COPY . .

# Finally Run command to start the server
CMD [ "npm", "run", "start:prod" ]