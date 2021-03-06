const mongoose = require('mongoose');
const config = require('../common/config');

// mongoose.Promise = global.Promise;
const connectToDB = (conn) => {
  mongoose.connect(config.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const db = mongoose.connection;
  // db.on('error', console.log('db connection error'))

  db.once('open', async () => {
    console.log('DB connected!!');
    await db.dropDatabase();
    conn();
  });
};

module.exports = { connectToDB };
