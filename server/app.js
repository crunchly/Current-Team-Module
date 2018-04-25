const express = require('express');
const path = require('path');

const Person = require('../db/Person.js');

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/people/:org', (req, res) => {
  const company = req.params.org;

  // company query is case sensitve
  //   time permitting, should have set all company names as lowercase before seeding into db
  //   then query lowercase name

  // if a person updated their title multiple times,
  // there are duplicate entries of that person, and we only want their most recent update
  Person.getTeam(company)
    .then(team => res.send(team));
});

module.exports = app;