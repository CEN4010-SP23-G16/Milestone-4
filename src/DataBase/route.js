const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const User = mongoose.model('User');

// API endpoint for user signup
router.post('/signup', async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // create a new user document
    const user = new User({
      firstName,
      lastName,
      email,
      password,
    });

    // save the user document to the database
    const result = await user.save();

    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;
