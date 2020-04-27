const tasksRepo = require('./task.db');
const Task = require('./task.model');

const getAll = async () => {
  const tasks = await tasksRepo.getAll();
  return tasks.map(Task.toResponse);
};

const createTask = async (data) => {
  const newTasks = await tasksRepo.createTask(data);
  return Task.toResponse(newTasks);
};

const updateTask = async (id, data) => {
  return await tasksRepo.updateTask(id, data);
};
const getTaskById = async (id) => {
  const taskById = await tasksRepo.getTaskById(id);
  return Task.toResponse(taskById);
};

const deleteTask = async (id) => {
  return await tasksRepo.deleteTask(id);
};

module.exports = { getAll, createTask, updateTask, getTaskById, deleteTask };
