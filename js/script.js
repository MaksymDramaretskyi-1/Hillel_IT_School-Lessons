'use strict'

/* The variable is declared as a const because the userName in this program will not change.
This variable stores the username */
const userName = "Jack";

/*The variable is declared as a const because the userAges in this program will not change.
 This variable stores the user's age.*/
const userAge = 26;

/* The variable is declared as a const because the isUserVerification in this program will not change.
This variable stores the true value that the user has verification.*/
const isUserVerification = true;

/* The registration date is done once for one user and therefore is const
This variable stores the user registration date.*/
const registrationDate = "2024-05-28";

/* This program assumes that the user's card number will not change, so a const is used.
This variable stores the user's card number. */
const userCardNumber = 5433_3455_6785_9898n;

/* This variable does not have a value now, but it may appear in the future.
 That is why the variable is declared here through the let */
let userPromoCode = null;

/* There is currently no backup name for this undefined,
  but in the future we can write something there, so the variable is declared through let */
let userBackupName;

/* I already have some bonuses and I plan to change the bonuses during the program,
so the variable is declared with let */
let userBonusAccount =  789;

// Console output
console.log(`User ${userName}: Age ${userAge} years. Has bonuses ${userBonusAccount}`);

// || will work if the left value is "false" (false, 0, empty string, null, undefined, NaN).
console.log(`Verification: ${isUserVerification}. Promo code: ${userPromoCode || "none"}`);

console.log(`The last update of the map was ${registrationDate}. Map number ${userCardNumber}`);

//Check the data types.
console.log(`This console line shows the type - ${typeof userName}`);
console.log(`This console line shows the type - ${typeof userAge}`);
console.log(`This console line shows the type - ${typeof isUserVerification}`);
console.log(`This console line shows the type - ${typeof registrationDate}`);
console.log(`This console line shows the type - ${typeof userCardNumber}`);
console.log(`This console line shows the type - ${typeof userPromoCode}`);
console.log(`This console line shows the type - ${typeof userBackupName}`);
console.log(`This console line shows the type - ${typeof userBonusAccount}`);