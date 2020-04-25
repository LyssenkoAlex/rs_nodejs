const Columns = require('./column.model');

const getAll = async () => {
  return await Columns.find({}).exec();
};

module.exports = { getAll };
