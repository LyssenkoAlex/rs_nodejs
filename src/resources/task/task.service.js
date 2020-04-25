const tasksRepo = require('./task.db');

const getAll = async () => {
  return await tasksRepo.getAll();
};

module.exports = { getAll };
