const matches = require('../routes/matches');
const tournaments = require('../routes/tournaments');
const express = require('express');

module.exports = function(app) {
  app.use(express.json());
  app.use('/api/matches', matches);
  app.use('/api/tournaments', tournaments);
}