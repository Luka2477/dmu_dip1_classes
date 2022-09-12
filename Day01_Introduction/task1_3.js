const randomNumbers = () => {
  const arr = [];

  for (let i = 0; i < 10; i++) {
    arr.push(Math.round(Math.random() * 10));
  }

  return arr;
};

const sort = (arr) => {
  for (let i = arr.length; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
};

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

const arr = randomNumbers();

sort(arr);

console.log(arr);

console.log(binarySearch(arr, 10));
