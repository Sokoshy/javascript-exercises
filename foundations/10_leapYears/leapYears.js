const leapYears = function(years) {
  const isBisextile =
  (years % 4 === 0 && years % 100 === 0 && years % 400 === 0) ||
  (years % 4 === 0 && years % 100 !== 0);

return isBisextile;};

// Do not edit below this line
module.exports = leapYears;
