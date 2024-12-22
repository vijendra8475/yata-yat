# Backend API Documentation

## Endpoints

### POST /users/register

#### Description
This endpoint is used to register a new user.

#### Request Body
The request body must be a JSON object with the following fields:
- `fullname.firstname` (string, required): The first name of the user. Must be at least 3 characters long.
- `fullname.lastname` (string, required): The last name of the user.
- `email` (string, required): The email address of the user. Must be a valid email format.
- `password` (string, required): The password for the user. Must be at least 6 characters long.

Example:
```json
{
    "fullname": {
        "firstname": "John",
        "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "password123"
}
```

#### Responses
201 Created
Description: User successfully registered.
Body: A JSON object containing the authentication token and user details.
Example:
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
        "_id": "60d0fe4f5311236168a109ca",
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "john.doe@example.com"
    }
}
```

400 Bad Request
Description: Validation errors or missing required fields.
Body: A JSON object containing the validation errors.
Example:
```json
{
    "errors": [
        {
            "msg": "Invalid Email",
            "param": "email",
            "location": "body"
        },
        {
            "msg": "Firstname must be atleast 3 characters long",
            "param": "fullname.firstname",
            "location": "body"
        },
        {
            "msg": "Password must be atleast 6 characters long",
            "param": "password",
            "location": "body"
        }
    ]
}
```

### POST /users/login

#### Description
This endpoint is used to log in an existing user.

#### Request Body
The request body must be a JSON object with the following fields:
- `email` (string, required): The email address of the user. Must be a valid email format.
- `password` (string, required): The password for the user. Must be at least 6 characters long.

Example:
```json
{
    "email": "john.doe@example.com",
    "password": "password123"
}
```

#### Responses
200 OK
Description: User successfully logged in.
Body: A JSON object containing the authentication token and user details.
Example:
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
        "_id": "60d0fe4f5311236168a109ca",
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "john.doe@example.com"
    }
}
```

400 Bad Request
Description: Validation errors or missing required fields.
Body: A JSON object containing the validation errors.
Example:
```json
{
    "errors": [
        {
            "msg": "Invalid Email",
            "param": "email",
            "location": "body"
        },
        {
            "msg": "Password must be atleast 6 characters long",
            "param": "password",
            "location": "body"
        }
    ]
}
```

401 Unauthorized
Description: Invalid credentials.
Body: A JSON object containing the error message.
Example:
```json
{
    "message": "Invalid Credentials"
}
```

### GET /users/profile

#### Description
This endpoint is used to get the profile of the authenticated user.

#### Responses
200 OK
Description: User profile successfully retrieved.
Body: A JSON object containing the user details.
Example:
```json
{
    "user": {
        "_id": "60d0fe4f5311236168a109ca",
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "john.doe@example.com"
    }
}
```

401 Unauthorized
Description: Unauthorized access.
Body: A JSON object containing the error message.
Example:
```json
{
    "message": "Unauthorized Token not Found"
}
```

### POST /users/logout

#### Description
This endpoint is used to log out an existing user.

#### Responses
200 OK
Description: User successfully logged out.
Body: A JSON object containing the success message.
Example:
```json
{
    "message": "Logged Out Successfully"
}
```

## Setup
To set up the project, follow these steps:

1. Clone the repository.
2. Install the dependencies using `npm install`.
3. Create a `.env` file in the root directory with the following variables:
4. Start the server using `node server.js`.

## Dependencies
- bcrypt
- cors
- dotenv
- express
- express-validator
- jsonwebtoken
- mongoose
