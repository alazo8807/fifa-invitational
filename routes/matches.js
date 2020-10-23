const express = require('express');
const router = express.Router();
const { Match } = require('../models/matches');

router.get('/:id', async (req, res) => {
  const match = await Match.findById(req.params.id);
  if (!match) return res.status(404).send('The match with the given ID was not found.');
  res.send(match);
});

router.post('/', async (req, res) => {
  // const result = schema.validate(req.body);
  // if (result.error) return res.status(400).send(result.error.details[0].message);

  const match = new Match({
    playerA: req.body.playerA,
    playerB: req.body.playerB
  })

  const dbResult = await match.save();
  res.send(dbResult);
});

// router.put('/api/matches/:id', async (req, res) => {
//   // const { error } = validate(req.body); 
//   // if (error) return res.status(400).send(error.details[0].message);

//   // const genre = await Genre.findById(req.body.genreId);
//   // if (!genre) return res.status(400).send('Invalid genre.');

//   const tournament = await Tournament.findByIdAndUpdate(req.params.id,
//     { 
//       name: req.body.name,
//       tournamentType: req.body.tournamentType,
//       numberOfPlayers: req.body.numberOfPlayers,
//       players: req.body.players,
//       matches: req.body.matches
//     }, { new: true });

//   if (!tournament) return res.status(404).send('The movie with the given ID was not found.');
  
//   res.send(tournament);
// });

module.exports = router;