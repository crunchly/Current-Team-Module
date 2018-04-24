const express = require('express');
const path = require('path');

const Person = require('../db/Person.js');

const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/people/:org', (req, res) => {
  const company = req.params.org;

  // company query is case sensitve
  //   time permitting, should have set all company names as lowercase before seeding into db
  //   then query lowercase name

  // if a person updated their title multiple times,
  // there are duplicate entries of that person, and we only want their most recent update
  Person.aggregate([
    { $match: { company } },
    { $sort: { updated_at: -1 } },
    { $group: {
        _id : '$member_id',
        first_name: {$first: '$first_name'},
        last_name: {$first: '$last_name'}, 
        title: {$first: '$title'},
        photo_url: {$first: '$thumbnail_url'},
      }
    },
    { $sort: { _id: 1 } },
  ])
  .then(team => res.send(team));
});

module.exports = app;