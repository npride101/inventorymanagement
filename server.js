const express = require('express');
const mongoose = require('mongoose');
const entries = require('./routes/api/entries');

const app = express();
// Import Mongo URI 
const db = require("./config/db").mongoURI;

// Connect to Mongo DB using Mongoose, need help with understanding how exactly the syntax of the promise function
mongoose
.connect(db)
.then(() => console.log("Connection to MongoDB successful..."))
.catch(err => console.log(err));

// Any request to api/items/... navigates to entries.js
// https://stackoverflow.com/questions/11321635/nodejs-express-what-is-app-use
app.use('/api/entries', entries);

// Create port so that we can run the server
const port = 5000

// Used to tell the app which port to connect to or "listen" on when making a connection,
// syntax -> .listen(port, callback)
// https://www.geeksforgeeks.org/express-js-app-listen-function/
app.listen(port, () => console.log(`Sever running on port: ${port}`))