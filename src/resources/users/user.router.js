const router = require('express').Router();
const usersService = require('./user.service');
const { NOT_FOUND, INTERNAL_SERVER_ERROR } = require('http-status-codes');

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
  const updateResult = await usersService.updateUser(
    req.params.userId,
    req.body
  );
  return res.json(updateResult);
});

router.route('/:userId').get(async (req, res) => {
  const userById = await usersService.getUserById(req.params.userId);
  if (userById === undefined) {
    // throw new Error(res.status(NOT_FOUND).send(INTERNAL_SERVER_ERROR));
    return res.json({ statusCode: NOT_FOUND, message: INTERNAL_SERVER_ERROR });
  }

  return res.json(userById);
});

router.route('/:userId').delete(async (req, res) => {
  const deleteUser = await usersService.deleteUser(req.params.userId);
  return res.json(deleteUser);
});

module.exports = router;
