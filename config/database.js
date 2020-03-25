// Use Mongoose To Connect To Database
const mongoose = require('mongoose');
// Need Access To Global Var
const config = require('config');
const db = config.get('mongoURI');

// Connect To Database
const dbConnect = async () => {
  try {
    await mongoose.connect(db, {
      // Avoid Warnings Attempt
      useNewUrlParser: true
    });
    console.log('MongoDB Connected');
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = dbConnect;
