// Creating user fields used for registration

const mongoose = require('mongoose');

const websiteSchema = mongoose.Schema({
  // Relates data to the specific user
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },

  website: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    unique: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('website', websiteSchema);
