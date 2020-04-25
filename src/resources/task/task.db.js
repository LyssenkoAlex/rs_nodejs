const Task = require('./task.model');

const getAll = async () => {
  return await Task.find({}).exec();
};

module.exports = { getAll };
