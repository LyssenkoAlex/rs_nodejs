const usersRepo = require('./user.db');
const tasksRepo = require('../task/task.db');

const getAll = async () => {
  return await usersRepo.getAll();
};
const createUser = async (data) => {
  return await usersRepo.createUser(data);
};

const updateUser = async (id, data) => {
  return await usersRepo.updateUser(id, data);
};
const getUserById = async (id) => {
  return await usersRepo.getUserById(id);
};

const deleteUser = async (id) => {
  const tasks = await tasksRepo.getAll();
  const userTasks = tasks.filter((item) => item.userId === id);

  for (const x of userTasks) {
    await tasksRepo.updateTask(x.id, { x, userId: null });
  }
  return await usersRepo.deleteUser(id);
};

module.exports = { getAll, createUser, updateUser, getUserById, deleteUser };
