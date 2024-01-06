// userModel.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  age: Number,
  city: String,
  friends: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
