# Project Title

Innovation Hub: Indira's Portfolio

## Overview

Innovation Hub: Indira's Portfolio project is a comprehensive portfolio application that serves as a showcase for all of my works. This application features a user-login system, enabling each user to have a personalized portfolio page. Users can create and publish new posts as well as engage with other users by liking and following their works.

### Problem

In my experience, job interviews demand a portfolio website almost every time, leading me to create one using WordPress. However, I encountered frustrations with theme updates, paid themes, and styling issues. To overcome these obstacles, I aim to develop a user login system using React, providing better control and efficiency in managing my portfolio.

### User Profile

Users of the app will utilize it to connect with others by expressing their thoughts, sharing links, and following like-minded individuals. Additionally, organizations requiring user authentication for accessing specific content can benefit from the app.

### Features

- User Registration: Users can create a new account by providing necessary information such as username, email address, and password.
- User Login: Registered users can securely log in to their accounts using their credentials.
- Posting: Users can create and publish posts to share their thoughts and content with others.
- Following: Users can follow other users to receive updates on their posts and activity, fostering connections and networking.
- User Authentication for Organizations: Organizations can set up user authentication to restrict access to specific content or features, ensuring only authorized users can view or interact with certain resources.
- Responsive Design: The app is designed to be responsive across various devices and screen sizes, providing a seamless user experience on desktops, tablets, and smartphones.

## Implementation

### Frontend Development:

- Create a user interface using React and Sass.
- Implement navigation between pages using React Router.
- Ensure responsiveness across various devices and screen sizes with media queries.

### Backend Development:

- Develop a database schema to store user information.
- Set up an Express.js server to handle HTTP requests and responses.

### Tech Stack

- React: A JavaScript library for building user interfaces and efficient rendering.
- Sass: For styling and using features like variables and mixins.
- React Router: To navigate through different pages.
- Axios: To push and fetch data to and from the backend.
- Node.js: JavaScript runtime environment for backend server.
- Express.js: Used for handling HTTP requests.
- MySQL database: For storing user information.

### Sitemap

- HomePage: Registration form (if user is not registered yet)
- Profile: Page displaying user profile information and content.
- Create Post: Page to create a new post.

### Mockups

[Provide visuals of your app's screens here]

### Data

#### User Data:

- Attributes:
  - User ID (primary key)
  - Username
  - Email
  - Password (hashed)

#### Post Data:

- Attributes:
  - Post ID (primary key)
  - User ID (foreign key referencing User Data)
  - Title
  - Body
  - Date created
  - Updated date

#### Relationships:

- Each user can have multiple posts.
- Users can follow multiple users.

### Endpoints

- POST: "/register", { username, email, password }
- POST: "/login", { username, password }
- POST: "/create-post", { title, body }
- POST: "/post/id", { title, body }
- GET: "/post/id"

### Auth

- JWT authentication

## Roadmap

- Day 1-2: Planning, Initial Setup, and Git Flow for both Frontend and Backend
- Day 3-4: Frontend UI Development and Testing
- Day 4-8: Backend Development, integration testing to ensure proper communication between frontend and backend components.
- Day 9-10: Final Testing and Remaining Functionality

## Nice-to-haves

Your project will be marked based on what you committed to in the above document. Under nice-to-haves, you can list any additional features you may complete if you have extra time, or after finishing.
