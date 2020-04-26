const router = require('express').Router();
const boardsService = require('./board.service');

router.route('/').get(async (req, res) => {
  const items = await boardsService.getAll();
  return res.json(items);
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

module.exports = router;
