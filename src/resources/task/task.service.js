const tasksRepo = require('./task.db');

const getAll = async () => {
  return await tasksRepo.getAll();
};

const createTask = async (data) => {
  return await tasksRepo.createTask(data);
};

const updateTask = async (id, data) => {
  return await tasksRepo.updateTask(id, data);
};
const getTaskById = async (id) => {
  return await tasksRepo.getTaskById(id);
};

const deleteTask = async (id) => {
  return await tasksRepo.deleteTask(id);
};

module.exports = { getAll, createTask, updateTask, getTaskById, deleteTask };
