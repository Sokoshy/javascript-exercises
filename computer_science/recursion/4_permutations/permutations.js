const permutations = function(arr, index = 0, permutresult = []) {
  if(arr.length === index) {
    permutresult.push([...arr]);
    return permutresult;
  }
  
  for(let i = index; i < arr.length; i++) {
    [arr[index], arr[i]] = [arr[i], arr[index]];
    permutations(arr, index + 1, permutresult);
    [arr[index], arr[i]] = [arr[i], arr[index]];
  }

  return permutresult;
};
  
// Do not edit below this line
module.exports = permutations;
