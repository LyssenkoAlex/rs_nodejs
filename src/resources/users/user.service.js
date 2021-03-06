const usersRepo = require('./user.db');
const User = require('./user.model');
const Task = require('../task/task.model');
const tasksRepo = require('../task/task.db');

const getAll = async () => {
  const users = await usersRepo.getAll();
  return users.map(User.toResponse);
};
const createUser = async (data) => {
  const user = await usersRepo.createUser(data);
  return User.toResponse(user);
};

const updateUser = async (id, data) => {
  const isUpdate = (await User.updateOne({ _id: id }, data)).ok;
  return isUpdate === 1 ? User.toResponse(data) : undefined;
};
const getUserById = async (id) => {
  const user = await usersRepo.getUserById(id);
  return User.toResponse(user);
};

const deleteUser = async (id) => {
  const tasks = await tasksRepo.getAll();
  const userTasks = tasks.filter((item) => item.userId === id);
  const updateTasks = (await Task.updateMany({ userTasks, userId: null })).ok;
  if (updateTasks) {
    return (await usersRepo.deleteUser(id)).ok;
  }
  return updateTasks;
};

module.exports = { getAll, createUser, updateUser, getUserById, deleteUser };
