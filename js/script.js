'use strict'

const userName = prompt('What is your name?');
const userAge = Number(prompt('What is your age?'));
const isUserNotifications = confirm('Do you want to receive notifications?');

let objectSession = {
  name: userName,
  age: userAge,
  notifications: isUserNotifications,
  userId: 1234567890123456789n,
  lastLogin: null,
  nickname: undefined,
  favoriteTech: ['HTML', 'CSS', 'REACT'],
  settings:{
    theme:'light',
    autoLogin: false,
  }
}

alert(`Hi ${userName}! Your ID:${objectSession.userId}`);
console.log(objectSession);

console.log(`Name-type:  ${typeof(objectSession.name)}`);

console.log(`Age-type:  ${typeof(objectSession.age)}`);

console.log(`Notifications-type:  ${typeof(objectSession.notifications)}`);

console.log(`ID-type:  ${typeof(objectSession.userId)}`);

console.log(`Login-type:  ${typeof(objectSession.lastLogin)}`);

console.log(`NickName-type:  ${typeof(objectSession.nickname)}`);

console.log(`FavoriteTech-type:  ${typeof(objectSession.favoriteTech)}`);

console.log(`Settings-type:  ${typeof(objectSession.settings)}`);

console.log(`Settings.theme-type:  ${typeof(objectSession.settings.theme)}`);

console.log(`Settings.autoLogin-type:  ${typeof(objectSession.settings.autoLogin)}`);