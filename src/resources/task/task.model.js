const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  order: {
    type: Boolean,
    default: true
  },
  description: {
    type: String,
    required: true
  },
  userId: {
    type: String
  },
  boardId: {
    type: String,
    required: true
  },
  columnId: {
    type: String,
    required: true
  }
});
// eslint-disable-next-line no-undef
module.exports = Item = mongoose.model('task', TaskSchema, 'tasks');
