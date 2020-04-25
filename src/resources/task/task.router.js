const router = require('express').Router();
const tasksService = require('./task.service');

router.route('/').get(async (req, res) => {
  const items = await tasksService.getAll();
  return res.json(items);
});

module.exports = router;
