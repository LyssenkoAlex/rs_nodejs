const boardsRepo = require('./board.db');
const tasksRepo = require('../task/task.db');

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
