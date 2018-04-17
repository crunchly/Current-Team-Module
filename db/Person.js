const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;


const personSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  title: String,
  member_id: String,
  company: String,
  thumbnail_url: String,
  updated_at: String,
});
  
const Person = mongoose.model('Person', personSchema);

module.exports = Person;
