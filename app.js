const express = require('express');
const app = express();
const mongoose = require('mongoose');
const conf = require('config');

// Check jwt private key is saved in an env variable
if (!conf.get("jwtPrivateKey")) {
  throw new Error('FATAL ERROR: jwtPrivateKey is not defined.');
}

const db_uri = "mongodb+srv://admin:i2pm7BY34d22oE6I@cluster0.h0csx.mongodb.net/fifa-invitational?retryWrites=true&w=majority&appName=Cluster0"
// mongoose.connect(conf.get("db"))
mongoose.connect(db_uri)
  .then(() => console.log("Connected to MongoDb"))
  .catch(() => console.log("Error connecting to MongoDb"))

require('./startup/routes')(app);

app.get('/', (req, res) => {
  res.send('Hello');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
