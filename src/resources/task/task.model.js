const mongoose = require('mongoose');
const uuid = require('uuid/v4');

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  title: {
    type: String
  },
  order: {
    type: Number
  },
  description: {
    type: String
  },
  userId: {
    type: String
  },
  boardId: {
    type: String
  },
  columnId: {
    type: String
  },
  _id: {
    type: String,
    default: uuid
  }
});
// eslint-disable-next-line no-undef
module.exports = Item = mongoose.model('task', TaskSchema, 'tasks');
