console.log('Starting notes.js');

const fs = require('fs');

let fetchNotes = () => {
  try {
    let notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (err) {
    return [];
  };
}

let saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var addNote = (title, body) => {
  let notes = fetchNotes();
  let note = {
    title,
    body
  };

  let duplicateNotes = notes.filter((note) => note.title === title);
  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note
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
