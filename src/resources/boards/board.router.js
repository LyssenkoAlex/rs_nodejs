const router = require('express').Router();
const { OK } = require('http-status-codes');
const boardsService = require('./board.service');
const tasksService = require('../task/task.service');

router.route('/').get(async (req, res) => {
  const items = await boardsService.getAll();
  return res.json(items);
});

router.route('/:id').get(async (req, res) => {
  console.log('board req.params', req.params);
  const { id } = req.params;
  const board = await boardsService.getBoardById(id);
  return res.status(OK).json(board);
});

router.route('/').post(async (req, res) => {
  const tasks = await boardsService.createBoard({
    title: req.body.title,
    columns: req.body.columns
  });
  return res.json(tasks);
});

router.route('/:boardId').put(async (req, res) => {
  const { boardId } = req.params;
  const updateBoard = await boardsService.updateBoard(boardId, req.body);
  return res.json(updateBoard);
});

router.route('/:boardId/tasks/:taskId').put(async (req, res) => {
  const task = await tasksService.getTaskById(req.params.taskId);
  const updateTask = await tasksService.updateTask(task.id, req.body);
  return res.json(updateTask);
});

router.route('/:boardId/tasks/:taskId').delete(async (req, res) => {
  const task = await tasksService.deleteTask(req.params.taskId);
  return res.json(task);
});

router.route('/:taskId').get(async (req, res) => {
  const { taskId } = req.params;
  const taskById = await boardsService.getBoardById(taskId);
  return res.json(taskById);
});

router.route('/:taskId').delete(async (req, res) => {
  const { taskId } = req.params;
  const deleteTask = await boardsService.deleteBoard(taskId);
  return res.json(deleteTask);
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
  const tasks = await tasksService.createTask({
    title: req.body.title,
    order: req.body.order,
    description: req.body.description,
    userId: req.body.userId,
    boardId: req.params.boardId,
    columnId: req.body.columnId
  });
  return res.json(tasks);
});

module.exports = router;
