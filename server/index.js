const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const Person = require('../db/Person.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/people/:org', (req, res) => {
  const company = req.params.org;

  // company query is case sensitve
    // time permitting, should have set all company names as lowercase before seeding into db
    // then query lowercase name

  Person.find({ company }).sort({ updated_at: -1 })
    .then((result) => {
      const members = [];
      const team = [];

      result.forEach((row) => {
        if (!members.includes(row.member_id)) {
          members.push(row.member_id);
          team.push(row);
        }
      });
      res.send(team);
    });
});

app.listen(3004, () => console.log('Listening on port 3004...'));
