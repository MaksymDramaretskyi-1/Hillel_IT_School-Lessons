'use strict'

const userEnterValue = +prompt("Enter value");

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789:';

const generateKey = (length, characters)=> {

  let resultRandom = '';

  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    // Generate a random index from 0 to characters.length - 1
    const randomIndexCharacters = Math.floor(Math.random() * charactersLength);
    //Add a random symbol
    resultRandom += characters[randomIndexCharacters];
  }

  return resultRandom;
}


const key = generateKey(userEnterValue, characters);
console.log(key);
