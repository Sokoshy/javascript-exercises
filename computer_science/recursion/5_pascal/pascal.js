const pascal = function(num) {
  const result = [];
  if(num === 1) {
    result.push(1);
  }else {
    const arrTemp = [...pascal(num - 1)];
    arrTemp.splice(0, 0, 0);
    arrTemp.push(0);

    for(let i = 0; i < arrTemp.length - 1; i++) {
      result.push((arrTemp[i] + arrTemp[i + 1]));
    }
  }

  return result;
};

// Do not edit below this line
module.exports = pascal;
