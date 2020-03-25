const express = require('express');
const router = express.Router();
const midAuth = require('../middleware/midAuth');
const User = require('../models/User');
const Websites = require('../models/Websites');
const { check, validationResult } = require('express-validator/check');

// Getting Website Route / Get Websites
// Private Route
router.get('/', midAuth, async (req, res) => {
  try {
    const websites = await Websites.find({
      user:
        // Sort by the recent websites
        req.user.id
    }).sort({ date: -1 });
    // Pass Websites
    res.json(websites);
  } catch (err) {
    console.log(err.message);
    // Server Error
    res.status(500).send('Server Error');
  }
});

// Submitting To Website Route / Add Website
// Private Route
router.post(
  '/',
  [
    midAuth,
    [
      check('username', 'Username is required')
        .not()
        .isEmpty(),
      check('password', 'Password is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    // Check If Errors Is Empty
    if (!errors.isEmpty()) {
      // Return Array Of Errors That's Missing
      return res.status(400).json({ errors: errors.array() });
    }
    // Destructuring
    const { website, username, password } = req.body;

    try {
      // Create New website
      const newWebsite = new Websites({
        website,
        username,
        password,
        user: req.user.id
      });

      // Saving website to database
      const websites = await newWebsite.save();

      // Return Website
      res.json(websites);
    } catch (error) {
      console.log(error.message);
      // Server Error
      res.status(500).send('Server Error');
    }
  }
);

// Updating Website Route / Update Website id
// Private Route
router.put('/:id', midAuth, async (req, res) => {
  // Destructuring
  const { website, username, password } = req.body;

  // Build Website Object | Check If submitted
  const websiteFields = {};

  // If theres a website, username & password add to website field
  if (website) websiteFields.website = website;
  if (username) websiteFields.username = username;
  if (password) websiteFields.password = password;

  try {
    // Find Website By Id
    let website = await Websites.findById(req.params.id);

    // If Website Isn't Found
    if (!website) {
      // Error 404 Status With Message Of Not Found
      return res.status(404).json({ msg: 'Website not found' });
    }

    // Update Website
    website = await Websites.findByIdAndUpdate(
      req.params.id,
      // Set Website Fields
      {
        $set: websiteFields
      }, // If Website Doesn't Exist Then Create It
      { new: true }
    );
    // Send Updated website
    res.json(website);
  } catch (error) {
    console.log(error.message);
    // Server Error
    res.status(500).send('Server Error');
  }
});

// Delete Website Route / Delete Website
// Private Route
router.delete('/:id', midAuth, async (req, res) => {
  try {
    // Find Website By Id
    let website = await Websites.findById(req.params.id);

    // If Website Isn't Found
    if (!website) {
      // Error 404 Status With Message Of Not Found
      return res.status(404).json({ msg: 'Website not found' });
    }

    // Delete Website
    await Websites.findByIdAndRemove(req.params.id);

    // Send Updated website
    res.json({ msg: 'Website deleted' });
  } catch (error) {
    console.log(error.message);
    // Server Error
    res.status(500).send('Server Error');
  }
});

module.exports = router;
