'use strict'

//Enter numbers from 10 to 20 on the side in one row.
let arryNumbers = [];
for (let i = 10; i <= 20; i++) {
  arryNumbers.push(i);
}
document.write("1# Enter numbers from 10 to 20 on the side in one row: " + "<br>" + arryNumbers.join(', '));


document.write("<br> <br>");


//Enter the squares of numbers from 10 to 20.
let arreNumbersSquares = [];
for (let i = 10; i <= 20; i++) {
  arreNumbersSquares.push(" " + i * i);
}
document.write("#2 Enter the squares of numbers from 10 to 20: " + "<br>" + arreNumbersSquares);


document.write("<br> <br>");


//Enter the multiplication table by 7.
document.write("#3 Enter the multiplication table by 7: " + "<br>");
for (let i = 1; i <= 10; i++) {
  const result = 7 * i;
  document.write(`${7} * ${i} =  ${result}<br>`);
}


document.write("<br> <br>");


let sum = 0;
//Find the sum of all whole numbers from 1 to 15.
for (let i = 1; i <= 15; i++) {
  sum += i;
}
document.write(`#4 Find the sum of all whole numbers from 1 to 15: <br> ${sum}`);


document.write("<br> <br>");


//Find all the possible integers from 15 to 35.
let value = 1;
for (let i = 15; i <= 35; i++) {
  value *= i;
}
document.write(`#5 product of all integers from 15 to 35: <br> ${value} <br>`);


document.write("<br> <br>");


//Find the arithmetic mean of all whole numbers from 1 to 500.
let sum2 = 0;
for (let i = 1; i <= 500; i++) {
  sum2 += i;
}
let average = sum2 / 500;
document.write(`#6 The arithmetic mean of all integers from 1 to 500: <br> ${average} <br>`);


document.write("<br> <br>");


let sum3 = 0;
for (let i = 30; i <= 80; i++) {
  if (i % 2 === 0) {
    sum3 += i;
  }
}
document.write(`#7 Print the sum of only even numbers in the range from 30 to 80: ${sum3}`);


document.write("<br> <br>");


//Output all numbers in the range from 100 to 200 that are multiples of 3.
let arryMultiples = [];
for (let i = 100; i <= 200; i++) {
  if (i % 3 === 0) {
    arryMultiples.push(i);
  }
}

document.write(`#8 Output all numbers in the range from 100 to 200 that are multiples of 3:<br> ${arryMultiples.join(', ')}`);


document.write("<br> <br>");


//Given a natural number, find and print all its divisors.
const enterNumberUser = Number(prompt("Enter a number or a digit"));
let arraySum = [];

for (let i = 1; i <= enterNumberUser; i++) {
  if (enterNumberUser % i === 0) {
    arraySum.push(i);
  }
}
document.write(`#9 Given a natural number, find and print all its divisors:<br>${arraySum.join(', ')}`);


document.write("<br> <br>");


//Calculate the number of guys in business
let evenDivisorCount = 0;
for (let i = 1; i <= enterNumberUser; i++) {
  if (enterNumberUser % i === 0 && i % 2 === 0) {
    evenDivisorCount++;
  }
}
document.write(`#10 Calculate the number of guys in business:<br>${evenDivisorCount}`);


document.write("<br> <br>");


//Find out the sum of these guys' money.
let evenSum = 0;
for (let i = 1; i <= enterNumberUser; i++) {
  if (enterNumberUser % i === 0 && i % 2 === 0) {
    evenSum += i;
  }
}
document.write(`#11 Find out the sum of these guys' money: <br> ${evenSum}`);


document.write("<br> <br>");


for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
     sum = i * j
    document.write(`${i} * ${j} = ${sum} <br>`);
  }
  document.write("<br> <br>");
}