const jwt = require('jsonwebtoken');
const config = require('config');

// End Middleware with next to move on to other functions
module.exports = function(req, res, next) {
  // Get Token From Header
  const token = req.header('x-auth-token');

  // Check If There's No Token
  if (!token) {
    // Return Unauthorized Status
    return res.status(401).json({ msg: 'No token found' });
  }

  // If There Is Token, Verify
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    req.user = decoded.user;
    next();
  } catch (err) {
    // Unauthorized Status JSON msg if invalid
    res.status(401).json({ msg: 'Token is invalid' });
  }
};
