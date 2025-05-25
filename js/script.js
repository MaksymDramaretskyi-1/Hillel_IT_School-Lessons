'use strict'

let userName = prompt('Please, enter your name!');
let userAnswer;

if (userName){
    userAnswer = confirm(`${userName }! Do you want to see the greeting?`)
} else {
    userAnswer = confirm(`Do you want to see the greeting?`)
}

if (userAnswer){
    alert(`Welcome! ${userAnswer}!`)
}
