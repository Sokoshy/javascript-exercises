const fibonacci = function(number) {
  number = Number.parseInt(number);

  if (number < 0 || Number.isNaN(number)) {
    return "OOPS";
  }

  if (number === 0) {
    return number;
  }

  let firstPrev = 1;
  let secondPrev = 0;

  for (let i = 2; i <= number; i++) {
    let current = firstPrev + secondPrev;
    secondPrev = firstPrev;
    firstPrev = current;
  }

  return firstPrev;

  //recursive method
  //if (number <= 1) {
  //  return number;
  //}

  //return fibonacci(number - 1) + fibonacci(number - 2);
};

// Do not edit below this line
module.exports = fibonacci;
