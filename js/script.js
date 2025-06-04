'use strict'

// Get three numbers from the user (use + to round to a number)
const enterFirstNumber = +prompt('Write the First number');
const enterSecondNumber = +prompt('Write the Second number');
const enterThirdNumber = +prompt('Write the Third number');

// Calculate the sum and arithmetic mean
let sum = enterFirstNumber + enterSecondNumber + enterThirdNumber;
//const result = sum / 3;

//you can do it this way, but I think it would be wiser to use a separate const variable for storing
sum /= 3;

alert(`${sum} -  Arithmetic mean of the three numbers`);