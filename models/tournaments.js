const Joi = require('joi');
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
    required: true,
    min: 2,
    max: 20
  },
  players: [
    {
      id: String,
      name: String,
      team: String,
    }
  ],
  matches: [ 
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Matches',
    }
  ]
}));

function validateTournament(tournament) {
  const schema = {
    name: Joi.string()
      .alphanum()
      .min(2)
      .max(20)
      .required(),
    tournamentType: Joi.string()
      .alphanum()
      .required(),
    numberOfPlayers: Joi.number().min(2).max(20).required(),
    players: Joi.array().items(
      Joi.object({
        id: Joi.string(),
        name: Joi.string().min(1).max(20).required(),
        team: Joi.string().min(2).max(20).required()
      })
    ),
    matches: Joi.array().items(
      Joi.object({
        _id: Joi.string()
      })
    )
  };

  return Joi.object(schema).validate( tournament, { abortEarly: false });
}

exports.Tournament = Tournament; 
exports.validate = validateTournament;