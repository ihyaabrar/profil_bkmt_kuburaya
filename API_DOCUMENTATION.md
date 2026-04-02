# API Documentation for Profil BKMT Kuburaya

## Introduction
This document provides comprehensive API documentation for all endpoints of the Profil BKMT Kuburaya system.

## Authentication Endpoint
### Endpoint: `/api/auth/login`
- **Method**: POST
- **Description**: Authenticates a user and returns a JWT token.
- **Request Headers**:
  - Content-Type: application/json
- **Request Body**:
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
- **Response**:
  - **Success**: `200 OK`
    ```json
    {
      "token": "your_jwt_token"
    }
    ```
  - **Error**: `401 Unauthorized`
    ```json
    {
      "error": "Invalid credentials"
    }
    ```

## News Endpoints
### Endpoint: `/api/news`
- **Method**: GET
- **Description**: Retrieves a list of news articles.
- **Response**:
  - **Success**: `200 OK`
    ```json
    [
      {
        "id": "int",
        "title": "string",
        "content": "string",
        "date": "string"
      }
    ]
    ```

### Endpoint: `/api/news`
- **Method**: POST
- **Description**: Creates a new news article.
- **Request Headers**:
  - Authorization: Bearer your_jwt_token
  - Content-Type: application/json
- **Request Body**:
  ```json
  {
    "title": "string",
    "content": "string"
  }
  ```
- **Response**:
  - **Success**: `201 Created`
    ```json
    {
      "message": "News article created successfully"
    }
    ```

## Pages Endpoints
### Endpoint: `/api/pages`
- **Method**: GET
- **Description**: Retrieves a list of pages.
- **Response**:
  - **Success**: `200 OK`
    ```json
    [
      {
        "id": "int",
        "title": "string",
        "content": "string"
      }
    ]
    ```

### Endpoint: `/api/pages/{id}`
- **Method**: GET
- **Description**: Retrieves a specific page by ID.
- **Response**:
  - **Success**: `200 OK`
    ```json
    {
      "id": "int",
      "title": "string",
      "content": "string"
    }
    ```

## Error Handling
Common error codes and messages include:
- `400 Bad Request`: Invalid input.
- `404 Not Found`: Resource not found.
- `500 Internal Server Error`: Unexpected server error.

## Conclusion
For additional resources, please refer to the official [API documentation](#).