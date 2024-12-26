## What i did

So first of all i created a react project with vite and installed all the required dependecies that i would require in making of this app (@reduxjs/toolkit, react-redux, react-router-dom, appwrite, @tinymce/tinymce-react, react-html-parser, react-hook-form).

Thereafter i created the .env file and added all the variables, i also created a sample env file which will be pushed on github. 

And then i created a config file into the config folder where im exporting a config object which contains all the methodes for calling my environment variables.


Now I created an Appwrite folder where my auth.js file is located. In that file, I first started off by importing the config file of our environment (env) variables. Then, I created a class and an object to access all the methods in that class, and I exported the object.

Thereafter, I started by creating client and account variables (I did not define the account variable while creating it because we had not set the client yet). Then, I created a constructor, which runs on call. In the constructor, I defined the client and set the project ID, and then I defined the account.

After that, I created an async method for creating an account, login, getting a user, and logout. In it, I used try-catch to throw errors if any occur, and then I used the appropriate method for each action: to create, log in, get users, and log out.

This file is created in such a way that, whenever I want to change the backend service, all I have to do is make changes in this file.

Similarly like auth.js i created conf.js where i defined different methodes like, create, update, delete and get posts, i also made use of appwrite queries to select posts with only active status, i also created file servies and methodes to upload, delete and preview files. 

Today, I started by creating two components: Login and Sign Up. In the Login component, I used the useForm hook from react-hook-form. This hook returns two objects: register and handleSubmit. The handleSubmit function is used in the onSubmit method of the form, which takes another method I created called login.

The login method is an async arrow function where I used the login method from my authService class (powered by Appwrite). It takes the data collected by handleSubmit from all the input fields in the form. After getting the user data, I dispatched it into the store and then used useNavigate to redirect the user to the Home page.

One important syntax I learned for useForm is that in the input fields, I need to spread the register object and provide it with a key along with another object for any validation requirements.

I repeated this exact same process for the Sign Up component.

After that, I created an AuthLayout file to only show the content if the user is logged in. I used the useSelector to check the status and compared it with the authentication state passed in by the user. Based on that, I redirected the user to either the login page or the home page.

oday, I started by creating an RTE (Rich Text Editor) using TinyMCE. To manage the state between the editor and the form, I utilized the Controller from React Hook Form. The Controller acts as a "bridge" that links non-standard input components (like the TinyMCE editor) to the form, ensuring seamless data management.

Next, I worked on the PostForm file, which handles both creating and updating posts. In this file, I implemented a submit function to determine whether the form is updating an existing post or creating a new one. I used useCallback and useEffect to dynamically transform the title into a slug, ensuring it updates in real-time as the user types.

For file management (upload, delete, and preview), I leveraged the Appwrite services defined in the conf file. Additionally, I used the watch and setValue methods from React Hook Form to dynamically update the slug field. To handle the form's content, I integrated the RTE component I created earlier and used the getValues method to prefill the form if it's being edited.

With these implementations, both the create and update post functionalities are fully covered.