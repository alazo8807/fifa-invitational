const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');

const Tournament = mongoose.model('Tournaments', new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true, 
    minlength: 2,
    maxlength: 20,
  },
  tournamentType: {
    type: String,
    required: true,
    trim: true, 
  },
  numberOfPlayers: {
    type: Number, 
    // required: true,
    min: 2,
    max: 20
  },
  numberOfGroups: {
    type: Number,
    min: 1,
    max: 8
  },
  numberOfPlayersPerGroup: {
    type: Number,
    min: 2,
    max: 10
  },
  teamsAdvancingPerGroup: {
    type: Number,
    min: 1,
    max: 5
  },
  playoffType: {
    type: String,
  },
  players: [
    {
      id: String,
      name: String,
      team: String,
      group: Number
    }
  ],
  matches: [ 
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Matches',
    }
  ],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users'
  },
  createdDate: {
    type: Date
  }
}));

function validateTournament(tournament) {
  const schema = {
    name: Joi.string()
      .min(2)
      .max(20)
      .required(),
    tournamentType: Joi.string()
      .alphanum()
      .required(),
    numberOfPlayers: Joi.number().min(2).max(20),
    numberOfGroups: Joi.number().min(2).max(20),
    numberOfPlayersPerGroup: Joi.number().min(2).max(20),
    teamsAdvancingPerGroup: Joi.number().min(2).max(20),
    playoffType: Joi.string().alphanum(),
    players: Joi.array().items(
      Joi.object({
        id: Joi.string(),
        name: Joi.string().min(1).max(20).required(),
        team: Joi.string().min(2).max(20).required(),
        group: Joi.number()
      })
    ),
    matches: Joi.array().items(
      Joi.object({
        _id: Joi.string()
      })
    ),
    createdBy: Joi.objectId(),
    createdDate: Joi.date()
  };

  return Joi.object(schema).validate( tournament, { abortEarly: false });
}

exports.Tournament = Tournament; 
exports.validate = validateTournament;