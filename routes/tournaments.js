const express = require('express');
const router = express.Router();
const { Tournament } = require('../models/Tournaments');

router.get('/', (req, res) => {
  res.send(tournaments);
})

router.get('/:id', async (req, res) => {
  const tournament = await Tournament.findById(req.params.id).populate('matches');
  if (!tournament) return res.status(404).send('The tournament with the given ID was not found.');
  res.send(tournament);
});

router.post('/', async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required()
  });

  // const result = schema.validate(req.body);
  // if (result.error) return res.status(400).send(result.error.details[0].message);

  const tournament = new Tournament({
    name: req.body.name,
    tournamentType: req.body.tournamentType,
    numberOfPlayers: req.body.numberOfPlayers,
    players: req.body.players,
    matches: req.body.matches
  })

  const dbResult = await tournament.save();
  res.send(dbResult);
});

router.put('/:id', async (req, res) => {
  // const { error } = validate(req.body); 
  // if (error) return res.status(400).send(error.details[0].message);

  // const genre = await Genre.findById(req.body.genreId);
  // if (!genre) return res.status(400).send('Invalid genre.');

  const tournament = await Tournament.findByIdAndUpdate(req.params.id,
    { 
      name: req.body.name,
      tournamentType: req.body.tournamentType,
      numberOfPlayers: req.body.numberOfPlayers,
      players: req.body.players,
      matches: req.body.matches
    }, { new: true });

  if (!tournament) return res.status(404).send('The movie with the given ID was not found.');
  
  res.send(tournament);
});

module.exports = router;