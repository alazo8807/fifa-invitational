const Joi = require('joi');
const mongoose = require('mongoose');

const matchSchema = {
  playerA: { 
    id: String,
    name: String,
    team: String,
    goals: Number
  },
  playerB: { 
    id: String,
    name: String,
    team: String,
    goals: Number
  }
};

const Match = mongoose.model('Matches', new mongoose.Schema([
  matchSchema
]));

function validateMatch(match) {
  const schema = {
    playerA: Joi.object({
      id: Joi.string(),
      name: Joi.string().min(1).max(20).required(),
      team: Joi.string().min(2).max(20).required(),
      goals: Joi.any()
    }),
    playerB: Joi.object({
      id: Joi.string(),
      name: Joi.string().min(1).max(20).required(),
      team: Joi.string().min(2).max(20).required(),
      goals: Joi.any()
    })
  };

  return Joi.object(schema).validate( match, { abortEarly: false });
}

exports.matchSchema = matchSchema;
exports.Match = Match; 
exports.validate = validateMatch;