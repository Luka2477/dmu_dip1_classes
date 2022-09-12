// Modificer løsningen til opgave 1.3, så algoritmerne nu pakkes ind i funktioner med signaturerne:
// • bubbleSort(array)
const sort = (arr) => {
  const swap = (i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };

  for (let i = arr.length; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(j, j + 1);
      }
    }
  }
};

// • binarySearch(array, element)
const binarySearch = (arr, val) => {
  return binarySearchHelper(arr, val, 0, arr.length - 1);
};

const binarySearchHelper = (arr, val, start, end) => {
  const middle = Math.floor((start + end) / 2);

  if (arr[middle] === val) {
    return middle;
  } else if (start === end) {
    return -1;
  } else if (arr[middle] < val) {
    return binarySearchHelper(arr, val, middle + 1, end);
  } else {
    return binarySearchHelper(arr, val, start, middle - 1);
  }
};

// Gør desuden swap-delen af bubbleSort til en lokal funktion swap(i, j).

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
console.log(binarySearch(arr, 10));
