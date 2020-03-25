const express = require('express');

const app = express();

//Add Route
app.get('/', (req, res) => res.json({ msg: 'Password Saver API' }));

// Define The Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/authentication', require('./routes/authentication'));
app.use('/api/websites', require('./routes/websites'));

// Looks for env var first
const PORT = process.env.port || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
