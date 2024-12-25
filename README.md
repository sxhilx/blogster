## What i did

So first of all i created a react project with vite and installed all the required dependecies that i would require in making of this app (@reduxjs/toolkit, react-redux, react-router-dom, appwrite, @tinymce/tinymce-react, react-html-parser, react-hook-form).

Thereafter i created the .env file and added all the variables, i also created a sample env file which will be pushed on github. 

And then i created a config file into the config folder where im exporting a config object which contains all the methodes for calling my environment variables.


Now I created an Appwrite folder where my auth.js file is located. In that file, I first started off by importing the config file of our environment (env) variables. Then, I created a class and an object to access all the methods in that class, and I exported the object.

Thereafter, I started by creating client and account variables (I did not define the account variable while creating it because we had not set the client yet). Then, I created a constructor, which runs on call. In the constructor, I defined the client and set the project ID, and then I defined the account.

After that, I created an async method for creating an account, login, getting a user, and logout. In it, I used try-catch to throw errors if any occur, and then I used the appropriate method for each action: to create, log in, get users, and log out.

This file is created in such a way that, whenever I want to change the backend service, all I have to do is make changes in this file.

Similarly like auth.js i created conf.js where i defined different methodes like, create, update, delete and get posts, i also made use of appwrite queries to select posts with only active status, i also creted file servies and methodes to upload, delete and preview files. 