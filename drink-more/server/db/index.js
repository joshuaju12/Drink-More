const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/drink';

const db = mongoose.connect(mongoURI, {useNewUrlParser: true});


db
  .then(db => console.log(`Connected to: ${mongoURI}`))
  .catch((err) => {
    console.log(err, 'there was a problem connecting to mongo')
  });

module.exports = db;