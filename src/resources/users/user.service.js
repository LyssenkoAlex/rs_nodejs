const usersRepo = require('./user.db');

const getAll = async () => {
  return await usersRepo.getAll();
};

module.exports = { getAll };
