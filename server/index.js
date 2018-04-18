const bodyParser = require('body-parser');
const express = require('express');

const Person = require('/../db/Person.js')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.use(express.static(__dirname, '/../client/dist'));

app.get('/people/:org', (req, res) => {
  var company = req.params.org;

  //company query is case sensitve, time permitting
    //should have seeded company name as lowercase and queried that instead

  Person.find({company: company}).sort({updated_at: -1})
    .then( result => {
      //do something with result
      var members = [];
      var team = [];
      result.forEach( (row) => {
        if (!members.includes(row.member_id)) {
          members.push(row.member_id);
          team.push(row);
        }
      });
      res.send(team);
    });
});

app.listen(3004, () => console.log('Listening on port 3004...'))
