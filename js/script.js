'use strict'

const userEnterBirthday = prompt("Enter your birthday");
const userEnterCity = prompt("Enter your city");
const userEnterFavSport = prompt("Enter your favorite sport");

let currentYearValue = 2025;
let userCountryValue = null;
let userFavSportValue = null;
let userValueCount = null

if (userEnterBirthday === null || userEnterBirthday === "" || userEnterBirthday < 1925) {
  userValueCount = "It's a pity that you didn't want to enter your year of birth";
} else {
  userValueCount = currentYearValue - Number(userEnterBirthday);
}

if(userEnterCity === "Kiev" || userEnterCity === "kiev"){
  userCountryValue = "You live in the capital of Ukraine";
} else if (userEnterCity === "Washington" || userEnterCity === "washington") {
  userCountryValue = "You live in the capital of USA";
} else if (userEnterCity === "London" || userEnterCity === "london") {
  userCountryValue = "You live in the capital of England";
} else if(userEnterCity === null || userEnterCity === ""){
  userCountryValue = "It's a pity that you didn't want to enter your city";
} else {
  userCountryValue = `You live in ${userEnterCity}`
}


if(userEnterFavSport === "Box" || userEnterFavSport === "box"){
  userFavSportValue = "Cool! Do you want to be Mike Tyson?"
}else if (userEnterFavSport === "Tennis" || userEnterFavSport === "tennis"){
  userFavSportValue = "Cool! Do you want to be Bjorn Borg?";
}else if (userEnterFavSport === "Basketball" || userEnterFavSport === "basketball"){
  userFavSportValue = "Cool! Do you want to be Michael Jordan?"
}else if (userEnterFavSport === null || userEnterFavSport === ""){
  userFavSportValue = "It's a pity that you didn't want to include your favorite sport.";
}else {
  userFavSportValue = `Your favorite sport is ${userEnterFavSport}`
}

alert(`${userValueCount}\n${userCountryValue}\n${userFavSportValue}`);