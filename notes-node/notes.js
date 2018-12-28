console.log('Starting notes.js');

const fs = require('fs');

var addNote = (title, body) => {
  let notes = [];
  let note = {
    title,
    body
  };

  try {
    let notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);
  } catch (err) {};

  let duplicateNotes = notes.filter((note) => note.title === title);
  if (duplicateNotes.length === 0) {
    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
  };

};

function getAll() {
  console.log('Getting all notes');
};

function getNote(title) {
  console.log('Reading note', title);
};

function removeNote(title) {
  console.log('Removing note', title);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
