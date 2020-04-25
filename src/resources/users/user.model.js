const uuid = require('uuid');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  login: {
    type: Boolean,
    default: true
  },
  password: {
    type: Date,
    default: Date.now()
  },
  _id: {
    type: String,
    default: uuid
  }
});
// eslint-disable-next-line no-undef
module.exports = Item = mongoose.model('user', UserSchema, 'user');
