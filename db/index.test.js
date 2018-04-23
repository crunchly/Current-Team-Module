// test database query?
// test if can save?
// test if can remove?
import mongoose from 'module';

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
  let person;

  beforeAll(() => { //connect to db
    mongoose.connect('mongodb://localhost/test');
    return Person.create(sampleData); //should save document to db using promise
  });

  // beforeEach(() => { //setup demo data
  //   person = new Person(sampleData[0]);
  //   return person.save(); //saves one document using promise
  // });

  // afterEach(() => { //remove demo data
  //   return personModel.removePerson();
  // });

  afterAll((done) => { //disconnect from db
    mongoose.disconnect(done);
  })

});