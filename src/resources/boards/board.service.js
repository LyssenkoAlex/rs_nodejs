const boardsRepo = require('./board.db');

const getAll = async () => {
  return await boardsRepo.getAll();
};

module.exports = { getAll };
