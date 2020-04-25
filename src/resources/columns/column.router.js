const router = require('express').Router();
const columnsService = require('./column.service');

router.route('/').get(async (req, res) => {
  const items = await columnsService.getAll();
  return res.json(items);
});

module.exports = router;
