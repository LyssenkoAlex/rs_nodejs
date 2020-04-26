const mongoose = require('mongoose');
const uuid = require('uuid/v4');

const Schema = mongoose.Schema;

const BoardSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  columns: {
    type: Array,
    default: []
  },
  _id: {
    type: String,
    default: uuid
  }
});
// eslint-disable-next-line no-undef
module.exports = Item = mongoose.model('boards', BoardSchema, 'boards');
