'use strict'

let objectUser = {
  name: "Jack",
  age: 18,
  isOnline: true,
  friends: ['Karl', 'Petty', 'Larry'],
  settings: {
    theme: 'dark',
    notifications: false
  }
};

let firstFriendName = objectUser.friends[0];
let notificationsEnabled =objectUser.settings.notifications;

console.log(`User’s name: ${objectUser.name}`);
console.log(`Number of friends: ${objectUser.friends.length}`);
console.log(`Name of first friend: ${firstFriendName}`);
console.log(`Theme is enabled: ${objectUser.settings.theme}`);
console.log(`Сongratulations: ${notificationsEnabled}`);
