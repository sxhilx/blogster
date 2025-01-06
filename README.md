# React App with Appwrite & TinyMCE

This is a full-stack React application built using Vite, integrated with Appwrite as the backend service for authentication and data management. The project includes user authentication, post creation and management, file upload and preview, and an integrated Rich Text Editor (TinyMCE) for creating and editing posts.

## Features

- **User Authentication**: Built with Appwrite, featuring login, sign-up, and user session management.
- **Post Management**: Create, update, and delete posts, with dynamic slugs and a Rich Text Editor (TinyMCE) for post content.
- **File Upload**: Upload, preview, and delete files associated with posts.
- **Dynamic Slug Generation**: Slugs are automatically generated as the user types the title of a post.
- **Conditional Rendering**: Pages and components only render if the user is authenticated.
- **Form Handling**: Uses react-hook-form to manage form data with validations for login, sign-up, and post creation.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Vite**: Build tool that focuses on speed and performance.
- **Appwrite**: Backend-as-a-Service for user authentication and database management.
- **TinyMCE**: Rich Text Editor for post content.
- **React Router**: For client-side routing between pages.
- **Redux**: For state management.
- **React Hook Form**: For form handling and validation.
