const router = require('express').Router();
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  return res.json(users);
});

router.route('/').post(async (req, res) => {
  const users = await usersService.createUser({
    name: req.body.name,
    login: req.body.login,
    password: req.body.password
  });
  return res.json(users);
});

router.route('/:userId').put(async (req, res) => {
  const updateRessult = await usersService.updateUser(
    req.params.userId,
    req.body
  );
  return res.json(updateRessult);
});

router.route('/:userId').get(async (req, res) => {
  const userById = await usersService.getUserById(req.params.userId);
  return res.json(userById);
});

router.route('/:userId').delete(async (req, res) => {
  const deleteUser = await usersService.deleteUser(req.params.userId);
  return res.json(deleteUser);
});

module.exports = router;
