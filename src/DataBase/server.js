const express = require('express');
const connectToDatabase = require('./path/to/connectToDatabase');

const app = express();

app.post('/api/signUpUser', (req, res) => {
  const userData = req.body; // assuming the request body contains the user data
  // save the user data to your database
  // send a response back to the client with the saved user data
  res.json(userData);
});
connectToDatabase();