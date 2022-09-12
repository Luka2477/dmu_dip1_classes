// Programmer nedenstående funktioner, hvor array indeholder nogle tal:
// • max(array): returnerer det største element i arrayet.
const max = (array) => {
  let max = array[0];

  for (let el of array) {
    if (el > max) {
      max = el;
    }
  }

  return max;
};

// • contains(array, element): returnerer true hvis elementet findes i arrayet, ellers false
const contains = (array, element) => {
  for (el of array) {
    if (el === element) {
      return true;
    }
  }

  return false;
};

// • sum(array): returnerer summen af elementerne i arrayet.
const sum = (array) => {
  let sum = 0;

  for (let el of array) {
    sum += el;
  }

  return sum;
};

const array = [1, 13, 5, 26];
console.log(max(array));
console.log(contains(array, 7));
console.log(contains(array, 26));
console.log(sum(array));
