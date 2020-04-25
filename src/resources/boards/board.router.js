const router = require('express').Router();
const boardsService = require('./board.service');

router.route('/').get(async (req, res) => {
  const items = await boardsService.getAll();
  return res.json(items);
});

module.exports = router;
