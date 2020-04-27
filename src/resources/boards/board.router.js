const router = require('express').Router();
const {
  OK,
  NO_CONTENT,
  INTERNAL_SERVER_ERROR,
  NOT_FOUND
} = require('http-status-codes');

const boardsService = require('./board.service');
const tasksService = require('../task/task.service');

router.route('/').get(async (req, res) => {
  const items = await boardsService.getAll();
  return res.status(OK).json(items);
});

router.route('/:id').get(async (req, res) => {
  const { id } = req.params;
  const board = await boardsService.getBoardById(id);
  if (board !== undefined) {
    return res.status(OK).json(board);
  }

  return res.status(NOT_FOUND).send();
});

router.route('/:id').delete(async (req, res) => {
  const { id } = req.params;
  const board = (await boardsService.deleteBoard(id)).ok;
  console.log('delete b', board);
  if (board) {
    return res.status(NO_CONTENT).send();
  }
  return res.status(INTERNAL_SERVER_ERROR);
});

router.route('/').post(async (req, res) => {
  const boardFields = req.body;
  const board = await boardsService.createBoard(boardFields);
  return res.status(OK).json(board);
});

router.route('/:boardId').put(async (req, res) => {
  const { boardId } = req.params;
  const updateBoard = await boardsService.updateBoard(boardId, req.body);
  return res.status(OK).json(updateBoard);
});

router.route('/:boardId/tasks/:taskId').put(async (req, res) => {
  const task = await tasksService.getTaskById(req.params.taskId);
  const updateTask = await tasksService.updateTask(task.id, req.body);
  return res.json(updateTask);
});

router.route('/:boardId/tasks/:taskId').delete(async (req, res) => {
  const deleteTask = (await tasksService.deleteTask(req.params.taskId)).ok;
  if (deleteTask) {
    return res.status(NO_CONTENT);
  }
  return res.status(INTERNAL_SERVER_ERROR);
});

router.route('/:boardId/tasks').get(async (req, res) => {
  const tasks = await tasksService.getAll();
  const boardTask = tasks.filter((task) => task.boardId === req.params.boardId);
  return res.json(boardTask);
});

router.route('/:boardId/tasks/:taskId').get(async (req, res) => {
  const tasks = await tasksService.getAll();
  const boardTask = tasks
    .filter((task) => task.boardId === req.params.boardId)
    .filter((item) => item.id === req.params.taskId)[0];
  return res.json(boardTask);
});

router.route('/:boardId/tasks').post(async (req, res) => {
  const taskFiled = req.body;
  const tasks = await tasksService.createTask(taskFiled);
  return res.json(tasks);
});

module.exports = router;
