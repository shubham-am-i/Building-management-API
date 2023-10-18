# Building-management-API
This project provides a RESTful API for managing building information. It is built using JavaScript, running on Node.js, and utilizes the Express.js framework for routing. MongoDB Atlas, integrated using Mongoose, is used as the database for storing building data

## How It Works
The API offers endpoints for creating, retrieving, updating, and deleting building records. The API follows REST conventions and returns data in JSON format. It includes validation checks for required fields and handles edge cases appropriately.

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

## Trade-offs
- No Real Authentication/Authorization: The current version of the API doesn't implement user authentication or authorization, which is crucial for production environments. Implementing these features would be a significant improvement.
- Validation: While we perform basic input validation, in a production setting, using a library like express-validator would provide more comprehensive and customizable validation for each input field.

## Setting Up for Production
For a production environment, consider following enhancements:

- Security Headers: Implement a package like helmet to add security headers that protect against common web vulnerabilities.
- XSS Prevention: Utilize packages like xss-clean to sanitize input and mongo-sanitize to protect against NoSQL injection attacks.
- Authentication and Authorization: Implement a robust authentication and authorization system to protect your routes.
- Rate Limiting: Employ rate limiting to prevent abuse of your API.
- Input Validation: Use express-validator for thorough input validation.
- Deployment Scripts: Create scripts for deploying your application on platforms like AWS, Heroku, or a custom server.

## Time and Challenges
This project took 5 hours to complete. As we are using node latest version, I decided to move with node built in test-runner. However, I am still learning to write test suites with it, apologies for not implementing fully-fledged unit tests.
