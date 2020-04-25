const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ColumnSchema = new Schema({
  id: {
    type: String,
    required: true
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
