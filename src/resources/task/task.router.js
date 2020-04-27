const router = require('express').Router();
const tasksService = require('./task.service');
const {
  OK,
  NOT_FOUND,
  NO_CONTENT,
  INTERNAL_SERVER_ERROR
} = require('http-status-codes');

router.route('/').get(async (req, res) => {
  const tasks = await tasksService.getAll();
  return res.status(OK).json(tasks);
});

router.route('/').post(async (req, res) => {
  const taskFiled = req.body;
  const tasks = await tasksService.createTask(taskFiled);
  return res.json(tasks);
});

router.route('/:taskId').put(async (req, res) => {
  const updateTask = await tasksService.updateTask(req.params.taskId, req.body);
  return res.json(updateTask);
});

router.route('/:taskId').get(async (req, res) => {
  const taskById = await tasksService.getTaskById(req.params.taskId);
  console.log('taskById', taskById);
  if (taskById !== null) {
    return res.json(taskById);
  }

  return res.status(NOT_FOUND);
});

router.route('/:taskId').delete(async (req, res) => {
  const deleteTask = (await tasksService.deleteTask(req.params.taskId)).ok;
  if (deleteTask) {
    return res.status(NO_CONTENT);
  }
  return res.status(INTERNAL_SERVER_ERROR);
});

module.exports = router;
