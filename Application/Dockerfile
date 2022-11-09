# get node image
FROM node:latest 

# set working directory
WORKDIR /var/www/html

RUN rm -rf build

# copy the files
COPY package*.json ./

# initialize packages
RUN npm install

# copy the files
COPY . .


# run command npm start
CMD ["npm", "start"]