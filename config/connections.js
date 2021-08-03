const keys = require('./keys');
const mongoose = require('mongoose');

// connection pool
const todo_connection = {
  dbName: 'todo-app',
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

// returns the status of the connected databases
const events = (event, database_name) => {
  event.on('connected', () => {
    console.log(database_name, ' connection created');
  });

  event.on('disconnected', () => {
    console.log(database_name, ' connection disconnected');
  });
};

// creating a connection
const todo_access = mongoose.createConnection(keys.mongoURI, todo_connection);

// calling the events function to know whether it connected or not
events(todo_access, 'todo-access');

module.exports = {
  todo_access: todo_access,
};
