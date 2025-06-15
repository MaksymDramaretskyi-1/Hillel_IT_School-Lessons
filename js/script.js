'use strict'


function padString(str, length, char, left = false) {

  if (typeof str !== 'string') {
    return 'Error: the first argument must be a string';
  }

  if (typeof length !== 'number') {
    return 'Error: the second argument must be a number';
  }

  if (char === undefined) {
    return 'Error: the third argument (character) is missing';
  }

  if (typeof char !== 'string' || char.length !== 1) {
    return 'Error: the third argument must be a string of exactly 1 character';
  }

  if (typeof left !== 'boolean' && left !== undefined) {
    return 'Error: the fourth argument must be a boolean (true or false)';
  }

  // If the desired length is shorter than the string, truncate
  if (length < str.length) {
    const result = str.substr(0, length);
    console.log(result);
    return result;
  }

  // Calculate how many characters to add
  const padLength = length - str.length;
  const padding = char.repeat(padLength);
  const result = left ? padding + str : str + padding;

  console.log(result);
  return result;
}

// Test examples
padString('hello', 8, '*');               // hello***
padString('hello', 6, '*', false);   // *hello
padString('hello', 2);                         // he
padString('test', 'wrong', '*');         // Error: the second argument must be a number
padString(123, 5, '*');                  // Error: the first argument must be a string
padString('hi', 5);                           // Error: the third argument (character) is missing
padString('hi', 5, 'pdt');              // Error: the third argument must be a string of exactly 1 character
