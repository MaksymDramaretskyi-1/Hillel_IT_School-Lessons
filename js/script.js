'use strict'

//1
function averageOfNumbers(arr) {
  const numbers = arr.filter(item => typeof item === 'number');
  if (numbers.length === 0) return null;
  const sum = numbers.reduce((acc, val) => acc + val, 0);
  return sum / numbers.length;
}

const mixedArray = [1, "Maxim", 5, null, 10, true];
console.log(averageOfNumbers(mixedArray));


//2
function doMath(x, znak, y) {
  switch (znak) {
    case '+': return x + y;
    case '-': return x - y;
    case '*': return x * y;
    case '/': return y !== 0 ? x / y : 'Divided by 0';
    case '%': return x % y;
    case '^': return Math.pow(x, y);
    default: return 'Unfaithful sign';
  }
}
console.log(doMath(5, '+', 3));
console.log(doMath(2, '^', 3));


//3
function fillArray() {
  const rows = +prompt("Enter number of rows:");
  const cols = +prompt("Enter the number of people:");
  const result = [];

  for (let i = 0; i < rows; i++) {
    result[i] = [];
    for (let j = 0; j < cols; j++) {
      result[i][j] = prompt(`Enter value for [${i}][${j}]:`);
    }
  }
  return result;
}

// const myArray = fillArray();
// console.log(myArray);


//4
function removeChars(str, charsToRemove) {
  let result = '';
  for (let char of str) {
    if (!charsToRemove.includes(char)) {
      result += char;
    }
  }
  return result;
}

console.log(removeChars("hello world", ['l', 'd'])); // "heo wor"
