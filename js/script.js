'use strict'

let userName = prompt('What is your name?');

if (userName === null || userName === ""  ) {
    alert("You have not entered your name.");
} else {
    alert(`Hello, ${userName}! How are you?`);
}