const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  age: Number,
  city: String,
  friends: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

const userAuthSchema = new Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const UserAuth = mongoose.model('UserAuth', userAuthSchema);
const User = mongoose.model('User', userSchema);

module.exports = { User, UserAuth };
