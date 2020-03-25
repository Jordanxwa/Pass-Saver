const express = require('express');
const router = express.Router();

// Getting User Route / Authentication, Get User Info
router.get('/', (req, res) => {
  res.send('Get logged in User');
});

// Submitting To User Route / Authentication, Log User In
router.post('/', (req, res) => {
  res.send('Log in user');
});

module.exports = router;
