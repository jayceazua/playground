console.log('Starting App');
// fs module
const fs = require('fs');
const os = require('os');
const {addNote, add} = require('./notes');


console.log(`Results: ${add(3, 5)}`)

//
// var user = os.userInfo();
//
// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${age}`, (err) => {
//   if (err) {
//     console.log('Unable to write to file.');
//   };
// });
