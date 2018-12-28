console.log('Starting App');
// fs module
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const {addNote, getAll, getNote, removeNote, logNote} = require('./notes');

const argv = yargs.argv
const command = argv._[0]

switch (command) {
  case 'add':
    var note = addNote(argv.title, argv.body);
    if(note) {
      console.log('Note created.');
      logNote(note);
    } else {
      console.log('Note title taken.')
    }
    break;
  case 'list':
    getAll();
    break;
  case 'read':
    var note = getNote(argv.title);
    if (note) {
      console.log('Note found.')
      logNote(note);
    } else {
      console.log('Note note found.');
    }
    break;
  case 'remove':
    var noteRemoved = removeNote(argv.title);
    noteRemoved ? console.log('Note was removed.') : console.log('Note not found.');
    break;
  default:
    console.log(`Command not recognized.`);
}
