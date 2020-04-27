const Boards = require('./board.model');

const getAll = async () => {
  return await Boards.find({});
};

const createBoard = async (board) => {
  return Boards.create(board);
};

const updateBoard = async (id, board) => {
  return await Boards.updateOne({ _id: id }, board);
};

const getBoardById = async (id) => {
  return await Boards.findById(id);
};

const deleteBoard = async (id) => {
  return await Boards.deleteOne({ _id: id }).exec();
};

module.exports = {
  getAll,
  createBoard,
  updateBoard,
  getBoardById,
  deleteBoard
};
