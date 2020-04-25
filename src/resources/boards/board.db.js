const Boards = require('./board.model');

const getAll = async () => {
  return await Boards.find({}).exec();
};

module.exports = { getAll };
