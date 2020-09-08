const express = require('express');
const app = express();

// Needed to be able to read req.body
app.use(express.json());

const tournaments = [
  { id: 1, name: 'tournament 1' },
  { id: 2, name: 'tournament 3' },
  { id: 3, name: 'tournament 3' },
];

app.get('/', (req, res) => {
  res.send('Hello');
});

app.get('/api/tournaments', (req, res) => {
  res.send(tournaments);
})

app.get('/api/tournaments/:id', (req, res) => {
  const tournament = tournaments.find(t => t.id === parseInt(req.params.id));
  if (!tournament) res.status(404).send('Tournament with provided ID does not exist');
  res.send(tournament);
});

app.post('/api/tournaments', (req, res) => {
  const tournament = {
    id: tournaments.length + 1,
    name: req.body.name
  };

  tournaments.push(tournament);
  res.send(tournament);
})

const port = process.env.PORT || 3000;
app.listen(3000, () => console.log(`Listening on port ${port}...`));