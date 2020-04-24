const router = require('express').Router();
const Animal = require('./animals.model.js');

router.route('/').get((req, res) => {
  Animal.find()
    .sort({ date: -1 })
    .then((items) => res.json(items));
});

module.exports = router;
