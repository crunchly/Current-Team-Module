const express = require('express');
const path = require('path');

const Person = require('../db/Person.js');

const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/people/:org', (req, res) => {
  const company = req.params.org;

  Person.getTeam(company)
    .then(team => res.send(team));
});

app.listen(3004, () => console.log('Listening on port 3004...'));
