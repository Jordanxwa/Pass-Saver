const express = require('express');
const router = express.Router();

// Getting Website Route / Get Websites
router.get('/', (req, res) => {
  res.send('Get all websites');
});

// Submitting To Website Route / Add Website
router.post('/', (req, res) => {
  res.send('Add New Website');
});

// Updating Website Route / Update Website id
router.put('/:id', (req, res) => {
  res.send('Update Website');
});

// Delete Website Route / Delete Website
router.delete('/:id', (req, res) => {
  res.send('Delete Website');
});

module.exports = router;
