const { fizzBuzzCalculate } = require('./util.js/fizzbuzz');

module.exports = app => {
  // fizzbuzz routes

  app.get('/fizzbuzz', (req, res) => {
    const amount = Number(req.body.amount);

    fizzBuzzCalculate(amount, res);
  });
};
