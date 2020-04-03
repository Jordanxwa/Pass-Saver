import axios from 'axios';

function setAuthToken(token) {
  // Check to see if jwt is true
  if (token) {
    // Send Token
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    // Delete Token
    delete axios.defaults.headers.common['x-auth-token'];
  }
}

export default setAuthToken;
