const mongoose = require('mongoose');
const uuid = require('uuid/v4');

const Schema = mongoose.Schema;

const ColumnSchema = new Schema({
  _id: {
    type: String,
    default: uuid
  },
  title: {
    type: String,
    required: true
  },
  order: {
    type: String,
    required: true
  }
});
// eslint-disable-next-line no-undef
module.exports = Item = mongoose.model('columns', ColumnSchema, 'columns');
