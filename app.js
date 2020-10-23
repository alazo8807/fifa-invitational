const Joi = require('joi');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const helmet = require('helmet');
const cors = require("cors");

mongoose.connect('mongodb://localhost/fifa-invitational')
  .then(() => console.log("Connected to MongoDb"))
  .catch(() => console.log("Error connecting to MongoDb"))

require('./startup/routes')(app);

// Security headers
app.use(helmet());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello');
});



const port = process.env.PORT || 3000;
app.listen(3000, () => console.log(`Listening on port ${port}...`));