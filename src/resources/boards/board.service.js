const boardsRepo = require('./board.db');

const getAll = async () => {
  return await boardsRepo.getAll();
};

const createBoard = async (data) => {
  return await boardsRepo.createBoard(data);
};

const updateBoard = async (id, data) => {
  return await boardsRepo.updateBoard(id, data);
};
const getBoardById = async (id) => {
  return await boardsRepo.getBoardById(id);
};

const deleteBoard = async (id) => {
  return await boardsRepo.deleteBoard(id);
};

module.exports = {
  getAll,
  createBoard,
  updateBoard,
  getBoardById,
  deleteBoard
};
