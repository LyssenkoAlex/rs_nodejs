const columnsRepo = require('./column.db');

const getAll = async () => {
  return await columnsRepo.getAll();
};

module.exports = { getAll };
