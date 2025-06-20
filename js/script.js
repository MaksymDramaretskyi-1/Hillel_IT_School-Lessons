'use strict'

const arr = [1, 2, 3, -1, -2, -3];

function filterNumbers(inputArray) {

  if (inputArray.length === 0) {
    return "Input array is empty";
  }

  const newArr = [];

  for (let i = 0; i < inputArray.length; i++) {
    const currentNumber = inputArray[i];

    if (currentNumber > 0) {
      newArr.push(currentNumber);
    }
  }

  if (newArr.length > 0) {
    return newArr;
  } else {
    return null;
  }
}

console.log(filterNumbers(arr));




