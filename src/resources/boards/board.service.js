const boardsRepo = require('./board.db');
const tasksRepo = require('../task/task.db');
const Board = require('./board.model.js');

const getAll = async () => {
  const boards = await boardsRepo.getAll();
  return boards.map(Board.toResponse);
};

const createBoard = async (data) => {
  const newBoard = await boardsRepo.createBoard(data);
  return Board.toResponse(newBoard);
};

const updateBoard = async (id, data) => {
  return await boardsRepo.updateBoard(id, data);
};
const getBoardById = async (id) => {
  const board = await boardsRepo.getBoardById(id);
  return Board.toResponse(board);
};

const deleteBoard = async (id) => {
  const createdTasks = await tasksRepo.getAll();
  const boardTasks = createdTasks.filter((task) => task.boardId === id);

  for (const task of boardTasks) {
    await tasksRepo.deleteTask(task._id);
  }

  return await boardsRepo.deleteBoard(id);
};

module.exports = {
  getAll,
  createBoard,
  updateBoard,
  getBoardById,
  deleteBoard
};
