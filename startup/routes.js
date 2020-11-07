const matches = require('../routes/matches');
const tournaments = require('../routes/tournaments');
const users = require('../routes/users');
const auth = require('../routes/auth');
const express = require('express');
const helmet = require('helmet');
const cors = require("cors");

module.exports = function(app) {
  app.use(express.json());
  // Security headers
  app.use(helmet());
  app.use(cors());
  app.use('/api/matches', matches);
  app.use('/api/tournaments', tournaments);
  app.use('/api/users', users);
  app.use('/api/auth', auth);
}