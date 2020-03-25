const express = require('express');
const router = express.Router();

// Submitting To User Route / Register User
router.post('/', (req, res) => {
  res.send('Register User');
});

module.exports = router;
