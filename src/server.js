const { PORT } = require('./common/config');
const { connectToDB } = require('./db/connection');

const app = require('./app');

connectToDB(() => {
  app.listen(PORT, (err) => {
    if (err) {
      console.log('start server error: ', err);
    }

    console.log(`App is running on http://localhost:${PORT}`);
  });
});
