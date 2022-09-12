// Lav et array med tal.
const randomNumbers = () => {
  const arr = [];

  for (let i = 0; i < 10; i++) {
    arr.push(Math.round(Math.random() * 10));
  }

  return arr;
};

const arr = randomNumbers();

// Modificer dernæst max(), contains() og sum() funktionerne fra opgave 2.1, så de bliver metoder på dette
// array.
arr.max = function () {
  let max = this[0];

  for (let el of this) {
    if (el > max) {
      max = el;
    }
  }

  return max;
};

arr.contains = function (element) {
  for (el of this) {
    if (el === element) {
      return true;
    }
  }

  return false;
};

arr.sum = function () {
  let sum = 0;

  for (let el of this) {
    sum += el;
  }

  return sum;
};

console.log(arr.max());
console.log(arr.contains(7));
console.log(arr.contains(26));
console.log(arr.sum());
