const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const db = require('./index.js');
const Person = require('./Person.js');

// images are saved on s3 as files labeled 1-33
const generateRandomImage = function () {
  const min = 1;
  const max = 33;
  return Math.floor(Math.random() * ((max - min) + 1)) + min;
};

fs.readFile(path.join(__dirname, 'people.json'), (error, data) => {
  if (error) return console.error('Error reading file: ', error);
  const peopleData = [];
  const people = JSON.parse(data);

  people.slice(0,10000).forEach((person) => {
    person.member_id = parseInt(person.id);
    person.company = person.affiliation_name;
    person.thumbnail_url = `https://s3-us-west-1.amazonaws.com/crunchly-team/${generateRandomImage()}.jpg`;
    person.updated_at = person.modified_at;
    delete person.id;
    delete person.affiliation_name;
    delete person.modified_at;

    const member = new Person.model(person);
    peopleData.push(member)
    // member.save((error, member) => {
    //   if (error) return console.error('Error saving to database: ', error);
    //   console.log('saved :', member);
    // });
  });

  Person.model.create(peopleData)
    .then(() => {
      console.log('database seed done');
      mongoose.disconnect();
    });

});
