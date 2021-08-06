const { Schema } = require('mongoose');
const { todo_access } = require('../../../config/mongodb');

const options = { collection: 'todo', strict: false };

const todoSchema = new Schema(
  {
    task: String,
    assignedTo: String,
    deadline: Date,
    deleted: {type: Boolean, default: false},
    dateCreated: { type: Date, default: Date.now },
  },
  options
);

const ToDo = todo_access.model('todoSchema', todoSchema);

module.exports = ToDo;
