const router = require('express').Router();
const usersService = require('./user.service');
const { NOT_FOUND, INTERNAL_SERVER_ERROR } = require('http-status-codes');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  return res.json(users);
});

router.route('/').post(async (req, res) => {
  const userFields = req.body;
  const users = await usersService.createUser(userFields);
  return res.json(users);
});

router.route('/:userId').put(async (req, res) => {
  const updateUser = req.body;
  const { userId } = req.params;
  const updateResult = await usersService.updateUser(userId, updateUser);
  if (updateResult) {
    return res.json(updateResult);
  }
  return res.status(INTERNAL_SERVER_ERROR).send();
});

router.route('/:userId').get(async (req, res) => {
  const { userId } = req.params;
  const userById = await usersService.getUserById(userId);
  if (userById === undefined) {
    throw new Error({ statusCode: NOT_FOUND, message: INTERNAL_SERVER_ERROR });
  }

  return res.json(userById);
});

router.route('/:userId').delete(async (req, res) => {
  const { userId } = req.params;
  const deleteUser = await usersService.deleteUser(userId);
  if (deleteUser) {
    return res.status(204).send();
  }

  return res.status(INTERNAL_SERVER_ERROR).send();
});

module.exports = router;
