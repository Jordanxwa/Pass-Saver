const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const midAuth = require('../middleware/midAuth');
const { check, validationResult } = require('express-validator/check');

// Getting User Route / Authentication, Get User Info
router.get('/', midAuth, async (req, res) => {
  try {
    // Get User From Database
    const user = await User.findById(req.user.id).select('-password');
    // Send The User
    res.json(user);
  } catch (error) {
    console.log(err.message);
    //Server Error
    res.status(500).send('Server Error');
  }
});

// Submitting To User Route / Authentication, Log User In
router.post(
  '/',
  [
    check('email', 'Please Use A Valid Email').isEmail(),
    check('password', 'Password Required').exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    // Check If Errors Is Empty
    if (!errors.isEmpty()) {
      // Return Array Of Errors That's Missing
      return res.status(400).json({ errors: errors.array() });
    }
    // Destructuring
    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email: email });

      // If User Email Isn't Found
      if (!user) {
        // Return Error Status
        return res.status(400).json({ msg: 'Invalid Credentials' });
      }

      // If User Email Is Found Continue Checking Password
      const match = await bcrypt.compare(password, user.password);

      // If Password Doesn't Match
      if (!match) {
        // Return Error Status
        return res.status(400).json({ msg: 'Invalid Credentials' });
      }

      // If Email & Password Match

      // Can Obtain Specific Data From User ID
      const payload = {
        user: {
          id: user.id
        }
      };

      // Creates JSONWebToken
      jwt.sign(payload, config.get('jwtSecret'), (err, token) => {
        if (err) throw err;
        res.json({ token });
      });
    } catch (err) {
      console.log(err.message);
      // Server Error
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
