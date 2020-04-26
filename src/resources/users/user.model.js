const uuid = require('uuid/v4');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    login: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    _id: {
      type: String,
      default: uuid
    }
  },
  { versionKey: false }
);
UserSchema.statics.toResponse = ({ id, name, login }) => ({ id, name, login });
// eslint-disable-next-line no-undef
module.exports = Item = mongoose.model('user', UserSchema, 'user');
