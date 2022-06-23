const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: String,
  plantType: Number,
  plantName: String,
  weight: Number,
  age: Number,
  plantStage: Number,
  waterIntake: Number,
  daysWithoutWater: Number,
  daysWithWater: Number,
  dateCreated: String,
  currentDate: String
});

const User = mongoose.model('User', userSchema);

exports.addUser = (data, cb) => {
  let userInfo = new User(data);
  userInfo.save(cb);
};

exports.findUser = (data, cb) => {
  User.find(data)
    .then(cb)
    .catch((err) => {
      console.log(err, 'error at findUser at model');
    })
};