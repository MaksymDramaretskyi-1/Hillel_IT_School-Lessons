'use strict'

// Get three numbers from the user (use + to round to a number)
const enterFirstNumber = +prompt('Write the First number');
const enterSecondNumber = +prompt('Write the Second number');
const enterThirdNumber = +prompt('Write the Third number');

// Calculate the sum and arithmetic mean
const sum = enterFirstNumber + enterSecondNumber + enterThirdNumber;
const result = sum / 3;

alert(`${result} -  Arithmetic mean of the three numbers`);