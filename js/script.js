'use strict'

/* The variable is declared as a const because the userName in this program will not change.
This variable stores the username */
const userName = prompt('What is your name?');

/*The variable is declared as a const because the userAges in this program will not change.
 This variable stores the user's age.*/
const userAge = Number(prompt('What is your age?'));

/* The variable is declared as a const because the isUserVerification in this program will not change.
This variable stores the true value that the user has verification.*/
const isUserVerification = confirm('Do you agree to participate?');

// Here I decided to add a condition and a variable to add a line when outputting to Alert
let eventStatus;
if (isUserVerification) {
  eventStatus = "participation confirmed";
} else {
  eventStatus = "participation denied";
}

const userId = BigInt("2343488459459934434");
let bonusCode = null;
let secondName;

let messageToAlert = `Hi, ${userName} \nYour age is ${userAge} \nYour status is ${eventStatus}`;
alert(messageToAlert);

console.log(`Name: ${userName}, type - ${typeof userName}`);
console.log(`Age: ${userAge}, type - ${typeof userAge}`);
console.log(`Verification: ${isUserVerification}, type - ${typeof isUserVerification}`);
console.log(`Id: ${userId}, type - ${typeof userId}`);
console.log(`BonusCode: ${bonusCode} type - ${typeof bonusCode}`);
console.log(`secondName: ${secondName} type - ${typeof secondName}`);
