const User = require('./user.model.js');

const getAll = async () => {
  return await User.find({}).exec();
};

const createUser = async (user) => {
  return User.create(user);
};

const updateUser = async (id, user) => {
  return await User.updateOne({ _id: id }, user);
};

const getUserById = async (id) => {
  const user = await User.findOne({ _id: id }).exec();
  return user !== null ? user : undefined;
};

const deleteUser = async (id) => {
  return User.deleteOne({ _id: id });
};

module.exports = { getAll, createUser, updateUser, getUserById, deleteUser };
