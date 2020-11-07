const express = require('express');
const app = express();
const mongoose = require('mongoose');
const conf = require('config');

// Check jwt private key is saved in an env variable
if (!conf.get("jwtPrivateKey")) {
  throw new Error('FATAL ERROR: jwtPrivateKey is not defined.');
}

mongoose.connect('mongodb://localhost/fifa-invitational')
  .then(() => console.log("Connected to MongoDb"))
  .catch(() => console.log("Error connecting to MongoDb"))

require('./startup/routes')(app);

app.get('/', (req, res) => {
  res.send('Hello');
});

const port = process.env.PORT || 3000;
app.listen(3000, () => console.log(`Listening on port ${port}...`));