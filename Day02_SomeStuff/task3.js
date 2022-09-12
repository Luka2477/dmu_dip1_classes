// Svarende til Java’s Comparator#compare(...) metode, skal der her laves nogle compare-funktioner, der
// tager to parametre, og returnerer -1, 0 eller 1 alt efter om den første parameter er mindre end, lig med
// eller større en den anden parameter.
// Der skal laves følgende compare-funktioner:
// • compare(s1, s2): Sammenligner de to tekststrenge leksikografisk.
const compare = (s1, s2) => {
  return s1 < s2 ? -1 : s1 > s2 ? 1 : 0;
};

// • compareLen(s1, s2): Sammenligner de to tekststrenge på deres længde
const compareLen = (s1, s2) => {
  return s1.length < s2.length ? -1 : s1.length > s2.length ? 1 : 0;
};

// • compareIgnoreCase(s1, s2): Sammenligner to tekststrenge leksikografisk uden at tage hensyn til
// store og små bogstaver
const compareIgnoreCase = (s1, s2) => {
  return s1.toLowerCase() < s2.toLowerCase()
    ? -1
    : s1.toLowerCase() > s2.toLowerCase()
    ? 1
    : 0;
};

// Modificer dernæst bubbleSort funktionen fra opgave 2.2, så den nu får en compare-funktion som ekstra
// parameter. Sammenligningen i bubbleSort funktionen skal nu ske med denne compare-funktion.
const sort = (arr) => {
  const swap = (i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };

  const compare = (i, j) => {
    if (arr[i] > arr[j]) {
      swap(i, j);
    }
  };

  for (let i = arr.length; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      compare(j, j + 1);
    }
  }
};

const randomNumbers = () => {
  const arr = [];

  for (let i = 0; i < 10; i++) {
    arr.push(Math.round(Math.random() * 10));
  }

  return arr;
};

const arr = randomNumbers();
sort(arr);
console.log(arr);
