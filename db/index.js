const mongoose = require('mongoose');

const mongoUri = 'mongodb://database/crunchly';

const db = mongoose.connect(mongoUri);

module.exports = db;
