const router = require('express').Router();
const tasksService = require('./task.service');
const { OK } = require('http-status-codes');

router.route('/').get(async (req, res) => {
  const tasks = await tasksService.getAll();
  return res.status(OK).json(tasks);
});

router.route('/').post(async (req, res) => {
  const tasks = await tasksService.createTask({
    title: req.body.title,
    order: req.body.order,
    description: req.body.description,
    userId: req.body.userId,
    boardId: req.body.boardId,
    columnId: req.body.columnId
  });
  return res.json(tasks);
});

router.route('/:taskId').put(async (req, res) => {
  const updateTask = await tasksService.updateTask(req.params.taskId, req.body);
  return res.json(updateTask);
});

router.route('/:taskId').get(async (req, res) => {
  const taskById = await tasksService.getTaskById(req.params.taskId);
  return res.json(taskById);
});

router.route('/:taskId').delete(async (req, res) => {
  const deleteTask = await tasksService.deleteTask(req.params.taskId);
  return res.json(deleteTask);
});

module.exports = router;
