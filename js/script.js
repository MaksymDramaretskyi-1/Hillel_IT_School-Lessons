'use strict'

//#1 Print numbers from 20 to 30 with a step of 0.5
let str = "";
for (let i = 20; i <=30; i = i + 0.5){
  str += i + " ";
}
console.log(str);


//#2 Convert USD to UAH
const exchangeRate = 27;

for (let dollars = 10; dollars <= 100; dollars += 10){
  const sum = dollars * exchangeRate;
  console.log(sum);
}


//#3 Print all integers whose squares do not exceed a given number N
const integer = Number(prompt("Enter a number N:"));

for (let i = 1; i <= 100; i++) {
  if (i * i <= integer) {
    document.write(`${i} (square: ${i * i})<br>`);
  }
}


//#4 Check if a number is prime
const number = Number(prompt("Enter a positive integer:"));

if (!Number.isInteger(number) || number <= 1) {
  document.write("Number must be an integer greater than 1.");
} else {
  let isPrime = true;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    document.write(`${number} is a prime number.`);
  } else {
    document.write(`${number} is NOT a prime number.`);
  }
}


//#5 Check if a number is a power of 3
const num = +prompt("Enter a number:");
let current = 1;
let canBePowerOf3 = false;

while (current <= num) {
  if (current === num) {
    canBePowerOf3 = true;
    break;
  }
  current *= 3;
}

if (canBePowerOf3) {
  document.write(`${num} can be obtained as 3 raised to some power.`);
} else {
  document.write(`${num} cannot be obtained as 3 raised to any power.`);
}