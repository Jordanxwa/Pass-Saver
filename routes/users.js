const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator/check');

// Submitting To User Route / Register User
router.post(
  '/',
  // Sets The Checks With Express Validator
  [
    check('name', 'Please add name')
      .not()
      .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with at least 6 characters'
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    // Check If Errors Is Empty
    if (!errors.isEmpty()) {
      // Return Array Of Errors That's Missing
      return res.status(400).json({ errors: errors.array() });
    }

    // Destructuring
    const { password, name, email } = req.body;

    // Search For Existing User Emails
    try {
      // Find User By Email
      let user = await User.findOne({ email: email });

      // If User Exists
      if (user) {
        // Return Bad Request
        return res.status(400).json({ msg: 'This user already exists' });
      }

      // If User Doesn't Exist
      user = new User({
        name: name,
        email: email,
        password: password
      });

      // Encrypt Password With Bcrypt
      // Salt Returns Promise

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

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
