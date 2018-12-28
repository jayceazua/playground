console.log('Starting App');
// fs module
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const {addNote, getAll, getNote, removeNote} = require('./notes');

const argv = yargs.argv
const command = argv._[0]

switch (command) {
  case 'add':
    let note = addNote(argv.title, argv.body);
    note ? console.log('Note created.') : console.log('Note title taken.');
    break;
  case 'list':
    getAll();
    break;
  case 'read':
    getNote(argv.title);
    break;
  case 'remove':
    let noteRemoved = removeNote(argv.title);
    noteRemoved ? console.log('Note was removed.') : console.log('Note not found.');
    break;
  default:
    console.log(`Command not recognized.`);
}
