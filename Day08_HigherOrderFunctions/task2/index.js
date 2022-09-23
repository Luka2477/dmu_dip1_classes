const compareSort = (compare) => {
  return (x) => x.sort(compare);
};

const strings = ["Lukas", "abba", "oliver", "mike"];
console.log(compareSort((a, b) => (a === b ? 0 : a < b ? -1 : 1))(strings));

const lenSort = (arr) => {
  return compareSort((a, b) => a.length - b.length)(arr);
};

console.log(lenSort(strings));

const ignoreCaseSort = (arr) => {
  return compareSort((a, b) =>
    a.toLowerCase() === b.toLowerCase()
      ? 0
      : a.toLowerCase() < b.toLowerCase()
      ? -1
      : 1
  )(arr);
};

console.log(ignoreCaseSort(strings));
