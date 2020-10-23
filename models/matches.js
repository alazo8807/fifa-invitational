const Joi = require('joi');
const mongoose = require('mongoose');
// const {genreSchema} = require('./genre');

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

// function validateMovie(movie) {
//   const schema = {
//     title: Joi.string().min(5).max(50).required(),
//     genreId: Joi.objectId().required(),
//     numberInStock: Joi.number().min(0).required(),
//     dailyRentalRate: Joi.number().min(0).required()
//   };

//   return Joi.validate(movie, schema);
// }

exports.matchSchema = matchSchema;
exports.Match = Match; 
// exports.validate = validateMovie;