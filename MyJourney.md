## My journey 

To start, I created a React project using Vite and installed all the necessary dependencies required for the app, including @reduxjs/toolkit, react-redux, react-router-dom, appwrite, @tinymce/tinymce-react, react-html-parser, and react-hook-form.

Next, I created an .env file to store all environment variables, and also prepared a sample .env file to be pushed to GitHub for reference.

In the config folder, I added a config.js file, which exports a configuration object containing all the methods for accessing my environment variables.

Following that, I created an Appwrite folder, which contains an auth.js file. In this file, I began by importing the config.js file to access the environment variables. I then created a class with methods for handling various authentication tasks and exported an object of this class for easy access.

For the authentication setup, I defined the client and account variables. The account variable was defined after setting up the client. In the constructor, I initialized the client, set the project ID, and then defined the account.

I implemented asynchronous methods for creating an account, logging in, fetching user details, and logging out. These methods handle errors using try-catch blocks and utilize the appropriate methods for each action, ensuring smooth operation. This design allows for easy backend service switching by simply modifying this file.

Similarly to auth.js, I created a conf.js file in which I defined methods for creating, updating, deleting, and retrieving posts. I used Appwrite queries to filter posts based on their active status. I also implemented file-related services for uploading, deleting, and previewing files.

Today, I began working on the Login and Sign Up components. In the Login component, I used the useForm hook from react-hook-form, which provides the register and handleSubmit objects. The handleSubmit function handles form submission, while the login method, an async function, is called with the form data.

Once the login is successful, the user data is dispatched to the Redux store, and the user is redirected to the Home page using useNavigate. A key syntax I learned here was spreading the register object in the input fields and passing it the field's key along with validation requirements.

I replicated the same process for the Sign Up component, ensuring consistency in how forms are handled.

Next, I created an AuthLayout component that conditionally renders content based on the user's authentication status. Using useSelector, I check if the user is logged in, and depending on that, the user is either redirected to the login page or the home page.

I also started working on a Rich Text Editor (RTE) using TinyMCE. To link the editor with the form state, I used the Controller from react-hook-form. The Controller acts as a "bridge" to integrate non-standard inputs like TinyMCE with the form, ensuring smooth data management.

Then, I focused on the PostForm component, which handles both creating and updating posts. I implemented a submit function to determine whether the form is creating a new post or updating an existing one. To dynamically generate the post slug, I used useCallback and useEffect to update it in real-time as the user types.

For file management (upload, delete, and preview), I leveraged the Appwrite services defined in conf.js. Additionally, I used the watch and setValue methods from react-hook-form to dynamically update the slug field as the user types. The RTE component was also integrated to handle the form's content, and getValues was used to prefill the form when editing an existing post.

After implementing the create and update post functionalities, I organized my pages folder, creating files for each page (Home, AddPost, EditPost, Login, Signup, AllPost, and Post). In main.jsx, I set up the router and wrapped my components in the AuthLayout, which checks if the user is authenticated. Finally, I wrapped App.jsx in the RouterProvider, completing the setup.

With everything in place, the project was ready for debugging. It took some time and effort, but I finally finished the debugging process. And with that, the project is now live on Vercel! It’s been an incredible journey, especially using BaaS for the first time. It was a fun experience, and now I’m excited to move on to the next project.