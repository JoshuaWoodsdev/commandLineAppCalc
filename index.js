var readlineSync = require('readline-sync');

// Wait for user's response.
var userName = readlineSync.question('May I have your name?');
console.log('Oh, ' + userName + ' welcome to the program');