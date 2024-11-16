const express = require('express');
const app = express();
const mongoose = require('mongoose');
const conf = require('config');

// Check jwt private key is saved in an env variable
if (!conf.get("jwtPrivateKey")) {
  throw new Error('FATAL ERROR: jwtPrivateKey is not defined.');
}

mongoose.connect(conf.get("db"))
  .then(() => console.log("Connected to MongoDb"))
  .catch((e) => console.log(`Error connecting to MongoDb. Error: ${e}`))

require('./startup/routes')(app);

app.get('/', (req, res) => {
  res.send('Hello');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
