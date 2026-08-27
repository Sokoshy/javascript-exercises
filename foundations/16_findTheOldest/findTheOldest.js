const findTheOldest = function(people) {
  let oldestPerson = people[0];
  return people.reduce((oldest, current) => {
    if (getAge(oldest) < getAge(current)) {
      return current;
    }
    return oldest;
  }, oldestPerson)
};

// Do not edit below this line
module.exports = findTheOldest;

function getAge(person) {
  let yearToCalculateAge = person.yearOfDeath ? person.yearOfDeath : new Date().getFullYear();
  return yearToCalculateAge - person.yearOfBirth;
}
