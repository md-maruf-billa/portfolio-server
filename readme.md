# Portfolio Backend API

- #### Live Link - `https://portfolio-eng-maruf-billas-projects.vercel.app/`



## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Installation](#installation)
- [Technologies Used](#used-technologies)
- [Models](#used-models)
  - [User Model](#user-model)
  - [Blog Model](#blog-model)
- [API Endpoints](#used-api-endpoints)
  - [Authentication](#for-authentication)
    - [Register User](#register-user)
    - [Login User](#login-user)
  - [Blog Management](#for-blog)
    - [Create Blog](#create-blog)
    - [Update Blog](#update-blog)
    - [Delete Blog](#delete-blog)
    - [Get All Blogs (Public)](#get-all-blogs-public)
  - [Admin Actions](#admin-actions)
    - [Block User](#block-user)
    - [Delete Blog (Admin)](#delete-blog-admin)
- [Error Handling](#error-handling)
- [Deployment](#deployment)
- [Submission](#submission)
- [License](#license)

## Project Overview

This project is a backend server for a blogging platform where users can write, update, and delete their own blogs,projects and messages while administrators have extended permissions to manage users and their blogs. The platform includes secure authentication, role-based access control, and a public API that allows users to view blogs with search, sort, and filter functionalities.



## Installation 
- #### Clone the repository:

```
git clone https://github.com/md-maruf-billa/Blog_Server_v1

// Navigate to the project folder:

```

- #### Install dependencies:

```
npm install
```

- #### Set up environment variables:
```javaScript
ENV_TYPE = development / production
PORT = 5000
DB_URI = Your Database URI / URL
JWT_SECRET = Your JWT Secret
```
- #### Run the application:
```
npm run start:dev
```
 The server will start at http://localhost:5000.


## Features

- **Role-Based Access Control:**
  - **Admin**: Can manage users and blogs (e.g., delete any blog, block users).
  - **User**: Can register, log in, and perform CRUD operations on their own blogs.
  
- **Authentication & Authorization:**
  - Secure login and user registration.
  - Role-based access for different actions (Admin, User).
  
- **Blog Management:**
  - Users can create, update, and delete their own blogs.
  - Admin can delete any blog and block users.
  
- **Public API for Blogs:**
  - Allows searching, sorting, and filtering blogs by title, content, and author.

## Used Technologies

- **TypeScript**
- **Node.js**
- **Express.js**
- **MongoDB** (with Mongoose)
- **Tools** - JWT, Zod, Bcript

## Used Models

#### User Model

- `name`: string
- `email`: string
- `password`: string
- `role`: `"admin" | "user"`
- `isBlocked`: boolean
- `createdAt`: Date
- `updatedAt`: Date

#### Blog Model

- `title`: string
- `content`: string
- `author`: ObjectId (references User)
- `isPublished`: boolean (default: true)
- `createdAt`: Date
- `updatedAt`: Date
#### Message Model

- `messageTitle`: string
- `messageBody`: string
- `user`: {
  - `name`:string
  - `email`:string
  - `photo`:string
    }


## Used API Endpoints

### For Authentication

#### Register User
- **POST** `/api/auth/register`
- Registers a new user with name, email, and password.
- Response: `201 Created` with user details.

#### Login User
- **POST** `/api/auth/login`
- Authenticates a user and returns a JWT token.
- Response: `200 OK` with JWT token.

### For Blog 

#### Create Blog
- **POST** `/api/blogs`
- Creates a new blog for a logged-in user.
- Request: Requires  Authorization header with Bearer `token`.
- Response: `201 Created` with blog details.

#### Update Blog
- **PATCH** `/api/blogs/:id`
- Allows a user to update their own blog by ID.
- Request: Requires  Authorization header with Bearer `token`.
- Response: `200 OK` with updated blog details.

#### Delete Blog
- **DELETE** `/api/blogs/:id`
- Allows a user to delete their own blog by ID.
- Request:Requires  Authorization header with Bearer `token`.
- Response: `200 OK` with success message.

#### Get All Blogs (Public)
- **GET** `/api/blogs`
- Fetches all blogs with options for searching, sorting, and filtering.
- Query Parameters:
  - `search`: Search by title or content.
  - `sortBy`: Sort by specific fields (e.g., `createdAt`).
  - `sortOrder`: Sorting order (e.g., `desc`).
  - `filter`: Filter by author ID.
#### Create Project

- **POST** `/api/project/create-project`
- Creates a new Project for a logged-in user.
- Request: Requires Authorization header with Bearer `token`.
- `Note`: form data needed.
- Response: `201 Created` with blog details.

#### Update Project

- **PATCH** `/api/project/:id`
- Allows a user to update their own Project by ID.
- Request: Requires Authorization header with Bearer `token`.
- Response: `200 OK` with updated blog details.


#### Delete Blog

- **DELETE** `/api/project/:id`
- Allows a user to delete their own Project by ID.
- Request:Requires Authorization header with Bearer `token`.
- Response: `200 OK` with success message.

#### Get All Blogs (Public)

- **GET** `/api/projects`
- Fetches all Project with options for searching, sorting, and filtering.
- Query Parameters:
  - `search`: Search by title or content.
  - `sortBy`: Sort by specific fields (e.g., `createdAt`).
  - `sortOrder`: Sorting order (e.g., `desc`).
  - `filter`: Filter by author ID.


#### Block User
- **PATCH** `/api/admin/users/:userId/block`
- Allows an admin to block a user by updating the `isBlocked` property.
- Request: Requires  Authorization header with Bearer `token`r.
- Response: `200 OK` with success message.

#### Delete Blog (Admin)
- **DELETE** `/api/admin/blogs/:id`
- Allows an admin to delete any blog by ID.
- Request: Requires  Authorization header with Bearer `token`.
- Response: `200 OK` with success message.

## Error Resopnse

- **Common Error Response:**
  ```json
  {
    "success": false,
    "message": "Error message",
    "statusCode": 400,
    "error": {"details": "Additional error details"},
    "stack": "error stack trace" // for development mood
  }
