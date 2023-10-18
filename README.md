# Building-management-API
This project implements a building management web service using JavaScript and Express.js. It offers endpoints to manage buildings, including CRUD. Data is stored in a MongoDB database using Mongoose.

## Demo

Extensive documentation with examples [here](https://documenter.getpostman.com/view/20805847/2s9YR86EFy)
## Features
- Robust and scalable backend api using node and express
- Global Error Handling
- Custom Error class for managing http status codes
- Morgan middleware for getting logs
- MVC Architecture with express-router for seperation of concern
- MongoDB Atlas for NoSql database using cloud storage
- Latest node v20.8.1 with built in test runner

## Usage

Update the values/settings in .env file
```

NODE_ENV=production
PORT=5000

MONGO_URI= your mongo uri

```

## Install Dependencies

```
npm install
```

## Run App

```
# Run in dev mode
npm start

# Run test suites
npm test
```
![Screenshot from 2023-10-18 11-03-45](https://github.com/shubham-am-i/Building-management-API/assets/88419331/6b5b0bc1-562f-48e3-94a0-02f67fad06de)



