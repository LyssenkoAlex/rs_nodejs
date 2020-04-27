const Task = require('./task.model');

const getAll = async () => {
  return await Task.find({});
};
const createTask = async (task) => {
  return Task.create(task);
};

const updateTask = async (id, task) => {
  return await Task.updateOne({ _id: id }, task);
};

const getTaskById = async (id) => {
  return await Task.findOne({ _id: id }).exec();
};

const deleteTask = async (id) => {
  return await Task.deleteOne({ _id: id }).exec();
};

module.exports = { getAll, createTask, updateTask, getTaskById, deleteTask };
