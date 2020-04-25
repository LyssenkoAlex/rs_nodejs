const mongoose = require('mongoose');
const uuid = require('uuid');

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
    required: true,
    default: uuid
  }
});
// eslint-disable-next-line no-undef
module.exports = Item = mongoose.model('boards', BoardSchema, 'boards');
