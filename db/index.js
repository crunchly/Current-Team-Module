const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/crunchly';

const db = mongoose.connect(mongoUri);

module.exports = db;
