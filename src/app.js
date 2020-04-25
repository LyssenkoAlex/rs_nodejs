const express = require('express');
const swaggerUI = require('swagger-ui-express');
const path = require('path');
const YAML = require('yamljs');

const app = express();
const animalRouter = require('./resources/animals/animals.router');
const userRouter = require('./resources/users/user.router');
const taskRouter = require('./resources/task/task.router');
const boardRouter = require('./resources/boards/board.router');
const columnRouter = require('./resources/columns/column.router');

const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());
app.use('/users', userRouter);
app.use('/tasks', taskRouter);
app.use('/boards', boardRouter);
app.use('/columns', columnRouter);

app.use('/animals', animalRouter);
app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

// app.use('/users', userRouter);

module.exports = app;
