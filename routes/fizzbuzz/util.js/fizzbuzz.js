const fizzBuzzCalculate = (amount, res) => {
  const ans = {};
  for (let i = 0; i < amount; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      ans[i] = 'FizzBuzz';
    } else if (i % 3 === 0) {
      ans[i] = 'Buzz';
    } else if (i % 5 === 0) ans[i] = 'Fizz';
    else {
      ans[i] = 'not any';
    }
  }
  res.json(ans);
};

// };

module.exports = {
  fizzBuzzCalculate,
};
