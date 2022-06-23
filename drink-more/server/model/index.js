const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: String,
  plantType: String,
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

