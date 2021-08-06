const ToDo = require('../../models/todo/models/todo.models');

module.exports = app => {
  // to-do routes

  app.get('/to-do', async (req, res) => {
    const response = await ToDo.find();
    res.status(200).send(response);
  });

  app.post('/to-do/create', async (req, res) => {
    const task = req.body.task;
    const assignedTo = req.body.assignedTo;
    const deadline = req.body.deadline;

    try {
      const insert = await ToDo({ task, assignedTo, deadline });
      insert.save();

      res.status(200).send('inserted data');
    } catch (err) {
      res.status(404).send('Unable to insert data: ', err);
    }
  });

  app.put('/to-do/edit/:id', async (req, res) => {
    const id = req.params.id;
    const assignedTo = req.body.assignedTo;
    const task = req.body.task;
    try {
      const update = await ToDo.updateOne({ id, task, assignedTo });
      res.status(200).send('updated data');
    } catch (err) {
      console.log(err);
    }
  });

  app.post('/to-do/delete/:id', async (req, res) => {
    const id = req.params.id;
    try {
      const del = await ToDo.updateOne(
        { _id: id },
        { $set: { deleted: true } }
      );
      res.status(200).send('deleted todo');
    } catch (err) {
      console.log(err);
    }
    res.send('delete');
  });
};
