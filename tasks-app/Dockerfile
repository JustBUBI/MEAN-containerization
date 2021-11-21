# - FIRST STEP - Build the image
# Use base image to start the container
FROM node:16-alpine As builder

# Specify a WORKING_DIRECTORY on the contianer file system where the application files will be coppied
WORKDIR /usr/app

# Copy the package.json files because they list the information of all dependencies
COPY package.json package-lock.json ./
# Run a command to install all dependencies
RUN npm install
# Copy all files from current host directory to the container WORKING_DIRECTORY
COPY . .
# Run a command to build the Angular application
# (newer verions of Angular build the app in production by default)
RUN npm run build

# - SECOND STEP - Use the image './dist' folder and expose it
# Use nginx as a base image
FROM nginx:alpine
# Expose the port on which the app will be working, default is 80, which will interfere when deploying,
# this is why it is changed to 3000
EXPOSE 3000
# The default nginx settings need to be overwriten, so the custo configuration needs to be copied
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
# Use the builder (FIRST STEP) and copy files from './dist' to the folder which serves static content
# from nginx
COPY --from=builder /usr/app/dist/tasks-app/ /usr/share/nginx/html