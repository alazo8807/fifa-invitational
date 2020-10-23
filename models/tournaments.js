const Joi = require('joi');
const mongoose = require('mongoose');
const { matchSchema } = require('./matches');

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
  
  // genre: { 
  //   type: genreSchema,  
  //   required: true
  // },
}));

// function validateMovie(movie) {
//   const schema = {
//     title: Joi.string().min(5).max(50).required(),
//     genreId: Joi.objectId().required(),
//     numberInStock: Joi.number().min(0).required(),
//     dailyRentalRate: Joi.number().min(0).required()
//   };

//   return Joi.validate(movie, schema);
// }

exports.Tournament = Tournament; 
// exports.validate = validateMovie;