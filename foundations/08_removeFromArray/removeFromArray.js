const removeFromArray = function(arr, ...num) {
  let result = arr.filter(item => !num.includes(item))
  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
