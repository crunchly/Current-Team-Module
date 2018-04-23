// test database query?
// test if can save?
// test if can remove?
const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  title: String,
  member_id: Number,
  company: String,
  thumbnail_url: String,
  updated_at: String,
});

const Person = mongoose.model('testPerson', personSchema);

const sampleData = [
  {
    first_name: 'Mark',
    last_name: 'Zuckerberg',
    title: 'CEO',
    member_id: 1,
    company: 'Facebook',
    thumbnail_url: 'http://www.nuskool.com/learn/wp-content/uploads/2015/05/markzuckerberg-thumbnail1.jpg',
    updated_at: '2018-12-01 01:00:00',
  }
]


describe('Person Model', () => {

  beforeAll(() => { //connect to db
    mongoose.connect('mongodb://localhost/test');
    return Person.create(sampleData); //should save document(s) to db using promise
  });

  afterAll((done) => { //disconnect from db
    mongoose.connection.dropCollection('testpeople')
    .then(() => mongoose.disconnect(done));
  });

  test('Should return a result when queried', () => {
    return Person.find()
      .then((result) => {
        console.log(result)
        expect(result).toHaveLength(1);
        expect(result[0].first_name).toBe('Mark');
        expect(result[0].last_name).toBe('Zuckerberg');
        expect(result[0].title).toBe('CEO');
        expect(result[0].member_id).toBe(1);
        expect(result[0].company).toBe('Facebook');
        expect(result[0].thumbnail_url).toBe('http://www.nuskool.com/learn/wp-content/uploads/2015/05/markzuckerberg-thumbnail1.jpg');
        expect(result[0].updated_at).toBe('2018-12-01 01:00:00');
      });
  });

  test(`Should return empty result when document doesn't exists`, () => {
    return Person.find({member_id: 2})
      .then((result) => {
        expect(result).toHaveLength(0);
      });
  });

});