const sumAll = function(first, last) {
  if (!Number.isInteger(first) || !Number.isInteger(last) || first < 0 || last < 0) return "ERROR";
  if (first > last){
    let swap = first;
    first = last;
    last = swap;
  }

  let result = 0;
  for(let i = first; i <= last; i++) {
    result += i;
  }
  return result;
};

// Do not edit below this line
module.exports = sumAll;
