const mongoose = require('mongoose');
const db = require('./index.js');

mongoose.Promise = global.Promise;

const personSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  title: String,
  member_id: Number,
  company: String,
  thumbnail_url: String,
  updated_at: String,
});

const Person = mongoose.model('Person', personSchema);

// company query is case sensitve
//   time permitting, should have set all company names as lowercase before seeding into db
//   then query lowercase name

// if a person updated their title multiple times,
// there are duplicate entries of that person, and we only want their most recent update
const getTeam = (company) => (
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
)

module.exports.model = Person;
module.exports.getTeam = getTeam;
