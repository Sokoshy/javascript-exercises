const convertToCelsius = function(tempFahren) {
  return Math.round((tempFahren - 32) * (5 / 9) * 10) / 10;
};

const convertToFahrenheit = function(tempCels) {
   let fahrenheit = tempCels * 1.8 + 32;
  return Math.round(((tempCels * 1.8) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
