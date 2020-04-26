const User = require('./user.model.js');

const getAll = async () => {
  return await User.find({}).exec();
};

const createUser = async (user) => {
  return await User.create(user);
};

const updateUser = async (id, user) => {
  return await User.updateOne({ _id: id }, user);
};

const getUserById = async (id) => {
  return await User.findOne({ _id: id }).exec();
};

const deleteUser = async (id) => {
  return await User.deleteOne({ _id: id }).exec();
};

module.exports = { getAll, createUser, updateUser, getUserById, deleteUser };
