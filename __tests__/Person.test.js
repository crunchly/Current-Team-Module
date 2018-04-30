const mongoose = require('mongoose');
const Person = require('../db/Person.js');

const sampleData = [
  {
    first_name: 'Bob',
    last_name: 'Barker',
    title: 'Announcer',
    member_id: 1,
    company: 'CBS',
    thumbnail_url: 'https://s3-us-west-1.amazonaws.com/crunchly-team/11.jpg',
    updated_at: '2018-12-00 01:00:00',
  },
  {
    first_name: 'Regis',
    last_name: 'Philbin',
    title: 'Host',
    member_id: 2,
    company: 'ABC',
    thumbnail_url: 'https://s3-us-west-1.amazonaws.com/crunchly-team/12.jpg',
    updated_at: '2018-12-01 01:00:00',
  },
];

const personModel = mongoose.model('testPerson', Person.schema);

describe('Person Model', () => {
  beforeAll(() => {
    return personModel.create(sampleData);
  });

  afterAll(() => {
    mongoose.connection.dropCollection('testpeople')
      .then(() => mongoose.disconnect());
  });

  test('Should return a result when queried', () => {
    return Person.getTeam('CBS', personModel)
      .then((result) => {
        expect(result).toHaveLength(1);
      });
  });

  test(`Should return empty result when document doesn't exists`, () => {
    return personModel.find({ member_id: 3 })
      .then((result) => {
        expect(result).toHaveLength(0);
      });
  });
});
