const { Schema } = require('mongoose');
const { todo_access } = require('../../../config/mongodb');

const options = { collection: 'todo', strict: false };

const todoSchema = new Schema(
  {
    task: String,
    assignedTo: String,
    deadline: Date,
    dateCreated: { type: Date, default: Date.now },
  },
  options
);

const ToDo = todo_access.model('todoSchema', todoSchema);

module.exports = ToDo;
