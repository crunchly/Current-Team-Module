const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/crunchly');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('db connected');
});

let personSchema = mongoose.Schema({
  first_name: String,
  last_name: String,
  url: String,
  role: String,
  date: String
});

var Person = mongoose.model('Person', personSchema);

let save = (person) => {

  var newPerson = new Person({
    first_name: person.first_name,
    last_name: person.last_name,
    url: person.thumbnail,
    role: person.title,
    date: person.updated_at
  });
  newPerson.save(function(error, newPerson){
    if (error) return console.error('Error saving to database: ', error);
    console.log('saved!');
  });
}

module.exports.save = save;

var test = {
    first_name: 'Bob',
    last_name: 'Hart',
    url: "https://crunchbase-production-res.cloudinary.com/image/upload/c_thumb,h_100,w_100,f_auto,g_faces,z_0.7,b_white,q_auto:eco/v1397180226/60f6c9a2cc446f75044b992565c4d2f6.jpg",
    title: 'CEO',
    date: 'some date'
}

save(test, (error, test) => console.log(test));

