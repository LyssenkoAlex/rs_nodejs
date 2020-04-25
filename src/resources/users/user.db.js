const User = require('./user.model.js');

const getAll = async () => {
  return await User.find({}).exec();
};

module.exports = { getAll };
