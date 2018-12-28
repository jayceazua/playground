console.log('Starting App');
// fs module
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');


const {addNote, getAll, getNote, removeNote} = require('./notes');

const argv = yargs.argv
var command = argv._[0]
// console.log(`Process: ${command}`);
// console.log('Yargs', argv);

switch (command) {
  case 'add':
    let note = addNote(argv.title, argv.body);
    if (note) {
      console.log('Note created.');
      console.log('--');
      console.log(`Title: ${note.title}`)
      console.log(`Body: ${note.body}`)
    } else {
      console.log('Note title taken.')
    }
    break;
  case 'list':
    getAll();
    break;
  case 'read':
    getNote(argv.title);
    break;
  case 'remove':
    removeNote(argv.title)
    break;
  default:
    console.log(`Command not recognized.`);
}
